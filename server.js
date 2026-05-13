const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 9000;
const JWT_SECRET = process.env.JWT_SECRET || 'audit-learning-secret-key-2024';

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const PROGRESS_DIR = path.join(DATA_DIR, 'progress');

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}
if (!fs.existsSync(PROGRESS_DIR)) {
    fs.mkdirSync(PROGRESS_DIR, { recursive: true });
}

function loadUsers() {
    if (fs.existsSync(USERS_FILE)) {
        return JSON.parse(fs.readFileSync(USERS_FILE, 'utf8'));
    }
    return {};
}

function saveUsers(users) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

function getUserProgressDir(userId) {
    return path.join(PROGRESS_DIR, `user_${userId}.json`);
}

function loadUserData(userId) {
    const filePath = getUserProgressDir(userId);
    if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    return {
        progress: [],
        assessment: null,
        gameData: {
            level: 1,
            experience: 0,
            coins: 100,
            outfit: 'default',
            skills: {},
            achievements: [],
            badges: [],
            settings: {},
            completedChapters: [],
            chapterStars: {},
            purchasedItems: []
        }
    };
}

function saveUserData(userId, data) {
    const filePath = getUserProgressDir(userId);
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
}

app.post('/api/auth/register', async (req, res) => {
    try {
        const { username, password, email } = req.body;

        if (!username || !password) {
            return res.status(400).json({ success: false, message: '用户名和密码不能为空' });
        }

        if (password.length < 6) {
            return res.status(400).json({ success: false, message: '密码长度至少为6位' });
        }

        const users = loadUsers();

        if (users[username]) {
            const suggestion = username + '_' + Math.floor(Math.random() * 9999);
            return res.status(409).json({
                success: false,
                message: '用户名已存在，建议修改',
                suggestion: suggestion
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        
        users[username] = {
            password: hashedPassword,
            email: email || null,
            createdAt: new Date().toISOString(),
            lastLogin: new Date().toISOString()
        };
        saveUsers(users);

        const userId = username;
        saveUserData(userId, loadUserData(userId));

        const token = jwt.sign(
            { userId: username, username },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            message: '注册成功',
            token,
            user: { id: username, username }
        });
    } catch (error) {
        console.error('注册错误:', error);
        res.status(500).json({ success: false, message: '服务器错误' });
    }
});

app.post('/api/auth/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ success: false, message: '用户名和密码不能为空' });
        }

        const users = loadUsers();
        const user = users[username];

        if (!user) {
            return res.status(401).json({ success: false, message: '用户名或密码错误' });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(401).json({ success: false, message: '用户名或密码错误' });
        }

        user.lastLogin = new Date().toISOString();
        saveUsers(users);

        const userData = loadUserData(username);

        const token = jwt.sign(
            { userId: username, username: user.username },
            JWT_SECRET,
            { expiresIn: '7d' }
        );

        res.json({
            success: true,
            message: '登录成功',
            token,
            user: { id: username, username: user.username },
            progress: userData.progress,
            assessment: userData.assessment,
            gameData: userData.gameData
        });
    } catch (error) {
        console.error('登录错误:', error);
        res.status(500).json({ success: false, message: '服务器错误' });
    }
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, message: '未授权访问' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ success: false, message: '令牌无效或已过期' });
        }
        req.user = user;
        next();
    });
}

app.post('/api/progress/save', authenticateToken, (req, res) => {
    try {
        const { chapterId, score, stars, completed, hintsUsed, timeUsed } = req.body;
        const userId = req.user.userId;

        const userData = loadUserData(userId);
        
        const progressIndex = userData.progress.findIndex(p => p.chapterId === chapterId);
        const progressData = {
            chapterId,
            score,
            stars,
            completed,
            completedAt: completed ? new Date().toISOString() : null,
            hintsUsed: hintsUsed || 0,
            timeUsed: timeUsed || 0
        };

        if (progressIndex >= 0) {
            userData.progress[progressIndex] = progressData;
        } else {
            userData.progress.push(progressData);
        }

        saveUserData(userId, userData);

        res.json({ success: true, message: '进度已保存' });
    } catch (error) {
        console.error('保存进度错误:', error);
        res.status(500).json({ success: false, message: '服务器错误' });
    }
});

app.get('/api/progress', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.userId;
        const userData = loadUserData(userId);
        res.json({ success: true, progress: userData.progress });
    } catch (error) {
        console.error('获取进度错误:', error);
        res.status(500).json({ success: false, message: '服务器错误' });
    }
});

app.post('/api/assessment/save', authenticateToken, (req, res) => {
    try {
        const { totalScore, ageRange, identity, answers, learningPlan, studyMaterials } = req.body;
        const userId = req.user.userId;

        const userData = loadUserData(userId);
        userData.assessment = {
            totalScore,
            ageRange,
            identity,
            answers,
            learningPlan,
            studyMaterials,
            assessmentDate: new Date().toISOString()
        };

        saveUserData(userId, userData);

        res.json({ success: true, message: '评估结果已保存' });
    } catch (error) {
        console.error('保存评估错误:', error);
        res.status(500).json({ success: false, message: '服务器错误' });
    }
});

app.get('/api/assessment', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.userId;
        const userData = loadUserData(userId);
        res.json({ success: true, assessment: userData.assessment });
    } catch (error) {
        console.error('获取评估错误:', error);
        res.status(500).json({ success: false, message: '服务器错误' });
    }
});

app.post('/api/game/save', authenticateToken, (req, res) => {
    try {
        const { level, experience, coins, outfit, skills, achievements, badges, settings, completedChapters, chapterStars, purchasedItems } = req.body;
        const userId = req.user.userId;

        const userData = loadUserData(userId);
        userData.gameData = {
            level: level || userData.gameData.level || 1,
            experience: experience || userData.gameData.experience || 0,
            coins: coins || userData.gameData.coins || 100,
            outfit: outfit || userData.gameData.outfit || 'default',
            skills: skills || userData.gameData.skills || {},
            achievements: achievements || userData.gameData.achievements || [],
            badges: badges || userData.gameData.badges || [],
            settings: settings || userData.gameData.settings || {},
            completedChapters: completedChapters || userData.gameData.completedChapters || [],
            chapterStars: chapterStars || userData.gameData.chapterStars || {},
            purchasedItems: purchasedItems || userData.gameData.purchasedItems || [],
            lastUpdated: new Date().toISOString()
        };

        saveUserData(userId, userData);

        res.json({ success: true, message: '游戏数据已保存' });
    } catch (error) {
        console.error('保存游戏数据错误:', error);
        res.status(500).json({ success: false, message: '服务器错误' });
    }
});

app.get('/api/game', authenticateToken, async (req, res) => {
    try {
        const userId = req.user.userId;
        const userData = loadUserData(userId);
        res.json({ success: true, gameData: userData.gameData });
    } catch (error) {
        console.error('获取游戏数据错误:', error);
        res.status(500).json({ success: false, message: '服务器错误' });
    }
});

app.get('/api/user/check', authenticateToken, async (req, res) => {
    try {
        const username = req.user.username;
        const users = loadUsers();

        if (users[username]) {
            res.json({ success: true, exists: true, username });
        } else {
            res.json({ success: false, exists: false, message: '用户不存在' });
        }
    } catch (error) {
        console.error('检查用户错误:', error);
        res.status(500).json({ success: false, message: '服务器错误' });
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log('');
    console.log('==========================================');
    console.log('   审计学习系统 - 服务器启动成功！');
    console.log('==========================================');
    console.log('');
    console.log('   访问地址: http://localhost:' + PORT);
    console.log('');
    console.log('   按 Ctrl+C 可停止服务器');
    console.log('');
    console.log('==========================================');
    console.log('');
});

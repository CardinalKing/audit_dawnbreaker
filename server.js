const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const https = require('https');

const app = express();
const PORT = process.env.PORT || 9000;
const JWT_SECRET = process.env.JWT_SECRET || 'audit-learning-secret-key-2024';
const KNOWLEDGE_BASE_FILE = path.join(__dirname, 'knowledge-base.json');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

let auditKnowledgeBase = [
    {
        coreKeywords: ['财务申报', '申报流程', '税务申报', '增值税申报', '企业所得税申报', '申报注意事项'],
        semanticTags: ['申报步骤', '申报准备', '申报填报', '税款缴纳', '申报归档', '注意事项'],
        answer: '财务申报是企业/个人按税法规定向税务机关报送涉税数据并缴税的法定义务，核心流程及注意事项如下：\n1. 准备阶段：完成期末结账，核对财务数据（收入/成本/税金）、发票明细（销项/进项），确保"合同-发票-资金-物流"四流一致；\n2. 填报阶段：登录电子税务局，按税种填报申报表（增值税主表+附表、企业所得税预缴表等），核对减免税政策适用情况；\n3. 校验阶段：系统自动校验数据逻辑，人工复核申报表与财务报表一致性，修正异常提示；\n4. 缴款阶段：通过三方协议、银行柜台或第三方支付缴纳税款，获取《税收完税证明》；\n5. 归档阶段：留存申报表、完税证明、合同等资料，纸质装订+电子备份，保存期不少于10年。\n\n2026年新政要点：小规模纳税人征收率统一为3%，增值税表样"劳务"栏次口径扩展，电子凭证可直接归档。'
    },
    {
        coreKeywords: ['审计抽样', '统计抽样', '非统计抽样', '抽样风险', '样本量'],
        semanticTags: ['抽样方法', '抽样流程', '抽样应用', '误差控制'],
        answer: '审计抽样是从审计对象总体中选取样本测试并推断总体特征的方法：\n1. 分类：统计抽样（随机/系统/分层抽样，可量化风险）、非统计抽样（判断抽样，依赖专业经验）；\n2. 流程：定义总体→确定抽样单元→设定可容忍误差→选取样本→实施程序→评价结果；\n3. 样本量确定：受可容忍误差、可接受风险、预计总体误差、总体规模影响；\n4. 风险控制：抽样风险（信赖过度/不足、误受/误拒）需通过样本量调整规避，非抽样风险需规范审计程序。'
    },
    {
        coreKeywords: ['财务造假', '造假识别', '舞弊审计', '虚假收入', '资产造假'],
        semanticTags: ['造假手段', '异常迹象', '核查方法', '风险防控'],
        answer: '财务造假是故意歪曲财务报表的违规行为：\n1. 常见手段：虚增收入（虚构合同/提前确认）、虚减成本（费用资本化）、操纵现金流（票据贴现）、资产造假（虚增存货）、隐匿负债（违规担保）；\n2. 识别迹象：毛利率异常高于行业、现金流与净利润背离、高管密集减持、频繁更换审计机构；\n3. 核查方法：财务指标勾稽分析、行业对标、第三方数据验证（供应链/能耗）、内部控制测试。'
    },
    {
        coreKeywords: ['审计数据分析'],
        semanticTags: ['定义与概念'],
        answer: '审计数据分析是一个结构化的流程，通常包括计划、获取与整理数据、评价数据相关性/可靠性、执行分析、评价和应对结果等步骤。它使得注册会计师有能力分析或测试全量交易数据，以识别异常并进行更深层次、多维度的分析。'
    },
    {
        coreKeywords: ['审计流程'],
        semanticTags: ['定义与概念'],
        answer: '广义的审计流程是指审计人员从接受审计项目开始，到审计工作结束的全部过程，一般可划分为三个阶段：审计准备、审计实施和审计终结阶段。一个典型的审计时间线包括计划、风险评估、风险应对和报告等阶段。'
    },
    {
        coreKeywords: ['审计目标的历史演变'],
        semanticTags: ['定义与概念'],
        answer: '审计目标的历史演变，是指审计在社会经济发展驱动下，其核心功能与核心使命所经历的三个递进式发展阶段。其演进路径可明确定义为：从早期以查错防弊为核心的单一监督目标，演进到以验证财务报表真实性和公允性为核心的社会鉴证目标，再发展为当前强调两者并重的、以查错防弊与财务报表验证并重为核心的现代综合审计目标体系。'
    },
    {
        coreKeywords: ['审计证据的类型'],
        semanticTags: ['按照表现形式分类', '按照来源分类'],
        answer: '审计证据可以按照以下两种类型来分类：\n1.按表现形式分：\n①实物证据：通过观察和检查实物资产获取的证据；\n②书面证据：通过检查、计算、分析性复核等程序获取的书面资料证据；\n③口头证据：通过询问获得的答复；\n④环境证据：通过观察、调查事实获取的关于被审计单位内部控制、管理层素质等方面的证据。\n2.按证据来源分类：\n①内部证据：由被审计单位内部人员编制的证据；\n②外部证据：由被审计单位以外的人编制的证据。'
    }
];

function loadKnowledgeBase() {
    try {
        if (fs.existsSync(KNOWLEDGE_BASE_FILE)) {
            const data = fs.readFileSync(KNOWLEDGE_BASE_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('加载知识库失败:', error);
    }
    return null;
}

function saveKnowledgeBase(data) {
    try {
        fs.writeFileSync(KNOWLEDGE_BASE_FILE, JSON.stringify(data, null, 2), 'utf8');
        console.log(`[${new Date().toISOString()}] 知识库已保存到文件，共 ${data.length} 条记录`);
    } catch (error) {
        console.error('保存知识库失败:', error);
    }
}

const loadedKB = loadKnowledgeBase();
if (loadedKB && loadedKB.length > 0) {
    auditKnowledgeBase = loadedKB;
    console.log(`[${new Date().toISOString()}] 已从文件加载知识库，共 ${auditKnowledgeBase.length} 条记录`);
}

function extractKeywords(question) {
    const stopWords = ["如何", "怎么", "什么", "为什么", "通过", "出来", "的", "了", "是", "在", "和", "及", "与", "等", "呢", "吗", "请问", "我想知道", "介绍一下", "解释一下", "说一下", "谈谈", "介绍", "有关", "相关", "哪个", "哪些", "怎样", "何为", "一下", "能给", "能说"];
    const questionLower = question.trim().toLowerCase()
        .replace(/[？?。!！]/g, '')
        .replace(/^(什么是|什么叫|何为|解释一下|介绍一下|请问|我想知道|说一下|谈谈)\s*/g, '');
    
    let coreKeywords = [];
    let semanticTags = [];
    
    const patterns = [
        /^(.+?)(是什么?|的定义|的概念|的含义|有哪些?|有什么?|的方法|的流程|的步骤)$/,
        /^(如何|怎么|怎样)(.+?)(的|方法|流程|步骤)$/
    ];
    
    for (const pattern of patterns) {
        const match = questionLower.match(pattern);
        if (match && match[1]) {
            const extracted = match[1].trim();
            if (!stopWords.includes(extracted)) {
                coreKeywords.push(extracted);
            }
        }
    }
    
    const wordPattern = /[\u4e00-\u9fa5]{2,}|[a-zA-Z]+/g;
    const words = questionLower.match(wordPattern) || [];
    for (const word of words) {
        if (!stopWords.includes(word) && word.length >= 2 && !coreKeywords.includes(word)) {
            semanticTags.push(word);
        }
    }
    
    return { coreKeywords: [...new Set(coreKeywords)], semanticTags: [...new Set(semanticTags)] };
}

function fuzzyMatchKnowledge(question) {
    const { coreKeywords, semanticTags } = extractKeywords(question);
    console.log(`[${new Date().toISOString()}] 提取关键词:`, { coreKeywords, semanticTags });
    
    if (coreKeywords.length === 0 && semanticTags.length === 0) {
        return null;
    }
    
    let bestMatch = null;
    let highestScore = 0;
    
    for (const item of auditKnowledgeBase) {
        let score = 0;
        
        for (const keyword of coreKeywords) {
            if (item.coreKeywords.some(k => k.includes(keyword) || keyword.includes(k))) {
                score += 3;
            }
            if (item.semanticTags.some(t => t.includes(keyword) || keyword.includes(t))) {
                score += 2;
            }
            if (item.answer.includes(keyword)) {
                score += 1;
            }
        }
        
        for (const tag of semanticTags) {
            if (item.coreKeywords.some(k => k.includes(tag) || tag.includes(k))) {
                score += 2;
            }
            if (item.semanticTags.some(t => t.includes(tag) || tag.includes(t))) {
                score += 1;
            }
        }
        
        if (score > highestScore && score >= 2) {
            highestScore = score;
            bestMatch = item.answer;
        }
    }
    
    if (bestMatch) {
        console.log(`[${new Date().toISOString()}] 知识库匹配成功，得分: ${highestScore}`);
    }
    
    return bestMatch;
}

function beautifyAnswer(answer) {
    return answer
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n/g, '<br>');
}

function addToKnowledgeBase(question, answer) {
    const { coreKeywords, semanticTags } = extractKeywords(question);
    const existingIndex = auditKnowledgeBase.findIndex(item => 
        item.coreKeywords.some(k => coreKeywords.includes(k))
    );
    
    if (existingIndex === -1) {
        auditKnowledgeBase.push({
            coreKeywords,
            semanticTags,
            answer: answer.replace(/<br>/g, '\n').replace(/<strong>(.+?)<\/strong>/g, '**$1**')
        });
        saveKnowledgeBase(auditKnowledgeBase);
    }
}

app.post('/api/ask-ai', async (req, res) => {
    const { question, requireWebSearch = false } = req.body;

    if (!requireWebSearch) {
        const matchedAnswer = fuzzyMatchKnowledge(question);
        if (matchedAnswer) {
            return res.json({
                source: 'knowledge_base',
                answer: matchedAnswer
            });
        }
    }

    console.log(`[${new Date().toISOString()}] 知识库未命中，正在调用DeepSeek API: "${question}"`);

    const deepseekApiKey = process.env.DEEPSEEK_API_KEY || 'sk-40e1c7c64924497896ce944d2b4ca7ff';
    if (!deepseekApiKey) {
        return res.status(500).json({
            source: 'error',
            answer: 'DeepSeek API Key 未配置。'
        });
    }

    const postData = JSON.stringify({
        model: 'deepseek-chat',
        messages: [
            {
                role: 'system',
                content: '你是一位顶尖的审计与财务专家。请根据用户问题，提供专业、准确的回答。回答需严谨、结构清晰，重点突出审计程序、风险点和合规要求。'
            },
            { role: 'user', content: question }
        ],
        temperature: 0.7,
        max_tokens: 1000,
        stream: false
    });

    const options = {
        hostname: 'api.deepseek.com',
        path: '/v1/chat/completions',
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${deepseekApiKey}`,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(postData)
        },
        timeout: 60000
    };

    const request = https.request(options, (apiRes) => {
        let data = '';
        apiRes.on('data', (chunk) => {
            data += chunk;
        });
        apiRes.on('end', () => {
            try {
                const response = JSON.parse(data);
                const aiAnswer = beautifyAnswer(response.choices[0].message.content);
                console.log(`[${new Date().toISOString()}] DeepSeek 回答生成成功。`);
                addToKnowledgeBase(question, aiAnswer);
                res.json({
                    source: 'deepseek_web_search',
                    answer: aiAnswer
                });
            } catch (error) {
                console.error('解析DeepSeek响应失败：', error);
                res.status(500).json({
                    source: 'error',
                    answer: `抱歉，AI助手在处理您的问题时遇到了错误。\n\n**当前问题的备选思路：** ${question} 通常涉及审计程序、风险识别和合规性检查，建议查阅《中国注册会计师审计准则》或相关财税法规获取官方信息。`
                });
            }
        });
    });

    request.on('error', (error) => {
        console.error('调用DeepSeek API失败：', error.message);
        res.status(500).json({
            source: 'error',
            answer: `抱歉，AI助手在处理您的问题时遇到了网络或服务异常。\n\n**建议您：**\n1. 检查网络连接。\n2. 稍后重试。\n3. 如果问题持续存在，可能是由于API服务临时不可用。\n\n**当前问题的备选思路：** ${question} 通常涉及审计程序、风险识别和合规性检查，建议查阅《中国注册会计师审计准则》或相关财税法规获取官方信息。`
        });
    });

    request.write(postData);
    request.end();
});

app.get('/api/knowledge-count', (req, res) => {
    res.json({ count: auditKnowledgeBase.length });
});

const USERS_FILE = path.join(__dirname, 'users.json');
const PROGRESS_DIR = path.join(__dirname, 'data', 'progress');

function loadUsers() {
    try {
        if (fs.existsSync(USERS_FILE)) {
            const data = fs.readFileSync(USERS_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('加载用户数据失败:', error);
    }
    return {};
}

function saveUsers(users) {
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
    } catch (error) {
        console.error('保存用户数据失败:', error);
    }
}

app.post('/api/auth/register', async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.json({ success: false, message: '用户名和密码不能为空' });
    }
    
    const users = loadUsers();
    
    if (users[username]) {
        return res.json({ success: false, message: '用户名已存在' });
    }
    
    const hashedPassword = await bcrypt.hash(password, 10);
    users[username] = { password: hashedPassword };
    saveUsers(users);
    
    res.json({ success: true, message: '注册成功' });
});

app.post('/api/auth/login', async (req, res) => {
    const { username, password } = req.body;
    
    if (!username || !password) {
        return res.json({ success: false, message: '用户名和密码不能为空' });
    }
    
    const users = loadUsers();
    const user = users[username];
    
    if (!user) {
        return res.json({ success: false, message: '用户名或密码错误' });
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password);
    
    if (!isPasswordValid) {
        return res.json({ success: false, message: '用户名或密码错误' });
    }
    
    const token = jwt.sign({ username }, JWT_SECRET, { expiresIn: '24h' });
    
    res.json({ success: true, token, user: { username } });
});

function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ success: false, message: '未授权' });
    }
    
    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ success: false, message: '无效的令牌' });
        }
        req.user = user;
        next();
    });
}

app.get('/api/game/data', (req, res) => {
    res.json(gameData);
});

app.get('/api/assessment/data', (req, res) => {
    res.json(assessmentData);
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

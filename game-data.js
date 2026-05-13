// ====================== 88888.html 完整数据 ======================

// 章节数据
const gameChapters = [
    { id: 'tutorial', title: '新手引导', description: '零门槛入门，了解审计基本概念', difficulty: '简单', unlocked: true, stars: 0 },
    { id: 'chapter1', title: '基础概念秘境', description: '审计术语、三方关系、审计要素', difficulty: '简单', unlocked: false, stars: 0 },
    { id: 'chapter2', title: '职业道德试炼场', description: '独立性、保密原则、客观公正', difficulty: '中等', unlocked: false, stars: 0 },
    { id: 'chapter3', title: '凭证账簿侦查线', description: '发票识别、凭证核验、附件匹配', difficulty: '中等', unlocked: false, stars: 0 },
    { id: 'chapter4', title: '审计流程迷宫局', description: '审计全流程、风险评估、控制测试', difficulty: '较难', unlocked: false, stars: 0 },
    { id: 'chapter5', title: '萌新错报捕捉营', description: '收入虚增、费用跨期、资产高估', difficulty: '较难', unlocked: false, stars: 0 }
];

// 题目数据 - 包含所有原始题目和新互动题目
const gameQuestions = {
    tutorial: [
        // 判断题保持不变
        { id: 1, type: 'truefalse', title: '审计是一种独立的经济监督活动。', correctAnswer: true, explanation: '审计的本质是一种独立的经济监督活动，通过对经济活动的合法性、合规性进行审查，起到监督和评价作用。' },
        { id: 2, type: 'truefalse', title: '内部审计和外部审计的目标完全相同。', correctAnswer: false, explanation: '内部审计主要服务于组织内部管理，目标是为内部管理层提供审计信息；外部审计（独立审计）主要服务于财务报表使用者，目标是对财务报表的合法性、公允性发表审计意见。' },
        { id: 3, type: 'truefalse', title: '审计人员需要保持独立性和客观性。', correctAnswer: true, explanation: '独立性和客观性是审计人员的基本职业道德要求。独立性要求审计人员在形式上和实质上保持独立；客观性要求审计人员对审计事项的判断基于审计证据，不受个人偏见影响。' }
    ],
    chapter1: [
        // 连线题：审计要素与定义匹配
        { 
            id: 101, 
            type: 'match', 
            title: '请将审计要素与其定义连线匹配：',
            explanation: '审计三要素包括业务约定书、审计证据和审计报告，这是开展审计工作的基础。',
            pairs: [
                { left: '审计业务约定书', right: '明确审计范围和责任的书面协议' },
                { left: '审计证据', right: '用于支持审计结论的事实材料' },
                { left: '审计报告', right: '审计结果的正式书面文件' }
            ]
        },
        // 选择题保持
        { id: 102, type: 'multiplechoice', title: '下列哪项不属于审计证据的特征？', options: ['A. 充分性', 'B. 适当性', 'C. 可靠性', 'D. 主观性'], correctAnswer: 3, explanation: '审计证据应具备充分性（数量足够）和适当性（质量相关）两个基本特征。' },
        { id: 103, type: 'multiplechoice', title: '审计要素不包括以下哪项？', options: ['A. 审计业务约定书', 'B. 审计证据', 'C. 审计报告', 'D. 审计收费'], correctAnswer: 3, explanation: '审计要素包括审计业务约定书、审计证据和审计报告。审计收费不属于审计要素。' },
        // 连线题：审计意见类型
        { 
            id: 104, 
            type: 'match', 
            title: '请将审计意见类型与其适用情形连线：',
            explanation: '根据审计结果的不同，审计报告分为四种意见类型，分别适用于不同情况。',
            pairs: [
                { left: '无保留意见', right: '财务报表合法、公允' },
                { left: '保留意见', right: '存在重大错报但不影响整体' },
                { left: '否定意见', right: '财务报表存在重大错报' },
                { left: '无法表示意见', right: '审计范围受到重大限制' }
            ]
        },
        { id: 105, type: 'truefalse', title: '审计报告的意见类型包括无保留意见、保留意见、否定意见和无法表示意见。', correctAnswer: true, explanation: '审计报告的四种意见类型：无保留意见、保留意见、否定意见和无法表示意见。' },
        { id: 106, type: 'multiplechoice', title: '下列关于审计三方关系的说法正确的是？', options: ['A. 审计委托人是被审计单位', 'B. 被审计单位管理层是财产委托人', 'C. 审计人员对被审计单位负责', 'D. 三方关系是审计理论的基础'], correctAnswer: 3, explanation: '审计三方关系包括审计委托人（通常是被审计单位的股东或董事会）、被审计单位管理层（受托责任承担者）和审计人员（独立第三方）。三方关系是审计理论的核心基础。' },
        // 填空排序题
        { 
            id: 107, 
            type: 'fillblank', 
            title: '审计三方关系包括审计委托人、_______和审计人员。',
            correctAnswer: '被审计单位管理层',
            explanation: '审计三方关系是指审计委托人（通常是股东或董事会）、被审计单位管理层（受托责任承担者）和审计人员（独立第三方）。'
        },
        { id: 108, type: 'multiplechoice', title: '合理保证与有限保证的主要区别是？', options: ['A. 审计程序不同', 'B. 证据充分性要求不同', 'C. 审计意见类型不同', 'D. 以上都是'], correctAnswer: 3, explanation: '合理保证（财务报表审计）与有限保证（财务报表审阅）在审计程序、证据充分性要求和审计意见类型等方面都存在区别。' },
        { id: 109, type: 'multiplechoice', title: '审计基本职能不包括？', options: ['A. 经济监督', 'B. 经济评价', 'C. 经济决策', 'D. 经济鉴证'], correctAnswer: 2, explanation: '审计的基本职能包括经济监督、经济评价和经济鉴证，不包括经济决策。经济决策是管理层的职责。' }
    ],
    chapter2: [
        // 分类拖拽题
        { 
            id: 201, 
            type: 'dragclassify', 
            title: '将以下独立性威胁拖拽到正确的类别中：',
            explanation: '独立性威胁主要包括自身利益威胁、自我评价威胁、过度介入威胁、熟悉威胁和胁迫威胁五类。',
            items: [
                { id: 'a', text: '持有被审计单位股票' },
                { id: 'b', text: '曾是被审计单位员工' },
                { id: 'c', text: '为客户推荐业务' },
                { id: 'd', text: '长期审计同一客户' },
                { id: 'e', text: '受到客户威胁' },
                { id: 'f', text: '曾参与财务报表编制' }
            ],
            categories: [
                { id: 'selfinterest', name: '自身利益威胁', correctItems: ['a'] },
                { id: 'selfreview', name: '自我评价威胁', correctItems: ['b', 'f'] },
                { id: 'advocacy', name: '过度介入威胁', correctItems: ['c'] },
                { id: 'familiarity', name: '熟悉威胁', correctItems: ['d'] },
                { id: 'intimidation', name: '胁迫威胁', correctItems: ['e'] }
            ]
        },
        { id: 202, type: 'truefalse', title: '审计人员可以向被审计单位推荐客户。', correctAnswer: false, explanation: '审计人员不得向被审计单位推荐客户或介绍业务，以保持独立性。' },
        // 连线题
        { 
            id: 203, 
            type: 'match', 
            title: '请将职业道德要求与对应的具体内容连线：',
            explanation: '审计人员职业道德包括独立性、客观公正、专业胜任能力、保密和职业行为等方面。',
            pairs: [
                { left: '独立性', right: '与被审计单位无利益关系' },
                { left: '客观公正', right: '不偏不倚地发表审计意见' },
                { left: '保密', right: '不得泄露客户信息' },
                { left: '专业胜任能力', right: '具备应有的专业技能' }
            ]
        },
        { id: 204, type: 'truefalse', title: '审计人员应当保持职业怀疑态度，对所有审计证据保持质疑。', correctAnswer: true, explanation: '职业怀疑态度要求审计人员以质疑的思维方式评估审计证据，对可能表明由于舞弊或错误导致的错报保持警觉。' },
        { id: 205, type: 'multiplechoice', title: '下列哪项不属于审计人员的职业道德要求？', options: ['A. 独立性', 'B. 专业胜任能力', 'C. 保密', 'D. 盈利性'], correctAnswer: 3, explanation: '审计人员职业道德要求包括：独立性、客观公正、专业胜任能力、保密和职业行为。盈利性不是职业道德要求。' },
        { id: 206, type: 'multiplechoice', title: '如果审计人员在审计过程中发现客户存在重大舞弊迹象，正确的做法是？', options: ['A. 立即向监管部门报告', 'B. 与管理层沟通并获取书面声明', 'C. 出具保留意见审计报告', 'D. 直接终止业务约定'], correctAnswer: 1, explanation: '发现舞弊迹象时，审计人员应当与管理层沟通，获取书面声明，并考虑对审计报告的影响。直接报告监管部门或终止业务约定不是首选做法。' },
        { id: 207, type: 'truefalse', title: '保密原则意味着审计人员绝对不能披露客户的任何信息。', correctAnswer: false, explanation: '保密原则存在例外情况，如法律法规要求、司法程序要求、监管机构要求等情况下可以披露相关信息。' }
    ],
    chapter3: [
        // 凭证附件匹配拖拽题
        { 
            id: 301, 
            type: 'dragclassify', 
            title: '将以下凭证附件拖拽到正确的类别中：',
            explanation: '会计凭证附件包括销售发票、采购发票、收据、银行回单等，需要正确分类管理。',
            items: [
                { id: 'a', text: '销售增值税发票', icon: '📄' },
                { id: 'b', text: '银行转账回单', icon: '🏦' },
                { id: 'c', text: '采购入库单', icon: '📦' },
                { id: 'd', text: '费用报销单', icon: '💰' },
                { id: 'e', text: '工资发放表', icon: '👥' },
                { id: 'f', text: '合同协议', icon: '📝' }
            ],
            categories: [
                { id: 'invoice', name: '发票单据', correctItems: ['a'] },
                { id: 'bank', name: '银行凭证', correctItems: ['b'] },
                { id: 'warehouse', name: '出入库单据', correctItems: ['c'] },
                { id: 'expense', name: '费用报销', correctItems: ['d', 'e'] },
                { id: 'contract', name: '合同协议', correctItems: ['f'] }
            ]
        },
        // 排序题
        { 
            id: 302, 
            type: 'sort', 
            title: '请将银行对账调节的正确步骤按顺序排列：',
            explanation: '银行存款余额调节表的编制需要按照规范的步骤进行，确保银行和企业账务一致。',
            steps: [
                { id: 'a', text: '获取银行对账单和企业银行存款日记账' },
                { id: 'b', text: '核对银行对账单和企业日记账的发生额' },
                { id: 'c', text: '找出双方金额不一致的未达账项' },
                { id: 'd', text: '编制银行存款余额调节表' },
                { id: 'e', text: '分析调节后余额是否一致' }
            ],
            correctOrder: ['a', 'b', 'c', 'd', 'e']
        },
        { id: 303, type: 'multiplechoice', title: '审计人员在检查银行对账单时，发现银行对账单余额与企业银行存款日记账余额不符，以下做法正确的是？', options: ['A. 直接调整企业银行存款日记账余额', 'B. 编制银行存款余额调节表', 'C. 忽略此差异', 'D. 要求银行调整对账单'], correctAnswer: 1, explanation: '发现银行对账单与企业银行存款日记账不符时，应当编制银行存款余额调节表，查找差异原因。' },
        { id: 304, type: 'multiplechoice', title: '审计人员在检查发票时，发现一张发票的发票专用章模糊不清，以下处理正确的是？', options: ['A. 接受该发票', 'B. 要求重新开具发票', 'C. 要求企业提供证明', 'D. 忽略此问题'], correctAnswer: 1, explanation: '发票专用章模糊不清影响发票的法律效力，应当要求重新开具清晰规范的发票。' },
        { id: 305, type: 'truefalse', title: '审计人员检查付款凭证时，需要验证授权审批是否符合企业的内部控制要求。', correctAnswer: true, explanation: '验证授权审批是付款交易内部控制测试的重要内容，确保所有付款都经过适当授权。' },
        { id: 306, type: 'multiplechoice', title: '关于存货盘点，以下说法正确的是？', options: ['A. 盘点时企业人员必须在场', 'B. 盘点结果直接作为审计证据', 'C. 抽盘时可以由审计人员单独进行', 'D. 盘点结果不需要与账面核对'], correctAnswer: 1, explanation: '存货盘点应当有企业相关人员在场，审计人员观察盘点过程并执行抽盘，盘点结果需要与企业账面记录核对。' },
        { id: 307, type: 'truefalse', title: '审计人员在检查应收账款时，需要函证的主要理由是？', options: ['A. 函证是法定程序', 'B. 函证可以获取第三方确认', 'C. 函证成本较低', 'D. 管理层要求'], correctAnswer: 1, explanation: '函证的主要目的是获取第三方（债务人）对应收账款余额的确认，这是审计证据的重要来源。' },
        // 不相容职务分类
        { 
            id: 308, 
            type: 'dragclassify', 
            title: '将以下职务分类为"不相容职务"或"相容职务"：',
            explanation: '不相容职务分离是内部控制的重要原则，旨在预防和发现舞弊行为。',
            items: [
                { id: 'a', text: '出纳与记账' },
                { id: 'b', text: '审批与执行' },
                { id: 'c', text: '保管与记录' },
                { id: 'd', text: '记账与复核' },
                { id: 'e', text: '经办与监交' },
                { id: 'f', text: '采购与验收' }
            ],
            categories: [
                { id: 'incompatible', name: '不相容职务（必须分离）', correctItems: ['a', 'b', 'c', 'f'] },
                { id: 'compatible', name: '相容职务（可以合并）', correctItems: ['d', 'e'] }
            ]
        }
    ],
    chapter4: [
        // 审计流程排序
        { 
            id: 401, 
            type: 'sort', 
            title: '请将审计的基本流程按正确顺序排列：',
            explanation: '审计工作遵循一定的流程，从计划到执行再到报告，形成完整的审计循环。',
            steps: [
                { id: 'a', text: '签订业务约定书' },
                { id: 'b', text: '进行风险评估' },
                { id: 'c', text: '制定审计计划' },
                { id: 'd', text: '实施审计程序' },
                { id: 'e', text: '出具审计报告' },
                { id: 'f', text: '评价审计证据' }
            ],
            correctOrder: ['a', 'c', 'b', 'd', 'f', 'e']
        },
        { id: 402, type: 'multiplechoice', title: '控制测试的目的是：', options: ['A. 测试内部控制的设计是否合理', 'B. 测试内部控制的运行是否有效', 'C. 测试财务报表是否存在重大错报', 'D. 测试审计证据是否充分适当'], correctAnswer: 1, explanation: '控制测试的目的是获取关于内部控制运行有效性的审计证据。' },
        // 审计证据分类
        { 
            id: 403, 
            type: 'dragclassify', 
            title: '将以下审计证据拖拽到正确的分类中：',
            explanation: '审计证据按来源可分为内部证据和外部证据，按性质可分为实物证据、书面证据、口头证据和环境证据。',
            items: [
                { id: 'a', text: '银行函证回函', icon: '🏦' },
                { id: 'b', text: '管理层的声明书', icon: '📄' },
                { id: 'c', text: '存货监盘记录', icon: '📦' },
                { id: 'd', text: '采购发票', icon: '🧾' },
                { id: 'e', text: '律师询证函回函', icon: '⚖️' },
                { id: 'f', text: '内部流转单据', icon: '📋' }
            ],
            categories: [
                { id: 'external', name: '外部证据（第三方提供）', correctItems: ['a', 'e'] },
                { id: 'internal', name: '内部证据（客户内部生成）', correctItems: ['b', 'c', 'd', 'f'] }
            ]
        },
        { id: 404, type: 'truefalse', title: '实质性程序包括细节测试和实质性分析程序。', correctAnswer: true, explanation: '实质性程序包括细节测试（检查、观察、询问、函证、重新计算等）和实质性分析程序。' },
        // 风险评估程序排序
        { 
            id: 405, 
            type: 'sort', 
            title: '请将风险评估程序的正确顺序排列：',
            explanation: '风险评估程序用于识别和评估重大错报风险，是审计工作的起点。',
            steps: [
                { id: 'a', text: '询问管理层和相关人员' },
                { id: 'b', text: '分析程序' },
                { id: 'c', text: '观察和检查' },
                { id: 'd', text: '识别和评估重大错报风险' },
                { id: 'e', text: '确定风险评估结果' }
            ],
            correctOrder: ['a', 'b', 'c', 'd', 'e']
        },
        { id: 406, type: 'multiplechoice', title: '审计计划的内容不包括以下哪项？', options: ['A. 审计范围', 'B. 审计时间安排', 'C. 审计人员分工', 'D. 审计报告意见类型'], correctAnswer: 3, explanation: '审计计划内容包括审计范围、时间安排、人员分工等，但不包括审计报告意见类型（意见类型需要根据审计结果确定）。' },
        { id: 407, type: 'multiplechoice', title: '某公司2025年12月31日资产负债表显示应付账款余额为200万元。审计人员应重点关注？', options: ['A. 资产负债表日后付款情况', 'B. 是否存在未入账的应付账款', 'C. 应付账款的账龄分析', 'D. 以上都是'], correctAnswer: 3, explanation: '审计应付账款时，需要关注完整性（未入账负债）、存在性（账龄分析）和权利和义务等认定。' },
        { id: 408, type: 'truefalse', title: '风险评估程序是审计的起点，用于识别和评估重大错报风险。', correctAnswer: true, explanation: '风险评估是审计过程的重要起点，通过询问、分析程序、观察和检查等程序识别和评估重大错报风险。' },
        { id: 409, type: 'multiplechoice', title: '在确定审计证据相关性时，审计人员应考虑？', options: ['A. 特定的认定可能验证不同的认定', 'B. 不同来源的证据相关性可能不同', 'C. 证据间存在矛盾时的处理', 'D. 以上都是'], correctAnswer: 3, explanation: '审计证据的相关性考虑包括：特定认定与证据的关系、不同来源证据的关系、证据间矛盾的处理等。' }
    ],
    chapter5: [
        // 错报类型分类
        { 
            id: 501, 
            type: 'dragclassify', 
            title: '将以下情况分类为"错误"或"舞弊"：',
            explanation: '错报分为错误（无意）和舞弊（故意）两种，审计人员对两者都应保持警觉。',
            items: [
                { id: 'a', text: '计算公式使用错误', icon: '❌' },
                { id: 'b', text: '故意虚增收入', icon: '💰' },
                { id: 'c', text: '遗漏重要披露', icon: '📝' },
                { id: 'd', text: '伪造交易文件', icon: '📄' },
                { id: 'e', text: '成本分配错误', icon: '⚠️' },
                { id: 'f', text: '隐瞒关联交易', icon: '🤝' }
            ],
            categories: [
                { id: 'error', name: '错误（无意）', correctItems: ['a', 'c', 'e'] },
                { id: 'fraud', name: '舞弊（故意）', correctItems: ['b', 'd', 'f'] }
            ]
        },
        // 费用跨期分类
        { 
            id: 502, 
            type: 'dragclassify', 
            title: '将以下费用项目分类到正确的会计期间：',
            explanation: '费用跨期是指将属于本期或以前期间的费用计入错误的会计期间，影响各期利润的准确性。',
            items: [
                { id: 'a', text: '2025年12月办公用品发票', icon: '📄' },
                { id: 'b', text: '2026年1月差旅费发票', icon: '✈️' },
                { id: 'c', text: '2025年预付2026年租金', icon: '🏢' },
                { id: 'd', text: '2024年12月水电费发票', icon: '💡' }
            ],
            categories: [
                { id: 'current', name: '应计入2025年', correctItems: ['a', 'c'] },
                { id: 'prior', name: '应计入以前年度', correctItems: ['d'] },
                { id: 'future', name: '应计入以后年度', correctItems: ['b'] }
            ]
        },
        { id: 503, type: 'multiplechoice', title: '甲公司销售政策为：客户下单后支付30%预付款，收到货物后支付60%，质保期结束后支付10%。2025年12月31日，甲公司确认了所有当年发出商品的销售收入的60%。以下说法正确的是？', options: ['A. 甲公司的收入确认符合准则要求', 'B. 10%的质保金不应确认为当年收入', 'C. 30%的预付款应全部确认为当年收入', 'D. 收入确认金额正确但时点可能不正确'], correctAnswer: 3, explanation: '根据新收入准则，需要判断控制权转移的时点。如果质保期结束后才支付10%，且质保期是重要组成部分，则可能影响收入确认时点。' },
        { id: 504, type: 'truefalse', title: '费用跨期只会影响当期利润，不会影响以后期间的利润。', correctAnswer: false, explanation: '费用跨期不仅影响当期利润，如果跨期金额重大，还可能影响资产负债表和以后期间的利润。' },
        // 收入确认流程
        { 
            id: 505, 
            type: 'sort', 
            title: '请将销售收入的确认流程按正确顺序排列：',
            explanation: '新收入准则下，需要按照五步法模型确认收入，确保收入在适当的时点和金额确认。',
            steps: [
                { id: 'a', text: '识别与客户的合同' },
                { id: 'b', text: '识别合同中的履约义务' },
                { id: 'c', text: '确定交易价格' },
                { id: 'd', text: '将交易价格分摊至履约义务' },
                { id: 'e', text: '在履约义务完成时确认收入' }
            ],
            correctOrder: ['a', 'b', 'c', 'd', 'e']
        },
        { id: 506, type: 'multiplechoice', title: '审计人员发现某公司会计将本应计入管理费用的差旅费计入了销售费用，这会导致？', options: ['A. 管理费用和销售费用同时虚增', 'B. 管理费用虚减，销售费用虚增', 'C. 管理费用和销售费用同时虚减', 'D. 两项费用金额不变，无需调整'], correctAnswer: 3, explanation: '费用分类错误会影响报表项目的列报，但不影响利润总额和费用总额。如果金额不重要，可以不调整。' },
        { id: 507, type: 'multiplechoice', title: '关于存货跌价准备，以下说法正确的是？', options: ['A. 存货跌价准备应按单个存货项目计提', 'B. 存货跌价准备可以按存货类别计提', 'C. 计提跌价准备后，如果影响其价值的因素消失，存货跌价准备可以转回', 'D. 以上都正确'], correctAnswer: 3, explanation: '存货跌价准备可以按单个项目、类别或总额计提；计提后如果影响因素消失，跌价准备可以转回。' },
        { id: 508, type: 'truefalse', title: '固定资产的折旧方法变更属于会计政策变更。', correctAnswer: false, explanation: '固定资产折旧方法变更属于会计估计变更，不是会计政策变更。会计政策变更是对会计核算原则和方法的变更。' },
        { id: 509, type: 'multiplechoice', title: '审计人员在检查固定资产时，发现一台设备已停用2年，但仍正常计提折旧。以下判断正确的是？', options: ['A. 折旧计提正确，无需关注', 'B. 需要检查该固定资产是否已发生减值', 'C. 需要要求企业停止计提折旧', 'D. 应直接调整财务报表'], correctAnswer: 1, explanation: '停用固定资产如果不再产生经济利益流入，应当考虑减值。同时，如果停用期间仍需使用，需要评估折旧方法是否合理。' }
    ]
};

// 商店物品
const shopItems = [
    { id: 'fileCabinet', name: '凭证收纳柜', icon: '🗄️', price: 100, description: '解锁第三章所有题目的"快速复习"模式', purchased: false },
    { id: 'computer', name: '办公电脑升级', icon: '💻', price: 300, description: '未来答题时，错误选项的迷惑性降低10%', purchased: false },
    { id: 'officeLevel2', name: '事务所升级Lv2', icon: '🏢', price: 500, description: '提升事务所等级到2级，解锁更多功能', purchased: false },
    { id: 'officeLevel3', name: '事务所升级Lv3', icon: '🏛️', price: 1000, description: '提升事务所等级到3级，解锁更多功能', purchased: false }
];

// 成就数据
const achievements = [
    { id: 'glory1', name: '审计之光', description: '成为行业标杆，推动准则改革，受聘为证监会顾问。', icon: '🏆', category: '荣誉' },
    { id: 'glory2', name: '学术大家', description: '回归高校任教，培养新一代审计人才，著作等身。', icon: '🎓', category: '荣誉' },
    { id: 'glory3', name: '公益先锋', description: '创立非营利审计组织，专查慈善机构财务透明。', icon: '🤝', category: '荣誉' },
    { id: 'power1', name: '最年轻合伙人', description: '35岁成为四大合伙人，掌握核心客户资源。', icon: '👑', category: '权力' },
    { id: 'power2', name: '企业CFO', description: '跳槽至世界500强任财务总监，年薪千万。', icon: '💼', category: '权力' },
    { id: 'power3', name: '监管高官', description: '进入证监会，制定游戏规则。', icon: '⚖️', category: '权力' },
    { id: 'balance1', name: '中庸大师', description: '在一家中型所做到管理合伙人，家庭事业平衡。', icon: '⚖️', category: '平衡' },
    { id: 'balance2', name: '精品所创始人', description: '创立特色事务所，专攻某细分领域，口碑极佳。', icon: '🏢', category: '平衡' },
    { id: 'balance3', name: '自由咨询师', description: '成为独立董事和专业顾问，时间自由，收入可观。', icon: '🕊️', category: '平衡' },
    { id: 'transform1', name: '成功创业者', description: '审计SaaS公司上市，财务自由。', icon: '🚀', category: '转型' },
    { id: 'transform2', name: '网红讲师', description: '知识付费年入千万，影响百万人。', icon: '📱', category: '转型' },
    { id: 'transform3', name: '跨界艺术家', description: '开咖啡馆/写小说/做播客，找到人生新意义。', icon: '🎨', category: '转型' },
    { id: 'tragedy1', name: '身败名裂', description: '因协同造假入狱，职业资格永久吊销。', icon: '⚰️', category: '悲剧' },
    { id: 'tragedy2', name: '燃烧殆尽', description: '过劳猝死/重病，职业生涯戛然而止。', icon: '🔥', category: '悲剧' },
    { id: 'tragedy3', name: '众叛亲离', description: '妻离子散，孤独终老，虽有财富但无幸福。', icon: '💔', category: '悲剧' },
    { id: 'special1', name: '无名英雄', description: '默默无闻做了一辈子审计，退休时发现经手的公司都健康发展。', icon: '🌟', category: '特殊' },
    { id: 'special2', name: '行业吹哨人', description: '揭露系统性问题后被封杀，但十年后平反，成为传奇。', icon: '🦸', category: '特殊' },
    { id: 'special3', name: '传承者', description: '培养出三个杰出徒弟，你的理念在他们身上延续。', icon: '👨‍🏫', category: '特殊' },
    { id: 'special4', name: '流浪审计师', description: '离开都市，在边疆小城开事务所，帮助小微企业。', icon: '🧳', category: '特殊' },
    { id: 'special5', name: '觉醒者', description: '在45岁突然顿悟，出家/归隐，留下无数传说。', icon: '🧘', category: '特殊' }
];

// 审计剧场事件
const theaterEvents = [
    { id: 1, chapter: '第一章 新人报道', year: 1, scenario: '事务所会议室', choices: 3 },
    { id: 2, chapter: '第一章 新人报道', year: 1, scenario: '项目经理办公室', choices: 3 },
    { id: 3, chapter: '第二章：成长之痛', year: 2, scenario: '高级餐厅包间', choices: 3 },
    { id: 4, chapter: '第二章：成长之痛', year: 2, scenario: '项目复盘会', choices: 3 },
    { id: 5, chapter: '第二章：成长之痛', year: 2, scenario: '深夜办公室', choices: 3 },
    { id: 6, chapter: '第三章：十字路口', year: 3, scenario: 'HR办公室', choices: 3 },
    { id: 7, chapter: '第三章：十字路口', year: 3, scenario: '家里', choices: 3 },
    { id: 8, chapter: '第三章：十字路口', year: 3, scenario: '客户仓库', choices: 3 },
    { id: 9, chapter: '第四章：权力游戏', year: 5, scenario: '合伙人办公室', choices: 3 },
    { id: 10, chapter: '第四章：权力游戏', year: 5, scenario: '项目危机会议', choices: 3 },
    { id: 11, chapter: '第四章：权力游戏', year: 5, scenario: '医院诊室', choices: 3 },
    { id: 12, chapter: '第五章：终极抉择', year: 6, scenario: '证监会会议室', choices: 3 },
    { id: 13, chapter: '第五章：终极抉择', year: 6, scenario: '家中', choices: 3 },
    { id: 14, chapter: '第五章：终极抉择', year: 6, scenario: '猎头电话', choices: 3 },
    { id: 15, chapter: '第五章：终极抉择', year: 6, scenario: '深夜', choices: 3 }
];

// 审计剧场结局
const theaterEndings = [
    { id: 'glory1', title: '审计之光', condition: 'principle > 80 && courage > 70', category: '荣誉' },
    { id: 'glory2', title: '学术大家', condition: 'principle > 60 && wisdom > 70', category: '荣誉' },
    { id: 'glory3', title: '公益先锋', condition: 'courage > 60 && principle > 70', category: '荣誉' },
    { id: 'power1', title: '最年轻合伙人', condition: 'network > 80 && wisdom > 70 && principle < 50', category: '权力' },
    { id: 'power2', title: '企业CFO', condition: 'money > 80 && wisdom > 60', category: '权力' },
    { id: 'power3', title: '监管高官', condition: 'network > 70 && principle > 60', category: '权力' },
    { id: 'balance1', title: '中庸大师', condition: 'wisdom > 60 && family > 50 && career > 50', category: '平衡' },
    { id: 'balance2', title: '精品所创始人', condition: 'wisdom > 70 && potential > 60', category: '平衡' },
    { id: 'balance3', title: '自由咨询师', condition: 'wisdom > 80 && pressure < 40', category: '平衡' },
    { id: 'transform1', title: '成功创业者', condition: 'potential > 80 && risk > 50', category: '转型' },
    { id: 'transform2', title: '网红讲师', condition: 'wisdom > 70 && network > 60', category: '转型' },
    { id: 'transform3', title: '跨界艺术家', condition: 'pressure < 30 && courage > 50', category: '转型' },
    { id: 'tragedy1', title: '身败名裂', condition: 'risk > 80 && principle < 30', category: '悲剧' },
    { id: 'tragedy2', title: '燃烧殆尽', condition: 'health < 30 && pressure > 80', category: '悲剧' },
    { id: 'tragedy3', title: '众叛亲离', condition: 'family < 20 && money > 70', category: '悲剧' },
    { id: 'special1', title: '无名英雄', condition: 'principle > 60 && courage > 50 && network < 50', category: '特殊' },
    { id: 'special2', title: '行业吹哨人', condition: 'courage > 90 && risk > 70', category: '特殊' },
    { id: 'special3', title: '传承者', condition: 'wisdom > 80 && network > 60', category: '特殊' },
    { id: 'special4', title: '流浪审计师', condition: 'pressure < 20 && principle > 70', category: '特殊' },
    { id: 'special5', title: '觉醒者', condition: 'courage > 80 && pressure < 30', category: '特殊' }
];

// 审计案例数据
const auditCases = {
    scenarios: [
        { id: 'yin-guang-xia', title: '银广夏审计案', year: 2001, description: '银广夏通过虚构天津广夏萃取产品出口业务，虚增巨额收入和利润。' },
        { id: 'lv-da-di', title: '绿大地造假案', year: 2010, description: '绿大地通过伪造合同、虚增资产等手段，虚增收入和利润。' }
    ],
    yinGuangXiaEvents: [
        { id: 1, text: '银广夏1994年上市，主营业务为葡萄种植和加工。1998年开始，天津广夏成为其核心子公司，主营业务变更为萃取产品出口。', choices: [{ text: '继续了解情况', effect: { wisdom: 5 } }] },
        { id: 2, text: '2001年，审计人员发现银广夏2000年主营业务收入高达9亿元，但应收账款几乎为零。', choices: [{ text: '继续分析', effect: { wisdom: 5 } }] },
        { id: 3, text: '天津广夏声称其萃取产品主要出口德国，但海关数据显示出口额远低于报表数据。', choices: [{ text: '深入调查', effect: { courage: 5 } }] },
        { id: 4, text: '审计人员发现银广夏的银行回函显示有大量资金流入，但随后又被迅速转出。', choices: [{ text: '追踪资金流向', effect: { wisdom: 10 } }] },
        { id: 5, text: '最终，银广夏通过虚构海外订单、伪造海关报关单等手段，虚增收入约7.4亿元，虚增利润约5.7亿元。', choices: [{ text: '完成审计', effect: { wisdom: 10, courage: 10 } }] }
    ],
    lvDaDiEvents: [
        { id: 1, text: '绿大地2010年上市，主营业务为绿化工程和苗木销售。上市首年即出现业绩变脸。', choices: [{ text: '继续了解', effect: { wisdom: 5 } }] },
        { id: 2, text: '审计人员发现绿大地的收入确认时点存在异常，大量合同收入在年底集中确认。', choices: [{ text: '检查合同', effect: { wisdom: 5 } }] },
        { id: 3, text: '绿大地的原材料采购存在大量现金交易，缺乏有效的内部控制。', choices: [{ text: '追踪采购', effect: { courage: 5 } }] },
        { id: 4, text: '审计人员发现绿大地通过伪造合同、虚开发票等手段，虚增资产和收入。', choices: [{ text: '收集证据', effect: { wisdom: 10 } }] },
        { id: 5, text: '最终，绿大地通过伪造合同、虚增资产等手段，累计虚增收入约3亿元，虚增资产约2.9亿元。', choices: [{ text: '完成审计', effect: { wisdom: 10, courage: 10 } }] }
    ]
};

// 绿大地案例问题
const lvDaDiQuestions = [
    { id: 1, title: '招股书中绿大地虚增资产为______万元。', content: '招股书中绿大地虚增资产为______万元。', hint: '观察图表中"招股书"对应的 青色柱形 （代表虚增资产）标注数值。', answer: '7011', explanation: '图表"招股书"栏目下，青色柱形（虚增资产）明确标注数值为7011万元，直接读取数据可得。' },
    { id: 2, title: '2007年年报中，绿大地虚增业务收入比虚增资产多______万元。', content: '2007年年报中，绿大地虚增业务收入比虚增资产多______万元。', hint: '先提取2007年年报的虚增资产（青色柱，2124万元）和虚增业务收入（蓝色柱，9660万元），再计算两者差值（虚增业务收入 - 虚增资产）。', answer: '7536', explanation: '2007年年报虚增业务收入为9660万元，虚增资产为2124万元，差值为 9660−2124=7536万元，通过减法运算得出。' },
    { id: 3, title: '2008年年报与2009年年报相比，虚增资产增加了______万元。', content: '2008年年报与2009年年报相比，虚增资产增加了______万元。', hint: '提取2008年年报虚增资产（16335万元）和2009年年报虚增资产（10407万元），计算差值（2008年数值 - 2009年数值）。', answer: '5928', explanation: '2008年年报虚增资产为16335万元，2009年年报虚增资产为10407万元，增加额为 16335−10407=5928万元，通过跨期间数值相减得到。' },
    { id: 4, title: '招股书中，虚增业务收入是虚增资产的______倍（保留两位小数）。', content: '招股书中，虚增业务收入是虚增资产的______倍（保留两位小数）。', hint: '提取招股书虚增业务收入（29610万元）和虚增资产（7011万元），计算除法（虚增业务收入 ÷ 虚增资产）并按要求保留小数。', answer: '4.22', explanation: '招股书虚增业务收入29610万元，虚增资产7011万元，倍数关系为 29610÷7011≈4.22（保留两位小数），通过除法运算与四舍五入规则得出。' },
    { id: 5, title: '2007 - 2009年年报中，虚增业务收入总和为______万元。', content: '2007 - 2009年年报中，虚增业务收入总和为______万元。', hint: '提取2007年年报（9660万元）、2008年年报（8565万元）、2009年年报（6856万元）的虚增业务收入，求和计算。', answer: '25081', explanation: '2007 - 2009年年报虚增业务收入分别为9660万、8565万、6856万，总和为 9660+8565+6856=25081万元，通过连续加法运算得出。' },
    { id: 6, title: '在四个报告期中，虚增资产的最大值出现在哪个报告期？（ ）', content: 'A. 招股书<br>B. 2007年年报<br>C. 2008年年报<br>D. 2009年年报', hint: '比较四个报告期虚增资产数值（招股书7011万、2007年报2124万、2008年报16335万、2009年报10407万），选择最大值对应的报告期。', answer: 'C', explanation: '四个报告期虚增资产分别为7011万（招股书）、2124万（2007年报）、16335万（2008年报）、10407万（2009年报），其中16335万为最大值，对应2008年年报，故选C。' },
    { id: 7, title: '2009年年报中，虚增业务收入比虚增资产少______万元。', content: '2009年年报中，虚增业务收入比虚增资产少______万元。', hint: '提取2009年年报虚增资产（10407万元）和虚增业务收入（6856万元），计算差值（虚增资产 - 虚增业务收入）。', answer: '3551', explanation: '2009年年报虚增资产为10407万元，虚增业务收入为6856万元，差值为 10407−6856=3551万元，通过减法运算得出。' },
    { id: 8, title: '招股书虚增业务收入与2007年年报虚增业务收入的差值为______万元。', content: '招股书虚增业务收入与2007年年报虚增业务收入的差值为______万元。', hint: '提取招股书虚增业务收入（29610万元）和2007年年报虚增业务收入（9660万元），计算减法（招股书数值 - 2007年报数值）。', answer: '19950', explanation: '招股书虚增业务收入29610万元，2007年年报虚增业务收入9660万元，差值为 29610−9660=19950万元，通过跨报告期减法运算得到。' },
    { id: 9, title: '2008年年报虚增资产占该报告期虚增业务收入的比例约为______%（保留一位小数）。', content: '2008年年报虚增资产占该报告期虚增业务收入的比例约为______%（保留一位小数）。', hint: '提取2008年年报虚增资产（16335万元）和虚增业务收入（8565万元），计算除法（虚增资产 ÷ 虚增业务收入）并转换为百分比，保留一位小数。', answer: '190.7%', explanation: '2008年年报虚增资产16335万元，虚增业务收入8565万元，比例为 (16335÷8565)×100%≈190.7%（保留一位小数），通过除法、百分比转换与四舍五入规则得出。' }
];

// 银广夏案例问题
const yinGuangXiaQuestions = [
    { id: 1, title: '计算异常的年度增长率', content: `主营业务收入：1997年同比降__________，2000年同比暴增__________，2001年同比暴跌___________；<br>主要业务利润：1997年降__________，2000年暴增____________，2001年暴跌__________；<br>净利润：1997年降____________，2000年暴增____________，2001年暴跌__________。`, hint: `通过同比/环比增长率，识别指标"大起大落"的非正常经营迹象（造假常伴随短期指标异常冲高后崩盘）。可以对"主营业务收入、主营业务利润、净利润、每股收益、净资产收益率"计算相邻年度增长率（公式：增长率=(本年值−上年值)/上年值×100%）。`, answer: `主营业务收入：1997年同比降24.5%，2000年同比暴增72.8%，2001年同比暴跌92%；<br>主要业务利润：1997年降24.5%，2000年暴增177%，2001年暴跌67%；<br>净利润：1997年降3.2%（相对温和），2000年暴增227%，2001年暴跌226%。`, explanation: `核心指标（如2000年）的"冲高"与2001年的"断崖式回落"，违背真实业务"平稳或渐进式增长"的逻辑。` },
    { id: 2, title: '验证利润表指标的逻辑传导（主营收入→主营利润→净利润）', content: `毛利率：1999年为__________，2000年跳升至___________（增幅约__________），2001年回落至___________；<br>净利率：1999年为__________，2000年跳升至___________（增幅近__________），2001年回落至___________。`, hint: `真实业务中，"主营收入→主营利润→净利润"需满足成本费用合理扣减的逻辑（即毛利率、净利率不会出现无理由的剧烈波动）。计算毛利率（主营利润/主营收入）和净利率（净利润/主营收入），观察跨年度变化。`, answer: `毛利率：1999年为39.65%，2000年跳升至63.61%（增幅超50%），2001年回落至26.42%；<br>净利率：1999年为24.29%，2000年跳升至45.95%（增幅近90%），2001年回落至-26.93%。`, explanation: `2000年"毛利率、净利率"短期内暴涨，远超行业正常水平（银广夏主业为生物萃取，无技术突变支撑"暴利"），反映虚增收入时同步虚减成本费用的造假逻辑（虚构收入后，人为压低对应成本，导致主营利润虚高；再虚减期间费用，进一步推高净利润）。` },
    { id: 3, title: '锚定关键盈利指标的联动性（净资产收益率、每股收益）', content: `ROE：1994 - 1999年维持在_________ ~__________，2000年跳升至__________，2001年暴跌至____________；<br>EPS：1994 - 1999年在________~__________元波动，2000年跳升至___________元，2001年暴跌至_____________元。`, hint: `验证"盈利质量"是否匹配（净资产收益率=净利润/平均净资产，每股收益=净利润/总股本；若股本/净资产无重大变动，二者应呈同趋势增长）。对比"净资产收益率（ROE）"与"每股收益（EPS）"的年度走势。`, answer: `ROE：1994 - 1999年维持在10% - 15%，2000年跳升至34.56%，2001年暴跌至-3.77%；<br>EPS：1994 - 1999年在0.22 - 0.83元波动，2000年跳升至0.83元（同比增62.7%），2001年暴跌至-0.04元。`, explanation: `2000年ROE、EPS的"异动冲高"与2001年"断崖式回落"，不符合"真实盈利持续积累"的规律，而是造假推高短期指标后泡沫破裂的表现（银广夏通过虚构海外订单、伪造报关单等手段，虚增收入利润，短期内推高ROE、EPS吸引投资者）。` },
    { id: 4, title: '聚焦异常年份的造假指向性分析（以2000年为核心）', content: '结合银广夏"1998 - 2001年虚构天津广夏萃取产品出口"的造假背景，分析2000年"高增长"与2001年"暴跌"的业务实质，验证数据与造假逻辑的匹配性。', hint: '点击下方按钮查看答案解析', answer: '2000年"收入、利润、毛利率、ROE"的集体冲高，是虚构主营业务（无真实交易支撑）的结果（天津广夏不存在真实出口，报表数据全为伪造）；2001年数据暴跌，是造假难以为继的必然（监管介入+海外客户虚构被戳穿），体现"虚假业务的不可可持续性"——这是识别财务造假的黄金指标（真实业务即使遇危机，也不会出现"一年内从暴增到暴跌92%"的极端波动）。', explanation: '2000年"收入、利润、毛利率、ROE"的集体冲高，是虚构主营业务（无真实交易支撑）的结果（天津广夏不存在真实出口，报表数据全为伪造）；2001年数据暴跌，是造假难以为继的必然（监管介入+海外客户虚构被戳穿），体现"虚假业务的不可持续性"——这是识别财务造假的黄金指标（真实业务即使遇危机，也不会出现一年内从暴增到暴跌92%的极端波动）。' },
    { id: 5, title: '关于银广夏财务数据趋势，以下说法正确的是（ ）', content: 'A. 1997年主营业务收入下降后，1998年恢复增长，说明业务稳定性强<br>B. 2000年主营业务收入增长率72.8%，符合生物制药行业正常高速增长<br>C. 2001年各项指标断崖式下跌，反映前期高增长缺乏真实业务支撑<br>D. 净资产收益率2000年升至34.56%，体现公司盈利能力持续提升', hint: '', answer: 'C', explanation: 'A错误（1997 - 1998年是波动，非"稳定性强"）；B错误（2000年高增长是造假，非行业正常）；C正确（2001年暴跌是前期造假泡沫破裂）；D错误（ROE是造假推高，非真实盈利能力）。' },
    { id: 6, title: '审计人员分析银广夏利润表，发现2000年（ ）的异常表现，最指向财务造假可能。', content: 'A. 主营业务收入增长率＜主营业务利润增长率<br>B. 主营业务利润增长率＜净利润增长率<br>C. 净利润增长率＜主营业务收入增长率<br>D. 三者增长率基本同步', hint: '', answer: 'B', explanation: '2000年数据：主营收入增72.8%、主营利润增177%、净利润增227% → 净利润增长率＞主营利润增长率。正常逻辑中，净利润需扣除期间费用、税费等，增速通常≤主营利润增速；若净利润增速"反超"且幅度极大，说明期间费用被虚减（配合收入造假），是典型造假特征。' },
    { id: 7, title: '银广夏2001年数据暴跌，审计人员最应怀疑的前期问题是（ ）', content: 'A. 应收账款真实性（多为赊销，本案中虚构出口以现销为主，非核心）<br>B. 存货计价准确性（虚增收入未必同步虚增存货，本案核心是收入端造假）<br>C. 主营业务收入真实性（银广夏造假核心是虚构出口收入，2000年高收入为假，2001年无法延续）<br>D. 固定资产折旧政策合理性（与主营业务收入无直接关联）', hint: '', answer: 'C', explanation: '银广夏造假核心是"虚构天津广夏萃取产品出口"，2000年高收入高利润为伪造，2001年数据暴跌是造假难以为继的结果。因此，暴跌根源是前期主营业务收入造假。' }
];

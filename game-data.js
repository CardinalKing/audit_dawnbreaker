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

// 审计剧场完整剧情
const theaterEvents = [
    {
        id: 1,
        chapter: '第一章 新人报道',
        year: 1,
        scenario: '事务所会议室',
        narration: [
            '2017年盛夏，你以优异成绩从财经大学毕业，',
            '通过层层面试，终于入职「信达会计师事务所」。',
            '这一天，你来到会议室参加入职培训。'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '张所长',
                text: '欢迎加入信达！审计这个行业，说简单很简单，说复杂也很复杂。记住两句话——'
            },
            {
                speaker: 'boss',
                name: '张所长',
                text: '「不做假账」是底线，「专业胜任」是根本。年轻人，好好干！'
            }
        ],
        choices: [
            {
                text: '「请所长放心，我一定坚守原则！」',
                effect: { principle: 15, courage: 5 },
                response: '张所长满意地点点头：「好样的，有这股劲就好！」'
            },
            {
                text: '「我会努力学习，尽快成长！」',
                effect: { wisdom: 10, potential: 10 },
                response: '张所长微笑道：「态度不错，年轻人就要有上进心！」'
            },
            {
                text: '「谢谢所长，我先去熟悉工作了。」',
                effect: { network: 5, career: 5 },
                response: '张所长摆摆手：「去吧去吧，好好跟你的项目经理学习！」'
            }
        ]
    },
    {
        id: 2,
        chapter: '第一章 新人报道',
        year: 1,
        scenario: '项目经理办公室',
        narration: [
            '培训结束后，你被分配给资深项目经理——李明。',
            '你来到李明的办公室报到。'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '李明',
                text: '你好，我是李明。接下来的一年里，你跟着我做项目。审计这行，加班是常态，准备好了吗？'
            }
        ],
        choices: [
            {
                text: '「准备好了！再苦再累我也不怕！」',
                effect: { courage: 10, career: 10 },
                response: '李明眼中闪过一丝欣赏：「好，年轻人就要有这股拼劲！」'
            },
            {
                text: '「我会努力平衡工作和生活的。」',
                effect: { wisdom: 10, health: 10 },
                response: '李明点点头：「嗯，能想到这点也不错，身体是革命的本钱。」'
            },
            {
                text: '「请问我们主要做什么类型的项目？」',
                effect: { wisdom: 15, potential: 5 },
                response: '李明笑着说：「好问题！我们主要做上市公司年报审计，能学到很多东西。」'
            }
        ]
    },
    {
        id: 3,
        chapter: '第二章 成长之痛',
        year: 2,
        scenario: '高级餐厅包间',
        narration: [
            '入职第二年，你已经成长为能独当一面的审计员。',
            '这一天，客户「星辰科技」的财务总监请项目组吃饭。'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '王总监',
                text: '李经理，今年的审计还请多关照。有些「小问题」，灵活处理一下，大家都方便。'
            },
            {
                speaker: 'boss',
                name: '李明',
                text: '王总监，您说笑了。我们都是按准则办事，该怎么样就怎么样。'
            },
            {
                speaker: 'boss',
                name: '王总监',
                text: '（转向你）小同志，你是新人，有些事可以慢慢学。来，这张卡你拿着，平时买杯咖啡。'
            }
        ],
        choices: [
            {
                text: '「谢谢王总监，但我不能收！」',
                effect: { principle: 20, network: -5 },
                response: '王总监脸色有些难看，但李明赞许地看了你一眼。'
            },
            {
                text: '「这怎么好意思...（看向李明）」',
                effect: { principle: 5, wisdom: 10 },
                response: '李明马上说：「王总监，您太客气了，我们真不能收。」'
            },
            {
                text: '「谢谢王总监，那我就不客气了。」',
                effect: { principle: -15, money: 10, risk: 10 },
                response: '王总监满意地笑了，李明却皱起了眉头。'
            }
        ]
    },
    {
        id: 4,
        chapter: '第二章 成长之痛',
        year: 2,
        scenario: '项目复盘会',
        narration: [
            '星辰科技的审计项目结束了，一切顺利。',
            '但你心里总有些不安...'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '李明',
                text: '这次项目大家辛苦了！特别是你，表现不错。'
            },
            {
                speaker: 'boss',
                name: '李明',
                text: '不过我要提醒你——审计这行，有些红线碰不得。今天不收那张卡，你做得对。'
            }
        ],
        choices: [
            {
                text: '「谢谢李哥提醒，我记住了！」',
                effect: { principle: 10, network: 10 },
                response: '李明拍拍你的肩膀：「好好干，我看好你！」'
            },
            {
                text: '「可是这样会不会得罪客户？」',
                effect: { wisdom: 10, principle: -5 },
                response: '李明摇摇头：「得罪一时，好过后悔一世。记住我的话。」'
            },
            {
                text: '「李哥，那我们下次还能接到这个项目吗？」',
                effect: { money: 5, career: 5, principle: -5 },
                response: '李明叹了口气：「项目以后再说，先把人做好。」'
            }
        ]
    },
    {
        id: 5,
        chapter: '第二章 成长之痛',
        year: 2,
        scenario: '深夜办公室',
        narration: [
            '这一年项目特别多，你经常加班到深夜。',
            '这一天，你又是最后一个离开办公室...'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '（内心独白）',
                text: '这样的日子什么时候是个头？每天加班到深夜，陪家人的时间越来越少...'
            },
            {
                speaker: 'boss',
                name: '（内心独白）',
                text: '但看着自己做的项目一个个顺利完成，又觉得很有成就感。选择这一行，到底是对是错？'
            }
        ],
        choices: [
            {
                text: '「再坚持一下，一切都会好起来的！」',
                effect: { career: 15, pressure: 5, health: -5 },
                response: '你给自己打气，继续投入工作。'
            },
            {
                text: '「是该考虑一下工作和生活的平衡了。」',
                effect: { health: 15, family: 10, pressure: -10 },
                response: '你决定以后按时下班，多陪陪家人。'
            },
            {
                text: '「或许该考虑换一份工作？」',
                effect: { potential: 10, risk: 5, career: -5 },
                response: '这个念头在你脑中一闪而过，你摇了摇头，继续工作。'
            }
        ]
    },
    {
        id: 6,
        chapter: '第三章 十字路口',
        year: 3,
        scenario: 'HR办公室',
        narration: [
            '入职第三年，你已经是高级审计员了。',
            '这一天，HR找你谈话。'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: 'HR经理',
                text: '恭喜你，今年的绩效评估非常优秀！所里决定提拔你为项目经理，你觉得怎么样？'
            }
        ],
        choices: [
            {
                text: '「谢谢！我一定不辜负所里的期望！」',
                effect: { career: 20, pressure: 10, potential: 10 },
                response: 'HR经理满意地笑了：「好好干，前途无量！」'
            },
            {
                text: '「我想再准备准备，可以晚一年吗？」',
                effect: { wisdom: 15, pressure: -5, career: 5 },
                response: 'HR经理有些意外，但还是点点头：「可以理解，你再考虑考虑。」'
            },
            {
                text: '「请问晋升后主要负责什么？」',
                effect: { wisdom: 10, network: 5 },
                response: 'HR经理解释了职责，你听得很认真。'
            }
        ]
    },
    {
        id: 7,
        chapter: '第三章 十字路口',
        year: 3,
        scenario: '家里',
        narration: [
            '你回到家，和家人谈起晋升的事。',
            '爱人的反应却有些复杂...'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '爱人',
                text: '晋升是好事，但项目经理是不是更忙了？你已经好久没陪孩子了...'
            }
        ],
        choices: [
            {
                text: '「我会尽量平衡的，再给我几年时间。」',
                effect: { career: 10, family: 5, pressure: 10 },
                response: '爱人叹了口气，但还是支持你的决定。'
            },
            {
                text: '「你说得对，是该多陪陪家人了。」',
                effect: { family: 20, health: 10, career: -10 },
                response: '爱人欣慰地笑了，一家人度过了温馨的一晚。'
            },
            {
                text: '「这是个难得的机会，错过了太可惜。」',
                effect: { career: 15, money: 5, family: -10 },
                response: '爱人没再说什么，但你能感觉到她的失落。'
            }
        ]
    },
    {
        id: 8,
        chapter: '第三章 十字路口',
        year: 3,
        scenario: '客户仓库',
        narration: [
            '最终，你还是接受了晋升，成为了项目经理。',
            '第一个独立负责的项目，就遇到了麻烦...'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '仓库管理员',
                text: '李经理，您看这仓库都看了三遍了，还有什么不放心的？'
            },
            {
                speaker: 'boss',
                name: '你',
                text: '（发现疑点）等等，这排货架上的货物，包装好像和其他的不一样...'
            },
            {
                speaker: 'boss',
                name: '仓库管理员',
                text: '（有些紧张）这...这是刚到的新货，还没来得及整理。'
            }
        ],
        choices: [
            {
                text: '「麻烦把这排货物拆箱，我要抽验。」',
                effect: { principle: 20, courage: 15, risk: 10 },
                response: '管理员脸色煞白，你知道，你发现了大问题。'
            },
            {
                text: '「好吧，这次就算了，下次注意。」',
                effect: { principle: -15, risk: 20, network: 5 },
                response: '管理员松了一口气，但你心里却忐忑不安。'
            },
            {
                text: '「我先记下来，回头再和你们财务确认。」',
                effect: { wisdom: 15, principle: 5, risk: 5 },
                response: '你决定先了解清楚情况，再做判断。'
            }
        ]
    },
    {
        id: 9,
        chapter: '第四章 权力游戏',
        year: 5,
        scenario: '合伙人办公室',
        narration: [
            '入职第五年，你已经是事务所的骨干了。',
            '这一天，合伙人找你谈话。'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '张所长',
                text: '你这几年的表现大家有目共睹。我准备推荐你做合伙人，你觉得怎么样？'
            },
            {
                speaker: 'boss',
                name: '张所长',
                text: '不过有个条件——「华信集团」这个项目，你要「灵活处理」。你懂我的意思吧？'
            }
        ],
        choices: [
            {
                text: '「对不起张所长，我做不到。」',
                effect: { principle: 25, courage: 20, career: -15 },
                response: '张所长脸色很难看，但你知道，你做了正确的选择。'
            },
            {
                text: '「华信集团风险太高了，能不能换个项目？」',
                effect: { wisdom: 20, principle: 10, network: -5 },
                response: '张所长有些失望，但没有勉强你。'
            },
            {
                text: '「好的张所长，我明白了。」',
                effect: { principle: -25, risk: 25, career: 20, money: 15 },
                response: '张所长满意地点点头，但你心里的重担，却越来越沉。'
            }
        ]
    },
    {
        id: 10,
        chapter: '第四章 权力游戏',
        year: 5,
        scenario: '项目危机会议',
        narration: [
            '华信集团的项目还是出了问题，',
            '证监会立案调查，事务所紧急召开会议。'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '张所长',
                text: '现在情况很麻烦，证监会那边一定要有人负责。你是项目经理，你说怎么办？'
            },
            {
                speaker: 'boss',
                name: '张所长',
                text: '你把责任担下来，就说是个人失误。我保证，事情过去后，你的位置还是你的。'
            }
        ],
        choices: [
            {
                text: '「对不起，这个责任我担不起。」',
                effect: { principle: 20, courage: 20, risk: -10 },
                response: '你决定向证监会说明一切，寻求宽大处理。'
            },
            {
                text: '「所长，当初是您让我那样做的...」',
                effect: { wisdom: 15, network: -15, risk: 5 },
                response: '张所长脸色铁青，但你的话，让其他合伙人开始重新审视。'
            },
            {
                text: '「好，我一个人承担。」',
                effect: { principle: -20, network: 10, risk: 25 },
                response: '你一个人扛下了所有，但心里的委屈，只有自己知道。'
            }
        ]
    },
    {
        id: 11,
        chapter: '第四章 权力游戏',
        year: 5,
        scenario: '医院诊室',
        narration: [
            '重压之下，你的身体终于出了问题。',
            '医生建议你休养一段时间。'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '医生',
                text: '年轻人，你的各项指标都不太好。压力太大，睡眠不足。我建议你休息一段时间，否则后果不堪设想。'
            }
        ],
        choices: [
            {
                text: '「谢谢医生，我会好好休息的。」',
                effect: { health: 30, pressure: -25, wisdom: 10 },
                response: '你决定暂时放下工作，好好陪伴家人。'
            },
            {
                text: '「医生，能不能开点药，我还有很多工作。」',
                effect: { health: -10, career: 10, pressure: 10 },
                response: '医生摇摇头，但还是给你开了药。'
            },
            {
                text: '「我明白了，我会调整的。」',
                effect: { health: 15, wisdom: 15, pressure: -10 },
                response: '你决定调整工作节奏，不再那么拼命。'
            }
        ]
    },
    {
        id: 12,
        chapter: '第五章 终极抉择',
        year: 6,
        scenario: '证监会会议室',
        narration: [
            '经过半年的调查，华信集团的案件终于有了结果。',
            '你被要求到证监会接受询问。'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '调查人员',
                text: '关于华信集团的审计报告，你有什么要说的？现在坦白，还能算主动交代。'
            }
        ],
        choices: [
            {
                text: '「我全部交代，这是我保存的证据。」',
                effect: { principle: 30, courage: 25, risk: -20 },
                response: '你提供了关键证据，最终被认定为重大立功表现。'
            },
            {
                text: '「我愿意配合调查，如实说明情况。」',
                effect: { principle: 15, wisdom: 15, risk: -10 },
                response: '你如实说明了情况，态度良好，得到了宽大处理。'
            },
            {
                text: '「我都是按所长的指示做的...」',
                effect: { principle: -10, wisdom: 5, network: -20 },
                response: '你的话引发了连锁反应，更多人被牵扯进来。'
            }
        ]
    },
    {
        id: 13,
        chapter: '第五章 终极抉择',
        year: 6,
        scenario: '家中',
        narration: [
            '案件结束后，你回到了家中。',
            '未来的路该怎么走，你需要好好想想。'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '爱人',
                text: '不管你做什么决定，我都支持你。这些年你太辛苦了，不如换个活法？'
            }
        ],
        choices: [
            {
                text: '「我想换个行业，重新开始。」',
                effect: { potential: 25, health: 15, pressure: -20 },
                response: '你决定离开审计行业，寻找新的可能性。'
            },
            {
                text: '「我想开一家自己的事务所。」',
                effect: { potential: 20, principle: 15, risk: 15 },
                response: '你决定用自己的方式，做真正的审计。'
            },
            {
                text: '「我想先休息一段时间，陪陪家人。」',
                effect: { family: 25, health: 20, pressure: -25 },
                response: '你决定给自己放个长假，思考清楚未来的方向。'
            }
        ]
    },
    {
        id: 14,
        chapter: '第五章 终极抉择',
        year: 6,
        scenario: '猎头电话',
        narration: [
            '就在这时，一个猎头公司给你打来了电话，',
            '提供了一个意想不到的机会。'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '猎头',
                text: '陈总，我们这边有个非常合适的机会——前几年被你「发现」的那家企业，现在想请你去做内审总监，待遇是现在的三倍！'
            }
        ],
        choices: [
            {
                text: '「谢谢，但我不能去。」',
                effect: { principle: 20, network: -5, wisdom: 10 },
                response: '你婉拒了邀请，但你知道，你的坚持，有人看在眼里。'
            },
            {
                text: '「这倒是个不错的机会，我考虑一下。」',
                effect: { money: 20, career: 10, wisdom: 10 },
                response: '你开始认真考虑这个可能性。'
            },
            {
                text: '「好，我什么时候入职？」',
                effect: { money: 30, career: 15, principle: -10 },
                response: '你接受了邀请，开始了新的职业生涯。'
            }
        ]
    },
    {
        id: 15,
        chapter: '终章',
        year: 6,
        scenario: '深夜',
        narration: [
            '你站在窗前，看着这座城市的夜景。',
            '入行六年，酸甜苦辣，历历在目。'
        ],
        dialogs: [
            {
                speaker: 'boss',
                name: '（内心独白）',
                text: '如果再给你一次机会，你还会选择这行吗？你还会做出同样的选择吗？'
            }
        ],
        choices: [
            {
                text: '「我会做出同样的选择。」',
                effect: { principle: 15, courage: 10, wisdom: 10 },
                response: '你不后悔自己的选择，因为你知道，有些东西，比什么都重要。'
            },
            {
                text: '「或许会有不同的选择吧。」',
                effect: { wisdom: 15, family: 10, health: 10 },
                response: '你明白了一些事情，或许，这就是成长。'
            },
            {
                text: '「人生没有如果，只有后果和结果。」',
                effect: { wisdom: 25, potential: 10 },
                response: '你释然了，无论过去如何，未来，还在你自己手中。'
            }
        ]
    }
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

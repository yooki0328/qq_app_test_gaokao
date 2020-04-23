const sourceQuestions = [
    {
        title: '【语文】下列词语中加点的字，读音全都正确的一组是?',
        answers: [
            { text: '鞭挞(tà)、骨骼(gé)、辗(niǎn)转反侧、蜚(fēi)声中外', isCorrect: 0 },
            { text: '人寰(huán)、攫(jué)取、寻瑕伺隙(xì)、啮(niè)齿为盟',isCorrect: 1 },
            { text: '颀(qí)长、悚(sù)然、彰善瘅(dàn)恶、韬光养晦(huì)',  isCorrect: 0 },
            { text: '抵牾(wǔ)、横亘(gèn)、造福桑梓(zǐ)、筋(jīng)疲力尽',  isCorrect: 0 }
        ]
    },
    {
        title: '【文综】下列哪个是北纬回归线的准确数值?',
        answers: [
            { text: '23.87度',  isCorrect: 0 },
            { text: '26度',  isCorrect: 0 },
            { text: '24度',  isCorrect: 0 },
            { text: '23.26度',  isCorrect: 1 }
        ]
    },
    {
        title: '【文综】从唯物史观看，之所以讴歌劳动者，是因为：',
        answers: [
            { text: '劳动者的生产活动是社会存在和发展的基础',  isCorrect: 1 },
            { text: '劳动者的知识结构随社会的发展而不断优化',  isCorrect: 0 },
            { text: '劳动者是创建社会的社会主体和真正英雄',  isCorrect: 0 },
            { text: '脑力劳动与体力劳动者在劳动创造中的作用日益融合',  isCorrect: 0 }
        ]
    },
    {
        title: '【文综】俄国十月社会主义革命进程中出现过两个政权并存的特殊局面，标志这一局面结束的事件是（）',
        answers: [
            { text: '二月革命的发生', isCorrect: 0 },
            { text: '《四月提纲》的提出', isCorrect: 0 },
            { text: '七月事件的发生', isCorrect: 1 },
            { text: '十月革命的胜利', isCorrect: 0 },
        ]
    },
    {
        title: '【文综】某中学历史兴趣小组准备开展宋元时期科技成就的探究性学习。需重点查阅',
        answers: [
            { text: '《考工记》', isCorrect: 0 },
            { text: '《神农本草经》', isCorrect: 0 },
            { text: '《齐民要术》', isCorrect: 0 },
            { text: '《梦溪笔谈》', isCorrect: 1 },
        ]
    },
    {
        title: '【文综】洋务派与顽固派的争辩，其核心是',
        answers: [
            { text: '根本目的之争', isCorrect: 0 },
            { text: '治国方略之争', isCorrect: 1 },
            { text: '新旧道德之争', isCorrect: 0 },
            { text: '政治体制之争', isCorrect: 0 },
        ]
    },
    {
        title: '【理综】一块农田中有豌豆、杂草、田鼠和土壤微生物等生物，其中属于竞争关系的是：',
        answers: [
            { text: '豌豆和杂草',  isCorrect: 0 },
            { text: '细菌和其细胞内的噬菌体',  isCorrect: 0 },
            { text: '田鼠和杂草',  isCorrect: 0 },
            { text: '豌豆和其根中的根瘤菌',  isCorrect: 1 }
        ]
    },
    {
        title: '【英语】Thieves may run away when the alarm __',
        answers: [
            { text: 'will go off',  isCorrect: 0 },
            { text: 'goes off',  isCorrect: 1 },
            { text: 'has go off',  isCorrect: 0 },
            { text: 'went off',  isCorrect: 0 }
        ]
    },
    {
        title: '【英语】人类镰刀形细胞贫血发生的根本原因是',
        answers: [
            { text: '基因突变',  isCorrect: 1 },
            { text: '染色体结构变异',  isCorrect: 0 },
            { text: '基因重组',  isCorrect: 0 },
            { text: '染色体数目变异',  isCorrect: 0 }
        ]
    },
    {
        title: '【理综】请找出【铁、铜、锌、镁、铝】化学元素的准确写法',
        answers: [
            { text: 'fe、cu、zn、mg、al',  isCorrect: 0 },
            { text: 'zn、fe、mg、cu、al',  isCorrect: 0 },
            { text: 'Fe、Cu、Zn、Mg、Al',  isCorrect: 1 },
            { text: 'Cu、Mg、Fe、Zn、Al',  isCorrect: 0 }
        ]
    },
    {
        title: '【理综】揭示出DNA分子是双螺旋结构的科学家是（）',
        answers: [
            { text: '孟德尔',  isCorrect: 0 },
            { text: '萨顿',  isCorrect: 0 },
            { text: '艾弗里',  isCorrect: 0 },
            { text: '沃森和克里克',  isCorrect: 1 }
        ]
    },
    {
        title: '【理综】下列哪些公式写法是不正确的？',
        answers: [
            { text: '重力：G=mg',  isCorrect: 0 },
            { text: '速度：V=t/S',  isCorrect: 1 },
            { text: '功率：P=W/t=FV',  isCorrect: 0 },
            { text: '密度：ρ=m/V',  isCorrect: 0 }
        ]
    },
    {
        title: '【文综】鸦片战争发生在哪一年？',
        answers: [
            { text: '1835年',  isCorrect: 0 },
            { text: '1846年',  isCorrect: 0 },
            { text: '1845年',  isCorrect: 0 },
            { text: '1840年',  isCorrect: 1 }
        ]
    },
    {
        title: '【英语】请补充完整：If you __ smoke, please go outside.',
        answers: [
            { text: 'should',  isCorrect: 0 },
            { text: 'must',  isCorrect: 1 },
            { text: 'may',  isCorrect: 0 },
            { text: 'can',  isCorrect: 0 }
        ]
    },
    {
        title: '【英语】请补充完整：She was playing __ piano.',
        answers: [
            { text: '/',  isCorrect: 0 },
            { text: 'an',  isCorrect: 0 },
            { text: 'a',  isCorrect: 0 },
            { text: 'the',  isCorrect: 1 }
        ]
    },
    {
        title: '【数学】下列哪个不是求两角和差的三角函数公式：',
        answers: [
            { text: 'sin(A+B)=sinAcosB+cosAsinB',  isCorrect: 0 },
            { text: 'sin2A=2sinA*cosA',  isCorrect: 1 },
            { text: 'cos(A+B)=cosAcosB-sinAsinB',  isCorrect: 0 },
            { text: 'cos(A-B)=cosAcosB+sinAsinB',  isCorrect: 0 }
        ]
    },
    {
        title: '【文综】20世纪80年代，在深圳国贸大厦施工中，中建三局创下了怎样的深圳速度？',
        answers: [
            { text: '三天一层楼', isCorrect: 1 },
            { text: '五天一层楼', isCorrect: 0 },
            { text: '七天一层楼', isCorrect: 0 },
            { text: '十天一层楼', isCorrect: 0 },
        ]
    },
    {
        title: '【语文】下列各组词语中，有错别字的一项是',
        answers: [
            { text: '宿命 荒芜 头绪 身临其境', isCorrect: 0},
            { text: '暴躁 落寞 座落 专心致志', isCorrect: 1},
            { text: '恍惚 焦灼 安详 急于求成', isCorrect: 0},
            { text: '苍幽 沧桑 窸窣 亘古不变', isCorrect: 0},
        ]
    },
    {
        title: '【语文】下列各组词语中，有错别字的一项是',
        answers: [
            { text: '宿命 荒芜 头绪 身临其境', isCorrect: 0},
            { text: '暴躁 落寞 座落 专心致志', isCorrect: 1},
            { text: '恍惚 焦灼 安详 急于求成', isCorrect: 0},
            { text: '苍幽 沧桑 窸窣 亘古不变', isCorrect: 0},
        ]
    },
    {
        title: '下列各组词语中，有错别字的一组是（ ）',
        answers: [
            { text: '寒暄 执着 踌躇 众说纷纭', isCorrect: 0},
            { text: '慰藉 隽永 朦胧 眼花瞭乱', isCorrect: 1},
            { text: '鞭笞 赋予 萦绕 出神入化', isCorrect: 0},
            { text: '窟窿 穹隆 缥缈 叹为观止', isCorrect: 0},
        ]
    },
    {
        title: '《巴黎圣母院》享誉世界文坛，作者将可歌可泣的故事和生动丰富的戏剧性场面有机地连缀起来，使这部小说具有很强的可靠性。下列作品与其风格相似的是？',
        answers: [
            { text: '《诗经》', isCorrect: 0},
            { text: '《离骚》', isCorrect: 1},
            { text: '《战争与和平》', isCorrect: 0},
            { text: '《格尔尼卡》', isCorrect: 0}
        ]
    },
    {
        title: '真核生物染色体中DNA遗传信息的传递与表达过程，在细胞质中进行的是（）',
        answers: [
            { text: '复制', isCorrect: 0},
            { text: '转录', isCorrect: 0},
            { text: '翻译', isCorrect: 1},
            { text: '转录和翻译', isCorrect: 0}
        ]
    },
    {
        title: '中国古代地名中的“阴”“阳”往往体现了该地与相邻山、水的关系。“阴”的方位是（）',
        answers: [
            { text: '山之南水之北', isCorrect: 0},
            { text: '山之南水之南', isCorrect: 0},
            { text: '山之北水之北', isCorrect: 0},
            { text: '山之北水之南', isCorrect: 1}
        ]
    },
    {
        title: '1949年10月1日中华人民共和国成立。当时一些报刊评论说“中国人民站起来了”，这句话的含义之一是（）',
        answers: [
            { text: '新民主主义革命已经完成', isCorrect: 0},
            { text: '国民党在大陆的势力被彻底清除', isCorrect: 0},
            { text: '人民掌握了国家权力', isCorrect: 0},
            { text: '人民代表大会制度确立', isCorrect: 1}
        ]
    },
    {
        title: '“默品其滋味，相思泪沾巾”描写的是哪种食品？',
        answers: [
            { text: '月饼', isCorrect: 1 },
            { text: '红豆', isCorrect: 0 },
            { text: '粽子', isCorrect: 0 }
        ]
    },
    {
        title: '黄庭坚的《登快阁》中写道：“此心吾与白鸥盟”。请问“与白鸥盟”借指什么？',
        answers: [
            { text: '白鸥结盟', isCorrect: 0 },
            { text: '以白鸥为宠物', isCorrect: 0 },
            { text: '归隐', isCorrect: 1 }
        ]
    },
    {
        title: '人精子的染色体数目是23条，卵细胞的染色体数目是23条，则人受精卵的染色体数目应为（）',
        answers: [
            { text: '23条', isCorrect: 0 },
            { text: '46条', isCorrect: 1 },
            { text: '69条', isCorrect: 0 },
            { text: '92条', isCorrect: 0 }
        ]
    },
    {
        title: '“宁为百夫长，胜作一书生。”出自杨炯的《从军行》。请问诗中的“百夫长”泛指什么身份的人？',
        answers: [
            { text: '士兵', isCorrect: 0 },
            { text: '下级军官', isCorrect: 1 },
            { text: '骑兵', isCorrect: 0 }
        ]
    },
    {
        title: '“一箫一剑平生意，负尽狂名十五年。”出自何人之手？',
        answers: [
            { text: '龚自珍', isCorrect: 1 },
            { text: '陆游', isCorrect: 0 },
            { text: '辛弃疾', isCorrect: 0 }
        ]
    },
    {
        title: '“造化钟神秀，阴阳割昏晓。”描写的是哪座山？',
        answers: [
            { text: '华山', isCorrect: 0 },
            { text: '嵩山', isCorrect: 0 },
            { text: '泰山', isCorrect: 1 }
        ]
    },
    {
        title: '诗句“玉盆纤手弄清泉，琼珠碎却圆”中的“玉盆”是指什么？',
        answers: [
            { text: '月亮', isCorrect: 0 },
            { text: '荷叶', isCorrect: 1 },
            { text: '水中月影', isCorrect: 0 }
        ]
    },
    {
        title: '诗句“平阳歌舞新承宠，帘外春寒赐锦袍。”诗中的“新承宠”是指谁？',
        answers: [
            { text: '赵飞燕', isCorrect: 0 },
            { text: '卫子夫', isCorrect: 1 },
            { text: '陈阿娇', isCorrect: 0 }
        ]
    },
    {
        title: '岑参的《白雪歌送武判官归京》中写道：“瀚海阑干百丈冰，愁云惨淡万里凝。”中的“瀚海”是什么意思？',
        answers: [
            { text: '沙漠', isCorrect: 1 },
            { text: '大海', isCorrect: 0 },
            { text: '星空', isCorrect: 0 }
        ]
    },
    {
        title: '李商隐的《无题》中写道：“蓬山此去无多路，青鸟殷勤为探看。”相传诗中的“青鸟”是给哪位女神取食的？',
        answers: [
            { text: '西王母', isCorrect: 1 },
            { text: '嫦娥', isCorrect: 0 },
            { text: '女娲', isCorrect: 0 }
        ]
    },
    {
        title: '下列哪个文学作品不属于宋词？',
        answers: [
            { text: '《天净沙　秋思》', isCorrect: 1 },
            { text: '《祝英台近　晚春》', isCorrect: 0 },
            { text: '《生查子　元夕》', isCorrect: 0 }
        ]
    },
    {
        title: '“卜算子”是一个词牌名，相传这个“卜算子”是借用了唐代哪位诗人的绰号？',
        answers: [
            { text: '王勃', isCorrect: 0 },
            { text: '杨炯', isCorrect: 0 },
            { text: '骆宾王', isCorrect: 1 }
        ]
    },
    {
        title: '一种生物的同一种性状的不同表现类型叫做（）',
        answers: [
            { text: '显性性状', isCorrect: 0 },
            { text: '隐性性状', isCorrect: 0 },
            { text: '相对性状', isCorrect: 1 },
            { text: '表现型', isCorrect: 0 }
        ]
    },
    {
        title: '性状分离是指（）',
        answers: [
            { text: '杂合子后代表现出相对性状的不同类型', isCorrect: 1 },
            { text: '染色体的分离', isCorrect: 0 },
            { text: '遗传因子的分离', isCorrect: 0 },
            { text: '以上说法都对', isCorrect: 0 }
        ]
    },
    {
        title: '下列哪项表示的是基因型为AaBb的个体产生的配子？',
        answers: [
            { text: 'Aa', isCorrect: 0 },
            { text: 'Aabb', isCorrect: 0 },
            { text: 'Ab', isCorrect: 1 },
            { text: 'AaBb', isCorrect: 0 }
        ]
    },
    {
        title: '一个卵原细胞经减数分裂最终形成（）',
        answers: [
            { text: '1个卵细胞', isCorrect: 1 },
            { text: '2个卵细胞', isCorrect: 0 },
            { text: '3个卵细胞', isCorrect: 0 },
            { text: '4个卵细胞', isCorrect: 0 }
        ]
    },
    {
        title: '在抗震救灾中，我空降部队从高空跳伞，当伞兵受到的合力为0时，他将（）',
        answers: [
            { text: '加速下降', isCorrect: 0 },
            { text: '匀速下降', isCorrect: 1 },
            { text: '减速下降', isCorrect: 0 },
            { text: '加速上升', isCorrect: 0 }
        ]
    },
    {
        title: 'We won\'t give up __ we should fail ten times.',
        answers: [
            { text: 'even if', isCorrect: 1 },
            { text: 'since', isCorrect: 0 },
            { text: 'whether', isCorrect: 0 },
            { text: 'until', isCorrect: 0 }
        ]
    },
    {
        title: 'The monitor suggested that we __ for a picnic on Sunday',
        answers: [
            { text: 'went', isCorrect: 0 },
            { text: 'must go', isCorrect: 0 },
            { text: 'could go', isCorrect: 0 },
            { text: 'go', isCorrect: 1 }
        ]
    },
    {
        title: 'There is little doubt __ her advice is of greater value to us',
        answers: [
            { text: 'that', isCorrect: 1 },
            { text: 'whether', isCorrect: 0 },
            { text: 'why', isCorrect: 0 },
            { text: 'if', isCorrect: 0 }
        ]
    },
    {
        title: 'In __, the northerners are keen on dumplings while the southerners are fond of rice',
        answers: [
            { text: 'common', isCorrect: 1 },
            { text: 'general', isCorrect: 0 },
            { text: 'total', isCorrect: 0 },
            { text: 'partic', isCorrect: 0 }
        ]
    },
    {
        title: 'The fact __ he didn\'t see Lao Li yesterday is true',
        answers: [
            { text: 'which', isCorrect: 0 },
            { text: 'that', isCorrect: 1 },
            { text: 'when', isCorrect: 0 },
            { text: 'what', isCorrect: 0 }
        ]
    },
    {
        title: '下列各地中，地壳最厚处在__',
        answers: [
            { text: '华北平原', isCorrect: 0 },
            { text: '云贵高原', isCorrect: 0 },
            { text: '青藏高原', isCorrect: 1 },
            { text: '四川盆地', isCorrect: 0 }
        ]
    },
    {
        title: '在天体系统的层次划分中，太阳系属于',
        answers: [
            { text: '最低一级的天体系统', isCorrect: 0 },
            { text: '最高一级的天体系统', isCorrect: 0 },
            { text: '与河外星系同一级别的天体系统', isCorrect: 0 },
            { text: '比银河系低一级的天体系统', isCorrect: 1 }
        ]
    },
    {
        title: '北半球各地昼渐短、夜渐长的时期是',
        answers: [
            { text: '春分日至秋分日', isCorrect: 0 },
            { text: '秋分日至春分日', isCorrect: 0 },
            { text: '夏至日至冬至日', isCorrect: 1 },
            { text: '冬至日至夏至日', isCorrect: 0 }
        ]
    },
    {
        title: '北京天安门广场每天升国旗的时间是根据日出的时刻而定的，下列日期中，升旗仪式最早的是：',
        answers: [
            { text: '5月1日', isCorrect: 0 },
            { text: '7月1日', isCorrect: 0 },
            { text: '8月1日', isCorrect: 1 },
            { text: '10月1日', isCorrect: 0 }
        ]
    },
    {
        title: '元旦这一天，太阳直射点：',
        answers: [
            { text: '在南半球并向南移动', isCorrect: 0 },
            { text: '在南半球但向北移动', isCorrect: 1 },
            { text: '在北半球并向北移动', isCorrect: 0 },
            { text: '在北半球但向南移动', isCorrect: 0 }
        ]
    },
    {
        title: '下列反应中属于吸热反应的是',
        answers: [
            { text: '活泼金属与酸反应', isCorrect: 0 },
            { text: '制造水煤气', isCorrect: 1 },
            { text: '酸碱中和反应', isCorrect: 0 },
            { text: '镁条燃烧', isCorrect: 0 }
        ]
    },
    {
        title: '诗句“春蚕到死丝方尽，蜡炬成灰泪始干”中“丝”和“泪”分别指：',
        answers: [
            { text: '纤维素 油脂', isCorrect: 0 },
            { text: '蛋白质 烃类', isCorrect: 1 },
            { text: '淀粉 油脂', isCorrect: 0 },
            { text: '蛋白质 油脂', isCorrect: 0 }
        ]
    },
    {
        title: '【文综】李白诗句“脚着谢共屐，身登青云梯”中“谢共屐”最早出现于：',
        answers: [
            { text: '春秋战国时期', isCorrect: 0 },
            { text: '秦汉时期', isCorrect: 1 },
            { text: '魏晋南北朝时期', isCorrect: 0 },
            { text: '隋唐时期', isCorrect: 0 }
        ]
    },
    {
        title: '下列关于DNA分子复制的表述中，错误的是',
        answers: [
            { text: 'DNA复制随着染色体的复制而完成', isCorrect: 0 },
            { text: 'DNA复制是一个边解旋边复制的过程', isCorrect: 0 },
            { text: '复制的过程不需要消耗能量', isCorrect: 1 },
            { text: '复制的方式属于半保留复制', isCorrect: 0 }
        ]
    },
    {
        title: '下列物质中，不属于有机物的是',
        answers: [
            { text: '尿素', isCorrect: 0 },
            { text: '酒精', isCorrect: 0 },
            { text: '苏打', isCorrect: 1 },
            { text: '塑料', isCorrect: 0 }
        ]
    },
    {
        title: '唐朝中央政府具有较高的行政效率，主要原因在于',
        answers: [
            { text: '增设机构，独立施政', isCorrect: 0 },
            { text: '分工明确，相互协调', isCorrect: 1 },
            { text: '一职多官，互相牵制', isCorrect: 0 },
            { text: '简化机构，总揽于上', isCorrect: 0 }
        ]
    },
    {
        title: '下列食品中属于碱性食品的是',
        answers: [
            { text: '鸡肉', isCorrect: 0 },
            { text: '牛奶', isCorrect: 0 },
            { text: '柠檬', isCorrect: 1 },
            { text: '鱼肉', isCorrect: 0 }
        ]
    },
    {
        title: '下列食品中属于碱性食品的是',
        answers: [
            { text: '鸡肉', isCorrect: 0 },
            { text: '牛奶', isCorrect: 0 },
            { text: '柠檬', isCorrect: 1 },
            { text: '鱼肉', isCorrect: 0 }
        ]
    },
    {
        title: '转录，是指遗传信息的传递从（）',
        answers: [
            { text: 'RNA->DNA', isCorrect: 0 },
            { text: 'DNA->RNA', isCorrect: 1 },
            { text: 'DNA->DNA', isCorrect: 0 },
            { text: 'DNA->蛋白质', isCorrect: 0 }
        ]
    },
];
let questions = []
Page({
    data: {
        curPage: 'index',
        score: 0,
        timer: null,
        curIndex: 1,
        curQuestion: {},
        resultShow: false,
        clicked: false,
        deg1: 0,
        deg2: 0.1,
        remainTime: 15000,
        level: 1,
        wrongMaskShow: false,
        animationData: {},
        admitShow: false,
        allScore: 0,
        videoAd: 0
    },
    onLoad() {
        const videoAd = qq.createRewardedVideoAd({
            adUnitId: '13a15b4dfe610162cc8880e6d37ec8d1'
        });
        videoAd.onClose(res => {
            const { isEnded } = res;
            if (isEnded) {
                this.startTest();
                this.setData({ resultShow:false, score: 0, curIndex: 1 });
            } else {
                qq.showModal({
                    title: '提示',
                    content: '视频需要播放完毕，才能重新测试哦',
                    success(res) {
                      
                    }
                })
            }
        })
        this.setData({ videoAd });
    },
    startTest () {
        this.initQuestion();
        const curQuestion = questions[0];
        this.setData({ curPage: 'question', curQuestion, resultShow: false, curIndex: 1, clicked: false });
        /** 开始倒计时 */
        this.startCountDown();
    },
    startCountDown () {
        this.setData({
            deg1: 0,
            deg2: 0.1,
            remainTime: 15000
        });
        const timer = setInterval(() => {
            let deg1 = this.data.deg1;
            let deg2 = this.data.deg2;
            let remainTime = this.data.remainTime;
            if (remainTime <= 7500) {
                deg1 += 2.4;
                deg2 = 0;
            } else {
                deg2 += 2.4;
            }
            if (deg2 >= 178) {
                deg2 = 0;
            }
            remainTime -= 100;
            this.setData({ deg1, deg2, remainTime });
            if (remainTime <= 0) {
                this.stopCountDown(true);
                return;
            }
        }, 100);
        this.setData({ timer });
    },
    stopCountDown(notClick) {
        clearInterval(this.data.timer);
        this.setData({ timer: null });
        notClick && this.selectedWrong();
    },
    selectAnswer (e) {
        if (this.data.clicked) {
            return;
        } else {
            this.setData({ clicked: true });
        }
        const { index } = e.target.dataset;
        const curQuestion = this.data.curQuestion;
        const curAnswer = curQuestion.answers[index];
        // 点击初始状态
        curAnswer.status = '0';
        this.setData({ curQuestion });
        this.stopCountDown();
        setTimeout(() => {
            if (curAnswer.isCorrect == 1) {
                this.selectedCorrect(index);
            } else {
                this.selectedWrong(index);
            }
        }, 500);
    },
    selectedCorrect (index) {
        const curQuestion = this.data.curQuestion;
        const curAnswer = curQuestion.answers[index];
        curAnswer.status = '1';
        this.setData({ score: this.data.score + 10, curQuestion, allScore: this.data.allScore + 10 });
        this.selectNext();
    },
    selectedWrong (index) {
        const curQuestion = this.data.curQuestion;
        if (index !== undefined) {
            const curAnswer = curQuestion.answers[index];
            curAnswer.status = '2';
        }
        curQuestion.answers.find(ans => ans.isCorrect).status = '1';
        this.setData({ curQuestion, wrongMaskShow: true });
        this.selectNext();
    },
    selectNext () {
        setTimeout(() => {
            const animation = qq.createAnimation({
                duration: 1000,
                timingFunction: 'ease-in-out',
            });
            if (this.data.curIndex < 6) {
                animation.translate('-100%', 0).step();
                animation.translate(0, 0).step({ duration: 1000 });
            }
            this.setData({ animationData: animation.export() }, () => {
                setTimeout(() => {
                    this.setData({ wrongMaskShow: false });
                    if (this.data.curIndex < 6) {
                        this.nextQuestion();
                    } else {
                        this.stopTest();
                    }
                },800);
            });
        }, 800);
    },
    /** 下一道题 */
    nextQuestion () {
        this.startCountDown();
        const curIndex = this.data.curIndex;
        const curQuestion = questions[curIndex];
        this.setData({ curQuestion, curIndex: curIndex + 1, clicked: false });
    },
    /** 答题结束 */
    stopTest () {
        this.stopCountDown();
        this.setData({ resultShow: true });
        // let best = { bestConsumeTime: 61, bestScore: -1 };
        // /** 缓存 */
        // try {
        //     best = JSON.parse(wx.getStorageSync('best'));
        // } catch (e) {
        //     best = { bestConsumeTime: 61, bestScore: -1 };
        // }
        // if (this.data.score >= best.bestScore) {
        //     bestScore = this.data.score;
        //     bestConsumeTime = ((best.bestConsumeTime > consumeTime) || this.data.score != best.bestScore) ? consumeTime : best.bestConsumeTime;
        //     wx.setStorageSync('best',JSON.stringify({ bestScore, bestConsumeTime }));
        // } else {
        //     bestScore = best.bestScore;
        //     bestConsumeTime = best.bestConsumeTime;
        // }
        // this.setData({ curPage: 'result', resultShow: true, consumeTime, bestScore, bestConsumeTime });
    },
    initQuestion(tag) {
        function randomSort(a, b) { return Math.random() > 0.5 ? -1 : 1; }
        const level = this.data.level;
        if (tag) {
            questions = sourceQuestions.slice(0, 6);
        } else {
            questions = sourceQuestions.slice((level-1) * 6, level * 6);
        }
        questions.sort(randomSort);
        questions.forEach(ques => { 
            ques.answers.sort(randomSort);
            ques.answers.forEach(ans => {
                ans.status = '-1';
            })
        });
    },
    /** 重新测试 */
    testAgain () {
        qq.showModal({
            title: '提示',
            content: '完整观看视频可以从本关重新开始,否则从第一关开始',
            success: res => {
                if (res.cancel) {
                    /** 重新开始, 回到首页 */
                    this.initQuestion(true);
                    this.setData({ curPage: 'index', level: 1, score: 0, allScore: 0, resultShow: false });
                } else {
                    let videoAd = this.data.videoAd;
                    videoAd.load()
                    .then(() => {
                        videoAd.show().catch(err => {});
                    })
                    .catch(err => {});
                }
            }
        })
        
    },
    gotoHistory () {
        qq.navigateTo({ url: '/pages/history/index'});        
    },
    /** 挑战下一关卡 */
    testNextLevel () {
        this.setData({ level: this.data.level + 1, score: 0, resultShow: false }, () => {
            this.startTest();
        })
    },
    /** 查看录取通知 */
    viewAdmit () {
        qq.navigateTo({ url: `/pages/admit/index?score=${this.data.allScore}`});
    },
    /** 分享 */
    onShareAppMessage () {
        return {
            title: '快来测试一下高考送分题，你还会多少？',
            path: '/pages/index/index'
        }
    },
});

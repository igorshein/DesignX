export default {
  _name: '中文',

  lang: {
    ru: 'РУС',
    en: 'ENG',
    zh: '中文',
    title: '界面语言',
    switcherTitle: '语言'
  },

  nav: {
    browse: '浏览',
    favorites: '收藏',
    matcher: '匹配',
    systems: '设计系统',
    philosophies: '设计哲学',
    process: '流程',
    references: '参考',
    tools: '工具',
    about: '关于'
  },

  search: {
    placeholder: '按名称、标签、描述搜索技能...',
    hexPlaceholder: '#4da3ff',
    hexTitle: '按十六进制颜色搜索系统。结果在「设计系统」选项卡中',
    pressToSearch: '按 / 搜索'
  },

  filter: {
    all: '全部',
    allProducts: '所有产品',
    category: '类别',
    level: '难度',
    productType: '产品类型',
    source: '来源',
    rating: '评分',
    any: '不限',
    beginner: '初级',
    intermediate: '中级',
    advanced: '高级',
    favorites: '收藏',
    hex: 'HEX：',
    reset: '重置',
    resetFilters: '重置筛选',
    activeFilters: '活跃筛选',
    anyRating: '不限',
    rating4: '4+',
    rating3: '3+',
    found: '找到：',
    skills: '个技能',
    systems: '个系统',
    noResults: '未找到结果',
    noSystems: '没有系统',
    showing: '显示'
  },

  sort: {
    label: '排序：',
    nameAsc: '名称 ↑',
    nameDesc: '名称 ↓',
    ratingDesc: '评分 ↓',
    ratingAsc: '评分 ↑'
  },

  date: {
    new: '新',
    updated: '已更新',
    created: '创建',
    modified: '更新'
  },

  card: {
    save: '保存',
    complexity: {
      beginner: '初级',
      intermediate: '中级',
      advanced: '高级'
    },
    tags: '标签',
    meta: '元数据',
    source: '来源',
    alsoIn: '也见于：'
  },

  pagination: {
    first: '«',
    prev: '‹',
    next: '›',
    last: '»',
    of: '/'
  },

  matcher: {
    step1: '你在构建什么？',
    step2: '哪种美学风格？',
    step3: '推荐技能',
    step4: '设计系统',
    step5: '导出组合',
    reason: '推荐用于',
    noSkills: '没有技能',
    noSystems: '没有系统'
  },

  ds: {
    filterPhilosophy: '按哲学筛选',
    filterProduct: '按产品类型筛选',
    filterRating: '评分',
    all: '全部',
    systems: '个系统',
    noSystems: '没有系统',
    noTokens: '没有颜色令牌',
    selectSystem: '选择一个设计系统查看令牌',
    preview: '预览',
    tokens: '设计令牌',
    font: '字体',
    radius: '圆角',
    scheme: '配色',
    dark: '深色',
    light: '浅色',
    relatedSkills: '相关技能',
    searchSystems: '搜索设计系统...',
    clearFilter: '清除HEX筛选',
    byCategory: '按哲学',
    byProduct: '按产品类型',
    byRating: '按评分'
  },

  philosophies: {
    title: '设计哲学',
    subtitle: '为AI代理提供的55种美学方向。每种哲学定义了视觉语言和氛围。',
    of: '/',
    philosophies: '种哲学',
    all: '全部',
    categories: {
      minimal: '极简与干净',
      refined: '经典与精致',
      expressive: '大胆与多彩',
      raw: '边缘与粗犷',
      retro: '复古与怀旧',
      futuristic: '未来与科技',
      effects: '现代效果'
    },
    characteristics: '关键特征',
    noSystems: '没有关联的系统',
    designSystems: '此哲学下的设计系统',
    systems: '个设计系统'
  },

  process: {
    title: 'UX/UI 流程',
    subtitle: '完整的设计开发周期图：从研究到发布。点击阶段查看匹配的技能。',
    stages: [
      { id: 'research', title: '研究', desc: '用户研究、访谈、竞品分析' },
      { id: 'analysis', title: '分析', desc: '用户旅程图、服务蓝图、数据驱动决策' },
      { id: 'design', title: '设计', desc: '线框图、信息架构、用户流、场景' },
      { id: 'visual', title: '视觉设计', desc: '网格、排版、色彩、组件、品牌' },
      { id: 'prototype', title: '原型设计', desc: '交互原型、动效、动画' },
      { id: 'test', title: '测试', desc: '可用性测试、A/B测试、专家评审、无障碍' },
      { id: 'dev', title: '开发', desc: '设计到代码、前端、响应式布局' },
      { id: 'launch', title: '发布', desc: '设计评审、指标、发布后迭代' }
    ]
  },

  references: {
    title: '参考与视觉背景',
    subtitle: '按视觉风格整理的参考资源。来源：Behance、Dribbble、Awwwards、Tilda Publishing。'
  },

  tools: {
    title: '工具',
    contrast: {
      title: 'WCAG 对比度检查器',
      desc: '根据 WCAG 2.2 标准检查颜色对比度（AA：4.5:1，AAA：7:1）',
      textColor: '文字颜色',
      bgColor: '背景颜色',
      sample: '用于检查可读性的示例文本',
      largeText: '大号文本',
      invalid: '请输入十六进制颜色 (#RRGGBB)'
    },
    principles: {
      title: '设计原则 (NN/g)',
      desc: '10条尼尔森诺曼集团启发式 + 5条视觉设计原则',
      list: [
        { n: '系统状态可见性', d: '系统始终告知用户当前正在发生的事情。' },
        { n: '匹配现实世界', d: '使用用户的语言，而不是系统术语。' },
        { n: '用户控制', d: '用户可以撤销或重做操作。' },
        { n: '一致性', d: '相同的术语、元素和模式贯穿始终。' },
        { n: '错误预防', d: '预防错误优于显示错误信息。' },
        { n: '识别而非回忆', d: '减少记忆负担——让元素可见。' },
        { n: '灵活高效', d: '为高级用户提供快捷方式，不破坏基础体验。' },
        { n: '审美与极简', d: '极简设计，不含无关信息。' },
        { n: '错误恢复', d: '清晰的错误信息并提供解决方案。' },
        { n: '帮助与文档', d: '易于查找、以任务为中心的文档。' }
      ]
    },
    gestalt: {
      title: '格式塔原则在UI中的应用',
      desc: '解释人们如何感知视觉构图的格式塔心理学原理',
      list: [
        { n: '接近性', d: '靠近的物体被视为一组。使用间距对相关元素进行分组。' },
        { n: '相似性', d: '相似的元素被视为相关。颜色、形状、大小表示组别归属。' },
        { n: '图形/背景', d: '感知将图像分为对象（图形）和背景。' },
        { n: '闭合性', d: '大脑会补全不完整的形状。用于标志和图标。' },
        { n: '共同区域', d: '封闭区域内的元素被视为一组。这是卡片的基础。' },
        { n: '连续性', d: '视线即使被中断也会沿着线条移动。用于步骤条、进度条。' }
      ]
    },
    tokens: {
      title: '设计令牌查看器',
      desc: '可视化任何DESIGN.md中的令牌。在下方选择一个系统：',
      searchPlaceholder: '搜索设计系统...',
      noTokens: '没有颜色令牌',
      selectSystem: '选择一个设计系统查看令牌',
      noSystems: '未找到系统'
    },
    toolsMap: {
      title: '设计师工具地图',
      desc: 'UI/UX设计实际服务和工具的分类参考',
      categories: {
        color: '色彩',
        typography: '排版',
        icons: '图标',
        prototyping: '原型设计',
        collaboration: '协作',
        references: '参考'
      }
    }
  },

  about: {
    title: 'DesignX v2',
    desc: '最大的开源UI/UX设计技能和DESIGN.md设计系统目录，专为AI代理打造。',
    diff: '<strong>与Open Design的区别：</strong> DesignX是一个推荐目录，而非工件生成器。我们帮助您了解项目需要哪些技能和设计系统。',
    howToUse: '使用方法',
    steps: [
      '选择产品类型 → DesignX 匹配技能 + 设计系统',
      '选择设计哲学 → 细化风格',
      '导出组合 → SKILL.md + DESIGN.md 到仓库根目录',
      'AI代理读取文件并遵循设计系统'
    ],
    stats: '统计',
    sources: '来源',
    skills: '个技能',
    categories: '个类别',
    designSystems: '个设计系统',
    productTypes: '个产品类型',
    philosophies: '个哲学',
    tags: '个标签',
    complexity: '难度分布',
    saved: '已保存'
  },

  detail: {
    close: '✕',
    compare: '比较技能',
    description: '描述',
    tags: '标签',
    principles: '原则',
    products: '产品',
    source: '来源',
    keyPrinciples: '关键原则',
    suitableFor: '适用于'
  },

  exportBar: {
    selected: '已选择',
    skills: '个技能',
    systems: '个设计系统',
    compare: '⇄ 比较',
    clear: '清除',
    export: '📦 导出',
    nothing: '已选择：0'
  },

  states: {
    loading: '正在加载目录...',
    error: '加载目录失败',
    errorHint: '请运行',
    errorServe: 'npx serve .',
    nothingFound: '未找到结果',
    noFavorites: '暂无收藏。点击技能上的 ★ 添加。'
  },

};

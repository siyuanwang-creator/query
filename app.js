const categories = {
  beauty: {
    label: "美妆种草",
    intent: "产品体验 / 购买参考",
    description: "护肤、彩妆、香水、妆容等相关词，适合做真实使用体验和好物分享。",
    seeds: ["beauty routine", "makeup look", "product favorites"],
  },
  fashion: {
    label: "时尚穿搭",
    intent: "搭配参考 / 风格种草",
    description: "穿搭、鞋包、配饰、单品风格等相关词，适合做 outfit 分享和趋势内容。",
    seeds: ["outfit ideas", "style inspiration", "wardrobe favorites"],
  },
  food: {
    label: "美食分享",
    intent: "体验种草 / 消费参考",
    description: "餐厅、菜品、咖啡、甜品等相关词，适合做探店、菜单推荐和口味分享。",
    seeds: ["food recommendations", "what to order", "dining experience"],
  },
  tech: {
    label: "科技体验",
    intent: "产品体验 / 使用参考",
    description: "数码、软件、App、工具类相关词，适合做功能体验、效率分享和产品推荐。",
    seeds: ["tech setup", "app recommendations", "productivity tools"],
  },
  lifestyle: {
    label: "生活方式",
    intent: "日常分享 / 消费参考",
    description: "本地生活、休闲、家居、服务体验等相关词，适合做生活方式分享。",
    seeds: ["daily life finds", "local experience", "lifestyle recommendations"],
  },
  home: {
    label: "家居生活",
    intent: "空间灵感 / 好物分享",
    description: "家居用品、装修、收纳和居家生活相关词，适合做家居灵感和好物分享。",
    seeds: ["home finds", "room makeover", "home organization"],
  },
  health: {
    label: "健康生活",
    intent: "经验参考 / 产品选择",
    description: "健康、泛健康、护理用品等相关词，适合做生活习惯和健康好物分享，需注意合规表达。",
    seeds: ["wellness routine", "healthy habits", "self care essentials"],
  },
  sports: {
    label: "运动健身",
    intent: "训练参考 / 装备体验",
    description: "健身、运动教程、运动装备和场馆相关词，适合做训练打卡和装备分享。",
    seeds: ["fitness routine", "workout ideas", "active lifestyle"],
  },
  education: {
    label: "教育学习",
    intent: "学习参考 / 工具分享",
    description: "校园、语言学习、教育用品和学习技巧相关词，适合做学习经验和工具分享。",
    seeds: ["study routine", "learning tips", "school essentials"],
  },
  hobby: {
    label: "兴趣爱好",
    intent: "兴趣分享 / 入门参考",
    description: "宠物、手工、摄影、玩具、园艺等兴趣类相关词，适合做作品展示和入门经验分享。",
    seeds: ["hobby ideas", "creative projects", "beginner tips"],
  },
  stay: {
    label: "住宿种草",
    intent: "预订决策 / 体验种草",
    description: "酒店、villa、resort、cabins 等住宿相关词，适合做入住体验和真实评价。",
    seeds: ["staycation ideas", "hotel room tour", "unique stays"],
  },
  warning: {
    label: "体验评价",
    intent: "真实体验 / 选择参考",
    description: "带有 review、bad、dirty、cracking 等评价信号，作为风险判断参考；活动主题仍以正向分享为主。",
    seeds: ["honest travel review", "stay experience", "before you book tips"],
  },
  destination: {
    label: "目的地攻略",
    intent: "攻略参考 / 体验种草",
    description: "景点、目的地和自然体验词，适合做路线、攻略和打卡内容。",
    seeds: ["hidden travel spots", "weekend getaway ideas", "things to do guide"],
  },
  transport: {
    label: "出行决策",
    intent: "实用查询 / 到达决策",
    description: "parking、location、map、shuttle 等实用信息，适合做出行 tips。",
    seeds: ["where to park", "how to get there", "travel tips"],
  },
  experience: {
    label: "体验项目",
    intent: "项目体验 / 套餐比较",
    description: "pool、package、winter wonderland、drone pov 等体验词，适合视觉化种草。",
    seeds: ["pool review", "travel package review", "experience guide"],
  },
  entertainment: {
    label: "娱乐误召回",
    intent: "娱乐八卦 / 剧情搜索",
    description: "名人、人名、part 2、剧情残片等，旅游商业意图弱。",
    seeds: [],
  },
  noise: {
    label: "低质噪音",
    intent: "不明确",
    description: "拼写混乱、多语言异常、词义残缺，暂不进入活动池。",
    seeds: [],
  },
};

const patterns = {
  beauty: ["makeup", "skincare", "skin care", "lipstick", "blush", "mascara", "foundation", "concealer", "serum", "sunscreen", "perfume", "fragrance", "haircare", "nail", "eyeshadow"],
  fashion: ["outfit", "dress", "shoes", "sneakers", "bag", "handbag", "jacket", "jeans", "skirt", "sunglasses", "jewelry", "watch", "style", "fashion", "wardrobe"],
  food: ["restaurant", "cafe", "coffee", "brunch", "dinner", "lunch", "dessert", "bakery", "pizza", "burger", "sushi", "menu", "recipe", "food"],
  tech: ["technology", "software", "apps", "app", "computer software", "digital", "phone", "laptop", "gadget", "internet", "productivity"],
  lifestyle: ["local life", "life services", "leisure", "shopping", "spa", "wedding", "nightclub", "performance", "exhibition"],
  home: ["household", "home", "house decoration", "decoration", "furniture", "organization", "room", "real estate"],
  health: ["healthcare", "health", "wellness", "pan-health", "medicine", "cosmetic medicine", "self care"],
  sports: ["sports", "fitness", "workout", "gym", "training", "sports equipment"],
  education: ["education", "school", "campus", "language learning", "study", "k12"],
  hobby: ["hobbies", "hobby", "pets", "gardening", "diy", "crafts", "photography", "painting", "toys", "lego", "fishing", "knitting"],
  stay: ["hotel", "resort", "villa", "cabins", "cabin", "motel", "accommodation", "suite", "hostel"],
  warning: ["bad", "review", "dirty", "cracking", "noisy", "worst", "red flag", "avoid"],
  destination: ["beach", "dunes", "springs", "lake", "alps", "paris", "vegas", "miami", "chicago", "kazakhstan"],
  transport: ["parking", "location", "map", "shuttle", "distance", "near"],
  experience: ["pool", "package", "winter wonderland", "drone pov", "tour", "guide", "climbing"],
  celebrity: ["ariana", "grande", "cardi", "jlo", "latto", "kehlani", "offset", "disneyland"],
  entertainmentConsume: [
    "celebrity", "star", "actor", "actress", "singer", "idol", "rapper", "influencer",
    "reality show", "tv show", "variety show", "drama", "series", "episode", "season", "cast",
    "news", "gossip", "rumor", "tea", "scandal", "dating", "breakup", "divorce", "beef",
    "明星", "艺人", "演员", "歌手", "偶像", "爱豆", "网红", "综艺", "真人秀", "电视剧", "剧集", "剧", "节目",
    "新闻", "爆料", "八卦", "吃瓜", "绯闻", "恋情", "分手", "离婚", "塌房", "瓜",
  ],
  lowQuality: ["part 2", "p2", "dont check", "bed time", "bad breath", "installed", "hugged"],
  safetyBlocked: [
    "porn", "porno", "xxx", "nude", "naked", "sex", "escort", "onlyfans",
    "kill", "murder", "blood", "weapon", "gun", "knife", "bomb", "terror",
    "casino", "gambling", "betting", "poker", "slots",
    "cocaine", "heroin", "meth", "weed", "marijuana", "drug dealer",
    "hate", "racist", "nazi", "genocide", "extremist",
    "underage", "minor nude", "child abuse",
    "cure cancer", "miracle cure", "fake vaccine",
    "pirated", "crack download", "illegal", "fraud", "scam",
  ],
  noUgcSpace: [
    "login", "sign in", "customer service", "support phone", "contact support", "official website",
    "download", "apk", "installer", "install app", "coupon code", "tracking number",
    "weather", "calculator", "converter", "translate", "timer", "stock price",
    "near me", "opening hours", "phone number", "address", "directions",
  ],
};

const CRATE_CLIENT_NAME = "query-campaign-screener";
const CRATE_SETTINGS_KEY = "query-screener.crate.settings.v1";
const CRATE_SESSION_KEY = "query-screener.crate.session.v1";
const CRATE_REFRESH_AHEAD_MS = 5 * 60 * 1000;
const CRATE_PAIR_TIMEOUT_MS = 5 * 60 * 1000;
const GEMINI_REQUEST_TIMEOUT_MS = 90 * 1000;
const GEMINI_BATCH_SIZE = 20;
const DEFAULT_AI_MODEL_ID = "gemini-2.5-pro";
let AI_MODEL_ID = window.APP_CONFIG?.CRATE_MODEL_ID || DEFAULT_AI_MODEL_ID;
let AI_MODEL_LABEL = AI_MODEL_ID;
const RULE_FALLBACK_LABEL = "本地规则";
const PROMPT_CONFIG_STORAGE_KEY = "query-screener.prompt-config.v2";

const DEFAULT_PROMPT_CONFIG = {
  clean: {
    role: "你负责清洗 UGC campaign query 输入。只做硬过滤，不做价值判断。",
    instructions: [
      "保留有潜在语义的 query；删除明显不能用的数据。",
      "删除数据质量问题：空值、重复 Query、乱码、超长字符串、特殊字符占比过高、无法识别语言、无意义字符。",
      "删除风险内容：色情、暴力、赌博、毒品、仇恨言论、极端政治、未成年人敏感内容、医疗误导、违法内容。",
      "删除基本没有 UGC 空间的 query：导航型 Query、唯一答案 Query、品牌客服、工具搜索、下载入口。",
      "删除明星、艺人、偶像、综艺、剧集相关的 Consume 型 query，例如看新闻、吃瓜、八卦、爆料、绯闻、恋情、分手、剧情讨论、演员/嘉宾信息；这类不进入 UGC campaign 池。",
    ],
    schema: {
      keptRows: [{ id: 1, query: "清洗后的 query", reason: "保留原因" }],
      removedRows: [{ id: 2, query: "原 query", reason: "删除原因" }],
      summary: "清洗总结",
    },
  },
  score: {
    role: "你负责给每个 query 计算 campaign 潜力分。必须逐条打分，不做聚类。",
    instructions: [
      "每个维度都用 0-100 分制。finalScore 也为 0-100，opportunityScore 为 1-5。",
      "Campaign Intent 关注是否适合 Challenge / Checklist / Template / Vote / Showcase / Transformation 等互动。",
      "Expansion Potential 关注是否能扩展 Packing / Playlist / Food / Route / Friends / Pets 等玩法。",
      "finalScore 需要按 dimensions 中的 weight 加权计算；decision 输出强推/可测/观察/剔除。",
    ],
    dimensions: [
      { key: "userNeedScore", label: "User Need", weight: 25, description: "用户需求是否真实、明确、可被内容满足。" },
      { key: "contentGapScore", label: "Content Gap", weight: 20, description: "平台现有内容是否不足；gap 越大越值得做。" },
      { key: "ugcPotentialScore", label: "UGC Potential", weight: 20, description: "用户是否愿意拍摄、分享、展示或参与。" },
      { key: "trendMomentumScore", label: "Trend Momentum", weight: 5, description: "是否有上升趋势；避免已经过气。" },
      { key: "campaignIntentScore", label: "Campaign Intent", weight: 10, description: "是否适合 Challenge / Checklist / Template / Vote / Showcase / Transformation 等互动。" },
      { key: "expansionPotentialScore", label: "Expansion Potential", weight: 10, description: "能否扩展出 Packing / Playlist / Food / Route / Friends / Pets 等玩法。" },
      { key: "brandSafetyScore", label: "Brand Safety", weight: 10, description: "品牌安全，不容易翻车。" },
    ],
    schema: {
      scores: [{
        id: 1,
        query: "query",
        domain: "垂类",
        intent: "意图",
        topic: "粗 Topic",
        dimensionScores: {
          userNeedScore: 0,
          contentGapScore: 0,
          ugcPotentialScore: 0,
          trendMomentumScore: 0,
          campaignIntentScore: 0,
          expansionPotentialScore: 0,
          brandSafetyScore: 0,
        },
        opportunityScore: 0,
        finalScore: 0,
        decision: "强推/可测/观察/剔除",
        reason: "打分原因",
      }],
      summary: "打分总结",
    },
  },
  cluster: {
    role: "你负责主题聚类。只处理 >=70 分的 query。",
    instructions: [
      "聚类只需要 Campaign 大类，不要分得很细；一个大类 Cluster 算一个 Campaign。",
      "优先使用这些大类名称：酒店住宿、旅行攻略、美食探店、出行交通、体验项目、购物生活、美妆穿搭、家居生活、运动健康、学习教育、兴趣爱好、其他。",
      "例如 hotel booking / cheap hotel / luxury hotel / island villa / themed hotel 都归入「酒店住宿」，不要拆成 Luxury Hotel、Island Villa、Themed Hotel 等细类。",
      "例如 things to do / itinerary / route / destination guide 归入「旅行攻略」。",
      "每个大类里最高分作为 primaryQuery，其余作为 supportingQueries。",
    ],
    schema: {
      clusters: [{
        campaignCluster: "聚类名称",
        primaryId: 1,
        primaryQuery: "主 query",
        supportingIds: [2, 3],
        supportingQueries: ["supporting query 1", "supporting query 2"],
        reason: "聚类原因",
      }],
      summary: "聚类总结",
    },
  },
  title: {
    role: "你负责为 Top10 Campaign 生成标题文案。",
    instructions: [
      "重要：文案必须基于整个 campaignCluster / Campaign 聚类来写，不要只基于 primaryQuery 本身。primaryQuery 只是这个聚类的代表词，supportingQueries 是同一 Campaign 的语义边界。",
      "每个 Campaign 输出 3 条参考文案，必须覆盖这个聚类的共同主题和可参与玩法，不能写成单个搜索词解释。",
      "必须中英文双语，英文在前、中文在后，适合 UGC 活动。",
      "每条文案必须包含 type、titleEn、titleZh、requirementEn、requirementZh。英文要自然像真实 campaign title，中文要对应英文含义。",
    ],
    schema: {
      campaigns: [{
        id: 1,
        campaignDirection: "活动方向",
        campaignTitles: [
          { type: "Challenge", titleEn: "English title 1", titleZh: "中文标题 1", requirementEn: "English submission requirement 1", requirementZh: "中文投稿要求 1" },
          { type: "Showcase", titleEn: "English title 2", titleZh: "中文标题 2", requirementEn: "English submission requirement 2", requirementZh: "中文投稿要求 2" },
          { type: "Checklist", titleEn: "English title 3", titleZh: "中文标题 3", requirementEn: "English submission requirement 3", requirementZh: "中文投稿要求 3" },
        ],
      }],
      summary: "标题总结",
    },
  },
};

const state = {
  rows: [],
  scoredRows: [],
  results: [],
  clusters: [],
  clusterResults: [],
  aiSeedRows: [],
  aiSummary: "",
  aiError: "",
  aiFallback: false,
  aiEnhanced: false,
  scoreFilter: "all",
  threshold: 60,
  runId: 0,
  running: false,
  authorizing: false,
  activeStep: null,
  completedSteps: new Set(),
  parsedRows: [],
  cleanStats: { kept: 0, removed: 0 },
  crateSettings: readCrateSettings(),
  crateSession: readCrateSession(),
};

const els = {
  fileInput: document.querySelector("#fileInput"),
  manualInput: document.querySelector("#manualInput"),
  runInputButton: document.querySelector("#runInputButton"),
  connectCrateButton: document.querySelector("#connectCrateButton"),
  disconnectCrateButton: document.querySelector("#disconnectCrateButton"),
  crateApiBaseInput: document.querySelector("#crateApiBaseInput"),
  crateApprovalOriginInput: document.querySelector("#crateApprovalOriginInput"),
  saveCrateSettingsButton: document.querySelector("#saveCrateSettingsButton"),
  authStatus: document.querySelector("#authStatus"),
  aiModeBadge: document.querySelector("#aiModeBadge"),
  cleanPromptConfig: document.querySelector("#cleanPromptConfig"),
  scorePromptConfig: document.querySelector("#scorePromptConfig"),
  clusterPromptConfig: document.querySelector("#clusterPromptConfig"),
  titlePromptConfig: document.querySelector("#titlePromptConfig"),
  resetPromptConfigButton: document.querySelector("#resetPromptConfigButton"),
  promptConfigStatus: document.querySelector("#promptConfigStatus"),
  thresholdInput: document.querySelector("#thresholdInput"),
  thresholdValue: document.querySelector("#thresholdValue"),
  exportButton: document.querySelector("#exportButton"),
  runStatus: document.querySelector("#runStatus"),
  progressTrack: document.querySelector("#progressTrack"),
  resultList: document.querySelector("#resultList"),
  totalCount: document.querySelector("#totalCount"),
  pushCount: document.querySelector("#pushCount"),
  testCount: document.querySelector("#testCount"),
  clusterCount: document.querySelector("#clusterCount"),
};

const promptEditorEls = {
  clean: els.cleanPromptConfig,
  score: els.scorePromptConfig,
  cluster: els.clusterPromptConfig,
  title: els.titlePromptConfig,
};

function normalize(value) {
  return String(value || "").trim();
}

function includesAny(text, words) {
  return words.some((word) => text.includes(word));
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Math.round(value)));
}

function roundOne(value) {
  return Math.round(Number(value || 0) * 10) / 10;
}

function getDemandValue(row) {
  return Number(row["搜索需求量"] || row.demand || row.search_demand || row["搜索用户"] || row.search_users || row["经验决策搜索PV"] || row.search_pv || 0);
}

function getResourceValue(row) {
  return Number(row["资源量"] || row.resource_count || row.resource || row["资源数"] || row["内容量"] || row.content_count || 0);
}

function buildScoreStats(rows) {
  const demandValues = rows.map(getDemandValue).filter((value) => value > 0).sort((a, b) => a - b);
  const percentile = (ratio) => {
    if (!demandValues.length) return 0;
    return demandValues[Math.max(0, Math.min(demandValues.length - 1, Math.floor((demandValues.length - 1) * ratio)))];
  };
  return {
    p70: percentile(0.7),
    p90: percentile(0.9),
  };
}

function getDemandScore(demand, stats = null) {
  if (!demand) return 1;
  if (stats?.p90 && demand >= stats.p90) return 5;
  if (stats?.p70 && demand >= stats.p70) return 4;
  const logScore = Math.log10(Math.max(demand, 1));
  if (logScore >= 5) return 5;
  if (logScore >= 4) return 4;
  if (logScore >= 3) return 3;
  if (logScore >= 2) return 2;
  return 1;
}

function getResourceGapScore(coverage, demand, resource) {
  if (!demand && !resource) return 3;
  if (coverage < 0.05) return 5;
  if (coverage < 0.15) return 4;
  if (coverage < 0.3) return 3;
  if (coverage < 0.6) return 2;
  return 1;
}

function getProductionScore(categoryKey, hasExperienceTerm, hasCommercialTerm, hasRisk) {
  if (categoryKey === "noise") return 1;
  if (categoryKey === "entertainment") return 2;
  if (["stay", "experience", "destination", "transport"].includes(categoryKey)) return hasRisk ? 3 : 5;
  if (hasExperienceTerm || hasCommercialTerm) return 4;
  return 3;
}

function getFivePointScore(score) {
  if (score >= 80) return 5;
  if (score >= 65) return 4;
  if (score >= 50) return 3;
  if (score >= 35) return 2;
  return 1;
}

function getTrendMomentumScore(row, heat) {
  const trend = Number(row.trend || row["趋势"] || row["增长率"] || row.growth || row["环比"] || 0);
  if (trend >= 50) return 5;
  if (trend >= 20) return 4;
  if (trend > 0) return 3;
  if (trend < -20) return 1;
  return heat >= 60 ? 3 : 2;
}

function getCampaignIntentScore(categoryKey, query) {
  const q = query.toLowerCase();
  const playable = ["challenge", "checklist", "template", "vote", "showcase", "transformation", "before after", "routine", "guide", "tips", "ideas"];
  if (includesAny(q, playable)) return 5;
  if (["stay", "experience", "destination", "food", "beauty", "fashion", "home", "sports", "hobby"].includes(categoryKey)) return 4;
  if (["transport", "education", "tech", "health", "lifestyle"].includes(categoryKey)) return 3;
  if (categoryKey === "entertainment" || categoryKey === "noise") return 1;
  return 2;
}

function getExpansionPotentialScore(categoryKey, query) {
  const q = query.toLowerCase();
  const expansionHooks = ["packing", "playlist", "food", "route", "friends", "pets", "family", "budget", "outfit", "before after", "checklist", "map", "guide"];
  let score = includesAny(q, expansionHooks) ? 4 : 3;
  if (["destination", "stay", "experience", "food", "fashion", "beauty", "home", "hobby"].includes(categoryKey)) score += 1;
  if (categoryKey === "noise" || categoryKey === "entertainment") score -= 2;
  return Math.max(1, Math.min(5, score));
}

function getSafetyScore(categoryKey, hasCelebrity, clarity) {
  if (categoryKey === "noise") return 1;
  if (hasCelebrity || categoryKey === "entertainment") return 2;
  if (clarity < 45) return 3;
  if (categoryKey === "warning") return 4;
  return 5;
}

function getDefaultCrateApiBase() {
  return window.APP_CONFIG?.CRATE_API_BASE || (window.location.protocol === "file:"
    ? "http://127.0.0.1:5180/crate-api"
    : `${window.location.origin}/api/crate-api`);
}

function getDefaultCrateApprovalOrigin() {
  return window.APP_CONFIG?.CRATE_APPROVAL_ORIGIN || "";
}

function setCrateModel(modelId) {
  const nextModelId = normalize(modelId || window.APP_CONFIG?.CRATE_MODEL_ID || DEFAULT_AI_MODEL_ID);
  AI_MODEL_ID = nextModelId;
  AI_MODEL_LABEL = nextModelId;
}

function readCrateSettings() {
  try {
    const raw = window.localStorage.getItem(CRATE_SETTINGS_KEY);
    const stored = raw ? JSON.parse(raw) : {};
    return {
      apiBase: stored.apiBase || getDefaultCrateApiBase(),
      approvalOrigin: stored.approvalOrigin || getDefaultCrateApprovalOrigin(),
    };
  } catch {
    return {
      apiBase: getDefaultCrateApiBase(),
      approvalOrigin: getDefaultCrateApprovalOrigin(),
    };
  }
}

function writeCrateSettings(settings) {
  const nextSettings = {
    apiBase: normalize(settings.apiBase).replace(/\/$/, ""),
    approvalOrigin: normalize(settings.approvalOrigin).replace(/\/$/, ""),
  };
  window.localStorage.setItem(CRATE_SETTINGS_KEY, JSON.stringify(nextSettings));
  state.crateSettings = nextSettings;
}

function getCrateApiBase() {
  return normalize(state.crateSettings?.apiBase || getDefaultCrateApiBase()).replace(/\/$/, "");
}

function getCrateApprovalOrigin() {
  return normalize(state.crateSettings?.approvalOrigin || getDefaultCrateApprovalOrigin()).replace(/\/$/, "");
}

function initializeCrateSettingsForm() {
  if (!els.crateApiBaseInput || !els.crateApprovalOriginInput) return;
  els.crateApiBaseInput.value = getCrateApiBase();
  els.crateApprovalOriginInput.value = getCrateApprovalOrigin();
}

async function hydrateCrateSettingsFromServer() {
  if (window.location.protocol === "file:") return;
  try {
    const response = await fetch("/api/config", { headers: { "Accept": "application/json" } });
    if (!response.ok) return;
    const config = await response.json();
    const defaultApiBase = getDefaultCrateApiBase();
    const defaultApprovalOrigin = getDefaultCrateApprovalOrigin();
    state.crateSettings = {
      apiBase: state.crateSettings?.apiBase && state.crateSettings.apiBase !== defaultApiBase
        ? state.crateSettings.apiBase
        : config.crateApiBase || defaultApiBase,
      approvalOrigin: state.crateSettings?.approvalOrigin && state.crateSettings.approvalOrigin !== defaultApprovalOrigin
        ? state.crateSettings.approvalOrigin
        : config.crateApprovalOrigin || defaultApprovalOrigin,
    };
    setCrateModel(config.crateModelId);
    initializeCrateSettingsForm();
  } catch {
    // Static hosts do not have /api/config; the manual settings fields remain available.
  }
}

function saveCrateSettingsFromForm() {
  writeCrateSettings({
    apiBase: els.crateApiBaseInput.value,
    approvalOrigin: els.crateApprovalOriginInput.value,
  });
  clearCrateSession();
  render();
}

function readCrateSession() {
  try {
    const raw = window.localStorage.getItem(CRATE_SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeCrateSession(session) {
  window.localStorage.setItem(CRATE_SESSION_KEY, JSON.stringify(session));
  state.crateSession = session;
}

function clearCrateSession() {
  window.localStorage.removeItem(CRATE_SESSION_KEY);
  state.crateSession = null;
}

async function parseCrateResponse(response) {
  const text = await response.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = null;
  }

  if (!response.ok) {
    const error = new Error(json?.message || json?.error || text || `Crate request failed (${response.status})`);
    error.status = response.status;
    error.retryAfterSec = Number(response.headers.get("Retry-After") || 0);
    throw error;
  }

  if (json?.statusCode && json.statusCode !== 0) {
    throw new Error(json.message || "Crate returned an error");
  }

  return json;
}

async function cratePublicFetch(path, body) {
  const apiBase = getCrateApiBase();
  if (!apiBase) throw new Error("请先填写 Crate API Base，或部署动态 API 代理。");
  const response = await fetch(`${apiBase}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return parseCrateResponse(response);
}

async function refreshCrateSession(session) {
  const response = await cratePublicFetch("/openapi/pair/refresh", {
    refreshToken: session.refreshToken,
  });
  const nextSession = {
    ...session,
    accessToken: response.data.accessToken,
    refreshToken: response.data.refreshToken,
    expiresAt: response.data.expiresAt,
  };
  writeCrateSession(nextSession);
  return nextSession;
}

async function getFreshCrateSession() {
  const session = state.crateSession || readCrateSession();
  if (!session?.accessToken || !session?.refreshToken) {
    throw new Error("请先连接 Crate");
  }

  if (Number(session.expiresAt) - Date.now() < CRATE_REFRESH_AHEAD_MS) {
    return refreshCrateSession(session);
  }

  return session;
}

async function crateFetch(path, body) {
  const session = await getFreshCrateSession();
  const apiBase = getCrateApiBase();
  if (!apiBase) throw new Error("请先填写 Crate API Base，或部署动态 API 代理。");
  const makeRequest = (accessToken) => fetch(`${apiBase}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-openapi-token": accessToken,
    },
    body: JSON.stringify(body),
  });

  try {
    let response = await makeRequest(session.accessToken);
    if (response.status === 401 && session.refreshToken) {
      const refreshed = await refreshCrateSession(session);
      response = await makeRequest(refreshed.accessToken);
    }
    return await parseCrateResponse(response);
  } catch (error) {
    if (error.status === 401 || String(error.message || "").toLowerCase().includes("unauthorized")) {
      clearCrateSession();
      throw new Error("Crate 登录已失效，请重新连接。");
    }
    if (error.status === 429) {
      throw new Error(`Crate 请求过于频繁，请稍后重试${error.retryAfterSec ? `（约 ${error.retryAfterSec} 秒）` : ""}。`);
    }
    if (error.status === 503) {
      throw new Error("Crate 服务暂时不可用，请稍后重试。");
    }
    throw error;
  }
}

async function crateGet(path, accessToken = null) {
  const session = accessToken ? { accessToken } : await getFreshCrateSession();
  const apiBase = getCrateApiBase();
  if (!apiBase) throw new Error("请先填写 Crate API Base，或部署动态 API 代理。");
  const response = await fetch(`${apiBase}${path}`, {
    method: "GET",
    headers: {
      "x-openapi-token": session.accessToken,
    },
  });
  return parseCrateResponse(response);
}

async function probeCrateModels(accessToken) {
  return crateGet("/openapi/v1/model/loras", accessToken);
}

function buildCrateApprovalUrl(pair, approvalOrigin) {
  const verifyUri = normalize(pair.verifyUri || pair.verificationUri || pair.verification_uri);
  if (!verifyUri) throw new Error("Crate 授权响应缺少 verifyUri。");
  const baseUrl = /^https?:\/\//i.test(verifyUri)
    ? verifyUri
    : `${approvalOrigin}${verifyUri.startsWith("/") ? verifyUri : `/${verifyUri}`}`;
  const url = new URL(baseUrl);
  url.searchParams.set("code", pair.userCode);
  return url.toString();
}

function withTimeout(promise, timeoutMs, message) {
  let timer = null;
  const timeout = new Promise((_, reject) => {
    timer = window.setTimeout(() => reject(new Error(message)), timeoutMs);
  });
  return Promise.race([promise, timeout]).finally(() => window.clearTimeout(timer));
}

async function connectCrate() {
  state.authorizing = true;
  renderAuth();
  try {
    const started = await cratePublicFetch("/openapi/pair/start", {
      clientName: CRATE_CLIENT_NAME,
    });
    const pair = started.data;
    const approvalOrigin = getCrateApprovalOrigin();
    const approveUrl = buildCrateApprovalUrl(pair, approvalOrigin);
    els.authStatus.textContent = `请在打开的 Crate 授权页确认，验证码：${pair.userCode}`;
    window.open(approveUrl, "_blank", "noopener,noreferrer");

    const startedAt = Date.now();
    const intervalMs = Math.max(Number(pair.interval || 3), 1) * 1000;
    while (Date.now() - startedAt < CRATE_PAIR_TIMEOUT_MS) {
      await wait(intervalMs);
      const polled = await cratePublicFetch("/openapi/pair/poll", {
        pairingId: pair.pairingId,
      });
      const result = polled.data;

      if (result.status === "approved") {
        await probeCrateModels(result.accessToken);
        writeCrateSession({
          accessToken: result.accessToken,
          refreshToken: result.refreshToken,
          expiresAt: result.expiresAt,
          user: result.user,
        });
        els.authStatus.textContent = `已连接 Crate：${result.user?.email || "authorized"}`;
        state.authorizing = false;
        renderAuth();
        return;
      }

      if (result.status === "denied" || result.status === "expired") {
        throw new Error(result.status === "denied" ? "你取消了 Crate 授权" : "Crate 授权已超时，请重试");
      }

      els.authStatus.textContent = `等待 Crate 授权确认，验证码：${pair.userCode}`;
    }
    throw new Error("Crate 授权等待超时，请重试");
  } catch (error) {
    els.authStatus.textContent = `Crate 连接失败：${error.message || "请确认网络和权限"}`;
  } finally {
    state.authorizing = false;
    renderAuth();
  }
}

function extractCrateText(response) {
  const direct = response?.data?.data?.text || response?.data?.text;
  if (direct) return direct;
  return walkForText(response?.data);
}

function walkForText(value) {
  if (!value || typeof value !== "object") return "";
  const preferredKeys = ["text", "content", "output", "message", "result", "description"];
  for (const key of preferredKeys) {
    const candidate = value[key];
    if (typeof candidate === "string" && candidate.trim().length > 10) return candidate.trim();
  }
  for (const child of Object.values(value)) {
    if (Array.isArray(child)) {
      for (const item of child) {
        const found = walkForText(item);
        if (found) return found;
      }
    } else if (child && typeof child === "object") {
      const found = walkForText(child);
      if (found) return found;
    }
  }
  return "";
}

function classifyQuery(query, row = {}) {
  const queryText = query.toLowerCase();
  const q = `${normalize(row.query_category)} ${query}`.toLowerCase();
  const hasBeauty = includesAny(q, patterns.beauty);
  const hasFashion = includesAny(q, patterns.fashion);
  const hasFood = includesAny(q, patterns.food);
  const hasTech = includesAny(q, patterns.tech);
  const hasLifestyle = includesAny(q, patterns.lifestyle);
  const hasHome = includesAny(q, patterns.home);
  const hasHealth = includesAny(q, patterns.health);
  const hasSports = includesAny(q, patterns.sports);
  const hasEducation = includesAny(q, patterns.education);
  const hasHobby = includesAny(q, patterns.hobby);
  const hasStay = includesAny(q, patterns.stay);
  const hasWarning = includesAny(q, patterns.warning);
  const hasTransport = includesAny(q, patterns.transport);
  const hasDestination = includesAny(q, patterns.destination);
  const hasExperience = includesAny(q, patterns.experience);
  const hasCelebrity = includesAny(q, patterns.celebrity);
  const hasLowQuality = includesAny(queryText, patterns.lowQuality) || /[^\x00-\x7F]/.test(queryText);

  if (hasLowQuality && !hasStay) return "noise";
  if (hasBeauty) return "beauty";
  if (hasFashion) return "fashion";
  if (hasFood) return "food";
  if (hasTech) return "tech";
  if (hasLifestyle) return "lifestyle";
  if (hasHome) return "home";
  if (hasHealth) return "health";
  if (hasSports) return "sports";
  if (hasEducation) return "education";
  if (hasHobby) return "hobby";
  if (hasCelebrity && !hasTransport && !hasWarning && !hasDestination) return "entertainment";
  if (hasWarning) return "warning";
  if (hasStay) return "stay";
  if (hasTransport) return "transport";
  if (hasExperience) return "experience";
  if (hasDestination && !hasStay) return "destination";
  return "noise";
}

function scoreQuery(row, stats = null) {
  const query = normalize(row.query);
  const q = query.toLowerCase();
  const categoryKey = classifyQuery(query, row);
  const category = categories[categoryKey];
  const domain = classifyDomain(row, query, categoryKey);
  const users = getDemandValue(row);
  const pv = Number(row["经验决策搜索PV"] || row.search_pv || row["搜索需求量"] || row.demand || 0);
  const manualPv = Number(row["经验决策手搜PV"] || row.manual_pv || 0);
  const manualRate = pv > 0 ? manualPv / pv : 0;
  const resource = getResourceValue(row);
  const resourceCoverage = users > 0 ? resource / users : 0;

  const crossDomainCategory = ["beauty", "fashion", "food", "tech", "lifestyle", "home", "health", "sports", "education", "hobby"];
  const hasCommercialTerm = includesAny(q, patterns.stay) || includesAny(q, patterns.transport) || crossDomainCategory.includes(categoryKey);
  const hasExperienceTerm = includesAny(q, patterns.experience) || includesAny(q, patterns.destination) || crossDomainCategory.includes(categoryKey);
  const hasWarning = includesAny(q, patterns.warning);
  const hasRisk = categoryKey === "entertainment" || categoryKey === "noise";
  const hasCelebrity = includesAny(q, patterns.celebrity);
  const wordCount = query.split(/\s+/).filter(Boolean).length;
  const clarity = clamp(55 + Math.min(wordCount, 5) * 6 - (wordCount > 7 ? 18 : 0) - (/[^\x00-\x7F]/.test(q) ? 25 : 0));
  const heat = clamp(Math.log10(Math.max(users, 1)) * 18 + manualRate * 20);

  let commercial = 35;
  if (hasCommercialTerm) commercial += 32;
  if (hasExperienceTerm) commercial += 14;
  if (hasWarning) commercial += 8;
  if (categoryKey === "entertainment") commercial -= 28;
  if (categoryKey === "noise") commercial -= 34;
  if (hasCelebrity) commercial -= 14;
  commercial = clamp(commercial);

  let campaign = 30;
  if ([...crossDomainCategory, "stay", "destination", "transport", "experience", "warning"].includes(categoryKey)) campaign += 34;
  if (hasExperienceTerm) campaign += 12;
  if (hasWarning) campaign += 10;
  if (categoryKey === "entertainment") campaign -= 34;
  if (categoryKey === "noise") campaign -= 40;
  campaign = clamp(campaign);

  const riskPenalty = (hasRisk ? 22 : 0) + (hasCelebrity ? 8 : 0) + (clarity < 45 ? 10 : 0);
  const demandScore = getDemandScore(users, stats);
  const contentGapScore = getResourceGapScore(resourceCoverage, users, resource);
  const ugcPotentialScore = getProductionScore(categoryKey, hasExperienceTerm, hasCommercialTerm, hasRisk);
  const trendMomentumScore = getTrendMomentumScore(row, heat);
  const campaignIntentScore = getCampaignIntentScore(categoryKey, query);
  const expansionPotentialScore = getExpansionPotentialScore(categoryKey, query);
  const clarityScore = getFivePointScore(clarity);
  const brandSafetyScore = getSafetyScore(categoryKey, hasCelebrity, clarity);
  const baseOpportunityScore = roundOne(
    demandScore * 0.25
    + contentGapScore * 0.2
    + ugcPotentialScore * 0.2
    + trendMomentumScore * 0.05
    + campaignIntentScore * 0.1
    + expansionPotentialScore * 0.1
    + brandSafetyScore * 0.1,
  );
  const priority = clamp(baseOpportunityScore * 20 - riskPenalty * 0.35);
  const action = priority >= 80 ? "强推" : priority >= state.threshold ? "可测" : priority >= 40 ? "观察" : "剔除";
  const hasCampaignMeaning = action === "强推" || action === "可测";
  const topic = getTopic(row);

  return {
    ...row,
    query,
    topic: topic.label,
    topicKey: topic.id,
    domain,
    categoryKey,
    category: category.label,
    intent: category.intent,
    commercial,
    campaign,
    heat,
    clarity,
    demandScore,
    gapScore: contentGapScore,
    contentGapScore,
    productionScore: ugcPotentialScore,
    ugcPotentialScore,
    trendMomentumScore,
    campaignIntentScore,
    clarityScore,
    expansionScore: expansionPotentialScore,
    expansionPotentialScore,
    safetyScore: brandSafetyScore,
    brandSafetyScore,
    baseOpportunityScore,
    duplicatePenalty: 0,
    finalOpportunityScore: baseOpportunityScore,
    priority,
    action,
    hasCampaignMeaning,
    risk: getRiskLabel(categoryKey, hasCelebrity, clarity),
    seeds: buildSeeds(query, categoryKey),
    reason: buildReason(categoryKey, priority, hasCommercialTerm, hasExperienceTerm, hasWarning, hasCelebrity),
    background: category.description,
  };
}

function classifyDomain(row, query, categoryKey) {
  const source = `${normalize(row.query_category)} ${query}`.toLowerCase();
  const domainRules = [
    { label: "美妆", words: ["beauty", "makeup", "skincare", "skin care", "cosmetic", "lipstick", "perfume", "fragrance"] },
    { label: "时尚", words: ["fashion", "outfit", "dress", "shoes", "sneakers", "bag", "style", "jewelry"] },
    { label: "美食", words: ["food", "restaurant", "cafe", "coffee", "brunch", "dessert", "menu", "recipe"] },
    { label: "科技", words: ["technology", "software", "apps", "digital", "internet", "phone", "gadget"] },
    { label: "生活", words: ["local life", "life services", "leisure", "shopping", "spa", "wedding", "performance"] },
    { label: "家居", words: ["household", "home", "house decoration", "real estate", "furniture"] },
    { label: "健康", words: ["healthcare", "health", "pan-health", "medicine", "wellness"] },
    { label: "运动", words: ["sports", "fitness", "gym", "workout"] },
    { label: "教育", words: ["education", "school", "campus", "language learning", "k12"] },
    { label: "兴趣", words: ["hobbies", "pets", "gardening", "diy", "photography", "toys", "lego", "fishing"] },
    { label: "旅游", words: ["旅游", "tourism", "travel", "hotel", "resort", "villa", "beach", "parking", "tourist"] },
  ];

  const matched = domainRules.find((rule) => includesAny(source, rule.words));
  if (matched) return matched.label;
  if (categoryKey === "entertainment") return "泛娱乐";
  return "其他";
}

function getRiskLabel(categoryKey, hasCelebrity, clarity) {
  const risks = [];
  if (categoryKey === "entertainment") risks.push("娱乐误召回");
  if (categoryKey === "noise") risks.push("低质噪音");
  if (hasCelebrity) risks.push("名人/版权语境");
  if (clarity < 45) risks.push("语义不清");
  return risks.length ? risks.join("、") : "低风险";
}

function buildSeeds(query, categoryKey) {
  if (["entertainment", "noise"].includes(categoryKey)) return [];
  const q = query.toLowerCase();
  const base = categories[categoryKey].seeds;
  const topic = q.match(/\b(makeup|skincare|lipstick|perfume|outfit|dress|shoes|sneakers|bag|software|apps|app|digital|home|decoration|health|fitness|sports|education|school|pets|gardening|diy|photography|restaurant|cafe|coffee|brunch|dessert|hotel|resort|villa|cabins|cabin|motel|pool|parking|beach|dunes|springs)\b/)?.[0];
  const custom = [];

  const topicSeedMap = {
    makeup: ["makeup look", "beauty routine"],
    skincare: ["skincare routine", "product favorites"],
    lipstick: ["lip combo", "makeup favorites"],
    perfume: ["fragrance favorites", "daily scent routine"],
    outfit: ["outfit ideas", "style inspiration"],
    dress: ["dress styling ideas", "occasion outfits"],
    shoes: ["shoe styling", "wardrobe favorites"],
    sneakers: ["sneaker styling", "casual outfit ideas"],
    bag: ["bag styling", "everyday essentials"],
    software: ["productivity tools", "app recommendations"],
    apps: ["app recommendations", "digital life tips"],
    app: ["app recommendations", "digital life tips"],
    digital: ["tech setup", "gadget favorites"],
    home: ["home finds", "home organization"],
    decoration: ["room makeover", "home inspiration"],
    health: ["wellness routine", "healthy habits"],
    fitness: ["fitness routine", "workout ideas"],
    sports: ["active lifestyle", "training tips"],
    education: ["study routine", "learning tips"],
    school: ["school essentials", "study routine"],
    pets: ["pet care tips", "pet favorites"],
    gardening: ["gardening tips", "plant care routine"],
    diy: ["creative projects", "beginner tips"],
    photography: ["photo ideas", "creative shots"],
    restaurant: ["food recommendations", "dining experience"],
    cafe: ["cafe recommendations", "coffee break ideas"],
    coffee: ["coffee recommendations", "daily coffee picks"],
    brunch: ["brunch recommendations", "weekend food ideas"],
    dessert: ["dessert recommendations", "sweet treat ideas"],
    hotel: ["hotel review", "hotel room tour"],
    resort: ["resort review", "resort experience"],
    villa: ["villa stay", "private stay review"],
    cabins: ["cabin getaway", "cozy stay ideas"],
    cabin: ["cabin getaway", "cozy stay ideas"],
    motel: ["budget stay review", "road trip stay"],
    pool: ["hotel pool review", "pool day experience"],
    parking: ["parking tips", "before you go tips"],
    beach: ["beach day guide", "beach trip tips"],
    dunes: ["outdoor adventure guide", "nature trip ideas"],
    springs: ["nature getaway", "hidden spot guide"],
  };

  if (topic && topicSeedMap[topic]) custom.push(...topicSeedMap[topic]);
  if (categoryKey === "warning") custom.push("honest travel review", "stay experience", "before you book tips");
  if (categoryKey === "transport") custom.push("before you go tips", "travel planning tips");

  return [...new Set([...custom, ...base])].slice(0, 3);
}

function buildReason(categoryKey, priority, hasCommercialTerm, hasExperienceTerm, hasWarning, hasCelebrity) {
  if (categoryKey === "beauty") return "美妆相关 query，适合转成产品体验、妆容灵感或好物分享主题。";
  if (categoryKey === "fashion") return "时尚相关 query，适合转成穿搭灵感、单品搭配或风格分享主题。";
  if (categoryKey === "food") return "美食相关 query，适合转成探店体验、菜单推荐或正向口味分享主题。";
  if (categoryKey === "tech") return "科技相关 query，适合转成工具推荐、产品体验或效率分享主题。";
  if (categoryKey === "lifestyle") return "生活方式相关 query，适合转成本地体验、生活服务或日常推荐主题。";
  if (categoryKey === "home") return "家居相关 query，适合转成空间改造、家居好物或收纳灵感主题。";
  if (categoryKey === "health") return "健康生活相关 query，适合转成自我护理、健康习惯或合规的经验分享主题。";
  if (categoryKey === "sports") return "运动相关 query，适合转成训练打卡、装备体验或运动生活方式主题。";
  if (categoryKey === "education") return "教育学习相关 query，适合转成学习方法、校园经验或工具分享主题。";
  if (categoryKey === "hobby") return "兴趣爱好相关 query，适合转成入门经验、作品展示或兴趣清单主题。";
  if (categoryKey === "entertainment") return "名人或娱乐语境较强，旅游消费决策弱，暂不进入活动池。";
  if (categoryKey === "noise") return "词义残缺或语义异常，难以稳定产出 UGC campaign 文案。";
  if (hasWarning) return "有真实体验评价信号，可转成正向分享或选择参考主题，避免负向活动表达。";
  if (hasCommercialTerm && priority >= 80) return "商业意图明确，可直接沉淀为住宿或出行类活动词。";
  if (hasExperienceTerm) return "具备体验化表达空间，适合做攻略、打卡或视觉种草内容。";
  if (hasCelebrity) return "含名人词，虽然有旅游词但需要人工复核背景。";
  return "意图可识别，但活动价值需要结合具体内容供给再判断。";
}

function buildGeminiScreeningPrompt(candidates) {
  return [
    "你是一名 UGC campaign query 筛选策略专家。",
    "任务：基于输入的 TextNet 缺资源 query 候选，输出 campaign 潜力分、Topic 聚类、Primary Query、Supporting Queries、Top10 Campaign 和 campaign 标题文案。",
    "原则：",
    "1. 清洗阶段只删除明显不可用数据，不做价值判断；候选数据已经完成硬过滤。",
    "2. campaign 潜力分使用两层权重：核心价值 70% + 可执行性 30%。",
    "3. 核心价值：User Need 25%，Content Gap 20%，UGC Potential 20%，Trend Momentum 5%。可执行性：Campaign Intent 10%，Expansion Potential 10%，Brand Safety 10%。",
    "4. 不要输出避雷、red flags、worst、avoid 等负向活动主题。",
    "5. 色情、暴力、赌博、毒品、仇恨、极端政治、未成年人敏感、医疗误导和违法内容不得进入结果。",
    "6. 导航型、唯一答案、品牌客服、工具搜索、下载入口等基本没有 UGC 空间的 query 不应进入结果。",
    "7. finalScore 满分 100，用于排序；同时每条 query 必须给 opportunityScore，范围 1-5，用于前端表格展示。",
    "8. 大于等于 70 分的 query 按 Campaign 大类聚类，例如酒店住宿、旅行攻略、美食探店、体验项目；不要拆得太细。",
    "9. 一个 Cluster 算一个 Campaign：最高分是 primaryQuery，其余同簇 query 是 supportingQueries。",
    "10. 每条入选 query 的 campaignTitles 必须恰好 3 条，type、titleEn、titleZh、requirementEn、requirementZh 都要输出，英文在前，中文在后。",
    "11. 输出必须是 JSON，不要 Markdown，不要解释性前后缀。",
    "JSON schema:",
    JSON.stringify({
      summary: "一句话总结整体垂类机会",
      topQueries: [
        {
          query: "原 query",
          topicCluster: "主题簇",
          primaryQuery: "最高分主 query",
          supportingQueries: ["同簇 supporting query"],
          domain: "垂类",
          intent: "用户搜索意图",
          demandScore: 0,
          contentGapScore: 0,
          ugcPotentialScore: 0,
          trendMomentumScore: 0,
          campaignIntentScore: 0,
          expansionPotentialScore: 0,
          brandSafetyScore: 0,
          gapScore: 0,
          productionScore: 0,
          clarityScore: 0,
          expansionScore: 0,
          safetyScore: 0,
          opportunityScore: 0,
          duplicatePenalty: 0,
          commercialScore: 0,
          campaignScore: 0,
          riskScore: 0,
          finalScore: 0,
          decision: "强推/可测/观察/剔除",
          reason: "推荐原因",
          seedWords: ["campaign seed word"],
          campaignDirection: "活动方向",
          campaignTitles: [
            { type: "Challenge", titleEn: "English title 1", titleZh: "中文标题 1", requirementEn: "English requirement 1", requirementZh: "中文投稿要求 1" },
            { type: "Showcase", titleEn: "English title 2", titleZh: "中文标题 2", requirementEn: "English requirement 2", requirementZh: "中文投稿要求 2" },
            { type: "Checklist", titleEn: "English title 3", titleZh: "中文标题 3", requirementEn: "English requirement 3", requirementZh: "中文投稿要求 3" },
          ],
        },
      ],
    }),
    "候选数据：",
    JSON.stringify(candidates, null, 2),
  ].join("\n");
}

async function runGeminiRefinement(queryResults) {
  const candidates = queryResults
    .slice(0, 60)
    .map((item) => ({
      query: item.query,
      topic: item.topic || item.query,
      domain: item.domain,
      category: item.category,
      intent: item.intent,
      priority: item.priority,
      demandScore: item.demandScore,
      contentGapScore: item.contentGapScore,
      ugcPotentialScore: item.ugcPotentialScore,
      trendMomentumScore: item.trendMomentumScore,
      campaignIntentScore: item.campaignIntentScore,
      expansionPotentialScore: item.expansionPotentialScore,
      brandSafetyScore: item.brandSafetyScore,
      gapScore: item.gapScore,
      productionScore: item.productionScore,
      safetyScore: item.safetyScore,
      campaignCluster: item.campaignCluster,
      primaryQuery: item.primaryQuery,
      supportingQueries: item.supportingQueries,
      risk: item.risk,
      source: {
        categoryPath: item.query_category || "",
        demand: getDemandValue(item),
        resource: getResourceValue(item),
        country: item["国家/地区"] || item.country || item.region || "",
      },
    }));

  if (!candidates.length) return { topSeeds: [], queryNotes: [], summary: `没有足够候选进入 ${AI_MODEL_LABEL} 精筛。` };

  const response = await withTimeout(
    crateFetch("/openapi/v1/generation/image", {
      modelId: AI_MODEL_ID,
      parameters: {
        prompt: buildGeminiScreeningPrompt(candidates),
      },
    }),
    GEMINI_REQUEST_TIMEOUT_MS,
    `${AI_MODEL_LABEL} 分析超时：候选 query 较多或网络较慢，请减少输入后重试。`,
  );
  const text = extractCrateText(response);
  const parsed = extractJsonObject(text);
  if (!parsed) {
    throw new Error(`${AI_MODEL_LABEL} 返回内容不是可解析 JSON。`);
  }
  return parsed;
}

function buildGeminiInputRows(rows, limit = 120) {
  return rows.slice(0, limit).map((row, index) => ({
    id: row.__rowId ?? index + 1,
    query: row.query,
    categoryPath: row.query_category || "",
    demand: getDemandValue(row),
    resource: getResourceValue(row),
    country: row["国家/地区"] || row.country || row.region || "",
  }));
}

function formatJson(value) {
  return JSON.stringify(value, null, 2);
}

function readStoredPromptConfig() {
  try {
    const raw = window.localStorage.getItem(PROMPT_CONFIG_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function savePromptConfigFromEditors() {
  const nextConfig = {};
  Object.entries(promptEditorEls).forEach(([key, editor]) => {
    nextConfig[key] = JSON.parse(editor.value);
  });
  window.localStorage.setItem(PROMPT_CONFIG_STORAGE_KEY, JSON.stringify(nextConfig));
  setPromptConfigStatus("JSON 已保存");
}

function initializePromptConfigEditors() {
  const stored = readStoredPromptConfig();
  Object.entries(promptEditorEls).forEach(([key, editor]) => {
    editor.value = formatJson(stored[key] || DEFAULT_PROMPT_CONFIG[key]);
    editor.addEventListener("input", () => {
      try {
        savePromptConfigFromEditors();
      } catch {
        setPromptConfigStatus("JSON 格式有误，请修正后运行");
      }
    });
  });
}

function resetPromptConfigEditors() {
  window.localStorage.removeItem(PROMPT_CONFIG_STORAGE_KEY);
  Object.entries(promptEditorEls).forEach(([key, editor]) => {
    editor.value = formatJson(DEFAULT_PROMPT_CONFIG[key]);
  });
  setPromptConfigStatus("已恢复默认 Prompt");
}

function setPromptConfigStatus(message) {
  if (els.promptConfigStatus) els.promptConfigStatus.textContent = message;
}

function getPromptConfig(stepKey) {
  const editor = promptEditorEls[stepKey];
  if (!editor) throw new Error(`缺少 ${stepKey} prompt 配置区域。`);
  try {
    const config = JSON.parse(editor.value);
    return { ...DEFAULT_PROMPT_CONFIG[stepKey], ...config };
  } catch (error) {
    throw new Error(`${getPromptStepLabel(stepKey)} Prompt JSON 格式错误：${error.message}`);
  }
}

function getPromptStepLabel(stepKey) {
  return {
    clean: "清洗 Query",
    score: "规则多维度打分",
    cluster: "主题聚类",
    title: "Campaign 标题输出",
  }[stepKey] || stepKey;
}

function normalizeInstructions(config) {
  if (Array.isArray(config.instructions)) return config.instructions.map(normalize).filter(Boolean);
  return normalize(config.instructions) ? [normalize(config.instructions)] : [];
}

function buildPromptFromConfig(config, schema, dataLabel, data) {
  return [
    normalize(config.role),
    ...normalizeInstructions(config),
    "输出 JSON，不要 Markdown。schema:",
    JSON.stringify(schema),
    dataLabel,
    JSON.stringify(data, null, 2),
  ].filter(Boolean).join("\n");
}

function getScoreDimensionsConfig(useFallback = false) {
  try {
    const dimensions = getPromptConfig("score").dimensions;
    return Array.isArray(dimensions) && dimensions.length
      ? dimensions
      : DEFAULT_PROMPT_CONFIG.score.dimensions;
  } catch (error) {
    if (useFallback) return DEFAULT_PROMPT_CONFIG.score.dimensions;
    throw error;
  }
}

function buildScoreSchema(config) {
  const baseScore = Array.isArray(config.schema?.scores) && config.schema.scores[0]
    ? config.schema.scores[0]
    : DEFAULT_PROMPT_CONFIG.score.schema.scores[0];
  const dimensionScores = getScoreDimensionsConfig().reduce((scores, dimension) => {
    scores[dimension.key] = 0;
    return scores;
  }, {});
  return {
    ...config.schema,
    scores: [{
      ...baseScore,
      dimensionScores,
    }],
  };
}

async function runGeminiJsonStep(stepName, prompt, timeoutMs = GEMINI_REQUEST_TIMEOUT_MS) {
  const response = await withTimeout(
    crateFetch("/openapi/v1/generation/image", {
      modelId: AI_MODEL_ID,
      parameters: { prompt },
    }),
    timeoutMs,
    `${AI_MODEL_LABEL} ${stepName} 超时，请减少输入后重试。`,
  );
  const text = extractCrateText(response);
  const parsed = extractJsonObject(text);
  if (!parsed) throw new Error(`${AI_MODEL_LABEL} ${stepName} 返回内容不是可解析 JSON。`);
  return parsed;
}

function buildGeminiCleanPrompt(rows) {
  const config = getPromptConfig("clean");
  return buildPromptFromConfig(
    config,
    config.schema || DEFAULT_PROMPT_CONFIG.clean.schema,
    "输入 rows:",
    buildGeminiInputRows(rows, rows.length),
  );
}

async function runGeminiCleanRows(rows, onProgress = null) {
  const sourceRows = rows.map((row, index) => ({ ...row, __rowId: index + 1, query: sanitizeQuery(row.query) }));
  const chunks = chunkRows(sourceRows);
  const kept = [];
  const summaries = [];
  const seen = new Set();

  for (const [index, chunk] of chunks.entries()) {
    onProgress?.(index + 1, chunks.length);
    const result = await runGeminiJsonStep(`清洗 query ${index + 1}/${chunks.length}`, buildGeminiCleanPrompt(chunk));
    summaries.push(result.summary || "");
    const cleanQueryById = new Map((result.keptRows || []).map((item) => [Number(item.id), sanitizeQuery(item.query)]));
    chunk.forEach((row) => {
      if (!cleanQueryById.has(Number(row.__rowId))) return;
      const query = cleanQueryById.get(Number(row.__rowId)) || row.query;
      if (isInvalidQuery(query)) return;
      const key = query.toLowerCase();
      if (seen.has(key)) return;
      seen.add(key);
      kept.push({ ...row, query });
    });
  }

  return {
    rows: kept,
    kept: kept.length,
    removed: Math.max(0, sourceRows.length - kept.length),
    summary: joinStepSummaries(summaries),
  };
}

function buildGeminiScorePrompt(rows) {
  const config = getPromptConfig("score");
  const dimensions = getScoreDimensionsConfig();
  const dimensionLines = dimensions.map((dimension) => (
    `${dimension.key} / ${dimension.label} / weight ${dimension.weight}: ${dimension.description || ""}`
  ));
  return buildPromptFromConfig(
    {
      ...config,
      instructions: [
        ...normalizeInstructions(config),
        "当前打分维度如下；如果运营改了 dimensions，就严格按新的 dimensions 输出 dimensionScores：",
        ...dimensionLines,
      ],
    },
    buildScoreSchema(config),
    "输入 rows:",
    buildGeminiInputRows(rows, rows.length),
  );
}

function applyGeminiScore(row, note) {
  const finalScore = clamp(Number(note.finalScore ?? 0));
  const opportunityScore = roundOne(Number(note.opportunityScore ?? finalScore / 20));
  const action = normalize(note.decision) || getActionFromPriority(finalScore);
  const rawDimensionScores = note.dimensionScores && typeof note.dimensionScores === "object" ? note.dimensionScores : {};
  const dimensionScores = getScoreDimensionsConfig().reduce((scores, dimension) => {
    scores[dimension.key] = normalizeDimensionScore(rawDimensionScores[dimension.key] ?? note[dimension.key]);
    return scores;
  }, {});
  const userNeedScore = normalizeDimensionScore(dimensionScores.userNeedScore ?? note.userNeedScore ?? note.demandScore);
  const contentGapScore = normalizeDimensionScore(dimensionScores.contentGapScore ?? note.contentGapScore);
  const ugcPotentialScore = normalizeDimensionScore(dimensionScores.ugcPotentialScore ?? note.ugcPotentialScore);
  const trendMomentumScore = normalizeDimensionScore(dimensionScores.trendMomentumScore ?? note.trendMomentumScore);
  const campaignIntentScore = normalizeDimensionScore(dimensionScores.campaignIntentScore ?? note.campaignIntentScore);
  const expansionPotentialScore = normalizeDimensionScore(dimensionScores.expansionPotentialScore ?? note.expansionPotentialScore);
  const brandSafetyScore = normalizeDimensionScore(dimensionScores.brandSafetyScore ?? note.brandSafetyScore);
  return {
    ...scoreQuery(row),
    query: normalize(note.query) || row.query,
    domain: normalize(note.domain) || classifyDomain(row, row.query, classifyQuery(row.query, row)),
    intent: normalize(note.intent) || "",
    topic: normalize(note.topic) || getTopic(row).label,
    demandScore: userNeedScore,
    userNeedScore,
    contentGapScore,
    gapScore: contentGapScore,
    ugcPotentialScore,
    productionScore: ugcPotentialScore,
    trendMomentumScore,
    campaignIntentScore,
    expansionPotentialScore,
    expansionScore: expansionPotentialScore,
    brandSafetyScore,
    safetyScore: brandSafetyScore,
    dimensionScores,
    baseOpportunityScore: opportunityScore,
    finalOpportunityScore: opportunityScore,
    priority: finalScore,
    action,
    hasCampaignMeaning: action === "强推" || action === "可测",
    reason: normalize(note.reason) || "",
    riskScore: clamp(100 - brandSafetyScore),
    scoredBy: AI_MODEL_LABEL,
  };
}

async function runGeminiScoreRows(rows, onProgress = null) {
  const chunks = chunkRows(rows);
  const scored = [];
  const summaries = [];

  for (const [index, chunk] of chunks.entries()) {
    onProgress?.(index + 1, chunks.length);
    const result = await runGeminiJsonStep(`规则多维度打分 ${index + 1}/${chunks.length}`, buildGeminiScorePrompt(chunk));
    summaries.push(result.summary || "");
    const scoresById = new Map((result.scores || []).map((item) => [Number(item.id), item]));
    chunk.forEach((row) => {
      const note = scoresById.get(Number(row.__rowId));
      if (!note) throw new Error(`${AI_MODEL_LABEL} 打分结果缺少 query id ${row.__rowId}`);
      scored.push(applyGeminiScore(row, note));
    });
  }

  return { rows: scored.sort(sortByQueryPriority), summary: joinStepSummaries(summaries) };
}

function buildGeminiClusterPrompt(rows) {
  const candidates = rows
    .filter((row) => Number(row.priority || 0) >= 70)
    .map((row) => ({
      id: row.__rowId,
      query: row.query,
      score: row.priority,
      opportunityScore: row.finalOpportunityScore,
      topic: row.topic,
      reason: row.reason,
    }));
  const config = getPromptConfig("cluster");
  return buildPromptFromConfig(
    config,
    config.schema || DEFAULT_PROMPT_CONFIG.cluster.schema,
    "输入 rows:",
    candidates,
  );
}

async function runGeminiClusterRows(scoredRows, onProgress = null) {
  const candidates = scoredRows.filter((row) => Number(row.priority || 0) >= 70);
  if (!candidates.length) {
    return {
      rows: scoredRows.map((row) => ({ ...row, geminiSelected: false })).sort(sortByQueryPriority),
      summary: "没有 70 分以上 query 进入主题聚类。",
    };
  }

  const chunks = chunkRows(candidates);
  const clusterById = new Map();
  const summaries = [];
  let clusterRank = 1;

  for (const [index, chunk] of chunks.entries()) {
    onProgress?.(index + 1, chunks.length);
    const result = await runGeminiJsonStep(`主题聚类 ${index + 1}/${chunks.length}`, buildGeminiClusterPrompt(chunk));
    summaries.push(result.summary || "");
    (result.clusters || []).forEach((cluster) => {
      const primaryId = Number(cluster.primaryId);
      const ids = [primaryId, ...(cluster.supportingIds || [])].map(Number).filter(Boolean);
      ids.forEach((id) => {
        clusterById.set(id, {
          campaignCluster: normalizeBroadCampaignCluster(cluster.campaignCluster),
          primaryQuery: normalize(cluster.primaryQuery),
          supportingQueries: Array.isArray(cluster.supportingQueries) ? cluster.supportingQueries.map(normalize).filter(Boolean) : [],
          clusterReason: normalize(cluster.reason),
          geminiSelected: primaryId === id,
          geminiRank: primaryId === id ? clusterRank : null,
        });
      });
      clusterRank += 1;
    });
  }

  const initiallyClustered = scoredRows.map((row) => {
    const cluster = clusterById.get(Number(row.__rowId));
    if (!cluster) return { ...row, geminiSelected: false };
    return {
      ...row,
      ...cluster,
      campaignDirection: row.campaignDirection || getCampaignDirection({ ...row, ...cluster }),
    };
  });

  const clustered = mergeBroadCampaignClusters(initiallyClustered);
  return { rows: clustered.sort(sortByQueryPriority), summary: joinStepSummaries(summaries) };
}

function buildGeminiTitlePrompt(topRows) {
  const rows = topRows.map((row, index) => ({
    rank: index + 1,
    id: row.__rowId,
    campaign: row.campaignCluster || row.topic || row.primaryQuery || row.query,
    primaryQuery: row.primaryQuery || row.query,
    supportingQueries: row.supportingQueries || [],
    campaignCluster: row.campaignCluster || row.topic,
    score: row.priority,
    reason: row.clusterReason || row.reason,
  }));
  const config = getPromptConfig("title");
  return buildPromptFromConfig(
    config,
    config.schema || DEFAULT_PROMPT_CONFIG.title.schema,
    "输入 campaigns:",
    rows,
  );
}

async function runGeminiTitleRows(rows) {
  const topRows = getTopQueries(rows, 10);
  const result = await runGeminiJsonStep("Campaign 标题输出", buildGeminiTitlePrompt(topRows));
  const titleById = new Map((result.campaigns || []).map((item) => [Number(item.id), item]));
  const withTitles = rows.map((row) => {
    const note = titleById.get(Number(row.__rowId));
    if (!note) return row;
    return {
      ...row,
      campaignDirection: normalize(note.campaignDirection) || row.campaignDirection,
      campaignTitles: normalizeCampaignTitles(note.campaignTitles, getCampaignClusterLabel(row)).slice(0, 3),
    };
  });
  return { rows: withTitles, summary: result.summary || "" };
}

function extractJsonObject(text) {
  if (!text) return null;
  const cleaned = String(text).replace(/```json|```/g, "").trim();
  try {
    return JSON.parse(cleaned);
  } catch {
    const start = cleaned.indexOf("{");
    const end = cleaned.lastIndexOf("}");
    if (start >= 0 && end > start) {
      try {
        return JSON.parse(cleaned.slice(start, end + 1));
      } catch {
        return null;
      }
    }
  }
  return null;
}

function getFallbackRiskScore(item) {
  if (item.categoryKey === "noise") return 90;
  if (item.categoryKey === "entertainment") return 78;
  if (item.risk && item.risk !== "低风险") return 58;
  return 18;
}

function buildLocalFallbackResults(scoredRows, summary) {
  const results = attachCampaignClusters(scoredRows.map((item) => ({
    ...item,
    riskScore: item.riskScore ?? getFallbackRiskScore(item),
    campaignDirection: item.campaignDirection || getCampaignDirection(item),
    campaignTitles: normalizeCampaignTitles(item.campaignTitles, item.seeds?.[0] || item.query).slice(0, 3),
    aiDecision: "",
    geminiSelected: false,
    geminiRank: null,
    scoredBy: RULE_FALLBACK_LABEL,
  })));
  const seedSource = results.filter((item) => item.hasCampaignMeaning);
  return {
    results: results.sort(sortByQueryPriority),
    aiSeedRows: aggregateSeeds(seedSource.length ? seedSource : results).slice(0, 10),
    aiSummary: summary || "已使用本地规则完成主流程筛选、主题配额和标题生成。",
  };
}

function applyGeminiResult(aiResult, results) {
  const geminiRows = Array.isArray(aiResult.topQueries) && aiResult.topQueries.length
    ? aiResult.topQueries
    : aiResult.queryNotes || [];
  const notesByQuery = new Map(geminiRows.map((item, index) => [getQueryMatchKey(item.query), { ...item, geminiRank: index + 1 }]));
  const enrichedResults = results.map((item) => {
    const note = notesByQuery.get(getQueryMatchKey(item.clusterId)) || notesByQuery.get(getQueryMatchKey(item.query)) || notesByQuery.get(getQueryMatchKey(item.topic));
    if (!note) {
      return {
        ...item,
        geminiSelected: false,
        aiEnhanced: false,
      };
    }
    const noteSeeds = Array.isArray(note.seedWords)
      ? note.seedWords.map(normalize).filter(Boolean)
      : [];
    const topicCluster = normalize(note.topicCluster);

    return {
      ...item,
      topic: topicCluster || item.topic,
      campaignCluster: topicCluster || item.campaignCluster || item.topic,
      primaryQuery: normalize(note.primaryQuery) || item.primaryQuery || item.query,
      supportingQueries: Array.isArray(note.supportingQueries)
        ? note.supportingQueries.map(normalize).filter(Boolean).slice(0, 5)
        : item.supportingQueries || [],
      intent: normalize(note.intent) || item.intent,
      domain: normalize(note.domain) || item.domain,
      seeds: dedupeSimilarSeeds(noteSeeds.length ? noteSeeds : item.seeds).slice(0, 3),
      campaignDirection: normalize(note.campaignDirection) || item.campaignDirection,
      campaignTitles: normalizeCampaignTitles(note.campaignTitles, noteSeeds[0] || item.query).slice(0, 3),
      aiDecision: normalize(note.decision) || "",
      aiReason: normalize(note.reason),
      aiCommercial: clamp(Number(note.commercialScore ?? item.commercial)),
      aiCampaign: clamp(Number(note.campaignScore ?? item.campaign)),
      aiRiskScore: clamp(Number(note.riskScore ?? getFallbackRiskScore(item))),
      aiPriority: clamp(Number(note.finalScore ?? item.priority)),
      aiOpportunityScore: roundOne(Number(note.opportunityScore ?? item.priority / 20)),
      geminiRank: note.geminiRank || null,
      geminiSelected: false,
      aiEnhanced: true,
    };
  });
  const qualified = enrichedResults.filter((item) => item.hasCampaignMeaning);
  const aiSeedRows = aggregateSeeds(qualified.length ? qualified : enrichedResults).slice(0, 10);

  return {
    results: enrichedResults.sort(sortByQueryPriority),
    aiSeedRows,
    aiSummary: aiResult.summary ? `${AI_MODEL_LABEL} 分析：${aiResult.summary}` : `${AI_MODEL_LABEL} 已完成语义分析。`,
  };
}

function getQueryMatchKey(value) {
  return normalize(value).toLowerCase().replace(/\s+/g, " ").trim();
}

function attachCampaignClusters(rows) {
  const clusterMap = new Map();
  const eligible = rows.filter((item) => Number(item.priority || 0) >= 70);

  eligible.forEach((item) => {
    const key = getTopicQuotaKey(item);
    const current = clusterMap.get(key) || {
      key,
      label: item.topic || getTopic(item).label || item.query,
      rows: [],
    };
    current.rows.push(item);
    clusterMap.set(key, current);
  });

  const clusterByQuery = new Map();
  [...clusterMap.values()].forEach((cluster) => {
    const sorted = [...cluster.rows].sort(sortByQueryPriority);
    const primary = sorted[0];
    const supporting = sorted.slice(1, 6);
    sorted.forEach((item) => {
      clusterByQuery.set(item.query.toLowerCase(), {
        campaignCluster: cluster.label,
        primaryQuery: primary.query,
        supportingQueries: supporting.map((support) => support.query),
        clusterSize: sorted.length,
      });
    });
  });

  return rows.map((item) => {
    const cluster = clusterByQuery.get(item.query.toLowerCase());
    if (!cluster) {
      return {
        ...item,
        campaignCluster: item.topic || getTopic(item).label || item.query,
        primaryQuery: item.query,
        supportingQueries: [],
        clusterSize: 1,
      };
    }
    return {
      ...item,
      ...cluster,
    };
  });
}

function aggregateClusterSeeds(clusterResults, geminiTopSeeds = []) {
  const geminiSeedMap = new Map(
    geminiTopSeeds
      .filter((item) => item.seed)
      .map((item) => [normalize(item.seed).toLowerCase(), item]),
  );
  const seedMap = new Map();

  clusterResults
    .filter((item) => item.hasCampaignMeaning)
    .forEach((cluster) => {
      dedupeSimilarSeeds(cluster.seeds).forEach((seed) => {
        const normalizedSeed = normalize(seed);
        if (!normalizedSeed) return;
        const key = getSeedCanonicalKey(normalizedSeed);
        const current = seedMap.get(key) || {
          seed: normalizedSeed,
          count: 0,
          prioritySum: 0,
          examples: [],
          domains: new Map(),
          reasons: [],
        };

        current.seed = chooseBroaderSeed(current.seed, normalizedSeed);
        current.count += Number(cluster.queryCount || 1);
        current.prioritySum += Number(cluster.priority || 0) * Number(cluster.queryCount || 1);
        current.domains.set(cluster.domain, (current.domains.get(cluster.domain) || 0) + Number(cluster.queryCount || 1));
        if (cluster.aiReason) current.reasons.push(cluster.aiReason);
        if (cluster.reason) current.reasons.push(cluster.reason);
        (cluster.examples || [cluster.query]).forEach((example) => {
          if (current.examples.length < 3 && !current.examples.includes(example)) current.examples.push(example);
        });
        seedMap.set(key, current);
      });
    });

  return [...seedMap.values()]
    .map((item) => {
      const topSeed = geminiSeedMap.get(item.seed.toLowerCase());
      const avgPriority = item.count ? Math.round(item.prioritySum / item.count) : 0;
      const domain = [...item.domains.entries()].sort((a, b) => b[1] - a[1])[0]?.[0] || "";
      return {
        seed: item.seed,
        count: item.count,
        avgPriority,
        score: clamp(avgPriority * 0.75 + Math.min(item.count, 20) * 2),
        examples: item.examples,
        domain: topSeed?.domain || domain,
        reason: topSeed?.reason || item.reasons[0] || "",
        campaignTitles: normalizeCampaignTitles(topSeed?.campaignTitles, item.seed),
        source: topSeed ? `${AI_MODEL_LABEL} + Cluster` : "Cluster",
      };
    })
    .sort((a, b) => b.score - a.score || b.count - a.count || b.avgPriority - a.avgPriority)
    .slice(0, 10);
}

function dedupeSimilarSeeds(seeds) {
  const grouped = new Map();
  seeds
    .map(normalize)
    .filter(Boolean)
    .forEach((seed) => {
      const key = getSeedCanonicalKey(seed);
      const current = grouped.get(key);
      grouped.set(key, current ? chooseBroaderSeed(current, seed) : seed);
    });
  return [...grouped.values()];
}

function getSeedCanonicalKey(seed) {
  const text = normalize(seed).toLowerCase()
    .replace(/poolside/g, "pool")
    .replace(/swimming pool/g, "pool")
    .replace(/cafes/g, "cafe")
    .replace(/coffee shops?/g, "coffee")
    .replace(/skin care/g, "skincare")
    .replace(/make up/g, "makeup");
  const directTopic = [
    ["pool", ["pool"]],
    ["coffee", ["coffee", "cafe"]],
    ["fitness", ["fitness", "workout", "gym", "training"]],
    ["skincare", ["skincare", "serum", "sunscreen"]],
    ["makeup", ["makeup", "lipstick", "blush", "mascara", "foundation"]],
    ["outfit", ["outfit", "style", "wardrobe", "dress", "sneakers", "shoes", "bag"]],
    ["food", ["food", "restaurant", "brunch", "dessert", "dining"]],
    ["tech", ["tech", "app", "software", "tool", "gadget"]],
    ["home", ["home", "room", "organization", "furniture"]],
    ["wellness", ["wellness", "self care", "healthy", "health"]],
    ["study", ["study", "learning", "school"]],
    ["stay", ["stay", "hotel", "resort", "villa", "cabin", "staycation"]],
    ["travel", ["travel", "trip", "getaway"]],
  ].find(([, words]) => words.some((word) => text.includes(word)));
  if (directTopic) return directTopic[0];

  const stopWords = new Set(["the", "your", "my", "our", "best", "top", "guide", "tips", "ideas", "idea", "review", "reviews", "experience", "experiences", "moments", "vibes", "tour", "challenge", "meetup", "recommendations", "recommendation", "favorites", "finds", "routine", "inspiration", "how", "to", "for", "with", "and"]);
  const tokens = text.replace(/[^a-z0-9]+/g, " ").split(/\s+/).filter((token) => token && !stopWords.has(token));
  return tokens.slice(0, 2).join(" ") || text;
}

function chooseBroaderSeed(a, b) {
  const first = normalize(a);
  const second = normalize(b);
  if (!first) return second;
  if (!second) return first;
  const firstWords = first.split(/\s+/).length;
  const secondWords = second.split(/\s+/).length;
  if (secondWords < firstWords) return second;
  if (secondWords > firstWords) return first;
  return second.length < first.length ? second : first;
}

function normalizeCampaignTitles(titles, seed) {
  if (Array.isArray(titles) && titles.length) {
    return titles
      .map((item) => {
        const titleEn = normalize(item.titleEn || item.englishTitle || item.title_en);
        const titleZh = normalize(item.titleZh || item.chineseTitle || item.title_zh);
        const requirementEn = normalize(item.requirementEn || item.englishRequirement || item.requirement_en);
        const requirementZh = normalize(item.requirementZh || item.chineseRequirement || item.requirement_zh);
        const legacyTitle = normalize(item.title);
        const legacyRequirement = normalize(item.requirement);
        return {
          type: normalizeCampaignTitleType(item.type),
          title: titleEn || legacyTitle,
          titleEn: titleEn || legacyTitle,
          titleZh,
          requirement: requirementEn || legacyRequirement,
          requirementEn: requirementEn || legacyRequirement,
          requirementZh,
        };
      })
      .filter((item) => item.titleEn || item.titleZh || item.title)
      .slice(0, 5);
  }
  return buildCampaignTitleIdeas(seed);
}

function normalizeCampaignTitleType(type) {
  const normalized = normalize(type);
  const titleTypeMap = {
    "活动标题": "活动标题",
    "投稿要求": "投稿要求",
    "内容模板": "内容模板",
    "记录分享": "Story Sharing",
    "教程向": "Tutorial",
    "社交活动": "Social Meetup",
    "打卡挑战": "Challenge",
    "榜单推荐": "Recommendation List",
    "文案方向": "Campaign Angle",
  };
  return titleTypeMap[normalized] || normalized || "Campaign Angle";
}

function buildCampaignTitleIdeas(seed) {
  const titleSeed = normalize(seed) || "your favorite finds";
  return [
    { type: "活动标题", title: `${titleSeed} 真实体验征集` },
    { type: "活动标题", title: `我的 ${titleSeed} 推荐清单` },
    { type: "活动标题", title: `${titleSeed} 实拍打卡挑战` },
    { type: "投稿要求", title: `${titleSeed} 图文/视频投稿说明` },
    { type: "内容模板", title: `${titleSeed} 体验模板` },
  ];
}

const topicRules = [
  { id: "pool", label: "pool", words: ["pool", "pools", "swimming"] },
  { id: "coffee", label: "coffee", words: ["coffee", "cafe"] },
  { id: "fitness", label: "fitness", words: ["fitness", "workout", "gym", "training"] },
  { id: "skincare", label: "skincare", words: ["skincare", "skin care", "serum", "sunscreen"] },
  { id: "makeup", label: "makeup", words: ["makeup", "lipstick", "blush", "mascara", "foundation", "concealer"] },
  { id: "outfit", label: "outfit", words: ["outfit", "dress", "shoes", "sneakers", "bag", "style", "fashion"] },
  { id: "hotel", label: "hotel stay", words: ["hotel", "resort", "villa", "cabin", "cabins", "motel", "suite"] },
  { id: "food", label: "food", words: ["restaurant", "food", "brunch", "dinner", "lunch", "dessert", "bakery", "pizza", "burger", "sushi", "menu"] },
  { id: "tech", label: "tech tools", words: ["software", "apps", "app", "digital", "technology", "programming", "phone", "gadget"] },
  { id: "home", label: "home", words: ["home", "household", "decoration", "furniture", "room", "real estate"] },
  { id: "wellness", label: "wellness", words: ["health", "healthcare", "wellness", "medicine", "self care"] },
  { id: "study", label: "study", words: ["education", "school", "study", "language learning", "campus", "k12"] },
  { id: "hobby", label: "hobby", words: ["hobby", "hobbies", "pets", "gardening", "diy", "photography", "toys", "lego", "fishing", "rubik", "chess"] },
  { id: "travel", label: "travel", words: ["travel", "tourism", "tourist", "beach", "parking", "guide", "dunes", "springs"] },
];

function getTopic(row) {
  const source = `${row.query_category || ""} ${row.query || ""}`.toLowerCase();
  const matched = topicRules.find((rule) => includesAny(source, rule.words));
  if (matched) return matched;
  const cleaned = normalize(row.query).toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  const words = cleaned.split(/\s+/).filter((word) => word.length > 2);
  const topic = words.slice(0, 2).join(" ") || cleaned || "other";
  return { id: `other:${topic}`, label: topic || "other", words: [] };
}

function clusterRows(rows) {
  const clusterMap = new Map();

  rows.forEach((row) => {
    const topic = getTopic(row);
    const base = scoreQuery(row);
    const clusterId = `${base.domain}:${topic.id}`;
    const current = clusterMap.get(clusterId) || {
      clusterId,
      topic: topic.label,
      domain: base.domain,
      rows: [],
      scoredRows: [],
      examples: [],
      users: 0,
      pv: 0,
      manualPv: 0,
    };

    current.rows.push(row);
    current.scoredRows.push(base);
    current.users += Number(row["搜索用户"] || row.search_users || 0);
    current.pv += Number(row["经验决策搜索PV"] || row.search_pv || 0);
    current.manualPv += Number(row["经验决策手搜PV"] || row.manual_pv || 0);
    if (current.examples.length < 4) current.examples.push(base.query);
    clusterMap.set(clusterId, current);
  });

  return [...clusterMap.values()];
}

function scoreCluster(cluster) {
  const sorted = [...cluster.scoredRows].sort((a, b) => b.priority - a.priority);
  const top = sorted[0];
  const avg = (key) => Math.round(sorted.reduce((sum, item) => sum + Number(item[key] || 0), 0) / sorted.length);
  const manualRate = cluster.pv > 0 ? cluster.manualPv / cluster.pv : 0;
  const heat = clamp(Math.log10(Math.max(cluster.users, 1)) * 18 + manualRate * 20);
  const commercial = clamp(avg("commercial") + Math.min(cluster.rows.length, 8) * 2);
  const campaign = clamp(avg("campaign") + Math.min(cluster.rows.length, 8) * 3);
  const priority = clamp(commercial * 0.42 + campaign * 0.43 + heat * 0.15);
  const action = getActionFromPriority(priority);
  const seeds = [...new Set(sorted.flatMap((item) => item.seeds))].slice(0, 5);

  return {
    ...top,
    query: cluster.topic,
    clusterId: cluster.clusterId,
    topic: cluster.topic,
    domain: cluster.domain,
    queryCount: cluster.rows.length,
    examples: cluster.examples,
    users: cluster.users,
    pv: cluster.pv,
    manualPv: cluster.manualPv,
    commercial,
    campaign,
    heat,
    priority,
    action,
    hasCampaignMeaning: action === "强推" || action === "可测",
    seeds,
    reason: `${cluster.topic} 聚合了 ${cluster.rows.length} 条相近 query，按主题统一判断活动价值。`,
  };
}

function parseDelimitedText(text) {
  const lines = text.split(/\r?\n/).filter((line) => line.trim());
  if (!lines.length) return [];
  const delimiter = lines[0].includes("\t") ? "\t" : ",";
  const headers = splitLine(lines[0], delimiter).map(normalize);
  const queryHeaderIndex = headers.findIndex((header) => header.toLowerCase() === "query");

  if (queryHeaderIndex === -1) {
    const parsedCategoryRows = parseCategorySummaryRows(lines, delimiter);
    if (parsedCategoryRows.length) return parsedCategoryRows;
    return lines.map((line) => ({ query: normalize(line) })).filter((row) => row.query);
  }

  const rows = lines.slice(1).map((line) => {
    const values = splitLine(line, delimiter);
    return headers.reduce((row, header, index) => {
      row[header] = normalize(values[index]);
      return row;
    }, {});
  }).filter((row) => row.query);

  return rows.length ? rows : lines.map((line) => ({ query: normalize(line) })).filter((row) => row.query);
}

function parseCategorySummaryRows(lines, delimiter) {
  return lines.map((line) => {
    const cells = splitLine(line, delimiter).map(normalize);
    const path = cells.find((cell) => cell.includes("#") && cell.includes(">>"));
    if (!path) return null;

    const numbers = cells.map(parseMetricNumber).filter((value) => Number.isFinite(value));
    const query = buildCategoryQuery(cells, path);
    return {
      query_category: path,
      query,
      搜索用户: numbers[0] || 0,
      经验决策搜索PV: numbers[1] || 0,
      经验决策手搜PV: numbers[4] || numbers[3] || 0,
      raw_row: line,
    };
  }).filter(Boolean);
}

function buildCategoryQuery(cells, path) {
  const pathTail = path.split(">>").pop() || path;
  const candidates = [cells[3], cells[2], pathTail]
    .map((value) => normalize(value).replace(/_/g, " "))
    .filter((value) => value && !value.includes("#"));
  return candidates[0] || pathTail;
}

function parseMetricNumber(value) {
  const cleaned = normalize(value).replace(/,/g, "").replace("%", "");
  if (!cleaned || Number.isNaN(Number(cleaned))) return NaN;
  return Number(cleaned);
}

function splitLine(line, delimiter) {
  if (delimiter === "\t") return line.split("\t");
  const cells = [];
  let current = "";
  let quoted = false;

  for (const char of line) {
    if (char === "\"") quoted = !quoted;
    else if (char === delimiter && !quoted) {
      cells.push(current);
      current = "";
    } else current += char;
  }
  cells.push(current);
  return cells;
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function chunkRows(rows, size = GEMINI_BATCH_SIZE) {
  const chunks = [];
  for (let index = 0; index < rows.length; index += size) {
    chunks.push(rows.slice(index, index + size));
  }
  return chunks;
}

function joinStepSummaries(summaries) {
  return summaries.map(normalize).filter(Boolean).join("；");
}

function cleanQueryRows(rows) {
  const cleaned = [];
  let removed = 0;
  const seen = new Set();

  rows.forEach((row) => {
    const query = sanitizeQuery(row.query);
    if (!query || isInvalidQuery(query)) {
      removed += 1;
      return;
    }
    const key = query.toLowerCase();
    if (seen.has(key)) {
      removed += 1;
      return;
    }
    seen.add(key);
    cleaned.push({ ...row, query });
  });

  return {
    rows: cleaned,
    kept: cleaned.length,
    removed,
  };
}

function sanitizeQuery(query) {
  return normalize(query)
    .replace(/[\u0000-\u001F\u007F-\u009F\u200B-\u200D\uFEFF]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function isInvalidQuery(query) {
  const q = normalize(query);
  const lower = q.toLowerCase();
  if (!q) return true;
  if (lower === "query") return true;
  if (q.length < 2 || q.length > 160) return true;
  if (/[�]{1,}/.test(q)) return true;
  if (!/[a-zA-Z0-9\u4E00-\u9FFF]/.test(q)) return true;
  if (/[^\x00-\x7F]/.test(q) && !/[\u4E00-\u9FFF]/.test(q)) return true;
  const symbolCount = (q.match(/[^a-zA-Z0-9\u4E00-\u9FFF\s]/g) || []).length;
  if (symbolCount / Math.max(q.length, 1) > 0.5) return true;
  if (includesAny(lower, patterns.safetyBlocked)) return true;
  if (includesAny(lower, patterns.noUgcSpace)) return true;
  if (isEntertainmentConsumeQuery(lower)) return true;
  if (/^(what time|how many|how old|how tall|when is|where is)\b/.test(lower)) return true;
  return false;
}

function isEntertainmentConsumeQuery(lowerQuery) {
  const hasKnownCelebrity = includesAny(lowerQuery, patterns.celebrity);
  const hasEntertainmentConsumeSignal = includesAny(lowerQuery, patterns.entertainmentConsume);
  const hasConsumePhrase = /\b(news|gossip|rumou?r|tea|scandal|dating|breakup|divorce|cast|episode|season|recap|spoiler|explained|drama|series|tv show|reality show|variety show)\b/.test(lowerQuery)
    || /(新闻|爆料|八卦|吃瓜|绯闻|恋情|分手|离婚|塌房|剧情|剧透|演员|嘉宾|综艺|真人秀|电视剧|剧集|节目)/.test(lowerQuery);
  return (hasKnownCelebrity && hasConsumePhrase) || (hasEntertainmentConsumeSignal && hasConsumePhrase);
}

async function runScreening(rows) {
  if (!rows.length) {
    state.rows = [];
    state.scoredRows = [];
    state.results = [];
    state.clusters = [];
    state.clusterResults = [];
    state.aiSeedRows = [];
    state.aiSummary = "";
    state.aiError = "";
    state.aiFallback = false;
    state.aiEnhanced = false;
    state.parsedRows = [];
    state.cleanStats = { kept: 0, removed: 0 };
    state.completedSteps = new Set();
    state.activeStep = null;
    state.running = false;
    els.runStatus.textContent = "没有识别到 query。可以粘贴完整表格，也可以一行一个 query。";
    render();
    return;
  }

  const runId = state.runId + 1;
  state.runId = runId;
  state.running = true;
  state.rows = [];
  state.scoredRows = [];
  state.results = [];
  state.clusters = [];
  state.clusterResults = [];
  state.aiSeedRows = [];
  state.aiSummary = "";
  state.aiError = "";
  state.aiFallback = false;
  state.aiEnhanced = false;
  state.parsedRows = rows;
  state.cleanStats = { kept: 0, removed: 0 };
  state.completedSteps = new Set();
  setActiveStep("upload", "正在读取表格字段和 query 数据...");
  render();

  await wait(550);
  if (runId !== state.runId) return;
  state.completedSteps.add("upload");
  if (!state.crateSession) {
    state.activeStep = null;
    state.running = false;
    els.runStatus.textContent = `请先连接 Crate。清洗、打分、主题聚类和标题输出都需要 ${AI_MODEL_ID} 执行。`;
    render();
    return;
  }

  try {
    setActiveStep("clean", `${AI_MODEL_ID} 正在清洗 query...`);
    render();
    const cleaned = await runGeminiCleanRows(rows, (batch, total) => {
      setActiveStep("clean", `${AI_MODEL_ID} 正在清洗 query，第 ${batch}/${total} 批，每批最多 ${GEMINI_BATCH_SIZE} 行...`);
      render();
    });
    if (runId !== state.runId) return;
    state.rows = cleaned.rows;
    state.cleanStats = { kept: cleaned.kept, removed: cleaned.removed };
    state.completedSteps.add("clean");
    state.aiSummary = cleaned.summary;

    if (!state.rows.length) {
      state.activeStep = null;
      state.running = false;
      els.runStatus.textContent = "清洗后没有可用 query。可以补充更完整的 query 内容后再运行。";
      render();
      return;
    }

    setActiveStep("score", `${AI_MODEL_ID} 正在给每个 query 计算 campaign 潜力分...`);
    render();
    const scored = await runGeminiScoreRows(state.rows, (batch, total) => {
      setActiveStep("score", `${AI_MODEL_ID} 正在打分，第 ${batch}/${total} 批，每批最多 ${GEMINI_BATCH_SIZE} 行...`);
      render();
    });
    if (runId !== state.runId) return;
    state.scoredRows = scored.rows;
    state.results = scored.rows;
    state.clusterResults = scored.rows;
    state.completedSteps.add("score");
    state.aiSummary = scored.summary;

    setActiveStep("classify", `${AI_MODEL_ID} 正在将 70 分以上 query 按 Campaign 大类聚类...`);
    render();
    const clustered = await runGeminiClusterRows(state.scoredRows, (batch, total) => {
      setActiveStep("classify", `${AI_MODEL_ID} 正在主题聚类，第 ${batch}/${total} 批，每批最多 ${GEMINI_BATCH_SIZE} 条高分 query...`);
      render();
    });
    if (runId !== state.runId) return;
    state.results = clustered.rows;
    state.clusterResults = clustered.rows;
    state.completedSteps.add("classify");
    state.aiSummary = clustered.summary;

    setActiveStep("top", "正在按 Campaign Cluster 输出 Top10 Cluster...");
    render();
    await wait(250);
    if (runId !== state.runId) return;
    state.completedSteps.add("top");

    setActiveStep("asset", `${AI_MODEL_ID} 正在生成 campaign 标题文案...`);
    render();
    const titled = await runGeminiTitleRows(state.results);
    if (runId !== state.runId) return;
    state.results = titled.rows.sort(sortByQueryPriority);
    state.clusterResults = state.results;
    const qualified = state.results.filter((item) => item.hasCampaignMeaning);
    state.aiSeedRows = aggregateSeeds(qualified.length ? qualified : state.results).slice(0, 10);
    state.aiSummary = titled.summary;
    state.aiEnhanced = true;
  } catch (error) {
    state.aiError = error.message || `${AI_MODEL_ID} 执行失败，请检查 Crate 连接后重试。`;
    if (String(state.aiError).toLowerCase().includes("unauthorized")) clearCrateSession();
    state.activeStep = null;
    state.running = false;
    render();
    return;
  }

  await wait(250);
  if (runId !== state.runId) return;
  state.completedSteps.add("asset");
  state.activeStep = null;
  state.running = false;
  render();
}

function rerunCurrentRows() {
  const sourceRows = state.rows.length ? state.rows : state.parsedRows;
  if (sourceRows.length) runScreening(sourceRows);
}

function setActiveStep(step, message) {
  state.activeStep = step;
  els.runStatus.textContent = message;
}

function render() {
  const visible = getScoreFilteredRows(state.results);
  updateControls();
  renderAuth();
  renderSummary();
  renderProgress();
  renderResults(visible);
  bindScoreFilterButtons();
}

function updateControls() {
  [els.runInputButton, els.exportButton, els.connectCrateButton, els.disconnectCrateButton].forEach((button) => {
    button.disabled = state.running;
  });
  els.connectCrateButton.disabled = state.running || state.authorizing;
  els.disconnectCrateButton.disabled = state.running || state.authorizing || !state.crateSession;
  if (els.saveCrateSettingsButton) els.saveCrateSettingsButton.disabled = state.running || state.authorizing;
}

function renderAuth() {
  if (state.crateSession) {
    const userLabel = state.crateSession.user?.email || "authorized";
    els.authStatus.textContent = state.aiError
      ? `已连接 Crate：${userLabel}。上次 ${AI_MODEL_LABEL} JSON 步骤失败：${state.aiError}`
      : `已连接 Crate：${userLabel}。清洗、打分、主题聚类和标题输出会逐步调用 ${AI_MODEL_LABEL}。`;
    els.aiModeBadge.textContent = `${AI_MODEL_LABEL} JSON`;
    els.aiModeBadge.classList.add("is-connected");
    els.connectCrateButton.textContent = "重新连接";
    return;
  }

  if (state.authorizing) {
    els.aiModeBadge.textContent = "Authorizing";
    els.aiModeBadge.classList.remove("is-connected");
    els.connectCrateButton.textContent = "授权中";
    return;
  }

  const missingSettings = !getCrateApiBase() || !getCrateApprovalOrigin();
  els.authStatus.textContent = missingSettings
    ? `未连接 Crate。动态部署会自动读取连接配置；如果没有，请填写 Crate API Base 和 Approval Origin。`
    : `未连接 Crate。请先连接 Crate，JSON 步骤需要 ${AI_MODEL_LABEL} 执行。`;
  els.aiModeBadge.textContent = `${AI_MODEL_LABEL} required`;
  els.aiModeBadge.classList.remove("is-connected");
  els.connectCrateButton.textContent = "连接 Crate";
}

function renderSummary() {
  els.totalCount.textContent = state.results.length;
  els.pushCount.textContent = state.results.filter((item) => item.action === "强推").length;
  els.testCount.textContent = state.results.filter((item) => item.action === "可测").length;
  els.clusterCount.textContent = getClusterCount(state.results);
}

function renderProgress() {
  const hasRows = state.rows.length > 0 || state.parsedRows.length > 0;
  const hasResults = state.results.length > 0;
  const steps = buildProgressSteps();
  const scoringLabel = AI_MODEL_LABEL;
  if (!state.running) {
    els.runStatus.textContent = hasResults
      ? `已完成 ${state.results.length} 条 query 的清洗、打分、主题聚类、Top10 和标题输出。`
      : "等待上传 query 表格。支持 CSV / TSV / TXT，字段里有 query 即可。";
  }

  Object.entries(steps).forEach(([key, step]) => {
    const node = els.progressTrack.querySelector(`[data-step="${key}"]`);
    if (!node) return;
    const isDone = state.completedSteps.has(key);
    const isActive = state.activeStep === key;
    node.classList.toggle("waiting", !hasRows || (!isDone && !isActive));
    node.classList.toggle("active", isActive);
    node.classList.toggle("done", isDone);
    node.querySelector("p").textContent = step.summary;
    node.querySelector("ul").innerHTML = step.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  });
}

function buildProgressSteps() {
  const scoringLabel = AI_MODEL_LABEL;
  const baseSteps = {
    upload: { summary: "待读取表格", items: [] },
    clean: { summary: "等待读取完成", items: [] },
    score: { summary: "等待 Query 清洗完成", items: [] },
    classify: { summary: "等待 campaign 潜力打分完成", items: [] },
    top: { summary: "等待主题聚类完成", items: [] },
    asset: { summary: "等待 Top10 输出完成", items: [] },
  };

  const sourceRows = state.parsedRows.length ? state.parsedRows : state.rows;
  if (!sourceRows.length) return baseSteps;

  baseSteps.upload = {
    summary: state.completedSteps.has("upload") ? `读取到 ${sourceRows.length} 条 query。` : "正在读取表格...",
    items: state.completedSteps.has("upload")
      ? [
          `最高需求 query：${getTopByDemand(sourceRows)?.query || "-"}`,
          `可识别字段：类目 / Query / 搜索需求量 / 资源量 / 国家地区`,
        ]
      : ["解析表头", "识别 query 字段", "读取搜索量数据"],
  };

  if (!state.completedSteps.has("clean")) {
    return {
      ...baseSteps,
      upload: baseSteps.upload,
      clean: {
        summary: state.activeStep === "clean" ? "正在清洗 query，等待结果生成..." : "等待清洗开始",
        items: state.activeStep === "clean" ? ["Loading..."] : [],
      },
    };
  }

  const cleanStep = {
    summary: `清洗完成：保留 ${state.cleanStats.kept} 条，剔除 ${state.cleanStats.removed} 条无效 query。`,
    items: ["已剔除空值、重复 Query、乱码、超长字符串和特殊字符占比过高", "已剔除色情、暴力、赌博、毒品、仇恨、极端政治、未成年人敏感、医疗误导和违法内容", "已剔除导航型、唯一答案、品牌客服、工具搜索、下载入口和无意义字符"],
  };

  if (!state.completedSteps.has("score")) {
    return {
      ...baseSteps,
      upload: baseSteps.upload,
      clean: cleanStep,
      score: {
        summary: state.activeStep === "score" ? `${scoringLabel} 正在逐条计算 campaign 潜力分...` : `等待 ${scoringLabel} 多维打分开始`,
        items: state.activeStep === "score" ? ["核心价值 70%：User Need 25 / Content Gap 20 / UGC Potential 20 / Trend 5", "可执行性 30%：Campaign Intent 10 / Expansion Potential 10 / Brand Safety 10"] : [],
      },
    };
  }

  const categoryCounts = countBy(state.results, "category");
  const actionCounts = countBy(state.results, "action");
  const topCategories = Object.entries(categoryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([label, count]) => `${label} ${count} 条`);
  const qualified = state.results.filter((item) => item.hasCampaignMeaning);
  const avgPriority = Math.round(state.results.reduce((sum, item) => sum + item.priority, 0) / state.results.length);
  const riskCount = state.results.filter((item) => item.risk !== "低风险").length;
  const topQueries = getTopQueries(qualified.length ? qualified : state.results, 10);
  const scoreStep = {
    summary: `${scoringLabel} 最终平均优先级 ${avgPriority} 分，当前阈值 ${state.threshold} 分。`,
    items: [
      "核心价值 70%：User Need 25 / Content Gap 20 / UGC Potential 20 / Trend 5",
      "可执行性 30%：Campaign Intent 10 / Expansion Potential 10 / Brand Safety 10",
      `进入活动池 ${qualified.length} 条：强推 ${actionCounts["强推"] || 0} 条，可测 ${actionCounts["可测"] || 0} 条`,
      `主要类别：${topCategories.join(" / ")}`,
      `${AI_MODEL_LABEL} 已完成逐条 JSON 打分，风险或噪音 ${riskCount} 条`,
    ],
  };
  const clusterStep = {
    summary: "已将 70 分以上 query 按 Campaign 大类聚类，一个大类算一个 Campaign。",
    items: topQueries.slice(0, 5).map((item) => `${item.campaignCluster || item.topic}：${item.primaryQuery || item.query}`),
  };
  const topStep = {
    summary: topQueries.length ? "完成 Cluster 级别 Top10 输出。" : "暂无可输出的 Top10 cluster。",
    items: topQueries.length ? topQueries.slice(0, 5).map((item) => `${getCampaignClusterLabel(item)} ${formatPercentScore(item)}分`) : ["建议降低阈值或补充更明确的 query"],
  };
  const assetStep = {
    summary: `${scoringLabel} 已生成每个 Campaign Cluster 的 3 条 campaign 标题文案。`,
    items: ["活动标题", "投稿要求", "内容模板方向"],
  };

  if (!state.completedSteps.has("classify")) {
    return {
      ...baseSteps,
      upload: baseSteps.upload,
      clean: cleanStep,
      score: scoreStep,
      classify: {
        summary: state.activeStep === "classify" ? `${scoringLabel} 正在进行主题聚类...` : "等待 campaign 潜力打分完成",
        items: state.activeStep === "classify" ? ["70 分以上 query 进入 Campaign 大类聚类", "最高分作为 Primary Query", "其余作为 Supporting Queries"] : [],
      },
    };
  }

  if (!state.completedSteps.has("top")) {
    return {
      ...baseSteps,
      upload: baseSteps.upload,
      clean: cleanStep,
      score: scoreStep,
      classify: clusterStep,
      top: {
        summary: state.activeStep === "top" ? "正在输出 Top10 Campaign Cluster..." : "等待主题聚类完成",
        items: state.activeStep === "top" ? ["Loading..."] : [],
      },
    };
  }

  if (!state.completedSteps.has("asset")) {
    return {
      ...baseSteps,
      upload: baseSteps.upload,
      clean: cleanStep,
      score: scoreStep,
      classify: clusterStep,
      top: topStep,
      asset: {
        summary: state.activeStep === "asset" ? `${scoringLabel} 正在生成 campaign 标题文案...` : "等待 Top10 输出完成",
        items: state.activeStep === "asset" ? ["Loading..."] : [],
      },
    };
  }

  return {
    upload: baseSteps.upload,
    clean: cleanStep,
    score: scoreStep,
    classify: clusterStep,
    top: topStep,
    asset: assetStep,
  };
}

function renderResults(rows) {
  if (state.running) {
    els.resultList.innerHTML = `<div class="empty-state">后台筛选正在运行，结果会在 Top10 Campaign Cluster 生成后展示。</div>`;
    return;
  }
  const warningBanner = state.aiError
    ? `<div class="empty-state">${AI_MODEL_LABEL} JSON 步骤失败：${escapeHtml(state.aiError)}</div>`
    : "";

  if (!rows.length) {
    if (state.results.length) {
      els.resultList.innerHTML = warningBanner
        + buildTopQuerySection(state.results)
        + buildQueryCopySection(state.results)
        + buildQuerySection(rows, getScoreFilterTitle());
      return;
    }

    const emptyText = state.results.length
      ? `${getScoreFilterTitle()}暂无 query。`
      : "跑完后这里会展示 Top10 Campaign Cluster 表格，以及每个 cluster 的 3 条参考文案。";
    els.resultList.innerHTML = `${warningBanner}<div class="empty-state">${emptyText}</div>`;
    return;
  }

  const topQuerySection = buildTopQuerySection(state.results);
  const copySection = buildQueryCopySection(state.results);
  const querySection = buildQuerySection(rows, getScoreFilterTitle());

  els.resultList.innerHTML = warningBanner + topQuerySection + copySection + querySection;
}

function buildTopQuerySection(rows) {
  const topRows = getTopQueries(rows, 10);
  const scoringLabel = AI_MODEL_LABEL;
  return `
    <section class="top-table-section">
      <div class="section-title">
        <span>Top10 Campaign Cluster</span>
        <strong>${scoringLabel} 最终分 + Cluster 排序</strong>
      </div>
      ${state.aiSummary ? `<p class="ai-summary">${escapeHtml(state.aiSummary)}</p>` : ""}
      <div class="result-table-wrap">
        <table class="top-query-table">
          <thead>
            <tr>
              <th>排名</th>
              <th>Primary Query</th>
              <th>Supporting Queries</th>
              <th>聚类</th>
              <th>评分</th>
              <th>原因</th>
            </tr>
          </thead>
          <tbody>
            ${topRows.map((item, index) => `
              <tr>
                <td>${index + 1}</td>
                <td><strong>${escapeHtml(item.primaryQuery || item.query)}</strong><span>${escapeHtml(item.category)} · ${escapeHtml(item.intent)}</span></td>
                <td>${renderSupportingQueries(item.supportingQueries, item.clusterQueryCount)}</td>
                <td>${escapeHtml(item.campaignCluster || item.topic || getTopic(item).label)}</td>
                <td><b>${formatPercentScore(item)}</b><small>/ 100</small></td>
                <td>${escapeHtml(item.aiReason || item.reason || getCampaignDirection(item))}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function buildQueryCopySection(rows) {
  const topRows = getTopQueries(rows, 10);
  return `
    <section class="copy-section">
      <div class="section-title">
        <span>Reference Copy</span>
        <strong>每个聚类 3 条参考文案</strong>
      </div>
      <div class="copy-grid">
        ${topRows.map((item, index) => `
          <article class="copy-card">
            <div class="copy-card-head">
              <span>${String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>${escapeHtml(getCampaignClusterLabel(item))}</h3>
                <p>${escapeHtml(getClusterQueryContext(item))}</p>
              </div>
            </div>
            <div class="copy-list">
              ${getCampaignCopiesForQuery(item).map((copy) => `
                <div>
                  <span>${escapeHtml(copy.type)}</span>
                  <strong>${escapeHtml(copy.titleEn || copy.title)}</strong>
                  ${copy.titleZh ? `<strong class="zh-copy">${escapeHtml(copy.titleZh)}</strong>` : ""}
                  <p>${escapeHtml(copy.requirementEn || copy.requirement)}</p>
                  ${copy.requirementZh ? `<p class="zh-copy">${escapeHtml(copy.requirementZh)}</p>` : ""}
                </div>
              `).join("")}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function buildQuerySection(rows, title) {
  const scoringLabel = AI_MODEL_LABEL;
  return `
    <section class="query-board">
      <div class="section-title">
        <div>
          <span>Query Details</span>
          <strong>${title}</strong>
        </div>
        <div class="score-filter-group">
          <button class="ghost score-filter ${state.scoreFilter === "90" ? "is-active" : ""}" data-score-filter="90" type="button">90以上</button>
          <button class="ghost score-filter ${state.scoreFilter === "80" ? "is-active" : ""}" data-score-filter="80" type="button">80～89</button>
          <button class="ghost score-filter ${state.scoreFilter === "70" ? "is-active" : ""}" data-score-filter="70" type="button">70～79</button>
        </div>
      </div>
      ${rows.length ? rows.map((item) => `
    <article class="result-item">
      <div>
        <div class="query-title">${escapeHtml(item.query)}${item.queryCount ? ` <span class="cluster-count">${item.queryCount} 条</span>` : ""}</div>
        <p class="meta-line">${item.domain} · ${item.category} · ${item.intent} · ${item.scoredBy || scoringLabel}</p>
        ${renderScoreDimensions(item)}
        <p class="meta-line">${escapeHtml(item.aiReason ? `AI：${item.aiReason}` : item.reason)}</p>
        ${item.examples?.length ? `<p class="meta-line">代表 query：${item.examples.map(escapeHtml).join(" / ")}</p>` : ""}
        <p class="seed-line">Campaign 词：${item.seeds.length ? item.seeds.map(escapeHtml).join(" / ") : "不建议产出"}</p>
      </div>
      <div class="score-block">
        <div class="score">${item.priority}</div>
        <span class="tag ${getActionClass(item.aiDecision || item.action)}">${item.aiDecision || item.action}</span>
      </div>
    </article>
  `).join("") : `<div class="empty-state">${title}暂无 query。</div>`}
    </section>
  `;
}

function renderCampaignTitles(titles = []) {
  const safeTitles = normalizeCampaignTitles(titles, "").slice(0, 5);
  if (!safeTitles.length) return "";
  return `
    <div class="campaign-title-list">
      ${safeTitles.map((item) => `
        <div>
          <span>${escapeHtml(item.type)}</span>
          <strong>${escapeHtml(item.title)}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function renderScoreDimensions(item) {
  const dimensions = getScoreDimensionsConfig(true).map((dimension) => [
    dimension.label || dimension.key,
    item.dimensionScores?.[dimension.key] ?? item[dimension.key],
  ]);
  return `
    <div class="dimension-list">
      ${dimensions.map(([label, value]) => `
        <span><b>${escapeHtml(label)}</b>${escapeHtml(formatDimensionScore(value))}</span>
      `).join("")}
    </div>
  `;
}

function renderSupportingQueries(queries = [], totalCount = null) {
  const safeQueries = Array.isArray(queries) ? queries.filter(Boolean) : [];
  if (!safeQueries.length) return `<span class="muted-cell">-</span>`;
  const visibleQueries = safeQueries.slice(0, 5);
  const hiddenCount = Math.max(0, safeQueries.length - visibleQueries.length);
  const countLabel = Number(totalCount || 0) > 0
    ? `${totalCount} queries total · ${safeQueries.length} supporting`
    : `${safeQueries.length} supporting`;
  return [
    `<span class="supporting-count">${countLabel}</span>`,
    ...visibleQueries.map((query) => `<span class="supporting-query">${escapeHtml(query)}</span>`),
    hiddenCount ? `<span class="supporting-more">... +${hiddenCount} more</span>` : "",
  ].join("");
}

function aggregateSeeds(rows) {
  const seedMap = new Map();

  rows.forEach((row) => {
    dedupeSimilarSeeds(row.seeds).forEach((seed) => {
      const normalizedSeed = normalize(seed);
      if (!normalizedSeed) return;
      const key = getSeedCanonicalKey(normalizedSeed);
      const current = seedMap.get(key) || {
        seed: normalizedSeed,
        count: 0,
        prioritySum: 0,
        querySet: new Set(),
        examples: [],
      };

      current.seed = chooseBroaderSeed(current.seed, normalizedSeed);
      current.count += 1;
      current.prioritySum += row.priority;
      current.querySet.add(row.query);
      if (current.examples.length < 2 && !current.examples.includes(row.query)) {
        current.examples.push(row.query);
      }
      seedMap.set(key, current);
    });
  });

  return [...seedMap.values()]
    .map((item) => {
      const avgPriority = Math.round(item.prioritySum / item.count);
      return {
        seed: item.seed,
        count: item.querySet.size,
        avgPriority,
        score: Math.round(avgPriority * 0.7 + Math.min(item.querySet.size, 10) * 3),
        examples: item.examples,
        campaignTitles: buildCampaignTitleIdeas(item.seed),
      };
    })
    .sort((a, b) => b.score - a.score || b.count - a.count || b.avgPriority - a.avgPriority);
}

function getTopQueries(rows, limit = 10) {
  const eligibleRows = rows.filter((item) => Number(item.priority || 0) >= 70);
  const sourceRows = eligibleRows.length ? eligibleRows : rows;
  const clusterMap = new Map();

  sourceRows.forEach((item) => {
    const cluster = normalizeBroadCampaignCluster(item.campaignCluster || item.topic || item.query, item);
    const current = clusterMap.get(cluster) || [];
    current.push({ ...item, campaignCluster: cluster });
    clusterMap.set(cluster, current);
  });

  return [...clusterMap.entries()]
    .map(([cluster, group]) => {
      const sorted = [...group].sort(sortByPercentScore);
      const primary = sorted[0];
      const supportingQueries = sorted
        .filter((row) => normalize(row.query).toLowerCase() !== normalize(primary.query).toLowerCase())
        .map((row) => row.query)
        .filter(Boolean);
      const avgPriority = Math.round(sorted.reduce((sum, row) => sum + Number(row.priority || 0), 0) / sorted.length);
      return {
        ...primary,
        query: primary.query,
        campaignCluster: cluster,
        primaryQuery: primary.query,
        supportingQueries,
        clusterQueryCount: sorted.length,
        priority: Number(primary.priority || avgPriority),
        clusterAverageScore: avgPriority,
        geminiSelected: true,
      };
    })
    .sort((a, b) => Number(b.priority || 0) - Number(a.priority || 0) || Number(b.clusterQueryCount || 0) - Number(a.clusterQueryCount || 0))
    .slice(0, limit);
}

function sortByQueryPriority(a, b) {
  if (a.geminiSelected !== b.geminiSelected) return a.geminiSelected ? -1 : 1;
  if (a.geminiRank || b.geminiRank) return Number(a.geminiRank || 999) - Number(b.geminiRank || 999);
  return sortByPercentScore(a, b);
}

function sortByPercentScore(a, b) {
  return Number(b.priority || 0) - Number(a.priority || 0)
    || Number(b.safetyScore || 0) - Number(a.safetyScore || 0)
    || Number(b.productionScore || 0) - Number(a.productionScore || 0)
    || Number(b.gapScore || 0) - Number(a.gapScore || 0)
    || Number(b.demandScore || 0) - Number(a.demandScore || 0)
    || Number(b.heat || 0) - Number(a.heat || 0);
}

function getTopicQuotaKey(item) {
  const topic = normalize(item.topic || getTopic(item).label || item.query).toLowerCase();
  return getSeedCanonicalKey(topic || item.query);
}

function formatOpportunityScore(item) {
  const score = item.finalOpportunityScore ?? item.baseOpportunityScore ?? (Number(item.priority || 0) / 20);
  return roundOne(Math.max(1, Math.min(5, score))).toFixed(1);
}

function formatPercentScore(item) {
  return clamp(Number(item.priority ?? item.finalScore ?? 0), 0, 100);
}

function normalizeDimensionScore(value) {
  const score = Number(value ?? 0);
  if (!Number.isFinite(score) || score <= 0) return 0;
  return clamp(score <= 5 ? score * 20 : score, 0, 100);
}

function formatDimensionScore(value) {
  const score = normalizeDimensionScore(value);
  return score || "-";
}

function normalizeBroadCampaignCluster(label, item = {}) {
  const text = `${normalize(label)} ${normalize(item.query)} ${normalize(item.topic)} ${normalize(item.category)} ${normalize(item.domain)}`.toLowerCase();
  if (/(hotel|resort|villa|motel|hostel|suite|accommodation|stay|airbnb|cabins?|住宿|酒店|民宿|度假村|别墅)/.test(text)) return "酒店住宿";
  if (/(guide|itinerary|route|things to do|destination|travel|trip|map|攻略|路线|行程|目的地|景点|打卡)/.test(text)) return "旅行攻略";
  if (/(food|restaurant|cafe|coffee|brunch|dinner|lunch|dessert|menu|美食|餐厅|咖啡|探店|菜单)/.test(text)) return "美食探店";
  if (/(parking|shuttle|transport|flight|airport|train|bus|direction|交通|停车|接驳|机场|航班|火车|公交)/.test(text)) return "出行交通";
  if (/(experience|tour|ticket|package|pool|theme park|show|event|体验|项目|门票|套餐|乐园|演出|活动)/.test(text)) return "体验项目";
  if (/(shopping|shop|mall|deal|coupon|sale|购物|商场|折扣|优惠)/.test(text)) return "购物生活";
  if (/(beauty|makeup|skincare|fashion|outfit|style|dress|美妆|护肤|穿搭|时尚)/.test(text)) return "美妆穿搭";
  if (/(home|furniture|decor|organization|house|家居|装修|收纳|家具)/.test(text)) return "家居生活";
  if (/(sports|fitness|gym|wellness|health|workout|运动|健身|健康)/.test(text)) return "运动健康";
  if (/(education|study|school|campus|learning|学习|教育|校园|课程)/.test(text)) return "学习教育";
  if (/(pet|hobby|diy|craft|garden|photo|兴趣|宠物|手工|园艺|摄影)/.test(text)) return "兴趣爱好";
  return normalize(label).replace(/\s*campaign$/i, "").trim() || "其他";
}

function mergeBroadCampaignClusters(rows) {
  const groups = new Map();

  rows.forEach((row) => {
    if (!row.campaignCluster) return;
    const cluster = normalizeBroadCampaignCluster(row.campaignCluster, row);
    const group = groups.get(cluster) || [];
    group.push({ ...row, campaignCluster: cluster });
    groups.set(cluster, group);
  });

  const clusterById = new Map();
  groups.forEach((group, cluster) => {
    const sorted = [...group].sort(sortByPercentScore);
    const primary = sorted[0];
    const supportingQueries = sorted
      .filter((row) => row.__rowId !== primary.__rowId)
      .map((row) => row.query)
      .filter(Boolean);

    sorted.forEach((row) => {
      clusterById.set(Number(row.__rowId), {
        campaignCluster: cluster,
        primaryQuery: primary.query,
        supportingQueries,
        geminiSelected: Number(row.__rowId) === Number(primary.__rowId),
        geminiRank: null,
      });
    });
  });

  return rows.map((row) => {
    const merged = clusterById.get(Number(row.__rowId));
    if (!merged) return row;
    return {
      ...row,
      ...merged,
      campaignDirection: row.campaignDirection || getCampaignDirection({ ...row, ...merged }),
    };
  });
}

function getCampaignDirection(item) {
  if (item.campaignDirection) return item.campaignDirection;
  if (item.categoryKey === "stay") return "住宿实拍体验";
  if (item.categoryKey === "experience") return "体验项目实拍";
  if (item.categoryKey === "destination") return "目的地攻略";
  if (item.categoryKey === "transport") return "出行实用指南";
  if (item.categoryKey === "food") return "美食探店推荐";
  if (item.categoryKey === "beauty") return "美妆真实体验";
  if (item.categoryKey === "fashion") return "穿搭灵感征集";
  if (item.categoryKey === "tech") return "工具体验分享";
  if (item.categoryKey === "home") return "家居空间灵感";
  if (item.categoryKey === "health") return "健康生活经验";
  if (item.categoryKey === "sports") return "运动打卡分享";
  if (item.categoryKey === "education") return "学习经验分享";
  if (item.categoryKey === "hobby") return "兴趣入门攻略";
  return item.seeds?.[0] ? `${item.seeds[0]} 活动方向` : "UGC 真实体验分享";
}

function getCampaignClusterLabel(item) {
  return normalize(item.campaignCluster || item.topic || item.primaryQuery || item.query);
}

function getClusterQueryContext(item) {
  const primary = normalize(item.primaryQuery || item.query);
  const supporting = Array.isArray(item.supportingQueries) ? item.supportingQueries.filter(Boolean).slice(0, 3) : [];
  return supporting.length
    ? `Primary: ${primary} · Supporting: ${supporting.join(" / ")}`
    : `Primary: ${primary}`;
}

function getCampaignCopiesForQuery(item) {
  const clusterLabel = getCampaignClusterLabel(item);
  const primary = normalize(item.primaryQuery || item.query);
  const titles = normalizeCampaignTitles(getCampaignTitlesForQuery(item), clusterLabel).slice(0, 3);
  const requirements = [
    `围绕「${clusterLabel}」这个聚类提交真实图片或 15 秒以上视频，可参考 ${primary} 等 query，说明体验和推荐理由。`,
    `用清单形式覆盖该聚类下的共同需求：价格/位置/适合人群/玩法亮点，内容需原创可验证。`,
    `按 ${getCampaignDirection(item)} 方向创作，标题要表达整个聚类主题，避免只复述单个 query。`,
  ];
  const requirementsEn = [
    `Submit original photos or a video over 15 seconds for the "${clusterLabel}" campaign cluster, using ${primary} and related queries as references.`,
    "Share a checklist that covers the cluster's shared needs, such as price, location, audience fit, and content angles. Content must be original and verifiable.",
    `Create around ${getCampaignDirection(item)} and express the full cluster theme in the title. Avoid merely repeating one query.`,
  ];
  return titles.map((title, index) => ({
    ...title,
    titleEn: title.titleEn || title.title,
    titleZh: title.titleZh || "",
    requirement: title.requirementEn || title.requirement || requirementsEn[index],
    requirementEn: title.requirementEn || title.requirement || requirementsEn[index],
    requirementZh: title.requirementZh || requirements[index],
  }));
}

function getCampaignTitlesForQuery(item) {
  if (item.campaignTitles?.length) return item.campaignTitles;
  const seed = getCampaignClusterLabel(item);
  const fromGeminiSeed = state.aiSeedRows.find((seedRow) => {
    const examples = seedRow.examples || [];
    return examples.some((example) => normalize(example).toLowerCase() === normalize(item.query).toLowerCase())
      || item.seeds?.some((seedWord) => getSeedCanonicalKey(seedWord) === getSeedCanonicalKey(seedRow.seed));
  });
  return normalizeCampaignTitles(fromGeminiSeed?.campaignTitles, seed);
}

function countBy(items, key) {
  return items.reduce((counts, item) => {
    counts[item[key]] = (counts[item[key]] || 0) + 1;
    return counts;
  }, {});
}

function getClusterCount(rows) {
  const clusters = new Set();
  rows.forEach((item) => {
    const key = normalize(item.campaignCluster || item.topic || "");
    if (key) clusters.add(key.toLowerCase());
  });
  return clusters.size;
}

function getTopBy(items, key) {
  return [...items].sort((a, b) => Number(b[key] || 0) - Number(a[key] || 0))[0];
}

function getTopByDemand(items) {
  return [...items].sort((a, b) => getDemandValue(b) - getDemandValue(a))[0];
}

function getActionClass(action) {
  if (action === "强推") return "push";
  if (action === "可测") return "test";
  if (action === "剔除") return "drop";
  return "";
}

function getActionFromPriority(priority) {
  if (priority >= 80) return "强推";
  if (priority >= state.threshold) return "可测";
  if (priority >= 40) return "观察";
  return "剔除";
}

function exportCsv() {
  if (!state.results.length) return;
  const headers = ["query", "垂类", "分类", "意图", "商业分", "活动分", "优先级", "推荐", "AI推荐", "Campaign词", "参考Campaign Title", "理由", "AI理由"];
  const lines = [
    headers.join(","),
    ...state.results.map((item) => [
      item.query,
      item.domain,
      item.category,
      item.intent,
      item.commercial,
      item.campaign,
      item.priority,
      item.action,
      item.aiDecision || "",
      item.seeds.join(" | "),
      getCampaignTitlesForQuery(item).map((title) => `${title.type}: ${title.title}`).join(" | "),
      item.reason,
      item.aiReason || "",
    ].map(csvCell).join(",")),
  ];

  const blob = new Blob([lines.join("\n")], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "query-campaign-screening.csv";
  link.click();
  URL.revokeObjectURL(url);
}

function csvCell(value) {
  return `"${String(value).replaceAll("\"", "\"\"")}"`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "\"": "&quot;",
    "'": "&#039;",
  })[char]);
}

els.fileInput.addEventListener("change", async (event) => {
  const file = event.target.files[0];
  if (!file) return;
  const text = await file.text();
  els.manualInput.value = text;
  await runScreening(parseDelimitedText(text));
});

els.runInputButton.addEventListener("click", () => {
  const text = els.manualInput.value.trim();
  if (!text) {
    els.runStatus.textContent = "请先输入 query，支持完整表格或一行一个 query。";
    return;
  }
  runScreening(parseDelimitedText(text));
});

els.connectCrateButton.addEventListener("click", connectCrate);
els.disconnectCrateButton.addEventListener("click", () => {
  clearCrateSession();
  render();
});
els.saveCrateSettingsButton.addEventListener("click", saveCrateSettingsFromForm);

els.thresholdInput.addEventListener("input", (event) => {
  state.threshold = Number(event.target.value);
  els.thresholdValue.textContent = state.threshold;
  rerunCurrentRows();
});
els.resetPromptConfigButton.addEventListener("click", () => {
  resetPromptConfigEditors();
  render();
});
els.exportButton.addEventListener("click", exportCsv);

function bindScoreFilterButtons() {
  document.querySelectorAll(".score-filter").forEach((button) => {
    button.addEventListener("click", () => {
      const nextFilter = button.dataset.scoreFilter || "all";
      state.scoreFilter = state.scoreFilter === nextFilter ? "all" : nextFilter;
      render();
    });
  });
}

function getScoreFilteredRows(rows) {
  return rows.filter((item) => {
    const score = Number(item.priority || 0);
    if (state.scoreFilter === "all") return score >= 70;
    if (state.scoreFilter === "90") return score >= 90;
    if (state.scoreFilter === "80") return score >= 80 && score <= 89;
    return score >= 70 && score <= 79;
  }).sort(sortByPercentScore);
}

function getScoreFilterTitle() {
  if (state.scoreFilter === "all") return "70 分以上 query 明细";
  if (state.scoreFilter === "90") return "90 分以上 query 明细";
  if (state.scoreFilter === "80") return "80～89 分 query 明细";
  return "70～79 分 query 明细";
}

async function initializeApp() {
  initializeCrateSettingsForm();
  initializePromptConfigEditors();
  await hydrateCrateSettingsFromServer();
  renderAuth();
  renderProgress();
}

initializeApp();

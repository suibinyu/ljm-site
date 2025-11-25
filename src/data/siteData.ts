export const productSeries = [
  {
    id: "solar",
    title: "汽车太阳膜",
    tagline: "旗舰隔热科技，阻隔 99% 紫外线",
    features: [
      "纳米陶瓷分层结构，隔热率 92%",
      "AR 级透光，夜间驾驶更安全",
      "10 年官方电子质保 + 防伪编码",
    ],
    specs: [
      { label: "隔热", value: "92%" },
      { label: "透光", value: "78%" },
      { label: "紫外阻隔", value: "99%" },
      { label: "质保", value: "10 年" },
    ],
  },
  {
    id: "ppf",
    title: "漆面保护膜",
    tagline: "六层结构，抗刮自修复",
    features: [
      "TSPU 自修复涂层，划痕秒复原",
      "背胶微晶颗粒，贴服度更高",
      "官方施工流程 + 施工前后存档",
    ],
    specs: [
      { label: "厚度", value: "215 μm" },
      { label: "延展", value: "380%" },
      { label: "抗黄变", value: "ΔYI &lt; 1.0" },
      { label: "质保", value: "8 年" },
    ],
  },
  {
    id: "color",
    title: "改色膜",
    tagline: "电光、镭射、晶钻等 30+ 系列",
    features: [
      "环保水性涂层，轻松换色不过户",
      "支持个性定制花纹与包围",
      "施工案例实时上传与质保绑定",
    ],
    specs: [
      { label: "颜色", value: "30+ 款" },
      { label: "质保", value: "5 年" },
      { label: "施工时间", value: "2-3 天" },
      { label: "认证门店", value: "200+" },
    ],
  },
];

export const caseStudies = [
  {
    id: "porsche-ppf",
    car: "保时捷 911",
    city: "上海",
    product: "漆面保护膜",
    store: "量佳膜·徐汇旗舰店",
    warrantyId: "LJM-911-2024-08",
    cover:
      "https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "tesla-solar",
    car: "特斯拉 Model S",
    city: "深圳",
    product: "太阳膜",
    store: "量佳膜·福田体验中心",
    warrantyId: "LJM-MS-2024-05",
    cover:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "benz-color",
    car: "奔驰 GLE",
    city: "成都",
    product: "改色膜",
    store: "量佳膜·环球中心店",
    warrantyId: "LJM-GLE-2024-06",
    cover:
      "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
  },
];

export const newsList = [
  {
    id: "release-2024",
    title: "量佳膜发布全新旗舰隔热体系 LJM Photon",
    date: "2024-11-08",
    category: "公司新闻",
    summary:
      "Photon 系列以纳米多腔体结构实现 92% 隔热率，并与电子质保系统实现批次追踪。",
  },
  {
    id: "industry-2024",
    title: "隐形车衣行业标准升级，电子质保成标配",
    date: "2024-09-20",
    category: "行业新闻",
    summary:
      "车主更关注安装后服务与质保可查，量佳膜已实现全国门店互认的证书系统。",
  },
  {
    id: "event-2024",
    title: "2024 质保云峰会举办，全国 200 家门店参与",
    date: "2024-07-15",
    category: "公司新闻",
    summary:
      "峰会围绕服务标准、电子质保、AI 巡检展开，明年将增设车主开放日。",
  },
];

export const stores = [
  {
    city: "广州",
    name: "量佳膜·广州总部交付中心",
    code: "LJM-GZ-001",
    address: "广州市龙洞工业园 8 号",
  },
  {
    city: "上海",
    name: "量佳膜·徐汇旗舰店",
    code: "LJM-SH-023",
    address: "上海市徐汇区漕溪北路 388 号",
  },
  {
    city: "成都",
    name: "量佳膜·环球中心店",
    code: "LJM-CD-011",
    address: "成都环球中心 E 区",
  },
];

export const warrantyRecords = [
  {
    warrantyId: "LJM-911-2024-08",
    phone: "13800001111",
    vin: "WP0ZZZ99ZTS392001",
    car: "保时捷 911",
    product: "漆面保护膜 · 钻石盾 Pro",
    store: "量佳膜·徐汇旗舰店",
    validTill: "2032-08-20",
  },
  {
    warrantyId: "LJM-MS-2024-05",
    phone: "13900002222",
    vin: "5YJSA1E18HF000001",
    car: "特斯拉 Model S",
    product: "旗舰太阳膜 Photon 92",
    store: "量佳膜·福田体验中心",
    validTill: "2031-05-10",
  },
];

export const faqs = [
  {
    question: "质保查询需要哪些信息？",
    answer: "可使用手机号、质保编号或车架号任一信息进行查询，系统会发送验证码保障安全。",
  },
  {
    question: "门店施工后多久可以收到电子质保？",
    answer:
      "门店提交资料后实时生成草稿，审核通过即生效并推送短信/微信，一般 30 分钟内完成。",
  },
  {
    question: "改色膜需要备案吗？",
    answer: "质保系统会生成数码档案，门店可协助办理变更备案，扫码即可核验。",
  },
];


## 量佳膜官网（阶段一）

Next.js 16 + App Router + Tailwind v4，包含首页、产品展示、案例中心、新闻资讯、质保查询、门店授权、联系我们等页面，并内置电子质保查询 mock 数据。

### 功能概览
- 响应式导航与页脚、深色科技风视觉。
- 首页涵盖产品系列、案例库、门店网络、FAQ、新闻等模块。
- 独立页面：`/products` `/cases` `/news` `/warranty` `/stores` `/contact`。
- 质保查询页支持手机号/质保编号/VIN 多方式查询（静态数据，可对接真实 API）。

### 本地运行
```bash
npm install
npm run dev
# visit http://localhost:3000
```

### 代码结构
- `src/app`：App Router 页面与布局。
- `src/components`：站点 Header/Footer。
- `src/data/siteData.ts`：产品、案例、新闻、门店、质保 mock 数据。
- `docs/ljm_site_design.md`：详细设计方案、迭代路线。

### 开发脚本
```bash
npm run dev    # 本地开发
npm run build  # 产线打包
npm run start  # 生产环境启动
npm run lint   # ESLint 检查（npx eslint .）
```

### 下一步建议
1. 接入真实 CMS/API，替换 `src/data/siteData.ts` 中的静态数据。
2. 新增门店/代理登录入口与质保录入流程（阶段二目标）。
3. 整合地图 SDK（高德/百度）和客服 / 埋点脚本。
4. 完善 Storybook、单测与 CI/CD，部署到 Vercel 或企业指定平台。

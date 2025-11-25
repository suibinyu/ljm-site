# 部署指南

## 方式一：Vercel 自动部署（推荐）

### 步骤

1. **访问 Vercel**
   - 打开 https://vercel.com
   - 使用 GitHub 账号登录

2. **导入项目**
   - 点击 "Add New Project"
   - 选择 GitHub 仓库 `suibinyu/ljm-site`
   - Vercel 会自动检测 Next.js 项目

3. **配置项目**
   - **Framework Preset**: Next.js（自动识别）
   - **Root Directory**: `./`（默认）
   - **Build Command**: `npm run build`（默认）
   - **Output Directory**: `.next`（默认）
   - **Install Command**: `npm install`（默认）

4. **环境变量**（当前无需配置，后续接入 API 时添加）

5. **部署**
   - 点击 "Deploy"
   - 等待构建完成（约 1-2 分钟）
   - 获得预览 URL：`https://ljm-site-xxx.vercel.app`

6. **自动部署**
   - 每次推送到 `main` 分支会自动触发部署
   - PR 会生成预览环境

7. **自定义域名**（可选）
   - 在项目 Settings → Domains 添加域名
   - 配置 DNS 记录（CNAME 指向 `cname.vercel-dns.com`）
   - Vercel 自动配置 HTTPS

---

## 方式二：Netlify 部署

1. 访问 https://netlify.com，使用 GitHub 登录
2. 点击 "Add new site" → "Import an existing project"
3. 选择仓库 `suibinyu/ljm-site`
4. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `.next`
5. 点击 "Deploy site"

---

## 方式三：GitHub Pages（静态导出，不推荐）

Next.js 需要 SSR，GitHub Pages 只支持静态站点，需要额外配置。

---

## 方式四：自有服务器部署

### 使用 PM2

```bash
# 构建
npm run build

# 安装 PM2
npm install -g pm2

# 启动
pm2 start npm --name "ljm-site" -- start

# 查看状态
pm2 status

# 设置开机自启
pm2 startup
pm2 save
```

### 使用 Docker

创建 `Dockerfile`:

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

构建和运行：

```bash
docker build -t ljm-site .
docker run -p 3000:3000 ljm-site
```

---

## 验证部署

部署成功后访问：
- Vercel: `https://ljm-site-xxx.vercel.app`
- 检查所有页面是否正常加载
- 测试质保查询功能

---

## 后续优化

1. **性能优化**
   - 启用 Vercel Analytics
   - 配置 CDN 缓存策略
   - 图片优化（使用 Next.js Image 组件）

2. **监控**
   - 集成 Sentry 错误追踪
   - 配置 Uptime 监控

3. **CI/CD**
   - 已配置自动部署（推送到 main 即部署）
   - 可添加 GitHub Actions 进行自动化测试


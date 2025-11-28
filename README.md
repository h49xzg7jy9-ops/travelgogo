# JoryKK 应用支持网站

这是 JoryKK 开发的应用的官方支持网站，用于满足 Apple App Store 的要求。

## 网站结构

本网站包含以下应用的支持页面：

- **Travel gogo** - 旅行助手应用
  - 支持页面：`Travel gogo support.html`
  - 隐私政策：`Travel gogo privacy.html`
  - 用户协议：`Travela gogo agreement.html`

- **Guanxi Score** - 关系评估应用
  - 支持页面：`Guanxi support.html`
  - 隐私政策：`Guanxi privacy.html`
  - 用户协议：`Guanxi agreement.html`

- **Plantle** - 植男植女，植物管理应用
  - 支持页面：`Plantle support.html`
  - 隐私政策：`Plantle privacy.html`
  - 用户协议：`Plantle agreement.html`

- **首页**：`index.html` - 应用中心首页

## 文件说明

- `index.html` - 网站首页，展示所有应用
- `CNAME` - GitHub Pages 自定义域名配置
- `README.md` - 本文件

## 部署到 GitHub Pages

### 步骤 1：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名称建议：`jorykk-top` 或 `jorykk-website`
4. 设置为 **Public**（GitHub Pages 免费版需要公开仓库）
5. 点击 "Create repository"

### 步骤 2：上传文件

**方法 A：使用 GitHub Web 界面**

1. 在仓库页面点击 "Add file" → "Upload files"
2. 将所有文件拖拽上传（包括所有 HTML 文件、图片、CNAME 等）
3. 点击 "Commit changes"

**方法 B：使用 Git 命令**

```bash
# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "Initial commit: Add support website"

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/仓库名.git

# 推送到 GitHub
git branch -M main
git push -u origin main
```

### 步骤 3：启用 GitHub Pages

1. 进入仓库页面
2. 点击 "Settings"（设置）
3. 在左侧菜单找到 "Pages"
4. 在 "Source" 部分选择：
   - Source: `Deploy from a branch`
   - Branch: `main`（或 `master`）
   - Folder: `/ (root)`
5. 点击 "Save"
6. 等待几分钟，GitHub 会生成网站地址

### 步骤 4：配置自定义域名

1. **在域名服务商配置 DNS**（阿里云域名控制台）：
   - 添加 CNAME 记录：
     - 主机记录：`@`（根域名）
     - 记录类型：`CNAME`
     - 记录值：`你的用户名.github.io`（例如：`jorykk.github.io`）
     - TTL：600

2. **在 GitHub 仓库中配置**：
   - 在仓库 Settings → Pages 页面
   - 在 "Custom domain" 输入框中输入：`jorykk.top`
   - 勾选 "Enforce HTTPS"（等待 DNS 生效后会自动启用）

3. **在仓库根目录创建 `CNAME` 文件**（已包含）：
   ```
   jorykk.top
   ```

### 步骤 5：验证部署

访问以下地址查看网站：
- GitHub Pages 默认地址：`https://你的用户名.github.io/仓库名/`
- 自定义域名（配置后）：`https://jorykk.top`

## 更新内容

当需要更新网站内容时：

1. 修改相应的 HTML 文件
2. 提交并推送到 GitHub：
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
3. 等待几分钟，GitHub Pages 会自动更新

## Apple App Store 配置

在 App Store Connect 中填写支持 URL：

### Travel gogo
- 进入应用页面
- 找到 "App Information" → "Support URL"
- 填写：`https://jorykk.top/travel%20gogo/support.html`

### Guanxi Score
- 进入应用页面
- 找到 "App Information" → "Support URL"
- 填写：`https://jorykk.top/Guanxi%20support.html`

### Plantle
- 进入应用页面
- 找到 "App Information" → "Support URL"
- 填写：`https://jorykk.top/Plantle%20support.html`

## 注意事项

1. GitHub Pages 免费版只支持静态网站
2. 自定义域名需要等待 DNS 生效（通常 10 分钟到 24 小时）
3. HTTPS 会自动启用，无需额外配置
4. 文件路径中包含空格时，需要使用 URL 编码（如 `travel%20gogo`）
5. 所有链接已更新为正确的相对路径

## 技术支持

如有问题，请联系：jorykk11@icloud.com

## 更新日志

- 2025年11月：初始版本，包含 Travel gogo 和 Guanxi Score 两个应用的支持页面
- 已更新所有超链接路径，确保网站正常运行
- 已配置 CNAME 文件，支持自定义域名 jorykk.top
- 2025年11月21日：新增 Plantle（植男植女）应用的支持页面、隐私政策和用户协议

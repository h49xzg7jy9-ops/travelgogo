# Travel gogo 支持页面

这是 Travel gogo 应用的官方支持页面，用于满足 Apple App Store 的要求。

## 文件说明

- `index.html` - 网站首页，自动跳转到支持页面
- `support.html` - 支持页面主要内容

## 部署到 GitHub Pages

### 步骤 1：创建 GitHub 仓库

1. 登录 [GitHub](https://github.com)
2. 点击右上角 "+" → "New repository"
3. 仓库名称建议：`travelgogo-support` 或 `travelgogo-website`
4. 设置为 **Public**（GitHub Pages 免费版需要公开仓库）
5. 点击 "Create repository"

### 步骤 2：上传文件

**方法 A：使用 GitHub Web 界面**

1. 在仓库页面点击 "Add file" → "Upload files"
2. 将 `index.html` 和 `support.html` 拖拽上传
3. 点击 "Commit changes"

**方法 B：使用 Git 命令**

```bash
# 初始化 Git（如果还没有）
git init

# 添加文件
git add index.html support.html README.md

# 提交
git commit -m "Initial commit: Add support page"

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

### 步骤 4：配置自定义域名（可选）

如果你想使用 `jorykk.top` 或 `support.jorykk.top` 作为域名：

1. **在域名服务商配置 DNS**（阿里云域名控制台）：
   - 添加 CNAME 记录：
     - 主机记录：`support`（如果想要 support.jorykk.top）或 `@`（如果想要 jorykk.top）
     - 记录类型：`CNAME`
     - 记录值：`你的用户名.github.io`（例如：`jorykk.github.io`）
     - TTL：600

2. **在 GitHub 仓库中配置**：
   - 在仓库 Settings → Pages 页面
   - 在 "Custom domain" 输入框中输入：`support.jorykk.top` 或 `jorykk.top`
   - 勾选 "Enforce HTTPS"（等待 DNS 生效后会自动启用）

3. **在仓库根目录创建 `CNAME` 文件**（重要！）：
   ```
   support.jorykk.top
   ```
   或
   ```
   jorykk.top
   ```

### 步骤 5：验证部署

访问以下地址查看网站：
- GitHub Pages 默认地址：`https://你的用户名.github.io/仓库名/`
- 自定义域名（配置后）：`https://support.jorykk.top` 或 `https://jorykk.top`

## 更新内容

当需要更新支持页面内容时：

1. 修改 `support.html` 文件
2. 提交并推送到 GitHub：
   ```bash
   git add support.html
   git commit -m "Update support page"
   git push
   ```
3. 等待几分钟，GitHub Pages 会自动更新

## Apple App Store 配置

在 App Store Connect 中填写支持 URL：
- 进入你的应用页面
- 找到 "App Information" → "Support URL"
- 填写：`https://support.jorykk.top` 或 `https://jorykk.top`

## 注意事项

1. GitHub Pages 免费版只支持静态网站
2. 自定义域名需要等待 DNS 生效（通常 10 分钟到 24 小时）
3. HTTPS 会自动启用，无需额外配置
4. 如果使用根域名（jorykk.top），需要确保不与其他服务冲突

## 技术支持

如有问题，请联系：jorykk11@icloud.com



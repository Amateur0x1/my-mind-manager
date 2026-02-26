# 工具集成指南

my-mind 可以与多种工具集成使用。

---

## OpenClaw + my-mind-manager

推荐使用 OpenClaw 配合 my-mind-manager skill：

### 安装 skill

```bash
cd ~/.openclaw/workspace/skills
git clone https://github.com/Amateur0x1/my-mind-manager.git
```

### 触发 skill

在 OpenClaw 中说：
- `/my-mind-manager`
- "帮我管理 my-mind"

### 功能

| 命令 | 说明 |
|------|------|
| 初始化 my-mind | 创建目录结构 |
| 记录灵感 | 保存灵感到 fleeting |
| 写文章 | 创建文章草稿 |
| 发布小红书 | 自动发布到小红书 |

---

## Obsidian 集成

### 配置

1. 打开 Obsidian
2. 打开 `my-mind` 目录作为保险库
3. 安装需要的插件

### 推荐插件

- **Git**: 版本控制
- **QuickAdd**: 快速添加灵感
- **Templater**: 文章模板
- **Dataview**: 内容索引

---

## Git 配置

### 初始化

```bash
cd ~/my-mind
git init
git add .
git commit -m "feat: 初始化 my-mind"
```

### 远程仓库

```bash
git remote add origin <你的仓库地址>
git push -u origin main
```

### 日常使用

```bash
# 查看状态
./scripts/status.sh

# 提交更改
git add .
git commit -m "feat: 添加新灵感"
git push
```

---

## 进阶技巧

### 定时备份

```bash
# 添加 crontab
crontab -e

# 每天早上 9 点自动提交
0 9 * * * cd ~/my-mind && git add . && git commit -m "chore: 自动备份" && git push
```

### 灵感快速记录

可以设置快捷键或 Alfred/Tray 工具快速调用 `note.sh`

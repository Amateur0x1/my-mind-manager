# 自动化工作流

my-mind 管理自动化工作流。

---

## 每日流程

### 早上：记录灵感

```
# 快速记录
./scripts/note.sh "今天想到..."
```

### 下午：写作

```
# 创建文章
./scripts/article.sh "我的文章"
```

### 晚上：发布

```
# 发布到小红书
# 在 OpenClaw 中说 "发布小红书"
```

---

## 完整工作流

```
1. 灵感记录 → ideas/fleeting/
2. 整理灵感 → ideas/structured/
3. 写作文章 → articles/drafts/
4. 完善文章 → 编辑内容
5. 发布文章 → articles/published/
6. 自动发布 → 小红书
7. 知识沉淀 → references/
```

---

## 脚本清单

| 脚本 | 功能 |
|------|------|
| `init.sh` | 初始化目录结构 |
| `quickstart.sh` | 一键初始化 |
| `note.sh` | 记录灵感 |
| `article.sh` | 创建文章 |
| `status.sh` | 查看状态 |
| `publish-xhs.sh` | 发布小红书 |

---

## 状态检查

定期检查状态：

```bash
./scripts/status.sh
```

输出包括：
- 各目录文件数量
- 最新文件
- Git 状态
- 建议操作

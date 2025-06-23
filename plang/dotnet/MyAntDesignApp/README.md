# MyAntDesignApp

这是一个基于 Blazor WebAssembly 和 ASP.NET Core Hosted 模式的项目模板，集成了 Ant Design Blazor UI 库，并提供了完整的 Docker 化部署方案。

## 技术栈

- **前端**: Blazor WebAssembly (.NET 9)
- **后端**: ASP.NET Core Web API (.NET 9)
- **UI**: Ant Design Blazor
- **部署**: Docker & Docker Compose

## 本地开发指南

本项目支持两种核心的本地开发模式。

### 1. 本地开发与调试 (推荐日常使用)

此模式用于日常的功能开发、代码编写和 Bug 修复，拥有最佳的开发体验和调试支持。

**操作:**

- 在 Visual Studio Code 中，直接按 `F5` 键启动调试。

**工作原理:**

- 利用 `.vscode/launch.json` 配置，直接在本机环境通过 .NET SDK 启动项目。
- 支持**热重载 (Hot Reload)**，修改代码后可立即看到效果。
- 支持对前端 (C# in Wasm) 和后端 (C#) 代码进行完整的断点调试。
- 这是最高效的开发模式。

### 2. 本地 Docker 容器测试

此模式用于在部署前，模拟生产环境，验证应用的 Docker 配置 (`Dockerfile`, `docker-compose.yml`) 是否正确。

**操作:**

在项目根目录下，打开终端并运行以下命令：

```bash
docker-compose up -d --build
```

**命令解释:**
- `up`: 启动服务。
- `-d`: 在后台（分离模式）运行。
- `--build`: 强制重新构建 Docker 镜像，以确保使用的是最新的代码。

**工作原理:**

- 完整模拟生产部署流程，将应用打包成一个独立的 Docker 镜像并运行。
- 启动后，可以通过 `http://localhost:5000` 访问应用。
- 这是部署到服务器前的**最终彩排**。

## 部署流程

请参考 `docker-compose.yml` 和 `Dockerfile` 文件，结合标准的 CI/CD 流程进行部署。主要步骤包括：

1. 构建并标记 Docker 镜像 (`docker tag`)。
2. 推送镜像到镜像仓库 (`docker push`)。
3. 在服务器上使用 Docker Compose 或其他容器编排工具拉取并运行新版镜像。
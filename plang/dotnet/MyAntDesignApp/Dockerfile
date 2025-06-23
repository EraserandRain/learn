# 使用官方的 .NET 9.0 运行时镜像
FROM mcr.microsoft.com/dotnet/aspnet:9.0 AS base
WORKDIR /app
EXPOSE 8080

# 使用 SDK 镜像构建应用
FROM mcr.microsoft.com/dotnet/sdk:9.0 AS build
WORKDIR /src
COPY ["src/MyAntDesignApp/MyAntDesignApp.csproj", "MyAntDesignApp/"]
COPY ["src/MyAntDesignApp.Client/MyAntDesignApp.Client.csproj", "MyAntDesignApp.Client/"]
RUN dotnet restore "MyAntDesignApp/MyAntDesignApp.csproj"
COPY src/ .
WORKDIR "/src/MyAntDesignApp"
RUN dotnet build "MyAntDesignApp.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "MyAntDesignApp.csproj" -c Release -o /app/publish /p:UseAppHost=false

# 最终运行镜像
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyAntDesignApp.dll"] 
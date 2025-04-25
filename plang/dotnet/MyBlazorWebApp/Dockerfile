FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["MyBlazorWebApp.csproj", "./"]
RUN dotnet restore "MyBlazorWebApp.csproj"
COPY . .
RUN dotnet publish "MyBlazorWebApp.csproj" -c Release -o /app/publish

FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS final
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 8088
EXPOSE 8089

ENV ASPNETCORE_URLS=http://+:8088
ENV ASPNETCORE_HTTP_PORTS=8088
ENTRYPOINT ["dotnet", "MyBlazorWebApp.dll"] 
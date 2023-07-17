FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build

WORKDIR /src
COPY ["src/Test-CICD.Web.Host/Test-CICD.Web.Host.csproj", "src/Test-CICD.Web.Host/"]
COPY ["src/Test-CICD.Web.Core/Test-CICD.Web.Core.csproj", "src/Test-CICD.Web.Core/"]
COPY ["src/Test-CICD.Application/Test-CICD.Application.csproj", "src/Test-CICD.Application/"]
COPY ["src/Test-CICD.Core/Test-CICD.Core.csproj", "src/Test-CICD.Core/"]
COPY ["src/Test-CICD.EntityFrameworkCore/Test-CICD.EntityFrameworkCore.csproj", "src/Test-CICD.EntityFrameworkCore/"]
WORKDIR "/src/src/Test-CICD.Web.Host"
RUN dotnet restore 

WORKDIR /src
COPY ["src/Test-CICD.Web.Host", "src/Test-CICD.Web.Host"]
COPY ["src/Test-CICD.Web.Core", "src/Test-CICD.Web.Core"]
COPY ["src/Test-CICD.Application", "src/Test-CICD.Application"]
COPY ["src/Test-CICD.Core", "src/Test-CICD.Core"]
COPY ["src/Test-CICD.EntityFrameworkCore", "src/Test-CICD.EntityFrameworkCore"]
WORKDIR "/src/src/Test-CICD.Web.Host"
RUN dotnet publish -c Release -o /publish --no-restore

FROM mcr.microsoft.com/dotnet/aspnet:7.0
EXPOSE 80
WORKDIR /app
COPY --from=build /publish .
ENTRYPOINT ["dotnet", "Test-CICD.Web.Host.dll"]

using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;
using Test-CICD.Configuration;
using Test-CICD.Web;

namespace Test-CICD.EntityFrameworkCore
{
    /* This class is needed to run "dotnet ef ..." commands from command line on development. Not used anywhere else */
    public class Test-CICDDbContextFactory : IDesignTimeDbContextFactory<Test-CICDDbContext>
    {
        public Test-CICDDbContext CreateDbContext(string[] args)
        {
            var builder = new DbContextOptionsBuilder<Test-CICDDbContext>();
            
            /*
             You can provide an environmentName parameter to the AppConfigurations.Get method. 
             In this case, AppConfigurations will try to read appsettings.{environmentName}.json.
             Use Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT") method or from string[] args to get environment if necessary.
             https://docs.microsoft.com/en-us/ef/core/cli/dbcontext-creation?tabs=dotnet-core-cli#args
             */
            var configuration = AppConfigurations.Get(WebContentDirectoryFinder.CalculateContentRootFolder());

            Test-CICDDbContextConfigurer.Configure(builder, configuration.GetConnectionString(Test-CICDConsts.ConnectionStringName));

            return new Test-CICDDbContext(builder.Options);
        }
    }
}

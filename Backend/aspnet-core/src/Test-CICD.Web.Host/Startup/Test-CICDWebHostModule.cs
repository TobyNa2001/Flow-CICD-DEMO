using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Test-CICD.Configuration;

namespace Test-CICD.Web.Host.Startup
{
    [DependsOn(
       typeof(Test-CICDWebCoreModule))]
    public class Test-CICDWebHostModule: AbpModule
    {
        private readonly IWebHostEnvironment _env;
        private readonly IConfigurationRoot _appConfiguration;

        public Test-CICDWebHostModule(IWebHostEnvironment env)
        {
            _env = env;
            _appConfiguration = env.GetAppConfiguration();
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Test-CICDWebHostModule).GetAssembly());
        }
    }
}

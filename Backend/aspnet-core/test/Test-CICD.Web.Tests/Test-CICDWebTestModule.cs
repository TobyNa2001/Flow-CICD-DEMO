using Abp.AspNetCore;
using Abp.AspNetCore.TestBase;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Test-CICD.EntityFrameworkCore;
using Test-CICD.Web.Startup;
using Microsoft.AspNetCore.Mvc.ApplicationParts;

namespace Test-CICD.Web.Tests
{
    [DependsOn(
        typeof(Test-CICDWebMvcModule),
        typeof(AbpAspNetCoreTestBaseModule)
    )]
    public class Test-CICDWebTestModule : AbpModule
    {
        public Test-CICDWebTestModule(Test-CICDEntityFrameworkModule abpProjectNameEntityFrameworkModule)
        {
            abpProjectNameEntityFrameworkModule.SkipDbContextRegistration = true;
        } 
        
        public override void PreInitialize()
        {
            Configuration.UnitOfWork.IsTransactional = false; //EF Core InMemory DB does not support transactions.
        }

        public override void Initialize()
        {
            IocManager.RegisterAssemblyByConvention(typeof(Test-CICDWebTestModule).GetAssembly());
        }
        
        public override void PostInitialize()
        {
            IocManager.Resolve<ApplicationPartManager>()
                .AddApplicationPartsIfNotAddedBefore(typeof(Test-CICDWebMvcModule).Assembly);
        }
    }
}
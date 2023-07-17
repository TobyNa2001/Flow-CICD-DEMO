using Abp.AutoMapper;
using Abp.Modules;
using Abp.Reflection.Extensions;
using Test-CICD.Authorization;

namespace Test-CICD
{
    [DependsOn(
        typeof(Test-CICDCoreModule), 
        typeof(AbpAutoMapperModule))]
    public class Test-CICDApplicationModule : AbpModule
    {
        public override void PreInitialize()
        {
            Configuration.Authorization.Providers.Add<Test-CICDAuthorizationProvider>();
        }

        public override void Initialize()
        {
            var thisAssembly = typeof(Test-CICDApplicationModule).GetAssembly();

            IocManager.RegisterAssemblyByConvention(thisAssembly);

            Configuration.Modules.AbpAutoMapper().Configurators.Add(
                // Scan the assembly for classes which inherit from AutoMapper.Profile
                cfg => cfg.AddMaps(thisAssembly)
            );
        }
    }
}

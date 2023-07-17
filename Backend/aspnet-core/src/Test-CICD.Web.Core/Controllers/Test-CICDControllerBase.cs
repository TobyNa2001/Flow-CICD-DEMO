using Abp.AspNetCore.Mvc.Controllers;
using Abp.IdentityFramework;
using Microsoft.AspNetCore.Identity;

namespace Test-CICD.Controllers
{
    public abstract class Test-CICDControllerBase: AbpController
    {
        protected Test-CICDControllerBase()
        {
            LocalizationSourceName = Test-CICDConsts.LocalizationSourceName;
        }

        protected void CheckErrors(IdentityResult identityResult)
        {
            identityResult.CheckErrors(LocalizationManager);
        }
    }
}

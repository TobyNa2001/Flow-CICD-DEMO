using System.Threading.Tasks;
using Abp.Authorization;
using Abp.Runtime.Session;
using Test-CICD.Configuration.Dto;

namespace Test-CICD.Configuration
{
    [AbpAuthorize]
    public class ConfigurationAppService : Test-CICDAppServiceBase, IConfigurationAppService
    {
        public async Task ChangeUiTheme(ChangeUiThemeInput input)
        {
            await SettingManager.ChangeSettingForUserAsync(AbpSession.ToUserIdentifier(), AppSettingNames.UiTheme, input.Theme);
        }
    }
}

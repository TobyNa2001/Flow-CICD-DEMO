using System.Collections.Generic;
using Abp.Configuration;
using Abp.Net.Mail;

namespace CompanyWebsite.Configuration
{
    public class AppSettingProvider : SettingProvider
    {
        public override IEnumerable<SettingDefinition> GetSettingDefinitions(SettingDefinitionProviderContext context)
        {
            return new[]
            {
                new SettingDefinition(AppSettingNames.UiTheme, "red", scopes: SettingScopes.Application | SettingScopes.Tenant | SettingScopes.User, clientVisibilityProvider: new VisibleSettingClientVisibilityProvider())
,               new SettingDefinition("CareerRecipientEmailAddresses", "HR@8dge.com.my", scopes: SettingScopes.Application | SettingScopes.Tenant | SettingScopes.User, clientVisibilityProvider: new VisibleSettingClientVisibilityProvider())
,               new SettingDefinition("ContactUsRecipientEmailAddresses", "info@8dge.com.my", scopes: SettingScopes.Application | SettingScopes.Tenant | SettingScopes.User, clientVisibilityProvider: new VisibleSettingClientVisibilityProvider())

            };
        }
    }
}
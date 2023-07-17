using System.Threading.Tasks;
using Test-CICD.Configuration.Dto;

namespace Test-CICD.Configuration
{
    public interface IConfigurationAppService
    {
        Task ChangeUiTheme(ChangeUiThemeInput input);
    }
}

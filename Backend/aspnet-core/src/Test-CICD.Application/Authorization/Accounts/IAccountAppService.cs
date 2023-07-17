using System.Threading.Tasks;
using Abp.Application.Services;
using Test-CICD.Authorization.Accounts.Dto;

namespace Test-CICD.Authorization.Accounts
{
    public interface IAccountAppService : IApplicationService
    {
        Task<IsTenantAvailableOutput> IsTenantAvailable(IsTenantAvailableInput input);

        Task<RegisterOutput> Register(RegisterInput input);
    }
}

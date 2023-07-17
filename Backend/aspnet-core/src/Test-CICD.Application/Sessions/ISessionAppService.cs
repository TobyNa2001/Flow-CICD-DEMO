using System.Threading.Tasks;
using Abp.Application.Services;
using Test-CICD.Sessions.Dto;

namespace Test-CICD.Sessions
{
    public interface ISessionAppService : IApplicationService
    {
        Task<GetCurrentLoginInformationsOutput> GetCurrentLoginInformations();
    }
}

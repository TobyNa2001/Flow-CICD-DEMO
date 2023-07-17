using Abp.Application.Services;
using Test-CICD.MultiTenancy.Dto;

namespace Test-CICD.MultiTenancy
{
    public interface ITenantAppService : IAsyncCrudAppService<TenantDto, int, PagedTenantResultRequestDto, CreateTenantDto, TenantDto>
    {
    }
}


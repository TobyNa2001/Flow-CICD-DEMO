using Abp.Application.Services.Dto;
using Abp.AutoMapper;
using Test-CICD.MultiTenancy;

namespace Test-CICD.Sessions.Dto
{
    [AutoMapFrom(typeof(Tenant))]
    public class TenantLoginInfoDto : EntityDto
    {
        public string TenancyName { get; set; }

        public string Name { get; set; }
    }
}

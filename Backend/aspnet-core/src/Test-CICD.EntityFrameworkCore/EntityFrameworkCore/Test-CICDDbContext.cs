using Microsoft.EntityFrameworkCore;
using Abp.Zero.EntityFrameworkCore;
using Test-CICD.Authorization.Roles;
using Test-CICD.Authorization.Users;
using Test-CICD.MultiTenancy;

namespace Test-CICD.EntityFrameworkCore
{
    public class Test-CICDDbContext : AbpZeroDbContext<Tenant, Role, User, Test-CICDDbContext>
    {
        /* Define a DbSet for each entity of the application */
        
        public Test-CICDDbContext(DbContextOptions<Test-CICDDbContext> options)
            : base(options)
        {
        }
    }
}

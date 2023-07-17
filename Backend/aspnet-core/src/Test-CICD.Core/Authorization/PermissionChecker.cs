using Abp.Authorization;
using Test-CICD.Authorization.Roles;
using Test-CICD.Authorization.Users;

namespace Test-CICD.Authorization
{
    public class PermissionChecker : PermissionChecker<Role, User>
    {
        public PermissionChecker(UserManager userManager)
            : base(userManager)
        {
        }
    }
}

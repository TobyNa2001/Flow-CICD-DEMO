using System.Threading.Tasks;
using Test-CICD.Models.TokenAuth;
using Test-CICD.Web.Controllers;
using Shouldly;
using Xunit;

namespace Test-CICD.Web.Tests.Controllers
{
    public class HomeController_Tests: Test-CICDWebTestBase
    {
        [Fact]
        public async Task Index_Test()
        {
            await AuthenticateAsync(null, new AuthenticateModel
            {
                UserNameOrEmailAddress = "admin",
                Password = "123qwe"
            });

            //Act
            var response = await GetResponseAsStringAsync(
                GetUrl<HomeController>(nameof(HomeController.Index))
            );

            //Assert
            response.ShouldNotBeNullOrEmpty();
        }
    }
}
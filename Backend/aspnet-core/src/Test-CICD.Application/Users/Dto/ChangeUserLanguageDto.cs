using System.ComponentModel.DataAnnotations;

namespace Test-CICD.Users.Dto
{
    public class ChangeUserLanguageDto
    {
        [Required]
        public string LanguageName { get; set; }
    }
}
using Test-CICD.Debugging;

namespace Test-CICD
{
    public class Test-CICDConsts
    {
        public const string LocalizationSourceName = "Test-CICD";

        public const string ConnectionStringName = "Default";

        public const bool MultiTenancyEnabled = true;


        /// <summary>
        /// Default pass phrase for SimpleStringCipher decrypt/encrypt operations
        /// </summary>
        public static readonly string DefaultPassPhrase =
            DebugHelper.IsDebug ? "gsKxGZ012HLL3MI5" : "7db9e2ede41840dc8bb668adc13ffe20";
    }
}

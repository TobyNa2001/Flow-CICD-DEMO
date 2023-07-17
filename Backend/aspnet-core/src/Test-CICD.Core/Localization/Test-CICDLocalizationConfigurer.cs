using Abp.Configuration.Startup;
using Abp.Localization.Dictionaries;
using Abp.Localization.Dictionaries.Xml;
using Abp.Reflection.Extensions;

namespace Test-CICD.Localization
{
    public static class Test-CICDLocalizationConfigurer
    {
        public static void Configure(ILocalizationConfiguration localizationConfiguration)
        {
            localizationConfiguration.Sources.Add(
                new DictionaryBasedLocalizationSource(Test-CICDConsts.LocalizationSourceName,
                    new XmlEmbeddedFileLocalizationDictionaryProvider(
                        typeof(Test-CICDLocalizationConfigurer).GetAssembly(),
                        "Test-CICD.Localization.SourceFiles"
                    )
                )
            );
        }
    }
}

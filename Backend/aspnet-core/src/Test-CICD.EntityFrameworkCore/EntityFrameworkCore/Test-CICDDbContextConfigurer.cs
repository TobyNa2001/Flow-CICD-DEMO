using System.Data.Common;
using Microsoft.EntityFrameworkCore;

namespace Test-CICD.EntityFrameworkCore
{
    public static class Test-CICDDbContextConfigurer
    {
        public static void Configure(DbContextOptionsBuilder<Test-CICDDbContext> builder, string connectionString)
        {
            builder.UseSqlServer(connectionString);
        }

        public static void Configure(DbContextOptionsBuilder<Test-CICDDbContext> builder, DbConnection connection)
        {
            builder.UseSqlServer(connection);
        }
    }
}

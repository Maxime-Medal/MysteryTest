using Microsoft.EntityFrameworkCore;
using MysteryTest.Models;
using MysteryTest_Back.Data;
using Newtonsoft.Json;

namespace MysteryTest.Models
{
    public class SeedSalarie
    {
        public static void Initialize(IServiceProvider serviceProvider)
        {
            using (var context = new MysteryTestContext(
               serviceProvider.GetRequiredService<
                   DbContextOptions<MysteryTestContext>>()))
            {
                if (context.Salarie.Any())
                {
                    return;
                }

                List<Salarie> salarieList = GetSalarie();

                foreach (var salarie in salarieList)
                {
                    context.Add(salarie);
                }
                context.SaveChanges();
            }
        }

        // TODO Pour faire un seeding à partir d'une liste en dur

        private static List<Salarie> GetSalarie()
        {

            var salarieist = new List<Salarie>
            {
                new Salarie
                {
                    Nom = "Laurence",
                    Prenom = "Mailly",
                    DateDeNaissance = new DateTime(1967, 11, 22),
                    Email = "LaurenceMailly@rhyta.com"
                }
            };
            return salarieist;
        }
    }
}

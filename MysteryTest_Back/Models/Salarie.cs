namespace MysteryTest.Models
{
    public class Salarie
    {
        public int Id { get; set; }
        public string Nom { get; set; } = string.Empty;
        public string Prenom { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public DateTime DateDeNaissance { get; set; }

        public int? ClientId { get; set; }
        public Client? Client { get; set; }
    }
}

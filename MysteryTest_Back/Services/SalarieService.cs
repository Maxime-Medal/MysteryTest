using MysteryTest_Back.Services.Interface;

namespace MysteryTest_Back.Services
{
    public class SalarieService : ISalarieService
    {
        public bool IsAgeIsValid(DateTime dateOfBirth , int maxValue)
        {
            //date = date.Replace("/", "");
            //DateTime dateOfBirth = DateTime.ParseExact(date.ToString(), "ddMMyyyy", System.Globalization.CultureInfo.InvariantCulture);
            DateTime dateNow = DateTime.Now;
            int age = dateNow.Year - dateOfBirth.Year;

            if (dateNow < dateOfBirth.AddYears(age)) // Vérifie si l'anniversaire de cette année est déjà passé
            {
                age--;
            }

            return age <= maxValue;
        }

    }
}

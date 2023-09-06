namespace MysteryTest_Back.Services.Interface
{
    public interface ISalarieService
    {
        bool IsAgeIsValid(DateTime dateOfBirth, int maxValue);
    }
}

export class GenderConstants {

    static readonly MALE = 'm';
    static readonly FEMALE = 'f';
    public static genders: any[] = [
        { typeValue: GenderConstants.MALE, caption: 'Male' },
        { typeValue: GenderConstants.FEMALE, caption: 'Female' },
    ];

    public static getGenders(): any[] {
        return this.genders;
    }
}

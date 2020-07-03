export class GenderConstants {

    private static genders: any[] = [
        { typeValue: 'm', caption: 'Male' },
        { typeValue: 'f', caption: 'Female' },
    ];

    public static getGenders(): any[] {
        return this.genders;
    }
}

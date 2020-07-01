export class GenderConstants {

    public static genders: any[] = [
        { typeValue: 'm', caption: 'Male' },
        { typevalue: 'f', caption: 'Female' },
    ];

    public static getGenders(): any[] {
        return this.genders;
    }
}

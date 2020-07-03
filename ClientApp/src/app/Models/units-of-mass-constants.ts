export class UnitOfMassConstants {
    private static unitsOfMass: any[] = [
        {typeValue: 'lbs', caption: 'Pounds'},
        {typeValue: 'kg', caption: 'Kilograms'}
    ];

    public static getUnitsOfMass(): any[] {
        return this.unitsOfMass;
    }
}

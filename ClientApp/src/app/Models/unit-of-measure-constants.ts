export class UnitOfMeasureConstants {
    private static unitsOfMeasure: any[] = [
        {typeValue: 'i', caption: 'Imperial'},
        {typeValue: 'm', caption: 'Metric'}
    ];

    public static getUnitsOfMeasure(): any[] {
        return this.unitsOfMeasure;
    }
}

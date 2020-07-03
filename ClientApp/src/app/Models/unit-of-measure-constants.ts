export class UnitOfMeasureConstants {
    public static readonly IMPERIAL = 'i';
    public static readonly METRIC = 'm';

    private static unitsOfMeasure: any[] = [
        {typeValue: UnitOfMeasureConstants.IMPERIAL, caption: 'Imperial'},
        {typeValue: UnitOfMeasureConstants.METRIC, caption: 'Metric'}
    ];

    public static getUnitsOfMeasure(): any[] {
        return this.unitsOfMeasure;
    }
}

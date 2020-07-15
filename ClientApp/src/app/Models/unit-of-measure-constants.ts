export class UnitOfMeasureConstants {
    public static readonly IMPERIAL = 'i';
    public static readonly METRIC = 'm';
    public static KG_TO_LBS = 2.20;
    public static CM_TO_H = 0.03;

    private static unitsOfMeasure: any[] = [
        { typeValue: UnitOfMeasureConstants.IMPERIAL, caption: 'Imperial' },
        { typeValue: UnitOfMeasureConstants.METRIC, caption: 'Metric' }
    ];

    public static getUnitsOfMeasure(): any[] {
        return this.unitsOfMeasure;
    }
}

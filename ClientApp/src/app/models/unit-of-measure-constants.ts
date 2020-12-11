export class UnitOfMeasureConstants {
    public static readonly IMPERIAL = 'i';
    public static readonly METRIC = 'm';
    public static KG_TO_LBS = 2.20462;
    public static CM_TO_F = 0.0328084;

    private static unitsOfMeasure: any[] = [
        { typeValue: UnitOfMeasureConstants.IMPERIAL, caption: 'Imperial' },
        { typeValue: UnitOfMeasureConstants.METRIC, caption: 'Metric' }
    ];

    public static getUnitsOfMeasure(): any[] {
        return this.unitsOfMeasure;
    }

    public static getWeightText(uom: string): string {
        if (uom === '') {
            return 'Weight';
        }
        const unit = uom !== null && uom === UnitOfMeasureConstants.IMPERIAL
        ? '(lbs)' : '(kg)';
      return `Weight ${unit}`;
    }

    public static getHeightText(uom: string): string {
        if (uom === '') {
            return 'Height';
        }
        const unit = uom === UnitOfMeasureConstants.IMPERIAL ? '(ft/in)' : '(cm)';
        return `Height ${unit}`;
    }
}

export class MeasureConstants {
    public static measure: any[] = [
        {typeValue: 'lbs', caption: 'Pounds'},
        {typeValue: 'kg', caption: 'Kilograms'}
    ];

    public static getMeasure(): any[] {
        return this.measure;
    }
}

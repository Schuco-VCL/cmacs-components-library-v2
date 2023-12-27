import * as i0 from "@angular/core";
export declare class ExcelService {
    private _exportCompleted;
    exportCompleted: import("rxjs").Observable<any>;
    constructor();
    static toExportFileName(excelFileName: string): string;
    exportAsExcelFile(json: any[], excelFileName: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ExcelService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ExcelService>;
}
//# sourceMappingURL=excel.service.d.ts.map
import { DateHelperService } from 'ng-zorro-antd/i18n';
import { AbstractPanelHeader } from './abstract-panel-header';
import { PanelSelector } from './interface';
import * as i0 from "@angular/core";
export declare class MonthHeaderComponent extends AbstractPanelHeader {
    private dateHelper;
    constructor(dateHelper: DateHelperService);
    getSelectors(): PanelSelector[];
    static ɵfac: i0.ɵɵFactoryDef<MonthHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MonthHeaderComponent, "month-header", ["monthHeader"], {}, {}, never, never>;
}
//# sourceMappingURL=month-header.component.d.ts.map
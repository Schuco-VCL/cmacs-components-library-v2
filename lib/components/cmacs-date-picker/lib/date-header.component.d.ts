import { DateHelperService } from 'ng-zorro-antd/i18n';
import { AbstractPanelHeader } from './abstract-panel-header';
import { PanelSelector } from './interface';
import * as i0 from "@angular/core";
export declare class DateHeaderComponent extends AbstractPanelHeader {
    private dateHelper;
    constructor(dateHelper: DateHelperService);
    getSelectors(): PanelSelector[];
    static ɵfac: i0.ɵɵFactoryDef<DateHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DateHeaderComponent, "date-header", ["dateHeader"], {}, {}, never, never>;
}
//# sourceMappingURL=date-header.component.d.ts.map
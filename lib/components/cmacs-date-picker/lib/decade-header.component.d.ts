import { AbstractPanelHeader } from './abstract-panel-header';
import { PanelSelector } from './interface';
import * as i0 from "@angular/core";
export declare class DecadeHeaderComponent extends AbstractPanelHeader {
    previous(): void;
    next(): void;
    get startYear(): number;
    get endYear(): number;
    superPrevious(): void;
    superNext(): void;
    getSelectors(): PanelSelector[];
    static ɵfac: i0.ɵɵFactoryDef<DecadeHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DecadeHeaderComponent, "decade-header", ["decadeHeader"], {}, {}, never, never>;
}
//# sourceMappingURL=decade-header.component.d.ts.map
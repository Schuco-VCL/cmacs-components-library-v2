/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { OnChanges } from '@angular/core';
import { AbstractTable } from './abstract-table';
import { DateBodyRow, DateCell, DecadeCell } from './interface';
import * as i0 from "@angular/core";
export declare class DecadeTableComponent extends AbstractTable implements OnChanges {
    get startYear(): number;
    get endYear(): number;
    makeHeadRow(): DateCell[];
    makeBodyRows(): DateBodyRow[];
    getClassMap(cell: DecadeCell): {
        [key: string]: boolean;
    };
    private chooseDecade;
    static ɵfac: i0.ɵɵFactoryDef<DecadeTableComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<DecadeTableComponent, "decade-table", ["decadeTable"], {}, {}, never, never>;
}
//# sourceMappingURL=decade-table.component.d.ts.map
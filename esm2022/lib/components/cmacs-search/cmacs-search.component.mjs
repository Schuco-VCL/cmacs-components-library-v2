import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { isNotNil } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "../cmacs-select/cmacs-select.component";
import * as i4 from "../cmacs-select/cmacs-option.component";
function CmacsSearchComponent_cmacs_option_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 2);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", item_r1.value);
    i0.ɵɵpropertyInterpolate("label", item_r1.label);
    i0.ɵɵpropertyInterpolate("divider", item_r1.divider);
    i0.ɵɵproperty("disabled", item_r1.disabled !== undefined ? item_r1.disabled : false);
} }
export class CmacsSearchComponent {
    onSelectedChange() {
        this.selectedChange.emit(this.selected);
    }
    writeValue(value) {
        this.selected = value;
        let listValue = []; // tslint:disable-line:no-any
        if (isNotNil(value)) {
            if (Array.isArray(value)) {
                listValue = value;
            }
            else {
                listValue = [value];
            }
        }
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    constructor() {
        this.disabled = false;
        this.allowClear = false;
        this.maxTagCountAuto = false;
        this.showSearch = false;
        this.cmacsOpen = false;
        this.tagsOut = false;
        this.size = 'default';
        this.placeholder = 'placeholder';
        this.selected = [];
        this.selectedChange = new EventEmitter();
        this.mode = 'default';
        this.onChange = () => null;
        this.onTouched = () => null;
    }
    trackByFn(index, item) {
        return item.value;
    }
    ngOnInit() {
    }
    static { this.ɵfac = function CmacsSearchComponent_Factory(t) { return new (t || CmacsSearchComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsSearchComponent, selectors: [["cmacs-search"]], inputs: { options: "options", disabled: "disabled", maxTagCount: "maxTagCount", allowClear: "allowClear", maxTagCountAuto: "maxTagCountAuto", showSearch: "showSearch", cmacsOpen: "cmacsOpen", tagsOut: "tagsOut", size: "size", placeholder: "placeholder", selected: "selected", mode: "mode" }, outputs: { selectedChange: "selectedChange" }, features: [i0.ɵɵProvidersFeature([
                {
                    provide: NG_VALUE_ACCESSOR,
                    useExisting: forwardRef(() => CmacsSearchComponent),
                    multi: true
                }
            ])], decls: 2, vars: 15, consts: [["showCustomSearch", "", 1, "cmacs-search", 2, "width", "100%", 3, "ngModel", "disabled", "allowClear", "placeHolder", "size", "mode", "showCmacsSearch", "showSearch", "maxTagCount", "maxTagCountAuto", "tagsOut", "open", "cmacsOpen", "ngModelChange"], [3, "disabled", "value", "label", "divider", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "disabled", "value", "label", "divider"]], template: function CmacsSearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "cmacs-select", 0);
            i0.ɵɵlistener("ngModelChange", function CmacsSearchComponent_Template_cmacs_select_ngModelChange_0_listener($event) { return ctx.selected = $event; })("ngModelChange", function CmacsSearchComponent_Template_cmacs_select_ngModelChange_0_listener() { return ctx.onSelectedChange(); });
            i0.ɵɵtemplate(1, CmacsSearchComponent_cmacs_option_1_Template, 1, 4, "cmacs-option", 1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵpropertyInterpolate("placeHolder", ctx.placeholder);
            i0.ɵɵpropertyInterpolate("mode", ctx.mode);
            i0.ɵɵproperty("ngModel", ctx.selected)("disabled", ctx.disabled)("allowClear", ctx.allowClear)("size", ctx.size)("showCmacsSearch", true)("showSearch", true)("maxTagCount", ctx.maxTagCount)("maxTagCountAuto", ctx.maxTagCountAuto)("tagsOut", ctx.tagsOut)("open", ctx.cmacsOpen)("cmacsOpen", ctx.cmacsOpen);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngForOf", ctx.options)("ngForTrackBy", ctx.trackByFn);
        } }, dependencies: [i1.NgForOf, i2.NgControlStatus, i2.NgModel, i3.CmacsSelectComponent, i4.CmacsOptionComponent], styles: ["[_nghost-%COMP%]     .cmacs-search .ant-select-selection__placeholder{margin-left:21px}[_nghost-%COMP%]     .cmacs-search .ant-select-arrow{color:#00000040!important}[_nghost-%COMP%]     .cmacs-search .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:26px}[_nghost-%COMP%]     .cmacs-search .anticon-search{margin-left:8px}[_nghost-%COMP%]     .cmacs-search .ant-select-selection-selected-value{padding-left:10px}[_nghost-%COMP%]     .cmacs-search .ant-select-arrow{top:14px}  .cmacs-search .ant-select-search--inline .ant-select-search__field{max-width:77%;margin-left:21px!important}  .cmacs-search .cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{margin-left:26px!important;padding-right:36px;min-width:38px;max-width:94%}  .cmacs-search .cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field.cmacs-select-selection-not-empty{margin-left:0!important}"] }); }
}
__decorate([
    InputBoolean()
], CmacsSearchComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsSearchComponent.prototype, "allowClear", void 0);
__decorate([
    InputBoolean()
], CmacsSearchComponent.prototype, "maxTagCountAuto", void 0);
__decorate([
    InputBoolean()
], CmacsSearchComponent.prototype, "showSearch", void 0);
__decorate([
    InputBoolean()
], CmacsSearchComponent.prototype, "cmacsOpen", void 0);
__decorate([
    InputBoolean()
], CmacsSearchComponent.prototype, "tagsOut", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSearchComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-search', providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsSearchComponent),
                        multi: true
                    }
                ], template: "<cmacs-select class=\"cmacs-search\" style=\"width: 100%\"\r\n              [(ngModel)]=\"selected\"\r\n              (ngModelChange)=\"onSelectedChange()\"\r\n              [disabled]=disabled\r\n              [allowClear]=allowClear\r\n              placeHolder={{placeholder}}\r\n              [size]=size mode={{mode}}\r\n              [showCmacsSearch]=\"true\"\r\n              [showSearch]=\"true\"\r\n              showCustomSearch\r\n              [maxTagCount]=\"maxTagCount\"\r\n              [maxTagCountAuto]=\"maxTagCountAuto\"\r\n              [tagsOut]=\"tagsOut\"\r\n              [open]=\"cmacsOpen\"\r\n              [cmacsOpen]=\"cmacsOpen\"\r\n>\r\n    <cmacs-option [disabled]=\"item.disabled !== undefined ? item.disabled : false\" *ngFor=\"let item of options; index as i; trackBy: trackByFn\" value=\"{{item.value}}\"\r\n        label=\"{{item.label}}\" divider=\"{{item.divider}}\"></cmacs-option>\r\n</cmacs-select>\r\n", styles: [":host ::ng-deep .cmacs-search .ant-select-selection__placeholder{margin-left:21px}:host ::ng-deep .cmacs-search .ant-select-arrow{color:#00000040!important}:host ::ng-deep .cmacs-search .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:26px}:host ::ng-deep .cmacs-search .anticon-search{margin-left:8px}:host ::ng-deep .cmacs-search .ant-select-selection-selected-value{padding-left:10px}:host ::ng-deep .cmacs-search .ant-select-arrow{top:14px}::ng-deep .cmacs-search .ant-select-search--inline .ant-select-search__field{max-width:77%;margin-left:21px!important}::ng-deep .cmacs-search .cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{margin-left:26px!important;padding-right:36px;min-width:38px;max-width:94%}::ng-deep .cmacs-search .cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field.cmacs-select-selection-not-empty{margin-left:0!important}\n"] }]
    }], function () { return []; }, { options: [{
            type: Input
        }], disabled: [{
            type: Input
        }], maxTagCount: [{
            type: Input
        }], allowClear: [{
            type: Input
        }], maxTagCountAuto: [{
            type: Input
        }], showSearch: [{
            type: Input
        }], cmacsOpen: [{
            type: Input
        }], tagsOut: [{
            type: Input
        }], size: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], selected: [{
            type: Input
        }], selectedChange: [{
            type: Output
        }], mode: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWFyY2gvY21hY3Mtc2VhcmNoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWFyY2gvY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztJQ0svQyxrQ0FDcUU7OztJQUR1RSxnREFBc0I7SUFDOUosZ0RBQXNCO0lBQUMsb0RBQTBCO0lBRHZDLG9GQUFnRTs7QURVbEYsTUFBTSxPQUFPLG9CQUFvQjtJQW1CL0IsZ0JBQWdCO1FBQ2QsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFHRCxVQUFVLENBQUMsS0FBa0I7UUFDM0IsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxTQUFTLEdBQVUsRUFBRSxDQUFDLENBQUMsNkJBQTZCO1FBQ3hELElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ25CLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDeEIsU0FBUyxHQUFHLEtBQUssQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtTQUNGO0lBQ0gsQ0FBQztJQUVELGdCQUFnQixDQUFDLEVBQXNDO1FBQ3JELElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxFQUFjO1FBQzlCLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFHRDtRQTFDeUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUVqQixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLG9CQUFlLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLFNBQUksR0FBa0IsU0FBUyxDQUFDO1FBQ2hDLGdCQUFXLEdBQUcsYUFBYSxDQUFDO1FBQzVCLGFBQVEsR0FBUSxFQUFFLENBQUM7UUFDbEIsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUM3RCxTQUFJLEdBQW9DLFNBQVMsQ0FBQztRQUUzRCxhQUFRLEdBQXVDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQztRQUMxRCxjQUFTLEdBQWUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO0lBNEJuQixDQUFDO0lBRWpCLFNBQVMsQ0FBQyxLQUFLLEVBQUUsSUFBUztRQUN4QixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVELFFBQVE7SUFDUixDQUFDO3FGQXBEVSxvQkFBb0I7b0VBQXBCLG9CQUFvQixxWkFUcEI7Z0JBQ1Q7b0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjtvQkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztvQkFDbkQsS0FBSyxFQUFFLElBQUk7aUJBQ1o7YUFDRjtZQ3ZCSCx1Q0FlQztZQWRhLHNKQUFzQiwwR0FDTCxzQkFBa0IsSUFEYjtZQWVoQyx1RkFDcUU7WUFDekUsaUJBQWU7O1lBYkQsd0RBQTJCO1lBQ2YsMENBQWE7WUFMekIsc0NBQXNCLDBCQUFBLDhCQUFBLGtCQUFBLHlCQUFBLG9CQUFBLGdDQUFBLHdDQUFBLHdCQUFBLHVCQUFBLDRCQUFBO1lBZWdFLGVBQVk7WUFBWixxQ0FBWSwrQkFBQTs7O0FEYXJGO0lBQWYsWUFBWSxFQUFFO3NEQUFrQjtBQUVqQjtJQUFmLFlBQVksRUFBRTt3REFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7NkRBQXlCO0FBQ3hCO0lBQWYsWUFBWSxFQUFFO3dEQUFvQjtBQUNuQjtJQUFmLFlBQVksRUFBRTt1REFBbUI7QUFDbEI7SUFBZixZQUFZLEVBQUU7cURBQWlCO3VGQVQ5QixvQkFBb0I7Y0FiaEMsU0FBUzsyQkFFRSxjQUFjLGFBRWI7b0JBQ1Q7d0JBQ0UsT0FBTyxFQUFFLGlCQUFpQjt3QkFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUscUJBQXFCLENBQUM7d0JBQ25ELEtBQUssRUFBRSxJQUFJO3FCQUNaO2lCQUNGO3NDQUtRLE9BQU87a0JBQWYsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ0ksV0FBVztrQkFBcEIsS0FBSztZQUNtQixVQUFVO2tCQUFsQyxLQUFLO1lBQ21CLGVBQWU7a0JBQXZDLEtBQUs7WUFDbUIsVUFBVTtrQkFBbEMsS0FBSztZQUNtQixTQUFTO2tCQUFqQyxLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUNJLGNBQWM7a0JBQXZCLE1BQU07WUFDRSxJQUFJO2tCQUFaLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgT3V0cHV0LFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBmb3J3YXJkUmVmXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBOR19WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5pbXBvcnQgeyBOelNpemVMRFNUeXBlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBjb21wb25lbnQtc2VsZWN0b3JcclxuICBzZWxlY3RvcjogJ2NtYWNzLXNlYXJjaCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1NlYXJjaENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1zZWFyY2guY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBvcHRpb25zOiBhbnlbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSAgbWF4VGFnQ291bnQ6IG51bWJlcjtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgYWxsb3dDbGVhciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBtYXhUYWdDb3VudEF1dG8gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2hvd1NlYXJjaCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjbWFjc09wZW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdGFnc091dCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNpemU6IE56U2l6ZUxEU1R5cGUgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAncGxhY2Vob2xkZXInO1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkOiBhbnkgPSBbXTtcclxuICBAT3V0cHV0KCkgc2VsZWN0ZWRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgbW9kZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJyA9ICdkZWZhdWx0JztcclxuXHJcbiAgb25DaGFuZ2U6ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG4gIG9uVG91Y2hlZDogKCkgPT4gdm9pZCA9ICgpID0+IG51bGw7XHJcblxyXG4gIG9uU2VsZWN0ZWRDaGFuZ2UoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkQ2hhbmdlLmVtaXQodGhpcy5zZWxlY3RlZCk7XHJcbiAgfVxyXG5cclxuXHJcbiAgd3JpdGVWYWx1ZSh2YWx1ZTogYW55IHwgYW55W10pOiB2b2lkIHtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIGxldCBsaXN0VmFsdWU6IGFueVtdID0gW107IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICBpZiAoaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xyXG4gICAgICAgIGxpc3RWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpc3RWYWx1ZSA9IFt2YWx1ZV07XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46ICh2YWx1ZTogc3RyaW5nIHwgc3RyaW5nW10pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgIHRoaXMub25DaGFuZ2UgPSBmbjtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIHRyYWNrQnlGbihpbmRleCwgaXRlbTogYW55KSB7XHJcbiAgICByZXR1cm4gaXRlbS52YWx1ZTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGNtYWNzLXNlbGVjdCBjbGFzcz1cImNtYWNzLXNlYXJjaFwiIHN0eWxlPVwid2lkdGg6IDEwMCVcIlxyXG4gICAgICAgICAgICAgIFsobmdNb2RlbCldPVwic2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgIChuZ01vZGVsQ2hhbmdlKT1cIm9uU2VsZWN0ZWRDaGFuZ2UoKVwiXHJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1kaXNhYmxlZFxyXG4gICAgICAgICAgICAgIFthbGxvd0NsZWFyXT1hbGxvd0NsZWFyXHJcbiAgICAgICAgICAgICAgcGxhY2VIb2xkZXI9e3twbGFjZWhvbGRlcn19XHJcbiAgICAgICAgICAgICAgW3NpemVdPXNpemUgbW9kZT17e21vZGV9fVxyXG4gICAgICAgICAgICAgIFtzaG93Q21hY3NTZWFyY2hdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTZWFyY2hdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgc2hvd0N1c3RvbVNlYXJjaFxyXG4gICAgICAgICAgICAgIFttYXhUYWdDb3VudF09XCJtYXhUYWdDb3VudFwiXHJcbiAgICAgICAgICAgICAgW21heFRhZ0NvdW50QXV0b109XCJtYXhUYWdDb3VudEF1dG9cIlxyXG4gICAgICAgICAgICAgIFt0YWdzT3V0XT1cInRhZ3NPdXRcIlxyXG4gICAgICAgICAgICAgIFtvcGVuXT1cImNtYWNzT3BlblwiXHJcbiAgICAgICAgICAgICAgW2NtYWNzT3Blbl09XCJjbWFjc09wZW5cIlxyXG4+XHJcbiAgICA8Y21hY3Mtb3B0aW9uIFtkaXNhYmxlZF09XCJpdGVtLmRpc2FibGVkICE9PSB1bmRlZmluZWQgPyBpdGVtLmRpc2FibGVkIDogZmFsc2VcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBvcHRpb25zOyBpbmRleCBhcyBpOyB0cmFja0J5OiB0cmFja0J5Rm5cIiB2YWx1ZT1cInt7aXRlbS52YWx1ZX19XCJcclxuICAgICAgICBsYWJlbD1cInt7aXRlbS5sYWJlbH19XCIgZGl2aWRlcj1cInt7aXRlbS5kaXZpZGVyfX1cIj48L2NtYWNzLW9wdGlvbj5cclxuPC9jbWFjcy1zZWxlY3Q+XHJcbiJdfQ==
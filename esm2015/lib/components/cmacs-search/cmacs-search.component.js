import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { isNotNil } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "../cmacs-select/cmacs-select.component";
import * as i2 from "@angular/forms";
import * as i3 from "@angular/common";
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
    trackByFn(index, item) {
        return item.value;
    }
    ngOnInit() {
    }
}
CmacsSearchComponent.ɵfac = function CmacsSearchComponent_Factory(t) { return new (t || CmacsSearchComponent)(); };
CmacsSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSearchComponent, selectors: [["cmacs-search"]], inputs: { options: "options", disabled: "disabled", maxTagCount: "maxTagCount", allowClear: "allowClear", maxTagCountAuto: "maxTagCountAuto", showSearch: "showSearch", cmacsOpen: "cmacsOpen", tagsOut: "tagsOut", size: "size", placeholder: "placeholder", selected: "selected", mode: "mode" }, outputs: { selectedChange: "selectedChange" }, features: [i0.ɵɵProvidersFeature([
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
    } }, directives: [i1.CmacsSelectComponent, i2.NgControlStatus, i2.NgModel, i3.NgForOf, i4.CmacsOptionComponent], styles: ["[_nghost-%COMP%]     .cmacs-search .ant-select-selection__placeholder{margin-left:21px}[_nghost-%COMP%]     .cmacs-search .ant-select-arrow{color:rgba(0,0,0,.25)!important}[_nghost-%COMP%]     .cmacs-search .ant-select-selection--multiple .ant-select-selection__placeholder{margin-left:26px}[_nghost-%COMP%]     .cmacs-search .anticon-search{margin-left:8px}[_nghost-%COMP%]     .cmacs-search .ant-select-selection-selected-value{padding-left:10px}[_nghost-%COMP%]     .cmacs-search .ant-select-arrow{top:14px}  .cmacs-search .ant-select-search--inline .ant-select-search__field{max-width:77%;margin-left:21px!important}  .cmacs-search .cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field{margin-left:26px!important;padding-right:36px;min-width:38px;max-width:94%}  .cmacs-search .cmacs-select-selection--multiple .ant-select-search--inline .ant-select-search__field.cmacs-select-selection-not-empty{margin-left:0!important}"] });
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
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'cmacs-search',
                templateUrl: './cmacs-search.component.html',
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsSearchComponent),
                        multi: true
                    }
                ],
                styleUrls: ['./cmacs-search.component.css']
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWFyY2gvY21hY3Mtc2VhcmNoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWFyY2gvY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztJQ0svQyxrQ0FDcUU7OztJQUR1RSxnREFBc0I7SUFDOUosZ0RBQXNCO0lBQUMsb0RBQTBCO0lBRHZDLG9GQUFnRTs7QURVbEYsTUFBTSxPQUFPLG9CQUFvQjtJQTZDL0I7UUExQ3lCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUN4QixlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ25CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFDbEIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQyxTQUFJLEdBQWtCLFNBQVMsQ0FBQztRQUNoQyxnQkFBVyxHQUFHLGFBQWEsQ0FBQztRQUM1QixhQUFRLEdBQVEsRUFBRSxDQUFDO1FBQ2xCLG1CQUFjLEdBQXNCLElBQUks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bnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgT25Jbml0LFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgZm9yd2FyZFJlZlxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpTaXplTERTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IGlzTm90TmlsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zZWFyY2gnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1zZWFyY2guY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAge1xyXG4gICAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcclxuICAgICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ21hY3NTZWFyY2hDb21wb25lbnQpLFxyXG4gICAgICBtdWx0aTogdHJ1ZVxyXG4gICAgfVxyXG4gIF0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NTZWFyY2hDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgb3B0aW9uczogYW55W107XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGRpc2FibGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgIG1heFRhZ0NvdW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFsbG93Q2xlYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbWF4VGFnQ291bnRBdXRvID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRhZ3NPdXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ3BsYWNlaG9sZGVyJztcclxuICBASW5wdXQoKSBzZWxlY3RlZDogYW55ID0gW107XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIG1vZGU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncycgPSAnZGVmYXVsdCc7XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuICBvblNlbGVjdGVkQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSB8IGFueVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XHJcbiAgICBsZXQgbGlzdFZhbHVlOiBhbnlbXSA9IFtdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBsaXN0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0VmFsdWUgPSBbdmFsdWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICB0cmFja0J5Rm4oaW5kZXgsIGl0ZW06IGFueSkge1xyXG4gICAgcmV0dXJuIGl0ZW0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsIjxjbWFjcy1zZWxlY3QgY2xhc3M9XCJjbWFjcy1zZWFyY2hcIiBzdHlsZT1cIndpZHRoOiAxMDAlXCJcclxuICAgICAgICAgICAgICBbKG5nTW9kZWwpXT1cInNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvblNlbGVjdGVkQ2hhbmdlKClcIlxyXG4gICAgICAgICAgICAgIFtkaXNhYmxlZF09ZGlzYWJsZWRcclxuICAgICAgICAgICAgICBbYWxsb3dDbGVhcl09YWxsb3dDbGVhclxyXG4gICAgICAgICAgICAgIHBsYWNlSG9sZGVyPXt7cGxhY2Vob2xkZXJ9fVxyXG4gICAgICAgICAgICAgIFtzaXplXT1zaXplIG1vZGU9e3ttb2RlfX1cclxuICAgICAgICAgICAgICBbc2hvd0NtYWNzU2VhcmNoXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgIFtzaG93U2VhcmNoXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgIHNob3dDdXN0b21TZWFyY2hcclxuICAgICAgICAgICAgICBbbWF4VGFnQ291bnRdPVwibWF4VGFnQ291bnRcIlxyXG4gICAgICAgICAgICAgIFttYXhUYWdDb3VudEF1dG9dPVwibWF4VGFnQ291bnRBdXRvXCJcclxuICAgICAgICAgICAgICBbdGFnc091dF09XCJ0YWdzT3V0XCJcclxuICAgICAgICAgICAgICBbb3Blbl09XCJjbWFjc09wZW5cIlxyXG4gICAgICAgICAgICAgIFtjbWFjc09wZW5dPVwiY21hY3NPcGVuXCJcclxuPlxyXG4gICAgPGNtYWNzLW9wdGlvbiBbZGlzYWJsZWRdPVwiaXRlbS5kaXNhYmxlZCAhPT0gdW5kZWZpbmVkID8gaXRlbS5kaXNhYmxlZCA6IGZhbHNlXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygb3B0aW9uczsgaW5kZXggYXMgaTsgdHJhY2tCeTogdHJhY2tCeUZuXCIgdmFsdWU9XCJ7e2l0ZW0udmFsdWV9fVwiXHJcbiAgICAgICAgbGFiZWw9XCJ7e2l0ZW0ubGFiZWx9fVwiIGRpdmlkZXI9XCJ7e2l0ZW0uZGl2aWRlcn19XCI+PC9jbWFjcy1vcHRpb24+XHJcbjwvY21hY3Mtc2VsZWN0PlxyXG4iXX0=
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
CmacsSearchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSearchComponent, selectors: [["cmacs-search"]], inputs: { options: "options", disabled: "disabled", maxTagCount: "maxTagCount", allowClear: "allowClear", showSearch: "showSearch", cmacsOpen: "cmacsOpen", tagsOut: "tagsOut", size: "size", placeholder: "placeholder", selected: "selected", mode: "mode" }, outputs: { selectedChange: "selectedChange" }, features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsSearchComponent),
                multi: true
            }
        ])], decls: 2, vars: 14, consts: [["showCustomSearch", "", 1, "cmacs-search", 2, "width", "100%", 3, "ngModel", "disabled", "allowClear", "placeHolder", "size", "mode", "showCmacsSearch", "showSearch", "maxTagCount", "tagsOut", "open", "cmacsOpen", "ngModelChange"], [3, "disabled", "value", "label", "divider", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "disabled", "value", "label", "divider"]], template: function CmacsSearchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cmacs-select", 0);
        i0.ɵɵlistener("ngModelChange", function CmacsSearchComponent_Template_cmacs_select_ngModelChange_0_listener($event) { return ctx.selected = $event; })("ngModelChange", function CmacsSearchComponent_Template_cmacs_select_ngModelChange_0_listener() { return ctx.onSelectedChange(); });
        i0.ɵɵtemplate(1, CmacsSearchComponent_cmacs_option_1_Template, 1, 4, "cmacs-option", 1);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵpropertyInterpolate("placeHolder", ctx.placeholder);
        i0.ɵɵpropertyInterpolate("mode", ctx.mode);
        i0.ɵɵproperty("ngModel", ctx.selected)("disabled", ctx.disabled)("allowClear", ctx.allowClear)("size", ctx.size)("showCmacsSearch", true)("showSearch", true)("maxTagCount", ctx.maxTagCount)("tagsOut", ctx.tagsOut)("open", ctx.cmacsOpen)("cmacsOpen", ctx.cmacsOpen);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWFyY2gvY21hY3Mtc2VhcmNoLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zZWFyY2gvY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUVULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLFVBQVUsRUFDWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXZELE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7OztJQ1AvQyxrQ0FDcUU7OztJQUR1RSxnREFBc0I7SUFDOUosZ0RBQXNCO0lBQUMsb0RBQTBCO0lBRHZDLG9GQUFnRTs7QURzQmxGLE1BQU0sT0FBTyxvQkFBb0I7SUE0Qy9CO1FBekN5QixhQUFRLEdBQUcsS0FBSyxDQUFDO1FBRWpCLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDbkIsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixjQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ2xCLFlBQU8sR0FBRyxLQUFLLENBQUM7UUFDaEMsU0FBSSxHQUFrQixTQUFTLENBQUM7UUFDaEMsZ0JBQVcsR0FBRyxhQUFhLENBQUM7UUFDNUIsYUFBUSxHQUFRLEVBQUUsQ0FBQztRQUNsQixtQkFBYyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzdELFNBQUksR0FBb0MsU0FBUyxDQUFDO1FBRTNELGFBQVEsR0FBdUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDO1FBQzFELGNBQVMsR0FBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUE0Qm5CLENBQUM7SUExQmpCLGdCQUFnQjtRQUNkLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBR0QsVUFBVSxDQUFDLEtBQWtCO1FBQzNCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksU0FBUyxHQUFVLEVBQUUsQ0FBQyxDQUFDLDZCQUE2QjtRQUN4RCxJQUFJLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNuQixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3hCLFNBQVMsR0FBRyxLQUFLLENBQUM7YUFDbkI7aUJBQU07Z0JBQ0wsU0FBUyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxFQUFzQztRQUNyRCxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsaUJBQWlCLENBQUMsRUFBYztRQUM5QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBS0QsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFTO1FBQ3hCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDO0lBRUQsUUFBUTtJQUNSLENBQUM7O3dGQW5EVSxvQkFBb0I7eURBQXBCLG9CQUFvQixpWEFUcEI7WUFDVDtnQkFDRSxPQUFPLEVBQUUsaUJBQWlCO2dCQUMxQixXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFvQixDQUFDO2dCQUNuRCxLQUFLLEVBQUUsSUFBSTthQUNaO1NBQ0Y7UUN2QkgsdUNBR0M7UUFIc0Qsc0pBQXNCLDBHQUFrQixzQkFBa0IsSUFBcEM7UUFJekUsdUZBQ3FFO1FBQ3pFLGlCQUFlOztRQUxYLHdEQUEyQjtRQUFhLDBDQUFhO1FBREYsc0NBQXNCLDBCQUFBLDhCQUFBLGtCQUFBLHlCQUFBLG9CQUFBLGdDQUFBLHdCQUFBLHVCQUFBLDRCQUFBO1FBSXVCLGVBQVk7UUFBWixxQ0FBWSwrQkFBQTs7QUR5QnJGO0lBQWYsWUFBWSxFQUFFO3NEQUFrQjtBQUVqQjtJQUFmLFlBQVksRUFBRTt3REFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7d0RBQW9CO0FBQ25CO0lBQWYsWUFBWSxFQUFFO3VEQUFtQjtBQUNsQjtJQUFmLFlBQVksRUFBRTtxREFBaUI7dUZBUjlCLG9CQUFvQjtjQWJoQyxTQUFTO2VBQUM7Z0JBQ1gsK0NBQStDO2dCQUM3QyxRQUFRLEVBQUUsY0FBYztnQkFDeEIsV0FBVyxFQUFFLCtCQUErQjtnQkFDNUMsU0FBUyxFQUFFO29CQUNUO3dCQUNFLE9BQU8sRUFBRSxpQkFBaUI7d0JBQzFCLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLHFCQUFxQixDQUFDO3dCQUNuRCxLQUFLLEVBQUUsSUFBSTtxQkFDWjtpQkFDRjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1QztzQ0FHVSxPQUFPO2tCQUFmLEtBQUs7WUFDbUIsUUFBUTtrQkFBaEMsS0FBSztZQUNJLFdBQVc7a0JBQXBCLEtBQUs7WUFDbUIsVUFBVTtrQkFBbEMsS0FBSztZQUNtQixVQUFVO2tCQUFsQyxLQUFLO1lBQ21CLFNBQVM7a0JBQWpDLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0ksY0FBYztrQkFBdkIsTUFBTTtZQUNFLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LFxyXG4gIE9uSW5pdCxcclxuICBJbnB1dCxcclxuICBPdXRwdXQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIGZvcndhcmRSZWZcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56U2l6ZUxEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnY21hY3Mtc2VhcmNoJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtc2VhcmNoLmNvbXBvbmVudC5odG1sJyxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHtcclxuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXHJcbiAgICAgIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IENtYWNzU2VhcmNoQ29tcG9uZW50KSxcclxuICAgICAgbXVsdGk6IHRydWVcclxuICAgIH1cclxuICBdLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXNlYXJjaC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU2VhcmNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIG9wdGlvbnM6IGFueVtdO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpICBtYXhUYWdDb3VudDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBhbGxvd0NsZWFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNob3dTZWFyY2ggPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY21hY3NPcGVuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHRhZ3NPdXQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBzaXplOiBOelNpemVMRFNUeXBlID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ3BsYWNlaG9sZGVyJztcclxuICBASW5wdXQoKSBzZWxlY3RlZDogYW55ID0gW107XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIG1vZGU6ICdkZWZhdWx0JyB8ICdtdWx0aXBsZScgfCAndGFncycgPSAnZGVmYXVsdCc7XHJcblxyXG4gIG9uQ2hhbmdlOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkID0gKCkgPT4gbnVsbDtcclxuICBvblRvdWNoZWQ6ICgpID0+IHZvaWQgPSAoKSA9PiBudWxsO1xyXG5cclxuICBvblNlbGVjdGVkQ2hhbmdlKCkge1xyXG4gICAgdGhpcy5zZWxlY3RlZENoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWQpO1xyXG4gIH1cclxuXHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGFueSB8IGFueVtdKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gdmFsdWU7XHJcbiAgICBsZXQgbGlzdFZhbHVlOiBhbnlbXSA9IFtdOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gICAgaWYgKGlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcclxuICAgICAgICBsaXN0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBsaXN0VmFsdWUgPSBbdmFsdWVdO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICB0cmFja0J5Rm4oaW5kZXgsIGl0ZW06IGFueSkge1xyXG4gICAgcmV0dXJuIGl0ZW0udmFsdWU7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG59XHJcbiIsIjxjbWFjcy1zZWxlY3QgY2xhc3M9XCJjbWFjcy1zZWFyY2hcIiBzdHlsZT1cIndpZHRoOiAxMDAlXCIgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uU2VsZWN0ZWRDaGFuZ2UoKVwiIFtkaXNhYmxlZF09ZGlzYWJsZWQgW2FsbG93Q2xlYXJdPWFsbG93Q2xlYXJcclxuICAgIHBsYWNlSG9sZGVyPXt7cGxhY2Vob2xkZXJ9fSBbc2l6ZV09c2l6ZSBtb2RlPXt7bW9kZX19IFtzaG93Q21hY3NTZWFyY2hdPVwidHJ1ZVwiIFtzaG93U2VhcmNoXT1cInRydWVcIiBzaG93Q3VzdG9tU2VhcmNoXHJcbiAgICBbbWF4VGFnQ291bnRdPVwibWF4VGFnQ291bnRcIiBbdGFnc091dF09XCJ0YWdzT3V0XCIgW29wZW5dPVwiY21hY3NPcGVuXCIgW2NtYWNzT3Blbl09XCJjbWFjc09wZW5cIlxyXG4+XHJcbiAgICA8Y21hY3Mtb3B0aW9uIFtkaXNhYmxlZF09XCJpdGVtLmRpc2FibGVkICE9PSB1bmRlZmluZWQgPyBpdGVtLmRpc2FibGVkIDogZmFsc2VcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBvcHRpb25zOyBpbmRleCBhcyBpOyB0cmFja0J5OiB0cmFja0J5Rm5cIiB2YWx1ZT1cInt7aXRlbS52YWx1ZX19XCJcclxuICAgICAgICBsYWJlbD1cInt7aXRlbS5sYWJlbH19XCIgZGl2aWRlcj1cInt7aXRlbS5kaXZpZGVyfX1cIj48L2NtYWNzLW9wdGlvbj5cclxuPC9jbWFjcy1zZWxlY3Q+XHJcbiJdfQ==
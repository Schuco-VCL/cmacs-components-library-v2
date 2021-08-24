import { __decorate } from "tslib";
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy, Component, forwardRef, Input, Optional, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/cdk/a11y";
import * as i3 from "@angular/cdk/bidi";
import * as i4 from "ng-zorro-antd/core/wave";
import * as i5 from "@angular/common";
import * as i6 from "ng-zorro-antd/core/transition-patch";
import * as i7 from "ng-zorro-antd/icon";
import * as i8 from "ng-zorro-antd/core/outlet";
const _c0 = ["switchElement"];
function CmacsSwitchComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 8);
} }
function CmacsSwitchComponent_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r5.checkedChildren);
} }
function CmacsSwitchComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsSwitchComponent_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r2.checkedChildren);
} }
function CmacsSwitchComponent_ng_template_6_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r6.unCheckedChildren);
} }
function CmacsSwitchComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsSwitchComponent_ng_template_6_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r4.unCheckedChildren);
} }
const NZ_CONFIG_MODULE_NAME = 'switch';
export class CmacsSwitchComponent {
    constructor(nzConfigService, cdr, focusMonitor, directionality) {
        this.nzConfigService = nzConfigService;
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.directionality = directionality;
        this._nzModuleName = NZ_CONFIG_MODULE_NAME;
        this.isChecked = false;
        this.onChange = () => { };
        this.onTouched = () => { };
        this.loading = false;
        this.disabled = false;
        this.control = false;
        this.checkedChildren = null;
        this.unCheckedChildren = null;
        this.size = 'default';
        this.dir = 'ltr';
        this.destroy$ = new Subject();
    }
    onHostClick(e) {
        e.preventDefault();
        if (!this.disabled && !this.loading && !this.control) {
            this.updateValue(!this.isChecked);
        }
    }
    updateValue(value) {
        if (this.isChecked !== value) {
            this.isChecked = value;
            this.onChange(this.isChecked);
        }
    }
    onKeyDown(e) {
        if (!this.control && !this.disabled && !this.loading) {
            if (e.keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) {
                this.updateValue(!this.isChecked);
                e.preventDefault();
            }
        }
    }
    focus() {
        var _a;
        this.focusMonitor.focusVia((_a = this.switchElement) === null || _a === void 0 ? void 0 : _a.nativeElement, 'keyboard');
    }
    blur() {
        var _a;
        (_a = this.switchElement) === null || _a === void 0 ? void 0 : _a.nativeElement.blur();
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngAfterViewInit() {
        this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe(focusOrigin => {
            if (!focusOrigin) {
                /** https://github.com/angular/angular/issues/17793 **/
                Promise.resolve().then(() => this.onTouched());
            }
        });
    }
    ngOnDestroy() {
        this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
        this.destroy$.next();
        this.destroy$.complete();
    }
    writeValue(value) {
        this.isChecked = value;
        this.cdr.markForCheck();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(disabled) {
        this.disabled = disabled;
        this.cdr.markForCheck();
    }
}
CmacsSwitchComponent.ɵfac = function CmacsSwitchComponent_Factory(t) { return new (t || CmacsSwitchComponent)(i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.FocusMonitor), i0.ɵɵdirectiveInject(i3.Directionality, 8)); };
CmacsSwitchComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsSwitchComponent, selectors: [["cmacs-switch"]], viewQuery: function CmacsSwitchComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 3);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.switchElement = _t.first);
    } }, hostBindings: function CmacsSwitchComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsSwitchComponent_click_HostBindingHandler($event) { return ctx.onHostClick($event); });
    } }, inputs: { loading: "loading", disabled: "disabled", control: "control", checkedChildren: "checkedChildren", unCheckedChildren: "unCheckedChildren", size: "size" }, exportAs: ["cmacsSwitch"], features: [i0.ɵɵProvidersFeature([
            {
                provide: NG_VALUE_ACCESSOR,
                useExisting: forwardRef(() => CmacsSwitchComponent),
                multi: true
            }
        ])], decls: 9, vars: 15, consts: [["nz-wave", "", "type", "button", "role", "button", "aria-label", "switch", 1, "ant-switch", 3, "disabled", "nzWaveExtraNode", "keydown"], ["switchElement", ""], [1, "ant-switch-handle"], ["nz-icon", "", "nzType", "loading", "class", "ant-switch-loading-icon", 4, "ngIf"], [1, "ant-switch-inner"], [4, "ngIf", "ngIfElse"], ["uncheckTemplate", ""], [1, "ant-click-animating-node"], ["nz-icon", "", "nzType", "loading", 1, "ant-switch-loading-icon"], [4, "nzStringTemplateOutlet"]], template: function CmacsSwitchComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵlistener("keydown", function CmacsSwitchComponent_Template_button_keydown_0_listener($event) { return ctx.onKeyDown($event); });
        i0.ɵɵelementStart(2, "span", 2);
        i0.ɵɵtemplate(3, CmacsSwitchComponent_i_3_Template, 1, 0, "i", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(4, "span", 4);
        i0.ɵɵtemplate(5, CmacsSwitchComponent_ng_container_5_Template, 2, 1, "ng-container", 5);
        i0.ɵɵtemplate(6, CmacsSwitchComponent_ng_template_6_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(8, "div", 7);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r3 = i0.ɵɵreference(7);
        i0.ɵɵclassProp("ant-switch-checked", ctx.isChecked)("ant-switch-loading", ctx.loading)("ant-switch-disabled", ctx.disabled)("ant-switch-small", ctx.size === "small")("ant-switch-rtl", ctx.dir === "rtl");
        i0.ɵɵproperty("disabled", ctx.disabled)("nzWaveExtraNode", true);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.loading);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.isChecked)("ngIfElse", _r3);
    } }, directives: [i4.NzWaveDirective, i5.NgIf, i6.ɵNzTransitionPatchDirective, i7.NzIconDirective, i8.NzStringTemplateOutletDirective], styles: [".ant-switch-handle:before,.ant-switch-loading-icon{width:20px;height:20px;top:1px}.ant-switch-checked .ant-switch-handle{left:calc(100% - 18px - 4px)}.ant-switch{min-width:50px;height:26px;background-color:#cfd3d9}.ant-switch-checked{background-color:#2a7cff}.ant-switch:focus{box-shadow:none}.ant-switch-disabled{opacity:.3}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsSwitchComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CmacsSwitchComponent.prototype, "disabled", void 0);
__decorate([
    InputBoolean()
], CmacsSwitchComponent.prototype, "control", void 0);
__decorate([
    WithConfig()
], CmacsSwitchComponent.prototype, "size", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSwitchComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-switch',
                exportAs: 'cmacsSwitch',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef(() => CmacsSwitchComponent),
                        multi: true
                    }
                ],
                template: `
    <button
      nz-wave
      type="button"
      class="ant-switch"
      #switchElement
      [disabled]="disabled"
      role="button"
      [class.ant-switch-checked]="isChecked"
      [class.ant-switch-loading]="loading"
      [class.ant-switch-disabled]="disabled"
      [class.ant-switch-small]="size === 'small'"
      [class.ant-switch-rtl]="dir === 'rtl'"
      [nzWaveExtraNode]="true"
      (keydown)="onKeyDown($event)"
      aria-label="switch"
    >
      <span class="ant-switch-handle">
        <i *ngIf="loading" nz-icon nzType="loading" class="ant-switch-loading-icon"></i>
      </span>
      <span class="ant-switch-inner">
        <ng-container *ngIf="isChecked; else uncheckTemplate">
          <ng-container *nzStringTemplateOutlet="checkedChildren">{{ checkedChildren }}</ng-container>
        </ng-container>
        <ng-template #uncheckTemplate>
          <ng-container *nzStringTemplateOutlet="unCheckedChildren">{{ unCheckedChildren }}</ng-container>
        </ng-template>
      </span>
      <div class="ant-click-animating-node"></div>
    </button>
  `,
                host: {
                    '(click)': 'onHostClick($event)'
                },
                styleUrls: ['./cmacs-switch.component.css'],
            }]
    }], function () { return [{ type: i1.NzConfigService }, { type: i0.ChangeDetectorRef }, { type: i2.FocusMonitor }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }]; }, { switchElement: [{
            type: ViewChild,
            args: ['switchElement', { static: true }]
        }], loading: [{
            type: Input
        }], disabled: [{
            type: Input
        }], control: [{
            type: Input
        }], checkedChildren: [{
            type: Input
        }], unCheckedChildren: [{
            type: Input
        }], size: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlFLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFVBQVUsRUFDVixLQUFLLEVBR0wsUUFBUSxFQUVSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pFLE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7SUFtQ25DLHVCQUFnRjs7O0lBSTlFLDZCQUF3RDtJQUFBLFlBQXFCO0lBQUEsMEJBQWU7OztJQUFwQyxlQUFxQjtJQUFyQiw0Q0FBcUI7OztJQUQvRSw2QkFBc0Q7SUFDcEQsc0dBQTRGO0lBQzlGLDBCQUFlOzs7SUFERSxlQUF1QztJQUF2QywrREFBdUM7OztJQUd0RCw2QkFBMEQ7SUFBQSxZQUF1QjtJQUFBLDBCQUFlOzs7SUFBdEMsZUFBdUI7SUFBdkIsOENBQXVCOzs7SUFBakYscUdBQWdHOzs7SUFBakYsaUVBQXlDOztBQXhDbEUsTUFBTSxxQkFBcUIsR0FBZ0IsUUFBUSxDQUFDO0FBbURwRCxNQUFNLE9BQU8sb0JB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Z0JBQ0QsSUFBSSxFQUFFO29CQUNKLFNBQVMsRUFBRSxxQkFBcUI7aUJBQ2pDO2dCQUNELFNBQVMsRUFBRSxDQUFDLDhCQUE4QixDQUFDO2FBQzVDOztzQkFnRUksUUFBUTt3QkFyRDJDLGFBQWE7a0JBQWxFLFNBQVM7bUJBQUMsZUFBZSxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRTtZQUNuQixPQUFPO2tCQUEvQixLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDaUIsSUFBSTtrQkFBMUIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBGb2N1c01vbml0b3IgfSBmcm9tICdAYW5ndWxhci9jZGsvYTExeSc7XHJcbmltcG9ydCB7IEVOVEVSLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge1xyXG4gIEFmdGVyVmlld0luaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgZm9yd2FyZFJlZixcclxuICBJbnB1dCxcclxuICBPbkRlc3Ryb3ksXHJcbiAgT25Jbml0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xyXG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XHJcbmltcG9ydCB7IEJvb2xlYW5JbnB1dCwgT25DaGFuZ2VUeXBlLCBPblRvdWNoZWRUeXBlLCBOelNpemVEU1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdzd2l0Y2gnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1zd2l0Y2gnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTd2l0Y2gnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1N3aXRjaENvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBuei13YXZlXHJcbiAgICAgIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICBjbGFzcz1cImFudC1zd2l0Y2hcIlxyXG4gICAgICAjc3dpdGNoRWxlbWVudFxyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICByb2xlPVwiYnV0dG9uXCJcclxuICAgICAgW2NsYXNzLmFudC1zd2l0Y2gtY2hlY2tlZF09XCJpc0NoZWNrZWRcIlxyXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1sb2FkaW5nXT1cImxvYWRpbmdcIlxyXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXHJcbiAgICAgIFtjbGFzcy5hbnQtc3dpdGNoLXNtYWxsXT1cInNpemUgPT09ICdzbWFsbCdcIlxyXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1ydGxdPVwiZGlyID09PSAncnRsJ1wiXHJcbiAgICAgIFtueldhdmVFeHRyYU5vZGVdPVwidHJ1ZVwiXHJcbiAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQpXCJcclxuICAgICAgYXJpYS1sYWJlbD1cInN3aXRjaFwiXHJcbiAgICA+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN3aXRjaC1oYW5kbGVcIj5cclxuICAgICAgICA8aSAqbmdJZj1cImxvYWRpbmdcIiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIiBjbGFzcz1cImFudC1zd2l0Y2gtbG9hZGluZy1pY29uXCI+PC9pPlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwiYW50LXN3aXRjaC1pbm5lclwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NoZWNrZWQ7IGVsc2UgdW5jaGVja1RlbXBsYXRlXCI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwiY2hlY2tlZENoaWxkcmVuXCI+e3sgY2hlY2tlZENoaWxkcmVuIH19PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICN1bmNoZWNrVGVtcGxhdGU+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuelN0cmluZ1RlbXBsYXRlT3V0bGV0PVwidW5DaGVja2VkQ2hpbGRyZW5cIj57eyB1bkNoZWNrZWRDaGlsZHJlbiB9fTwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFudC1jbGljay1hbmltYXRpbmctbm9kZVwiPjwvZGl2PlxyXG4gICAgPC9idXR0b24+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICAnKGNsaWNrKSc6ICdvbkhvc3RDbGljaygkZXZlbnQpJ1xyXG4gIH0sXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtc3dpdGNoLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICByZWFkb25seSBfbnpNb2R1bGVOYW1lOiBOekNvbmZpZ0tleSA9IE5aX0NPTkZJR19NT0RVTEVfTkFNRTtcclxuXHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xvYWRpbmc6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IEJvb2xlYW5JbnB1dDtcclxuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfY29udHJvbDogQm9vbGVhbklucHV0O1xyXG5cclxuICBpc0NoZWNrZWQgPSBmYWxzZTtcclxuICBvbkNoYW5nZTogT25DaGFuZ2VUeXBlID0gKCkgPT4ge307XHJcbiAgb25Ub3VjaGVkOiBPblRvdWNoZWRUeXBlID0gKCkgPT4ge307XHJcbiAgQFZpZXdDaGlsZCgnc3dpdGNoRWxlbWVudCcsIHsgc3RhdGljOiB0cnVlIH0pIHByaXZhdGUgc3dpdGNoRWxlbWVudD86IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGxvYWRpbmcgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgY29udHJvbCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGNoZWNrZWRDaGlsZHJlbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSB1bkNoZWNrZWRDaGlsZHJlbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcclxuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHNpemU6IE56U2l6ZURTVHlwZSA9ICdkZWZhdWx0JztcclxuXHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIG9uSG9zdENsaWNrKGU6IE1vdXNlRXZlbnQpOiB2b2lkIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5sb2FkaW5nICYmICF0aGlzLmNvbnRyb2wpIHtcclxuICAgICAgdGhpcy51cGRhdGVWYWx1ZSghdGhpcy5pc0NoZWNrZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzQ2hlY2tlZCAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy5pc0NoZWNrZWQgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5vbkNoYW5nZSh0aGlzLmlzQ2hlY2tlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLmNvbnRyb2wgJiYgIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMubG9hZGluZykge1xyXG4gICAgICBpZiAoZS5rZXlDb2RlID09PSBMRUZUX0FSUk9XKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShmYWxzZSk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gUklHSFRfQVJST1cpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRydWUpO1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgfSBlbHNlIGlmIChlLmtleUNvZGUgPT09IFNQQUNFIHx8IGUua2V5Q29kZSA9PT0gRU5URVIpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmlzQ2hlY2tlZCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmb2N1cygpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLmZvY3VzVmlhKHRoaXMuc3dpdGNoRWxlbWVudD8ubmF0aXZlRWxlbWVudCwgJ2tleWJvYXJkJyk7XHJcbiAgfVxyXG5cclxuICBibHVyKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zd2l0Y2hFbGVtZW50Py5uYXRpdmVFbGVtZW50LmJsdXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcclxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XHJcbiAgKSB7fVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5mb2N1c01vbml0b3IubW9uaXRvcih0aGlzLnN3aXRjaEVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQsIHRydWUpLnN1YnNjcmliZShmb2N1c09yaWdpbiA9PiB7XHJcbiAgICAgIGlmICghZm9jdXNPcmlnaW4pIHtcclxuICAgICAgICAvKiogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTc3OTMgKiovXHJcbiAgICAgICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB0aGlzLm9uVG91Y2hlZCgpKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZm9jdXNNb25pdG9yLnN0b3BNb25pdG9yaW5nKHRoaXMuc3dpdGNoRWxlbWVudCEubmF0aXZlRWxlbWVudCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNDaGVja2VkID0gdmFsdWU7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHJlZ2lzdGVyT25DaGFuZ2UoZm46IE9uQ2hhbmdlVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xyXG4gIH1cclxuXHJcbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IE9uVG91Y2hlZFR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMub25Ub3VjaGVkID0gZm47XHJcbiAgfVxyXG5cclxuICBzZXREaXNhYmxlZFN0YXRlKGRpc2FibGVkOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmRpc2FibGVkID0gZGlzYWJsZWQ7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19
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
        ])], decls: 9, vars: 15, consts: [["nz-wave", "", "type", "button", 1, "ant-switch", 3, "disabled", "nzWaveExtraNode", "keydown"], ["switchElement", ""], [1, "ant-switch-handle"], ["nz-icon", "", "nzType", "loading", "class", "ant-switch-loading-icon", 4, "ngIf"], [1, "ant-switch-inner"], [4, "ngIf", "ngIfElse"], ["uncheckTemplate", ""], [1, "ant-click-animating-node"], ["nz-icon", "", "nzType", "loading", 1, "ant-switch-loading-icon"], [4, "nzStringTemplateOutlet"]], template: function CmacsSwitchComponent_Template(rf, ctx) { if (rf & 1) {
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
      [class.ant-switch-checked]="isChecked"
      [class.ant-switch-loading]="loading"
      [class.ant-switch-disabled]="disabled"
      [class.ant-switch-small]="size === 'small'"
      [class.ant-switch-rtl]="dir === 'rtl'"
      [nzWaveExtraNode]="true"
      (keydown)="onKeyDown($event)"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3dpdGNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1zd2l0Y2gvc3dpdGNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzlFLE9BQU8sRUFFTCx1QkFBdUIsRUFFdkIsU0FBUyxFQUVULFVBQVUsRUFDVixLQUFLLEVBR0wsUUFBUSxFQUVSLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUF3QixpQkFBaUIsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3pFLE9BQU8sRUFBZ0MsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7Ozs7Ozs7SUFpQ25DLHVCQUFnRjs7O0lBSTlFLDZCQUF3RDtJQUFBLFlBQXFCO0lBQUEsMEJBQWU7OztJQUFwQyxlQUFxQjtJQUFyQiw0Q0FBcUI7OztJQUQvRSw2QkFBc0Q7SUFDcEQsc0dBQTRGO0lBQzlGLDBCQUFlOzs7SUFERSxlQUF1QztJQUF2QywrREFBdUM7OztJQUd0RCw2QkFBMEQ7SUFBQSxZQUF1QjtJQUFBLDBCQUFlOzs7SUFBdEMsZUFBdUI7SUFBdkIsOENBQXVCOzs7SUFBakYscUdBQWdHOzs7SUFBakYsaUVBQXlDOztBQXRDbEUsTUFBTSxxQkFBcUIsR0FBZ0IsUUFBUSxDQUFDO0FBaURwRCxNQUFNLE9BQU8sb0JB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QUNELElBQUksRUFBRTtvQkFDSixTQUFTLEVBQUUscUJBQXFCO2lCQUNqQztnQkFDRCxTQUFTLEVBQUUsQ0FBQyw4QkFBOEIsQ0FBQzthQUM1Qzs7c0JBZ0VJLFFBQVE7d0JBckQyQyxhQUFhO2tCQUFsRSxTQUFTO21CQUFDLGVBQWUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7WUFDbkIsT0FBTztrQkFBL0IsS0FBSztZQUNtQixRQUFRO2tCQUFoQyxLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ2lCLElBQUk7a0JBQTFCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcbmltcG9ydCB7IEVOVEVSLCBMRUZUX0FSUk9XLCBSSUdIVF9BUlJPVywgU1BBQ0UgfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xuaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3B0aW9uYWwsXG4gIFRlbXBsYXRlUmVmLFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBEaXJlY3Rpb24sIERpcmVjdGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHsgTnpDb25maWdLZXksIE56Q29uZmlnU2VydmljZSwgV2l0aENvbmZpZyB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb25maWcnO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0LCBPbkNoYW5nZVR5cGUsIE9uVG91Y2hlZFR5cGUsIE56U2l6ZURTVHlwZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmNvbnN0IE5aX0NPTkZJR19NT0RVTEVfTkFNRTogTnpDb25maWdLZXkgPSAnc3dpdGNoJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY21hY3Mtc3dpdGNoJyxcbiAgZXhwb3J0QXM6ICdjbWFjc1N3aXRjaCcsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBDbWFjc1N3aXRjaENvbXBvbmVudCksXG4gICAgICBtdWx0aTogdHJ1ZVxuICAgIH1cbiAgXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8YnV0dG9uXG4gICAgICBuei13YXZlXG4gICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgIGNsYXNzPVwiYW50LXN3aXRjaFwiXG4gICAgICAjc3dpdGNoRWxlbWVudFxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIFtjbGFzcy5hbnQtc3dpdGNoLWNoZWNrZWRdPVwiaXNDaGVja2VkXCJcbiAgICAgIFtjbGFzcy5hbnQtc3dpdGNoLWxvYWRpbmddPVwibG9hZGluZ1wiXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1kaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBbY2xhc3MuYW50LXN3aXRjaC1zbWFsbF09XCJzaXplID09PSAnc21hbGwnXCJcbiAgICAgIFtjbGFzcy5hbnQtc3dpdGNoLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICAgIFtueldhdmVFeHRyYU5vZGVdPVwidHJ1ZVwiXG4gICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50KVwiXG4gICAgPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3dpdGNoLWhhbmRsZVwiPlxuICAgICAgICA8aSAqbmdJZj1cImxvYWRpbmdcIiBuei1pY29uIG56VHlwZT1cImxvYWRpbmdcIiBjbGFzcz1cImFudC1zd2l0Y2gtbG9hZGluZy1pY29uXCI+PC9pPlxuICAgICAgPC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtc3dpdGNoLWlubmVyXCI+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0NoZWNrZWQ7IGVsc2UgdW5jaGVja1RlbXBsYXRlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImNoZWNrZWRDaGlsZHJlblwiPnt7IGNoZWNrZWRDaGlsZHJlbiB9fTwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPG5nLXRlbXBsYXRlICN1bmNoZWNrVGVtcGxhdGU+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cInVuQ2hlY2tlZENoaWxkcmVuXCI+e3sgdW5DaGVja2VkQ2hpbGRyZW4gfX08L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvc3Bhbj5cbiAgICAgIDxkaXYgY2xhc3M9XCJhbnQtY2xpY2stYW5pbWF0aW5nLW5vZGVcIj48L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgYCxcbiAgaG9zdDoge1xuICAgICcoY2xpY2spJzogJ29uSG9zdENsaWNrKCRldmVudCknXG4gIH0sXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXN3aXRjaC5jb21wb25lbnQuY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIENtYWNzU3dpdGNoQ29tcG9uZW50IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgcmVhZG9ubHkgX256TW9kdWxlTmFtZTogTnpDb25maWdLZXkgPSBOWl9DT05GSUdfTU9EVUxFX05BTUU7XG5cbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2xvYWRpbmc6IEJvb2xlYW5JbnB1dDtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2Rpc2FibGVkOiBCb29sZWFuSW5wdXQ7XG4gIHN0YXRpYyBuZ0FjY2VwdElucHV0VHlwZV9jb250cm9sOiBCb29sZWFuSW5wdXQ7XG5cbiAgaXNDaGVja2VkID0gZmFsc2U7XG4gIG9uQ2hhbmdlOiBPbkNoYW5nZVR5cGUgPSAoKSA9PiB7fTtcbiAgb25Ub3VjaGVkOiBPblRvdWNoZWRUeXBlID0gKCkgPT4ge307XG4gIEBWaWV3Q2hpbGQoJ3N3aXRjaEVsZW1lbnQnLCB7IHN0YXRpYzogdHJ1ZSB9KSBwcml2YXRlIHN3aXRjaEVsZW1lbnQ/OiBFbGVtZW50UmVmO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZyA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGlzYWJsZWQgPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNvbnRyb2wgPSBmYWxzZTtcbiAgQElucHV0KCkgY2hlY2tlZENoaWxkcmVuOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSB1bkNoZWNrZWRDaGlsZHJlbjogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4gfCBudWxsID0gbnVsbDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBzaXplOiBOelNpemVEU1R5cGUgPSAnZGVmYXVsdCc7XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBvbkhvc3RDbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCAmJiAhdGhpcy5sb2FkaW5nICYmICF0aGlzLmNvbnRyb2wpIHtcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUoIXRoaXMuaXNDaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGVWYWx1ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xuICAgIGlmICh0aGlzLmlzQ2hlY2tlZCAhPT0gdmFsdWUpIHtcbiAgICAgIHRoaXMuaXNDaGVja2VkID0gdmFsdWU7XG4gICAgICB0aGlzLm9uQ2hhbmdlKHRoaXMuaXNDaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5jb250cm9sICYmICF0aGlzLmRpc2FibGVkICYmICF0aGlzLmxvYWRpbmcpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IExFRlRfQVJST1cpIHtcbiAgICAgICAgdGhpcy51cGRhdGVWYWx1ZShmYWxzZSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5rZXlDb2RlID09PSBSSUdIVF9BUlJPVykge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKHRydWUpO1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9IGVsc2UgaWYgKGUua2V5Q29kZSA9PT0gU1BBQ0UgfHwgZS5rZXlDb2RlID09PSBFTlRFUikge1xuICAgICAgICB0aGlzLnVwZGF0ZVZhbHVlKCF0aGlzLmlzQ2hlY2tlZCk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmb2N1cygpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5mb2N1c1ZpYSh0aGlzLnN3aXRjaEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQsICdrZXlib2FyZCcpO1xuICB9XG5cbiAgYmx1cigpOiB2b2lkIHtcbiAgICB0aGlzLnN3aXRjaEVsZW1lbnQ/Lm5hdGl2ZUVsZW1lbnQuYmx1cigpO1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9jdXNNb25pdG9yLm1vbml0b3IodGhpcy5zd2l0Y2hFbGVtZW50IS5uYXRpdmVFbGVtZW50LCB0cnVlKS5zdWJzY3JpYmUoZm9jdXNPcmlnaW4gPT4ge1xuICAgICAgaWYgKCFmb2N1c09yaWdpbikge1xuICAgICAgICAvKiogaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9pc3N1ZXMvMTc3OTMgKiovXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKCkgPT4gdGhpcy5vblRvdWNoZWQoKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmZvY3VzTW9uaXRvci5zdG9wTW9uaXRvcmluZyh0aGlzLnN3aXRjaEVsZW1lbnQhLm5hdGl2ZUVsZW1lbnQpO1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLmlzQ2hlY2tlZCA9IHZhbHVlO1xuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICB9XG5cbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogT25DaGFuZ2VUeXBlKTogdm9pZCB7XG4gICAgdGhpcy5vbkNoYW5nZSA9IGZuO1xuICB9XG5cbiAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IE9uVG91Y2hlZFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZCA9IGZuO1xuICB9XG5cbiAgc2V0RGlzYWJsZWRTdGF0ZShkaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19
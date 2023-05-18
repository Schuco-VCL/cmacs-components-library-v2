import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { isPresetColor } from 'ng-zorro-antd/core/color';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/common";
import * as i3 from "ng-zorro-antd/core/transition-patch";
import * as i4 from "ng-zorro-antd/icon";
function CmacsTagComponent_i_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "i", 1);
    i0.ɵɵlistener("click", function CmacsTagComponent_i_3_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.closeTag($event); });
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class CmacsTagComponent {
    constructor(cdr, renderer, elementRef, directionality) {
        this.cdr = cdr;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.directionality = directionality;
        this.isPresetColor = false;
        this.cmacsStatusType = false;
        this.cmacsMoneyType = false;
        this.cmacsTemplateType = false;
        this.disabled = false;
        this.mode = 'default';
        this.checked = false;
        this.onClose = new EventEmitter();
        this.checkedChange = new EventEmitter();
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-tag');
    }
    updateCheckedStatus() {
        if (this.mode === 'checkable') {
            this.checked = !this.checked;
            this.checkedChange.emit(this.checked);
        }
    }
    closeTag(e) {
        this.onClose.emit(e);
        if (!e.defaultPrevented) {
            this.renderer.removeChild(this.renderer.parentNode(this.elementRef.nativeElement), this.elementRef.nativeElement);
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { color } = changes;
        if (color) {
            if (!this.color) {
                this.isPresetColor = false;
            }
            else {
                this.isPresetColor = isPresetColor(this.color) || /^(success|processing|error|default|warning)$/.test(this.color);
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsTagComponent.ɵfac = function CmacsTagComponent_Factory(t) { return new (t || CmacsTagComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); };
CmacsTagComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsTagComponent, selectors: [["cmacs-tag"]], hostVars: 42, hostBindings: function CmacsTagComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("click", function CmacsTagComponent_click_HostBindingHandler() { return ctx.updateCheckedStatus(); });
    } if (rf & 2) {
        i0.ɵɵclassMap(ctx.isPresetColor ? "ant-tag-" + ctx.color : "");
        i0.ɵɵstyleProp("background-color", ctx.isPresetColor ? "" : ctx.color)("border-left", ctx.cmacsTemplateType ? "3px solid " + ctx.color : null);
        i0.ɵɵclassProp("ant-tag-has-color", ctx.color && !ctx.isPresetColor)("ant-tag-checkable", ctx.mode === "checkable")("ant-tag-checkable-checked", ctx.checked)("ant-tag-rtl", ctx.dir === "rtl")("cmacs-tag", ctx.cmacsStatusType || ctx.cmacsPriorityType || ctx.cmacsGridType || ctx.cmacsMoneyType)("cmacs-tag-active", ctx.cmacsGridType && ctx.cmacsGridType === "active")("cmacs-tag-created", ctx.cmacsGridType && ctx.cmacsGridType === "created")("cmacs-tag-pre-bid", ctx.cmacsGridType && ctx.cmacsGridType === "pre-bid")("cmacs-tag-archive", ctx.cmacsGridType && ctx.cmacsGridType === "archive")("cmacs-tag-inactive", ctx.cmacsGridType && ctx.cmacsGridType === "inactive")("cmacs-tag-warranty", ctx.cmacsGridType && ctx.cmacsGridType === "warranty")("cmacs-tag-high-priority", ctx.cmacsPriorityType && ctx.cmacsPriorityType === "high")("cmacs-tag-low-priority", ctx.cmacsPriorityType && ctx.cmacsPriorityType === "low")("cmacs-tag-medium-priority", ctx.cmacsPriorityType && ctx.cmacsPriorityType === "medium")("cmacs-tag-money", ctx.cmacsMoneyType)("cmacs-tag-template", ctx.cmacsTemplateType)("cmacs-tag-status", ctx.cmacsStatusType)("cmacs-tag-closeable", ctx.mode === "closeable");
    } }, inputs: { cmacsGridType: "cmacsGridType", cmacsPriorityType: "cmacsPriorityType", cmacsStatusType: "cmacsStatusType", cmacsMoneyType: "cmacsMoneyType", cmacsTemplateType: "cmacsTemplateType", disabled: "disabled", mode: "mode", color: "color", checked: "checked" }, outputs: { onClose: "onClose", checkedChange: "checkedChange" }, exportAs: ["cmacsTag"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 4, vars: 5, consts: [["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click"]], template: function CmacsTagComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "span");
        i0.ɵɵprojection(2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CmacsTagComponent_i_3_Template, 1, 0, "i", 0);
    } if (rf & 2) {
        i0.ɵɵclassProp("cmacs-closeable-inner", ctx.mode === "closeable" && !ctx.disabled)("cmacs-closeable-disabled", ctx.disabled);
        i0.ɵɵadvance(3);
        i0.ɵɵproperty("ngIf", ctx.mode === "closeable" && !ctx.disabled);
    } }, directives: [i2.NgIf, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective], styles: [".cmacs-tag{background-color:#fff;font-size:12px;font-style:normal;font-stretch:normal;line-height:.9;letter-spacing:normal;border-radius:2px;border:1px solid #dee0e5;padding:5px 8px!important;height:22px;font-weight:400}.cmacs-tag-status{height:21px;border:1px solid #cfd3d9;background-color:#f6f7fb;font-size:11px;font-weight:500;line-height:.82;color:#656c79}.cmacs-tag-high-priority{height:20px;background-color:#feedeb;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#f6503c;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-active{color:#2164c9}.cmacs-tag-created{color:#688cda}.cmacs-tag-pre-bid{color:#133a76}.cmacs-tag-archive{color:#647ea5}.cmacs-tag-inactive{color:#97a0ae}.cmacs-tag-warranty{color:#656c79}.cmacs-tag-low-priority{background-color:#e5fcf3;color:#00ce7d}.cmacs-tag-low-priority,.cmacs-tag-medium-priority{height:20px;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-medium-priority{background-color:#fff6e1;color:#ffc634}.ant-tag .anticon-close:hover{color:#2a7cff}.ant-tag .anticon-close{color:#656c79;margin-right:3px;margin-left:4px}.cmacs-tag-closeable{height:24px;border:1px solid #dee0e5;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;border-radius:3px;background-color:#f6f7fb}.ant-tag{padding:0}.cmacs-closeable-inner{border-right:1px solid #dee0e5;height:100%;display:inline-block;background-color:#fff}.cmacs-closeable-disabled,.cmacs-closeable-inner{padding:3px 10px!important}.cmacs-closeable-disabled{cursor:not-allowed}.cmacs-closeable-disabled:hover{cursor:not-allowed;text-shadow:none;color:#97a0ae;opacity:1}.cmacs-tag-money{height:20px;border-radius:2px;border:none;background-color:rgba(42,124,255,.15);color:#2a7cff}.cmacs-tag-template{font-family:Roboto-Regular;font-size:11px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#656c79;border-radius:3px;border:1px solid #dee0e5;background-color:#fff!important;padding:2px 4px}.cmacs-tag-template div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:178px}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsTagComponent.prototype, "checked", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTagComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-tag',
                exportAs: 'cmacsTag',
                preserveWhitespaces: false,
                template: `
    <div [class.cmacs-closeable-inner]="mode === 'closeable' && !disabled" [class.cmacs-closeable-disabled]="disabled">
      <span><ng-content></ng-content></span>
    </div>

    <i nz-icon nzType="close" *ngIf="mode==='closeable' && !disabled" tabindex="-1" (click)="closeTag($event)"></i>
  `,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                host: {
                    '[style.background-color]': `isPresetColor ? '' : color`,
                    '[class]': `isPresetColor ? ('ant-tag-' + color) : ''`,
                    '[class.ant-tag-has-color]': `color && !isPresetColor`,
                    '[class.ant-tag-checkable]': `mode === 'checkable'`,
                    '[class.ant-tag-checkable-checked]': `checked`,
                    '[class.ant-tag-rtl]': `dir === 'rtl'`,
                    '(click)': 'updateCheckedStatus()',
                    '[class.cmacs-tag]': `cmacsStatusType || this.cmacsPriorityType || this.cmacsGridType || this.cmacsMoneyType`,
                    '[class.cmacs-tag-active]': `cmacsGridType && cmacsGridType === 'active'`,
                    '[class.cmacs-tag-created]': `cmacsGridType && cmacsGridType === 'created'`,
                    '[class.cmacs-tag-pre-bid]': `cmacsGridType && cmacsGridType === 'pre-bid'`,
                    '[class.cmacs-tag-archive]': `cmacsGridType && cmacsGridType === 'archive'`,
                    '[class.cmacs-tag-inactive]': `cmacsGridType && cmacsGridType === 'inactive'`,
                    '[class.cmacs-tag-warranty]': `cmacsGridType && cmacsGridType === 'warranty'`,
                    '[class.cmacs-tag-high-priority]': `cmacsPriorityType && cmacsPriorityType === 'high'`,
                    '[class.cmacs-tag-low-priority]': `cmacsPriorityType && cmacsPriorityType === 'low'`,
                    '[class.cmacs-tag-medium-priority]': `cmacsPriorityType && cmacsPriorityType === 'medium'`,
                    '[class.cmacs-tag-money]': `cmacsMoneyType`,
                    '[class.cmacs-tag-template]': `cmacsTemplateType`,
                    '[class.cmacs-tag-status]': `cmacsStatusType`,
                    '[class.cmacs-tag-closeable]': `mode === 'closeable'`,
                    '[style.border-left]': "cmacsTemplateType ? '3px solid ' + color : null"
                },
                styleUrls: ['./cmacs-tag.component.css']
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i0.ElementRef }, { type: i1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { cmacsGridType: [{
            type: Input
        }], cmacsPriorityType: [{
            type: Input
        }], cmacsStatusType: [{
            type: Input
        }], cmacsMoneyType: [{
            type: Input
        }], cmacsTemplateType: [{
            type: Input
        }], disabled: [{
            type: Input
        }], mode: [{
            type: Input
        }], color: [{
            type: Input
        }], checked: [{
            type: Input
        }], onClose: [{
            type: Output
        }], checkedChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWcvdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFpQixNQUFNLDBCQUEwQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUFhdkMsNEJBQTJHO0lBQTNCLHdMQUEwQjtJQUFDLGlCQUFJOzs7QUE4Qm5ILE1BQU0sT0FBTyxpQkFBaUI7SUFpQzVCLFlBQ1UsR0FBc0IsRUFDdEIsUUFBbUIsRUFDbkIsVUFBc0IsRUFDVixjQUE4QjtRQUgxQyxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDVixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFuQ3BELGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBSWIsb0JBQWUsR0FBRyxLQUFLLENBQUM7UUFDeEIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsc0JBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsU0FBSSxHQUEwQyxTQUFTLENBQUM7UUFFeEMsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUN0QixZQUFPLEdBQUcs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dEQsMkJBQTJCLEVBQUUseUJBQXlCO29CQUN0RCwyQkFBMkIsRUFBRSxzQkFBc0I7b0JBQ25ELG1DQUFtQyxFQUFFLFNBQVM7b0JBQzlDLHFCQUFxQixFQUFFLGVBQWU7b0JBQ3RDLFNBQVMsRUFBRSx1QkFBdUI7b0JBQ2xDLG1CQUFtQixFQUFFLHdGQUF3RjtvQkFDN0csMEJBQTBCLEVBQUUsNkNBQTZDO29CQUN6RSwyQkFBMkIsRUFBRSw4Q0FBOEM7b0JBQzNFLDJCQUEyQixFQUFFLDhDQUE4QztvQkFDM0UsMkJBQTJCLEVBQUUsOENBQThDO29CQUMzRSw0QkFBNEIsRUFBRSwrQ0FBK0M7b0JBQzdFLDRCQUE0QixFQUFFLCtDQUErQztvQkFDN0UsaUNBQWlDLEVBQUUsbURBQW1EO29CQUN0RixnQ0FBZ0MsRUFBRSxrREFBa0Q7b0JBQ3BGLG1DQUFtQyxFQUFFLHFEQUFxRDtvQkFDMUYseUJBQXlCLEVBQUUsZ0JBQWdCO29CQUMzQyw0QkFBNEIsRUFBRSxtQkFBbUI7b0JBQ2pELDBCQUEwQixFQUFFLGlCQUFpQjtvQkFDN0MsNkJBQTZCLEVBQUUsc0JBQXNCO29CQUNyRCxxQkFBcUIsRUFBRSxpREFBaUQ7aUJBQ3pFO2dCQUNELFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO2FBQ3pDOztzQkFzQ0ksUUFBUTt3QkFqQ0YsYUFBYTtrQkFBckIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxjQUFjO2tCQUF0QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUVHLElBQUk7a0JBQVosS0FBSztZQUNHLEtBQUs7a0JBQWIsS0FBSztZQUNtQixPQUFPO2tCQUEvQixLQUFLO1lBQ2EsT0FBTztrQkFBekIsTUFBTTtZQUNZLGFBQWE7a0JBQS9CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3B0aW9uYWwsXHJcbiAgT3V0cHV0LFxyXG4gIFJlbmRlcmVyMixcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IGlzUHJlc2V0Q29sb3IsIE56UHJlc2V0Q29sb3IgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29sb3InO1xyXG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5leHBvcnQgdHlwZSBDbWFjc0dyaWRUYWdUeXBlID0gJ2FjdGl2ZScgfCAnY3JlYXRlZCcgfCAncHJlLWJpZCcgfCAnYXJjaGl2ZScgfCAnaW5hY3RpdmUnIHwgJ3dhcnJhbnR5JztcclxuZXhwb3J0IHR5cGUgQ21hY3NQcmlvcml0eVRhZ1R5cGUgPSAnaGlnaCcgfCAnbG93JyB8ICdtZWRpdW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy10YWcnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NUYWcnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8ZGl2IFtjbGFzcy5jbWFjcy1jbG9zZWFibGUtaW5uZXJdPVwibW9kZSA9PT0gJ2Nsb3NlYWJsZScgJiYgIWRpc2FibGVkXCIgW2NsYXNzLmNtYWNzLWNsb3NlYWJsZS1kaXNhYmxlZF09XCJkaXNhYmxlZFwiPlxyXG4gICAgICA8c3Bhbj48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGkgbnotaWNvbiBuelR5cGU9XCJjbG9zZVwiICpuZ0lmPVwibW9kZT09PSdjbG9zZWFibGUnICYmICFkaXNhYmxlZFwiIHRhYmluZGV4PVwiLTFcIiAoY2xpY2spPVwiY2xvc2VUYWcoJGV2ZW50KVwiPjwvaT5cclxuICBgLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXSc6IGBpc1ByZXNldENvbG9yID8gJycgOiBjb2xvcmAsXHJcbiAgICAnW2NsYXNzXSc6IGBpc1ByZXNldENvbG9yID8gKCdhbnQtdGFnLScgKyBjb2xvcikgOiAnJ2AsXHJcbiAgICAnW2NsYXNzLmFudC10YWctaGFzLWNvbG9yXSc6IGBjb2xvciAmJiAhaXNQcmVzZXRDb2xvcmAsXHJcbiAgICAnW2NsYXNzLmFudC10YWctY2hlY2thYmxlXSc6IGBtb2RlID09PSAnY2hlY2thYmxlJ2AsXHJcbiAgICAnW2NsYXNzLmFudC10YWctY2hlY2thYmxlLWNoZWNrZWRdJzogYGNoZWNrZWRgLFxyXG4gICAgJ1tjbGFzcy5hbnQtdGFnLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXHJcbiAgICAnKGNsaWNrKSc6ICd1cGRhdGVDaGVja2VkU3RhdHVzKCknLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10YWddJzogYGNtYWNzU3RhdHVzVHlwZSB8fCB0aGlzLmNtYWNzUHJpb3JpdHlUeXBlIHx8IHRoaXMuY21hY3NHcmlkVHlwZSB8fCB0aGlzLmNtYWNzTW9uZXlUeXBlYCxcclxuICAgICdbY2xhc3MuY21hY3MtdGFnLWFjdGl2ZV0nOiBgY21hY3NHcmlkVHlwZSAmJiBjbWFjc0dyaWRUeXBlID09PSAnYWN0aXZlJ2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRhZy1jcmVhdGVkXSc6IGBjbWFjc0dyaWRUeXBlICYmIGNtYWNzR3JpZFR5cGUgPT09ICdjcmVhdGVkJ2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRhZy1wcmUtYmlkXSc6IGBjbWFjc0dyaWRUeXBlICYmIGNtYWNzR3JpZFR5cGUgPT09ICdwcmUtYmlkJ2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRhZy1hcmNoaXZlXSc6IGBjbWFjc0dyaWRUeXBlICYmIGNtYWNzR3JpZFR5cGUgPT09ICdhcmNoaXZlJ2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRhZy1pbmFjdGl2ZV0nOiBgY21hY3NHcmlkVHlwZSAmJiBjbWFjc0dyaWRUeXBlID09PSAnaW5hY3RpdmUnYCxcclxuICAgICdbY2xhc3MuY21hY3MtdGFnLXdhcnJhbnR5XSc6IGBjbWFjc0dyaWRUeXBlICYmIGNtYWNzR3JpZFR5cGUgPT09ICd3YXJyYW50eSdgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10YWctaGlnaC1wcmlvcml0eV0nOiBgY21hY3NQcmlvcml0eVR5cGUgJiYgY21hY3NQcmlvcml0eVR5cGUgPT09ICdoaWdoJ2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRhZy1sb3ctcHJpb3JpdHldJzogYGNtYWNzUHJpb3JpdHlUeXBlICYmIGNtYWNzUHJpb3JpdHlUeXBlID09PSAnbG93J2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRhZy1tZWRpdW0tcHJpb3JpdHldJzogYGNtYWNzUHJpb3JpdHlUeXBlICYmIGNtYWNzUHJpb3JpdHlUeXBlID09PSAnbWVkaXVtJ2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRhZy1tb25leV0nOiBgY21hY3NNb25leVR5cGVgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10YWctdGVtcGxhdGVdJzogYGNtYWNzVGVtcGxhdGVUeXBlYCxcclxuICAgICdbY2xhc3MuY21hY3MtdGFnLXN0YXR1c10nOiBgY21hY3NTdGF0dXNUeXBlYCxcclxuICAgICdbY2xhc3MuY21hY3MtdGFnLWNsb3NlYWJsZV0nOiBgbW9kZSA9PT0gJ2Nsb3NlYWJsZSdgLFxyXG4gICAgJ1tzdHlsZS5ib3JkZXItbGVmdF0nOiBcImNtYWNzVGVtcGxhdGVUeXBlID8gJzNweCBzb2xpZCAnICsgY29sb3IgOiBudWxsXCJcclxuICB9LFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRhZy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzVGFnQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NoZWNrZWQ6IEJvb2xlYW5JbnB1dDtcclxuICBpc1ByZXNldENvbG9yID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIGNtYWNzR3JpZFR5cGU6IENtYWNzR3JpZFRhZ1R5cGVcclxuICBASW5wdXQoKSBjbWFjc1ByaW9yaXR5VHlwZTogQ21hY3NQcmlvcml0eVRhZ1R5cGU7XHJcbiAgQElucHV0KCkgY21hY3NTdGF0dXNUeXBlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY21hY3NNb25leVR5cGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjbWFjc1RlbXBsYXRlVHlwZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIG1vZGU6ICdkZWZhdWx0JyB8ICdjbG9zZWFibGUnIHwgJ2NoZWNrYWJsZScgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgY29sb3I/OiBzdHJpbmcgfCBOelByZXNldENvbG9yO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBjaGVja2VkID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNoZWNrZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgdXBkYXRlQ2hlY2tlZFN0YXR1cygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm1vZGUgPT09ICdjaGVja2FibGUnKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tlZCA9ICF0aGlzLmNoZWNrZWQ7XHJcbiAgICAgIHRoaXMuY2hlY2tlZENoYW5nZS5lbWl0KHRoaXMuY2hlY2tlZCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbG9zZVRhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XHJcbiAgICB0aGlzLm9uQ2xvc2UuZW1pdChlKTtcclxuICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxyXG4gICkge1xyXG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtdGFnJyk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xyXG4gICAgICB0aGlzLmRpciA9IGRpcmVjdGlvbjtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3QgeyBjb2xvciB9ID0gY2hhbmdlcztcclxuICAgIGlmIChjb2xvcikge1xyXG4gICAgICBpZiAoIXRoaXMuY29sb3IpIHtcclxuICAgICAgICB0aGlzLmlzUHJlc2V0Q29sb3IgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmlzUHJlc2V0Q29sb3IgPSBpc1ByZXNldENvbG9yKHRoaXMuY29sb3IpIHx8IC9eKHN1Y2Nlc3N8cHJvY2Vzc2luZ3xlcnJvcnxkZWZhdWx0fHdhcm5pbmcpJC8udGVzdCh0aGlzLmNvbG9yKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcbn1cclxuIl19
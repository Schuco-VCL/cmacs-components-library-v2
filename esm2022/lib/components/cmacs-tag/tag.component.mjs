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
    i0.ɵɵlistener("click", function CmacsTagComponent_i_3_Template_i_click_0_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeTag($event)); });
    i0.ɵɵelementEnd();
} }
const _c0 = ["*"];
export class CmacsTagComponent {
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
    ngOnInit() {
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
    static { this.ɵfac = function CmacsTagComponent_Factory(t) { return new (t || CmacsTagComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i1.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsTagComponent, selectors: [["cmacs-tag"]], hostVars: 42, hostBindings: function CmacsTagComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function CmacsTagComponent_click_HostBindingHandler() { return ctx.updateCheckedStatus(); });
        } if (rf & 2) {
            i0.ɵɵclassMap(ctx.isPresetColor ? "ant-tag-" + ctx.color : "");
            i0.ɵɵstyleProp("background-color", ctx.isPresetColor ? "" : ctx.color)("border-left", ctx.cmacsTemplateType ? "3px solid " + ctx.color : null);
            i0.ɵɵclassProp("ant-tag-has-color", ctx.color && !ctx.isPresetColor)("ant-tag-checkable", ctx.mode === "checkable")("ant-tag-checkable-checked", ctx.checked)("ant-tag-rtl", ctx.dir === "rtl")("cmacs-tag", ctx.cmacsStatusType || ctx.cmacsPriorityType || ctx.cmacsGridType || ctx.cmacsMoneyType)("cmacs-tag-active", ctx.cmacsGridType && ctx.cmacsGridType === "active")("cmacs-tag-created", ctx.cmacsGridType && ctx.cmacsGridType === "created")("cmacs-tag-pre-bid", ctx.cmacsGridType && ctx.cmacsGridType === "pre-bid")("cmacs-tag-archive", ctx.cmacsGridType && ctx.cmacsGridType === "archive")("cmacs-tag-inactive", ctx.cmacsGridType && ctx.cmacsGridType === "inactive")("cmacs-tag-warranty", ctx.cmacsGridType && ctx.cmacsGridType === "warranty")("cmacs-tag-high-priority", ctx.cmacsPriorityType && ctx.cmacsPriorityType === "high")("cmacs-tag-low-priority", ctx.cmacsPriorityType && ctx.cmacsPriorityType === "low")("cmacs-tag-medium-priority", ctx.cmacsPriorityType && ctx.cmacsPriorityType === "medium")("cmacs-tag-money", ctx.cmacsMoneyType)("cmacs-tag-template", ctx.cmacsTemplateType)("cmacs-tag-status", ctx.cmacsStatusType)("cmacs-tag-closeable", ctx.mode === "closeable");
        } }, inputs: { cmacsGridType: "cmacsGridType", cmacsPriorityType: "cmacsPriorityType", cmacsStatusType: "cmacsStatusType", cmacsMoneyType: "cmacsMoneyType", cmacsTemplateType: "cmacsTemplateType", disabled: "disabled", mode: "mode", color: "color", checked: "checked" }, outputs: { onClose: "onClose", checkedChange: "checkedChange" }, exportAs: ["cmacsTag"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c0, decls: 4, vars: 5, consts: [["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click", 4, "ngIf"], ["nz-icon", "", "nzType", "close", "tabindex", "-1", 3, "click"]], template: function CmacsTagComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵelementStart(0, "div")(1, "span");
            i0.ɵɵprojection(2);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(3, CmacsTagComponent_i_3_Template, 1, 0, "i", 0);
        } if (rf & 2) {
            i0.ɵɵclassProp("cmacs-closeable-inner", ctx.mode === "closeable" && !ctx.disabled)("cmacs-closeable-disabled", ctx.disabled);
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.mode === "closeable" && !ctx.disabled);
        } }, dependencies: [i2.NgIf, i3.ɵNzTransitionPatchDirective, i4.NzIconDirective], styles: [".cmacs-tag{background-color:#fff;font-size:12px;font-style:normal;font-stretch:normal;line-height:.9;letter-spacing:normal;border-radius:2px;border:solid 1px #dee0e5;padding:5px 8px!important;height:22px;font-weight:400}.cmacs-tag-status{height:21px;border:solid 1px #cfd3d9;background-color:#f6f7fb;font-size:11px;font-weight:500;line-height:.82;color:#656c79}.cmacs-tag-high-priority{height:20px;background-color:#feedeb;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#f6503c;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-active{color:#2164c9}.cmacs-tag-created{color:#688cda}.cmacs-tag-pre-bid{color:#133a76}.cmacs-tag-archive{color:#647ea5}.cmacs-tag-inactive{color:#97a0ae}.cmacs-tag-warranty{color:#656c79}.cmacs-tag-low-priority{height:20px;background-color:#e5fcf3;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#00ce7d;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-medium-priority{height:20px;background-color:#fff6e1;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#ffc634;border-radius:3px;padding:3px 5px!important;border:none}.ant-tag .anticon-close:hover{color:#2a7cff}.ant-tag .anticon-close{color:#656c79;margin-right:3px;margin-left:4px}.cmacs-tag-closeable{height:24px;border:solid 1px #dee0e5;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;border-radius:3px;background-color:#f6f7fb}.ant-tag{padding:0}.cmacs-closeable-inner{padding:3px 10px!important;border-right:1px solid #dee0e5;height:100%;display:inline-block;background-color:#fff}.cmacs-closeable-disabled{padding:3px 10px!important}.cmacs-closeable-disabled{cursor:not-allowed}.cmacs-closeable-disabled:hover{cursor:not-allowed;text-shadow:none;color:#97a0ae;opacity:1}.cmacs-tag-money{height:20px;border-radius:2px;border:none;background-color:#2a7cff26;color:#2a7cff}.cmacs-tag-template{font-family:Roboto-Regular;font-size:11px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#656c79;border-radius:3px;border:solid 1px #dee0e5;background-color:#fff!important;padding:2px 4px}.cmacs-tag-template div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:178px}\n"], encapsulation: 2, changeDetection: 0 }); }
}
__decorate([
    InputBoolean()
], CmacsTagComponent.prototype, "checked", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTagComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-tag', exportAs: 'cmacsTag', preserveWhitespaces: false, template: `
    <div [class.cmacs-closeable-inner]="mode === 'closeable' && !disabled" [class.cmacs-closeable-disabled]="disabled">
      <span><ng-content></ng-content></span>
    </div>

    <i nz-icon nzType="close" *ngIf="mode==='closeable' && !disabled" tabindex="-1" (click)="closeTag($event)"></i>
  `, changeDetection: ChangeDetectionStrategy.OnPush, encapsulation: ViewEncapsulation.None, host: {
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
                }, styles: [".cmacs-tag{background-color:#fff;font-size:12px;font-style:normal;font-stretch:normal;line-height:.9;letter-spacing:normal;border-radius:2px;border:solid 1px #dee0e5;padding:5px 8px!important;height:22px;font-weight:400}.cmacs-tag-status{height:21px;border:solid 1px #cfd3d9;background-color:#f6f7fb;font-size:11px;font-weight:500;line-height:.82;color:#656c79}.cmacs-tag-high-priority{height:20px;background-color:#feedeb;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#f6503c;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-active{color:#2164c9}.cmacs-tag-created{color:#688cda}.cmacs-tag-pre-bid{color:#133a76}.cmacs-tag-archive{color:#647ea5}.cmacs-tag-inactive{color:#97a0ae}.cmacs-tag-warranty{color:#656c79}.cmacs-tag-low-priority{height:20px;background-color:#e5fcf3;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#00ce7d;border-radius:3px;padding:3px 5px!important;border:none}.cmacs-tag-medium-priority{height:20px;background-color:#fff6e1;font-size:11px;font-weight:500;font-style:normal;font-stretch:normal;line-height:1.3;letter-spacing:normal;color:#ffc634;border-radius:3px;padding:3px 5px!important;border:none}.ant-tag .anticon-close:hover{color:#2a7cff}.ant-tag .anticon-close{color:#656c79;margin-right:3px;margin-left:4px}.cmacs-tag-closeable{height:24px;border:solid 1px #dee0e5;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae;border-radius:3px;background-color:#f6f7fb}.ant-tag{padding:0}.cmacs-closeable-inner{padding:3px 10px!important;border-right:1px solid #dee0e5;height:100%;display:inline-block;background-color:#fff}.cmacs-closeable-disabled{padding:3px 10px!important}.cmacs-closeable-disabled{cursor:not-allowed}.cmacs-closeable-disabled:hover{cursor:not-allowed;text-shadow:none;color:#97a0ae;opacity:1}.cmacs-tag-money{height:20px;border-radius:2px;border:none;background-color:#2a7cff26;color:#2a7cff}.cmacs-tag-template{font-family:Roboto-Regular;font-size:11px;font-weight:500;font-stretch:normal;font-style:normal;line-height:1.5;letter-spacing:normal;color:#656c79;border-radius:3px;border:solid 1px #dee0e5;background-color:#fff!important;padding:2px 4px}.cmacs-tag-template div{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:178px}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFnLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy10YWcvdGFnLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBRVQsWUFBWSxFQUNaLEtBQUssRUFJTCxRQUFRLEVBQ1IsTUFBTSxFQUdOLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFpQixNQUFNLDBCQUEwQixDQUFDO0FBRXhFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN2RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7SUFhdkMsNEJBQTJHO0lBQTNCLDZKQUFTLGVBQUEsdUJBQWdCLENBQUEsSUFBQztJQUFDLGlCQUFJOzs7QUE4Qm5ILE1BQU0sT0FBTyxpQkFBaUI7SUFtQjVCLG1CQUFtQjtRQUNqQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssV0FBVyxFQUFFO1lBQzdCLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQzdCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFRCxRQUFRLENBQUMsQ0FBYTtRQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFR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UztvQkFDOUMscUJBQXFCLEVBQUUsZUFBZTtvQkFDdEMsU0FBUyxFQUFFLHVCQUF1QjtvQkFDbEMsbUJBQW1CLEVBQUUsd0ZBQXdGO29CQUM3RywwQkFBMEIsRUFBRSw2Q0FBNkM7b0JBQ3pFLDJCQUEyQixFQUFFLDhDQUE4QztvQkFDM0UsMkJBQTJCLEVBQUUsOENBQThDO29CQUMzRSwyQkFBMkIsRUFBRSw4Q0FBOEM7b0JBQzNFLDRCQUE0QixFQUFFLCtDQUErQztvQkFDN0UsNEJBQTRCLEVBQUUsK0NBQStDO29CQUM3RSxpQ0FBaUMsRUFBRSxtREFBbUQ7b0JBQ3RGLGdDQUFnQyxFQUFFLGtEQUFrRDtvQkFDcEYsbUNBQW1DLEVBQUUscURBQXFEO29CQUMxRix5QkFBeUIsRUFBRSxnQkFBZ0I7b0JBQzNDLDRCQUE0QixFQUFFLG1CQUFtQjtvQkFDakQsMEJBQTBCLEVBQUUsaUJBQWlCO29CQUM3Qyw2QkFBNkIsRUFBRSxzQkFBc0I7b0JBQ3JELHFCQUFxQixFQUFFLGlEQUFpRDtpQkFDekU7O3NCQXdDRSxRQUFRO3dCQWpDRixhQUFhO2tCQUFyQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBRUcsSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ21CLE9BQU87a0JBQS9CLEtBQUs7WUFDYSxPQUFPO2tCQUF6QixNQUFNO1lBQ1ksYUFBYTtrQkFBL0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIFZpZXdFbmNhcHN1bGF0aW9uXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgaXNQcmVzZXRDb2xvciwgTnpQcmVzZXRDb2xvciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9jb2xvcic7XG5pbXBvcnQgeyBCb29sZWFuSW5wdXQgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuZXhwb3J0IHR5cGUgQ21hY3NHcmlkVGFnVHlwZSA9ICdhY3RpdmUnIHwgJ2NyZWF0ZWQnIHwgJ3ByZS1iaWQnIHwgJ2FyY2hpdmUnIHwgJ2luYWN0aXZlJyB8ICd3YXJyYW50eSc7XHJcbmV4cG9ydCB0eXBlIENtYWNzUHJpb3JpdHlUYWdUeXBlID0gJ2hpZ2gnIHwgJ2xvdycgfCAnbWVkaXVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY21hY3MtdGFnJyxcbiAgZXhwb3J0QXM6ICdjbWFjc1RhZycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxkaXYgW2NsYXNzLmNtYWNzLWNsb3NlYWJsZS1pbm5lcl09XCJtb2RlID09PSAnY2xvc2VhYmxlJyAmJiAhZGlzYWJsZWRcIiBbY2xhc3MuY21hY3MtY2xvc2VhYmxlLWRpc2FibGVkXT1cImRpc2FibGVkXCI+XHJcbiAgICAgIDxzcGFuPjxuZy1jb250ZW50PjwvbmctY29udGVudD48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8aSBuei1pY29uIG56VHlwZT1cImNsb3NlXCIgKm5nSWY9XCJtb2RlPT09J2Nsb3NlYWJsZScgJiYgIWRpc2FibGVkXCIgdGFiaW5kZXg9XCItMVwiIChjbGljayk9XCJjbG9zZVRhZygkZXZlbnQpXCI+PC9pPlxuICBgLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICdbc3R5bGUuYmFja2dyb3VuZC1jb2xvcl0nOiBgaXNQcmVzZXRDb2xvciA/ICcnIDogY29sb3JgLFxuICAgICdbY2xhc3NdJzogYGlzUHJlc2V0Q29sb3IgPyAoJ2FudC10YWctJyArIGNvbG9yKSA6ICcnYCxcbiAgICAnW2NsYXNzLmFudC10YWctaGFzLWNvbG9yXSc6IGBjb2xvciAmJiAhaXNQcmVzZXRDb2xvcmAsXG4gICAgJ1tjbGFzcy5hbnQtdGFnLWNoZWNrYWJsZV0nOiBgbW9kZSA9PT0gJ2NoZWNrYWJsZSdgLFxuICAgICdbY2xhc3MuYW50LXRhZy1jaGVja2FibGUtY2hlY2tlZF0nOiBgY2hlY2tlZGAsXG4gICAgJ1tjbGFzcy5hbnQtdGFnLXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXG4gICAgJyhjbGljayknOiAndXBkYXRlQ2hlY2tlZFN0YXR1cygpJyxcbiAgICAnW2NsYXNzLmNtYWNzLXRhZ10nOiBgY21hY3NTdGF0dXNUeXBlIHx8IHRoaXMuY21hY3NQcmlvcml0eVR5cGUgfHwgdGhpcy5jbWFjc0dyaWRUeXBlIHx8IHRoaXMuY21hY3NNb25leVR5cGVgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10YWctYWN0aXZlXSc6IGBjbWFjc0dyaWRUeXBlICYmIGNtYWNzR3JpZFR5cGUgPT09ICdhY3RpdmUnYCxcclxuICAgICdbY2xhc3MuY21hY3MtdGFnLWNyZWF0ZWRdJzogYGNtYWNzR3JpZFR5cGUgJiYgY21hY3NHcmlkVHlwZSA9PT0gJ2NyZWF0ZWQnYCxcclxuICAgICdbY2xhc3MuY21hY3MtdGFnLXByZS1iaWRdJzogYGNtYWNzR3JpZFR5cGUgJiYgY21hY3NHcmlkVHlwZSA9PT0gJ3ByZS1iaWQnYCxcclxuICAgICdbY2xhc3MuY21hY3MtdGFnLWFyY2hpdmVdJzogYGNtYWNzR3JpZFR5cGUgJiYgY21hY3NHcmlkVHlwZSA9PT0gJ2FyY2hpdmUnYCxcclxuICAgICdbY2xhc3MuY21hY3MtdGFnLWluYWN0aXZlXSc6IGBjbWFjc0dyaWRUeXBlICYmIGNtYWNzR3JpZFR5cGUgPT09ICdpbmFjdGl2ZSdgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10YWctd2FycmFudHldJzogYGNtYWNzR3JpZFR5cGUgJiYgY21hY3NHcmlkVHlwZSA9PT0gJ3dhcnJhbnR5J2AsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRhZy1oaWdoLXByaW9yaXR5XSc6IGBjbWFjc1ByaW9yaXR5VHlwZSAmJiBjbWFjc1ByaW9yaXR5VHlwZSA9PT0gJ2hpZ2gnYCxcclxuICAgICdbY2xhc3MuY21hY3MtdGFnLWxvdy1wcmlvcml0eV0nOiBgY21hY3NQcmlvcml0eVR5cGUgJiYgY21hY3NQcmlvcml0eVR5cGUgPT09ICdsb3cnYCxcclxuICAgICdbY2xhc3MuY21hY3MtdGFnLW1lZGl1bS1wcmlvcml0eV0nOiBgY21hY3NQcmlvcml0eVR5cGUgJiYgY21hY3NQcmlvcml0eVR5cGUgPT09ICdtZWRpdW0nYCxcclxuICAgICdbY2xhc3MuY21hY3MtdGFnLW1vbmV5XSc6IGBjbWFjc01vbmV5VHlwZWAsXHJcbiAgICAnW2NsYXNzLmNtYWNzLXRhZy10ZW1wbGF0ZV0nOiBgY21hY3NUZW1wbGF0ZVR5cGVgLFxyXG4gICAgJ1tjbGFzcy5jbWFjcy10YWctc3RhdHVzXSc6IGBjbWFjc1N0YXR1c1R5cGVgLFxuICAgICdbY2xhc3MuY21hY3MtdGFnLWNsb3NlYWJsZV0nOiBgbW9kZSA9PT0gJ2Nsb3NlYWJsZSdgLFxuICAgICdbc3R5bGUuYm9yZGVyLWxlZnRdJzogXCJjbWFjc1RlbXBsYXRlVHlwZSA/ICczcHggc29saWQgJyArIGNvbG9yIDogbnVsbFwiXG4gIH0sXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLXRhZy5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgQ21hY3NUYWdDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcbiAgc3RhdGljIG5nQWNjZXB0SW5wdXRUeXBlX2NoZWNrZWQ6IEJvb2xlYW5JbnB1dDtcbiAgaXNQcmVzZXRDb2xvciA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIGNtYWNzR3JpZFR5cGU6IENtYWNzR3JpZFRhZ1R5cGVcclxuICBASW5wdXQoKSBjbWFjc1ByaW9yaXR5VHlwZTogQ21hY3NQcmlvcml0eVRhZ1R5cGU7XHJcbiAgQElucHV0KCkgY21hY3NTdGF0dXNUeXBlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgY21hY3NNb25leVR5cGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBjbWFjc1RlbXBsYXRlVHlwZSA9IGZhbHNlO1xuICBASW5wdXQoKSBkaXNhYmxlZCA9IGZhbHNlO1xuXG4gIEBJbnB1dCgpIG1vZGU6ICdkZWZhdWx0JyB8ICdjbG9zZWFibGUnIHwgJ2NoZWNrYWJsZScgPSAnZGVmYXVsdCc7XG4gIEBJbnB1dCgpIGNvbG9yPzogc3RyaW5nIHwgTnpQcmVzZXRDb2xvcjtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGNoZWNrZWQgPSBmYWxzZTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IG9uQ2xvc2UgPSBuZXcgRXZlbnRFbWl0dGVyPE1vdXNlRXZlbnQ+KCk7XG4gIEBPdXRwdXQoKSByZWFkb25seSBjaGVja2VkQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICB1cGRhdGVDaGVja2VkU3RhdHVzKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLm1vZGUgPT09ICdjaGVja2FibGUnKSB7XG4gICAgICB0aGlzLmNoZWNrZWQgPSAhdGhpcy5jaGVja2VkO1xuICAgICAgdGhpcy5jaGVja2VkQ2hhbmdlLmVtaXQodGhpcy5jaGVja2VkKTtcbiAgICB9XG4gIH1cblxuICBjbG9zZVRhZyhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgdGhpcy5vbkNsb3NlLmVtaXQoZSk7XG4gICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5yZW5kZXJlci5wYXJlbnROb2RlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KSwgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC10YWcnKTtcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3QgeyBjb2xvciB9ID0gY2hhbmdlcztcbiAgICBpZiAoY29sb3IpIHtcbiAgICAgIGlmICghdGhpcy5jb2xvcikge1xuICAgICAgICB0aGlzLmlzUHJlc2V0Q29sb3IgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuaXNQcmVzZXRDb2xvciA9IGlzUHJlc2V0Q29sb3IodGhpcy5jb2xvcikgfHwgL14oc3VjY2Vzc3xwcm9jZXNzaW5nfGVycm9yfGRlZmF1bHR8d2FybmluZykkLy50ZXN0KHRoaXMuY29sb3IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcbiAgfVxufVxuIl19
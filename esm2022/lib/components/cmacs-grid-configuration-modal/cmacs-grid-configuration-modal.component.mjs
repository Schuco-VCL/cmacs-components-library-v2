import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ngx-cookie-service";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "@angular/common";
import * as i4 from "../cmacs-modal/cmacs-modal.component";
import * as i5 from "../cmacs-moveable-list/cmacs-moveable-list.component";
import * as i6 from "../cmacs-button/cmacs-button.component";
function CmacsGridConfigurationModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function CmacsGridConfigurationModalComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.saveConfig()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("aria-label", ctx_r0.saveBtnLabel);
    i0.ɵɵproperty("type", "primary");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(ctx_r0.saveBtnLabel);
} }
export class CmacsGridConfigurationModalComponent {
    constructor(cookies, cdr, i18n) {
        this.cookies = cookies;
        this.cdr = cdr;
        this.i18n = i18n;
        this.visible = false;
        this.modalTitle = '';
        this.header = '';
        this.saveBtnLabel = '';
        this.cmacsStyle = {};
        this.visibleChange = new EventEmitter();
        this.dataChange = new EventEmitter();
        this.origin = null;
        this.destroy$ = new Subject();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngOnInit() {
        this.origin = JSON.parse(JSON.stringify(this.data));
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            switch (this.i18n.getLocale().locale) {
                case 'de':
                    this.saveBtnLabel = 'Speichern';
                    this.modalTitle = 'Spaltenoptionen';
                    this.header = 'Spaltenoptionen';
                    break;
                case 'en':
                    this.saveBtnLabel = 'Save';
                    this.modalTitle = 'Column Options';
                    this.header = 'Column Options';
                    break;
                case 'ja':
                    this.saveBtnLabel = '保存';
                    this.modalTitle = 'カラムオプション';
                    this.header = 'カラムオプション';
                    break;
                default:
                    this.saveBtnLabel = 'Save';
                    this.modalTitle = 'Column Options';
            }
            this.cdr.markForCheck();
        });
    }
    ngOnChanges(changes) {
        if (changes.visible && changes.visible.currentValue) {
            this.origin = JSON.parse(JSON.stringify(this.data));
        }
    }
    onDataChange($event) {
        this.data.fields = $event;
        this.dataChange.emit(JSON.parse(JSON.stringify(this.data)));
    }
    saveConfig() {
        this.visible = false;
        this.visibleChange.emit(false);
        if (this.getIndexCookie()) {
            this.cookies.set(this.gridID, JSON.stringify(this.data), 365);
        }
    }
    getIndexCookie() {
        return true;
        /*let allowIndexPageCookie = false;
        let consentCookie = this.cookies.get('OptanonConsent');
        if (consentCookie != "") {
          let groupIndex = consentCookie.indexOf('groups=');
          let groups = consentCookie.substring(groupIndex); //will return somethinglike groups=C0002:0,C0001:1
          let functionalGroupIndex = groups.indexOf('C0009:');
          if (functionalGroupIndex != -1) {
            const categoryValue = groups.substring(functionalGroupIndex + 6, functionalGroupIndex + 7);
            if (Number(categoryValue) === 1) {
              allowIndexPageCookie = true;
            }
          }
        }
        return allowIndexPageCookie;*/
    }
    onVisibleChange($event) {
        if (this.getIndexCookie()) {
            this.dataChange.emit(this.origin);
        }
        this.visibleChange.emit($event);
    }
    static { this.ɵfac = function CmacsGridConfigurationModalComponent_Factory(t) { return new (t || CmacsGridConfigurationModalComponent)(i0.ɵɵdirectiveInject(i1.CookieService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzI18nService)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsGridConfigurationModalComponent, selectors: [["cmacs-grid-configuration-modal"]], inputs: { visible: "visible", modalTitle: "modalTitle", header: "header", saveBtnLabel: "saveBtnLabel", cmacsStyle: "cmacsStyle", gridID: "gridID", data: "data" }, outputs: { visibleChange: "visibleChange", dataChange: "dataChange" }, exportAs: ["cmacsGridConfigurationModal"], features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 8, consts: [["modalType", "interaction", 3, "visible", "title", "width", "zIndex", "cmacsStyle", "visibleChange"], [2, "padding", "10px 10px 60px 10px"], [3, "header", "data", "dataChange"], ["style", "margin-top: 20px; float: right", "cmacs-button", "", "role", "button", 3, "type", "aria-label", "click", 4, "ngIf"], ["cmacs-button", "", "role", "button", 2, "margin-top", "20px", "float", "right", 3, "type", "aria-label", "click"]], template: function CmacsGridConfigurationModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "cmacs-modal", 0);
            i0.ɵɵlistener("visibleChange", function CmacsGridConfigurationModalComponent_Template_cmacs_modal_visibleChange_0_listener($event) { return ctx.visible = $event; })("visibleChange", function CmacsGridConfigurationModalComponent_Template_cmacs_modal_visibleChange_0_listener($event) { return ctx.onVisibleChange($event); });
            i0.ɵɵelementStart(1, "div", 1)(2, "cmacs-moveable-list", 2);
            i0.ɵɵlistener("dataChange", function CmacsGridConfigurationModalComponent_Template_cmacs_moveable_list_dataChange_2_listener($event) { return ctx.data.fields = $event; })("dataChange", function CmacsGridConfigurationModalComponent_Template_cmacs_moveable_list_dataChange_2_listener($event) { return ctx.onDataChange($event); });
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(3, CmacsGridConfigurationModalComponent_button_3_Template, 2, 3, "button", 3);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵproperty("visible", ctx.visible)("title", ctx.modalTitle)("width", "570px")("zIndex", 10000)("cmacsStyle", ctx.cmacsStyle);
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("header", ctx.header)("data", ctx.data.fields);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngIf", ctx.getIndexCookie());
        } }, dependencies: [i3.NgIf, i4.CmacsModalComponent, i5.CmacsMoveableListComponent, i6.CmacsButtonComponent], styles: [".cmacs-custom-grid-list[_ngcontent-%COMP%]{max-width:100%;border:solid 1px #dee0e5;display:block;background:#FFFFFF;border-radius:8px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box[_ngcontent-%COMP%]{border-bottom:solid 1px #dee0e5;box-sizing:border-box;background:#FFFFFF;font-size:12px;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;opacity:0}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box[_ngcontent-%COMP%]:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cmacs-custom-grid-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.handler-icon[_ngcontent-%COMP%]{font-size:20px;color:#bec4cd;position:relative;top:2px;cursor:move}.moveable-title[_ngcontent-%COMP%]{padding-left:15px;padding-top:7px}.cmacs-custom-grid-title[_ngcontent-%COMP%]{align-items:flex-start;position:relative;top:7px;color:#97a0ae;padding:0 10px 0 35px}.cmacs-custom-grid-lock[_ngcontent-%COMP%]{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box[_ngcontent-%COMP%]:hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected[_ngcontent-%COMP%]{background-color:#f2f7ff}.cmacs-custom-grid-box-selected[_ngcontent-%COMP%]   .handler-icon[_ngcontent-%COMP%]{color:#656c79}.cmacs-custom-grid-input[_ngcontent-%COMP%]{height:26px;width:371px;position:relative;top:2px;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input[_ngcontent-%COMP%]:focus, .cmacs-custom-grid-input[_ngcontent-%COMP%]:hover{border-color:#2a7cff}.cmacs-custom-hide-show[_ngcontent-%COMP%]{margin-left:auto;font-size:20px;position:relative;top:3px;padding-right:15px;cursor:pointer}[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}"] }); }
}
__decorate([
    InputBoolean()
], CmacsGridConfigurationModalComponent.prototype, "visible", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsGridConfigurationModalComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-grid-configuration-modal', exportAs: 'cmacsGridConfigurationModal', template: "<cmacs-modal\r\n  [(visible)]=\"visible\"\r\n  [title]=\"modalTitle\"\r\n  modalType=\"interaction\"\r\n  [width]=\"'570px'\"\r\n  [zIndex]=\"10000\"\r\n  [cmacsStyle]=\"cmacsStyle\"\r\n  (visibleChange)=\"onVisibleChange($event)\"\r\n>\r\n  <div style=\"padding: 10px 10px 60px 10px;\">\r\n    <cmacs-moveable-list [header]=\"header\"\r\n                         [(data)]=\"data.fields\"\r\n                         (dataChange)=\"onDataChange($event)\"\r\n    >\r\n    </cmacs-moveable-list>\r\n    <button *ngIf=\"getIndexCookie()\" style=\"margin-top: 20px; float: right\" cmacs-button [type]=\"'primary'\" (click)=\"saveConfig()\" role=\"button\" aria-label=\"{{saveBtnLabel}}\">{{saveBtnLabel}}</button>\r\n  </div>\r\n</cmacs-modal>\r\n", styles: [".cmacs-custom-grid-list{max-width:100%;border:solid 1px #dee0e5;display:block;background:#FFFFFF;border-radius:8px;overflow:hidden;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;line-height:1.5;letter-spacing:normal;color:#97a0ae}.cmacs-custom-grid-box{border-bottom:solid 1px #dee0e5;box-sizing:border-box;background:#FFFFFF;font-size:12px;display:flex;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal;color:#656c79;padding:0 10px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f;opacity:0}.cdk-drag-placeholder{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging .cmacs-custom-grid-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.handler-icon{font-size:20px;color:#bec4cd;position:relative;top:2px;cursor:move}.moveable-title{padding-left:15px;padding-top:7px}.cmacs-custom-grid-title{align-items:flex-start;position:relative;top:7px;color:#97a0ae;padding:0 10px 0 35px}.cmacs-custom-grid-lock{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box:hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected{background-color:#f2f7ff}.cmacs-custom-grid-box-selected .handler-icon{color:#656c79}.cmacs-custom-grid-input{height:26px;width:371px;position:relative;top:2px;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input:focus,.cmacs-custom-grid-input:hover{border-color:#2a7cff}.cmacs-custom-hide-show{margin-left:auto;font-size:20px;position:relative;top:3px;padding-right:15px;cursor:pointer}::-webkit-scrollbar{width:6px;height:6px}::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}\n"] }]
    }], function () { return [{ type: i1.CookieService }, { type: i0.ChangeDetectorRef }, { type: i2.NzI18nService }]; }, { visible: [{
            type: Input
        }], modalTitle: [{
            type: Input
        }], header: [{
            type: Input
        }], saveBtnLabel: [{
            type: Input
        }], cmacsStyle: [{
            type: Input
        }], gridID: [{
            type: Input
        }], data: [{
            type: Input
        }], visibleChange: [{
            type: Output
        }], dataChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwvY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwvY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7OztJQ0luRCxpQ0FBMks7SUFBbkUsb0xBQVMsZUFBQSxtQkFBWSxDQUFBLElBQUM7SUFBNkMsWUFBZ0I7SUFBQSxpQkFBUzs7O0lBQXZELDJEQUE2QjtJQUFyRixnQ0FBa0I7SUFBb0UsZUFBZ0I7SUFBaEIseUNBQWdCOztBREkvTCxNQUFNLE9BQU8sb0NBQW9DO0lBZS9DLFlBQW9CLE9BQXNCLEVBQVUsR0FBc0IsRUFBVSxJQUFtQjtRQUFuRixZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlO1FBYjlFLFlBQU8sR0FBRyxL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RXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCxcclxuICBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TW92ZWFibGVMaXN0SXRlbX0gZnJvbSBcIi4uL2NtYWNzLW1vdmVhYmxlLWxpc3QvY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tIFwibmd4LWNvb2tpZS1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NHcmlkQ29uZmlndXJhdGlvbk1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0dyaWRDb25maWd1cmF0aW9uTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBtb2RhbFRpdGxlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHNhdmVCdG5MYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY21hY3NTdHlsZSA9IHt9O1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBvcmlnaW4gPSBudWxsO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZXM6IENvb2tpZVNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQodHJ1ZSk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMub3JpZ2luID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUJ0bkxhYmVsID0gJ1NwZWljaGVybic7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsVGl0bGUgPSAnU3BhbHRlbm9wdGlvbmVuJztcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gJ1NwYWx0ZW5vcHRpb25lbic7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlQnRuTGFiZWwgPSAnU2F2ZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsVGl0bGUgPSAnQ29sdW1uIE9wdGlvbnMnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZWFkZXIgPSAnQ29sdW1uIE9wdGlvbnMnO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2phJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUJ0bkxhYmVsID0gJ+S/neWtmCc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsVGl0bGUgPSAn44Kr44Op44Og44Kq44OX44K344On44OzJztcclxuICAgICAgICAgICAgICAgIHRoaXMuaGVhZGVyID0gJ+OCq+ODqeODoOOCquODl+OCt+ODp+ODsyc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZUJ0bkxhYmVsID0gJ1NhdmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gJ0NvbHVtbiBPcHRpb25zJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XHJcbiAgICBpZiAoY2hhbmdlcy52aXNpYmxlICYmIGNoYW5nZXMudmlzaWJsZS5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgdGhpcy5vcmlnaW4gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25EYXRhQ2hhbmdlKCRldmVudDogTW92ZWFibGVMaXN0SXRlbVtdKSB7XHJcbiAgICB0aGlzLmRhdGEuZmllbGRzID0gJGV2ZW50O1xyXG4gICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQoSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKSk7XHJcbiAgfVxyXG5cclxuICBzYXZlQ29uZmlnKCkge1xyXG4gICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdChmYWxzZSk7XHJcbiAgICBpZiAodGhpcy5nZXRJbmRleENvb2tpZSgpKSB7XHJcbiAgICAgIHRoaXMuY29va2llcy5zZXQodGhpcy5ncmlkSUQsIEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSksIDM2NSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRJbmRleENvb2tpZSgpIHtcclxuICAgIHJldHVybiB0cnVlO1xyXG4gICAgLypsZXQgYWxsb3dJbmRleFBhZ2VDb29raWUgPSBmYWxzZTtcclxuICAgIGxldCBjb25zZW50Q29va2llID0gdGhpcy5jb29raWVzLmdldCgnT3B0YW5vbkNvbnNlbnQnKTtcclxuICAgIGlmIChjb25zZW50Q29va2llICE9IFwiXCIpIHtcclxuICAgICAgbGV0IGdyb3VwSW5kZXggPSBjb25zZW50Q29va2llLmluZGV4T2YoJ2dyb3Vwcz0nKTtcclxuICAgICAgbGV0IGdyb3VwcyA9IGNvbnNlbnRDb29raWUuc3Vic3RyaW5nKGdyb3VwSW5kZXgpOyAvL3dpbGwgcmV0dXJuIHNvbWV0aGluZ2xpa2UgZ3JvdXBzPUMwMDAyOjAsQzAwMDE6MVxyXG4gICAgICBsZXQgZnVuY3Rpb25hbEdyb3VwSW5kZXggPSBncm91cHMuaW5kZXhPZignQzAwMDk6Jyk7XHJcbiAgICAgIGlmIChmdW5jdGlvbmFsR3JvdXBJbmRleCAhPSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5VmFsdWUgPSBncm91cHMuc3Vic3RyaW5nKGZ1bmN0aW9uYWxHcm91cEluZGV4ICsgNiwgZnVuY3Rpb25hbEdyb3VwSW5kZXggKyA3KTtcclxuICAgICAgICBpZiAoTnVtYmVyKGNhdGVnb3J5VmFsdWUpID09PSAxKSB7XHJcbiAgICAgICAgICBhbGxvd0luZGV4UGFnZUNvb2tpZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYWxsb3dJbmRleFBhZ2VDb29raWU7Ki9cclxuICB9XHJcblxyXG4gIG9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmdldEluZGV4Q29va2llKCkpIHtcclxuICAgICAgdGhpcy5kYXRhQ2hhbmdlLmVtaXQodGhpcy5vcmlnaW4pO1xyXG4gICAgfSAgIFxyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoJGV2ZW50KTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxjbWFjcy1tb2RhbFxyXG4gIFsodmlzaWJsZSldPVwidmlzaWJsZVwiXHJcbiAgW3RpdGxlXT1cIm1vZGFsVGl0bGVcIlxyXG4gIG1vZGFsVHlwZT1cImludGVyYWN0aW9uXCJcclxuICBbd2lkdGhdPVwiJzU3MHB4J1wiXHJcbiAgW3pJbmRleF09XCIxMDAwMFwiXHJcbiAgW2NtYWNzU3R5bGVdPVwiY21hY3NTdHlsZVwiXHJcbiAgKHZpc2libGVDaGFuZ2UpPVwib25WaXNpYmxlQ2hhbmdlKCRldmVudClcIlxyXG4+XHJcbiAgPGRpdiBzdHlsZT1cInBhZGRpbmc6IDEwcHggMTBweCA2MHB4IDEwcHg7XCI+XHJcbiAgICA8Y21hY3MtbW92ZWFibGUtbGlzdCBbaGVhZGVyXT1cImhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICBbKGRhdGEpXT1cImRhdGEuZmllbGRzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRhQ2hhbmdlKT1cIm9uRGF0YUNoYW5nZSgkZXZlbnQpXCJcclxuICAgID5cclxuICAgIDwvY21hY3MtbW92ZWFibGUtbGlzdD5cclxuICAgIDxidXR0b24gKm5nSWY9XCJnZXRJbmRleENvb2tpZSgpXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4OyBmbG9hdDogcmlnaHRcIiBjbWFjcy1idXR0b24gW3R5cGVdPVwiJ3ByaW1hcnknXCIgKGNsaWNrKT1cInNhdmVDb25maWcoKVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwie3tzYXZlQnRuTGFiZWx9fVwiPnt7c2F2ZUJ0bkxhYmVsfX08L2J1dHRvbj5cclxuICA8L2Rpdj5cclxuPC9jbWFjcy1tb2RhbD5cclxuIl19
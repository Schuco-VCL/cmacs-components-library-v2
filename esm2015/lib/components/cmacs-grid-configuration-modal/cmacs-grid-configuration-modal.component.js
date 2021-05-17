import { __decorate } from "tslib";
import { Component, EventEmitter, Input, Output, } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
import * as i1 from "ngx-cookie-service";
import * as i2 from "ng-zorro-antd/i18n";
import * as i3 from "../cmacs-modal/cmacs-modal.component";
import * as i4 from "../cmacs-moveable-list/cmacs-moveable-list.component";
import * as i5 from "@angular/common";
import * as i6 from "../cmacs-button/cmacs-button.component";
function CmacsGridConfigurationModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 4);
    i0.ɵɵlistener("click", function CmacsGridConfigurationModalComponent_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.saveConfig(); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
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
        this.destroy$.next();
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
        let allowIndexPageCookie = false;
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
        return allowIndexPageCookie;
    }
    onVisibleChange($event) {
        if (this.getIndexCookie()) {
            this.dataChange.emit(this.origin);
        }
        this.visibleChange.emit($event);
    }
}
CmacsGridConfigurationModalComponent.ɵfac = function CmacsGridConfigurationModalComponent_Factory(t) { return new (t || CmacsGridConfigurationModalComponent)(i0.ɵɵdirectiveInject(i1.CookieService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzI18nService)); };
CmacsGridConfigurationModalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsGridConfigurationModalComponent, selectors: [["cmacs-grid-configuration-modal"]], inputs: { visible: "visible", modalTitle: "modalTitle", header: "header", saveBtnLabel: "saveBtnLabel", cmacsStyle: "cmacsStyle", gridID: "gridID", data: "data" }, outputs: { visibleChange: "visibleChange", dataChange: "dataChange" }, exportAs: ["cmacsGridConfigurationModal"], features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 8, consts: [["modalType", "interaction", 3, "visible", "title", "width", "zIndex", "cmacsStyle", "visibleChange"], [2, "padding", "10px 10px 60px 10px"], [3, "header", "data", "dataChange"], ["style", "margin-top: 20px; float: right", "cmacs-button", "", 3, "type", "click", 4, "ngIf"], ["cmacs-button", "", 2, "margin-top", "20px", "float", "right", 3, "type", "click"]], template: function CmacsGridConfigurationModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cmacs-modal", 0);
        i0.ɵɵlistener("visibleChange", function CmacsGridConfigurationModalComponent_Template_cmacs_modal_visibleChange_0_listener($event) { return ctx.visible = $event; })("visibleChange", function CmacsGridConfigurationModalComponent_Template_cmacs_modal_visibleChange_0_listener($event) { return ctx.onVisibleChange($event); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "cmacs-moveable-list", 2);
        i0.ɵɵlistener("dataChange", function CmacsGridConfigurationModalComponent_Template_cmacs_moveable_list_dataChange_2_listener($event) { return ctx.data.fields = $event; })("dataChange", function CmacsGridConfigurationModalComponent_Template_cmacs_moveable_list_dataChange_2_listener($event) { return ctx.onDataChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CmacsGridConfigurationModalComponent_button_3_Template, 2, 2, "button", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("visible", ctx.visible)("title", ctx.modalTitle)("width", "570px")("zIndex", 10000)("cmacsStyle", ctx.cmacsStyle);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("header", ctx.header)("data", ctx.data.fields);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.getIndexCookie());
    } }, directives: [i3.CmacsModalComponent, i4.CmacsMoveableListComponent, i5.NgIf, i6.CmacsButtonComponent], styles: [".cmacs-custom-grid-list[_ngcontent-%COMP%]{max-width:100%;border:1px solid #dee0e5;display:block;border-radius:4px;overflow:hidden;line-height:1.5;color:#97a0ae}.cmacs-custom-grid-box[_ngcontent-%COMP%], .cmacs-custom-grid-list[_ngcontent-%COMP%]{background:#fff;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal}.cmacs-custom-grid-box[_ngcontent-%COMP%]{border-bottom:1px solid #dee0e5;box-sizing:border-box;display:flex;color:#656c79;padding:0 10px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box[_ngcontent-%COMP%]:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cmacs-custom-grid-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.handler-icon[_ngcontent-%COMP%]{font-size:20px;color:#bec4cd;position:relative;top:2px;cursor:move}.moveable-title[_ngcontent-%COMP%]{padding-left:15px;padding-top:7px}.cmacs-custom-grid-title[_ngcontent-%COMP%]{align-items:flex-start;position:relative;top:7px;color:#97a0ae;padding:0 10px 0 35px}.cmacs-custom-grid-lock[_ngcontent-%COMP%]{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box[_ngcontent-%COMP%]:hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected[_ngcontent-%COMP%]{background-color:#f2f7ff}.cmacs-custom-grid-box-selected[_ngcontent-%COMP%]   .handler-icon[_ngcontent-%COMP%]{color:#656c79}.cmacs-custom-grid-input[_ngcontent-%COMP%]{height:26px;width:371px;position:relative;top:2px;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input[_ngcontent-%COMP%]:focus, .cmacs-custom-grid-input[_ngcontent-%COMP%]:hover{border-color:#2a7cff}.cmacs-custom-hide-show[_ngcontent-%COMP%]{margin-left:auto;font-size:20px;position:relative;top:3px;padding-right:15px;cursor:pointer}[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}"] });
__decorate([
    InputBoolean()
], CmacsGridConfigurationModalComponent.prototype, "visible", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsGridConfigurationModalComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-grid-configuration-modal',
                exportAs: 'cmacsGridConfigurationModal',
                templateUrl: './cmacs-grid-configuration-modal.component.html',
                styleUrls: ['./cmacs-grid-configuration-modal.component.css']
            }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwvY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwvY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7OztJQ0luRCxpQ0FBK0g7SUFBdkIsMk1BQXNCO0lBQUMsWUFBZ0I7SUFBQSxpQkFBUzs7O0lBQW5FLGdDQUFrQjtJQUF3QixlQUFnQjtJQUFoQix5Q0FBZ0I7O0FESW5KLE1BQU0sT0FBTyxvQ0FBb0M7SUFlL0MsWUFBb0IsT0FBc0IsRUFBVSxHQUFzQixFQUFVLElBQW1CO1FBQW5GLFlBQU8sR0FBUCxPQUFPLENBQWU7UUFBVSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUFVLFNBQUksR0FBSixJQUFJLENBQWU7UUFiOUUsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQyxlQUFVLEdBQVcsRUFBRSxDQUFD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ZUFBc0I7UUFBdEIsMkNBQXNCOztBRE1SO0lBQWYsWUFBWSxFQUFFO3FFQUFpQjt1RkFGOUIsb0NBQW9DO2NBTmhELFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0NBQWdDO2dCQUMxQyxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUsaURBQWlEO2dCQUM5RCxTQUFTLEVBQUUsQ0FBQyxnREFBZ0QsQ0FBQzthQUM5RDs0SEFHMEIsT0FBTztrQkFBL0IsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNJLGFBQWE7a0JBQXRCLE1BQU07WUFDRyxVQUFVO2tCQUFuQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LCBPbkNoYW5nZXMsIE9uSW5pdCxcclxuICBPdXRwdXQsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TW92ZWFibGVMaXN0SXRlbX0gZnJvbSBcIi4uL2NtYWNzLW1vdmVhYmxlLWxpc3QvY21hY3MtbW92ZWFibGUtbGlzdC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtDb29raWVTZXJ2aWNlfSBmcm9tIFwibmd4LWNvb2tpZS1zZXJ2aWNlXCI7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3V0aWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwnLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NHcmlkQ29uZmlndXJhdGlvbk1vZGFsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0dyaWRDb25maWd1cmF0aW9uTW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHZpc2libGUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBtb2RhbFRpdGxlOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBoZWFkZXI6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIHNhdmVCdG5MYWJlbDogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgY21hY3NTdHlsZSA9IHt9O1xyXG4gIEBJbnB1dCgpIGdyaWRJRDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIGRhdGE6IGFueTtcclxuICBAT3V0cHV0KCkgdmlzaWJsZUNoYW5nZTogRXZlbnRFbWl0dGVyPGJvb2xlYW4+ID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG4gIEBPdXRwdXQoKSBkYXRhQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG5cclxuICBvcmlnaW4gPSBudWxsO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNvb2tpZXM6IENvb2tpZVNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlKSB7IH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5vcmlnaW4gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpO1xyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgICAgdGhpcy5zYXZlQnRuTGFiZWwgPSAnU3BlaWNoZXJuJztcclxuICAgICAgICAgIHRoaXMubW9kYWxUaXRsZSA9ICdTcGFsdGVub3B0aW9uZW4nO1xyXG4gICAgICAgICAgdGhpcy5oZWFkZXIgPSAnU3BhbHRlbm9wdGlvbmVuJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ2VuJzpcclxuICAgICAgICAgIHRoaXMuc2F2ZUJ0bkxhYmVsID0gJ1NhdmUnO1xyXG4gICAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gJ0NvbHVtbiBPcHRpb25zJztcclxuICAgICAgICAgIHRoaXMuaGVhZGVyID0gJ0NvbHVtbiBPcHRpb25zJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICB0aGlzLnNhdmVCdG5MYWJlbCA9ICdTYXZlJztcclxuICAgICAgICAgIHRoaXMubW9kYWxUaXRsZSA9ICdDb2x1bW4gT3B0aW9ucyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLnZpc2libGUgJiYgY2hhbmdlcy52aXNpYmxlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLm9yaWdpbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkRhdGFDaGFuZ2UoJGV2ZW50OiBNb3ZlYWJsZUxpc3RJdGVtW10pIHtcclxuICAgIHRoaXMuZGF0YS5maWVsZHMgPSAkZXZlbnQ7XHJcbiAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdChKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YSkpKTtcclxuICB9XHJcblxyXG4gIHNhdmVDb25maWcoKSB7XHJcbiAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KGZhbHNlKTtcclxuICAgIGlmICh0aGlzLmdldEluZGV4Q29va2llKCkpIHtcclxuICAgICAgdGhpcy5jb29raWVzLnNldCh0aGlzLmdyaWRJRCwgSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSwgMzY1KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEluZGV4Q29va2llKCkge1xyXG4gICAgbGV0IGFsbG93SW5kZXhQYWdlQ29va2llID0gZmFsc2U7XHJcbiAgICBsZXQgY29uc2VudENvb2tpZSA9IHRoaXMuY29va2llcy5nZXQoJ09wdGFub25Db25zZW50Jyk7XHJcbiAgICBpZiAoY29uc2VudENvb2tpZSAhPSBcIlwiKSB7XHJcbiAgICAgIGxldCBncm91cEluZGV4ID0gY29uc2VudENvb2tpZS5pbmRleE9mKCdncm91cHM9Jyk7XHJcbiAgICAgIGxldCBncm91cHMgPSBjb25zZW50Q29va2llLnN1YnN0cmluZyhncm91cEluZGV4KTsgLy93aWxsIHJldHVybiBzb21ldGhpbmdsaWtlIGdyb3Vwcz1DMDAwMjowLEMwMDAxOjFcclxuICAgICAgbGV0IGZ1bmN0aW9uYWxHcm91cEluZGV4ID0gZ3JvdXBzLmluZGV4T2YoJ0MwMDA5OicpO1xyXG4gICAgICBpZiAoZnVuY3Rpb25hbEdyb3VwSW5kZXggIT0gLTEpIHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeVZhbHVlID0gZ3JvdXBzLnN1YnN0cmluZyhmdW5jdGlvbmFsR3JvdXBJbmRleCArIDYsIGZ1bmN0aW9uYWxHcm91cEluZGV4ICsgNyk7XHJcbiAgICAgICAgaWYgKE51bWJlcihjYXRlZ29yeVZhbHVlKSA9PT0gMSkge1xyXG4gICAgICAgICAgYWxsb3dJbmRleFBhZ2VDb29raWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFsbG93SW5kZXhQYWdlQ29va2llO1xyXG4gIH1cclxuXHJcbiAgb25WaXNpYmxlQ2hhbmdlKCRldmVudCkge1xyXG4gICAgaWYgKHRoaXMuZ2V0SW5kZXhDb29raWUoKSkge1xyXG4gICAgICB0aGlzLmRhdGFDaGFuZ2UuZW1pdCh0aGlzLm9yaWdpbik7XHJcbiAgICB9ICAgXHJcbiAgICB0aGlzLnZpc2libGVDaGFuZ2UuZW1pdCgkZXZlbnQpO1xyXG4gIH1cclxuXHJcbn1cclxuIiwiPGNtYWNzLW1vZGFsXHJcbiAgWyh2aXNpYmxlKV09XCJ2aXNpYmxlXCJcclxuICBbdGl0bGVdPVwibW9kYWxUaXRsZVwiXHJcbiAgbW9kYWxUeXBlPVwiaW50ZXJhY3Rpb25cIlxyXG4gIFt3aWR0aF09XCInNTcwcHgnXCJcclxuICBbekluZGV4XT1cIjEwMDAwXCJcclxuICBbY21hY3NTdHlsZV09XCJjbWFjc1N0eWxlXCJcclxuICAodmlzaWJsZUNoYW5nZSk9XCJvblZpc2libGVDaGFuZ2UoJGV2ZW50KVwiXHJcbj5cclxuICA8ZGl2IHN0eWxlPVwicGFkZGluZzogMTBweCAxMHB4IDYwcHggMTBweDtcIj5cclxuICAgIDxjbWFjcy1tb3ZlYWJsZS1saXN0IFtoZWFkZXJdPVwiaGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIFsoZGF0YSldPVwiZGF0YS5maWVsZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGFDaGFuZ2UpPVwib25EYXRhQ2hhbmdlKCRldmVudClcIlxyXG4gICAgPlxyXG4gICAgPC9jbWFjcy1tb3ZlYWJsZS1saXN0PlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cImdldEluZGV4Q29va2llKClcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDIwcHg7IGZsb2F0OiByaWdodFwiIGNtYWNzLWJ1dHRvbiBbdHlwZV09XCIncHJpbWFyeSdcIiAoY2xpY2spPVwic2F2ZUNvbmZpZygpXCI+e3tzYXZlQnRuTGFiZWx9fTwvYnV0dG9uPlxyXG4gIDwvZGl2PlxyXG48L2NtYWNzLW1vZGFsPlxyXG4iXX0=
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
}
CmacsGridConfigurationModalComponent.ɵfac = function CmacsGridConfigurationModalComponent_Factory(t) { return new (t || CmacsGridConfigurationModalComponent)(i0.ɵɵdirectiveInject(i1.CookieService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i2.NzI18nService)); };
CmacsGridConfigurationModalComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsGridConfigurationModalComponent, selectors: [["cmacs-grid-configuration-modal"]], inputs: { visible: "visible", modalTitle: "modalTitle", header: "header", saveBtnLabel: "saveBtnLabel", cmacsStyle: "cmacsStyle", gridID: "gridID", data: "data" }, outputs: { visibleChange: "visibleChange", dataChange: "dataChange" }, exportAs: ["cmacsGridConfigurationModal"], features: [i0.ɵɵNgOnChangesFeature], decls: 4, vars: 8, consts: [["modalType", "interaction", 3, "visible", "title", "width", "zIndex", "cmacsStyle", "visibleChange"], [2, "padding", "10px 10px 60px 10px"], [3, "header", "data", "dataChange"], ["style", "margin-top: 20px; float: right", "cmacs-button", "", "role", "button", 3, "type", "aria-label", "click", 4, "ngIf"], ["cmacs-button", "", "role", "button", 2, "margin-top", "20px", "float", "right", 3, "type", "aria-label", "click"]], template: function CmacsGridConfigurationModalComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "cmacs-modal", 0);
        i0.ɵɵlistener("visibleChange", function CmacsGridConfigurationModalComponent_Template_cmacs_modal_visibleChange_0_listener($event) { return ctx.visible = $event; })("visibleChange", function CmacsGridConfigurationModalComponent_Template_cmacs_modal_visibleChange_0_listener($event) { return ctx.onVisibleChange($event); });
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "cmacs-moveable-list", 2);
        i0.ɵɵlistener("dataChange", function CmacsGridConfigurationModalComponent_Template_cmacs_moveable_list_dataChange_2_listener($event) { return ctx.data.fields = $event; })("dataChange", function CmacsGridConfigurationModalComponent_Template_cmacs_moveable_list_dataChange_2_listener($event) { return ctx.onDataChange($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(3, CmacsGridConfigurationModalComponent_button_3_Template, 2, 3, "button", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("visible", ctx.visible)("title", ctx.modalTitle)("width", "570px")("zIndex", 10000)("cmacsStyle", ctx.cmacsStyle);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("header", ctx.header)("data", ctx.data.fields);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.getIndexCookie());
    } }, directives: [i3.CmacsModalComponent, i4.CmacsMoveableListComponent, i5.NgIf, i6.CmacsButtonComponent], styles: [".cmacs-custom-grid-list[_ngcontent-%COMP%]{max-width:100%;border:1px solid #dee0e5;display:block;border-radius:8px;overflow:hidden;line-height:1.5;color:#97a0ae}.cmacs-custom-grid-box[_ngcontent-%COMP%], .cmacs-custom-grid-list[_ngcontent-%COMP%]{background:#fff;font-size:12px;font-weight:400;font-style:normal;font-stretch:normal;letter-spacing:normal}.cmacs-custom-grid-box[_ngcontent-%COMP%]{border-bottom:1px solid #dee0e5;box-sizing:border-box;display:flex;color:#656c79;padding:0 10px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12);opacity:0}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:1;border-bottom:1px solid #2a7cff!important}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.cmacs-custom-grid-box[_ngcontent-%COMP%]:last-child{border:none}.cmacs-custom-grid-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .cmacs-custom-grid-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.handler-icon[_ngcontent-%COMP%]{font-size:20px;color:#bec4cd;position:relative;top:2px;cursor:move}.moveable-title[_ngcontent-%COMP%]{padding-left:15px;padding-top:7px}.cmacs-custom-grid-title[_ngcontent-%COMP%]{align-items:flex-start;position:relative;top:7px;color:#97a0ae;padding:0 10px 0 35px}.cmacs-custom-grid-lock[_ngcontent-%COMP%]{margin-left:auto;font-size:20px;padding-right:15px}.cmacs-custom-grid-box[_ngcontent-%COMP%]:hover{background-color:#f6f7fb}.cmacs-custom-grid-box-selected[_ngcontent-%COMP%]{background-color:#f2f7ff}.cmacs-custom-grid-box-selected[_ngcontent-%COMP%]   .handler-icon[_ngcontent-%COMP%]{color:#656c79}.cmacs-custom-grid-input[_ngcontent-%COMP%]{height:26px;width:371px;position:relative;top:2px;padding-left:7px;font-size:12px;margin-left:7px}.cmacs-custom-grid-input[_ngcontent-%COMP%]:focus, .cmacs-custom-grid-input[_ngcontent-%COMP%]:hover{border-color:#2a7cff}.cmacs-custom-hide-show[_ngcontent-%COMP%]{margin-left:auto;font-size:20px;position:relative;top:3px;padding-right:15px;cursor:pointer}[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;height:6px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#cfd3d9;border-radius:10px}[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover{background-color:#bec4cd;border-radius:10px}"] });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwvY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwvY21hY3MtZ3JpZC1jb25maWd1cmF0aW9uLW1vZGFsLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUMzQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7OztJQ0luRCxpQ0FBMks7SUFBbkUsMk1BQXNCO0lBQTZDLFlBQWdCO0lBQUEsaUJBQVM7OztJQUF2RCwyREFBNkI7SUFBckYsZ0NBQWtCO0lBQW9FLGVBQWdCO0lBQWhCLHlDQUFnQjs7QURJL0wsTUFBTSxPQUFPLG9DQUFvQztJQWUvQyxZQUFvQixPQUFzQixFQUFVLEdBQXNCLEVBQVUsSUFBbUI7UUFBbkYsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBZTtRQWI5RSxZQUFPLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLGVBQVUs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LENBQUMsY0FBYyxFQUFFLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7d0hBdEZVLG9DQUFvQzt5RUFBcEMsb0NBQW9DO1FDbkJqRCxzQ0FRQztRQVBDLG9LQUFxQiwrSEFNSiwyQkFBdUIsSUFObkI7UUFRckIsOEJBQTJDO1FBQ3pDLDhDQUdDO1FBRm9CLDBLQUFzQixpSUFDUix3QkFBb0IsSUFEWjtRQUczQyxpQkFBc0I7UUFDdEIsMkZBQW9NO1FBQ3RNLGlCQUFNO1FBQ1IsaUJBQWM7O1FBaEJaLHFDQUFxQix5QkFBQSxrQkFBQSxpQkFBQSw4QkFBQTtRQVNFLGVBQWlCO1FBQWpCLG1DQUFpQix5QkFBQTtRQUs3QixlQUFzQjtRQUF0QiwyQ0FBc0I7O0FETVI7SUFBZixZQUFZLEVBQUU7cUVBQWlCO3VGQUY5QixvQ0FBb0M7Y0FOaEQsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxnQ0FBZ0M7Z0JBQzFDLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSxpREFBaUQ7Z0JBQzlELFNBQVMsRUFBRSxDQUFDLGdEQUFnRCxDQUFDO2FBQzlEOzRIQUcwQixPQUFPO2tCQUEvQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFlBQVk7a0JBQXBCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0ksYUFBYTtrQkFBdEIsTUFBTTtZQUNHLFVBQVU7a0JBQW5CLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LFxyXG4gIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSxcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNb3ZlYWJsZUxpc3RJdGVtfSBmcm9tIFwiLi4vY21hY3MtbW92ZWFibGUtbGlzdC9jbWFjcy1tb3ZlYWJsZS1saXN0LmNvbXBvbmVudFwiO1xyXG5pbXBvcnQge0Nvb2tpZVNlcnZpY2V9IGZyb20gXCJuZ3gtY29va2llLXNlcnZpY2VcIjtcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWdyaWQtY29uZmlndXJhdGlvbi1tb2RhbCcsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0dyaWRDb25maWd1cmF0aW9uTW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1ncmlkLWNvbmZpZ3VyYXRpb24tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWdyaWQtY29uZmlndXJhdGlvbi1tb2RhbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzR3JpZENvbmZpZ3VyYXRpb25Nb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25DaGFuZ2VzLCBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgdmlzaWJsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1vZGFsVGl0bGU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGhlYWRlcjogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgc2F2ZUJ0bkxhYmVsOiBzdHJpbmcgPSAnJztcclxuICBASW5wdXQoKSBjbWFjc1N0eWxlID0ge307XHJcbiAgQElucHV0KCkgZ3JpZElEOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZGF0YTogYW55O1xyXG4gIEBPdXRwdXQoKSB2aXNpYmxlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgQE91dHB1dCgpIGRhdGFDaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIG9yaWdpbiA9IG51bGw7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29va2llczogQ29va2llU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHsgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLm9yaWdpbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSk7XHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUpIHtcclxuICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICB0aGlzLnNhdmVCdG5MYWJlbCA9ICdTcGVpY2hlcm4nO1xyXG4gICAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gJ1NwYWx0ZW5vcHRpb25lbic7XHJcbiAgICAgICAgICB0aGlzLmhlYWRlciA9ICdTcGFsdGVub3B0aW9uZW4nO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnZW4nOlxyXG4gICAgICAgICAgdGhpcy5zYXZlQnRuTGFiZWwgPSAnU2F2ZSc7XHJcbiAgICAgICAgICB0aGlzLm1vZGFsVGl0bGUgPSAnQ29sdW1uIE9wdGlvbnMnO1xyXG4gICAgICAgICAgdGhpcy5oZWFkZXIgPSAnQ29sdW1uIE9wdGlvbnMnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMuc2F2ZUJ0bkxhYmVsID0gJ1NhdmUnO1xyXG4gICAgICAgICAgdGhpcy5tb2RhbFRpdGxlID0gJ0NvbHVtbiBPcHRpb25zJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xyXG4gICAgaWYgKGNoYW5nZXMudmlzaWJsZSAmJiBjaGFuZ2VzLnZpc2libGUuY3VycmVudFZhbHVlKSB7XHJcbiAgICAgIHRoaXMub3JpZ2luID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRGF0YUNoYW5nZSgkZXZlbnQ6IE1vdmVhYmxlTGlzdEl0ZW1bXSkge1xyXG4gICAgdGhpcy5kYXRhLmZpZWxkcyA9ICRldmVudDtcclxuICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhKSkpO1xyXG4gIH1cclxuXHJcbiAgc2F2ZUNvbmZpZygpIHtcclxuICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgdGhpcy52aXNpYmxlQ2hhbmdlLmVtaXQoZmFsc2UpO1xyXG4gICAgaWYgKHRoaXMuZ2V0SW5kZXhDb29raWUoKSkge1xyXG4gICAgICB0aGlzLmNvb2tpZXMuc2V0KHRoaXMuZ3JpZElELCBKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEpLCAzNjUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0SW5kZXhDb29raWUoKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICAgIC8qbGV0IGFsbG93SW5kZXhQYWdlQ29va2llID0gZmFsc2U7XHJcbiAgICBsZXQgY29uc2VudENvb2tpZSA9IHRoaXMuY29va2llcy5nZXQoJ09wdGFub25Db25zZW50Jyk7XHJcbiAgICBpZiAoY29uc2VudENvb2tpZSAhPSBcIlwiKSB7XHJcbiAgICAgIGxldCBncm91cEluZGV4ID0gY29uc2VudENvb2tpZS5pbmRleE9mKCdncm91cHM9Jyk7XHJcbiAgICAgIGxldCBncm91cHMgPSBjb25zZW50Q29va2llLnN1YnN0cmluZyhncm91cEluZGV4KTsgLy93aWxsIHJldHVybiBzb21ldGhpbmdsaWtlIGdyb3Vwcz1DMDAwMjowLEMwMDAxOjFcclxuICAgICAgbGV0IGZ1bmN0aW9uYWxHcm91cEluZGV4ID0gZ3JvdXBzLmluZGV4T2YoJ0MwMDA5OicpO1xyXG4gICAgICBpZiAoZnVuY3Rpb25hbEdyb3VwSW5kZXggIT0gLTEpIHtcclxuICAgICAgICBjb25zdCBjYXRlZ29yeVZhbHVlID0gZ3JvdXBzLnN1YnN0cmluZyhmdW5jdGlvbmFsR3JvdXBJbmRleCArIDYsIGZ1bmN0aW9uYWxHcm91cEluZGV4ICsgNyk7XHJcbiAgICAgICAgaWYgKE51bWJlcihjYXRlZ29yeVZhbHVlKSA9PT0gMSkge1xyXG4gICAgICAgICAgYWxsb3dJbmRleFBhZ2VDb29raWUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFsbG93SW5kZXhQYWdlQ29va2llOyovXHJcbiAgfVxyXG5cclxuICBvblZpc2libGVDaGFuZ2UoJGV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5nZXRJbmRleENvb2tpZSgpKSB7XHJcbiAgICAgIHRoaXMuZGF0YUNoYW5nZS5lbWl0KHRoaXMub3JpZ2luKTtcclxuICAgIH0gICBcclxuICAgIHRoaXMudmlzaWJsZUNoYW5nZS5lbWl0KCRldmVudCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8Y21hY3MtbW9kYWxcclxuICBbKHZpc2libGUpXT1cInZpc2libGVcIlxyXG4gIFt0aXRsZV09XCJtb2RhbFRpdGxlXCJcclxuICBtb2RhbFR5cGU9XCJpbnRlcmFjdGlvblwiXHJcbiAgW3dpZHRoXT1cIic1NzBweCdcIlxyXG4gIFt6SW5kZXhdPVwiMTAwMDBcIlxyXG4gIFtjbWFjc1N0eWxlXT1cImNtYWNzU3R5bGVcIlxyXG4gICh2aXNpYmxlQ2hhbmdlKT1cIm9uVmlzaWJsZUNoYW5nZSgkZXZlbnQpXCJcclxuPlxyXG4gIDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAxMHB4IDEwcHggNjBweCAxMHB4O1wiPlxyXG4gICAgPGNtYWNzLW1vdmVhYmxlLWxpc3QgW2hlYWRlcl09XCJoZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgWyhkYXRhKV09XCJkYXRhLmZpZWxkc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0YUNoYW5nZSk9XCJvbkRhdGFDaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICA+XHJcbiAgICA8L2NtYWNzLW1vdmVhYmxlLWxpc3Q+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiZ2V0SW5kZXhDb29raWUoKVwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDsgZmxvYXQ6IHJpZ2h0XCIgY21hY3MtYnV0dG9uIFt0eXBlXT1cIidwcmltYXJ5J1wiIChjbGljayk9XCJzYXZlQ29uZmlnKClcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cInt7c2F2ZUJ0bkxhYmVsfX1cIj57e3NhdmVCdG5MYWJlbH19PC9idXR0b24+XHJcbiAgPC9kaXY+XHJcbjwvY21hY3MtbW9kYWw+XHJcbiJdfQ==
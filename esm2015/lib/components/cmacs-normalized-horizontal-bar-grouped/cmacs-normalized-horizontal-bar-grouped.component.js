import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "../core/services/util.service";
import * as i2 from "ng-zorro-antd/grid";
import * as i3 from "@angular/common";
import * as i4 from "../cmacs-select/cmacs-select.component";
import * as i5 from "@angular/forms";
import * as i6 from "../cmacs-select/cmacs-option.component";
function CmacsNormalizedHorizontalBarGroupedComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵelement(1, "span", 10);
    i0.ɵɵelementStart(2, "span", 11);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const l_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵstyleProp("background-color", ctx_r0.colorScheme.domain[i_r3]);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(l_r2);
} }
function CmacsNormalizedHorizontalBarGroupedComponent_cmacs_option_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "cmacs-option", 12);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", item_r4);
    i0.ɵɵpropertyInterpolate("label", item_r4);
} }
export class CmacsNormalizedHorizontalBarGroupedComponent {
    constructor(util) {
        this.util = util;
        this.clickMenu = new EventEmitter();
        // otpions
        this.colorScheme = {
            domain: ['#00CE7D', '#FFC634', '#F6503C']
        };
        // chart
        this.chartWidth = 250;
        this.chartHeight = 100;
        this.minWidth = 300;
        this.minHeight = 200;
        this.pw = 1;
        this.ph = 1;
        this.id = util.uuidv4();
    }
    ngOnInit() {
        // set legend values
        let temp = [];
        this.data.map(d => d.series.map(x => x.name)).forEach((x) => temp = [...temp, ...x]);
        this.legend = Array.from(new Set([...temp]));
        // set select data
        this.selectList = this.data.map(x => x.name);
        if (this.selectList.length > 0) {
            this.selectedValue = this.selectList[0];
        }
    }
    ngOnChanges() {
        this.pw = 1;
        if (this.view && this.view.length === 2) {
            this.pw = this.view[0] > this.minWidth ? this.view[0] / this.minWidth : 1;
        }
        this.ph = 1;
        if (this.view && this.view.length === 2) {
            this.ph = this.view[1] > this.minHeight ? this.view[1] / this.minHeight : 1;
        }
        //
        setTimeout(() => {
            this.drawCanvas();
        }, 0);
    }
    menuClick(type) {
        this.clickMenu.emit(type);
    }
    drawCanvas() {
        const canvas = document.getElementById('canvas-' + this.id);
        if (canvas.getContext) {
            const context = canvas.getContext('2d');
            canvas.width = this.chartWidth * this.pw;
            canvas.height = this.chartHeight * this.ph;
            context.clearRect(0, 0, canvas.width, canvas.height);
            if (this.selectedValue) {
                const elems = this.data.find(x => x.name === this.selectedValue).series.sort((a, b) => this.legend.findIndex(y => y === a.name) - this.legend.findIndex(y => y === b.name));
                const total = elems.map(x => x.value).reduce((a, b) => a + b, 0);
                let move = 0;
                for (let i = 0; i < elems.length; i++) {
                    context.beginPath();
                    context.moveTo(move, canvas.height / 2);
                    context.lineWidth = 8;
                    const val = elems[i].value;
                    move += val / total * canvas.width;
                    context.strokeStyle = this.colorScheme.domain[i];
                    context.lineTo(move - 5, canvas.height / 2);
                    context.stroke();
                }
            }
        }
    }
}
CmacsNormalizedHorizontalBarGroupedComponent.ɵfac = function CmacsNormalizedHorizontalBarGroupedComponent_Factory(t) { return new (t || CmacsNormalizedHorizontalBarGroupedComponent)(i0.ɵɵdirectiveInject(i1.UtilService)); };
CmacsNormalizedHorizontalBarGroupedComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsNormalizedHorizontalBarGroupedComponent, selectors: [["cmacs-normalized-horizontal-bar-grouped"]], inputs: { data: "data", colorScheme: "colorScheme", view: "view" }, outputs: { clickMenu: "clickMenu" }, features: [i0.ɵɵNgOnChangesFeature], decls: 9, vars: 4, consts: [[1, "sd-content"], ["nz-row", "", 1, "legend-row"], ["class", "legend-column", 4, "ngFor", "ngForOf"], ["nz-row", "", 1, "chart-content"], ["nz-row", "", 1, "chart-content-canvas"], [1, "chart-canvas", 3, "id"], ["nz-row", "", 1, "chart-select"], [2, "width", "120px", 3, "ngModel", "ngModelChange"], [3, "value", "label", 4, "ngFor", "ngForOf"], [1, "legend-column"], [1, "legend-bar"], [1, "legend-text"], [3, "value", "label"]], template: function CmacsNormalizedHorizontalBarGroupedComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵtemplate(2, CmacsNormalizedHorizontalBarGroupedComponent_div_2_Template, 4, 3, "div", 2);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵelementStart(4, "div", 4);
        i0.ɵɵelement(5, "canvas", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(6, "div", 6);
        i0.ɵɵelementStart(7, "cmacs-select", 7);
        i0.ɵɵlistener("ngModelChange", function CmacsNormalizedHorizontalBarGroupedComponent_Template_cmacs_select_ngModelChange_7_listener($event) { return ctx.selectedValue = $event; })("ngModelChange", function CmacsNormalizedHorizontalBarGroupedComponent_Template_cmacs_select_ngModelChange_7_listener() { return ctx.drawCanvas(); });
        i0.ɵɵtemplate(8, CmacsNormalizedHorizontalBarGroupedComponent_cmacs_option_8_Template, 1, 2, "cmacs-option", 8);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.legend);
        i0.ɵɵadvance(3);
        i0.ɵɵpropertyInterpolate1("id", "canvas-", ctx.id, "");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngModel", ctx.selectedValue);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngForOf", ctx.selectList);
    } }, directives: [i2.NzRowDirective, i3.NgForOf, i4.CmacsSelectComponent, i5.NgControlStatus, i5.NgModel, i6.CmacsOptionComponent], styles: [".legend-column[_ngcontent-%COMP%]{display:table-cell;float:left;font-family:Roboto-Regular;font-size:12px;color:#656c79}.legend-text[_ngcontent-%COMP%]{padding-left:6px;padding-right:20px}.legend-column[_ngcontent-%COMP%]:last-child   .legend-text[_ngcontent-%COMP%]{padding-right:0}.legend-bar[_ngcontent-%COMP%]{width:4px;height:10px;border-radius:5px;display:inline-block}.legend-row[_ngcontent-%COMP%]{width:100%;display:flex;place-content:flex-end}.chart-content-canvas[_ngcontent-%COMP%]{text-align:center;width:100%}  .chart-select .ant-select-selection,   .chart-select .ant-select-selection:focus,   .chart-select .ant-select-selection:hover{border:0;background-color:transparent!important}  .sd-content .ant-row{position:relative;height:auto;margin-right:0;margin-left:0;zoom:1;display:block;box-sizing:border-box}"], changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsNormalizedHorizontalBarGroupedComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-normalized-horizontal-bar-grouped',
                templateUrl: './cmacs-normalized-horizontal-bar-grouped.component.html',
                styleUrls: ['./cmacs-normalized-horizontal-bar-grouped.component.css'],
                changeDetection: ChangeDetectionStrategy.OnPush
            }]
    }], function () { return [{ type: i1.UtilService }]; }, { clickMenu: [{
            type: Output
        }], data: [{
            type: Input
        }], colorScheme: [{
            type: Input
        }], view: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWdyb3VwZWQvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWdyb3VwZWQvY21hY3Mtbm9ybWFsaXplZC1ob3Jpem9udGFsLWJhci1ncm91cGVkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFpQix1QkFBdUIsRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFhLE1BQU0sZUFBZSxDQUFDOzs7Ozs7Ozs7SUNHOUgsOEJBQW9FO0lBQ2xFLDJCQUFrRjtJQUNsRixnQ0FBMEI7SUFBQSxZQUFLO0lBQUEsaUJBQU87SUFDeEMsaUJBQU07Ozs7O0lBRkUsZUFBZ0Q7SUFBaEQsbUVBQWdEO0lBQzVCLGVBQUs7SUFBTCwwQkFBSzs7O0lBVTdCLG1DQUFtRzs7O0lBQXJELDBDQUFrQjtJQUFDLDBDQUFrQjs7QURKM0YsTUFBTSxPQUFPLDRDQUE0QztJQTJCdkQsWUFDVSxJQUFpQjtRQUFqQixTQUFJLEdBQUosSUFBSSxDQUFhO1FBMUJqQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUs5QyxVQUFVO1FBQ0QsZ0JBQVcsR0FBRztZQUNyQixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztTQUMx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Q0FBQyxNQUFNO2FBQ2hEOzhEQUdXLFNBQVM7a0JBQWxCLE1BQU07WUFHRSxJQUFJO2tCQUFaLEtBQUs7WUFHRyxXQUFXO2tCQUFuQixLQUFLO1lBaUJHLElBQUk7a0JBQVosS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgQWZ0ZXJWaWV3SW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2hhcnREYXRhTXVsdGkgfSBmcm9tICcuLi9jb3JlL2ludGVyZmFjZXMvY2hhcnQtZGF0YS1pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBVdGlsU2VydmljZSB9IGZyb20gJy4uL2NvcmUvc2VydmljZXMvdXRpbC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2lkZ2V0QWN0aW9uVHlwZSB9IGZyb20gJy4uL2NvcmUvZW51bXMvd2lkZ2V0LWFjdGlvbi10eXBlLmVudW0nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWdyb3VwZWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1ub3JtYWxpemVkLWhvcml6b250YWwtYmFyLWdyb3VwZWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW5vcm1hbGl6ZWQtaG9yaXpvbnRhbC1iYXItZ3JvdXBlZC5jb21wb25lbnQuY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTm9ybWFsaXplZEhvcml6b250YWxCYXJHcm91cGVkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG5cclxuICBAT3V0cHV0KCkgY2xpY2tNZW51ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcblxyXG4gIC8vIGNvbnRlbnRcclxuICBASW5wdXQoKSBkYXRhITogQ2hhcnREYXRhTXVsdGlbXTtcclxuXHJcbiAgLy8gb3RwaW9uc1xyXG4gIEBJbnB1dCgpIGNvbG9yU2NoZW1lID0ge1xyXG4gICAgZG9tYWluOiBbJyMwMENFN0QnLCAnI0ZGQzYzNCcsICcjRjY1MDNDJ11cclxuICB9O1xyXG5cclxuICBpZDtcclxuXHJcbiAgbGVnZW5kITogc3RyaW5nW107XHJcbiAgc2VsZWN0TGlzdDogc3RyaW5nW107XHJcbiAgc2VsZWN0ZWRWYWx1ZSE6IHN0cmluZztcclxuXHJcbiAgLy8gY2hhcnRcclxuICBjaGFydFdpZHRoID0gMjUwO1xyXG4gIGNoYXJ0SGVpZ2h0ID0gMTAwO1xyXG4gIG1pbldpZHRoID0gMzAwO1xyXG4gIG1pbkhlaWdodCA9IDIwMDtcclxuICBwdyA9IDE7XHJcbiAgcGggPSAxO1xyXG4gIEBJbnB1dCgpIHZpZXchOiBudW1iZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHV0aWw6IFV0aWxTZXJ2aWNlXHJcbiAgKSB7XHJcbiAgICB0aGlzLmlkID0gdXRpbC51dWlkdjQoKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gc2V0IGxlZ2VuZCB2YWx1ZXNcclxuICAgIGxldCB0ZW1wOiBhbnlbXSA9IFtdO1xyXG4gICAgdGhpcy5kYXRhLm1hcChkID0+IGQuc2VyaWVzLm1hcCh4ID0+IHgubmFtZSkpLmZvckVhY2goKHgpID0+IHRlbXAgPSBbLi4udGVtcCwgLi4ueF0pO1xyXG4gICAgdGhpcy5sZWdlbmQgID0gQXJyYXkuZnJvbShuZXcgU2V0KFsuLi50ZW1wXSkpO1xyXG5cclxuICAgIC8vIHNldCBzZWxlY3QgZGF0YVxyXG4gICAgdGhpcy5zZWxlY3RMaXN0ID0gdGhpcy5kYXRhLm1hcCh4ID0+IHgubmFtZSk7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdGhpcy5zZWxlY3RMaXN0WzBdO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoKSB7XHJcbiAgICB0aGlzLnB3ID0gMTtcclxuICAgIGlmICh0aGlzLnZpZXcgJiYgdGhpcy52aWV3Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICB0aGlzLnB3ID0gdGhpcy52aWV3WzBdID4gdGhpcy5taW5XaWR0aCA/IHRoaXMudmlld1swXSAvIHRoaXMubWluV2lkdGggOiAxO1xyXG4gICAgfVxyXG4gICAgdGhpcy5waCA9IDE7XHJcbiAgICBpZiAodGhpcy52aWV3ICYmIHRoaXMudmlldy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgdGhpcy5waCA9IHRoaXMudmlld1sxXSA+IHRoaXMubWluSGVpZ2h0ID8gdGhpcy52aWV3WzFdIC8gdGhpcy5taW5IZWlnaHQgOiAxO1xyXG4gICAgfVxyXG4gICAgLy9cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmRyYXdDYW52YXMoKTtcclxuICAgIH0sIDApO1xyXG4gIH1cclxuXHJcbiAgbWVudUNsaWNrKHR5cGU6IFdpZGdldEFjdGlvblR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xpY2tNZW51LmVtaXQodHlwZSk7XHJcbiAgfVxyXG5cclxuICBkcmF3Q2FudmFzKCk6IHZvaWQge1xyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcy0nICsgdGhpcy5pZCkgIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgaWYgKGNhbnZhcy5nZXRDb250ZXh0KSB7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgICAgY2FudmFzLndpZHRoID0gdGhpcy5jaGFydFdpZHRoICogdGhpcy5wdztcclxuICAgICAgY2FudmFzLmhlaWdodCA9IHRoaXMuY2hhcnRIZWlnaHQgKiB0aGlzLnBoO1xyXG5cclxuICAgICAgY29udGV4dC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IGVsZW1zID0gdGhpcy5kYXRhLmZpbmQoeCA9PiB4Lm5hbWUgPT09IHRoaXMuc2VsZWN0ZWRWYWx1ZSkuc2VyaWVzLnNvcnQoKGEsIGIpID0+XHJcbiAgICAgICAgICB0aGlzLmxlZ2VuZC5maW5kSW5kZXgoeSA9PiB5ID09PSBhLm5hbWUpIC0gdGhpcy5sZWdlbmQuZmluZEluZGV4KHkgPT4geSA9PT0gYi5uYW1lKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY29uc3QgdG90YWwgPSBlbGVtcy5tYXAoeCA9PiB4LnZhbHVlKS5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiLCAwKTtcclxuICAgICAgICBsZXQgbW92ZSA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgIGNvbnRleHQubW92ZVRvKG1vdmUsIGNhbnZhcy5oZWlnaHQgLyAyKTtcclxuICAgICAgICAgIGNvbnRleHQubGluZVdpZHRoID0gODtcclxuICAgICAgICAgIGNvbnN0IHZhbCA9IGVsZW1zW2ldLnZhbHVlO1xyXG4gICAgICAgICAgbW92ZSArPSB2YWwgLyB0b3RhbCAqIGNhbnZhcy53aWR0aDtcclxuICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yU2NoZW1lLmRvbWFpbltpXTtcclxuICAgICAgICAgIGNvbnRleHQubGluZVRvKG1vdmUgLSA1LCBjYW52YXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwic2QtY29udGVudFwiPlxyXG4gIDwhLS0gTGVnZW5kIC0tPlxyXG4gIDxkaXYgbnotcm93IGNsYXNzPVwibGVnZW5kLXJvd1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImxlZ2VuZC1jb2x1bW5cIiAqbmdGb3I9XCJsZXQgbCBvZiBsZWdlbmQ7IGxldCBpID0gaW5kZXg7XCI+XHJcbiAgICAgIDxzcGFuIFtzdHlsZS5iYWNrZ3JvdW5kLWNvbG9yXT1cImNvbG9yU2NoZW1lLmRvbWFpbltpXVwiIGNsYXNzPVwibGVnZW5kLWJhclwiPiA8L3NwYW4+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibGVnZW5kLXRleHRcIj57e2x9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gIDwhLS0gQ2hhcnQgLS0+XHJcbiAgPGRpdiBuei1yb3cgY2xhc3M9XCJjaGFydC1jb250ZW50XCI+XHJcbiAgICA8ZGl2IG56LXJvdyBjbGFzcz1cImNoYXJ0LWNvbnRlbnQtY2FudmFzXCI+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJjYW52YXMte3tpZH19XCIgY2xhc3M9XCJjaGFydC1jYW52YXNcIj48L2NhbnZhcz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBuei1yb3cgY2xhc3M9XCJjaGFydC1zZWxlY3RcIj5cclxuICAgICAgPGNtYWNzLXNlbGVjdCBzdHlsZT1cIndpZHRoOiAxMjBweDtcIiBbKG5nTW9kZWwpXT1cInNlbGVjdGVkVmFsdWVcIiAobmdNb2RlbENoYW5nZSk9XCJkcmF3Q2FudmFzKClcIj5cclxuICAgICAgICA8Y21hY3Mtb3B0aW9uICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNlbGVjdExpc3RcIiB2YWx1ZT1cInt7IGl0ZW0gfX1cIiBsYWJlbD1cInt7IGl0ZW0gfX1cIj48L2NtYWNzLW9wdGlvbj5cclxuICAgICAgPC9jbWFjcy1zZWxlY3Q+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9kaXY+Il19
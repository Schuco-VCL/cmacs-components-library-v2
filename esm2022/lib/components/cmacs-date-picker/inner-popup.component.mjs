import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { PREFIX_CLASS } from './util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./lib/date-header.component";
import * as i3 from "./lib/date-table.component";
import * as i4 from "./lib/decade-header.component";
import * as i5 from "./lib/decade-table.component";
import * as i6 from "./lib/month-header.component";
import * as i7 from "./lib/month-table.component";
import * as i8 from "./lib/year-header.component";
import * as i9 from "./lib/year-table.component";
import * as i10 from "ng-zorro-antd/time-picker";
import * as i11 from "@angular/forms";
function InnerPopupComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "decade-header", 4);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r5.activeDate = $event); })("panelModeChange", function InnerPopupComponent_ng_container_3_Template_decade_header_panelModeChange_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r7.panelModeChange.emit($event)); })("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r8.headerChange.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div")(3, "decade-table", 5);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_table_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r9 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r9.onChooseDecade($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r0.activeDate)("locale", ctx_r0.locale)("showSuperPreBtn", ctx_r0.enablePrevNext("prev", "decade"))("showSuperNextBtn", ctx_r0.enablePrevNext("next", "decade"))("showNextBtn", false)("showPreBtn", false);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r0.prefixCls, "-body");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("activeDate", ctx_r0.activeDate)("value", ctx_r0.value)("locale", ctx_r0.locale)("disabledDate", ctx_r0.disabledDate);
} }
function InnerPopupComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "year-header", 4);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r10.activeDate = $event); })("panelModeChange", function InnerPopupComponent_ng_container_4_Template_year_header_panelModeChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r12.panelModeChange.emit($event)); })("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r13.headerChange.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div")(3, "year-table", 6);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_4_Template_year_table_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r14 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r14.onChooseYear($event)); })("cellHover", function InnerPopupComponent_ng_container_4_Template_year_table_cellHover_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r15 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r15.cellHover.emit($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r1.activeDate)("locale", ctx_r1.locale)("showSuperPreBtn", ctx_r1.enablePrevNext("prev", "year"))("showSuperNextBtn", ctx_r1.enablePrevNext("next", "year"))("showNextBtn", false)("showPreBtn", false);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r1.prefixCls, "-body");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("activeDate", ctx_r1.activeDate)("value", ctx_r1.value)("locale", ctx_r1.locale)("disabledDate", ctx_r1.disabledDate)("selectedValue", ctx_r1.selectedValue)("hoverValue", ctx_r1.hoverValue);
} }
function InnerPopupComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "month-header", 4);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r16.activeDate = $event); })("panelModeChange", function InnerPopupComponent_ng_container_5_Template_month_header_panelModeChange_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r18.panelModeChange.emit($event)); })("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r19 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r19.headerChange.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div")(3, "month-table", 7);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_5_Template_month_table_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r20 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r20.onChooseMonth($event)); })("cellHover", function InnerPopupComponent_ng_container_5_Template_month_table_cellHover_3_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r21 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r21.cellHover.emit($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r2.activeDate)("locale", ctx_r2.locale)("showSuperPreBtn", ctx_r2.enablePrevNext("prev", "month"))("showSuperNextBtn", ctx_r2.enablePrevNext("next", "month"))("showNextBtn", false)("showPreBtn", false);
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r2.prefixCls, "-body");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r2.value)("activeDate", ctx_r2.activeDate)("locale", ctx_r2.locale)("disabledDate", ctx_r2.disabledDate)("selectedValue", ctx_r2.selectedValue)("hoverValue", ctx_r2.hoverValue);
} }
function InnerPopupComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "date-header", 8);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r22.activeDate = $event); })("panelModeChange", function InnerPopupComponent_ng_container_6_Template_date_header_panelModeChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r24.panelModeChange.emit($event)); })("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r25 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r25.headerChange.emit($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div")(3, "date-table", 9);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_6_Template_date_table_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r26 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r26.onSelectDate($event)); })("cellHover", function InnerPopupComponent_ng_container_6_Template_date_table_cellHover_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r27 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r27.cellHover.emit($event)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("value", ctx_r3.activeDate)("locale", ctx_r3.locale)("showSuperPreBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("prev", "week") : ctx_r3.enablePrevNext("prev", "date"))("showSuperNextBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("next", "week") : ctx_r3.enablePrevNext("next", "date"))("showPreBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("prev", "week") : ctx_r3.enablePrevNext("prev", "date"))("showNextBtn", ctx_r3.showWeek ? ctx_r3.enablePrevNext("next", "week") : ctx_r3.enablePrevNext("next", "date"));
    i0.ɵɵadvance(1);
    i0.ɵɵclassMapInterpolate1("", ctx_r3.prefixCls, "-body");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("locale", ctx_r3.locale)("showWeek", ctx_r3.showWeek)("showWeekCustom", ctx_r3.showWeekCustom)("value", ctx_r3.value)("activeDate", ctx_r3.activeDate)("disabledDate", ctx_r3.disabledDate)("cellRender", ctx_r3.dateRender)("selectedValue", ctx_r3.selectedValue)("hoverValue", ctx_r3.hoverValue);
} }
function InnerPopupComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "nz-time-picker-panel", 10);
    i0.ɵɵlistener("ngModelChange", function InnerPopupComponent_ng_container_7_Template_nz_time_picker_panel_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r28.onSelectTime($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzInDatePicker", true)("ngModel", ctx_r4.value == null ? null : ctx_r4.value.nativeDate)("format", ctx_r4.timeOptions.nzFormat)("nzHourStep", ctx_r4.timeOptions.nzHourStep)("nzMinuteStep", ctx_r4.timeOptions.nzMinuteStep)("nzSecondStep", ctx_r4.timeOptions.nzSecondStep)("nzDisabledHours", ctx_r4.timeOptions.nzDisabledHours)("nzDisabledMinutes", ctx_r4.timeOptions.nzDisabledMinutes)("nzDisabledSeconds", ctx_r4.timeOptions.nzDisabledSeconds)("nzHideDisabledOptions", !!ctx_r4.timeOptions.nzHideDisabledOptions)("nzDefaultOpenValue", ctx_r4.timeOptions.nzDefaultOpenValue)("nzUse12Hours", !!ctx_r4.timeOptions.nzUse12Hours)("nzAddOn", ctx_r4.timeOptions.nzAddOn);
} }
export class InnerPopupComponent {
    constructor() {
        this.panelModeChange = new EventEmitter();
        // TODO: name is not proper
        this.headerChange = new EventEmitter(); // Emitted when user changed the header's value
        this.selectDate = new EventEmitter(); // Emitted when the date is selected by click the date panel
        this.selectTime = new EventEmitter();
        this.cellHover = new EventEmitter(); // Emitted when hover on a day by mouse enter
        this.prefixCls = PREFIX_CLASS;
    }
    /**
     * Hide "next" arrow in left panel,
     * hide "prev" arrow in right panel
     * @param direction
     * @param panelMode
     */
    enablePrevNext(direction, panelMode) {
        if (!this.showTimePicker &&
            panelMode === this.endPanelMode &&
            ((this.partType === 'left' && direction === 'next') || (this.partType === 'right' && direction === 'prev'))) {
            return false;
        }
        return true;
    }
    onSelectTime(date) {
        this.selectTime.emit(new CandyDate(date));
    }
    // The value real changed to outside
    onSelectDate(date) {
        const value = date instanceof CandyDate ? date : new CandyDate(date);
        const timeValue = this.timeOptions && this.timeOptions.nzDefaultOpenValue;
        // Display timeValue when value is null
        if (!this.value && timeValue) {
            value.setHms(timeValue.getHours(), timeValue.getMinutes(), timeValue.getSeconds());
        }
        this.selectDate.emit(value);
    }
    onChooseMonth(value) {
        this.activeDate = this.activeDate.setMonth(value.getMonth());
        if (this.endPanelMode === 'month') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit(this.endPanelMode);
        }
    }
    onChooseYear(value) {
        this.activeDate = this.activeDate.setYear(value.getYear());
        if (this.endPanelMode === 'year') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit(this.endPanelMode);
        }
    }
    onChooseDecade(value) {
        this.activeDate = this.activeDate.setYear(value.getYear());
        if (this.endPanelMode === 'decade') {
            this.value = value;
            this.selectDate.emit(value);
        }
        else {
            this.headerChange.emit(value);
            this.panelModeChange.emit('year');
        }
    }
    ngOnChanges(changes) {
        if (changes.activeDate && !changes.activeDate.currentValue) {
            this.activeDate = new CandyDate();
        }
        // New Antd vesion has merged 'date' ant 'time' to one panel,
        // So there is not 'time' panel
        if (changes.panelMode && changes.panelMode.currentValue === 'time') {
            this.panelMode = 'date';
        }
    }
    static { this.ɵfac = function InnerPopupComponent_Factory(t) { return new (t || InnerPopupComponent)(); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: InnerPopupComponent, selectors: [["inner-popup"]], inputs: { activeDate: "activeDate", endPanelMode: "endPanelMode", panelMode: "panelMode", showWeek: "showWeek", showWeekCustom: "showWeekCustom", locale: "locale", showTimePicker: "showTimePicker", timeOptions: "timeOptions", disabledDate: "disabledDate", dateRender: "dateRender", selectedValue: "selectedValue", hoverValue: "hoverValue", value: "value", partType: "partType" }, outputs: { panelModeChange: "panelModeChange", headerChange: "headerChange", selectDate: "selectDate", selectTime: "selectTime", cellHover: "cellHover" }, exportAs: ["innerPopup"], features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 11, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngIf"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showNextBtn", "showPreBtn", "valueChange", "panelModeChange"], [3, "activeDate", "value", "locale", "disabledDate", "valueChange"], [3, "activeDate", "value", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "activeDate", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showPreBtn", "showNextBtn", "valueChange", "panelModeChange"], [3, "locale", "showWeek", "showWeekCustom", "value", "activeDate", "disabledDate", "cellRender", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn", "ngModelChange"]], template: function InnerPopupComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "div");
            i0.ɵɵelementContainerStart(2, 0);
            i0.ɵɵtemplate(3, InnerPopupComponent_ng_container_3_Template, 4, 13, "ng-container", 1);
            i0.ɵɵtemplate(4, InnerPopupComponent_ng_container_4_Template, 4, 15, "ng-container", 1);
            i0.ɵɵtemplate(5, InnerPopupComponent_ng_container_5_Template, 4, 15, "ng-container", 1);
            i0.ɵɵtemplate(6, InnerPopupComponent_ng_container_6_Template, 4, 18, "ng-container", 2);
            i0.ɵɵelementContainerEnd();
            i0.ɵɵelementEnd();
            i0.ɵɵtemplate(7, InnerPopupComponent_ng_container_7_Template, 2, 13, "ng-container", 3);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassProp("ant-picker-datetime-panel", ctx.showTimePicker);
            i0.ɵɵadvance(1);
            i0.ɵɵclassMapInterpolate2("", ctx.prefixCls, "-", ctx.panelMode, "-panel");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitch", ctx.panelMode);
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "decade");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "year");
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngSwitchCase", "month");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.showTimePicker && ctx.timeOptions);
        } }, dependencies: [i1.NgIf, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i2.DateHeaderComponent, i3.DateTableComponent, i4.DecadeHeaderComponent, i5.DecadeTableComponent, i6.MonthHeaderComponent, i7.MonthTableComponent, i8.YearHeaderComponent, i9.YearTableComponent, i10.NzTimePickerPanelComponent, i11.NgControlStatus, i11.NgModel], encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InnerPopupComponent, [{
        type: Component,
        args: [{
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line:component-selector
                selector: 'inner-popup',
                exportAs: 'innerPopup',
                template: `
    <div [class.ant-picker-datetime-panel]="showTimePicker">
      <div class="{{ prefixCls }}-{{ panelMode }}-panel">
        <ng-container [ngSwitch]="panelMode">
          <ng-container *ngSwitchCase="'decade'">
            <decade-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'decade')"
              [showSuperNextBtn]="enablePrevNext('next', 'decade')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></decade-header>
            <div class="{{ prefixCls }}-body">
              <decade-table
                [activeDate]="activeDate"
                [value]="value"
                [locale]="locale"
                (valueChange)="onChooseDecade($event)"
                [disabledDate]="disabledDate"
              ></decade-table>
            </div>
          </ng-container>
          <ng-container *ngSwitchCase="'year'">
            <year-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'year')"
              [showSuperNextBtn]="enablePrevNext('next', 'year')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></year-header>
            <div class="{{ prefixCls }}-body">
              <year-table
                [activeDate]="activeDate"
                [value]="value"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseYear($event)"
                (cellHover)="cellHover.emit($event)"
              ></year-table>
            </div>
          </ng-container>
          <ng-container *ngSwitchCase="'month'">
            <month-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="enablePrevNext('prev', 'month')"
              [showSuperNextBtn]="enablePrevNext('next', 'month')"
              [showNextBtn]="false"
              [showPreBtn]="false"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></month-header>
            <div class="{{ prefixCls }}-body">
              <month-table
                [value]="value"
                [activeDate]="activeDate"
                [locale]="locale"
                [disabledDate]="disabledDate"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onChooseMonth($event)"
                (cellHover)="cellHover.emit($event)"
              ></month-table>
            </div>
          </ng-container>

          <ng-container *ngSwitchDefault>
            <date-header
              [(value)]="activeDate"
              [locale]="locale"
              [showSuperPreBtn]="showWeek ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')"
              [showSuperNextBtn]="showWeek ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')"
              [showPreBtn]="showWeek ? enablePrevNext('prev', 'week') : enablePrevNext('prev', 'date')"
              [showNextBtn]="showWeek ? enablePrevNext('next', 'week') : enablePrevNext('next', 'date')"
              (panelModeChange)="panelModeChange.emit($event)"
              (valueChange)="headerChange.emit($event)"
            ></date-header>
            <div class="{{ prefixCls }}-body">
              <date-table
                [locale]="locale"
                [showWeek]="showWeek"
                [showWeekCustom]="showWeekCustom"
                [value]="value"
                [activeDate]="activeDate"
                [disabledDate]="disabledDate"
                [cellRender]="dateRender"
                [selectedValue]="selectedValue"
                [hoverValue]="hoverValue"
                (valueChange)="onSelectDate($event)"
                (cellHover)="cellHover.emit($event)"
              ></date-table>
            </div>
          </ng-container>
        </ng-container>
      </div>
      <ng-container *ngIf="showTimePicker && timeOptions">
        <nz-time-picker-panel
          [nzInDatePicker]="true"
          [ngModel]="value?.nativeDate"
          (ngModelChange)="onSelectTime($event)"
          [format]="$any(timeOptions.nzFormat)"
          [nzHourStep]="$any(timeOptions.nzHourStep)"
          [nzMinuteStep]="$any(timeOptions.nzMinuteStep)"
          [nzSecondStep]="$any(timeOptions.nzSecondStep)"
          [nzDisabledHours]="$any(timeOptions.nzDisabledHours)"
          [nzDisabledMinutes]="$any(timeOptions.nzDisabledMinutes)"
          [nzDisabledSeconds]="$any(timeOptions.nzDisabledSeconds)"
          [nzHideDisabledOptions]="!!timeOptions.nzHideDisabledOptions"
          [nzDefaultOpenValue]="$any(timeOptions.nzDefaultOpenValue)"
          [nzUse12Hours]="!!timeOptions.nzUse12Hours"
          [nzAddOn]="$any(timeOptions.nzAddOn)"
        ></nz-time-picker-panel>
        <!-- use [opened] to trigger time panel \`initPosition()\` -->
      </ng-container>
    </div>
  `
            }]
    }], null, { activeDate: [{
            type: Input
        }], endPanelMode: [{
            type: Input
        }], panelMode: [{
            type: Input
        }], showWeek: [{
            type: Input
        }], showWeekCustom: [{
            type: Input
        }], locale: [{
            type: Input
        }], showTimePicker: [{
            type: Input
        }], timeOptions: [{
            type: Input
        }], disabledDate: [{
            type: Input
        }], dateRender: [{
            type: Input
        }], selectedValue: [{
            type: Input
        }], hoverValue: [{
            type: Input
        }], value: [{
            type: Input
        }], partType: [{
            type: Input
        }], panelModeChange: [{
            type: Output
        }], headerChange: [{
            type: Output
        }], selectDate: [{
            type: Output
        }], selectTime: [{
            type: Output
        }], cellHover: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2lubmVyLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQVk1Qiw2QkFBdUM7SUFDckMsd0NBU0M7SUFSQyxnUEFBc0IsNkxBTUgsZUFBQSxtQ0FBNEIsQ0FBQSxJQU56QixxTEFPUCxlQUFBLGdDQUF5QixDQUFBLElBUGxCO0lBUXZCLGlCQUFnQjtJQUNqQiwyQkFBa0Msc0JBQUE7SUFLOUIsaU1BQWUsZUFBQSw2QkFBc0IsQ0FBQSxJQUFDO0lBRXZDLGlCQUFlLEVBQUE7SUFFcEIsMEJBQWU7OztJQWxCWCxlQUFzQjtJQUF0Qix5Q0FBc0IseUJBQUEsNERBQUEsNkRBQUEsc0JBQUEscUJBQUE7SUFTbkIsZUFBNEI7SUFBNUIsd0RBQTRCO0lBRTdCLGVBQXlCO0lBQXpCLDhDQUF5Qix1QkFBQSx5QkFBQSxxQ0FBQTs7OztJQVEvQiw2QkFBcUM7SUFDbkMsc0NBU0M7SUFSQyxpUEFBc0IsNkxBTUgsZUFBQSxvQ0FBNEIsQ0FBQSxJQU56QixxTEFPUCxlQUFBLGlDQUF5QixDQUFBLElBUGxCO0lBUXZCLGlCQUFjO0lBQ2YsMkJBQWtDLG9CQUFBO0lBUTlCLGlNQUFlLGVBQUEsNEJBQW9CLENBQUEsSUFBQyxnTEFDdkIsZUFBQSw4QkFB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LEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ0csUUFBUTtrQkFBaEIsS0FBSztZQUVhLGVBQWU7a0JBQWpDLE1BQU07WUFFWSxZQUFZO2tCQUE5QixNQUFNO1lBQ1ksVUFBVTtrQkFBNUIsTUFBTTtZQUNZLFVBQVU7a0JBQTVCLE1BQU07WUFDWSxTQUFTO2tCQUEzQixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRXZlbnRFbWl0dGVyLFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xyXG5pbXBvcnQgeyBGdW5jdGlvblByb3AgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IERpc2FibGVkRGF0ZUZuLCBOekRhdGVNb2RlLCBSYW5nZVBhcnRUeXBlLCBTdXBwb3J0VGltZU9wdGlvbnMgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcclxuaW1wb3J0IHsgUFJFRklYX0NMQVNTIH0gZnJvbSAnLi91dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmNvbXBvbmVudC1zZWxlY3RvclxyXG4gIHNlbGVjdG9yOiAnaW5uZXItcG9wdXAnLFxyXG4gIGV4cG9ydEFzOiAnaW5uZXJQb3B1cCcsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxkaXYgW2NsYXNzLmFudC1waWNrZXItZGF0ZXRpbWUtcGFuZWxdPVwic2hvd1RpbWVQaWNrZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS17eyBwYW5lbE1vZGUgfX0tcGFuZWxcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJwYW5lbE1vZGVcIj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidkZWNhZGUnXCI+XHJcbiAgICAgICAgICAgIDxkZWNhZGUtaGVhZGVyXHJcbiAgICAgICAgICAgICAgWyh2YWx1ZSldPVwiYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxyXG4gICAgICAgICAgICAgIFtzaG93U3VwZXJQcmVCdG5dPVwiZW5hYmxlUHJldk5leHQoJ3ByZXYnLCAnZGVjYWRlJylcIlxyXG4gICAgICAgICAgICAgIFtzaG93U3VwZXJOZXh0QnRuXT1cImVuYWJsZVByZXZOZXh0KCduZXh0JywgJ2RlY2FkZScpXCJcclxuICAgICAgICAgICAgICBbc2hvd05leHRCdG5dPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgIFtzaG93UHJlQnRuXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAocGFuZWxNb2RlQ2hhbmdlKT1cInBhbmVsTW9kZUNoYW5nZS5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJoZWFkZXJDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvZGVjYWRlLWhlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGRlY2FkZS10YWJsZVxyXG4gICAgICAgICAgICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxyXG4gICAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uQ2hvb3NlRGVjYWRlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxyXG4gICAgICAgICAgICAgID48L2RlY2FkZS10YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIid5ZWFyJ1wiPlxyXG4gICAgICAgICAgICA8eWVhci1oZWFkZXJcclxuICAgICAgICAgICAgICBbKHZhbHVlKV09XCJhY3RpdmVEYXRlXCJcclxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlclByZUJ0bl09XCJlbmFibGVQcmV2TmV4dCgncHJldicsICd5ZWFyJylcIlxyXG4gICAgICAgICAgICAgIFtzaG93U3VwZXJOZXh0QnRuXT1cImVuYWJsZVByZXZOZXh0KCduZXh0JywgJ3llYXInKVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dOZXh0QnRuXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICBbc2hvd1ByZUJ0bl09XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgKHBhbmVsTW9kZUNoYW5nZSk9XCJwYW5lbE1vZGVDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwiaGVhZGVyQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgID48L3llYXItaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWJvZHlcIj5cclxuICAgICAgICAgICAgICA8eWVhci10YWJsZVxyXG4gICAgICAgICAgICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxyXG4gICAgICAgICAgICAgICAgW3NlbGVjdGVkVmFsdWVdPVwic2VsZWN0ZWRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbaG92ZXJWYWx1ZV09XCJob3ZlclZhbHVlXCJcclxuICAgICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvbkNob29zZVllYXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAoY2VsbEhvdmVyKT1cImNlbGxIb3Zlci5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgID48L3llYXItdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbW9udGgnXCI+XHJcbiAgICAgICAgICAgIDxtb250aC1oZWFkZXJcclxuICAgICAgICAgICAgICBbKHZhbHVlKV09XCJhY3RpdmVEYXRlXCJcclxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlclByZUJ0bl09XCJlbmFibGVQcmV2TmV4dCgncHJldicsICdtb250aCcpXCJcclxuICAgICAgICAgICAgICBbc2hvd1N1cGVyTmV4dEJ0bl09XCJlbmFibGVQcmV2TmV4dCgnbmV4dCcsICdtb250aCcpXCJcclxuICAgICAgICAgICAgICBbc2hvd05leHRCdG5dPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgIFtzaG93UHJlQnRuXT1cImZhbHNlXCJcclxuICAgICAgICAgICAgICAocGFuZWxNb2RlQ2hhbmdlKT1cInBhbmVsTW9kZUNoYW5nZS5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJoZWFkZXJDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgPjwvbW9udGgtaGVhZGVyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWJvZHlcIj5cclxuICAgICAgICAgICAgICA8bW9udGgtdGFibGVcclxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbYWN0aXZlRGF0ZV09XCJhY3RpdmVEYXRlXCJcclxuICAgICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcclxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZERhdGVdPVwiZGlzYWJsZWREYXRlXCJcclxuICAgICAgICAgICAgICAgIFtzZWxlY3RlZFZhbHVlXT1cInNlbGVjdGVkVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW2hvdmVyVmFsdWVdPVwiaG92ZXJWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwib25DaG9vc2VNb250aCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIChjZWxsSG92ZXIpPVwiY2VsbEhvdmVyLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgPjwvbW9udGgtdGFibGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgICAgICA8ZGF0ZS1oZWFkZXJcclxuICAgICAgICAgICAgICBbKHZhbHVlKV09XCJhY3RpdmVEYXRlXCJcclxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlclByZUJ0bl09XCJzaG93V2VlayA/IGVuYWJsZVByZXZOZXh0KCdwcmV2JywgJ3dlZWsnKSA6IGVuYWJsZVByZXZOZXh0KCdwcmV2JywgJ2RhdGUnKVwiXHJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlck5leHRCdG5dPVwic2hvd1dlZWsgPyBlbmFibGVQcmV2TmV4dCgnbmV4dCcsICd3ZWVrJykgOiBlbmFibGVQcmV2TmV4dCgnbmV4dCcsICdkYXRlJylcIlxyXG4gICAgICAgICAgICAgIFtzaG93UHJlQnRuXT1cInNob3dXZWVrID8gZW5hYmxlUHJldk5leHQoJ3ByZXYnLCAnd2VlaycpIDogZW5hYmxlUHJldk5leHQoJ3ByZXYnLCAnZGF0ZScpXCJcclxuICAgICAgICAgICAgICBbc2hvd05leHRCdG5dPVwic2hvd1dlZWsgPyBlbmFibGVQcmV2TmV4dCgnbmV4dCcsICd3ZWVrJykgOiBlbmFibGVQcmV2TmV4dCgnbmV4dCcsICdkYXRlJylcIlxyXG4gICAgICAgICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwicGFuZWxNb2RlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cImhlYWRlckNoYW5nZS5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICA+PC9kYXRlLWhlYWRlcj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1ib2R5XCI+XHJcbiAgICAgICAgICAgICAgPGRhdGUtdGFibGVcclxuICAgICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcclxuICAgICAgICAgICAgICAgIFtzaG93V2Vla109XCJzaG93V2Vla1wiXHJcbiAgICAgICAgICAgICAgICBbc2hvd1dlZWtDdXN0b21dPVwic2hvd1dlZWtDdXN0b21cIlxyXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFthY3RpdmVEYXRlXT1cImFjdGl2ZURhdGVcIlxyXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxyXG4gICAgICAgICAgICAgICAgW2NlbGxSZW5kZXJdPVwiZGF0ZVJlbmRlclwiXHJcbiAgICAgICAgICAgICAgICBbc2VsZWN0ZWRWYWx1ZV09XCJzZWxlY3RlZFZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFtob3ZlclZhbHVlXT1cImhvdmVyVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uU2VsZWN0RGF0ZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIChjZWxsSG92ZXIpPVwiY2VsbEhvdmVyLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgPjwvZGF0ZS10YWJsZT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93VGltZVBpY2tlciAmJiB0aW1lT3B0aW9uc1wiPlxyXG4gICAgICAgIDxuei10aW1lLXBpY2tlci1wYW5lbFxyXG4gICAgICAgICAgW256SW5EYXRlUGlja2VyXT1cInRydWVcIlxyXG4gICAgICAgICAgW25nTW9kZWxdPVwidmFsdWU/Lm5hdGl2ZURhdGVcIlxyXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25TZWxlY3RUaW1lKCRldmVudClcIlxyXG4gICAgICAgICAgW2Zvcm1hdF09XCIkYW55KHRpbWVPcHRpb25zLm56Rm9ybWF0KVwiXHJcbiAgICAgICAgICBbbnpIb3VyU3RlcF09XCIkYW55KHRpbWVPcHRpb25zLm56SG91clN0ZXApXCJcclxuICAgICAgICAgIFtuek1pbnV0ZVN0ZXBdPVwiJGFueSh0aW1lT3B0aW9ucy5uek1pbnV0ZVN0ZXApXCJcclxuICAgICAgICAgIFtuelNlY29uZFN0ZXBdPVwiJGFueSh0aW1lT3B0aW9ucy5uelNlY29uZFN0ZXApXCJcclxuICAgICAgICAgIFtuekRpc2FibGVkSG91cnNdPVwiJGFueSh0aW1lT3B0aW9ucy5uekRpc2FibGVkSG91cnMpXCJcclxuICAgICAgICAgIFtuekRpc2FibGVkTWludXRlc109XCIkYW55KHRpbWVPcHRpb25zLm56RGlzYWJsZWRNaW51dGVzKVwiXHJcbiAgICAgICAgICBbbnpEaXNhYmxlZFNlY29uZHNdPVwiJGFueSh0aW1lT3B0aW9ucy5uekRpc2FibGVkU2Vjb25kcylcIlxyXG4gICAgICAgICAgW256SGlkZURpc2FibGVkT3B0aW9uc109XCIhIXRpbWVPcHRpb25zLm56SGlkZURpc2FibGVkT3B0aW9uc1wiXHJcbiAgICAgICAgICBbbnpEZWZhdWx0T3BlblZhbHVlXT1cIiRhbnkodGltZU9wdGlvbnMubnpEZWZhdWx0T3BlblZhbHVlKVwiXHJcbiAgICAgICAgICBbbnpVc2UxMkhvdXJzXT1cIiEhdGltZU9wdGlvbnMubnpVc2UxMkhvdXJzXCJcclxuICAgICAgICAgIFtuekFkZE9uXT1cIiRhbnkodGltZU9wdGlvbnMubnpBZGRPbilcIlxyXG4gICAgICAgID48L256LXRpbWUtcGlja2VyLXBhbmVsPlxyXG4gICAgICAgIDwhLS0gdXNlIFtvcGVuZWRdIHRvIHRyaWdnZXIgdGltZSBwYW5lbCBcXGBpbml0UG9zaXRpb24oKVxcYCAtLT5cclxuICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L2Rpdj5cclxuICBgXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbm5lclBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSBhY3RpdmVEYXRlITogQ2FuZHlEYXRlO1xyXG4gIEBJbnB1dCgpIGVuZFBhbmVsTW9kZSE6IE56RGF0ZU1vZGU7XHJcbiAgQElucHV0KCkgcGFuZWxNb2RlITogTnpEYXRlTW9kZTtcclxuICBASW5wdXQoKSBzaG93V2VlayE6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgc2hvd1dlZWtDdXN0b20hOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIHNob3dUaW1lUGlja2VyITogYm9vbGVhbjtcclxuICBASW5wdXQoKSB0aW1lT3B0aW9ucyE6IFN1cHBvcnRUaW1lT3B0aW9ucyB8IG51bGw7XHJcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlPzogRGlzYWJsZWREYXRlRm47XHJcbiAgQElucHV0KCkgZGF0ZVJlbmRlcj86IHN0cmluZyB8IFRlbXBsYXRlUmVmPERhdGU+IHwgRnVuY3Rpb25Qcm9wPFRlbXBsYXRlUmVmPERhdGU+IHwgc3RyaW5nPjtcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlITogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuICBASW5wdXQoKSBob3ZlclZhbHVlITogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcclxuICBASW5wdXQoKSB2YWx1ZSE6IENhbmR5RGF0ZTtcclxuICBASW5wdXQoKSBwYXJ0VHlwZSE6IFJhbmdlUGFydFR5cGU7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBwYW5lbE1vZGVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPE56RGF0ZU1vZGU+KCk7XHJcbiAgLy8gVE9ETzogbmFtZSBpcyBub3QgcHJvcGVyXHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGhlYWRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdXNlciBjaGFuZ2VkIHRoZSBoZWFkZXIncyB2YWx1ZVxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3REYXRlID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7IC8vIEVtaXR0ZWQgd2hlbiB0aGUgZGF0ZSBpcyBzZWxlY3RlZCBieSBjbGljayB0aGUgZGF0ZSBwYW5lbFxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBzZWxlY3RUaW1lID0gbmV3IEV2ZW50RW1pdHRlcjxDYW5keURhdGU+KCk7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNlbGxIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gaG92ZXIgb24gYSBkYXkgYnkgbW91c2UgZW50ZXJcclxuXHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSBQUkVGSVhfQ0xBU1M7XHJcblxyXG4gIC8qKlxyXG4gICAqIEhpZGUgXCJuZXh0XCIgYXJyb3cgaW4gbGVmdCBwYW5lbCxcclxuICAgKiBoaWRlIFwicHJldlwiIGFycm93IGluIHJpZ2h0IHBhbmVsXHJcbiAgICogQHBhcmFtIGRpcmVjdGlvblxyXG4gICAqIEBwYXJhbSBwYW5lbE1vZGVcclxuICAgKi9cclxuICBlbmFibGVQcmV2TmV4dChkaXJlY3Rpb246ICdwcmV2JyB8ICduZXh0JywgcGFuZWxNb2RlOiBOekRhdGVNb2RlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICF0aGlzLnNob3dUaW1lUGlja2VyICYmXHJcbiAgICAgIHBhbmVsTW9kZSA9PT0gdGhpcy5lbmRQYW5lbE1vZGUgJiZcclxuICAgICAgKCh0aGlzLnBhcnRUeXBlID09PSAnbGVmdCcgJiYgZGlyZWN0aW9uID09PSAnbmV4dCcpIHx8ICh0aGlzLnBhcnRUeXBlID09PSAncmlnaHQnICYmIGRpcmVjdGlvbiA9PT0gJ3ByZXYnKSlcclxuICAgICkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIG9uU2VsZWN0VGltZShkYXRlOiBEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLnNlbGVjdFRpbWUuZW1pdChuZXcgQ2FuZHlEYXRlKGRhdGUpKTtcclxuICB9XHJcblxyXG4gIC8vIFRoZSB2YWx1ZSByZWFsIGNoYW5nZWQgdG8gb3V0c2lkZVxyXG4gIG9uU2VsZWN0RGF0ZShkYXRlOiBDYW5keURhdGUgfCBEYXRlKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlIDogbmV3IENhbmR5RGF0ZShkYXRlKTtcclxuICAgIGNvbnN0IHRpbWVWYWx1ZSA9IHRoaXMudGltZU9wdGlvbnMgJiYgdGhpcy50aW1lT3B0aW9ucy5uekRlZmF1bHRPcGVuVmFsdWU7XHJcblxyXG4gICAgLy8gRGlzcGxheSB0aW1lVmFsdWUgd2hlbiB2YWx1ZSBpcyBudWxsXHJcbiAgICBpZiAoIXRoaXMudmFsdWUgJiYgdGltZVZhbHVlKSB7XHJcbiAgICAgIHZhbHVlLnNldEhtcyh0aW1lVmFsdWUuZ2V0SG91cnMoKSwgdGltZVZhbHVlLmdldE1pbnV0ZXMoKSwgdGltZVZhbHVlLmdldFNlY29uZHMoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZWxlY3REYXRlLmVtaXQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgb25DaG9vc2VNb250aCh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0TW9udGgodmFsdWUuZ2V0TW9udGgoKSk7XHJcbiAgICBpZiAodGhpcy5lbmRQYW5lbE1vZGUgPT09ICdtb250aCcpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhlYWRlckNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLmVuZFBhbmVsTW9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNob29zZVllYXIodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5hY3RpdmVEYXRlLnNldFllYXIodmFsdWUuZ2V0WWVhcigpKTtcclxuICAgIGlmICh0aGlzLmVuZFBhbmVsTW9kZSA9PT0gJ3llYXInKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy5zZWxlY3REYXRlLmVtaXQodmFsdWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oZWFkZXJDaGFuZ2UuZW1pdCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQodGhpcy5lbmRQYW5lbE1vZGUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DaG9vc2VEZWNhZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgdGhpcy5hY3RpdmVEYXRlID0gdGhpcy5hY3RpdmVEYXRlLnNldFllYXIodmFsdWUuZ2V0WWVhcigpKTtcclxuICAgIGlmICh0aGlzLmVuZFBhbmVsTW9kZSA9PT0gJ2RlY2FkZScpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmhlYWRlckNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCgneWVhcicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMuYWN0aXZlRGF0ZSAmJiAhY2hhbmdlcy5hY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmFjdGl2ZURhdGUgPSBuZXcgQ2FuZHlEYXRlKCk7XHJcbiAgICB9XHJcbiAgICAvLyBOZXcgQW50ZCB2ZXNpb24gaGFzIG1lcmdlZCAnZGF0ZScgYW50ICd0aW1lJyB0byBvbmUgcGFuZWwsXHJcbiAgICAvLyBTbyB0aGVyZSBpcyBub3QgJ3RpbWUnIHBhbmVsXHJcbiAgICBpZiAoY2hhbmdlcy5wYW5lbE1vZGUgJiYgY2hhbmdlcy5wYW5lbE1vZGUuY3VycmVudFZhbHVlID09PSAndGltZScpIHtcclxuICAgICAgdGhpcy5wYW5lbE1vZGUgPSAnZGF0ZSc7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==
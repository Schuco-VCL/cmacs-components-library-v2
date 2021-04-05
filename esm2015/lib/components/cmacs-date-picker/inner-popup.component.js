import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import { PREFIX_CLASS } from './util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "./lib/decade-header.component";
import * as i3 from "./lib/decade-table.component";
import * as i4 from "./lib/year-header.component";
import * as i5 from "./lib/year-table.component";
import * as i6 from "./lib/month-header.component";
import * as i7 from "./lib/month-table.component";
import * as i8 from "./lib/date-header.component";
import * as i9 from "./lib/date-table.component";
import * as i10 from "ng-zorro-antd/time-picker";
import * as i11 from "@angular/forms";
function InnerPopupComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "decade-header", 4);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_3_Template_decade_header_panelModeChange_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.headerChange.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "decade-table", 5);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_3_Template_decade_table_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r9 = i0.ɵɵnextContext(); return ctx_r9.onChooseDecade($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_4_Template_year_header_panelModeChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_4_Template_year_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.headerChange.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "year-table", 6);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_4_Template_year_table_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r14 = i0.ɵɵnextContext(); return ctx_r14.onChooseYear($event); })("cellHover", function InnerPopupComponent_ng_container_4_Template_year_table_cellHover_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.cellHover.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_5_Template_month_header_panelModeChange_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r18 = i0.ɵɵnextContext(); return ctx_r18.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_5_Template_month_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r19 = i0.ɵɵnextContext(); return ctx_r19.headerChange.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "month-table", 7);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_5_Template_month_table_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r20 = i0.ɵɵnextContext(); return ctx_r20.onChooseMonth($event); })("cellHover", function InnerPopupComponent_ng_container_5_Template_month_table_cellHover_3_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r21 = i0.ɵɵnextContext(); return ctx_r21.cellHover.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r22 = i0.ɵɵnextContext(); return ctx_r22.activeDate = $event; })("panelModeChange", function InnerPopupComponent_ng_container_6_Template_date_header_panelModeChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r24 = i0.ɵɵnextContext(); return ctx_r24.panelModeChange.emit($event); })("valueChange", function InnerPopupComponent_ng_container_6_Template_date_header_valueChange_1_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r25 = i0.ɵɵnextContext(); return ctx_r25.headerChange.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵelementStart(3, "date-table", 9);
    i0.ɵɵlistener("valueChange", function InnerPopupComponent_ng_container_6_Template_date_table_valueChange_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r26 = i0.ɵɵnextContext(); return ctx_r26.onSelectDate($event); })("cellHover", function InnerPopupComponent_ng_container_6_Template_date_table_cellHover_3_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r27 = i0.ɵɵnextContext(); return ctx_r27.cellHover.emit($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
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
    i0.ɵɵlistener("ngModelChange", function InnerPopupComponent_ng_container_7_Template_nz_time_picker_panel_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r28 = i0.ɵɵnextContext(); return ctx_r28.onSelectTime($event); });
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
}
InnerPopupComponent.ɵfac = function InnerPopupComponent_Factory(t) { return new (t || InnerPopupComponent)(); };
InnerPopupComponent.ɵcmp = i0.ɵɵdefineComponent({ type: InnerPopupComponent, selectors: [["inner-popup"]], inputs: { activeDate: "activeDate", endPanelMode: "endPanelMode", panelMode: "panelMode", showWeek: "showWeek", showWeekCustom: "showWeekCustom", locale: "locale", showTimePicker: "showTimePicker", timeOptions: "timeOptions", disabledDate: "disabledDate", dateRender: "dateRender", selectedValue: "selectedValue", hoverValue: "hoverValue", value: "value", partType: "partType" }, outputs: { panelModeChange: "panelModeChange", headerChange: "headerChange", selectDate: "selectDate", selectTime: "selectTime", cellHover: "cellHover" }, exportAs: ["innerPopup"], features: [i0.ɵɵNgOnChangesFeature], decls: 8, vars: 11, consts: [[3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [4, "ngIf"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showNextBtn", "showPreBtn", "valueChange", "panelModeChange"], [3, "activeDate", "value", "locale", "disabledDate", "valueChange"], [3, "activeDate", "value", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "activeDate", "locale", "disabledDate", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "value", "locale", "showSuperPreBtn", "showSuperNextBtn", "showPreBtn", "showNextBtn", "valueChange", "panelModeChange"], [3, "locale", "showWeek", "showWeekCustom", "value", "activeDate", "disabledDate", "cellRender", "selectedValue", "hoverValue", "valueChange", "cellHover"], [3, "nzInDatePicker", "ngModel", "format", "nzHourStep", "nzMinuteStep", "nzSecondStep", "nzDisabledHours", "nzDisabledMinutes", "nzDisabledSeconds", "nzHideDisabledOptions", "nzDefaultOpenValue", "nzUse12Hours", "nzAddOn", "ngModelChange"]], template: function InnerPopupComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div");
        i0.ɵɵelementStart(1, "div");
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
    } }, directives: [i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgIf, i2.DecadeHeaderComponent, i3.DecadeTableComponent, i4.YearHeaderComponent, i5.YearTableComponent, i6.MonthHeaderComponent, i7.MonthTableComponent, i8.DateHeaderComponent, i9.DateTableComponent, i10.NzTimePickerPanelComponent, i11.NgControlStatus, i11.NgModel], encapsulation: 2, changeDetection: 0 });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5uZXItcG9wdXAuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2lubmVyLXBvcHVwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osS0FBSyxFQUVMLE1BQU0sRUFHTixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBSXBELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxRQUFRLENBQUM7Ozs7Ozs7Ozs7Ozs7OztJQVk1Qiw2QkFBdUM7SUFDckMsd0NBU0M7SUFSQyxnT0FBc0IsNkxBTUgsbUNBQTRCLElBTnpCLHFMQU9QLGdDQUF5QixJQVBsQjtJQVF2QixpQkFBZ0I7SUFDakIsMkJBQWtDO0lBQ2hDLHVDQU1DO0lBRkMsa09BQXNDO0lBRXZDLGlCQUFlO0lBQ2xCLGlCQUFNO0lBQ1IsMEJBQWU7OztJQWxCWCxlQUFzQjtJQUF0Qix5Q0FBc0IseUJBQUEsNERBQUEsNkRBQUEsc0JBQUEscUJBQUE7SUFTbkIsZUFBNEI7SUFBNUIsd0RBQTRCO0lBRTdCLGVBQXlCO0lBQXpCLDhDQUF5Qix1QkFBQSx5QkFBQSxxQ0FBQTs7OztJQVEvQiw2QkFBcUM7SUFDbkMsc0NBU0M7SUFSQyxpT0FBc0IsNkxBTUgsb0NBQTRCLElBTnpCLHFMQU9QLGlDQUF5QixJQVBsQjtJQVF2QixpQkFBYztJQUNmLDJCQUFrQztJQUNoQyxxQ0FTQztJQUZDLGlPQUFvQyxnTEFDdkIsOEJBQXNCLElBREM7SUFFckMsaUJBQWE7SUFDaEIsaUJBQU07SUFDUiwwQkFBZTs7O0lBckJYLGVBQXNCO0lBQXRCLHlDQUFzQix5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U0FBUztrQkFBM0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IENhbmR5RGF0ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90aW1lJztcbmltcG9ydCB7IEZ1bmN0aW9uUHJvcCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XG5pbXBvcnQgeyBEaXNhYmxlZERhdGVGbiwgTnpEYXRlTW9kZSwgUmFuZ2VQYXJ0VHlwZSwgU3VwcG9ydFRpbWVPcHRpb25zIH0gZnJvbSAnLi9zdGFuZGFyZC10eXBlcyc7XG5pbXBvcnQgeyBQUkVGSVhfQ0xBU1MgfSBmcm9tICcuL3V0aWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpjb21wb25lbnQtc2VsZWN0b3JcbiAgc2VsZWN0b3I6ICdpbm5lci1wb3B1cCcsXG4gIGV4cG9ydEFzOiAnaW5uZXJQb3B1cCcsXG4gIHRlbXBsYXRlOiBgXG4gICAgPGRpdiBbY2xhc3MuYW50LXBpY2tlci1kYXRldGltZS1wYW5lbF09XCJzaG93VGltZVBpY2tlclwiPlxuICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS17eyBwYW5lbE1vZGUgfX0tcGFuZWxcIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwicGFuZWxNb2RlXCI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RlY2FkZSdcIj5cbiAgICAgICAgICAgIDxkZWNhZGUtaGVhZGVyXG4gICAgICAgICAgICAgIFsodmFsdWUpXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIFtzaG93U3VwZXJQcmVCdG5dPVwiZW5hYmxlUHJldk5leHQoJ3ByZXYnLCAnZGVjYWRlJylcIlxuICAgICAgICAgICAgICBbc2hvd1N1cGVyTmV4dEJ0bl09XCJlbmFibGVQcmV2TmV4dCgnbmV4dCcsICdkZWNhZGUnKVwiXG4gICAgICAgICAgICAgIFtzaG93TmV4dEJ0bl09XCJmYWxzZVwiXG4gICAgICAgICAgICAgIFtzaG93UHJlQnRuXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgKHBhbmVsTW9kZUNoYW5nZSk9XCJwYW5lbE1vZGVDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cImhlYWRlckNoYW5nZS5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgPjwvZGVjYWRlLWhlYWRlcj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7eyBwcmVmaXhDbHMgfX0tYm9keVwiPlxuICAgICAgICAgICAgICA8ZGVjYWRlLXRhYmxlXG4gICAgICAgICAgICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cIm9uQ2hvb3NlRGVjYWRlKCRldmVudClcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZERhdGVdPVwiZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICAgICAgPjwvZGVjYWRlLXRhYmxlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ3llYXInXCI+XG4gICAgICAgICAgICA8eWVhci1oZWFkZXJcbiAgICAgICAgICAgICAgWyh2YWx1ZSldPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlclByZUJ0bl09XCJlbmFibGVQcmV2TmV4dCgncHJldicsICd5ZWFyJylcIlxuICAgICAgICAgICAgICBbc2hvd1N1cGVyTmV4dEJ0bl09XCJlbmFibGVQcmV2TmV4dCgnbmV4dCcsICd5ZWFyJylcIlxuICAgICAgICAgICAgICBbc2hvd05leHRCdG5dPVwiZmFsc2VcIlxuICAgICAgICAgICAgICBbc2hvd1ByZUJ0bl09XCJmYWxzZVwiXG4gICAgICAgICAgICAgIChwYW5lbE1vZGVDaGFuZ2UpPVwicGFuZWxNb2RlQ2hhbmdlLmVtaXQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJoZWFkZXJDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgID48L3llYXItaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1ib2R5XCI+XG4gICAgICAgICAgICAgIDx5ZWFyLXRhYmxlXG4gICAgICAgICAgICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxuICAgICAgICAgICAgICAgIFtzZWxlY3RlZFZhbHVlXT1cInNlbGVjdGVkVmFsdWVcIlxuICAgICAgICAgICAgICAgIFtob3ZlclZhbHVlXT1cImhvdmVyVmFsdWVcIlxuICAgICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvbkNob29zZVllYXIoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGNlbGxIb3Zlcik9XCJjZWxsSG92ZXIuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgPjwveWVhci10YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidtb250aCdcIj5cbiAgICAgICAgICAgIDxtb250aC1oZWFkZXJcbiAgICAgICAgICAgICAgWyh2YWx1ZSldPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlXCJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlclByZUJ0bl09XCJlbmFibGVQcmV2TmV4dCgncHJldicsICdtb250aCcpXCJcbiAgICAgICAgICAgICAgW3Nob3dTdXBlck5leHRCdG5dPVwiZW5hYmxlUHJldk5leHQoJ25leHQnLCAnbW9udGgnKVwiXG4gICAgICAgICAgICAgIFtzaG93TmV4dEJ0bl09XCJmYWxzZVwiXG4gICAgICAgICAgICAgIFtzaG93UHJlQnRuXT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgKHBhbmVsTW9kZUNoYW5nZSk9XCJwYW5lbE1vZGVDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cImhlYWRlckNoYW5nZS5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgPjwvbW9udGgtaGVhZGVyPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInt7IHByZWZpeENscyB9fS1ib2R5XCI+XG4gICAgICAgICAgICAgIDxtb250aC10YWJsZVxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgICAgICAgICAgW2xvY2FsZV09XCJsb2NhbGVcIlxuICAgICAgICAgICAgICAgIFtkaXNhYmxlZERhdGVdPVwiZGlzYWJsZWREYXRlXCJcbiAgICAgICAgICAgICAgICBbc2VsZWN0ZWRWYWx1ZV09XCJzZWxlY3RlZFZhbHVlXCJcbiAgICAgICAgICAgICAgICBbaG92ZXJWYWx1ZV09XCJob3ZlclZhbHVlXCJcbiAgICAgICAgICAgICAgICAodmFsdWVDaGFuZ2UpPVwib25DaG9vc2VNb250aCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICAoY2VsbEhvdmVyKT1cImNlbGxIb3Zlci5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgICA+PC9tb250aC10YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuXG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxuICAgICAgICAgICAgPGRhdGUtaGVhZGVyXG4gICAgICAgICAgICAgIFsodmFsdWUpXT1cImFjdGl2ZURhdGVcIlxuICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgIFtzaG93U3VwZXJQcmVCdG5dPVwic2hvd1dlZWsgPyBlbmFibGVQcmV2TmV4dCgncHJldicsICd3ZWVrJykgOiBlbmFibGVQcmV2TmV4dCgncHJldicsICdkYXRlJylcIlxuICAgICAgICAgICAgICBbc2hvd1N1cGVyTmV4dEJ0bl09XCJzaG93V2VlayA/IGVuYWJsZVByZXZOZXh0KCduZXh0JywgJ3dlZWsnKSA6IGVuYWJsZVByZXZOZXh0KCduZXh0JywgJ2RhdGUnKVwiXG4gICAgICAgICAgICAgIFtzaG93UHJlQnRuXT1cInNob3dXZWVrID8gZW5hYmxlUHJldk5leHQoJ3ByZXYnLCAnd2VlaycpIDogZW5hYmxlUHJldk5leHQoJ3ByZXYnLCAnZGF0ZScpXCJcbiAgICAgICAgICAgICAgW3Nob3dOZXh0QnRuXT1cInNob3dXZWVrID8gZW5hYmxlUHJldk5leHQoJ25leHQnLCAnd2VlaycpIDogZW5hYmxlUHJldk5leHQoJ25leHQnLCAnZGF0ZScpXCJcbiAgICAgICAgICAgICAgKHBhbmVsTW9kZUNoYW5nZSk9XCJwYW5lbE1vZGVDaGFuZ2UuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgKHZhbHVlQ2hhbmdlKT1cImhlYWRlckNoYW5nZS5lbWl0KCRldmVudClcIlxuICAgICAgICAgICAgPjwvZGF0ZS1oZWFkZXI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgcHJlZml4Q2xzIH19LWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRhdGUtdGFibGVcbiAgICAgICAgICAgICAgICBbbG9jYWxlXT1cImxvY2FsZVwiXG4gICAgICAgICAgICAgICAgW3Nob3dXZWVrXT1cInNob3dXZWVrXCJcbiAgICAgICAgICAgICAgICBbc2hvd1dlZWtDdXN0b21dPVwic2hvd1dlZWtDdXN0b21cIlxuICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgW2FjdGl2ZURhdGVdPVwiYWN0aXZlRGF0ZVwiXG4gICAgICAgICAgICAgICAgW2Rpc2FibGVkRGF0ZV09XCJkaXNhYmxlZERhdGVcIlxuICAgICAgICAgICAgICAgIFtjZWxsUmVuZGVyXT1cImRhdGVSZW5kZXJcIlxuICAgICAgICAgICAgICAgIFtzZWxlY3RlZFZhbHVlXT1cInNlbGVjdGVkVmFsdWVcIlxuICAgICAgICAgICAgICAgIFtob3ZlclZhbHVlXT1cImhvdmVyVmFsdWVcIlxuICAgICAgICAgICAgICAgICh2YWx1ZUNoYW5nZSk9XCJvblNlbGVjdERhdGUoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgKGNlbGxIb3Zlcik9XCJjZWxsSG92ZXIuZW1pdCgkZXZlbnQpXCJcbiAgICAgICAgICAgICAgPjwvZGF0ZS10YWJsZT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgIDwvZGl2PlxuICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dUaW1lUGlja2VyICYmIHRpbWVPcHRpb25zXCI+XG4gICAgICAgIDxuei10aW1lLXBpY2tlci1wYW5lbFxuICAgICAgICAgIFtuekluRGF0ZVBpY2tlcl09XCJ0cnVlXCJcbiAgICAgICAgICBbbmdNb2RlbF09XCJ2YWx1ZT8ubmF0aXZlRGF0ZVwiXG4gICAgICAgICAgKG5nTW9kZWxDaGFuZ2UpPVwib25TZWxlY3RUaW1lKCRldmVudClcIlxuICAgICAgICAgIFtmb3JtYXRdPVwiJGFueSh0aW1lT3B0aW9ucy5uekZvcm1hdClcIlxuICAgICAgICAgIFtuekhvdXJTdGVwXT1cIiRhbnkodGltZU9wdGlvbnMubnpIb3VyU3RlcClcIlxuICAgICAgICAgIFtuek1pbnV0ZVN0ZXBdPVwiJGFueSh0aW1lT3B0aW9ucy5uek1pbnV0ZVN0ZXApXCJcbiAgICAgICAgICBbbnpTZWNvbmRTdGVwXT1cIiRhbnkodGltZU9wdGlvbnMubnpTZWNvbmRTdGVwKVwiXG4gICAgICAgICAgW256RGlzYWJsZWRIb3Vyc109XCIkYW55KHRpbWVPcHRpb25zLm56RGlzYWJsZWRIb3VycylcIlxuICAgICAgICAgIFtuekRpc2FibGVkTWludXRlc109XCIkYW55KHRpbWVPcHRpb25zLm56RGlzYWJsZWRNaW51dGVzKVwiXG4gICAgICAgICAgW256RGlzYWJsZWRTZWNvbmRzXT1cIiRhbnkodGltZU9wdGlvbnMubnpEaXNhYmxlZFNlY29uZHMpXCJcbiAgICAgICAgICBbbnpIaWRlRGlzYWJsZWRPcHRpb25zXT1cIiEhdGltZU9wdGlvbnMubnpIaWRlRGlzYWJsZWRPcHRpb25zXCJcbiAgICAgICAgICBbbnpEZWZhdWx0T3BlblZhbHVlXT1cIiRhbnkodGltZU9wdGlvbnMubnpEZWZhdWx0T3BlblZhbHVlKVwiXG4gICAgICAgICAgW256VXNlMTJIb3Vyc109XCIhIXRpbWVPcHRpb25zLm56VXNlMTJIb3Vyc1wiXG4gICAgICAgICAgW256QWRkT25dPVwiJGFueSh0aW1lT3B0aW9ucy5uekFkZE9uKVwiXG4gICAgICAgID48L256LXRpbWUtcGlja2VyLXBhbmVsPlxuICAgICAgICA8IS0tIHVzZSBbb3BlbmVkXSB0byB0cmlnZ2VyIHRpbWUgcGFuZWwgXFxgaW5pdFBvc2l0aW9uKClcXGAgLS0+XG4gICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBJbm5lclBvcHVwQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgQElucHV0KCkgYWN0aXZlRGF0ZSE6IENhbmR5RGF0ZTtcbiAgQElucHV0KCkgZW5kUGFuZWxNb2RlITogTnpEYXRlTW9kZTtcbiAgQElucHV0KCkgcGFuZWxNb2RlITogTnpEYXRlTW9kZTtcbiAgQElucHV0KCkgc2hvd1dlZWshOiBib29sZWFuO1xuICBASW5wdXQoKSBzaG93V2Vla0N1c3RvbSE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xuICBASW5wdXQoKSBzaG93VGltZVBpY2tlciE6IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRpbWVPcHRpb25zITogU3VwcG9ydFRpbWVPcHRpb25zIHwgbnVsbDtcbiAgQElucHV0KCkgZGlzYWJsZWREYXRlPzogRGlzYWJsZWREYXRlRm47XG4gIEBJbnB1dCgpIGRhdGVSZW5kZXI/OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjxEYXRlPiB8IEZ1bmN0aW9uUHJvcDxUZW1wbGF0ZVJlZjxEYXRlPiB8IHN0cmluZz47XG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWUhOiBDYW5keURhdGVbXTsgLy8gUmFuZ2UgT05MWVxuICBASW5wdXQoKSBob3ZlclZhbHVlITogQ2FuZHlEYXRlW107IC8vIFJhbmdlIE9OTFlcbiAgQElucHV0KCkgdmFsdWUhOiBDYW5keURhdGU7XG4gIEBJbnB1dCgpIHBhcnRUeXBlITogUmFuZ2VQYXJ0VHlwZTtcblxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekRhdGVNb2RlPigpO1xuICAvLyBUT0RPOiBuYW1lIGlzIG5vdCBwcm9wZXJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGhlYWRlckNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdXNlciBjaGFuZ2VkIHRoZSBoZWFkZXIncyB2YWx1ZVxuICBAT3V0cHV0KCkgcmVhZG9ubHkgc2VsZWN0RGF0ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gdGhlIGRhdGUgaXMgc2VsZWN0ZWQgYnkgY2xpY2sgdGhlIGRhdGUgcGFuZWxcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdFRpbWUgPSBuZXcgRXZlbnRFbWl0dGVyPENhbmR5RGF0ZT4oKTtcbiAgQE91dHB1dCgpIHJlYWRvbmx5IGNlbGxIb3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpOyAvLyBFbWl0dGVkIHdoZW4gaG92ZXIgb24gYSBkYXkgYnkgbW91c2UgZW50ZXJcblxuICBwcmVmaXhDbHM6IHN0cmluZyA9IFBSRUZJWF9DTEFTUztcblxuICAvKipcbiAgICogSGlkZSBcIm5leHRcIiBhcnJvdyBpbiBsZWZ0IHBhbmVsLFxuICAgKiBoaWRlIFwicHJldlwiIGFycm93IGluIHJpZ2h0IHBhbmVsXG4gICAqIEBwYXJhbSBkaXJlY3Rpb25cbiAgICogQHBhcmFtIHBhbmVsTW9kZVxuICAgKi9cbiAgZW5hYmxlUHJldk5leHQoZGlyZWN0aW9uOiAncHJldicgfCAnbmV4dCcsIHBhbmVsTW9kZTogTnpEYXRlTW9kZSk6IGJvb2xlYW4ge1xuICAgIGlmIChcbiAgICAgICF0aGlzLnNob3dUaW1lUGlja2VyICYmXG4gICAgICBwYW5lbE1vZGUgPT09IHRoaXMuZW5kUGFuZWxNb2RlICYmXG4gICAgICAoKHRoaXMucGFydFR5cGUgPT09ICdsZWZ0JyAmJiBkaXJlY3Rpb24gPT09ICduZXh0JykgfHwgKHRoaXMucGFydFR5cGUgPT09ICdyaWdodCcgJiYgZGlyZWN0aW9uID09PSAncHJldicpKVxuICAgICkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIG9uU2VsZWN0VGltZShkYXRlOiBEYXRlKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RUaW1lLmVtaXQobmV3IENhbmR5RGF0ZShkYXRlKSk7XG4gIH1cblxuICAvLyBUaGUgdmFsdWUgcmVhbCBjaGFuZ2VkIHRvIG91dHNpZGVcbiAgb25TZWxlY3REYXRlKGRhdGU6IENhbmR5RGF0ZSB8IERhdGUpOiB2b2lkIHtcbiAgICBjb25zdCB2YWx1ZSA9IGRhdGUgaW5zdGFuY2VvZiBDYW5keURhdGUgPyBkYXRlIDogbmV3IENhbmR5RGF0ZShkYXRlKTtcbiAgICBjb25zdCB0aW1lVmFsdWUgPSB0aGlzLnRpbWVPcHRpb25zICYmIHRoaXMudGltZU9wdGlvbnMubnpEZWZhdWx0T3BlblZhbHVlO1xuXG4gICAgLy8gRGlzcGxheSB0aW1lVmFsdWUgd2hlbiB2YWx1ZSBpcyBudWxsXG4gICAgaWYgKCF0aGlzLnZhbHVlICYmIHRpbWVWYWx1ZSkge1xuICAgICAgdmFsdWUuc2V0SG1zKHRpbWVWYWx1ZS5nZXRIb3VycygpLCB0aW1lVmFsdWUuZ2V0TWludXRlcygpLCB0aW1lVmFsdWUuZ2V0U2Vjb25kcygpKTtcbiAgICB9XG5cbiAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XG4gIH1cblxuICBvbkNob29zZU1vbnRoKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0TW9udGgodmFsdWUuZ2V0TW9udGgoKSk7XG4gICAgaWYgKHRoaXMuZW5kUGFuZWxNb2RlID09PSAnbW9udGgnKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVhZGVyQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLmVuZFBhbmVsTW9kZSk7XG4gICAgfVxuICB9XG5cbiAgb25DaG9vc2VZZWFyKHZhbHVlOiBDYW5keURhdGUpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZURhdGUgPSB0aGlzLmFjdGl2ZURhdGUuc2V0WWVhcih2YWx1ZS5nZXRZZWFyKCkpO1xuICAgIGlmICh0aGlzLmVuZFBhbmVsTW9kZSA9PT0gJ3llYXInKSB7XG4gICAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgICB0aGlzLnNlbGVjdERhdGUuZW1pdCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVhZGVyQ2hhbmdlLmVtaXQodmFsdWUpO1xuICAgICAgdGhpcy5wYW5lbE1vZGVDaGFuZ2UuZW1pdCh0aGlzLmVuZFBhbmVsTW9kZSk7XG4gICAgfVxuICB9XG5cbiAgb25DaG9vc2VEZWNhZGUodmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlRGF0ZSA9IHRoaXMuYWN0aXZlRGF0ZS5zZXRZZWFyKHZhbHVlLmdldFllYXIoKSk7XG4gICAgaWYgKHRoaXMuZW5kUGFuZWxNb2RlID09PSAnZGVjYWRlJykge1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5zZWxlY3REYXRlLmVtaXQodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmhlYWRlckNoYW5nZS5lbWl0KHZhbHVlKTtcbiAgICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQoJ3llYXInKTtcbiAgICB9XG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgaWYgKGNoYW5nZXMuYWN0aXZlRGF0ZSAmJiAhY2hhbmdlcy5hY3RpdmVEYXRlLmN1cnJlbnRWYWx1ZSkge1xuICAgICAgdGhpcy5hY3RpdmVEYXRlID0gbmV3IENhbmR5RGF0ZSgpO1xuICAgIH1cbiAgICAvLyBOZXcgQW50ZCB2ZXNpb24gaGFzIG1lcmdlZCAnZGF0ZScgYW50ICd0aW1lJyB0byBvbmUgcGFuZWwsXG4gICAgLy8gU28gdGhlcmUgaXMgbm90ICd0aW1lJyBwYW5lbFxuICAgIGlmIChjaGFuZ2VzLnBhbmVsTW9kZSAmJiBjaGFuZ2VzLnBhbmVsTW9kZS5jdXJyZW50VmFsdWUgPT09ICd0aW1lJykge1xuICAgICAgdGhpcy5wYW5lbE1vZGUgPSAnZGF0ZSc7XG4gICAgfVxuICB9XG59XG4iXX0=
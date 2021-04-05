import * as i0 from "@angular/core";
import * as i1 from "./components/cmacs-status-distribution/cmacs-status-distribution.component";
import * as i2 from "./components/cmacs-general-chart/cmacs-general-chart.component";
import * as i3 from "./components/cmacs-kpioverview/cmacs-kpioverview.component";
import * as i4 from "./components/cmacs-normalized-horizontal-bar-chart/cmacs-normalized-horizontal-bar-chart.component";
import * as i5 from "./components/cmacs-normalized-horizontal-bar-grouped/cmacs-normalized-horizontal-bar-grouped.component";
import * as i6 from "./components/cmacs-kpi-group/cmacs-kpi-group.component";
import * as i7 from "./components/cmacs-tree/cmacs-tree.component";
import * as i8 from "./components/cmacs-tree/cmacs-tree-node.component";
import * as i9 from "./components/cmacs-steps/cmacs-wizard.component";
import * as i10 from "./components/cmacs-steps/step.component";
import * as i11 from "./components/cmacs-compact-table/cmacs-compact-table.component";
import * as i12 from "./components/cmacs-table/cmacs-table.component";
import * as i13 from "./components/cmacs-list/list.component";
import * as i14 from "./components/cmacs-list/list-cell";
import * as i15 from "./components/cmacs-list/list-item-cell";
import * as i16 from "./components/cmacs-list/list-item.component";
import * as i17 from "./components/cmacs-list/list-item-meta-cell";
import * as i18 from "./components/cmacs-list/list-item-meta.component";
import * as i19 from "./components/cmacs-card/cmacs-card.component";
import * as i20 from "./components/cmacs-card/cmacs-card-grid.directive";
import * as i21 from "./components/cmacs-card/cmacs-card-loading.component";
import * as i22 from "./components/cmacs-card/cmacs-card-meta.component";
import * as i23 from "./components/cmacs-card/cmacs-card-tab.component";
import * as i24 from "./components/cmacs-side-panel/cmacs-side-panel.component";
import * as i25 from "./components/cmacs-tabs/tabset.component";
import * as i26 from "./components/cmacs-tabs/tab.component";
import * as i27 from "./components/cmacs-tabs/tab-nav-bar.component";
import * as i28 from "./components/cmacs-tabs/tab-nav-item.directive";
import * as i29 from "./components/cmacs-tabs/tabs-ink-bar.directive";
import * as i30 from "./components/cmacs-tabs/tab-scroll-list.directive";
import * as i31 from "./components/cmacs-tabs/tab-nav-operation.component";
import * as i32 from "./components/cmacs-tabs/tab-add-button.component";
import * as i33 from "./components/cmacs-tabs/tab-close-button.component";
import * as i34 from "./components/cmacs-tabs/tab.directive";
import * as i35 from "./components/cmacs-tabs/tab-body.component";
import * as i36 from "./components/cmacs-tabs/tab-link.directive";
import * as i37 from "./components/cmacs-signature/cmacs-signature.component";
import * as i38 from "./components/cmacs-xlsx-loader/cmacs-xlsx-loader.component";
import * as i39 from "./components/cmacs-modal/cmacs-to-css-unit.pipe";
import * as i40 from "./components/cmacs-modal/cmacs-modal.component";
import * as i41 from "./components/cmacs-message/message.component";
import * as i42 from "./components/cmacs-comment/comment-cells";
import * as i43 from "./components/cmacs-comment/comment.component";
import * as i44 from "./components/cmacs-moveable-list/cmacs-moveable-list.component";
import * as i45 from "./components/cmacs-popover/popover";
import * as i46 from "./components/cmacs-tag/tag.component";
import * as i47 from "./components/cmacs-tooltip/tooltip";
import * as i48 from "./components/cmacs-kanban/cmacs-kanban.component";
import * as i49 from "./components/cmacs-timeline/timeline.component";
import * as i50 from "./components/cmacs-timeline/timeline-item.component";
import * as i51 from "./components/cmacs-switch/switch.component";
import * as i52 from "./components/cmacs-search/cmacs-search.component";
import * as i53 from "./components/cmacs-progress/progress.component";
import * as i54 from "./components/cmacs-breadcrumb/breadcrumb.component";
import * as i55 from "./components/cmacs-breadcrumb/breadcrumb-item.component";
import * as i56 from "./components/cmacs-breadcrumb/breadcrumb-separator.component";
import * as i57 from "./components/cmacs-alert/alert.component";
import * as i58 from "./components/cmacs-phone-number/cmacs-phone-number.component";
import * as i59 from "./components/cmacs-form/form-control.component";
import * as i60 from "./components/cmacs-form/form-item.component";
import * as i61 from "./components/cmacs-form/form-label.component";
import * as i62 from "./components/cmacs-form/form-text.component";
import * as i63 from "./components/cmacs-form/form.directive";
import * as i64 from "./components/cmacs-form/form-split.component";
import * as i65 from "./components/cmacs-section/cmacs-section.component";
import * as i66 from "./components/cmacs-editor/cmacs-editor.component";
import * as i67 from "./cmacs-components-v2-lib.component";
import * as i68 from "./components/cmacs-checkbox/cmacs-checkbox.component";
import * as i69 from "./components/cmacs-checkbox/cmacs-checkbox-wrapper.component";
import * as i70 from "./components/cmacs-checkbox/cmacs-checkbox-group.component";
import * as i71 from "./components/cmacs-button/cmacs-button.component";
import * as i72 from "./components/cmacs-button/cmacs-button-group.component";
import * as i73 from "./components/cmacs-color-picker/cmacs-color-picker.component";
import * as i74 from "./components/cmacs-slider/cmacs-slider-handle.component";
import * as i75 from "./components/cmacs-slider/cmacs-slider-marks.component";
import * as i76 from "./components/cmacs-slider/cmacs-slider-step.component";
import * as i77 from "./components/cmacs-slider/cmacs-slider-track.component";
import * as i78 from "./components/cmacs-slider/cmacs-slider.component";
import * as i79 from "./components/cmacs-radio/cmacs-radio-group.component";
import * as i80 from "./components/cmacs-radio/cmacs-radio.component";
import * as i81 from "./components/cmacs-radio/radio-button.directive";
import * as i82 from "./components/cmacs-select/cmacs-select.component";
import * as i83 from "./components/cmacs-select/cmacs-select-top-control.component";
import * as i84 from "./components/cmacs-select/cmacs-select-unselectable.directive";
import * as i85 from "./components/cmacs-select/cmacs-option.component";
import * as i86 from "./components/cmacs-select/cmacs-option-container.component";
import * as i87 from "./components/cmacs-select/cmacs-option-group.component";
import * as i88 from "./components/cmacs-select/cmacs-option-li.component";
import * as i89 from "./components/cmacs-select/cmacs-option.pipe";
import * as i90 from "./components/cmacs-divider/cmacs-divider.component";
import * as i91 from "./components/cmacs-input/cmacs-input.directive";
import * as i92 from "./components/cmacs-input/cmacs-input-group.component";
import * as i93 from "./components/cmacs-input/autosize.directive";
import * as i94 from "./components/cmacs-input/input-group-slot.component";
import * as i95 from "./components/cmacs-input/textarea-count.component";
import * as i96 from "./components/cmacs-menu/menu.directive";
import * as i97 from "./components/cmacs-menu/menu-group.component";
import * as i98 from "./components/cmacs-menu/submenu.component";
import * as i99 from "./components/cmacs-menu/submenu-inline-child.component";
import * as i100 from "./components/cmacs-menu/submenu-title.component";
import * as i101 from "./components/cmacs-menu/submenu-non-inline-child.component";
import * as i102 from "./components/cmacs-menu/menu-item.directive";
import * as i103 from "./components/cmacs-floating-menu/cmacs-floating-menu.component";
import * as i104 from "./components/cmacs-dropdown/dropdown.directive";
import * as i105 from "./components/cmacs-dropdown/dropdown-a.directive";
import * as i106 from "./components/cmacs-dropdown/dropdown-menu.component";
import * as i107 from "./components/cmacs-dropdown/dropdown-button.directive";
import * as i108 from "./components/cmacs-kpi/cmacs-kpi.component";
import * as i109 from "./components/cmacs-video-player/cmacs-video-player.component";
import * as i110 from "./components/cmacs-date-picker/picker.component";
import * as i111 from "./components/cmacs-date-picker/date-picker.component";
import * as i112 from "./components/cmacs-date-picker/month-picker.component";
import * as i113 from "./components/cmacs-date-picker/year-picker.component";
import * as i114 from "./components/cmacs-date-picker/week-picker.component";
import * as i115 from "./components/cmacs-date-picker/range-picker.component";
import * as i116 from "./components/cmacs-date-picker/calendar-footer.component";
import * as i117 from "./components/cmacs-date-picker/inner-popup.component";
import * as i118 from "./components/cmacs-date-picker/date-range-popup.component";
import * as i119 from "./components/cmacs-input-number/cmacs-input-number.component";
import * as i120 from "./components/cmacs-datetime-picker/cmacs-datetime-picker.component";
import * as i121 from "./components/cmacs-datetime-picker/cmacs-datetime-picker-panel.component";
import * as i122 from "./components/cmacs-datetime-picker/cmacs-datetime-value-accessor.directive";
import * as i123 from "./components/cmacs-message/message-container.component";
import * as i124 from "@swimlane/ngx-charts";
import * as i125 from "ng-zorro-antd/skeleton";
import * as i126 from "@angular/cdk/scrolling";
import * as i127 from "ng-zorro-antd/tree";
import * as i128 from "ng-zorro-antd/steps";
import * as i129 from "ng-zorro-antd/table";
import * as i130 from "ng-zorro-antd/rate";
import * as i131 from "ngx-export-as";
import * as i132 from "ng-zorro-antd/card";
import * as i133 from "ng-zorro-antd/spin";
import * as i134 from "ng-zorro-antd/tabs";
import * as i135 from "angular2-draggable";
import * as i136 from "angular2-signaturepad";
import * as i137 from "./components/cmacs-dropdown/context-menu.service.module";
import * as i138 from "ng-zorro-antd/upload";
import * as i139 from "ng-zorro-antd/list";
import * as i140 from "ng-zorro-antd/modal";
import * as i141 from "ng-zorro-antd/message";
import * as i142 from "ng-zorro-antd/comment";
import * as i143 from "ng-zorro-antd/popover";
import * as i144 from "ng-zorro-antd/tooltip";
import * as i145 from "ng-zorro-antd/tag";
import * as i146 from "ng-zorro-antd/core/wave";
import * as i147 from "ng-zorro-antd/timeline";
import * as i148 from "ng-zorro-antd/progress";
import * as i149 from "ng-zorro-antd/i18n";
import * as i150 from "ng-zorro-antd/core/overlay";
import * as i151 from "ng-zorro-antd/input-number";
import * as i152 from "ng-zorro-antd/date-picker";
import * as i153 from "./components/cmacs-date-picker/lib/lib-packer.module";
import * as i154 from "ng-zorro-antd/time-picker";
import * as i155 from "ng-zorro-antd/breadcrumb";
import * as i156 from "ng-zorro-antd/alert";
import * as i157 from "ng2-tel-input";
import * as i158 from "ng-zorro-antd/form";
import * as i159 from "ng-zorro-antd/grid";
import * as i160 from "@angular/common";
import * as i161 from "@angular/forms";
import * as i162 from "ng-zorro-antd/button";
import * as i163 from "ng-zorro-antd/checkbox";
import * as i164 from "ng-zorro-antd/slider";
import * as i165 from "ng-zorro-antd/switch";
import * as i166 from "ng-zorro-antd/input";
import * as i167 from "ng-zorro-antd/radio";
import * as i168 from "ng-zorro-antd/select";
import * as i169 from "ng-zorro-antd/divider";
import * as i170 from "ng-zorro-antd/icon";
import * as i171 from "ng-zorro-antd/menu";
import * as i172 from "@angular/cdk/overlay";
import * as i173 from "ng-zorro-antd/core/no-animation";
import * as i174 from "ng-zorro-antd/core/outlet";
import * as i175 from "ng-zorro-antd/dropdown";
import * as i176 from "ng-zorro-antd/empty";
import * as i177 from "@angular/cdk/drag-drop";
import * as i178 from "ngx-videogular";
import * as i179 from "@tinymce/tinymce-angular";
export declare class CmacsComponentsV2LibModule {
    static ɵmod: i0.ɵɵNgModuleDefWithMeta<CmacsComponentsV2LibModule, [typeof i1.CmacsStatusDistributionComponent, typeof i2.CmacsGeneralChartComponent, typeof i3.CmacsKPIOverviewComponent, typeof i4.CmacsNormalizedHorizontalBarChartComponent, typeof i5.CmacsNormalizedHorizontalBarGroupedComponent, typeof i6.CmacsKpiGroupComponent, typeof i7.CmacsTreeComponent, typeof i8.CmacsTreeNodeComponent, typeof i9.CmacsWizardComponent, typeof i10.CmacsStepComponent, typeof i11.CmacsCompactTableComponent, typeof i12.CmacsTableComponent, typeof i13.CmacsListComponent, typeof i14.CmacsListEmptyComponent, typeof i14.CmacsListFooterComponent, typeof i14.CmacsListGridDirective, typeof i14.CmacsListHeaderComponent, typeof i15.CmacsListItemActionComponent, typeof i15.CmacsListItemActionsComponent, typeof i16.CmacsListItemComponent, typeof i15.CmacsListItemExtraComponent, typeof i17.CmacsListItemMetaAvatarComponent, typeof i18.CmacsListItemMetaComponent, typeof i17.CmacsListItemMetaDescriptionComponent, typeof i17.CmacsListItemMetaTitleComponent, typeof i14.CmacsListLoadMoreDirective, typeof i14.CmacsListPaginationComponent, typeof i19.CmacsCardComponent, typeof i20.CmacsCardGridDirective, typeof i21.CmacsCardLoadingComponent, typeof i22.CmacsCardMetaComponent, typeof i23.CmacsCardTabComponent, typeof i24.CmacsSidePanelComponent, typeof i25.CmacsTabSetComponent, typeof i26.CmacsTabComponent, typeof i27.CmacsTabNavBarComponent, typeof i28.CmacsTabNavItemDirective, typeof i29.CmacsTabsInkBarDirective, typeof i30.CmacsTabScrollListDirective, typeof i31.CmacsTabNavOperationComponent, typeof i32.CmacsTabAddButtonComponent, typeof i33.CmacsTabCloseButtonComponent, typeof i34.CmacsTabDirective, typeof i35.CmacsTabBodyComponent, typeof i36.CmacsTabLinkDirective, typeof i36.CmacsTabLinkTemplateDirective, typeof i37.CmacsSignatureComponent, typeof i38.CmacsXlsxLoaderComponent, typeof i39.CmacsToCssUnitPipe, typeof i40.CmacsModalComponent, typeof i41.CmacsMessageComponent, typeof i42.CmacsCommentActionComponent, typeof i42.CmacsCommentActionHostDirective, typeof i42.CmacsCommentAvatarDirective, typeof i43.CmacsCommentComponent, typeof i42.CmacsCommentContentDirective, typeof i44.CmacsMoveableListComponent, typeof i45.CmacsPopoverComponent, typeof i45.CmacsPopoverDirective, typeof i46.CmacsTagComponent, typeof i47.CmacsToolTipComponent, typeof i47.CmacsTooltipDirective, typeof i48.CmacsKanbanComponent, typeof i49.CmacsTimelineComponent, typeof i50.CmacsTimelineItemComponent, typeof i51.CmacsSwitchComponent, typeof i52.CmacsSearchComponent, typeof i53.CmacsProgressComponent, typeof i54.CmacsBreadCrumbComponent, typeof i55.CmacsBreadCrumbItemComponent, typeof i56.CmacsBreadCrumbSeparatorComponent, typeof i57.CmacsAlertComponent, typeof i58.CmacsPhoneNumberComponent, typeof i59.CmacsFormControlComponent, typeof i60.CmacsFormItemComponent, typeof i61.CmacsFormLabelComponent, typeof i62.CmacsFormTextComponent, typeof i63.CmacsFormDirective, typeof i64.CmacsFormSplitComponent, typeof i65.CmacsSectionComponent, typeof i66.CmacsEditorComponent, typeof i67.CmacsComponentsV2LibComponent, typeof i68.CmacsCheckboxComponent, typeof i69.CmacsCheckboxWrapperComponent, typeof i70.CmacsCheckboxGroupComponent, typeof i71.CmacsButtonComponent, typeof i72.CmacsButtonGroupComponent, typeof i73.CmacsColorPickerComponent, typeof i74.CmacsSliderHandleComponent, typeof i75.CmacsSliderMarksComponent, typeof i76.CmacsSliderStepComponent, typeof i77.CmacsSliderTrackComponent, typeof i78.CmacsSliderComponent, typeof i79.CmacsRadioGroupComponent, typeof i80.CmacsRadioComponent, typeof i81.CmacsRadioButtonDirective, typeof i82.CmacsSelectComponent, typeof i83.CmacsSelectTopControlComponent, typeof i84.CmacsSelectUnselectableDirective, typeof i85.CmacsOptionComponent, typeof i86.CmacsOptionContainerComponent, typeof i87.CmacsOptionGroupComponent, typeof i88.CmacsOptionLiComponent, typeof i89.NzFilterGroupOptionPipe, typeof i89.NzFilterOptionPipe, typeof i90.CmacsDividerComponent, typeof i91.CmacsInputDirective, typeof i92.CmacsInputGroupComponent, typeof i93.CmacsAutosizeDirective, typeof i94.CmacsInputGroupSlotComponent, typeof i95.CmacsTextareaCountComponent, typeof i96.CmacsMenuDirective, typeof i97.CmacsMenuGroupComponent, typeof i98.CmacsSubMenuComponent, typeof i99.NzSubmenuInlineChildComponent, typeof i100.NzSubMenuTitleComponent, typeof i101.NzSubmenuNoneInlineChildComponent, typeof i102.CmacsMenuItemDirective, typeof i103.CmacsFloatingMenuComponent, typeof i104.CmacsDropDownDirective, typeof i105.CmacsDropDownADirective, typeof i106.CmacsDropdownMenuComponent, typeof i107.CmacsDropdownButtonDirective, typeof i108.CmacsKpiComponent, typeof i109.CmacsVideoPlayerComponent, typeof i110.CmacsPickerComponent, typeof i111.CmacsDatePickerComponent, typeof i112.CmacsMonthPickerComponent, typeof i113.CmacsYearPickerComponent, typeof i114.CmacsWeekPickerComponent, typeof i115.CmacsRangePickerComponent, typeof i116.CalendarFooterComponent, typeof i117.InnerPopupComponent, typeof i118.DateRangePopupComponent, typeof i119.CmacsInputNumberComponent, typeof i120.CmacsDateTimePickerComponent, typeof i121.CmacsDatetimePickerPanelComponent, typeof i122.CmacsDatetimeValueAccessorDirective, typeof i123.CmacsMessageContainerComponent], [typeof i124.NgxChartsModule, typeof i125.NzSkeletonModule, typeof i126.ScrollingModule, typeof i127.NzTreeModule, typeof i128.NzStepsModule, typeof i129.NzTableModule, typeof i130.NzRateModule, typeof i131.ExportAsModule, typeof i132.NzCardModule, typeof i133.NzSpinModule, typeof i134.NzTabsModule, typeof i135.AngularDraggableModule, typeof i136.SignaturePadModule, typeof i137.CmacsContextMenuServiceModule, typeof i138.NzUploadModule, typeof i139.NzListModule, typeof i140.NzModalModule, typeof i141.NzMessageModule, typeof i142.NzCommentModule, typeof i143.NzPopoverModule, typeof i144.NzToolTipModule, typeof i145.NzTagModule, typeof i146.NzWaveModule, typeof i147.NzTimelineModule, typeof i148.NzProgressModule, typeof i149.NzI18nModule, typeof i150.NzOverlayModule, typeof i151.NzInputNumberModule, typeof i152.NzDatePickerModule, typeof i153.LibPackerModule, typeof i154.NzTimePickerModule, typeof i155.NzBreadCrumbModule, typeof i156.NzAlertModule, typeof i157.Ng2TelInputModule, typeof i158.NzFormModule, typeof i159.NzGridModule, typeof i160.CommonModule, typeof i161.FormsModule, typeof i162.NzButtonModule, typeof i163.NzCheckboxModule, typeof i164.NzSliderModule, typeof i165.NzSwitchModule, typeof i166.NzInputModule, typeof i167.NzRadioModule, typeof i168.NzSelectModule, typeof i169.NzDividerModule, typeof i170.NzIconModule, typeof i171.NzMenuModule, typeof i172.OverlayModule, typeof i173.NzNoAnimationModule, typeof i174.NzOutletModule, typeof i175.NzDropDownModule, typeof i176.NzEmptyModule, typeof i177.DragDropModule, typeof i178.VgCoreModule, typeof i178.VgControlsModule, typeof i178.VgOverlayPlayModule, typeof i178.VgBufferingModule, typeof i179.EditorModule, typeof i161.ReactiveFormsModule], [typeof i1.CmacsStatusDistributionComponent, typeof i2.CmacsGeneralChartComponent, typeof i3.CmacsKPIOverviewComponent, typeof i4.CmacsNormalizedHorizontalBarChartComponent, typeof i5.CmacsNormalizedHorizontalBarGroupedComponent, typeof i124.NgxChartsModule, typeof i125.NzSkeletonModule, typeof i6.CmacsKpiGroupComponent, typeof i7.CmacsTreeComponent, typeof i8.CmacsTreeNodeComponent, typeof i127.NzTreeModule, typeof i126.ScrollingModule, typeof i128.NzStepsModule, typeof i9.CmacsWizardComponent, typeof i10.CmacsStepComponent, typeof i130.NzRateModule, typeof i11.CmacsCompactTableComponent, typeof i12.CmacsTableComponent, typeof i129.NzTableModule, typeof i131.ExportAsModule, typeof i133.NzSpinModule, typeof i139.NzListModule, typeof i13.CmacsListComponent, typeof i14.CmacsListEmptyComponent, typeof i14.CmacsListFooterComponent, typeof i14.CmacsListGridDirective, typeof i14.CmacsListHeaderComponent, typeof i15.CmacsListItemActionComponent, typeof i15.CmacsListItemActionsComponent, typeof i16.CmacsListItemComponent, typeof i15.CmacsListItemExtraComponent, typeof i17.CmacsListItemMetaAvatarComponent, typeof i18.CmacsListItemMetaComponent, typeof i17.CmacsListItemMetaDescriptionComponent, typeof i17.CmacsListItemMetaTitleComponent, typeof i14.CmacsListLoadMoreDirective, typeof i14.CmacsListPaginationComponent, typeof i132.NzCardModule, typeof i19.CmacsCardComponent, typeof i20.CmacsCardGridDirective, typeof i21.CmacsCardLoadingComponent, typeof i22.CmacsCardMetaComponent, typeof i23.CmacsCardTabComponent, typeof i24.CmacsSidePanelComponent, typeof i135.AngularDraggableModule, typeof i134.NzTabsModule, typeof i25.CmacsTabSetComponent, typeof i26.CmacsTabComponent, typeof i27.CmacsTabNavBarComponent, typeof i28.CmacsTabNavItemDirective, typeof i29.CmacsTabsInkBarDirective, typeof i30.CmacsTabScrollListDirective, typeof i31.CmacsTabNavOperationComponent, typeof i32.CmacsTabAddButtonComponent, typeof i33.CmacsTabCloseButtonComponent, typeof i34.CmacsTabDirective, typeof i35.CmacsTabBodyComponent, typeof i36.CmacsTabLinkDirective, typeof i36.CmacsTabLinkTemplateDirective, typeof i136.SignaturePadModule, typeof i37.CmacsSignatureComponent, typeof i38.CmacsXlsxLoaderComponent, typeof i39.CmacsToCssUnitPipe, typeof i140.NzModalModule, typeof i40.CmacsModalComponent, typeof i141.NzMessageModule, typeof i123.CmacsMessageContainerComponent, typeof i41.CmacsMessageComponent, typeof i138.NzUploadModule, typeof i142.NzCommentModule, typeof i42.CmacsCommentActionComponent, typeof i42.CmacsCommentActionHostDirective, typeof i42.CmacsCommentAvatarDirective, typeof i43.CmacsCommentComponent, typeof i42.CmacsCommentContentDirective, typeof i44.CmacsMoveableListComponent, typeof i143.NzPopoverModule, typeof i45.CmacsPopoverComponent, typeof i45.CmacsPopoverDirective, typeof i47.CmacsToolTipComponent, typeof i47.CmacsTooltipDirective, typeof i145.NzTagModule, typeof i46.CmacsTagComponent, typeof i147.NzTimelineModule, typeof i48.CmacsKanbanComponent, typeof i49.CmacsTimelineComponent, typeof i50.CmacsTimelineItemComponent, typeof i51.CmacsSwitchComponent, typeof i52.CmacsSearchComponent, typeof i53.CmacsProgressComponent, typeof i149.NzI18nModule, typeof i150.NzOverlayModule, typeof i120.CmacsDateTimePickerComponent, typeof i121.CmacsDatetimePickerPanelComponent, typeof i122.CmacsDatetimeValueAccessorDirective, typeof i119.CmacsInputNumberComponent, typeof i151.NzInputNumberModule, typeof i152.NzDatePickerModule, typeof i111.CmacsDatePickerComponent, typeof i115.CmacsRangePickerComponent, typeof i112.CmacsMonthPickerComponent, typeof i113.CmacsYearPickerComponent, typeof i114.CmacsWeekPickerComponent, typeof i155.NzBreadCrumbModule, typeof i54.CmacsBreadCrumbComponent, typeof i55.CmacsBreadCrumbItemComponent, typeof i56.CmacsBreadCrumbSeparatorComponent, typeof i156.NzAlertModule, typeof i57.CmacsAlertComponent, typeof i157.Ng2TelInputModule, typeof i58.CmacsPhoneNumberComponent, typeof i158.NzFormModule, typeof i59.CmacsFormControlComponent, typeof i60.CmacsFormItemComponent, typeof i61.CmacsFormLabelComponent, typeof i62.CmacsFormTextComponent, typeof i63.CmacsFormDirective, typeof i64.CmacsFormSplitComponent, typeof i159.NzGridModule, typeof i65.CmacsSectionComponent, typeof i66.CmacsEditorComponent, typeof i178.VgCoreModule, typeof i178.VgControlsModule, typeof i178.VgOverlayPlayModule, typeof i178.VgBufferingModule, typeof i108.CmacsKpiComponent, typeof i176.NzEmptyModule, typeof i90.CmacsDividerComponent, typeof i169.NzDividerModule, typeof i67.CmacsComponentsV2LibComponent, typeof i68.CmacsCheckboxComponent, typeof i69.CmacsCheckboxWrapperComponent, typeof i70.CmacsCheckboxGroupComponent, typeof i162.NzButtonModule, typeof i71.CmacsButtonComponent, typeof i72.CmacsButtonGroupComponent, typeof i163.NzCheckboxModule, typeof i73.CmacsColorPickerComponent, typeof i74.CmacsSliderHandleComponent, typeof i75.CmacsSliderMarksComponent, typeof i76.CmacsSliderStepComponent, typeof i77.CmacsSliderTrackComponent, typeof i78.CmacsSliderComponent, typeof i144.NzToolTipModule, typeof i164.NzSliderModule, typeof i165.NzSwitchModule, typeof i166.NzInputModule, typeof i79.CmacsRadioGroupComponent, typeof i80.CmacsRadioComponent, typeof i81.CmacsRadioButtonDirective, typeof i167.NzRadioModule, typeof i82.CmacsSelectComponent, typeof i83.CmacsSelectTopControlComponent, typeof i84.CmacsSelectUnselectableDirective, typeof i85.CmacsOptionComponent, typeof i86.CmacsOptionContainerComponent, typeof i87.CmacsOptionGroupComponent, typeof i88.CmacsOptionLiComponent, typeof i89.NzFilterGroupOptionPipe, typeof i89.NzFilterOptionPipe, typeof i168.NzSelectModule, typeof i91.CmacsInputDirective, typeof i92.CmacsInputGroupComponent, typeof i93.CmacsAutosizeDirective, typeof i94.CmacsInputGroupSlotComponent, typeof i95.CmacsTextareaCountComponent, typeof i170.NzIconModule, typeof i96.CmacsMenuDirective, typeof i97.CmacsMenuGroupComponent, typeof i98.CmacsSubMenuComponent, typeof i99.NzSubmenuInlineChildComponent, typeof i100.NzSubMenuTitleComponent, typeof i101.NzSubmenuNoneInlineChildComponent, typeof i102.CmacsMenuItemDirective, typeof i171.NzMenuModule, typeof i172.OverlayModule, typeof i173.NzNoAnimationModule, typeof i174.NzOutletModule, typeof i175.NzDropDownModule, typeof i103.CmacsFloatingMenuComponent, typeof i177.DragDropModule, typeof i104.CmacsDropDownDirective, typeof i105.CmacsDropDownADirective, typeof i106.CmacsDropdownMenuComponent, typeof i107.CmacsDropdownButtonDirective, typeof i109.CmacsVideoPlayerComponent, typeof i179.EditorModule, typeof i154.NzTimePickerModule]>;
    static ɵinj: i0.ɵɵInjectorDef<CmacsComponentsV2LibModule>;
}
//# sourceMappingURL=cmacs-components-v2-lib.module.d.ts.map
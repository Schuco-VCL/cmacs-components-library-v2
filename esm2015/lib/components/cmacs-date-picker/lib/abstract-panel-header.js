/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { CandyDate } from 'ng-zorro-antd/core/time';
import * as i0 from "@angular/core";
// tslint:disable-next-line:directive-class-suffix
export class AbstractPanelHeader {
    constructor() {
        this.prefixCls = `ant-picker-header`;
        this.selectors = [];
        this.showSuperPreBtn = true;
        this.showSuperNextBtn = true;
        this.showPreBtn = true;
        this.showNextBtn = true;
        this.panelModeChange = new EventEmitter();
        this.valueChange = new EventEmitter();
    }
    superPreviousTitle() {
        return this.locale.previousYear;
    }
    previousTitle() {
        return this.locale.previousMonth;
    }
    superNextTitle() {
        return this.locale.nextYear;
    }
    nextTitle() {
        return this.locale.nextMonth;
    }
    superPrevious() {
        this.changeValue(this.value.addYears(-1));
    }
    superNext() {
        this.changeValue(this.value.addYears(1));
    }
    previous() {
        this.changeValue(this.value.addMonths(-1));
    }
    next() {
        this.changeValue(this.value.addMonths(1));
    }
    changeValue(value) {
        if (this.value !== value) {
            this.value = value;
            this.valueChange.emit(this.value);
            this.render();
        }
    }
    changeMode(mode) {
        this.panelModeChange.emit(mode);
    }
    render() {
        if (this.value) {
            this.selectors = this.getSelectors();
        }
    }
    ngOnInit() {
        if (!this.value) {
            this.value = new CandyDate(); // Show today by default
        }
        this.selectors = this.getSelectors();
    }
    ngOnChanges(changes) {
        if (changes.value || changes.locale) {
            this.render();
        }
    }
}
AbstractPanelHeader.ɵfac = function AbstractPanelHeader_Factory(t) { return new (t || AbstractPanelHeader)(); };
AbstractPanelHeader.ɵdir = i0.ɵɵdefineDirective({ type: AbstractPanelHeader, inputs: { value: "value", locale: "locale", showSuperPreBtn: "showSuperPreBtn", showSuperNextBtn: "showSuperNextBtn", showPreBtn: "showPreBtn", showNextBtn: "showNextBtn" }, outputs: { panelModeChange: "panelModeChange", valueChange: "valueChange" }, features: [i0.ɵɵNgOnChangesFeature] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AbstractPanelHeader, [{
        type: Directive
    }], null, { value: [{
            type: Input
        }], locale: [{
            type: Input
        }], showSuperPreBtn: [{
            type: Input
        }], showSuperNextBtn: [{
            type: Input
        }], showPreBtn: [{
            type: Input
        }], showNextBtn: [{
            type: Input
        }], panelModeChange: [{
            type: Output
        }], valueChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWJzdHJhY3QtcGFuZWwtaGVhZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWRhdGUtcGlja2VyL2xpYi9hYnN0cmFjdC1wYW5lbC1oZWFkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUgsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFxQixNQUFNLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFNcEQsa0RBQWtEO0FBQ2xELE1BQU0sT0FBZ0IsbUJBQW1CO0lBRnpDO1FBR0UsY0FBUyxHQUFXLG1CQUFtQixDQUFDO1FBQ3hDLGNBQVMsR0FBb0IsRUFBRSxDQUFDO1FBSXZCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLHFCQUFnQixHQUFZLElBQUksQ0FBQztRQUNqQyxlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLGdCQUFXLEdBQVksSUFBSSxDQUFDO1FBRWxCLG9CQUFlLEdBQUcsSUFBSSxZQUFZLEVBQWMsQ0FBQztRQUNqRCxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFhLENBQUM7S0FrRWhFO0lBOURDLGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0lBQ2xDLENBQUM7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQztJQUNuQyxDQUFDO0lBRUQsY0FBYztRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUM7SUFDOUIsQ0FBQztJQUVELFNBQVM7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQy9CLENBQUM7SUFFRCxhQUFhO1FBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELFNBQVM7UUFDUCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQWdCO1FBQzFCLElBQUksSUFBSSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDbkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVELFVBQVUsQ0FBQyxJQUFnQjtRQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRU8sTUFBTTtRQUNaLElBQUksSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNkLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDLHdCQUF3QjtTQUN2RDtRQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsS0FBSyxJQUFJLE9BQU8sQ0FBQyxNQUFNLEVBQUU7WUFDbkMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1NBQ2Y7SUFDSCxDQUFDOztzRkE3RW1CLG1CQUFtQjt3REFBbkIsbUJBQW1CO3VGQUFuQixtQkFBbUI7Y0FGeEMsU0FBUztnQkFNQyxLQUFLO2tCQUFiLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFFYSxlQUFlO2tCQUFqQyxNQUFNO1lBQ1ksV0FBVztrQkFBN0IsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uQ2hhbmdlcywgT25Jbml0LCBPdXRwdXQsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xyXG5pbXBvcnQgeyBOekNhbGVuZGFySTE4bkludGVyZmFjZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IE56RGF0ZU1vZGUgfSBmcm9tICcuLi9zdGFuZGFyZC10eXBlcyc7XHJcbmltcG9ydCB7IFBhbmVsU2VsZWN0b3IgfSBmcm9tICcuL2ludGVyZmFjZSc7XHJcblxyXG5ARGlyZWN0aXZlKClcclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmRpcmVjdGl2ZS1jbGFzcy1zdWZmaXhcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEFic3RyYWN0UGFuZWxIZWFkZXIgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgcHJlZml4Q2xzOiBzdHJpbmcgPSBgYW50LXBpY2tlci1oZWFkZXJgO1xyXG4gIHNlbGVjdG9yczogUGFuZWxTZWxlY3RvcltdID0gW107XHJcblxyXG4gIEBJbnB1dCgpIHZhbHVlITogQ2FuZHlEYXRlO1xyXG4gIEBJbnB1dCgpIGxvY2FsZSE6IE56Q2FsZW5kYXJJMThuSW50ZXJmYWNlO1xyXG4gIEBJbnB1dCgpIHNob3dTdXBlclByZUJ0bjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd1N1cGVyTmV4dEJ0bjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd1ByZUJ0bjogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgc2hvd05leHRCdG46IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgcGFuZWxNb2RlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxOekRhdGVNb2RlPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSB2YWx1ZUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuZHlEYXRlPigpO1xyXG5cclxuICBhYnN0cmFjdCBnZXRTZWxlY3RvcnMoKTogUGFuZWxTZWxlY3RvcltdO1xyXG5cclxuICBzdXBlclByZXZpb3VzVGl0bGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2FsZS5wcmV2aW91c1llYXI7XHJcbiAgfVxyXG5cclxuICBwcmV2aW91c1RpdGxlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2NhbGUucHJldmlvdXNNb250aDtcclxuICB9XHJcblxyXG4gIHN1cGVyTmV4dFRpdGxlKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5sb2NhbGUubmV4dFllYXI7XHJcbiAgfVxyXG5cclxuICBuZXh0VGl0bGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmxvY2FsZS5uZXh0TW9udGg7XHJcbiAgfVxyXG5cclxuICBzdXBlclByZXZpb3VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnZhbHVlLmFkZFllYXJzKC0xKSk7XHJcbiAgfVxyXG5cclxuICBzdXBlck5leHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUuYWRkWWVhcnMoMSkpO1xyXG4gIH1cclxuXHJcbiAgcHJldmlvdXMoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNoYW5nZVZhbHVlKHRoaXMudmFsdWUuYWRkTW9udGhzKC0xKSk7XHJcbiAgfVxyXG5cclxuICBuZXh0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jaGFuZ2VWYWx1ZSh0aGlzLnZhbHVlLmFkZE1vbnRocygxKSk7XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VWYWx1ZSh2YWx1ZTogQ2FuZHlEYXRlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52YWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VNb2RlKG1vZGU6IE56RGF0ZU1vZGUpOiB2b2lkIHtcclxuICAgIHRoaXMucGFuZWxNb2RlQ2hhbmdlLmVtaXQobW9kZSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0b3JzID0gdGhpcy5nZXRTZWxlY3RvcnMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKCF0aGlzLnZhbHVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSBuZXcgQ2FuZHlEYXRlKCk7IC8vIFNob3cgdG9kYXkgYnkgZGVmYXVsdFxyXG4gICAgfVxyXG4gICAgdGhpcy5zZWxlY3RvcnMgPSB0aGlzLmdldFNlbGVjdG9ycygpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMudmFsdWUgfHwgY2hhbmdlcy5sb2NhbGUpIHtcclxuICAgICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19
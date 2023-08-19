import { BACKSPACE, DOWN_ARROW, ENTER, SPACE, TAB, UP_ARROW } from '@angular/cdk/keycodes';
import { Injectable } from '@angular/core';
import { combineLatest, merge, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { distinctUntilChanged, filter, map, share, skip, tap } from 'rxjs/operators';
import { CmacsOptionComponent } from './cmacs-option.component';
import { defaultFilterOption, NzFilterOptionPipe } from './cmacs-option.pipe';
import { isNotNil, isNil } from 'ng-zorro-antd/core/util';
import * as i0 from "@angular/core";
export class CmacsSelectService {
    constructor() {
        // Input params
        this.autoClearSearchValue = true;
        this.serverSearch = false;
        this.tagsOut = false;
        this.cmacsEditable = false;
        this.userDropdown = false;
        this.filterOption = defaultFilterOption;
        this.mode = 'default';
        this.maxMultipleCount = Infinity;
        this.disabled = false;
        // tslint:disable-next-line:no-any
        this.compareWith = (o1, o2) => o1 === o2;
        // selectedValueChanged should emit ngModelChange or not
        // tslint:disable-next-line:no-any
        this.listOfSelectedValueWithEmit$ = new BehaviorSubject({
            value: [],
            emit: false
        });
        // ContentChildren Change
        this.mapOfTemplateOption$ = new BehaviorSubject({
            listOfNzOptionComponent: [],
            listOfNzOptionGroupComponent: []
        });
        // searchValue Change
        this.searchValueRaw$ = new BehaviorSubject('');
        this.editedValueRaw$ = new BehaviorSubject('');
        this.listOfFilteredOption = [];
        this.openRaw$ = new Subject();
        this.checkRaw$ = new Subject();
        this.open = false;
        this.clearInput$ = new Subject();
        this.searchValue = '';
        this.editedValue = '';
        this.isShowNotFound = false;
        // open
        this.open$ = this.openRaw$.pipe(
        //distinctUntilChanged(),
        share(), tap(() => this.clearInput()));
        this.activatedOption$ = new ReplaySubject(1);
        this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(map(data => data.value));
        this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(filter(item => item.emit), map(data => {
            const selectedList = data.value;
            let modelValue = null; // tslint:disable-line:no-any
            if (this.isSingleMode) {
                if (selectedList.length) {
                    if (this.userDropdown) {
                        modelValue = selectedList;
                    }
                    else {
                        modelValue = selectedList[0];
                    }
                }
            }
            else {
                modelValue = selectedList;
            }
            return modelValue;
        }));
        this.searchValue$ = this.searchValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap(value => {
            this.searchValue = value;
            if (value) {
                this.updateActivatedOption(this.listOfFilteredOption[0]);
            }
            this.updateListOfFilteredOption();
        }));
        this.editedValue$ = this.editedValueRaw$.pipe(distinctUntilChanged(), skip(1), share(), tap(value => {
            this.editedValue = value;
        }));
        // tslint:disable-next-line:no-any
        this.listOfSelectedValue = [];
        // flat ViewChildren
        this.listOfTemplateOption = [];
        // tag option
        this.listOfTagOption = [];
        // tag option concat template option
        this.listOfTagAndTemplateOption = [];
        // ViewChildren
        this.listOfNzOptionComponent = [];
        this.listOfNzOptionGroupComponent = [];
        // display in top control
        this.listOfCachedSelectedOption = [];
        // selected value or ViewChildren change
        this.valueOrOption$ = combineLatest(this.listOfSelectedValue$, this.mapOfTemplateOption$).pipe(tap(data => {
            this.listOfSelectedValue = data[0];
            this.listOfNzOptionComponent = data[1].listOfNzOptionComponent;
            this.listOfNzOptionGroupComponent = data[1].listOfNzOptionGroupComponent;
            this.listOfTemplateOption = this.listOfNzOptionComponent.concat(this.listOfNzOptionGroupComponent.reduce((pre, cur) => [...pre, ...cur.listOfNzOptionComponent.toArray()], []));
            this.updateListOfTagOption();
            this.updateListOfFilteredOption();
            this.resetActivatedOptionIfNeeded();
            this.updateListOfCachedOption();
        }), share());
        this.check$ = merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.editedValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(share());
    }
    clickOption(option) {
        /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
        if (!option.nzDisabled) {
            this.updateActivatedOption(option);
            let listOfSelectedValue = [...this.listOfSelectedValue];
            if (this.isMultipleOrTags) {
                const targetValue = !this.userDropdown ? listOfSelectedValue.find(o => this.compareWith(o, option.nzValue)) : listOfSelectedValue.find(o => this.compareWith(o.value, option.nzValue));
                if (isNotNil(targetValue)) {
                    listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
                else if (listOfSelectedValue.length < this.maxMultipleCount) {
                    if (!this.userDropdown) {
                        listOfSelectedValue.push(option.nzValue);
                    }
                    else {
                        listOfSelectedValue.push(option.extendedData);
                    }
                    this.updateListOfSelectedValue(listOfSelectedValue, true);
                }
            }
            else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                if (this.userDropdown) {
                    listOfSelectedValue = [option.extendedData];
                }
                else {
                    listOfSelectedValue = [option.nzValue];
                }
                this.updateListOfSelectedValue(listOfSelectedValue, true);
            }
            if ((this.isSingleMode && !this.cmacsEditable) || this.isTagsSingleSelectMode || this.userDropdown) {
                this.setOpenState(false);
            }
            else if (this.autoClearSearchValue) {
                this.clearInput();
            }
        }
    }
    updateListOfCachedOption() {
        if (this.isSingleMode) {
            const selectedOption = this.listOfTemplateOption.find(o => this.compareWith(o.nzValue, this.listOfSelectedValue[0]));
            if (!isNil(selectedOption)) {
                this.listOfCachedSelectedOption = [selectedOption];
            }
        }
        else {
            const listOfCachedSelectedOption = [];
            this.listOfSelectedValue.forEach(v => {
                const listOfMixedOption = [...this.listOfTagAndTemplateOption, ...this.listOfCachedSelectedOption];
                const option = listOfMixedOption.find(o => this.compareWith(o.nzValue, v));
                if (option) {
                    listOfCachedSelectedOption.push(option);
                }
            });
            this.listOfCachedSelectedOption = listOfCachedSelectedOption;
        }
    }
    updateListOfTagOption() {
        if (this.isTagsMode || this.isTagsSingleSelectMode) {
            const listOfMissValue = this.listOfSelectedValue.filter(value => !this.listOfTemplateOption.find(o => this.compareWith(o.nzValue, value)));
            this.listOfTagOption = listOfMissValue.map(value => {
                const nzOptionComponent = new CmacsOptionComponent();
                nzOptionComponent.nzValue = value;
                nzOptionComponent.nzLabel = value;
                return nzOptionComponent;
            });
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption.concat(this.listOfTagOption)];
        }
        else {
            this.listOfTagAndTemplateOption = [...this.listOfTemplateOption];
        }
    }
    updateAddTagOption() {
        const isMatch = this.listOfTagAndTemplateOption.find(item => item.nzLabel === this.searchValue);
        if ((this.isTagsMode || this.isTagsSingleSelectMode) && this.searchValue !== null
            && this.searchValue !== undefined && this.searchValue.trim() !== '' && !isMatch) {
            const option = new CmacsOptionComponent();
            option.nzValue = this.searchValue;
            option.nzLabel = this.searchValue;
            this.addedTagOption = option;
            this.updateActivatedOption(option);
        }
        else {
            this.addedTagOption = null;
        }
    }
    updateListOfFilteredOption() {
        this.updateAddTagOption();
        const listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
        this.listOfFilteredOption = this.addedTagOption
            ? [this.addedTagOption, ...listOfFilteredOption]
            : [...listOfFilteredOption];
        const isMatch = this.listOfTagAndTemplateOption.find(item => item.nzLabel && item.nzLabel.indexOf(this.searchValue) >= 0);
        this.isShowNotFound = (!this.isTagsMode && !this.isTagsSingleSelectMode && !this.listOfFilteredOption.length)
            || (this.isTagsSingleSelectMode && !isMatch && this.searchValue.length && this.searchValue.trim() === '');
    }
    clearInput() {
        this.clearInput$.next();
    }
    // tslint:disable-next-line:no-any
    updateListOfSelectedValue(value, emit) {
        this.listOfSelectedValueWithEmit$.next({ value, emit });
    }
    updateActivatedOption(option) {
        this.activatedOption$.next(option);
        this.activatedOption = option;
    }
    tokenSeparate(inputValue, tokenSeparators) {
        // auto tokenSeparators
        if (inputValue &&
            inputValue.length &&
            tokenSeparators.length &&
            this.isMultipleOrTags &&
            this.includesSeparators(inputValue, tokenSeparators)) {
            const listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
            this.updateSelectedValueByLabelList(listOfLabel);
            this.clearInput();
        }
    }
    includesSeparators(str, separators) {
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < separators.length; ++i) {
            if (str.lastIndexOf(separators[i]) > 0) {
                return true;
            }
        }
        return false;
    }
    splitBySeparators(str, separators) {
        const reg = new RegExp(`[${separators.join()}]`);
        const array = str.split(reg).filter(token => token);
        return Array.from(new Set(array));
    }
    resetActivatedOptionIfNeeded() {
        const resetActivatedOption = () => {
            const activatedOption = this.listOfFilteredOption.find(item => this.compareWith(item.nzValue, this.listOfSelectedValue[0]));
            this.updateActivatedOption(activatedOption || null);
        };
        if (this.activatedOption) {
            if (!this.listOfFilteredOption.find(item => this.compareWith(item.nzValue, this.activatedOption.nzValue)) ||
                !this.listOfSelectedValue.find(item => this.compareWith(item, this.activatedOption.nzValue))) {
                resetActivatedOption();
            }
        }
        else {
            resetActivatedOption();
        }
    }
    updateTemplateOption(listOfNzOptionComponent, listOfNzOptionGroupComponent) {
        this.mapOfTemplateOption$.next({ listOfNzOptionComponent, listOfNzOptionGroupComponent });
    }
    updateSearchValue(value) {
        this.searchValueRaw$.next(value);
    }
    updateEditedValue(value) {
        this.editedValueRaw$.next(value);
    }
    updateSelectedValueByLabelList(listOfLabel) {
        const listOfSelectedValue = [...this.listOfSelectedValue];
        const listOfMatchOptionValue = this.listOfTagAndTemplateOption
            .filter(item => listOfLabel.indexOf(item.nzLabel) !== -1)
            .map(item => item.nzValue)
            .filter(item => !isNotNil(this.listOfSelectedValue.find(v => this.compareWith(v, item))));
        if (this.isMultipleMode) {
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue], true);
        }
        else {
            const listOfUnMatchOptionValue = listOfLabel.filter(label => this.listOfTagAndTemplateOption.map(item => item.nzLabel).indexOf(label) === -1);
            this.updateListOfSelectedValue([...listOfSelectedValue, ...listOfMatchOptionValue, ...listOfUnMatchOptionValue], true);
        }
    }
    onKeyDown(e) {
        const keyCode = e.keyCode;
        const eventTarget = e.target;
        const listOfFilteredOptionWithoutDisabled = this.listOfFilteredOption.filter(item => !item.nzDisabled);
        const activatedIndex = listOfFilteredOptionWithoutDisabled.findIndex(item => item === this.activatedOption);
        switch (keyCode) {
            case UP_ARROW:
                e.preventDefault();
                const preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabled.length - 1;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[preIndex]);
                break;
            case DOWN_ARROW:
                e.preventDefault();
                const nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabled.length - 1 ? activatedIndex + 1 : 0;
                this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[nextIndex]);
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                }
                break;
            case ENTER:
                e.preventDefault();
                if (this.open) {
                    if (this.activatedOption && !this.activatedOption.nzDisabled) {
                        this.clickOption(this.activatedOption);
                    }
                }
                else {
                    this.setOpenState(true);
                }
                break;
            case BACKSPACE:
                if ((this.isMultipleOrTags || this.isTagsSingleSelectMode) && !eventTarget.value && this.listOfCachedSelectedOption.length && !this.tagsOut) {
                    e.preventDefault();
                    this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                }
                break;
            case SPACE:
                if (!this.disabled && !this.open) {
                    this.setOpenState(true);
                    e.preventDefault();
                }
                break;
            case TAB:
                this.setOpenState(false);
                break;
        }
    }
    // tslint:disable-next-line:no-any
    removeValueFormSelected(option) {
        if (this.disabled || option.nzDisabled) {
            return;
        }
        const listOfSelectedValue = this.listOfSelectedValue.filter(item => !this.compareWith(item, option.nzValue));
        this.updateListOfSelectedValue(listOfSelectedValue, true);
        this.clearInput();
    }
    setOpenState(value) {
        this.openRaw$.next(value);
        this.open = value;
    }
    check() {
        this.checkRaw$.next();
    }
    get isSingleMode() {
        return this.mode === 'default';
    }
    get isTagsMode() {
        return this.mode === 'tags';
    }
    get isTagsSingleSelectMode() {
        return this.mode === 'tagsSingleSelect';
    }
    get isMultipleMode() {
        return this.mode === 'multiple';
    }
    get isMultipleOrTags() {
        return this.mode === 'tags' || this.mode === 'multiple';
    }
}
CmacsSelectService.ɵfac = function CmacsSelectService_Factory(t) { return new (t || CmacsSelectService)(); };
CmacsSelectService.ɵprov = i0.ɵɵdefineInjectable({ token: CmacsSelectService, factory: CmacsSelectService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsSelectService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtc2VsZWN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3Mtc2VsZWN0L2NtYWNzLXNlbGVjdC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzNGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUUsZUFBZSxFQUFFLGFBQWEsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDckYsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyRixPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsa0JBQWtCLEVBQWlCLE1BQU0scUJBQXFCLENBQUM7QUFDN0YsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7QUFHMUQsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjtRQUVFLGVBQWU7UUFDZix5QkFBb0IsR0FBRyxJQUFJLENBQUM7UUFDNUIsaUJBQVksR0FBRyxLQUFLLENBQUM7UUFDckIsWUFBTyxHQUFHLEtBQUssQ0FBQztRQUNoQixrQkFBYSxHQUFHLEtBQUssQ0FBQztRQUN0QixpQkFBWSxHQUFHLEtBQUssQ0FBQztRQUNyQixpQkFBWSxHQUFrQixtQkFBbUIsQ0FBQztRQUNsRCxTQUFJLEdBQXlELFNBQVMsQ0FBQztRQUN2RSxxQkFBZ0IsR0FBRyxRQUFRLENBQUM7UUFDNUIsYUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQixrQ0FBa0M7UUFDbEMsZ0JBQVcsR0FBRyxDQUFDLEVBQU8sRUFBRSxFQUFPLEVBQUUsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDOUMsd0RBQXdEO1FBQ3hELGtDQUFrQztRQUMxQixpQ0FBNEIsR0FBRyxJQUFJLGVBQWUsQ0FBa0M7WUFDMUYsS0FBSyxFQUFFLEVBQUU7WUFDVCxJQUFJLEVBQUUsS0FBSztTQUNaLENBQUMsQ0FBQztRQUNILHlCQUF5QjtRQUNqQix5QkFBb0IsR0FBRyxJQUFJLGVBQWUsQ0FHL0M7WUFDRCx1QkFBdUIsRUFBRSxFQUFFO1lBQzNCLDRCQUE0QixFQUFFLEVBQUU7U0FDakMsQ0FBQyxDQUFDO1FBQ0gscUJBQXFCO1FBQ2Isb0JBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUNsRCxvQkFBZSxHQUFHLElBQUksZUFBZSxDQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQzFELHlCQUFvQixHQUEyQixFQUFFLENBQUM7UUFDMUMsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDbEMsY0FBUyxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDMUIsU0FBSSxHQUFHLEtBQUssQ0FBQztRQUNyQixnQkFBVyxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7UUFDckMsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsZ0JBQVcsR0FBRyxFQUFFLENBQUM7UUFDakIsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDdkIsT0FBTztRQUNQLFVBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7UUFDeEIseUJBQXlCO1FBQ3pCLEtBQUssRUFBRSxFQUNQLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FDN0IsQ0FBQztRQUVGLHFCQUFnQixHQUFHLElBQUksYUFBYSxDQUE4QixDQUFDLENBQUMsQ0FBQztRQUNyRSx5QkFBb0IsR0FBRyxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1FBQ3ZGLGlCQUFZLEdBQUcsSUFBSSxDQUFDLDRCQUE0QixDQUFDLElBQUksQ0FDbkQsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDVCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ2hDLElBQUksVUFBVSxHQUFpQixJQUFJLENBQUMsQ0FBQyw2QkFBNkI7WUFDbEUsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO2dCQUNyQixJQUFJLFlBQVksQ0FBQyxNQUFNLEVBQUU7b0JBQ3ZCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTt3QkFDckIsVUFBVSxHQUFHLFlBQVksQ0FBQztxQkFDM0I7eUJBQU07d0JBQ0wsVUFBVSxHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztxQkFDOUI7aUJBQ0Y7YUFDRjtpQkFBTTtnQkFDTCxVQUFVLEdBQUcsWUFBWSxDQUFDO2FBQzNCO1lBQ0QsT0FBTyxVQUFVLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUNGLGlCQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQ3RDLG9CQUFvQixFQUFFLEVBQ3RCLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDUCxLQUFLLEVBQUUsRUFDUCxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDVixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLEtBQUssRUFBRTtnQkFDVCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDMUQ7WUFDRCxJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FDSCxDQUFDO1FBQ0YsaUJBQVksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FDdEMsb0JBQW9CLEVBQUUsRUFDdEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUNQLEtBQUssRUFBRSxFQUNQLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUNILENBQUM7UUFDRixrQ0FBa0M7UUFDbEMsd0JBQW1CLEdBQVUsRUFBRSxDQUFDO1FBQ2hDLG9CQUFvQjtRQUNwQix5QkFBb0IsR0FBMkIsRUFBRSxDQUFDO1FBQ2xELGFBQWE7UUFDYixvQkFBZSxHQUEyQixFQUFFLENBQUM7UUFDN0Msb0NBQW9DO1FBQ3BDLCtCQUEwQixHQUEyQixFQUFFLENBQUM7UUFDeEQsZUFBZTtRQUNmLDRCQUF1QixHQUEyQixFQUFFLENBQUM7UUFDckQsaUNBQTRCLEdBQWdDLEVBQUUsQ0FBQztRQUcvRCx5QkFBeUI7UUFDekIsK0JBQTBCLEdBQTJCLEVBQUUsQ0FBQztRQUN4RCx3Q0FBd0M7UUFDeEMsbUJBQWMsR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLG9CQUFvQixFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLElBQUksQ0FDdkYsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ1QsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNuQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDO1lBQy9ELElBQUksQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsNEJBQTRCLENBQUM7WUFDekUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxNQUFNLENBQzdELElBQUksQ0FBQyw0QkFBNEIsQ0FBQyxNQUFNLENBQ3RDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsRUFBRSxHQUFHLEdBQUcsQ0FBQyx1QkFBdUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxFQUNoRSxFQUE0QixDQUM3QixDQUNGLENBQUM7WUFDRixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUM3QixJQUFJLENBQUMsMEJBQTBCLEVBQUUsQ0FBQztZQUNsQyxJQUFJLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztZQUNwQyxJQUFJLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUNsQyxDQUFDLENBQUMsRUFDRixLQUFLLEVBQUUsQ0FDUixDQUFDO1FBQ0YsV0FBTSxHQUFHLEtBQUssQ0FDWixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxjQUFjLEVBQ25CLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxnQkFBZ0IsRUFDckIsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDO0tBK1JqQjtJQTdSQyxXQUFXLENBQUMsTUFBNEI7UUFDdEMsOEZBQThGO1FBQzlGLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3RCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuQyxJQUFJLG1CQUFtQixHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN4RCxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTtnQkFDekIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN2TCxJQUFJLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDekIsbUJBQW1CLENBQUMsTUFBTSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDeEUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUMzRDtxQkFBTSxJQUFJLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7b0JBQzdELElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO3dCQUN0QixtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUMxQzt5QkFBTTt3QkFDTCxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUMvQztvQkFDRCxJQUFJLENBQUMseUJBQXlCLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7aUJBQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUNwRSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBQ3JCLG1CQUFtQixHQUFHLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO2lCQUM3QztxQkFBTTtvQkFDTCxtQkFBbUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDeEM7Z0JBQ0QsSUFBSSxDQUFDLHlCQUF5QixDQUFDLG1CQUFtQixFQUFFLElBQUksQ0FBQyxDQUFDO2FBQzNEO1lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksSUFBSSxDQUFDLHNCQUFzQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7Z0JBQ2xHLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDMUI7aUJBQU0sSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUNuQjtTQUNGO0lBQ0gsQ0FBQztJQUVELHdCQUF3QjtRQUN0QixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUN4RCxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQ3pELENBQUM7WUFDRixJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxFQUFFO2dCQUMxQixJQUFJLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQzthQUNwRDtTQUNGO2FBQU07WUFDTCxNQUFNLDBCQUEwQixHQUEyQixFQUFFLENBQUM7WUFDOUQsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDbkMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixFQUFFLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7Z0JBQ25HLE1BQU0sTUFBTSxHQUFHLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRSxJQUFJLE1BQU0sRUFBRTtvQkFDViwwQkFBMEIsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQ3pDO1lBQ0gsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsMEJBQTBCLENBQUM7U0FDOUQ7SUFDSCxDQUFDO0lBRUQscUJBQXFCO1FBQ25CLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDbEQsTUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sQ0FDckQsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FDbEYsQ0FBQztZQUNGLElBQUksQ0FBQyxlQUFlLEdBQUcsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDakQsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLG9CQUFvQixFQUFFLENBQUM7Z0JBQ3JELGlCQUFpQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2xDLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ2xDLE9BQU8saUJBQWlCLENBQUM7WUFDM0IsQ0FBQyxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsMEJBQTBCLEdBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7U0FDL0Y7YUFBTTtZQUNMLElBQUksQ0FBQywwQkFBMEIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7U0FDbEU7SUFDSCxDQUFDO0lBRUQsa0JBQWtCO1FBQ2hCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNoRyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxLQUFLLElBQUk7ZUFDNUUsSUFBSSxDQUFDLFdBQVcsS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDakYsTUFBTSxNQUFNLEdBQUcsSUFBSSxvQkFBb0IsRUFBRSxDQUFDO1lBQzFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztZQUNsQyxNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7WUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxNQUFNLENBQUM7WUFDN0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3BDO2FBQU07WUFDTCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztTQUM1QjtJQUNILENBQUM7SUFFRCwwQkFBMEI7UUFDeEIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDMUIsTUFBTSxvQkFBb0IsR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUMsU0FBUyxDQUM3RCxJQUFJLENBQUMsMEJBQTBCLEVBQy9CLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxZQUFZLEVBQ2pCLElBQUksQ0FBQyxZQUFZLENBQ2xCLENBQUM7UUFDRixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGNBQWM7WUFDN0MsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLG9CQUFvQixDQUFDO1lBQ2hELENBQUMsQ0FBQyxDQUFDLEdBQUcsb0JBQW9CLENBQUMsQ0FBQztRQUM5QixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDMUgsSUFBSSxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLENBQUM7ZUFDeEcsQ0FBQyxJQUFJLENBQUMsc0JBQXNCLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUM5RyxDQUFDO0lBRUQsVUFBVTtRQUNSLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFrQztJQUNsQyx5QkFBeUIsQ0FBQyxLQUFZLEVBQUUsSUFBYTtRQUNuRCxJQUFJLENBQUMsNEJBQTRCLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHFCQUFxQixDQUFDLE1BQW1DO1FBQ3ZELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7SUFDaEMsQ0FBQztJQUVELGFBQWEsQ0FBQyxVQUFrQixFQUFFLGVBQXlCO1FBQ3pELHVCQUF1QjtRQUN2QixJQUNFLFVBQVU7WUFDVixVQUFVLENBQUMsTUFBTTtZQUNqQixlQUFlLENBQUMsTUFBTTtZQUN0QixJQUFJLENBQUMsZ0JBQWdCO1lBQ3JCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLEVBQUUsZUFBZSxDQUFDLEVBQ3BEO1lBQ0EsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFVBQVUsRUFBRSxlQUFlLENBQUMsQ0FBQztZQUN4RSxJQUFJLENBQUMsOEJBQThCLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVELGtCQUFrQixDQUFDLEdBQXNCLEVBQUUsVUFBb0I7UUFDN0QseUNBQXlDO1FBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzFDLElBQUksR0FBRyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3RDLE9BQU8sSUFBSSxDQUFDO2FBQ2I7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQXNCLEVBQUUsVUFBb0I7UUFDNUQsTUFBTSxHQUFHLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxVQUFVLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE1BQU0sS0FBSyxHQUFJLEdBQWMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEUsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELDRCQUE0QjtRQUMxQixNQUFNLG9CQUFvQixHQUFHLEdBQUcsRUFBRTtZQUNoQyxNQUFNLGVBQWUsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQzVELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FDNUQsQ0FBQztZQUNGLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxlQUFlLElBQUksSUFBSSxDQUFDLENBQUM7UUFDdEQsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQ0UsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxlQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUN0RyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsZUFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUM3RjtnQkFDQSxvQkFBb0IsRUFBRSxDQUFDO2FBQ3hCO1NBQ0Y7YUFBTTtZQUNMLG9CQUFvQixFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBRUQsb0JBQW9CLENBQ2xCLHVCQUErQyxFQUMvQyw0QkFBeUQ7UUFFekQsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxFQUFFLHVCQUF1QixFQUFFLDRCQUE0QixFQUFFLENBQUMsQ0FBQztJQUM1RixDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsaUJBQWlCLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBRUQsOEJBQThCLENBQUMsV0FBcUI7UUFDbEQsTUFBTSxtQkFBbUIsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDMUQsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLENBQUMsMEJBQTBCO2FBQzNELE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3hELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7YUFDekIsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVGLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxHQUFHLG1CQUFtQixFQUFFLEdBQUcsc0JBQXNCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUMzRjthQUFNO1lBQ0wsTUFBTSx3QkFBd0IsR0FBRyxXQUFXLENBQUMsTUFBTSxDQUNqRCxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUN6RixDQUFDO1lBQ0YsSUFBSSxDQUFDLHlCQUF5QixDQUM1QixDQUFDLEdBQUcsbUJBQW1CLEVBQUUsR0FBRyxzQkFBc0IsRUFBRSxHQUFHLHdCQUF3QixDQUFDLEVBQ2hGLElBQUksQ0FDTCxDQUFDO1NBQ0g7SUFDSCxDQUFDO0lBRUQsU0FBUyxDQUFDLENBQWdCO1FBQ3hCLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDMUIsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFDLE1BQTBCLENBQUM7UUFDakQsTUFBTSxtQ0FBbUMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDdkcsTUFBTSxjQUFjLEdBQUcsbUNBQW1DLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM1RyxRQUFRLE9BQU8sRUFBRTtZQUNmLEtBQUssUUFBUTtnQkFDWCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLE1BQU0sUUFBUSxHQUFHLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLG1DQUFtQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7Z0JBQzFHLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxtQ0FBbUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2dCQUMxRSxNQUFNO1lBQ1IsS0FBSyxVQUFVO2dCQUNiLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztnQkFDbkIsTUFBTSxTQUFTLEdBQUcsY0FBYyxHQUFHLG1DQUFtQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDM0csSUFBSSxDQUFDLHFCQUFxQixDQUFDLG1DQUFtQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNFLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDaEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDekI7Z0JBQ0QsTUFBTTtZQUNSLEtBQUssS0FBSztnQkFDUixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDYixJQUFJLElBQUksQ0FBQyxlQUFlLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRTt3QkFDNUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7cUJBQ3hDO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3pCO2dCQUNELE1BQU07WUFDUixLQUFLLFNBQVM7Z0JBQ1osSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxJQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUU7b0JBQzNJLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDbkIsSUFBSSxDQUFDLHVCQUF1QixDQUFDLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNHO2dCQUNELE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO29CQUNoQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN4QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7aUJBQ3BCO2dCQUNELE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDekIsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUVELGtDQUFrQztJQUNsQyx1QkFBdUIsQ0FBQyxNQUE0QjtRQUNsRCxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTtZQUN0QyxPQUFPO1NBQ1I7UUFDRCxNQUFNLG1CQUFtQixHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1FBQzdHLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVELFlBQVksQ0FBQyxLQUFjO1FBQ3pCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzFCLElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQztJQUNqQyxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQztJQUM5QixDQUFDO0lBRUQsSUFBSSxzQkFBc0I7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLGtCQUFrQixDQUFDO0lBQzFDLENBQUM7SUFFRCxJQUFJLGNBQWM7UUFDaEIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBRUQsSUFBSSxnQkFBZ0I7UUFDbEIsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFVBQVUsQ0FBQztJQUMxRCxDQUFDOztvRkE5WlUsa0JBQWtCOzBEQUFsQixrQkFBa0IsV0FBbEIsa0JBQWtCO3VGQUFsQixrQkFBa0I7Y0FEOUIsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJBQ0tTUEFDRSwgRE9XTl9BUlJPVywgRU5URVIsIFNQQUNFLCBUQUIsIFVQX0FSUk9XIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBtZXJnZSwgQmVoYXZpb3JTdWJqZWN0LCBSZXBsYXlTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCwgc2hhcmUsIHNraXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnQgfSBmcm9tICcuL2NtYWNzLW9wdGlvbi1ncm91cC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDbWFjc09wdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGRlZmF1bHRGaWx0ZXJPcHRpb24sIE56RmlsdGVyT3B0aW9uUGlwZSwgVEZpbHRlck9wdGlvbiB9IGZyb20gJy4vY21hY3Mtb3B0aW9uLnBpcGUnO1xyXG5pbXBvcnQgeyBpc05vdE5pbCwgaXNOaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1NlbGVjdFNlcnZpY2Uge1xyXG4gIC8vIElucHV0IHBhcmFtc1xyXG4gIGF1dG9DbGVhclNlYXJjaFZhbHVlID0gdHJ1ZTtcclxuICBzZXJ2ZXJTZWFyY2ggPSBmYWxzZTtcclxuICB0YWdzT3V0ID0gZmFsc2U7XHJcbiAgY21hY3NFZGl0YWJsZSA9IGZhbHNlO1xyXG4gIHVzZXJEcm9wZG93biA9IGZhbHNlO1xyXG4gIGZpbHRlck9wdGlvbjogVEZpbHRlck9wdGlvbiA9IGRlZmF1bHRGaWx0ZXJPcHRpb247XHJcbiAgbW9kZTogJ2RlZmF1bHQnIHwgJ211bHRpcGxlJyB8ICd0YWdzJyB8ICd0YWdzU2luZ2xlU2VsZWN0JyA9ICdkZWZhdWx0JztcclxuICBtYXhNdWx0aXBsZUNvdW50ID0gSW5maW5pdHk7XHJcbiAgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgY29tcGFyZVdpdGggPSAobzE6IGFueSwgbzI6IGFueSkgPT4gbzEgPT09IG8yO1xyXG4gIC8vIHNlbGVjdGVkVmFsdWVDaGFuZ2VkIHNob3VsZCBlbWl0IG5nTW9kZWxDaGFuZ2Ugb3Igbm90XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHByaXZhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZVdpdGhFbWl0JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8eyB2YWx1ZTogYW55W107IGVtaXQ6IGJvb2xlYW4gfT4oe1xyXG4gICAgdmFsdWU6IFtdLFxyXG4gICAgZW1pdDogZmFsc2VcclxuICB9KTtcclxuICAvLyBDb250ZW50Q2hpbGRyZW4gQ2hhbmdlXHJcbiAgcHJpdmF0ZSBtYXBPZlRlbXBsYXRlT3B0aW9uJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8e1xyXG4gICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IENtYWNzT3B0aW9uQ29tcG9uZW50W107XHJcbiAgICBsaXN0T2ZOek9wdGlvbkdyb3VwQ29tcG9uZW50OiBDbWFjc09wdGlvbkdyb3VwQ29tcG9uZW50W107XHJcbiAgfT4oe1xyXG4gICAgbGlzdE9mTnpPcHRpb25Db21wb25lbnQ6IFtdLFxyXG4gICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogW11cclxuICB9KTtcclxuICAvLyBzZWFyY2hWYWx1ZSBDaGFuZ2VcclxuICBwcml2YXRlIHNlYXJjaFZhbHVlUmF3JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8c3RyaW5nPignJyk7XHJcbiAgcHJpdmF0ZSBlZGl0ZWRWYWx1ZVJhdyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHN0cmluZz4oJycpO1xyXG4gIGxpc3RPZkZpbHRlcmVkT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgcHJpdmF0ZSBvcGVuUmF3JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSBjaGVja1JhdyQgPSBuZXcgU3ViamVjdCgpO1xyXG4gIHByaXZhdGUgb3BlbiA9IGZhbHNlO1xyXG4gIGNsZWFySW5wdXQkID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICBzZWFyY2hWYWx1ZSA9ICcnO1xyXG4gIGVkaXRlZFZhbHVlID0gJyc7XHJcbiAgaXNTaG93Tm90Rm91bmQgPSBmYWxzZTtcclxuICAvLyBvcGVuXHJcbiAgb3BlbiQgPSB0aGlzLm9wZW5SYXckLnBpcGUoXHJcbiAgICAvL2Rpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICBzaGFyZSgpLFxyXG4gICAgdGFwKCgpID0+IHRoaXMuY2xlYXJJbnB1dCgpKVxyXG4gICk7XHJcbiAgYWN0aXZhdGVkT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCB8IG51bGw7XHJcbiAgYWN0aXZhdGVkT3B0aW9uJCA9IG5ldyBSZXBsYXlTdWJqZWN0PENtYWNzT3B0aW9uQ29tcG9uZW50IHwgbnVsbD4oMSk7XHJcbiAgbGlzdE9mU2VsZWN0ZWRWYWx1ZSQgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQucGlwZShtYXAoZGF0YSA9PiBkYXRhLnZhbHVlKSk7XHJcbiAgbW9kZWxDaGFuZ2UkID0gdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlV2l0aEVtaXQkLnBpcGUoXHJcbiAgICBmaWx0ZXIoaXRlbSA9PiBpdGVtLmVtaXQpLFxyXG4gICAgbWFwKGRhdGEgPT4ge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZExpc3QgPSBkYXRhLnZhbHVlO1xyXG4gICAgICBsZXQgbW9kZWxWYWx1ZTogYW55W10gfCBudWxsID0gbnVsbDsgLy8gdHNsaW50OmRpc2FibGUtbGluZTpuby1hbnlcclxuICAgICAgaWYgKHRoaXMuaXNTaW5nbGVNb2RlKSB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkTGlzdC5sZW5ndGgpIHtcclxuICAgICAgICAgIGlmICh0aGlzLnVzZXJEcm9wZG93bikge1xyXG4gICAgICAgICAgICBtb2RlbFZhbHVlID0gc2VsZWN0ZWRMaXN0O1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbW9kZWxWYWx1ZSA9IHNlbGVjdGVkTGlzdFswXTtcclxuICAgICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtb2RlbFZhbHVlID0gc2VsZWN0ZWRMaXN0O1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBtb2RlbFZhbHVlO1xyXG4gICAgfSlcclxuICApO1xyXG4gIHNlYXJjaFZhbHVlJCA9IHRoaXMuc2VhcmNoVmFsdWVSYXckLnBpcGUoXHJcbiAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpLFxyXG4gICAgc2tpcCgxKSxcclxuICAgIHNoYXJlKCksXHJcbiAgICB0YXAodmFsdWUgPT4ge1xyXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQWN0aXZhdGVkT3B0aW9uKHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb25bMF0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcclxuICAgIH0pXHJcbiAgKTtcclxuICBlZGl0ZWRWYWx1ZSQgPSB0aGlzLmVkaXRlZFZhbHVlUmF3JC5waXBlKFxyXG4gICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgIHNraXAoMSksXHJcbiAgICBzaGFyZSgpLFxyXG4gICAgdGFwKHZhbHVlID0+IHtcclxuICAgICAgdGhpcy5lZGl0ZWRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgfSlcclxuICApO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBsaXN0T2ZTZWxlY3RlZFZhbHVlOiBhbnlbXSA9IFtdO1xyXG4gIC8vIGZsYXQgVmlld0NoaWxkcmVuXHJcbiAgbGlzdE9mVGVtcGxhdGVPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICAvLyB0YWcgb3B0aW9uXHJcbiAgbGlzdE9mVGFnT3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudFtdID0gW107XHJcbiAgLy8gdGFnIG9wdGlvbiBjb25jYXQgdGVtcGxhdGUgb3B0aW9uXHJcbiAgbGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICAvLyBWaWV3Q2hpbGRyZW5cclxuICBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudDogQ21hY3NPcHRpb25Db21wb25lbnRbXSA9IFtdO1xyXG4gIGxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ6IENtYWNzT3B0aW9uR3JvdXBDb21wb25lbnRbXSA9IFtdO1xyXG4gIC8vIGNsaWNrIG9yIGVudGVyIGFkZCB0YWcgb3B0aW9uXHJcbiAgYWRkZWRUYWdPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50IHwgbnVsbDtcclxuICAvLyBkaXNwbGF5IGluIHRvcCBjb250cm9sXHJcbiAgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICAvLyBzZWxlY3RlZCB2YWx1ZSBvciBWaWV3Q2hpbGRyZW4gY2hhbmdlXHJcbiAgdmFsdWVPck9wdGlvbiQgPSBjb21iaW5lTGF0ZXN0KHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSQsIHRoaXMubWFwT2ZUZW1wbGF0ZU9wdGlvbiQpLnBpcGUoXHJcbiAgICB0YXAoZGF0YSA9PiB7XHJcbiAgICAgIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IGRhdGFbMF07XHJcbiAgICAgIHRoaXMubGlzdE9mTnpPcHRpb25Db21wb25lbnQgPSBkYXRhWzFdLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50O1xyXG4gICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQgPSBkYXRhWzFdLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQ7XHJcbiAgICAgIHRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24gPSB0aGlzLmxpc3RPZk56T3B0aW9uQ29tcG9uZW50LmNvbmNhdChcclxuICAgICAgICB0aGlzLmxpc3RPZk56T3B0aW9uR3JvdXBDb21wb25lbnQucmVkdWNlKFxyXG4gICAgICAgICAgKHByZSwgY3VyKSA9PiBbLi4ucHJlLCAuLi5jdXIubGlzdE9mTnpPcHRpb25Db21wb25lbnQudG9BcnJheSgpXSxcclxuICAgICAgICAgIFtdIGFzIENtYWNzT3B0aW9uQ29tcG9uZW50W11cclxuICAgICAgICApXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mVGFnT3B0aW9uKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTtcclxuICAgICAgdGhpcy5yZXNldEFjdGl2YXRlZE9wdGlvbklmTmVlZGVkKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mQ2FjaGVkT3B0aW9uKCk7XHJcbiAgICB9KSxcclxuICAgIHNoYXJlKClcclxuICApO1xyXG4gIGNoZWNrJCA9IG1lcmdlKFxyXG4gICAgdGhpcy5jaGVja1JhdyQsXHJcbiAgICB0aGlzLnZhbHVlT3JPcHRpb24kLFxyXG4gICAgdGhpcy5zZWFyY2hWYWx1ZSQsXHJcbiAgICB0aGlzLmVkaXRlZFZhbHVlJCxcclxuICAgIHRoaXMuYWN0aXZhdGVkT3B0aW9uJCxcclxuICAgIHRoaXMub3BlbiQsXHJcbiAgICB0aGlzLm1vZGVsQ2hhbmdlJFxyXG4gICkucGlwZShzaGFyZSgpKTtcclxuXHJcbiAgY2xpY2tPcHRpb24ob3B0aW9uOiBDbWFjc09wdGlvbkNvbXBvbmVudCk6IHZvaWQge1xyXG4gICAgLyoqIHVwZGF0ZSBsaXN0T2ZTZWxlY3RlZE9wdGlvbiAtPiB1cGRhdGUgbGlzdE9mU2VsZWN0ZWRWYWx1ZSAtPiBuZXh0IGxpc3RPZlNlbGVjdGVkVmFsdWUkICoqL1xyXG4gICAgaWYgKCFvcHRpb24ubnpEaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihvcHRpb24pO1xyXG4gICAgICBsZXQgbGlzdE9mU2VsZWN0ZWRWYWx1ZSA9IFsuLi50aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVdO1xyXG4gICAgICBpZiAodGhpcy5pc011bHRpcGxlT3JUYWdzKSB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0VmFsdWUgPSAhdGhpcy51c2VyRHJvcGRvd24gPyBsaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8sIG9wdGlvbi5uelZhbHVlKSkgOiBsaXN0T2ZTZWxlY3RlZFZhbHVlLmZpbmQobyA9PiB0aGlzLmNvbXBhcmVXaXRoKG8udmFsdWUsIG9wdGlvbi5uelZhbHVlKSk7XHJcbiAgICAgICAgaWYgKGlzTm90TmlsKHRhcmdldFZhbHVlKSkge1xyXG4gICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5zcGxpY2UobGlzdE9mU2VsZWN0ZWRWYWx1ZS5pbmRleE9mKHRhcmdldFZhbHVlKSwgMSk7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUobGlzdE9mU2VsZWN0ZWRWYWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChsaXN0T2ZTZWxlY3RlZFZhbHVlLmxlbmd0aCA8IHRoaXMubWF4TXVsdGlwbGVDb3VudCkge1xyXG4gICAgICAgICAgaWYgKCF0aGlzLnVzZXJEcm9wZG93bikge1xyXG4gICAgICAgICAgICBsaXN0T2ZTZWxlY3RlZFZhbHVlLnB1c2gob3B0aW9uLm56VmFsdWUpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGlzdE9mU2VsZWN0ZWRWYWx1ZS5wdXNoKG9wdGlvbi5leHRlbmRlZERhdGEpO1xyXG4gICAgICAgICAgfSAgIFxyXG4gICAgICAgICAgdGhpcy51cGRhdGVMaXN0T2ZTZWxlY3RlZFZhbHVlKGxpc3RPZlNlbGVjdGVkVmFsdWUsIHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICghdGhpcy5jb21wYXJlV2l0aChsaXN0T2ZTZWxlY3RlZFZhbHVlWzBdLCBvcHRpb24ubnpWYWx1ZSkpIHtcclxuICAgICAgICBpZiAodGhpcy51c2VyRHJvcGRvd24pIHtcclxuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbb3B0aW9uLmV4dGVuZGVkRGF0YV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGxpc3RPZlNlbGVjdGVkVmFsdWUgPSBbb3B0aW9uLm56VmFsdWVdO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoKHRoaXMuaXNTaW5nbGVNb2RlICYmICF0aGlzLmNtYWNzRWRpdGFibGUpIHx8IHRoaXMuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSB8fCB0aGlzLnVzZXJEcm9wZG93bikge1xyXG4gICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKGZhbHNlKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmF1dG9DbGVhclNlYXJjaFZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhcklucHV0KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUxpc3RPZkNhY2hlZE9wdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzU2luZ2xlTW9kZSkge1xyXG4gICAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IHRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24uZmluZChvID0+XHJcbiAgICAgICAgdGhpcy5jb21wYXJlV2l0aChvLm56VmFsdWUsIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVswXSlcclxuICAgICAgKTtcclxuICAgICAgaWYgKCFpc05pbChzZWxlY3RlZE9wdGlvbikpIHtcclxuICAgICAgICB0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uID0gW3NlbGVjdGVkT3B0aW9uXTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb246IENtYWNzT3B0aW9uQ29tcG9uZW50W10gPSBbXTtcclxuICAgICAgdGhpcy5saXN0T2ZTZWxlY3RlZFZhbHVlLmZvckVhY2godiA9PiB7XHJcbiAgICAgICAgY29uc3QgbGlzdE9mTWl4ZWRPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbiwgLi4udGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbl07XHJcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gbGlzdE9mTWl4ZWRPcHRpb24uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2KSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbikge1xyXG4gICAgICAgICAgbGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ucHVzaChvcHRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24gPSBsaXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZUxpc3RPZlRhZ09wdGlvbigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmlzVGFnc01vZGUgfHwgdGhpcy5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZk1pc3NWYWx1ZSA9IHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maWx0ZXIoXHJcbiAgICAgICAgdmFsdWUgPT4gIXRoaXMubGlzdE9mVGVtcGxhdGVPcHRpb24uZmluZChvID0+IHRoaXMuY29tcGFyZVdpdGgoby5uelZhbHVlLCB2YWx1ZSkpXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMubGlzdE9mVGFnT3B0aW9uID0gbGlzdE9mTWlzc1ZhbHVlLm1hcCh2YWx1ZSA9PiB7XHJcbiAgICAgICAgY29uc3QgbnpPcHRpb25Db21wb25lbnQgPSBuZXcgQ21hY3NPcHRpb25Db21wb25lbnQoKTtcclxuICAgICAgICBuek9wdGlvbkNvbXBvbmVudC5uelZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgbnpPcHRpb25Db21wb25lbnQubnpMYWJlbCA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiBuek9wdGlvbkNvbXBvbmVudDtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbi5jb25jYXQodGhpcy5saXN0T2ZUYWdPcHRpb24pXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24gPSBbLi4udGhpcy5saXN0T2ZUZW1wbGF0ZU9wdGlvbl07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVBZGRUYWdPcHRpb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc01hdGNoID0gdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvbi5maW5kKGl0ZW0gPT4gaXRlbS5uekxhYmVsID09PSB0aGlzLnNlYXJjaFZhbHVlKTtcclxuICAgIGlmICgodGhpcy5pc1RhZ3NNb2RlIHx8IHRoaXMuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSkgJiYgdGhpcy5zZWFyY2hWYWx1ZSAhPT0gbnVsbFxyXG4gICAgICAmJiB0aGlzLnNlYXJjaFZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zZWFyY2hWYWx1ZS50cmltKCkgIT09ICcnICYmICFpc01hdGNoKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IG5ldyBDbWFjc09wdGlvbkNvbXBvbmVudCgpO1xyXG4gICAgICBvcHRpb24ubnpWYWx1ZSA9IHRoaXMuc2VhcmNoVmFsdWU7XHJcbiAgICAgIG9wdGlvbi5uekxhYmVsID0gdGhpcy5zZWFyY2hWYWx1ZTtcclxuICAgICAgdGhpcy5hZGRlZFRhZ09wdGlvbiA9IG9wdGlvbjtcclxuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24ob3B0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuYWRkZWRUYWdPcHRpb24gPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlTGlzdE9mRmlsdGVyZWRPcHRpb24oKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZUFkZFRhZ09wdGlvbigpO1xyXG4gICAgY29uc3QgbGlzdE9mRmlsdGVyZWRPcHRpb24gPSBuZXcgTnpGaWx0ZXJPcHRpb25QaXBlKCkudHJhbnNmb3JtKFxyXG4gICAgICB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLFxyXG4gICAgICB0aGlzLnNlYXJjaFZhbHVlLFxyXG4gICAgICB0aGlzLmZpbHRlck9wdGlvbixcclxuICAgICAgdGhpcy5zZXJ2ZXJTZWFyY2hcclxuICAgICk7XHJcbiAgICB0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uID0gdGhpcy5hZGRlZFRhZ09wdGlvblxyXG4gICAgICA/IFt0aGlzLmFkZGVkVGFnT3B0aW9uLCAuLi5saXN0T2ZGaWx0ZXJlZE9wdGlvbl1cclxuICAgICAgOiBbLi4ubGlzdE9mRmlsdGVyZWRPcHRpb25dO1xyXG4gICAgY29uc3QgaXNNYXRjaCA9IHRoaXMubGlzdE9mVGFnQW5kVGVtcGxhdGVPcHRpb24uZmluZChpdGVtID0+IGl0ZW0ubnpMYWJlbCAmJiBpdGVtLm56TGFiZWwuaW5kZXhPZih0aGlzLnNlYXJjaFZhbHVlKSA+PSAwKTtcclxuICAgIHRoaXMuaXNTaG93Tm90Rm91bmQgPSAoIXRoaXMuaXNUYWdzTW9kZSAmJiAhdGhpcy5pc1RhZ3NTaW5nbGVTZWxlY3RNb2RlICYmICF0aGlzLmxpc3RPZkZpbHRlcmVkT3B0aW9uLmxlbmd0aClcclxuICAgICAgfHwgKHRoaXMuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSAmJiAhaXNNYXRjaCAmJiB0aGlzLnNlYXJjaFZhbHVlLmxlbmd0aCAmJiB0aGlzLnNlYXJjaFZhbHVlLnRyaW0oKSA9PT0gJycpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXJJbnB1dCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2xlYXJJbnB1dCQubmV4dCgpO1xyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUodmFsdWU6IGFueVtdLCBlbWl0OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWVXaXRoRW1pdCQubmV4dCh7IHZhbHVlLCBlbWl0IH0pO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlQWN0aXZhdGVkT3B0aW9uKG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQgfCBudWxsKTogdm9pZCB7XHJcbiAgICB0aGlzLmFjdGl2YXRlZE9wdGlvbiQubmV4dChvcHRpb24pO1xyXG4gICAgdGhpcy5hY3RpdmF0ZWRPcHRpb24gPSBvcHRpb247XHJcbiAgfVxyXG5cclxuICB0b2tlblNlcGFyYXRlKGlucHV0VmFsdWU6IHN0cmluZywgdG9rZW5TZXBhcmF0b3JzOiBzdHJpbmdbXSk6IHZvaWQge1xyXG4gICAgLy8gYXV0byB0b2tlblNlcGFyYXRvcnNcclxuICAgIGlmIChcclxuICAgICAgaW5wdXRWYWx1ZSAmJlxyXG4gICAgICBpbnB1dFZhbHVlLmxlbmd0aCAmJlxyXG4gICAgICB0b2tlblNlcGFyYXRvcnMubGVuZ3RoICYmXHJcbiAgICAgIHRoaXMuaXNNdWx0aXBsZU9yVGFncyAmJlxyXG4gICAgICB0aGlzLmluY2x1ZGVzU2VwYXJhdG9ycyhpbnB1dFZhbHVlLCB0b2tlblNlcGFyYXRvcnMpXHJcbiAgICApIHtcclxuICAgICAgY29uc3QgbGlzdE9mTGFiZWwgPSB0aGlzLnNwbGl0QnlTZXBhcmF0b3JzKGlucHV0VmFsdWUsIHRva2VuU2VwYXJhdG9ycyk7XHJcbiAgICAgIHRoaXMudXBkYXRlU2VsZWN0ZWRWYWx1ZUJ5TGFiZWxMaXN0KGxpc3RPZkxhYmVsKTtcclxuICAgICAgdGhpcy5jbGVhcklucHV0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbmNsdWRlc1NlcGFyYXRvcnMoc3RyOiBzdHJpbmcgfCBzdHJpbmdbXSwgc2VwYXJhdG9yczogc3RyaW5nW10pOiBib29sZWFuIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpwcmVmZXItZm9yLW9mXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcGFyYXRvcnMubGVuZ3RoOyArK2kpIHtcclxuICAgICAgaWYgKHN0ci5sYXN0SW5kZXhPZihzZXBhcmF0b3JzW2ldKSA+IDApIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgc3BsaXRCeVNlcGFyYXRvcnMoc3RyOiBzdHJpbmcgfCBzdHJpbmdbXSwgc2VwYXJhdG9yczogc3RyaW5nW10pOiBzdHJpbmdbXSB7XHJcbiAgICBjb25zdCByZWcgPSBuZXcgUmVnRXhwKGBbJHtzZXBhcmF0b3JzLmpvaW4oKX1dYCk7XHJcbiAgICBjb25zdCBhcnJheSA9IChzdHIgYXMgc3RyaW5nKS5zcGxpdChyZWcpLmZpbHRlcih0b2tlbiA9PiB0b2tlbik7XHJcbiAgICByZXR1cm4gQXJyYXkuZnJvbShuZXcgU2V0KGFycmF5KSk7XHJcbiAgfVxyXG5cclxuICByZXNldEFjdGl2YXRlZE9wdGlvbklmTmVlZGVkKCk6IHZvaWQge1xyXG4gICAgY29uc3QgcmVzZXRBY3RpdmF0ZWRPcHRpb24gPSAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGFjdGl2YXRlZE9wdGlvbiA9IHRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmluZChpdGVtID0+XHJcbiAgICAgICAgdGhpcy5jb21wYXJlV2l0aChpdGVtLm56VmFsdWUsIHRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZVswXSlcclxuICAgICAgKTtcclxuICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24oYWN0aXZhdGVkT3B0aW9uIHx8IG51bGwpO1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLmFjdGl2YXRlZE9wdGlvbikge1xyXG4gICAgICBpZiAoXHJcbiAgICAgICAgIXRoaXMubGlzdE9mRmlsdGVyZWRPcHRpb24uZmluZChpdGVtID0+IHRoaXMuY29tcGFyZVdpdGgoaXRlbS5uelZhbHVlLCB0aGlzLmFjdGl2YXRlZE9wdGlvbiEubnpWYWx1ZSkpIHx8XHJcbiAgICAgICAgIXRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZS5maW5kKGl0ZW0gPT4gdGhpcy5jb21wYXJlV2l0aChpdGVtLCB0aGlzLmFjdGl2YXRlZE9wdGlvbiEubnpWYWx1ZSkpXHJcbiAgICAgICkge1xyXG4gICAgICAgIHJlc2V0QWN0aXZhdGVkT3B0aW9uKCk7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJlc2V0QWN0aXZhdGVkT3B0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUZW1wbGF0ZU9wdGlvbihcclxuICAgIGxpc3RPZk56T3B0aW9uQ29tcG9uZW50OiBDbWFjc09wdGlvbkNvbXBvbmVudFtdLFxyXG4gICAgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudDogQ21hY3NPcHRpb25Hcm91cENvbXBvbmVudFtdXHJcbiAgKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hcE9mVGVtcGxhdGVPcHRpb24kLm5leHQoeyBsaXN0T2ZOek9wdGlvbkNvbXBvbmVudCwgbGlzdE9mTnpPcHRpb25Hcm91cENvbXBvbmVudCB9KTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVNlYXJjaFZhbHVlKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMuc2VhcmNoVmFsdWVSYXckLm5leHQodmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlRWRpdGVkVmFsdWUodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5lZGl0ZWRWYWx1ZVJhdyQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTZWxlY3RlZFZhbHVlQnlMYWJlbExpc3QobGlzdE9mTGFiZWw6IHN0cmluZ1tdKTogdm9pZCB7XHJcbiAgICBjb25zdCBsaXN0T2ZTZWxlY3RlZFZhbHVlID0gWy4uLnRoaXMubGlzdE9mU2VsZWN0ZWRWYWx1ZV07XHJcbiAgICBjb25zdCBsaXN0T2ZNYXRjaE9wdGlvblZhbHVlID0gdGhpcy5saXN0T2ZUYWdBbmRUZW1wbGF0ZU9wdGlvblxyXG4gICAgICAuZmlsdGVyKGl0ZW0gPT4gbGlzdE9mTGFiZWwuaW5kZXhPZihpdGVtLm56TGFiZWwpICE9PSAtMSlcclxuICAgICAgLm1hcChpdGVtID0+IGl0ZW0ubnpWYWx1ZSlcclxuICAgICAgLmZpbHRlcihpdGVtID0+ICFpc05vdE5pbCh0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmluZCh2ID0+IHRoaXMuY29tcGFyZVdpdGgodiwgaXRlbSkpKSk7XHJcbiAgICBpZiAodGhpcy5pc011bHRpcGxlTW9kZSkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUxpc3RPZlNlbGVjdGVkVmFsdWUoWy4uLmxpc3RPZlNlbGVjdGVkVmFsdWUsIC4uLmxpc3RPZk1hdGNoT3B0aW9uVmFsdWVdLCB0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGNvbnN0IGxpc3RPZlVuTWF0Y2hPcHRpb25WYWx1ZSA9IGxpc3RPZkxhYmVsLmZpbHRlcihcclxuICAgICAgICBsYWJlbCA9PiB0aGlzLmxpc3RPZlRhZ0FuZFRlbXBsYXRlT3B0aW9uLm1hcChpdGVtID0+IGl0ZW0ubnpMYWJlbCkuaW5kZXhPZihsYWJlbCkgPT09IC0xXHJcbiAgICAgICk7XHJcbiAgICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShcclxuICAgICAgICBbLi4ubGlzdE9mU2VsZWN0ZWRWYWx1ZSwgLi4ubGlzdE9mTWF0Y2hPcHRpb25WYWx1ZSwgLi4ubGlzdE9mVW5NYXRjaE9wdGlvblZhbHVlXSxcclxuICAgICAgICB0cnVlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbktleURvd24oZTogS2V5Ym9hcmRFdmVudCk6IHZvaWQge1xyXG4gICAgY29uc3Qga2V5Q29kZSA9IGUua2V5Q29kZTtcclxuICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZS50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgIGNvbnN0IGxpc3RPZkZpbHRlcmVkT3B0aW9uV2l0aG91dERpc2FibGVkID0gdGhpcy5saXN0T2ZGaWx0ZXJlZE9wdGlvbi5maWx0ZXIoaXRlbSA9PiAhaXRlbS5uekRpc2FibGVkKTtcclxuICAgIGNvbnN0IGFjdGl2YXRlZEluZGV4ID0gbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWQuZmluZEluZGV4KGl0ZW0gPT4gaXRlbSA9PT0gdGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xyXG4gICAgc3dpdGNoIChrZXlDb2RlKSB7XHJcbiAgICAgIGNhc2UgVVBfQVJST1c6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IHByZUluZGV4ID0gYWN0aXZhdGVkSW5kZXggPiAwID8gYWN0aXZhdGVkSW5kZXggLSAxIDogbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWQubGVuZ3RoIC0gMTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUFjdGl2YXRlZE9wdGlvbihsaXN0T2ZGaWx0ZXJlZE9wdGlvbldpdGhvdXREaXNhYmxlZFtwcmVJbmRleF0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIERPV05fQVJST1c6XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGNvbnN0IG5leHRJbmRleCA9IGFjdGl2YXRlZEluZGV4IDwgbGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWQubGVuZ3RoIC0gMSA/IGFjdGl2YXRlZEluZGV4ICsgMSA6IDA7XHJcbiAgICAgICAgdGhpcy51cGRhdGVBY3RpdmF0ZWRPcHRpb24obGlzdE9mRmlsdGVyZWRPcHRpb25XaXRob3V0RGlzYWJsZWRbbmV4dEluZGV4XSk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLm9wZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBFTlRFUjpcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKHRoaXMub3Blbikge1xyXG4gICAgICAgICAgaWYgKHRoaXMuYWN0aXZhdGVkT3B0aW9uICYmICF0aGlzLmFjdGl2YXRlZE9wdGlvbi5uekRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2tPcHRpb24odGhpcy5hY3RpdmF0ZWRPcHRpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnNldE9wZW5TdGF0ZSh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgQkFDS1NQQUNFOlxyXG4gICAgICAgIGlmICgodGhpcy5pc011bHRpcGxlT3JUYWdzIHx8IHRoaXMuaXNUYWdzU2luZ2xlU2VsZWN0TW9kZSkgJiYgIWV2ZW50VGFyZ2V0LnZhbHVlICYmIHRoaXMubGlzdE9mQ2FjaGVkU2VsZWN0ZWRPcHRpb24ubGVuZ3RoICYmICF0aGlzLnRhZ3NPdXQpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIHRoaXMucmVtb3ZlVmFsdWVGb3JtU2VsZWN0ZWQodGhpcy5saXN0T2ZDYWNoZWRTZWxlY3RlZE9wdGlvblt0aGlzLmxpc3RPZkNhY2hlZFNlbGVjdGVkT3B0aW9uLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgU1BBQ0U6XHJcbiAgICAgICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLm9wZW4pIHtcclxuICAgICAgICAgIHRoaXMuc2V0T3BlblN0YXRlKHRydWUpO1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBUQUI6XHJcbiAgICAgICAgdGhpcy5zZXRPcGVuU3RhdGUoZmFsc2UpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIHJlbW92ZVZhbHVlRm9ybVNlbGVjdGVkKG9wdGlvbjogQ21hY3NPcHRpb25Db21wb25lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmRpc2FibGVkIHx8IG9wdGlvbi5uekRpc2FibGVkKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IGxpc3RPZlNlbGVjdGVkVmFsdWUgPSB0aGlzLmxpc3RPZlNlbGVjdGVkVmFsdWUuZmlsdGVyKGl0ZW0gPT4gIXRoaXMuY29tcGFyZVdpdGgoaXRlbSwgb3B0aW9uLm56VmFsdWUpKTtcclxuICAgIHRoaXMudXBkYXRlTGlzdE9mU2VsZWN0ZWRWYWx1ZShsaXN0T2ZTZWxlY3RlZFZhbHVlLCB0cnVlKTtcclxuICAgIHRoaXMuY2xlYXJJbnB1dCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0T3BlblN0YXRlKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wZW5SYXckLm5leHQodmFsdWUpO1xyXG4gICAgdGhpcy5vcGVuID0gdmFsdWU7XHJcbiAgfVxyXG5cclxuICBjaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hlY2tSYXckLm5leHQoKTtcclxuICB9XHJcblxyXG4gIGdldCBpc1NpbmdsZU1vZGUoKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlID09PSAnZGVmYXVsdCc7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNUYWdzTW9kZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGUgPT09ICd0YWdzJztcclxuICB9XHJcblxyXG4gIGdldCBpc1RhZ3NTaW5nbGVTZWxlY3RNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ3RhZ3NTaW5nbGVTZWxlY3QnO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzTXVsdGlwbGVNb2RlKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ211bHRpcGxlJztcclxuICB9XHJcblxyXG4gIGdldCBpc011bHRpcGxlT3JUYWdzKCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZSA9PT0gJ3RhZ3MnIHx8IHRoaXMubW9kZSA9PT0gJ211bHRpcGxlJztcclxuICB9XHJcbn1cclxuIl19
import { Inject, Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, combineLatest, merge, Subject } from 'rxjs';
import { auditTime, distinctUntilChanged, filter, map, mapTo, mergeMap, takeUntil } from 'rxjs/operators';
import { CmacsIsMenuInsideDropDownToken } from './menu.token';
import * as i0 from "@angular/core";
import * as i1 from "./menu.service";
export class NzSubmenuService {
    constructor(nzHostSubmenuService, nzMenuService, isMenuInsideDropDown) {
        this.nzHostSubmenuService = nzHostSubmenuService;
        this.nzMenuService = nzMenuService;
        this.isMenuInsideDropDown = isMenuInsideDropDown;
        this.mode$ = this.nzMenuService.mode$.pipe(map(mode => {
            if (mode === 'inline') {
                return 'inline';
                /** if inside another submenu, set the mode to vertical **/
            }
            else if (mode === 'vertical' || this.nzHostSubmenuService) {
                return 'vertical';
            }
            else {
                return 'horizontal';
            }
        }));
        this.level = 1;
        this.isCurrentSubMenuOpen$ = new BehaviorSubject(false);
        this.isChildSubMenuOpen$ = new BehaviorSubject(false);
        /** submenu title & overlay mouse enter status **/
        this.isMouseEnterTitleOrOverlay$ = new Subject();
        this.childMenuItemClick$ = new Subject();
        this.destroy$ = new Subject();
        if (this.nzHostSubmenuService) {
            this.level = this.nzHostSubmenuService.level + 1;
        }
        /** close if menu item clicked **/
        const isClosedByMenuItemClick = this.childMenuItemClick$.pipe(mergeMap(() => this.mode$), filter(mode => mode !== 'inline' || this.isMenuInsideDropDown), mapTo(false));
        const isCurrentSubmenuOpen$ = merge(this.isMouseEnterTitleOrOverlay$, isClosedByMenuItemClick);
        /** combine the child submenu status with current submenu status to calculate host submenu open **/
        const isSubMenuOpenWithDebounce$ = combineLatest([this.isChildSubMenuOpen$, isCurrentSubmenuOpen$]).pipe(map(([isChildSubMenuOpen, isCurrentSubmenuOpen]) => isChildSubMenuOpen || isCurrentSubmenuOpen), auditTime(150), distinctUntilChanged(), takeUntil(this.destroy$));
        isSubMenuOpenWithDebounce$.pipe(distinctUntilChanged()).subscribe(data => {
            this.setOpenStateWithoutDebounce(data);
            if (this.nzHostSubmenuService) {
                /** set parent submenu's child submenu open status **/
                this.nzHostSubmenuService.isChildSubMenuOpen$.next(data);
            }
            else {
                this.nzMenuService.isChildSubMenuOpen$.next(data);
            }
        });
    }
    /**
     * menu item inside submenu clicked
     * @param menu
     */
    onChildMenuItemClick(menu) {
        this.childMenuItemClick$.next(menu);
    }
    setOpenStateWithoutDebounce(value) {
        this.isCurrentSubMenuOpen$.next(value);
    }
    setMouseEnterTitleOrOverlayState(value) {
        this.isMouseEnterTitleOrOverlay$.next(value);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NzSubmenuService.ɵfac = function NzSubmenuService_Factory(t) { return new (t || NzSubmenuService)(i0.ɵɵinject(NzSubmenuService, 12), i0.ɵɵinject(i1.MenuService), i0.ɵɵinject(CmacsIsMenuInsideDropDownToken)); };
NzSubmenuService.ɵprov = i0.ɵɵdefineInjectable({ token: NzSubmenuService, factory: NzSubmenuService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzSubmenuService, [{
        type: Injectable
    }], function () { return [{ type: NzSubmenuService, decorators: [{
                type: SkipSelf
            }, {
                type: Optional
            }] }, { type: i1.MenuService }, { type: undefined, decorators: [{
                type: Inject,
                args: [CmacsIsMenuInsideDropDownToken]
            }] }]; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvc3VibWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFhLFFBQVEsRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsS0FBSyxFQUFjLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNsRixPQUFPLEVBQUUsU0FBUyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUxRyxPQUFPLEVBQUUsOEJBQThCLEVBQUUsTUFBTSxjQUFjLENBQUM7OztBQUk5RCxNQUFNLE9BQU8sZ0JBQWdCO0lBa0MzQixZQUNrQyxvQkFBc0MsRUFDL0QsYUFBMEIsRUFDYyxvQkFBNkI7UUFGNUMseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFrQjtRQUMvRCxrQkFBYSxHQUFiLGFBQWEsQ0FBYTtRQUNjLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBUztRQXBDOUUsVUFBSyxHQUFrQyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQ2xFLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNULElBQUksSUFBSSxLQUFLLFFBQVEsRUFBRTtnQkFDckIsT0FBTyxRQUFRLENBQUM7Z0JBQ2hCLDJEQUEyRDthQUM1RDtpQkFBTSxJQUFJLElBQUksS0FBSyxVQUFVLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO2dCQUMzRCxPQUFPLFVBQVUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxPQUFPLFlBQVks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QUFROztzQkFBSSxRQUFROztzQkFFcEIsTUFBTTt1QkFBQyw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIE9uRGVzdHJveSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE56U2FmZUFueSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XHJcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgY29tYmluZUxhdGVzdCwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgYXVkaXRUaW1lLCBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAsIG1hcFRvLCBtZXJnZU1hcCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBNZW51U2VydmljZSB9IGZyb20gJy4vbWVudS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ21hY3NJc01lbnVJbnNpZGVEcm9wRG93blRva2VuIH0gZnJvbSAnLi9tZW51LnRva2VuJztcclxuaW1wb3J0IHsgQ21hY3NNZW51TW9kZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgTnpTdWJtZW51U2VydmljZSBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgbW9kZSQ6IE9ic2VydmFibGU8Q21hY3NNZW51TW9kZVR5cGU+ID0gdGhpcy5uek1lbnVTZXJ2aWNlLm1vZGUkLnBpcGUoXHJcbiAgICBtYXAobW9kZSA9PiB7XHJcbiAgICAgIGlmIChtb2RlID09PSAnaW5saW5lJykge1xyXG4gICAgICAgIHJldHVybiAnaW5saW5lJztcclxuICAgICAgICAvKiogaWYgaW5zaWRlIGFub3RoZXIgc3VibWVudSwgc2V0IHRoZSBtb2RlIHRvIHZlcnRpY2FsICoqL1xyXG4gICAgICB9IGVsc2UgaWYgKG1vZGUgPT09ICd2ZXJ0aWNhbCcgfHwgdGhpcy5uekhvc3RTdWJtZW51U2VydmljZSkge1xyXG4gICAgICAgIHJldHVybiAndmVydGljYWwnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiAnaG9yaXpvbnRhbCc7XHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgKTtcclxuICBsZXZlbCA9IDE7XHJcbiAgaXNDdXJyZW50U3ViTWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgcHJpdmF0ZSBpc0NoaWxkU3ViTWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcbiAgLyoqIHN1Ym1lbnUgdGl0bGUgJiBvdmVybGF5IG1vdXNlIGVudGVyIHN0YXR1cyAqKi9cclxuICBwcml2YXRlIGlzTW91c2VFbnRlclRpdGxlT3JPdmVybGF5JCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgcHJpdmF0ZSBjaGlsZE1lbnVJdGVtQ2xpY2skID0gbmV3IFN1YmplY3Q8TnpTYWZlQW55PigpO1xyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIC8qKlxyXG4gICAqIG1lbnUgaXRlbSBpbnNpZGUgc3VibWVudSBjbGlja2VkXHJcbiAgICogQHBhcmFtIG1lbnVcclxuICAgKi9cclxuICBvbkNoaWxkTWVudUl0ZW1DbGljayhtZW51OiBOelNhZmVBbnkpOiB2b2lkIHtcclxuICAgIHRoaXMuY2hpbGRNZW51SXRlbUNsaWNrJC5uZXh0KG1lbnUpO1xyXG4gIH1cclxuICBzZXRPcGVuU3RhdGVXaXRob3V0RGVib3VuY2UodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIHRoaXMuaXNDdXJyZW50U3ViTWVudU9wZW4kLm5leHQodmFsdWUpO1xyXG4gIH1cclxuICBzZXRNb3VzZUVudGVyVGl0bGVPck92ZXJsYXlTdGF0ZSh2YWx1ZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5pc01vdXNlRW50ZXJUaXRsZU9yT3ZlcmxheSQubmV4dCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBTa2lwU2VsZigpIEBPcHRpb25hbCgpIHByaXZhdGUgbnpIb3N0U3VibWVudVNlcnZpY2U6IE56U3VibWVudVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgbnpNZW51U2VydmljZTogTWVudVNlcnZpY2UsXHJcbiAgICBASW5qZWN0KENtYWNzSXNNZW51SW5zaWRlRHJvcERvd25Ub2tlbikgcHVibGljIGlzTWVudUluc2lkZURyb3BEb3duOiBib29sZWFuXHJcbiAgKSB7XHJcbiAgICBpZiAodGhpcy5uekhvc3RTdWJtZW51U2VydmljZSkge1xyXG4gICAgICB0aGlzLmxldmVsID0gdGhpcy5uekhvc3RTdWJtZW51U2VydmljZS5sZXZlbCArIDE7XHJcbiAgICB9XHJcbiAgICAvKiogY2xvc2UgaWYgbWVudSBpdGVtIGNsaWNrZWQgKiovXHJcbiAgICBjb25zdCBpc0Nsb3NlZEJ5TWVudUl0ZW1DbGljayA9IHRoaXMuY2hpbGRNZW51SXRlbUNsaWNrJC5waXBlKFxyXG4gICAgICBtZXJnZU1hcCgoKSA9PiB0aGlzLm1vZGUkKSxcclxuICAgICAgZmlsdGVyKG1vZGUgPT4gbW9kZSAhPT0gJ2lubGluZScgfHwgdGhpcy5pc01lbnVJbnNpZGVEcm9wRG93biksXHJcbiAgICAgIG1hcFRvKGZhbHNlKVxyXG4gICAgKTtcclxuICAgIGNvbnN0IGlzQ3VycmVudFN1Ym1lbnVPcGVuJCA9IG1lcmdlKHRoaXMuaXNNb3VzZUVudGVyVGl0bGVPck92ZXJsYXkkLCBpc0Nsb3NlZEJ5TWVudUl0ZW1DbGljayk7XHJcbiAgICAvKiogY29tYmluZSB0aGUgY2hpbGQgc3VibWVudSBzdGF0dXMgd2l0aCBjdXJyZW50IHN1Ym1lbnUgc3RhdHVzIHRvIGNhbGN1bGF0ZSBob3N0IHN1Ym1lbnUgb3BlbiAqKi9cclxuICAgIGNvbnN0IGlzU3ViTWVudU9wZW5XaXRoRGVib3VuY2UkID0gY29tYmluZUxhdGVzdChbdGhpcy5pc0NoaWxkU3ViTWVudU9wZW4kLCBpc0N1cnJlbnRTdWJtZW51T3BlbiRdKS5waXBlKFxyXG4gICAgICBtYXAoKFtpc0NoaWxkU3ViTWVudU9wZW4sIGlzQ3VycmVudFN1Ym1lbnVPcGVuXSkgPT4gaXNDaGlsZFN1Yk1lbnVPcGVuIHx8IGlzQ3VycmVudFN1Ym1lbnVPcGVuKSxcclxuICAgICAgYXVkaXRUaW1lKDE1MCksXHJcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgKTtcclxuICAgIGlzU3ViTWVudU9wZW5XaXRoRGVib3VuY2UkLnBpcGUoZGlzdGluY3RVbnRpbENoYW5nZWQoKSkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICB0aGlzLnNldE9wZW5TdGF0ZVdpdGhvdXREZWJvdW5jZShkYXRhKTtcclxuICAgICAgaWYgKHRoaXMubnpIb3N0U3VibWVudVNlcnZpY2UpIHtcclxuICAgICAgICAvKiogc2V0IHBhcmVudCBzdWJtZW51J3MgY2hpbGQgc3VibWVudSBvcGVuIHN0YXR1cyAqKi9cclxuICAgICAgICB0aGlzLm56SG9zdFN1Ym1lbnVTZXJ2aWNlLmlzQ2hpbGRTdWJNZW51T3BlbiQubmV4dChkYXRhKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm56TWVudVNlcnZpY2UuaXNDaGlsZFN1Yk1lbnVPcGVuJC5uZXh0KGRhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
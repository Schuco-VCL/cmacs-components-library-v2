import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import * as i0 from "@angular/core";
export class MenuService {
    constructor() {
        /** all descendant menu click **/
        this.descendantMenuItemClick$ = new Subject();
        /** child menu item click **/
        this.childMenuItemClick$ = new Subject();
        this.theme$ = new BehaviorSubject('light');
        this.mode$ = new BehaviorSubject('vertical');
        this.inlineIndent$ = new BehaviorSubject(24);
        this.isChildSubMenuOpen$ = new BehaviorSubject(false);
    }
    onDescendantMenuItemClick(menu) {
        this.descendantMenuItemClick$.next(menu);
    }
    onChildMenuItemClick(menu) {
        this.childMenuItemClick$.next(menu);
    }
    setMode(mode) {
        this.mode$.next(mode);
    }
    setTheme(theme) {
        this.theme$.next(theme);
    }
    setInlineIndent(indent) {
        this.inlineIndent$.next(indent);
    }
    static { this.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: MenuService, factory: MenuService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSWhELE1BQU0sT0FBTyxXQUFXO0lBRHhCO1FBRUUsaUNBQWlDO1FBQ2pDLDZCQUF3QixHQUFHLElBQUksT0FBTyxFQUFhLENBQUM7UUFDcEQsNkJBQTZCO1FBQzdCLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFhLENBQUM7UUFDL0MsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFxQixPQUFPLENBQUMsQ0FBQztRQUMxRCxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQW9CLFVBQVUsQ0FBQyxDQUFDO1FBQzNELGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7UUFDaEQsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7S0FxQjNEO0lBbkJDLHlCQUF5QixDQUFDLElBQWU7UUFDdkMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsb0JBQW9CLENBQUMsSUFBZTtRQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBdUI7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQWM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs0RUE1QlUsV0FBVzt1RUFBWCxXQUFXLFdBQVgsV0FBVzs7dUZBQVgsV0FBVztjQUR2QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ21hY3NNZW51TW9kZVR5cGUsIENtYWNzTWVudVRoZW1lVHlwZSB9IGZyb20gJy4vbWVudS50eXBlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSB7XHJcbiAgLyoqIGFsbCBkZXNjZW5kYW50IG1lbnUgY2xpY2sgKiovXHJcbiAgZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skID0gbmV3IFN1YmplY3Q8TnpTYWZlQW55PigpO1xyXG4gIC8qKiBjaGlsZCBtZW51IGl0ZW0gY2xpY2sgKiovXHJcbiAgY2hpbGRNZW51SXRlbUNsaWNrJCA9IG5ldyBTdWJqZWN0PE56U2FmZUFueT4oKTtcclxuICB0aGVtZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENtYWNzTWVudVRoZW1lVHlwZT4oJ2xpZ2h0Jyk7XHJcbiAgbW9kZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENtYWNzTWVudU1vZGVUeXBlPigndmVydGljYWwnKTtcclxuICBpbmxpbmVJbmRlbnQkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxudW1iZXI+KDI0KTtcclxuICBpc0NoaWxkU3ViTWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIG9uRGVzY2VuZGFudE1lbnVJdGVtQ2xpY2sobWVudTogTnpTYWZlQW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc2NlbmRhbnRNZW51SXRlbUNsaWNrJC5uZXh0KG1lbnUpO1xyXG4gIH1cclxuXHJcbiAgb25DaGlsZE1lbnVJdGVtQ2xpY2sobWVudTogTnpTYWZlQW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmNoaWxkTWVudUl0ZW1DbGljayQubmV4dChtZW51KTtcclxuICB9XHJcblxyXG4gIHNldE1vZGUobW9kZTogQ21hY3NNZW51TW9kZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMubW9kZSQubmV4dChtb2RlKTtcclxuICB9XHJcblxyXG4gIHNldFRoZW1lKHRoZW1lOiBDbWFjc01lbnVUaGVtZVR5cGUpOiB2b2lkIHtcclxuICAgIHRoaXMudGhlbWUkLm5leHQodGhlbWUpO1xyXG4gIH1cclxuXHJcbiAgc2V0SW5saW5lSW5kZW50KGluZGVudDogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLmlubGluZUluZGVudCQubmV4dChpbmRlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=
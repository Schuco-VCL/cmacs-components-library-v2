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
}
MenuService.ɵfac = function MenuService_Factory(t) { return new (t || MenuService)(); };
MenuService.ɵprov = i0.ɵɵdefineInjectable({ token: MenuService, factory: MenuService.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MenuService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvbWVudS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7O0FBSWhELE1BQU0sT0FBTyxXQUFXO0lBRHhCO1FBRUUsaUNBQWlDO1FBQ2pDLDZCQUF3QixHQUFHLElBQUksT0FBTyxFQUFhLENBQUM7UUFDcEQsNkJBQTZCO1FBQzdCLHdCQUFtQixHQUFHLElBQUksT0FBTyxFQUFhLENBQUM7UUFDL0MsV0FBTSxHQUFHLElBQUksZUFBZSxDQUFxQixPQUFPLENBQUMsQ0FBQztRQUMxRCxVQUFLLEdBQUcsSUFBSSxlQUFlLENBQW9CLFVBQVUsQ0FBQyxDQUFDO1FBQzNELGtCQUFhLEdBQUcsSUFBSSxlQUFlLENBQVMsRUFBRSxDQUFDLENBQUM7UUFDaEQsd0JBQW1CLEdBQUcsSUFBSSxlQUFlLENBQVUsS0FBSyxDQUFDLENBQUM7S0FxQjNEO0lBbkJDLHlCQUF5QixDQUFDLElBQWU7UUFDdkMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBRUQsb0JBQW9CLENBQUMsSUFBZTtRQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxPQUFPLENBQUMsSUFBdUI7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUF5QjtRQUNoQyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBRUQsZUFBZSxDQUFDLE1BQWM7UUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEMsQ0FBQzs7c0VBNUJVLFdBQVc7bURBQVgsV0FBVyxXQUFYLFdBQVc7dUZBQVgsV0FBVztjQUR2QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQ21hY3NNZW51TW9kZVR5cGUsIENtYWNzTWVudVRoZW1lVHlwZSB9IGZyb20gJy4vbWVudS50eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNZW51U2VydmljZSB7XG4gIC8qKiBhbGwgZGVzY2VuZGFudCBtZW51IGNsaWNrICoqL1xuICBkZXNjZW5kYW50TWVudUl0ZW1DbGljayQgPSBuZXcgU3ViamVjdDxOelNhZmVBbnk+KCk7XG4gIC8qKiBjaGlsZCBtZW51IGl0ZW0gY2xpY2sgKiovXG4gIGNoaWxkTWVudUl0ZW1DbGljayQgPSBuZXcgU3ViamVjdDxOelNhZmVBbnk+KCk7XG4gIHRoZW1lJCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8Q21hY3NNZW51VGhlbWVUeXBlPignbGlnaHQnKTtcbiAgbW9kZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PENtYWNzTWVudU1vZGVUeXBlPigndmVydGljYWwnKTtcbiAgaW5saW5lSW5kZW50JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigyNCk7XG4gIGlzQ2hpbGRTdWJNZW51T3BlbiQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PGJvb2xlYW4+KGZhbHNlKTtcblxuICBvbkRlc2NlbmRhbnRNZW51SXRlbUNsaWNrKG1lbnU6IE56U2FmZUFueSk6IHZvaWQge1xuICAgIHRoaXMuZGVzY2VuZGFudE1lbnVJdGVtQ2xpY2skLm5leHQobWVudSk7XG4gIH1cblxuICBvbkNoaWxkTWVudUl0ZW1DbGljayhtZW51OiBOelNhZmVBbnkpOiB2b2lkIHtcbiAgICB0aGlzLmNoaWxkTWVudUl0ZW1DbGljayQubmV4dChtZW51KTtcbiAgfVxuXG4gIHNldE1vZGUobW9kZTogQ21hY3NNZW51TW9kZVR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGUkLm5leHQobW9kZSk7XG4gIH1cblxuICBzZXRUaGVtZSh0aGVtZTogQ21hY3NNZW51VGhlbWVUeXBlKTogdm9pZCB7XG4gICAgdGhpcy50aGVtZSQubmV4dCh0aGVtZSk7XG4gIH1cblxuICBzZXRJbmxpbmVJbmRlbnQoaW5kZW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmlubGluZUluZGVudCQubmV4dChpbmRlbnQpO1xuICB9XG59XG4iXX0=
import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { collapseMotion } from 'ng-zorro-antd/core/animation';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/bidi";
import * as i2 from "@angular/common";
const _c0 = ["cmacs-submenu-inline-child", ""];
function NzSubmenuInlineChildComponent_ng_template_0_Template(rf, ctx) { }
export class NzSubmenuInlineChildComponent {
    constructor(elementRef, renderer, directionality) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.directionality = directionality;
        this.templateOutlet = null;
        this.menuClass = '';
        this.mode = 'vertical';
        this.open = false;
        this.listOfCacheClassName = [];
        this.expandState = 'collapsed';
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        // TODO: move to host after View Engine deprecation
        this.elementRef.nativeElement.classList.add('ant-menu', 'ant-menu-inline', 'ant-menu-sub');
    }
    calcMotionState() {
        if (this.open) {
            this.expandState = 'expanded';
        }
        else {
            this.expandState = 'collapsed';
        }
    }
    ngOnInit() {
        this.calcMotionState();
        this.dir = this.directionality.value;
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
        });
    }
    ngOnChanges(changes) {
        const { mode, open, menuClass } = changes;
        if (mode || open) {
            this.calcMotionState();
        }
        if (menuClass) {
            if (this.listOfCacheClassName.length) {
                this.listOfCacheClassName
                    .filter(item => !!item)
                    .forEach(className => {
                    this.renderer.removeClass(this.elementRef.nativeElement, className);
                });
            }
            if (this.menuClass) {
                this.listOfCacheClassName = this.menuClass.split(' ');
                this.listOfCacheClassName
                    .filter(item => !!item)
                    .forEach(className => {
                    this.renderer.addClass(this.elementRef.nativeElement, className);
                });
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    static { this.ɵfac = function NzSubmenuInlineChildComponent_Factory(t) { return new (t || NzSubmenuInlineChildComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: NzSubmenuInlineChildComponent, selectors: [["", "cmacs-submenu-inline-child", ""]], hostVars: 3, hostBindings: function NzSubmenuInlineChildComponent_HostBindings(rf, ctx) { if (rf & 2) {
            i0.ɵɵsyntheticHostProperty("@collapseMotion", ctx.expandState);
            i0.ɵɵclassProp("ant-menu-rtl", ctx.dir === "rtl");
        } }, inputs: { templateOutlet: "templateOutlet", menuClass: "menuClass", mode: "mode", open: "open" }, exportAs: ["cmacsSubmenuInlineChild"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c0, decls: 1, vars: 1, consts: [[3, "ngTemplateOutlet"]], template: function NzSubmenuInlineChildComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, NzSubmenuInlineChildComponent_ng_template_0_Template, 0, 0, "ng-template", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngTemplateOutlet", ctx.templateOutlet);
        } }, dependencies: [i2.NgTemplateOutlet], encapsulation: 2, data: { animation: [collapseMotion] }, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(NzSubmenuInlineChildComponent, [{
        type: Component,
        args: [{
                selector: '[cmacs-submenu-inline-child]',
                animations: [collapseMotion],
                exportAs: 'cmacsSubmenuInlineChild',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
    <ng-template [ngTemplateOutlet]="templateOutlet"></ng-template>
  `,
                host: {
                    '[class.ant-menu-rtl]': `dir === 'rtl'`,
                    '[@collapseMotion]': 'expandState'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.Renderer2 }, { type: i1.Directionality, decorators: [{
                type: Optional
            }] }]; }, { templateOutlet: [{
            type: Input
        }], menuClass: [{
            type: Input
        }], mode: [{
            type: Input
        }], open: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS1pbmxpbmUtY2hpbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvc3VibWVudS1pbmxpbmUtY2hpbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULEtBQUssRUFJTCxRQUFRLEVBSVIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBaUIzQyxNQUFNLE9BQU8sNkJBQTZCO0lBVXhDLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUIsRUFBc0IsY0FBOEI7UUFBdkcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBc0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVGxILG1CQUFjLEdBQWtDLElBQUksQ0FBQztRQUNyRCxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFNBQUksR0FBc0IsVUFBVSxDQUFDO1FBQ3JDLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIseUJBQW9CLEdBQWEsRUFBRSxDQUFDO1FBQ3BDLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUdyQyxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUs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b3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBjb2xsYXBzZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xyXG5pbXBvcnQgeyBOelNhZmVBbnkgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdHlwZXMnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ21hY3NNZW51TW9kZVR5cGUgfSBmcm9tICcuL21lbnUudHlwZXMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdbY21hY3Mtc3VibWVudS1pbmxpbmUtY2hpbGRdJyxcclxuICBhbmltYXRpb25zOiBbY29sbGFwc2VNb3Rpb25dLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NTdWJtZW51SW5saW5lQ2hpbGQnLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZW1wbGF0ZU91dGxldFwiPjwvbmctdGVtcGxhdGU+XHJcbiAgYCxcclxuICBob3N0OiB7XHJcbiAgICAnW2NsYXNzLmFudC1tZW51LXJ0bF0nOiBgZGlyID09PSAncnRsJ2AsXHJcbiAgICAnW0Bjb2xsYXBzZU1vdGlvbl0nOiAnZXhwYW5kU3RhdGUnXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTdWJtZW51SW5saW5lQ2hpbGRDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCwgT25DaGFuZ2VzIHtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZU91dGxldDogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG1lbnVDbGFzczogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgbW9kZTogQ21hY3NNZW51TW9kZVR5cGUgPSAndmVydGljYWwnO1xyXG4gIEBJbnB1dCgpIG9wZW4gPSBmYWxzZTtcclxuICBsaXN0T2ZDYWNoZUNsYXNzTmFtZTogc3RyaW5nW10gPSBbXTtcclxuICBleHBhbmRTdGF0ZSA9ICdjb2xsYXBzZWQnO1xyXG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSkge1xyXG4gICAgLy8gVE9ETzogbW92ZSB0byBob3N0IGFmdGVyIFZpZXcgRW5naW5lIGRlcHJlY2F0aW9uXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhbnQtbWVudScsICdhbnQtbWVudS1pbmxpbmUnLCAnYW50LW1lbnUtc3ViJyk7XHJcbiAgfVxyXG5cclxuICBjYWxjTW90aW9uU3RhdGUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5vcGVuKSB7XHJcbiAgICAgIHRoaXMuZXhwYW5kU3RhdGUgPSAnZXhwYW5kZWQnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdjb2xsYXBzZWQnO1xyXG4gICAgfVxyXG4gIH1cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsY01vdGlvblN0YXRlKCk7XHJcblxyXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xyXG4gICAgdGhpcy5kaXJlY3Rpb25hbGl0eS5jaGFuZ2U/LnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKGRpcmVjdGlvbjogRGlyZWN0aW9uKSA9PiB7XHJcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgbW9kZSwgb3BlbiwgbWVudUNsYXNzIH0gPSBjaGFuZ2VzO1xyXG4gICAgaWYgKG1vZGUgfHwgb3Blbikge1xyXG4gICAgICB0aGlzLmNhbGNNb3Rpb25TdGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lbnVDbGFzcykge1xyXG4gICAgICBpZiAodGhpcy5saXN0T2ZDYWNoZUNsYXNzTmFtZS5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLmxpc3RPZkNhY2hlQ2xhc3NOYW1lXHJcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gISFpdGVtKVxyXG4gICAgICAgICAgLmZvckVhY2goY2xhc3NOYW1lID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm1lbnVDbGFzcykge1xyXG4gICAgICAgIHRoaXMubGlzdE9mQ2FjaGVDbGFzc05hbWUgPSB0aGlzLm1lbnVDbGFzcy5zcGxpdCgnICcpO1xyXG4gICAgICAgIHRoaXMubGlzdE9mQ2FjaGVDbGFzc05hbWVcclxuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pXHJcbiAgICAgICAgICAuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCBjbGFzc05hbWUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
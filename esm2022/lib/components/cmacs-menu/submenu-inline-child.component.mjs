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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWVudS1pbmxpbmUtY2hpbGQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW1lbnUvc3VibWVudS1pbmxpbmUtY2hpbGQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULEtBQUssRUFJTCxRQUFRLEVBSVIsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUU5RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQy9CLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7O0FBaUIzQyxNQUFNLE9BQU8sNkJBQTZCO0lBVXhDLFlBQW9CLFVBQXNCLEVBQVUsUUFBbUIsRUFBc0IsY0FBOEI7UUFBdkcsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBc0IsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBVGxILG1CQUFjLEdBQWtDLElBQUksQ0FBQztRQUNyRCxjQUFTLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLFNBQUksR0FBc0IsVUFBVSxDQUFDO1FBQ3JDLFNBQUksR0FBRyxLQUFLLENBQUM7UUFDdEIseUJBQW9CLEdBQWEsRUFBRSxDQUFDO1FBQ3BDLGdCQUFXLEdBQUcsV0FBVyxDQUFDO1FBQzFCLFFBQUcsR0FBYyxLQUFLLENBQUM7UUFDZixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUdyQyxtREFBbUQ7UUFDbkQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsaUJBQWlCLEVBQUUs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b3J0IHsgRGlyZWN0aW9uLCBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcbmltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBUZW1wbGF0ZVJlZixcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBjb2xsYXBzZU1vdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9hbmltYXRpb24nO1xuaW1wb3J0IHsgTnpTYWZlQW55IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtYWNzTWVudU1vZGVUeXBlIH0gZnJvbSAnLi9tZW51LnR5cGVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnW2NtYWNzLXN1Ym1lbnUtaW5saW5lLWNoaWxkXScsXG4gIGFuaW1hdGlvbnM6IFtjb2xsYXBzZU1vdGlvbl0sXG4gIGV4cG9ydEFzOiAnY21hY3NTdWJtZW51SW5saW5lQ2hpbGQnLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwidGVtcGxhdGVPdXRsZXRcIj48L25nLXRlbXBsYXRlPlxuICBgLFxuICBob3N0OiB7XG4gICAgJ1tjbGFzcy5hbnQtbWVudS1ydGxdJzogYGRpciA9PT0gJ3J0bCdgLFxuICAgICdbQGNvbGxhcHNlTW90aW9uXSc6ICdleHBhbmRTdGF0ZSdcbiAgfVxufSlcbmV4cG9ydCBjbGFzcyBOelN1Ym1lbnVJbmxpbmVDaGlsZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0LCBPbkNoYW5nZXMge1xuICBASW5wdXQoKSB0ZW1wbGF0ZU91dGxldDogVGVtcGxhdGVSZWY8TnpTYWZlQW55PiB8IG51bGwgPSBudWxsO1xuICBASW5wdXQoKSBtZW51Q2xhc3M6IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBtb2RlOiBDbWFjc01lbnVNb2RlVHlwZSA9ICd2ZXJ0aWNhbCc7XG4gIEBJbnB1dCgpIG9wZW4gPSBmYWxzZTtcbiAgbGlzdE9mQ2FjaGVDbGFzc05hbWU6IHN0cmluZ1tdID0gW107XG4gIGV4cGFuZFN0YXRlID0gJ2NvbGxhcHNlZCc7XG4gIGRpcjogRGlyZWN0aW9uID0gJ2x0cic7XG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eSkge1xuICAgIC8vIFRPRE86IG1vdmUgdG8gaG9zdCBhZnRlciBWaWV3IEVuZ2luZSBkZXByZWNhdGlvblxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FudC1tZW51JywgJ2FudC1tZW51LWlubGluZScsICdhbnQtbWVudS1zdWInKTtcbiAgfVxuXG4gIGNhbGNNb3Rpb25TdGF0ZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vcGVuKSB7XG4gICAgICB0aGlzLmV4cGFuZFN0YXRlID0gJ2V4cGFuZGVkJztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5leHBhbmRTdGF0ZSA9ICdjb2xsYXBzZWQnO1xuICAgIH1cbiAgfVxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbGNNb3Rpb25TdGF0ZSgpO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgfSk7XG4gIH1cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbW9kZSwgb3BlbiwgbWVudUNsYXNzIH0gPSBjaGFuZ2VzO1xuICAgIGlmIChtb2RlIHx8IG9wZW4pIHtcbiAgICAgIHRoaXMuY2FsY01vdGlvblN0YXRlKCk7XG4gICAgfVxuICAgIGlmIChtZW51Q2xhc3MpIHtcbiAgICAgIGlmICh0aGlzLmxpc3RPZkNhY2hlQ2xhc3NOYW1lLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmxpc3RPZkNhY2hlQ2xhc3NOYW1lXG4gICAgICAgICAgLmZpbHRlcihpdGVtID0+ICEhaXRlbSlcbiAgICAgICAgICAuZm9yRWFjaChjbGFzc05hbWUgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgY2xhc3NOYW1lKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLm1lbnVDbGFzcykge1xuICAgICAgICB0aGlzLmxpc3RPZkNhY2hlQ2xhc3NOYW1lID0gdGhpcy5tZW51Q2xhc3Muc3BsaXQoJyAnKTtcbiAgICAgICAgdGhpcy5saXN0T2ZDYWNoZUNsYXNzTmFtZVxuICAgICAgICAgIC5maWx0ZXIoaXRlbSA9PiAhIWl0ZW0pXG4gICAgICAgICAgLmZvckVhY2goY2xhc3NOYW1lID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIGNsYXNzTmFtZSk7XG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=
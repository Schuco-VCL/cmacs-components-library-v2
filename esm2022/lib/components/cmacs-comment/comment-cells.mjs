import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, Directive, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import * as i0 from "@angular/core";
function CmacsCommentActionComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵprojection(0);
} }
const _c0 = ["*"];
export class CmacsCommentAvatarDirective {
    static { this.ɵfac = function CmacsCommentAvatarDirective_Factory(t) { return new (t || CmacsCommentAvatarDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsCommentAvatarDirective, selectors: [["div", "cmacs-comment-avatar", ""], ["cmacs-comment-avatar"], ["", "cmacs-comment-avatar", ""]], exportAs: ["cmacsCommentAvatar"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCommentAvatarDirective, [{
        type: Directive,
        args: [{
                selector: 'div[cmacs-comment-avatar], cmacs-comment-avatar, [cmacs-comment-avatar]',
                exportAs: 'cmacsCommentAvatar'
            }]
    }], null, null); })();
export class CmacsCommentContentDirective {
    static { this.ɵfac = function CmacsCommentContentDirective_Factory(t) { return new (t || CmacsCommentContentDirective)(); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsCommentContentDirective, selectors: [["cmacs-comment-content"], ["", "cmacs-comment-content", ""]], hostAttrs: [1, "ant-comment-content-detail"], exportAs: ["cmacsCommentContent"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCommentContentDirective, [{
        type: Directive,
        args: [{
                selector: 'cmacs-comment-content, [cmacs-comment-content]',
                exportAs: 'cmacsCommentContent',
                host: { class: 'ant-comment-content-detail' }
            }]
    }], null, null); })();
export class CmacsCommentActionHostDirective extends CdkPortalOutlet {
    constructor(componentFactoryResolver, viewContainerRef) {
        super(componentFactoryResolver, viewContainerRef);
    }
    ngOnInit() {
        super.ngOnInit();
    }
    ngOnDestroy() {
        super.ngOnDestroy();
    }
    ngAfterViewInit() {
        this.attach(this.nzCommentActionHost);
    }
    static { this.ɵfac = function CmacsCommentActionHostDirective_Factory(t) { return new (t || CmacsCommentActionHostDirective)(i0.ɵɵdirectiveInject(i0.ComponentFactoryResolver), i0.ɵɵdirectiveInject(i0.ViewContainerRef)); }; }
    static { this.ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: CmacsCommentActionHostDirective, selectors: [["", "cmacsCommentActionHost", ""]], inputs: { nzCommentActionHost: "nzCommentActionHost" }, exportAs: ["cmacsCommentActionHost"], features: [i0.ɵɵInheritDefinitionFeature] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCommentActionHostDirective, [{
        type: Directive,
        args: [{
                selector: '[cmacsCommentActionHost]',
                exportAs: 'cmacsCommentActionHost'
            }]
    }], function () { return [{ type: i0.ComponentFactoryResolver }, { type: i0.ViewContainerRef }]; }, { nzCommentActionHost: [{
            type: Input
        }] }); })();
export class CmacsCommentActionComponent {
    get content() {
        return this.contentPortal;
    }
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    ngOnInit() {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    }
    static { this.ɵfac = function CmacsCommentActionComponent_Factory(t) { return new (t || CmacsCommentActionComponent)(i0.ɵɵdirectiveInject(i0.ViewContainerRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsCommentActionComponent, selectors: [["cmacs-comment-action"]], viewQuery: function CmacsCommentActionComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(TemplateRef, 7);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.implicitContent = _t.first);
        } }, exportAs: ["cmacsCommentAction"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsCommentActionComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵtemplate(0, CmacsCommentActionComponent_ng_template_0_Template, 1, 0, "ng-template");
        } }, encapsulation: 2, changeDetection: 0 }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsCommentActionComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-comment-action',
                exportAs: 'cmacsCommentAction',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-template><ng-content></ng-content></ng-template>'
            }]
    }], function () { return [{ type: i0.ViewContainerRef }]; }, { implicitContent: [{
            type: ViewChild,
            args: [TemplateRef, { static: true }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tbWVudC1jZWxscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1jb21tZW50L2NvbW1lbnQtY2VsbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLGVBQWUsRUFBRSxjQUFjLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUN0RSxPQUFPLEVBRUwsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxTQUFTLEVBQ1QsS0FBSyxFQUdMLFdBQVcsRUFDWCxTQUFTLEVBRVQsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDOzs7SUE0Q0csa0JBQXlCOzs7QUF0Q25ELE1BQU0sT0FBTywyQkFBMkI7NEZBQTNCLDJCQUEyQjtvRUFBM0IsMkJBQTJCOzt1RkFBM0IsMkJBQTJCO2NBSnZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUseUVBQXlFO2dCQUNuRixRQUFRLEVBQUUsb0JBQW9CO2FBQy9COztBQVFELE1BQU0sT0FBTyw0QkFBNEI7NkZBQTVCLDRCQUE0QjtvRUFBNUIsNEJBQTRCOzt1RkFBNUIsNEJBQTRCO2NBTHhDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0RBQWdEO2dCQUMxRCxRQUFRLEVBQUUscUJBQXFCO2dCQUMvQixJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsNEJBQTRCLEVBQUU7YUFDOUM7O0FBT0QsTUFBTSxPQUFPLCtCQUFnQyxTQUFRLGVBQWU7SUFHbEUsWUFBWSx3QkFBa0QsRUFBRSxnQkFBa0M7UUFDaEcsS0FBSyxDQUFDLHdCQUF3QixFQUFFLGdCQUFnQixDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVELFFBQVE7UUFDTixLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVELFdBQVc7UUFDVCxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Z0dBakJVLCtCQUErQjtvRUFBL0IsK0JBQStCOzt1RkFBL0IsK0JBQStCO2NBSjNDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxRQUFRLEVBQUUsd0JBQXdCO2FBQ25DOzBHQUVVLG1CQUFtQjtrQkFBM0IsS0FBSzs7QUEwQlIsTUFBTSxPQUFPLDJCQUEyQjtJQUl0QyxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztJQUVELFlBQW9CLGdCQUFrQztRQUFsQyxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBTjlDLGtCQUFhLEdBQTBCLElBQUksQ0FBQztJQU1LLENBQUM7SUFFMUQsUUFBUTtRQUNOLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUN2RixDQUFDOzRGQVpVLDJCQUEyQjtvRUFBM0IsMkJBQTJCOzJCQUMzQixXQUFXOzs7Ozs7WUFIWCx5RkFBb0Q7Ozt1RkFFcEQsMkJBQTJCO2NBUHZDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsb0JBQW9CO2dCQUM5QixhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSxzREFBc0Q7YUFDakU7bUVBRTJDLGVBQWU7a0JBQXhELFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENka1BvcnRhbE91dGxldCwgVGVtcGxhdGVQb3J0YWwgfSBmcm9tICdAYW5ndWxhci9jZGsvcG9ydGFsJztcclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXHJcbiAgRGlyZWN0aXZlLFxyXG4gIElucHV0LFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDb250YWluZXJSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnZGl2W2NtYWNzLWNvbW1lbnQtYXZhdGFyXSwgY21hY3MtY29tbWVudC1hdmF0YXIsIFtjbWFjcy1jb21tZW50LWF2YXRhcl0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21tZW50QXZhdGFyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21tZW50QXZhdGFyRGlyZWN0aXZlIHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbW1lbnQtY29udGVudCwgW2NtYWNzLWNvbW1lbnQtY29udGVudF0nLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NDb21tZW50Q29udGVudCcsXHJcbiAgaG9zdDogeyBjbGFzczogJ2FudC1jb21tZW50LWNvbnRlbnQtZGV0YWlsJyB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbW1lbnRDb250ZW50RGlyZWN0aXZlIHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tjbWFjc0NvbW1lbnRBY3Rpb25Ib3N0XScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0NvbW1lbnRBY3Rpb25Ib3N0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NDb21tZW50QWN0aW9uSG9zdERpcmVjdGl2ZSBleHRlbmRzIENka1BvcnRhbE91dGxldCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuICBASW5wdXQoKSBuekNvbW1lbnRBY3Rpb25Ib3N0PzogVGVtcGxhdGVQb3J0YWwgfCBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlciwgdmlld0NvbnRhaW5lclJlZjogVmlld0NvbnRhaW5lclJlZikge1xyXG4gICAgc3VwZXIoY29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCB2aWV3Q29udGFpbmVyUmVmKTtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkluaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkRlc3Ryb3koKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuYXR0YWNoKHRoaXMubnpDb21tZW50QWN0aW9uSG9zdCk7XHJcbiAgfVxyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWNvbW1lbnQtYWN0aW9uJyxcclxuICBleHBvcnRBczogJ2NtYWNzQ29tbWVudEFjdGlvbicsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48bmctY29udGVudD48L25nLWNvbnRlbnQ+PC9uZy10ZW1wbGF0ZT4nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0NvbW1lbnRBY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBWaWV3Q2hpbGQoVGVtcGxhdGVSZWYsIHsgc3RhdGljOiB0cnVlIH0pIGltcGxpY2l0Q29udGVudCE6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG4gIHByaXZhdGUgY29udGVudFBvcnRhbDogVGVtcGxhdGVQb3J0YWwgfCBudWxsID0gbnVsbDtcclxuXHJcbiAgZ2V0IGNvbnRlbnQoKTogVGVtcGxhdGVQb3J0YWwgfCBudWxsIHtcclxuICAgIHJldHVybiB0aGlzLmNvbnRlbnRQb3J0YWw7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHZpZXdDb250YWluZXJSZWY6IFZpZXdDb250YWluZXJSZWYpIHt9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jb250ZW50UG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMuaW1wbGljaXRDb250ZW50LCB0aGlzLnZpZXdDb250YWluZXJSZWYpO1xyXG4gIH1cclxufVxyXG4iXX0=
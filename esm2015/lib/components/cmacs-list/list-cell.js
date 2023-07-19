import { ChangeDetectionStrategy, Component, Directive, Input } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/empty";
const _c0 = ["*"];
export class CmacsListEmptyComponent {
}
CmacsListEmptyComponent.ɵfac = function CmacsListEmptyComponent_Factory(t) { return new (t || CmacsListEmptyComponent)(); };
CmacsListEmptyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsListEmptyComponent, selectors: [["cmacs-list-empty"]], hostAttrs: [1, "ant-list-empty-text"], inputs: { noResult: "noResult" }, exportAs: ["cmacsListHeader"], decls: 1, vars: 2, consts: [[3, "nzComponentName", "specificContent"]], template: function CmacsListEmptyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelement(0, "nz-embed-empty", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("nzComponentName", "list")("specificContent", ctx.noResult);
    } }, directives: [i1.NzEmbedEmptyComponent], encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListEmptyComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-list-empty',
                exportAs: 'cmacsListHeader',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <nz-embed-empty [nzComponentName]="'list'" [specificContent]="noResult"></nz-embed-empty> `,
                host: {
                    class: 'ant-list-empty-text'
                }
            }]
    }], null, { noResult: [{
            type: Input
        }] }); })();
export class CmacsListHeaderComponent {
}
CmacsListHeaderComponent.ɵfac = function CmacsListHeaderComponent_Factory(t) { return new (t || CmacsListHeaderComponent)(); };
CmacsListHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsListHeaderComponent, selectors: [["cmacs-list-header"]], hostAttrs: [1, "ant-list-header"], exportAs: ["cmacsListHeader"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsListHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-list-header',
                exportAs: 'cmacsListHeader',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-header'
                }
            }]
    }], null, null); })();
export class CmacsListFooterComponent {
}
CmacsListFooterComponent.ɵfac = function CmacsListFooterComponent_Factory(t) { return new (t || CmacsListFooterComponent)(); };
CmacsListFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsListFooterComponent, selectors: [["cmacs-list-footer"]], hostAttrs: [1, "ant-list-footer"], exportAs: ["cmacsListFooter"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsListFooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListFooterComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-list-footer',
                exportAs: 'cmacsListFooter',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-footer'
                }
            }]
    }], null, null); })();
export class CmacsListPaginationComponent {
}
CmacsListPaginationComponent.ɵfac = function CmacsListPaginationComponent_Factory(t) { return new (t || CmacsListPaginationComponent)(); };
CmacsListPaginationComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsListPaginationComponent, selectors: [["cmacs-list-pagination"]], hostAttrs: [1, "ant-list-pagination"], exportAs: ["cmacsListPagination"], ngContentSelectors: _c0, decls: 1, vars: 0, template: function CmacsListPaginationComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵprojection(0);
    } }, encapsulation: 2, changeDetection: 0 });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListPaginationComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-list-pagination',
                exportAs: 'cmacsListPagination',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: ` <ng-content></ng-content> `,
                host: {
                    class: 'ant-list-pagination'
                }
            }]
    }], null, null); })();
export class CmacsListLoadMoreDirective {
}
CmacsListLoadMoreDirective.ɵfac = function CmacsListLoadMoreDirective_Factory(t) { return new (t || CmacsListLoadMoreDirective)(); };
CmacsListLoadMoreDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsListLoadMoreDirective, selectors: [["cmacs-list-load-more"]], exportAs: ["cmacsListLoadMoreDirective"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListLoadMoreDirective, [{
        type: Directive,
        args: [{
                selector: 'cmacs-list-load-more',
                exportAs: 'cmacsListLoadMoreDirective'
            }]
    }], null, null); })();
export class CmacsListGridDirective {
}
CmacsListGridDirective.ɵfac = function CmacsListGridDirective_Factory(t) { return new (t || CmacsListGridDirective)(); };
CmacsListGridDirective.ɵdir = i0.ɵɵdefineDirective({ type: CmacsListGridDirective, selectors: [["cmacs-list", "cmacsGrid", ""]], hostAttrs: [1, "ant-list-grid"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsListGridDirective, [{
        type: Directive,
        args: [{
                selector: 'cmacs-list[cmacsGrid]',
                host: {
                    class: 'ant-list-grid'
                }
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1jZWxsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpc3QvbGlzdC1jZWxsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBZSxNQUFNLGVBQWUsQ0FBQzs7OztBQVdsRyxNQUFNLE9BQU8sdUJBQXVCOzs4RkFBdkIsdUJBQXVCOzREQUF2Qix1QkFBdUI7UUFMdEIsb0NBQXlGOztRQUF6RSx3Q0FBMEIsaUNBQUE7O3VGQUszQyx1QkFBdUI7Y0FUbkMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxrQkFBa0I7Z0JBQzVCLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsNkZBQTZGO2dCQUN2RyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLHFCQUFxQjtpQkFDN0I7YUFDRjtnQkFFVSxRQUFRO2tCQUFoQixLQUFLOztBQVlSLE1BQU0sT0FBTyx3QkFBd0I7O2dHQUF4Qix3QkFBd0I7NkRBQXhCLHdCQUF3Qjs7UUFMdkIsa0JBQXlCOzt1RkFLMUIsd0JBQXdCO2NBVHBDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsbUJBQW1CO2dCQUM3QixRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLDZCQUE2QjtnQkFDdkMsSUFBSSxFQUFFO29CQUNKLEtBQUssRUFBRSxpQkFBaUI7aUJBQ3pCO2FBQ0Y7O0FBWUQsTUFBTSxPQUFPLHdCQUF3Qjs7Z0dBQXhCLHdCQUF3Qjs2REFBeEIsd0JBQXdCOztRQUx2QixrQkFBeUI7O3VGQUsxQix3QkFBd0I7Y0FUcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGlCQUFpQjtpQkFDekI7YUFDRjs7QUFZRCxNQUFNLE9BQU8sNEJBQTRCOzt3R0FBNUIsNEJBQTRCO2lFQUE1Qiw0QkFBNEI7O1FBTDNCLGtCQUF5Qjs7dUZBSzFCLDRCQUE0QjtjQVR4QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHVCQUF1QjtnQkFDakMsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUscUJBQXFCO2lCQUM3QjthQUNGOztBQU9ELE1BQU0sT0FBTywwQkFBMEI7O29HQUExQiwwQkFBMEI7K0RBQTFCLDBCQUEwQjt1RkFBMUIsMEJBQTBCO2NBSnRDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsNEJBQTRCO2FBQ3ZDOztBQVNELE1BQU0sT0FBTyxzQkFBc0I7OzRGQUF0QixzQkFBc0I7MkRBQXRCLHNCQUFzQjt1RkFBdEIsc0JBQXNCO2NBTmxDLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLGVBQWU7aUJBQ3ZCO2FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBEaXJlY3RpdmUsIElucHV0LCBUZW1wbGF0ZVJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1saXN0LWVtcHR5JyxcclxuICBleHBvcnRBczogJ2NtYWNzTGlzdEhlYWRlcicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGAgPG56LWVtYmVkLWVtcHR5IFtuekNvbXBvbmVudE5hbWVdPVwiJ2xpc3QnXCIgW3NwZWNpZmljQ29udGVudF09XCJub1Jlc3VsdFwiPjwvbnotZW1iZWQtZW1wdHk+IGAsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtbGlzdC1lbXB0eS10ZXh0J1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdEVtcHR5Q29tcG9uZW50IHtcclxuICBASW5wdXQoKSBub1Jlc3VsdD86IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWxpc3QtaGVhZGVyJyxcclxuICBleHBvcnRBczogJ2NtYWNzTGlzdEhlYWRlcicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgdGVtcGxhdGU6IGAgPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PiBgLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWxpc3QtaGVhZGVyJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdEhlYWRlckNvbXBvbmVudCB7fVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1saXN0LWZvb3RlcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0xpc3RGb290ZXInLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1saXN0LWZvb3RlcidcclxuICB9XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc0xpc3RGb290ZXJDb21wb25lbnQge31cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3MtbGlzdC1wYWdpbmF0aW9uJyxcclxuICBleHBvcnRBczogJ2NtYWNzTGlzdFBhZ2luYXRpb24nLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIHRlbXBsYXRlOiBgIDxuZy1jb250ZW50PjwvbmctY29udGVudD4gYCxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1saXN0LXBhZ2luYXRpb24nXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NMaXN0UGFnaW5hdGlvbkNvbXBvbmVudCB7fVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1saXN0LWxvYWQtbW9yZScsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc0xpc3RMb2FkTW9yZURpcmVjdGl2ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdExvYWRNb3JlRGlyZWN0aXZlIHt9XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLWxpc3RbY21hY3NHcmlkXScsXHJcbiAgaG9zdDoge1xyXG4gICAgY2xhc3M6ICdhbnQtbGlzdC1ncmlkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzTGlzdEdyaWREaXJlY3RpdmUge31cclxuIl19
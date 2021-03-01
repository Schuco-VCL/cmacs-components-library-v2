import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ContentChild, ElementRef, Input, ViewChild, Optional, ViewEncapsulation } from '@angular/core';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzIconDirective } from 'ng-zorro-antd/icon';
import { Subject } from 'rxjs';
import { filter, startWith, takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/core/transition-patch";
const _c0 = ["contentElement"];
const _c1 = ["cmacs-button", ""];
function CmacsButtonComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "i", 1);
} }
const _c2 = ["*"];
const NZ_CONFIG_MODULE_NAME = 'button';
export class CmacsButtonComponent {
    constructor(elementRef, cdr, renderer, nzConfigService, directionality) {
        this.elementRef = elementRef;
        this.cdr = cdr;
        this.renderer = renderer;
        this.nzConfigService = nzConfigService;
        this.directionality = directionality;
        this.block = false;
        this.ghost = false;
        this.search = false;
        this.loading = false;
        this.danger = false;
        this.disabled = false;
        this.tabIndex = null;
        this.type = 'default';
        this.shape = null;
        this.size = 'default';
        this.action = false;
        this.dir = 'ltr';
        this.destroy$ = new Subject();
        this.loading$ = new Subject();
        this.renderer.addClass(elementRef.nativeElement, 'ant-btn');
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.cdr.markForCheck();
        });
    }
    insertSpan(nodes, renderer) {
        nodes.forEach(node => {
            if (node.nodeName === '#text') {
                const span = renderer.createElement('span');
                const parent = renderer.parentNode(node);
                renderer.insertBefore(parent, span, node);
                renderer.appendChild(span, node);
            }
        });
    }
    assertIconOnly(element, renderer) {
        const listOfNode = Array.from(element.childNodes);
        const iconCount = listOfNode.filter(node => node.nodeName === 'I').length;
        const noText = listOfNode.every(node => node.nodeName !== '#text');
        const noSpan = listOfNode.every(node => node.nodeName !== 'SPAN');
        const isIconOnly = noSpan && noText && iconCount >= 1;
        if (isIconOnly) {
            renderer.addClass(element, 'ant-btn-icon-only');
        }
    }
    ngOnInit() {
        var _a;
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnChanges(changes) {
        const { loading, type } = changes;
        if (loading) {
            this.loading$.next(this.loading);
        }
    }
    ngAfterViewInit() {
        this.assertIconOnly(this.elementRef.nativeElement, this.renderer);
        this.insertSpan(this.elementRef.nativeElement.childNodes, this.renderer);
        this.imageWrapper();
    }
    imageWrapper() {
        const element = this.elementRef.nativeElement;
        const listOfNode = Array.from(element.childNodes);
        const iconList = listOfNode.filter(node => node.nodeName === 'I');
        iconList.forEach(icon => {
            this.renderer.addClass(icon, 'iconspan');
        });
    }
    ngAfterContentInit() {
        this.loading$
            .pipe(startWith(this.loading), filter(() => !!this.nzIconDirectiveElement), takeUntil(this.destroy$))
            .subscribe(loading => {
            const nativeElement = this.nzIconDirectiveElement.nativeElement;
            if (loading) {
                this.renderer.setStyle(nativeElement, 'display', 'none');
            }
            else {
                this.renderer.removeStyle(nativeElement, 'display');
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    hideBtn() {
        this.elementRef.nativeElement.style.display = 'none';
    }
    showBtn() {
        this.elementRef.nativeElement.style.display = 'inline-block';
    }
    disabledBtn() {
        this.elementRef.nativeElement.disabled = true;
    }
}
CmacsButtonComponent.ɵfac = function CmacsButtonComponent_Factory(t) { return new (t || CmacsButtonComponent)(i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
CmacsButtonComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsButtonComponent, selectors: [["button", "cmacs-button", ""], ["a", "cmacs-button", ""]], contentQueries: function CmacsButtonComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, NzIconDirective, 1, ElementRef);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.nzIconDirectiveElement = _t.first);
    } }, viewQuery: function CmacsButtonComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, 1);
    } if (rf & 2) {
        let _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentElement = _t.first);
    } }, hostVars: 36, hostBindings: function CmacsButtonComponent_HostBindings(rf, ctx) { if (rf & 2) {
        i0.ɵɵattribute("tabindex", ctx.disabled ? -1 : ctx.tabIndex === null ? null : ctx.tabIndex)("disabled", ctx.disabled || null);
        i0.ɵɵclassProp("ant-btn-primary", ctx.type === "primary")("ant-btn-default", ctx.type === "default")("ant-btn-dashed", ctx.type === "dashed")("ant-btn-link", ctx.type === "link")("ant-btn-text", ctx.type === "text")("ant-btn-danger", ctx.type === "danger")("ant-btn-circle", ctx.shape === "circle")("ant-btn-round", ctx.shape === "round")("ant-btn-lg", ctx.size === "large")("ant-btn-sm", ctx.size === "small")("ant-btn-dangerous", ctx.danger)("ant-btn-loading", ctx.loading)("ant-btn-background-ghost", ctx.ghost)("ant-btn-block", ctx.block)("ant-input-search-button", ctx.search)("cmacs-btn-action", ctx.action)("ant-btn-rtl", ctx.dir === "rtl");
    } }, inputs: { block: "block", ghost: "ghost", search: "search", loading: "loading", danger: "danger", disabled: "disabled", tabIndex: "tabIndex", type: "type", shape: "shape", size: "size", action: "action" }, exportAs: ["cmacsButton"], features: [i0.ɵɵNgOnChangesFeature], attrs: _c1, ngContentSelectors: _c2, decls: 2, vars: 1, consts: [["nz-icon", "", "type", "loading", 4, "ngIf"], ["nz-icon", "", "type", "loading"]], template: function CmacsButtonComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef();
        i0.ɵɵtemplate(0, CmacsButtonComponent_i_0_Template, 1, 0, "i", 0);
        i0.ɵɵprojection(1);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.loading);
    } }, directives: [i3.NgIf, i4.ɵNzTransitionPatchDirective], styles: [".ant-btn{font-size:14px;line-height:0;font-weight:400;height:34px;box-shadow:none;border-radius:3px;padding:0 14px}.ant-btn-primary{background-color:#2a7cff;border:1px solid #2a7cff}.ant-btn-primary:focus,.ant-btn-primary:hover{background-color:#2164c9;border-color:#2164c9}.ant-btn-primary[disabled],.ant-btn-primary[disabled]:focus,.ant-btn-primary[disabled]:hover{border:none;color:#97a0ae;background-color:#f3f3f4;cursor:default}.ant-btn-default{border:1px solid #bec4cd;color:#2a7cff}.ant-btn-default i,.ant-btn-primary i{font-size:16px;position:relative;height:16px;width:16px;vertical-align:middle;margin:2px}.ant-btn-default:not(.ant-btn-icon-only) i,.ant-btn-primary:not(.ant-btn-icon-only) i{margin-right:5px}.ant-btn-icon-only{vertical-align:unset!important}.ant-btn-default:focus,.ant-btn-default:hover{background-color:#f6f7fb;color:#2164c9;border:1px solid #bec4cd}.ant-btn-default[disabled],.ant-btn-default[disabled]:focus,.ant-btn-default[disabled]:hover{color:#97a0ae;background-color:#fff;border-color:#dee0e5;cursor:default}.ant-btn-background-ghost.ant-btn-default:enabled,.ant-btn-background-ghost.ant-btn-primary:enabled{color:#2a7cff;border:none}.ant-btn-background-ghost.ant-btn-default:enabled:focus,.ant-btn-background-ghost.ant-btn-default:enabled:hover,.ant-btn-background-ghost.ant-btn-primary:enabled:focus,.ant-btn-background-ghost.ant-btn-primary:enabled:hover{background-color:#f6f7fb!important;color:#2a7cff}.ant-btn-background-ghost:disabled{background-color:transparent!important;border:none}.ant-btn-icon-only i{color:#656c79}.ant-btn-icon-only,.ant-btn-icon-only:focus,.ant-btn-icon-only:hover{border:1px solid #dee0e5}.iconspan{height:20px;width:20px;text-align:center;vertical-align:middle;display:inline-block}.ant-btn-icon-only:enabled:focus i,.ant-btn-icon-only:enabled:hover i{color:#2a7cff}.ant-btn-icon-only:not(.ant-btn-background-ghost),.ant-btn-icon-only:not(.ant-btn-background-ghost):focus,.ant-btn-icon-only:not(.ant-btn-background-ghost):hover{background-color:#fff}.ant-btn-icon-only:disabled{background-color:#f3f3f4!important;cursor:default}.ant-btn-icon-only:disabled span i{color:#97a0ae}.cmacs-btn-action{height:30px}.ant-btn:not(.ant-btn-circle):not(.ant-btn-circle-outline).ant-btn-icon-only.cmacs-btn-action{padding-right:4px;padding-left:4px}.ant-btn:not(.ant-btn-circle):not(.ant-btn-circle-outline).ant-btn-icon-only{padding-right:6px;padding-left:6px}.ant-btn-danger{color:#fff;background-color:#ff4d4f;border-color:#ff4d4f}.ant-btn-danger:hover{opacity:.8}"], encapsulation: 2, changeDetection: 0 });
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "block", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "ghost", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "search", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "loading", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "danger", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "disabled", void 0);
__decorate([
    WithConfig()
], CmacsButtonComponent.prototype, "size", void 0);
__decorate([
    InputBoolean()
], CmacsButtonComponent.prototype, "action", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsButtonComponent, [{
        type: Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'button[cmacs-button], a[cmacs-button]',
                exportAs: 'cmacsButton',
                preserveWhitespaces: false,
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                templateUrl: './cmacs-button.component.html',
                styleUrls: ['./cmacs-button.component.css'],
                host: {
                    '[class.ant-btn-primary]': `type === 'primary'`,
                    '[class.ant-btn-default]': `type === 'default'`,
                    '[class.ant-btn-dashed]': `type === 'dashed'`,
                    '[class.ant-btn-link]': `type === 'link'`,
                    '[class.ant-btn-text]': `type === 'text'`,
                    '[class.ant-btn-danger]': `type === 'danger'`,
                    '[class.ant-btn-circle]': `shape === 'circle'`,
                    '[class.ant-btn-round]': `shape === 'round'`,
                    '[class.ant-btn-lg]': `size === 'large'`,
                    '[class.ant-btn-sm]': `size === 'small'`,
                    '[class.ant-btn-dangerous]': `danger`,
                    '[class.ant-btn-loading]': `loading`,
                    '[class.ant-btn-background-ghost]': `ghost`,
                    '[class.ant-btn-block]': `block`,
                    '[class.ant-input-search-button]': `search`,
                    '[class.cmacs-btn-action]': `action`,
                    '[class.ant-btn-rtl]': `dir === 'rtl'`,
                    '[attr.tabindex]': 'disabled ? -1 : (tabIndex === null ? null : tabIndex)',
                    '[attr.disabled]': 'disabled || null'
                }
            }]
    }], function () { return [{ type: i0.ElementRef }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i1.NzConfigService }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { nzIconDirectiveElement: [{
            type: ContentChild,
            args: [NzIconDirective, { read: ElementRef }]
        }], block: [{
            type: Input
        }], ghost: [{
            type: Input
        }], search: [{
            type: Input
        }], loading: [{
            type: Input
        }], danger: [{
            type: Input
        }], disabled: [{
            type: Input
        }], tabIndex: [{
            type: Input
        }], type: [{
            type: Input
        }], shape: [{
            type: Input
        }], size: [{
            type: Input
        }], action: [{
            type: Input
        }], contentElement: [{
            type: ViewChild,
            args: ['contentElement']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1idXR0b24vY21hY3MtYnV0dG9uLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1idXR0b24vY21hY3MtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBR0wsdUJBQXVCLEVBRXZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osVUFBVSxFQUNWLEtBQUssRUFHTCxTQUFTLEVBRVQsUUFBUSxFQUdSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQWdDLFVBQVUsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBR3JGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7O0lDMUI5RCx1QkFBOEM7OztBRHNDOUMsTUFBTSxxQkFBcUIsR0FBZ0IsUUFBUSxDQUFDO0FBaUNwRCxNQUFNLE9BQU8sb0JBQW9CO0lBeUMvQixZQUNVLFVBQXNCLEVBQ3RCLEdBQXNCLEVBQ3RCLFFBQW1CLEVBQ3BCLGVBQWdDLEVBQ25CLGNBQThCO1FBSjFDLGVBQVUsR0FBVixVQUFVLENBQVk7UUFDdEIsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FB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ZUFBZTtvQkFDdEMsaUJBQWlCLEVBQUUsdURBQXVEO29CQUMxRSxpQkFBaUIsRUFBRSxrQkFBa0I7aUJBQ3RDO2FBQ0Y7O3NCQStDSSxRQUFRO3dCQTVDMEMsc0JBQXNCO2tCQUExRSxZQUFZO21CQUFDLGVBQWUsRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7WUFDMUIsS0FBSztrQkFBN0IsS0FBSztZQUNtQixLQUFLO2tCQUE3QixLQUFLO1lBQ21CLE1BQU07a0JBQTlCLEtBQUs7WUFDbUIsT0FBTztrQkFBL0IsS0FBSztZQUNtQixNQUFNO2tCQUE5QixLQUFLO1lBQ21CLFFBQVE7a0JBQWhDLEtBQUs7WUFDRyxRQUFRO2tCQUFoQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csS0FBSztrQkFBYixLQUFLO1lBQ2lCLElBQUk7a0JBQTFCLEtBQUs7WUFDbUIsTUFBTTtrQkFBOUIsS0FBSztZQUl1QixjQUFjO2tCQUExQyxTQUFTO21CQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBBZnRlckNvbnRlbnRJbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgQ29udGVudENoaWxkLFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPbkRlc3Ryb3ksXG4gIFZpZXdDaGlsZCxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgUmVuZGVyZXIyLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q29uZmlnS2V5LCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IHdhcm5EZXByZWNhdGlvbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS9sb2dnZXInO1xuaW1wb3J0IHsgQm9vbGVhbklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0Qm9vbGVhbiB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcblxuaW1wb3J0IHsgTnpJY29uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pY29uJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbi8qKlxuICogQGRlcHJlY2F0ZWQgYGRhbmdlcmAgbm90IHN1cHBvcnRlZCwgdXNlIGBuekRhbmdlcmAgaW5zdGVhZFxuICogQGJyZWFraW5nLWNoYW5nZSAxMi4wLjBcbiAqL1xudHlwZSBOekxlZ2FjeUJ1dHRvblR5cGUgPSAncHJpbWFyeScgfCAnZGVmYXVsdCcgfCAnZGFzaGVkJyB8ICdkYW5nZXInIHwgJ2xpbmsnIHwgJ3RleHQnIHwgbnVsbDtcblxuZXhwb3J0IHR5cGUgTnpCdXR0b25UeXBlID0gTnpMZWdhY3lCdXR0b25UeXBlO1xuZXhwb3J0IHR5cGUgTnpCdXR0b25TaGFwZSA9ICdjaXJjbGUnIHwgJ3JvdW5kJyB8IG51bGw7XG5leHBvcnQgdHlwZSBOekJ1dHRvblNpemUgPSAnbGFyZ2UnIHwgJ2RlZmF1bHQnIHwgJ3NtYWxsJztcblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdidXR0b24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogY29tcG9uZW50LXNlbGVjdG9yXHJcbiAgc2VsZWN0b3I6ICdidXR0b25bY21hY3MtYnV0dG9uXSwgYVtjbWFjcy1idXR0b25dJyxcclxuICBleHBvcnRBczogJ2NtYWNzQnV0dG9uJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1idXR0b24uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLWJ1dHRvbi5jb21wb25lbnQuY3NzJ10sXHJcbiAgaG9zdDoge1xuICAgICdbY2xhc3MuYW50LWJ0bi1wcmltYXJ5XSc6IGB0eXBlID09PSAncHJpbWFyeSdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1kZWZhdWx0XSc6IGB0eXBlID09PSAnZGVmYXVsdCdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1kYXNoZWRdJzogYHR5cGUgPT09ICdkYXNoZWQnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tbGlua10nOiBgdHlwZSA9PT0gJ2xpbmsnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tdGV4dF0nOiBgdHlwZSA9PT0gJ3RleHQnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tZGFuZ2VyXSc6IGB0eXBlID09PSAnZGFuZ2VyJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWNpcmNsZV0nOiBgc2hhcGUgPT09ICdjaXJjbGUnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tcm91bmRdJzogYHNoYXBlID09PSAncm91bmQnYCxcbiAgICAnW2NsYXNzLmFudC1idG4tbGddJzogYHNpemUgPT09ICdsYXJnZSdgLFxuICAgICdbY2xhc3MuYW50LWJ0bi1zbV0nOiBgc2l6ZSA9PT0gJ3NtYWxsJ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWRhbmdlcm91c10nOiBgZGFuZ2VyYCxcbiAgICAnW2NsYXNzLmFudC1idG4tbG9hZGluZ10nOiBgbG9hZGluZ2AsXG4gICAgJ1tjbGFzcy5hbnQtYnRuLWJhY2tncm91bmQtZ2hvc3RdJzogYGdob3N0YCxcbiAgICAnW2NsYXNzLmFudC1idG4tYmxvY2tdJzogYGJsb2NrYCxcbiAgICAnW2NsYXNzLmFudC1pbnB1dC1zZWFyY2gtYnV0dG9uXSc6IGBzZWFyY2hgLFxuICAgICdbY2xhc3MuY21hY3MtYnRuLWFjdGlvbl0nOiBgYWN0aW9uYCxcbiAgICAnW2NsYXNzLmFudC1idG4tcnRsXSc6IGBkaXIgPT09ICdydGwnYCxcbiAgICAnW2F0dHIudGFiaW5kZXhdJzogJ2Rpc2FibGVkID8gLTEgOiAodGFiSW5kZXggPT09IG51bGwgPyBudWxsIDogdGFiSW5kZXgpJyxcbiAgICAnW2F0dHIuZGlzYWJsZWRdJzogJ2Rpc2FibGVkIHx8IG51bGwnXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJDb250ZW50SW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcblxyXG4gIEBDb250ZW50Q2hpbGQoTnpJY29uRGlyZWN0aXZlLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgbnpJY29uRGlyZWN0aXZlRWxlbWVudCE6IEVsZW1lbnRSZWY7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBibG9jazogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZ2hvc3Q6IGJvb2xlYW4gPSBmYWxzZTtcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIHNlYXJjaDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgZGFuZ2VyOiBib29sZWFuID0gZmFsc2U7XG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBASW5wdXQoKSB0YWJJbmRleDogbnVtYmVyIHwgc3RyaW5nIHwgbnVsbCA9IG51bGw7XG4gIEBJbnB1dCgpIHR5cGU6IE56QnV0dG9uVHlwZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgc2hhcGU6IE56QnV0dG9uU2hhcGUgPSBudWxsO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHNpemU6IE56QnV0dG9uU2l6ZSA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIGFjdGlvbiA9IGZhbHNlO1xuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcbiAgcHJpdmF0ZSBsb2FkaW5nJCA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgQFZpZXdDaGlsZCgnY29udGVudEVsZW1lbnQnKSBjb250ZW50RWxlbWVudDogRWxlbWVudFJlZjtcclxuXHJcbiAgaW5zZXJ0U3Bhbihub2RlczogTm9kZUxpc3QsIHJlbmRlcmVyOiBSZW5kZXJlcjIpOiB2b2lkIHtcbiAgICBub2Rlcy5mb3JFYWNoKG5vZGUgPT4ge1xuICAgICAgaWYgKG5vZGUubm9kZU5hbWUgPT09ICcjdGV4dCcpIHtcbiAgICAgICAgY29uc3Qgc3BhbiA9IHJlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgY29uc3QgcGFyZW50ID0gcmVuZGVyZXIucGFyZW50Tm9kZShub2RlKTtcbiAgICAgICAgcmVuZGVyZXIuaW5zZXJ0QmVmb3JlKHBhcmVudCwgc3Bhbiwgbm9kZSk7XG4gICAgICAgIHJlbmRlcmVyLmFwcGVuZENoaWxkKHNwYW4sIG5vZGUpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XHJcblxyXG4gIGFzc2VydEljb25Pbmx5KGVsZW1lbnQ6IEhUTUxCdXR0b25FbGVtZW50LCByZW5kZXJlcjogUmVuZGVyZXIyKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdE9mTm9kZSA9IEFycmF5LmZyb20oZWxlbWVudC5jaGlsZE5vZGVzKTtcbiAgICBjb25zdCBpY29uQ291bnQgPSBsaXN0T2ZOb2RlLmZpbHRlcihub2RlID0+IG5vZGUubm9kZU5hbWUgPT09ICdJJykubGVuZ3RoO1xuICAgIGNvbnN0IG5vVGV4dCA9IGxpc3RPZk5vZGUuZXZlcnkobm9kZSA9PiBub2RlLm5vZGVOYW1lICE9PSAnI3RleHQnKTtcbiAgICBjb25zdCBub1NwYW4gPSBsaXN0T2ZOb2RlLmV2ZXJ5KG5vZGUgPT4gbm9kZS5ub2RlTmFtZSAhPT0gJ1NQQU4nKTtcbiAgICBjb25zdCBpc0ljb25Pbmx5ID0gbm9TcGFuICYmIG5vVGV4dCAmJiBpY29uQ291bnQgPj0gMTtcbiAgICBpZiAoaXNJY29uT25seSkge1xuICAgICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudCwgJ2FudC1idG4taWNvbi1vbmx5Jyk7XG4gICAgfVxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XHJcbiAgKSB7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCwgJ2FudC1idG4nKTtcclxuICAgIHRoaXMubnpDb25maWdTZXJ2aWNlXG4gICAgICAuZ2V0Q29uZmlnQ2hhbmdlRXZlbnRGb3JDb21wb25lbnQoTlpfQ09ORklHX01PRFVMRV9OQU1FKVxuICAgICAgLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKVxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHsgbG9hZGluZywgdHlwZSB9ID0gY2hhbmdlcztcbiAgICBpZiAobG9hZGluZykge1xuICAgICAgdGhpcy5sb2FkaW5nJC5uZXh0KHRoaXMubG9hZGluZyk7XG4gICAgfVxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFzc2VydEljb25Pbmx5KHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCB0aGlzLnJlbmRlcmVyKTtcbiAgICB0aGlzLmluc2VydFNwYW4odGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2hpbGROb2RlcywgdGhpcy5yZW5kZXJlcik7XG4gICAgdGhpcy5pbWFnZVdyYXBwZXIoKTtcbiAgfVxuXG4gIGltYWdlV3JhcHBlcigpOiB2b2lkIHtcclxuICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIGNvbnN0IGxpc3RPZk5vZGUgPSBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2Rlcyk7XG4gICAgY29uc3QgaWNvbkxpc3QgPSBsaXN0T2ZOb2RlLmZpbHRlcihub2RlID0+IG5vZGUubm9kZU5hbWUgPT09ICdJJyk7XHJcblxyXG4gICAgaWNvbkxpc3QuZm9yRWFjaChpY29uID0+IHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhpY29uLCAnaWNvbnNwYW4nKTtcclxuICAgIH0pO1xyXG4gIH1cblxuICBuZ0FmdGVyQ29udGVudEluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkaW5nJFxuICAgICAgLnBpcGUoXG4gICAgICAgIHN0YXJ0V2l0aCh0aGlzLmxvYWRpbmcpLFxuICAgICAgICBmaWx0ZXIoKCkgPT4gISF0aGlzLm56SWNvbkRpcmVjdGl2ZUVsZW1lbnQpLFxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUobG9hZGluZyA9PiB7XG4gICAgICAgIGNvbnN0IG5hdGl2ZUVsZW1lbnQgPSB0aGlzLm56SWNvbkRpcmVjdGl2ZUVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKG5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5JywgJ25vbmUnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZVN0eWxlKG5hdGl2ZUVsZW1lbnQsICdkaXNwbGF5Jyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XHJcblxyXG4gIGhpZGVCdG4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgc2hvd0J0bigpOiB2b2lkIHtcclxuICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcclxuICB9XHJcblxyXG4gIGRpc2FibGVkQnRuKCk6IHZvaWQge1xyXG4gICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gIH1cclxuICBcclxufVxyXG4iLCI8aSBuei1pY29uIHR5cGU9XCJsb2FkaW5nXCIgKm5nSWY9XCJsb2FkaW5nXCI+PC9pPlxyXG48bmctY29udGVudD48L25nLWNvbnRlbnQ+XHJcbiJdfQ==
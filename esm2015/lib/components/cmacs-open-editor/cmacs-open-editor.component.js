import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "../cmacs-divider/cmacs-divider.component";
import * as i3 from "@tinymce/tinymce-angular";
import * as i4 from "@angular/forms";
export class CmacsOpenEditorComponent {
    constructor(i18n, cdr) {
        this.i18n = i18n;
        this.cdr = cdr;
        this.showEditor = false;
        this.oninit = new EventEmitter();
        this.onchange = new EventEmitter();
        this.onblur = new EventEmitter();
        this.onkeyup = new EventEmitter();
        this.disabled = false;
        this.height = '450px';
        this.placeholder = 'Type here ..."';
        this.statusbar = false;
        this.resize = false;
        this.skin = "PlanToBuild_Dark";
        // tslint:disable-next-line: max-line-length
        this.toolbarmobile = ['bold italic underline | fontsizeselect', 'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist'];
        this.toolbar = ['bold italic underline | fontsizeselect link', 'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist'];
        this.id = '00000000-0000-0000-0000-000000000000';
        this.content = '';
        this.contentChange = new EventEmitter();
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        if (this.tinyMceSettings === undefined) {
            this.tinyMceSettings = {
                id: this.id,
                editor_selector: 'cmacs-editor',
                menubar: false,
                inline: true,
                image_title: true,
                resize: this.resize,
                automatic_uploads: true,
                height: this.height,
                statusbar: this.statusbar,
                file_picker_types: 'image',
                images_upload_url: '#',
                content_css: false,
                // content_css:'PlanToBuild_Dark', //only available in 5.1 or later
                // skin: 'oxide-dark',
                skin: this.skin,
                // skin_url: 'assets/skins/PlanToBuild_Dark',
                placeholder: this.placeholder,
                setup: (editor) => {
                    editor.on('init', (obj) => {
                        this.oninit.emit(obj);
                    });
                    editor.on('blur', (obj) => {
                        this.onblur.emit(obj);
                    });
                    editor.on('keyup', (obj) => {
                        this.onkeyup.emit(obj);
                    });
                    editor.on('Change', (obj) => {
                        this.contentChange.emit(this.content);
                        this.onchange.emit(obj);
                    });
                },
                plugins: ['image table textcolor link lists '],
                link_default_target: '_blank',
                toolbar: this.toolbar,
                toolbar_persist: false,
                mobile: {
                    theme: 'mobile',
                    plugins: ['image table textcolor link'],
                    skin: "PlanToBuild_Dark",
                    toolbar: this.toolbarmobile
                }
            };
        }
        this.i18n.localeChange.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.tinyMceSettings.language = this.i18n.getLocale().locale === 'de' ? 'de' : null;
            this.cdr.detectChanges();
        });
        setTimeout(() => {
            this.cdr.detectChanges();
        }, 100);
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
CmacsOpenEditorComponent.ɵfac = function CmacsOpenEditorComponent_Factory(t) { return new (t || CmacsOpenEditorComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
CmacsOpenEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOpenEditorComponent, selectors: [["cmacs-open-editor"]], inputs: { disabled: "disabled", height: "height", placeholder: "placeholder", statusbar: "statusbar", resize: "resize", skin: "skin", toolbarmobile: "toolbarmobile", toolbar: "toolbar", tinyMceSettings: "tinyMceSettings", id: "id", content: "content" }, outputs: { oninit: "oninit", onchange: "onchange", onblur: "onblur", onkeyup: "onkeyup", contentChange: "contentChange" }, exportAs: ["cmacsOpenEditor"], decls: 3, vars: 5, consts: [[1, "cmacs-textarea-opened-wrapper", 2, "display", "inline-flex"], [1, "cmacs-open-textarea-divider"], [1, "cmacs-editor", 3, "init", "ngModel", "disabled", "inline", "id", "ngModelChange"]], template: function CmacsOpenEditorComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelement(1, "cmacs-divider", 1);
        i0.ɵɵelementStart(2, "editor", 2);
        i0.ɵɵlistener("ngModelChange", function CmacsOpenEditorComponent_Template_editor_ngModelChange_2_listener($event) { return ctx.content = $event; });
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵpropertyInterpolate("id", ctx.id);
        i0.ɵɵproperty("init", ctx.tinyMceSettings)("ngModel", ctx.content)("disabled", ctx.disabled)("inline", true);
    } }, directives: [i2.CmacsDividerComponent, i3.EditorComponent, i4.NgControlStatus, i4.NgModel], styles: [".cmacs-editor[_ngcontent-%COMP%]   .tox[_ngcontent-%COMP%]   .tox-statusbar[_ngcontent-%COMP%]{border-top:none}.cmacs-editor[_ngcontent-%COMP%]   .tox[_ngcontent-%COMP%]   .tox-statusbar__text-container[_ngcontent-%COMP%]{display:none}.cmacs-open-textarea-divider[_ngcontent-%COMP%]{height:18px}  .cmacs-editor>.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks):before{color:#acb3bf;cursor:text}"] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOpenEditorComponent, [{
        type: Component,
        args: [{
                selector: 'cmacs-open-editor',
                exportAs: 'cmacsOpenEditor',
                templateUrl: './cmacs-open-editor.component.html',
                styleUrls: ['./cmacs-open-editor.component.css']
            }]
    }], function () { return [{ type: i1.NzI18nService }, { type: i0.ChangeDetectorRef }]; }, { oninit: [{
            type: Output
        }], onchange: [{
            type: Output
        }], onblur: [{
            type: Output
        }], onkeyup: [{
            type: Output
        }], disabled: [{
            type: Input
        }], height: [{
            type: Input
        }], placeholder: [{
            type: Input
        }], statusbar: [{
            type: Input
        }], resize: [{
            type: Input
        }], skin: [{
            type: Input
        }], toolbarmobile: [{
            type: Input
        }], toolbar: [{
            type: Input
        }], tinyMceSettings: [{
            type: Input
        }], id: [{
            type: Input
        }], content: [{
            type: Input
        }], contentChange: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW9wZW4tZWRpdG9yL2NtYWNzLW9wZW4tZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1vcGVuLWVkaXRvci9jbWFjcy1vcGVuLWVkaXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFnQjNDLE1BQU0sT0FBTyx3QkFBd0I7SUFzQm5DLFlBQW9CLElBQW1CLEVBQVUsR0FBc0I7UUFBbkQsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBckJ2RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ1QsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixnQkFBVyxHQUFHLGdCQUFnQixDQUFDO1FBQy9CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFD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WixLQUFLO1lBRUcsYUFBYTtrQkFBckIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDSSxhQUFhO2tCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9pbnRlcm5hbC9TdWJqZWN0JztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuLy8gaW1wb3J0ICcuLi8uLi9hc3NldHMvdGlueW1jZS9qcy90aW55bWNlL3NraW5zL3VpL1BsYW5Ub0J1aWxkX0RhcmsvY29udGVudC5jc3MnO1xyXG4vLyBpbXBvcnQgJy4uLy4uL2Fzc2V0cy90aW55bWNlL2pzL3RpbnltY2Uvc2tpbnMvY29udGVudC9QbGFuVG9CdWlsZF9EYXJrL2NvbnRlbnQuY3NzJztcclxuLy8gaW1wb3J0ICcuLi8uLi9hc3NldHMvdGlueW1jZS9qcy90aW55bWNlL3NraW5zL3VpL1BsYW5Ub0J1aWxkX0RhcmsvY29udGVudC5jc3MnO1xyXG4vLyBpbXBvcnQgJy4uLy4uL2Fzc2V0cy90aW55bWNlL2pzL3RpbnltY2Uvc2tpbnMvdWkvUGxhblRvQnVpbGRfRGFyay9za2luLmNzcyc7XHJcbi8vIGltcG9ydCAnLi4vLi4vYXNzZXRzL3RpbnltY2UvanMvdGlueW1jZS9za2lucy91aS9QbGFuVG9CdWlsZF9EYXJrL2NvbnRlbnQubWluLmNzcyc7XHJcblxyXG5kZWNsYXJlIHZhciB0aW55bWNlOiBhbnk7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdjbWFjcy1vcGVuLWVkaXRvcicsXHJcbiAgZXhwb3J0QXM6ICdjbWFjc09wZW5FZGl0b3InLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9jbWFjcy1vcGVuLWVkaXRvci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vY21hY3Mtb3Blbi1lZGl0b3IuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDbWFjc09wZW5FZGl0b3JDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3ksIE9uSW5pdCB7XHJcbiAgc2hvd0VkaXRvciA9IGZhbHNlO1xyXG4gIEBPdXRwdXQoKSBvbmluaXQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uY2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmJsdXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9ua2V5dXA6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQElucHV0KCkgZGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBoZWlnaHQgPSAnNDUwcHgnO1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyID0gJ1R5cGUgaGVyZSAuLi5cIic7XHJcbiAgQElucHV0KCkgc3RhdHVzYmFyID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcmVzaXplID0gZmFsc2U7XHJcbiAgQElucHV0KCkgc2tpbiA9IFwiUGxhblRvQnVpbGRfRGFya1wiO1xyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbWF4LWxpbmUtbGVuZ3RoXHJcbiAgQElucHV0KCkgdG9vbGJhcm1vYmlsZSA9IFsnYm9sZCBpdGFsaWMgdW5kZXJsaW5lIHwgZm9udHNpemVzZWxlY3QnLCAnZm9yZWNvbG9yIGJhY2tjb2xvciB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduZnVsbCB8IG51bWxpc3QgYnVsbGlzdCddO1xyXG4gIEBJbnB1dCgpIHRvb2xiYXIgPSBbJ2JvbGQgaXRhbGljIHVuZGVybGluZSB8IGZvbnRzaXplc2VsZWN0IGxpbmsnLCAnZm9yZWNvbG9yIGJhY2tjb2xvciB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduZnVsbCB8IG51bWxpc3QgYnVsbGlzdCddO1xyXG4gIEBJbnB1dCgpIHRpbnlNY2VTZXR0aW5ncyE6IGFueTtcclxuICBASW5wdXQoKSBpZDogc3RyaW5nID0gJzAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDAwMDAwMDAwMCc7XHJcbiAgQElucHV0KCkgY29udGVudDogc3RyaW5nID0gJyc7XHJcbiAgQE91dHB1dCgpIGNvbnRlbnRDaGFuZ2U6IEV2ZW50RW1pdHRlcjxzdHJpbmc+ID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdCgpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UsIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG5cclxuICAgIGlmICh0aGlzLnRpbnlNY2VTZXR0aW5ncyA9PT0gdW5kZWZpbmVkKSB7XHJcblxyXG5cclxuICAgICAgdGhpcy50aW55TWNlU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgZWRpdG9yX3NlbGVjdG9yOiAnY21hY3MtZWRpdG9yJyxcclxuICAgICAgICBtZW51YmFyOiBmYWxzZSxcclxuICAgICAgICBpbmxpbmU6IHRydWUsXHJcbiAgICAgICAgaW1hZ2VfdGl0bGU6IHRydWUsXHJcbiAgICAgICAgcmVzaXplOiB0aGlzLnJlc2l6ZSxcclxuICAgICAgICBhdXRvbWF0aWNfdXBsb2FkczogdHJ1ZSxcclxuICAgICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxyXG4gICAgICAgIHN0YXR1c2JhcjogdGhpcy5zdGF0dXNiYXIsXHJcbiAgICAgICAgZmlsZV9waWNrZXJfdHlwZXM6ICdpbWFnZScsXHJcbiAgICAgICAgaW1hZ2VzX3VwbG9hZF91cmw6ICcjJyxcclxuICAgICAgICBjb250ZW50X2NzczpmYWxzZSxcclxuICAgICAgICAvLyBjb250ZW50X2NzczonUGxhblRvQnVpbGRfRGFyaycsIC8vb25seSBhdmFpbGFibGUgaW4gNS4xIG9yIGxhdGVyXHJcbiAgICAgICAgLy8gc2tpbjogJ294aWRlLWRhcmsnLFxyXG4gICAgICAgIHNraW46IHRoaXMuc2tpbixcclxuICAgICAgICAvLyBza2luX3VybDogJ2Fzc2V0cy9za2lucy9QbGFuVG9CdWlsZF9EYXJrJyxcclxuICAgICAgICBwbGFjZWhvbGRlcjogdGhpcy5wbGFjZWhvbGRlcixcclxuICAgICAgICBzZXR1cDogKGVkaXRvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2luaXQnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25pbml0LmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdibHVyJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uYmx1ci5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbigna2V5dXAnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25rZXl1cC5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbignQ2hhbmdlJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnRDaGFuZ2UuZW1pdCh0aGlzLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uY2hhbmdlLmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSB0ZXh0Y29sb3IgbGluayBsaXN0cyAnXSxcclxuICAgICAgICBsaW5rX2RlZmF1bHRfdGFyZ2V0OiAnX2JsYW5rJyxcclxuICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXIsXHJcbiAgICAgICAgdG9vbGJhcl9wZXJzaXN0OiBmYWxzZSxcclxuICAgICAgICBtb2JpbGU6IHtcclxuICAgICAgICAgIHRoZW1lOiAnbW9iaWxlJyxcclxuICAgICAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUgdGV4dGNvbG9yIGxpbmsnXSxcclxuICAgICAgICBza2luOiBcIlBsYW5Ub0J1aWxkX0RhcmtcIixcclxuICAgICAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhcm1vYmlsZVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmkxOG4ubG9jYWxlQ2hhbmdlLnBpcGUodGFrZVVudGlsKHRoaXMuZGVzdHJveSQpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLnRpbnlNY2VTZXR0aW5ncy5sYW5ndWFnZSA9IHRoaXMuaTE4bi5nZXRMb2NhbGUoKS5sb2NhbGUgPT09ICdkZScgPyAnZGUnIDogbnVsbDtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0sIDEwMCk7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjbWFjcy10ZXh0YXJlYS1vcGVuZWQtd3JhcHBlclwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXg7XCI+XG4gICAgPGNtYWNzLWRpdmlkZXIgY2xhc3M9XCJjbWFjcy1vcGVuLXRleHRhcmVhLWRpdmlkZXJcIj48L2NtYWNzLWRpdmlkZXI+XG5cbiAgICA8ZWRpdG9yIFtpbml0XT1cInRpbnlNY2VTZXR0aW5nc1wiIGNsYXNzPVwiY21hY3MtZWRpdG9yXCIgWyhuZ01vZGVsKV09XCJjb250ZW50XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2lubGluZV09XCJ0cnVlXCIgaWQ9XCJ7e2lkfX1cIj5cblxuICAgIDwvZWRpdG9yPlxuXG48L2Rpdj4iXX0=
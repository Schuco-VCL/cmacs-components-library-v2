import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/i18n";
import * as i2 from "@angular/forms";
import * as i3 from "@tinymce/tinymce-angular";
import * as i4 from "../cmacs-divider/cmacs-divider.component";
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
            switch (this.i18n.getLocale().locale) {
                case 'de':
                    this.tinyMceSettings.language = 'de';
                    break;
                case 'jp':
                    this.tinyMceSettings.language = 'ja';
                    break;
                default:
                    this.tinyMceSettings.language = null;
            }
            this.cdr.detectChanges();
        });
        setTimeout(() => {
            this.cdr.detectChanges();
        }, 100);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    static { this.ɵfac = function CmacsOpenEditorComponent_Factory(t) { return new (t || CmacsOpenEditorComponent)(i0.ɵɵdirectiveInject(i1.NzI18nService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsOpenEditorComponent, selectors: [["cmacs-open-editor"]], inputs: { disabled: "disabled", height: "height", placeholder: "placeholder", statusbar: "statusbar", resize: "resize", skin: "skin", toolbarmobile: "toolbarmobile", toolbar: "toolbar", tinyMceSettings: "tinyMceSettings", id: "id", content: "content" }, outputs: { oninit: "oninit", onchange: "onchange", onblur: "onblur", onkeyup: "onkeyup", contentChange: "contentChange" }, exportAs: ["cmacsOpenEditor"], decls: 3, vars: 5, consts: [[1, "cmacs-textarea-opened-wrapper", 2, "display", "inline-flex"], [1, "cmacs-open-textarea-divider"], [1, "cmacs-editor", 3, "init", "ngModel", "disabled", "inline", "id", "ngModelChange"]], template: function CmacsOpenEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 0);
            i0.ɵɵelement(1, "cmacs-divider", 1);
            i0.ɵɵelementStart(2, "editor", 2);
            i0.ɵɵlistener("ngModelChange", function CmacsOpenEditorComponent_Template_editor_ngModelChange_2_listener($event) { return ctx.content = $event; });
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵadvance(2);
            i0.ɵɵpropertyInterpolate("id", ctx.id);
            i0.ɵɵproperty("init", ctx.tinyMceSettings)("ngModel", ctx.content)("disabled", ctx.disabled)("inline", true);
        } }, dependencies: [i2.NgControlStatus, i2.NgModel, i3.EditorComponent, i4.CmacsDividerComponent], styles: [".cmacs-editor[_ngcontent-%COMP%]   .tox[_ngcontent-%COMP%]   .tox-statusbar[_ngcontent-%COMP%]{border-top:none}.cmacs-editor[_ngcontent-%COMP%]   .tox[_ngcontent-%COMP%]   .tox-statusbar__text-container[_ngcontent-%COMP%]{display:none}.cmacs-open-textarea-divider[_ngcontent-%COMP%]{height:18px}  .cmacs-editor>.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks):before{color:#acb3bf;cursor:text}"] }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsOpenEditorComponent, [{
        type: Component,
        args: [{ selector: 'cmacs-open-editor', exportAs: 'cmacsOpenEditor', template: "<div class=\"cmacs-textarea-opened-wrapper\" style=\"display: inline-flex;\">\r\n    <cmacs-divider class=\"cmacs-open-textarea-divider\"></cmacs-divider>\r\n\r\n    <editor [init]=\"tinyMceSettings\" class=\"cmacs-editor\" [(ngModel)]=\"content\" [disabled]=\"disabled\" [inline]=\"true\" id=\"{{id}}\">\r\n\r\n    </editor>\r\n\r\n</div>", styles: [".cmacs-editor .tox .tox-statusbar{border-top:none}.cmacs-editor .tox .tox-statusbar__text-container{display:none}.cmacs-open-textarea-divider{height:18px}::ng-deep .cmacs-editor>.mce-content-body[data-mce-placeholder]:not(.mce-visualblocks):before{color:#acb3bf;cursor:text}\n"] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW9wZW4tZWRpdG9yL2NtYWNzLW9wZW4tZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1vcGVuLWVkaXRvci9jbWFjcy1vcGVuLWVkaXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFnQjNDLE1BQU0sT0FBTyx3QkFBd0I7SUFzQm5DLFlBQW9CLElBQW1CLEVBQVUsR0FBc0I7UUFBbkQsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBckJ2RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ1QsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixnQkFBVyxHQUFHLGdCQUFnQixDQUFDO1FBQy9CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFD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QkFBakIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUVHLGFBQWE7a0JBQXJCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csRUFBRTtrQkFBVixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0ksYUFBYTtrQkFBdEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXQsIENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMvaW50ZXJuYWwvU3ViamVjdCc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbi8vIGltcG9ydCAnLi4vLi4vYXNzZXRzL3RpbnltY2UvanMvdGlueW1jZS9za2lucy91aS9QbGFuVG9CdWlsZF9EYXJrL2NvbnRlbnQuY3NzJztcclxuLy8gaW1wb3J0ICcuLi8uLi9hc3NldHMvdGlueW1jZS9qcy90aW55bWNlL3NraW5zL2NvbnRlbnQvUGxhblRvQnVpbGRfRGFyay9jb250ZW50LmNzcyc7XHJcbi8vIGltcG9ydCAnLi4vLi4vYXNzZXRzL3RpbnltY2UvanMvdGlueW1jZS9za2lucy91aS9QbGFuVG9CdWlsZF9EYXJrL2NvbnRlbnQuY3NzJztcclxuLy8gaW1wb3J0ICcuLi8uLi9hc3NldHMvdGlueW1jZS9qcy90aW55bWNlL3NraW5zL3VpL1BsYW5Ub0J1aWxkX0Rhcmsvc2tpbi5jc3MnO1xyXG4vLyBpbXBvcnQgJy4uLy4uL2Fzc2V0cy90aW55bWNlL2pzL3RpbnltY2Uvc2tpbnMvdWkvUGxhblRvQnVpbGRfRGFyay9jb250ZW50Lm1pbi5jc3MnO1xyXG5cclxuZGVjbGFyZSB2YXIgdGlueW1jZTogYW55O1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnY21hY3Mtb3Blbi1lZGl0b3InLFxyXG4gIGV4cG9ydEFzOiAnY21hY3NPcGVuRWRpdG9yJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY21hY3Mtb3Blbi1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2NtYWNzLW9wZW4tZWRpdG9yLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NPcGVuRWRpdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95LCBPbkluaXQge1xyXG4gIHNob3dFZGl0b3IgPSBmYWxzZTtcclxuICBAT3V0cHV0KCkgb25pbml0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25ibHVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBPdXRwdXQoKSBvbmtleXVwOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGVpZ2h0ID0gJzQ1MHB4JztcclxuICBASW5wdXQoKSBwbGFjZWhvbGRlciA9ICdUeXBlIGhlcmUgLi4uXCInO1xyXG4gIEBJbnB1dCgpIHN0YXR1c2JhciA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHJlc2l6ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIHNraW4gPSBcIlBsYW5Ub0J1aWxkX0RhcmtcIjtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gIEBJbnB1dCgpIHRvb2xiYXJtb2JpbGUgPSBbJ2JvbGQgaXRhbGljIHVuZGVybGluZSB8IGZvbnRzaXplc2VsZWN0JywgJ2ZvcmVjb2xvciBiYWNrY29sb3IgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmZ1bGwgfCBudW1saXN0IGJ1bGxpc3QnXTtcclxuICBASW5wdXQoKSB0b29sYmFyID0gWydib2xkIGl0YWxpYyB1bmRlcmxpbmUgfCBmb250c2l6ZXNlbGVjdCBsaW5rJywgJ2ZvcmVjb2xvciBiYWNrY29sb3IgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmZ1bGwgfCBudW1saXN0IGJ1bGxpc3QnXTtcclxuICBASW5wdXQoKSB0aW55TWNlU2V0dGluZ3MhOiBhbnk7XHJcbiAgQElucHV0KCkgaWQ6IHN0cmluZyA9ICcwMDAwMDAwMC0wMDAwLTAwMDAtMDAwMC0wMDAwMDAwMDAwMDAnO1xyXG4gIEBJbnB1dCgpIGNvbnRlbnQ6IHN0cmluZyA9ICcnO1xyXG4gIEBPdXRwdXQoKSBjb250ZW50Q2hhbmdlOiBFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpMThuOiBOekkxOG5TZXJ2aWNlLCBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuXHJcbiAgICBpZiAodGhpcy50aW55TWNlU2V0dGluZ3MgPT09IHVuZGVmaW5lZCkge1xyXG5cclxuXHJcbiAgICAgIHRoaXMudGlueU1jZVNldHRpbmdzID0ge1xyXG4gICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgIGVkaXRvcl9zZWxlY3RvcjogJ2NtYWNzLWVkaXRvcicsXHJcbiAgICAgICAgbWVudWJhcjogZmFsc2UsXHJcbiAgICAgICAgaW5saW5lOiB0cnVlLFxyXG4gICAgICAgIGltYWdlX3RpdGxlOiB0cnVlLFxyXG4gICAgICAgIHJlc2l6ZTogdGhpcy5yZXNpemUsXHJcbiAgICAgICAgYXV0b21hdGljX3VwbG9hZHM6IHRydWUsXHJcbiAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICBzdGF0dXNiYXI6IHRoaXMuc3RhdHVzYmFyLFxyXG4gICAgICAgIGZpbGVfcGlja2VyX3R5cGVzOiAnaW1hZ2UnLFxyXG4gICAgICAgIGltYWdlc191cGxvYWRfdXJsOiAnIycsXHJcbiAgICAgICAgY29udGVudF9jc3M6ZmFsc2UsXHJcbiAgICAgICAgLy8gY29udGVudF9jc3M6J1BsYW5Ub0J1aWxkX0RhcmsnLCAvL29ubHkgYXZhaWxhYmxlIGluIDUuMSBvciBsYXRlclxyXG4gICAgICAgIC8vIHNraW46ICdveGlkZS1kYXJrJyxcclxuICAgICAgICBza2luOiB0aGlzLnNraW4sXHJcbiAgICAgICAgLy8gc2tpbl91cmw6ICdhc3NldHMvc2tpbnMvUGxhblRvQnVpbGRfRGFyaycsXHJcbiAgICAgICAgcGxhY2Vob2xkZXI6IHRoaXMucGxhY2Vob2xkZXIsXHJcbiAgICAgICAgc2V0dXA6IChlZGl0b3I6IGFueSkgPT4ge1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdpbml0JywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uaW5pdC5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGVkaXRvci5vbignYmx1cicsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmJsdXIuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2tleXVwJywgKG9iaikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ua2V5dXAuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ0NoYW5nZScsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZW50Q2hhbmdlLmVtaXQodGhpcy5jb250ZW50KTtcclxuICAgICAgICAgICAgdGhpcy5vbmNoYW5nZS5lbWl0KG9iaik7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUgdGV4dGNvbG9yIGxpbmsgbGlzdHMgJ10sXHJcbiAgICAgICAgbGlua19kZWZhdWx0X3RhcmdldDogJ19ibGFuaycsXHJcbiAgICAgICAgdG9vbGJhcjogdGhpcy50b29sYmFyLFxyXG4gICAgICAgIHRvb2xiYXJfcGVyc2lzdDogZmFsc2UsXHJcbiAgICAgICAgbW9iaWxlOiB7XHJcbiAgICAgICAgICB0aGVtZTogJ21vYmlsZScsXHJcbiAgICAgICAgICBwbHVnaW5zOiBbJ2ltYWdlIHRhYmxlIHRleHRjb2xvciBsaW5rJ10sXHJcbiAgICAgICAgc2tpbjogXCJQbGFuVG9CdWlsZF9EYXJrXCIsXHJcbiAgICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXJtb2JpbGVcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgc3dpdGNoICh0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlKSB7XHJcbiAgICAgICAgICBjYXNlICdkZSc6XHJcbiAgICAgICAgICAgICAgdGhpcy50aW55TWNlU2V0dGluZ3MubGFuZ3VhZ2UgPSAnZGUnO1xyXG4gICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnanAnOlxyXG4gICAgICAgICAgICAgIHRoaXMudGlueU1jZVNldHRpbmdzLmxhbmd1YWdlID0gJ2phJztcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgdGhpcy50aW55TWNlU2V0dGluZ3MubGFuZ3VhZ2UgPSBudWxsO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfSwgMTAwKTtcclxuXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCh0cnVlKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjbWFjcy10ZXh0YXJlYS1vcGVuZWQtd3JhcHBlclwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXg7XCI+XHJcbiAgICA8Y21hY3MtZGl2aWRlciBjbGFzcz1cImNtYWNzLW9wZW4tdGV4dGFyZWEtZGl2aWRlclwiPjwvY21hY3MtZGl2aWRlcj5cclxuXHJcbiAgICA8ZWRpdG9yIFtpbml0XT1cInRpbnlNY2VTZXR0aW5nc1wiIGNsYXNzPVwiY21hY3MtZWRpdG9yXCIgWyhuZ01vZGVsKV09XCJjb250ZW50XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2lubGluZV09XCJ0cnVlXCIgaWQ9XCJ7e2lkfX1cIj5cclxuXHJcbiAgICA8L2VkaXRvcj5cclxuXHJcbjwvZGl2PiJdfQ==
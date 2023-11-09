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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW9wZW4tZWRpdG9yL2NtYWNzLW9wZW4tZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1vcGVuLWVkaXRvci9jbWFjcy1vcGVuLWVkaXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFnQjNDLE1BQU0sT0FBTyx3QkFBd0I7SUFzQm5DLFlBQW9CLElBQW1CLEVBQVUsR0FBc0I7UUFBbkQsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFVLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBckJ2RSxlQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ1QsV0FBTSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3BELGFBQVEsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUN0RCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsWUFBTyxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsV0FBTSxHQUFHLE9BQU8sQ0FBQztRQUNqQixnQkFBVyxHQUFHLGdCQUFnQixDQUFDO1FBQy9CLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFD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QWhCLE1BQU07WUFDRSxRQUFRO2tCQUFoQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBQ0csV0FBVztrQkFBbkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxNQUFNO2tCQUFkLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFFRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLEVBQUU7a0JBQVYsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNJLGFBQWE7a0JBQXRCLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzL2ludGVybmFsL1N1YmplY3QnO1xyXG5pbXBvcnQgeyBOekkxOG5TZXJ2aWNlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9pMThuJztcclxuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG4vLyBpbXBvcnQgJy4uLy4uL2Fzc2V0cy90aW55bWNlL2pzL3RpbnltY2Uvc2tpbnMvdWkvUGxhblRvQnVpbGRfRGFyay9jb250ZW50LmNzcyc7XHJcbi8vIGltcG9ydCAnLi4vLi4vYXNzZXRzL3RpbnltY2UvanMvdGlueW1jZS9za2lucy9jb250ZW50L1BsYW5Ub0J1aWxkX0RhcmsvY29udGVudC5jc3MnO1xyXG4vLyBpbXBvcnQgJy4uLy4uL2Fzc2V0cy90aW55bWNlL2pzL3RpbnltY2Uvc2tpbnMvdWkvUGxhblRvQnVpbGRfRGFyay9jb250ZW50LmNzcyc7XHJcbi8vIGltcG9ydCAnLi4vLi4vYXNzZXRzL3RpbnltY2UvanMvdGlueW1jZS9za2lucy91aS9QbGFuVG9CdWlsZF9EYXJrL3NraW4uY3NzJztcclxuLy8gaW1wb3J0ICcuLi8uLi9hc3NldHMvdGlueW1jZS9qcy90aW55bWNlL3NraW5zL3VpL1BsYW5Ub0J1aWxkX0RhcmsvY29udGVudC5taW4uY3NzJztcclxuXHJcbmRlY2xhcmUgdmFyIHRpbnltY2U6IGFueTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW9wZW4tZWRpdG9yJyxcclxuICBleHBvcnRBczogJ2NtYWNzT3BlbkVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW9wZW4tZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1vcGVuLWVkaXRvci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzT3BlbkVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBzaG93RWRpdG9yID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIG9uaW5pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25rZXl1cDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhlaWdodCA9ICc0NTBweCc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnVHlwZSBoZXJlIC4uLlwiJztcclxuICBASW5wdXQoKSBzdGF0dXNiYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSByZXNpemUgPSBmYWxzZTtcclxuICBASW5wdXQoKSBza2luID0gXCJQbGFuVG9CdWlsZF9EYXJrXCI7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICBASW5wdXQoKSB0b29sYmFybW9iaWxlID0gWydib2xkIGl0YWxpYyB1bmRlcmxpbmUgfCBmb250c2l6ZXNlbGVjdCcsICdmb3JlY29sb3IgYmFja2NvbG9yIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25mdWxsIHwgbnVtbGlzdCBidWxsaXN0J107XHJcbiAgQElucHV0KCkgdG9vbGJhciA9IFsnYm9sZCBpdGFsaWMgdW5kZXJsaW5lIHwgZm9udHNpemVzZWxlY3QgbGluaycsICdmb3JlY29sb3IgYmFja2NvbG9yIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25mdWxsIHwgbnVtbGlzdCBidWxsaXN0J107XHJcbiAgQElucHV0KCkgdGlueU1jZVNldHRpbmdzITogYW55O1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcclxuICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmcgPSAnJztcclxuICBAT3V0cHV0KCkgY29udGVudENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMudGlueU1jZVNldHRpbmdzID09PSB1bmRlZmluZWQpIHtcclxuXHJcblxyXG4gICAgICB0aGlzLnRpbnlNY2VTZXR0aW5ncyA9IHtcclxuICAgICAgICBpZDogdGhpcy5pZCxcclxuICAgICAgICBlZGl0b3Jfc2VsZWN0b3I6ICdjbWFjcy1lZGl0b3InLFxyXG4gICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICBpbWFnZV90aXRsZTogdHJ1ZSxcclxuICAgICAgICByZXNpemU6IHRoaXMucmVzaXplLFxyXG4gICAgICAgIGF1dG9tYXRpY191cGxvYWRzOiB0cnVlLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgc3RhdHVzYmFyOiB0aGlzLnN0YXR1c2JhcixcclxuICAgICAgICBmaWxlX3BpY2tlcl90eXBlczogJ2ltYWdlJyxcclxuICAgICAgICBpbWFnZXNfdXBsb2FkX3VybDogJyMnLFxyXG4gICAgICAgIGNvbnRlbnRfY3NzOmZhbHNlLFxyXG4gICAgICAgIC8vIGNvbnRlbnRfY3NzOidQbGFuVG9CdWlsZF9EYXJrJywgLy9vbmx5IGF2YWlsYWJsZSBpbiA1LjEgb3IgbGF0ZXJcclxuICAgICAgICAvLyBza2luOiAnb3hpZGUtZGFyaycsXHJcbiAgICAgICAgc2tpbjogdGhpcy5za2luLFxyXG4gICAgICAgIC8vIHNraW5fdXJsOiAnYXNzZXRzL3NraW5zL1BsYW5Ub0J1aWxkX0RhcmsnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIHNldHVwOiAoZWRpdG9yOiBhbnkpID0+IHtcclxuICAgICAgICAgIGVkaXRvci5vbignaW5pdCcsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmluaXQuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2JsdXInLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25ibHVyLmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdrZXl1cCcsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmtleXVwLmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdDaGFuZ2UnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudENoYW5nZS5lbWl0KHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgICAgIHRoaXMub25jaGFuZ2UuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbHVnaW5zOiBbJ2ltYWdlIHRhYmxlIHRleHRjb2xvciBsaW5rIGxpc3RzICddLFxyXG4gICAgICAgIGxpbmtfZGVmYXVsdF90YXJnZXQ6ICdfYmxhbmsnLFxyXG4gICAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhcixcclxuICAgICAgICB0b29sYmFyX3BlcnNpc3Q6IGZhbHNlLFxyXG4gICAgICAgIG1vYmlsZToge1xyXG4gICAgICAgICAgdGhlbWU6ICdtb2JpbGUnLFxyXG4gICAgICAgICAgcGx1Z2luczogWydpbWFnZSB0YWJsZSB0ZXh0Y29sb3IgbGluayddLFxyXG4gICAgICAgIHNraW46IFwiUGxhblRvQnVpbGRfRGFya1wiLFxyXG4gICAgICAgICAgdG9vbGJhcjogdGhpcy50b29sYmFybW9iaWxlXHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2UucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5pMThuLmdldExvY2FsZSgpLmxvY2FsZSkge1xyXG4gICAgICAgICAgY2FzZSAnZGUnOlxyXG4gICAgICAgICAgICAgIHRoaXMudGlueU1jZVNldHRpbmdzLmxhbmd1YWdlID0gJ2RlJztcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ2pwJzpcclxuICAgICAgICAgICAgICB0aGlzLnRpbnlNY2VTZXR0aW5ncy5sYW5ndWFnZSA9ICdqYSc7XHJcbiAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgIHRoaXMudGlueU1jZVNldHRpbmdzLmxhbmd1YWdlID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfSk7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0sIDEwMCk7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcclxuICAgIHRoaXMuZGVzdHJveSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJjbWFjcy10ZXh0YXJlYS1vcGVuZWQtd3JhcHBlclwiIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXg7XCI+XHJcbiAgICA8Y21hY3MtZGl2aWRlciBjbGFzcz1cImNtYWNzLW9wZW4tdGV4dGFyZWEtZGl2aWRlclwiPjwvY21hY3MtZGl2aWRlcj5cclxuXHJcbiAgICA8ZWRpdG9yIFtpbml0XT1cInRpbnlNY2VTZXR0aW5nc1wiIGNsYXNzPVwiY21hY3MtZWRpdG9yXCIgWyhuZ01vZGVsKV09XCJjb250ZW50XCIgW2Rpc2FibGVkXT1cImRpc2FibGVkXCIgW2lubGluZV09XCJ0cnVlXCIgaWQ9XCJ7e2lkfX1cIj5cclxuXHJcbiAgICA8L2VkaXRvcj5cclxuXHJcbjwvZGl2PiJdfQ==
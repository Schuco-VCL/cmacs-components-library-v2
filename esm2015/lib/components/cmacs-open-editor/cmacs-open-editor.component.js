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
        // tslint:disable-next-line: max-line-length
        this.toolbarmobile = ['bold italic underline | fontsizeselect', 'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist'];
        this.toolbar = ['bold italic underline | fontsizeselect', 'forecolor backcolor | alignleft aligncenter alignright alignfull | numlist bullist'];
        this.id = '00000000-0000-0000-0000-000000000000';
        this.content = '';
        this.contentChange = new EventEmitter();
        this.destroy$ = new Subject();
    }
    ngOnInit() {
        if (this.tinyMceSettings === undefined) {
            this.tinyMceSettings = {
                mobile: {
                    theme: 'mobile',
                    plugins: ['image table textcolor'],
                    toolbar: this.toolbarmobile
                },
                id: this.id,
                menubar: false,
                inline: true,
                image_title: true,
                resize: this.resize,
                automatic_uploads: true,
                height: this.height,
                statusbar: this.statusbar,
                file_picker_types: 'image',
                images_upload_url: '#',
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
                plugins: ['image table textcolor'],
                toolbar: this.toolbar,
                toolbar_persist: false
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
CmacsOpenEditorComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsOpenEditorComponent, selectors: [["cmacs-open-editor"]], inputs: { disabled: "disabled", height: "height", placeholder: "placeholder", statusbar: "statusbar", resize: "resize", toolbarmobile: "toolbarmobile", toolbar: "toolbar", tinyMceSettings: "tinyMceSettings", id: "id", content: "content" }, outputs: { oninit: "oninit", onchange: "onchange", onblur: "onblur", onkeyup: "onkeyup", contentChange: "contentChange" }, exportAs: ["cmacsOpenEditor"], decls: 3, vars: 5, consts: [[1, "cmacs-textarea-opened-wrapper", 2, "display", "inline-flex"], [1, "cmacs-open-textarea-divider"], [1, "cmacs-editor", 3, "init", "ngModel", "disabled", "inline", "id", "ngModelChange"]], template: function CmacsOpenEditorComponent_Template(rf, ctx) { if (rf & 1) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3Mtb3Blbi1lZGl0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLW9wZW4tZWRpdG9yL2NtYWNzLW9wZW4tZWRpdG9yLmNvbXBvbmVudC50cyIsIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1vcGVuLWVkaXRvci9jbWFjcy1vcGVuLWVkaXRvci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFnQyxNQUFNLGVBQWUsQ0FBQztBQUM3RyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFaEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7Ozs7QUFXM0MsTUFBTSxPQUFPLHdCQUF3QjtJQXFCbkMsWUFBb0IsSUFBbUIsRUFBVSxHQUFzQjtRQUFuRCxTQUFJLEdBQUosSUFBSSxDQUFlO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFwQnZFLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFDVCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDcEQsYUFBUSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQ3RELFdBQU0sR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUNwRCxZQUFPLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7UUFDdEQsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixXQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ2pCLGdCQUFXLEdBQUcsZ0JBQWdCLENBQUM7UUFDL0IsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNs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QUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUMzQixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFVixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOztnR0FoRlUsd0JBQXdCOzZEQUF4Qix3QkFBd0I7UUNkckMsOEJBQXlFO1FBQ3JFLG1DQUFtRTtRQUVuRSxpQ0FBOEg7UUFBeEUsbUpBQXFCO1FBRTNFLGlCQUFTO1FBRWIsaUJBQU07O1FBSmdILGVBQVc7UUFBWCxzQ0FBVztRQUFySCwwQ0FBd0Isd0JBQUEsMEJBQUEsZ0JBQUE7O3VGRFd2Qix3QkFBd0I7Y0FOcEMsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxtQkFBbUI7Z0JBQzdCLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLFdBQVcsRUFBRSxvQ0FBb0M7Z0JBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO2FBQ2pEO2dHQUdXLE1BQU07a0JBQWYsTUFBTTtZQUNHLFFBQVE7a0JBQWpCLE1BQU07WUFDRyxNQUFNO2tCQUFmLE1BQU07WUFDRyxPQUFPO2tCQUFoQixNQUFNO1lBQ0UsUUFBUTtrQkFBaEIsS0FBSztZQUNHLE1BQU07a0JBQWQsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csTUFBTTtrQkFBZCxLQUFLO1lBRUcsYUFBYTtrQkFBckIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxFQUFFO2tCQUFWLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDSSxhQUFhO2tCQUF0QixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcy9pbnRlcm5hbC9TdWJqZWN0JztcclxuaW1wb3J0IHsgTnpJMThuU2VydmljZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvaTE4bic7XHJcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmRlY2xhcmUgdmFyIHRpbnltY2U6IGFueTtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NtYWNzLW9wZW4tZWRpdG9yJyxcclxuICBleHBvcnRBczogJ2NtYWNzT3BlbkVkaXRvcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2NtYWNzLW9wZW4tZWRpdG9yLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jbWFjcy1vcGVuLWVkaXRvci5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIENtYWNzT3BlbkVkaXRvckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSwgT25Jbml0IHtcclxuICBzaG93RWRpdG9yID0gZmFsc2U7XHJcbiAgQE91dHB1dCgpIG9uaW5pdDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25jaGFuZ2U6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIG9uYmx1cjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBAT3V0cHV0KCkgb25rZXl1cDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIGhlaWdodCA9ICc0NTBweCc7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXIgPSAnVHlwZSBoZXJlIC4uLlwiJztcclxuICBASW5wdXQoKSBzdGF0dXNiYXIgPSBmYWxzZTtcclxuICBASW5wdXQoKSByZXNpemUgPSBmYWxzZTtcclxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG1heC1saW5lLWxlbmd0aFxyXG4gIEBJbnB1dCgpIHRvb2xiYXJtb2JpbGUgPSBbJ2JvbGQgaXRhbGljIHVuZGVybGluZSB8IGZvbnRzaXplc2VsZWN0JywgJ2ZvcmVjb2xvciBiYWNrY29sb3IgfCBhbGlnbmxlZnQgYWxpZ25jZW50ZXIgYWxpZ25yaWdodCBhbGlnbmZ1bGwgfCBudW1saXN0IGJ1bGxpc3QnXTtcclxuICBASW5wdXQoKSB0b29sYmFyID0gWydib2xkIGl0YWxpYyB1bmRlcmxpbmUgfCBmb250c2l6ZXNlbGVjdCcsICdmb3JlY29sb3IgYmFja2NvbG9yIHwgYWxpZ25sZWZ0IGFsaWduY2VudGVyIGFsaWducmlnaHQgYWxpZ25mdWxsIHwgbnVtbGlzdCBidWxsaXN0J107XHJcbiAgQElucHV0KCkgdGlueU1jZVNldHRpbmdzITogYW55O1xyXG4gIEBJbnB1dCgpIGlkOiBzdHJpbmcgPSAnMDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDAwMDAwMDAwJztcclxuICBASW5wdXQoKSBjb250ZW50OiBzdHJpbmcgPSAnJztcclxuICBAT3V0cHV0KCkgY29udGVudENoYW5nZTogRXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaTE4bjogTnpJMThuU2VydmljZSwgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcblxyXG4gICAgaWYgKHRoaXMudGlueU1jZVNldHRpbmdzID09PSB1bmRlZmluZWQpIHtcclxuXHJcblxyXG4gICAgICB0aGlzLnRpbnlNY2VTZXR0aW5ncyA9IHtcclxuICAgICAgICBtb2JpbGU6IHtcclxuICAgICAgICAgIHRoZW1lOiAnbW9iaWxlJyxcclxuICAgICAgICAgIHBsdWdpbnM6IFsnaW1hZ2UgdGFibGUgdGV4dGNvbG9yJ10sXHJcbiAgICAgICAgICB0b29sYmFyOiB0aGlzLnRvb2xiYXJtb2JpbGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgIG1lbnViYXI6IGZhbHNlLFxyXG4gICAgICAgIGlubGluZTogdHJ1ZSxcclxuICAgICAgICBpbWFnZV90aXRsZTogdHJ1ZSxcclxuICAgICAgICByZXNpemU6IHRoaXMucmVzaXplLFxyXG4gICAgICAgIGF1dG9tYXRpY191cGxvYWRzOiB0cnVlLFxyXG4gICAgICAgIGhlaWdodDogdGhpcy5oZWlnaHQsXHJcbiAgICAgICAgc3RhdHVzYmFyOiB0aGlzLnN0YXR1c2JhcixcclxuICAgICAgICBmaWxlX3BpY2tlcl90eXBlczogJ2ltYWdlJyxcclxuICAgICAgICBpbWFnZXNfdXBsb2FkX3VybDogJyMnLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiB0aGlzLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgIHNldHVwOiAoZWRpdG9yOiBhbnkpID0+IHtcclxuICAgICAgICAgIGVkaXRvci5vbignaW5pdCcsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmluaXQuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBlZGl0b3Iub24oJ2JsdXInLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25ibHVyLmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdrZXl1cCcsIChvYmopID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbmtleXVwLmVtaXQob2JqKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgZWRpdG9yLm9uKCdDaGFuZ2UnLCAob2JqKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGVudENoYW5nZS5lbWl0KHRoaXMuY29udGVudCk7XHJcbiAgICAgICAgICAgIHRoaXMub25jaGFuZ2UuZW1pdChvYmopO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbHVnaW5zOiBbJ2ltYWdlIHRhYmxlIHRleHRjb2xvciddLFxyXG4gICAgICAgIHRvb2xiYXI6IHRoaXMudG9vbGJhcixcclxuICAgICAgICB0b29sYmFyX3BlcnNpc3Q6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pMThuLmxvY2FsZUNoYW5nZS5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy50aW55TWNlU2V0dGluZ3MubGFuZ3VhZ2UgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlKCkubG9jYWxlID09PSAnZGUnID8gJ2RlJyA6IG51bGw7XHJcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9LCAxMDApO1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiY21hY3MtdGV4dGFyZWEtb3BlbmVkLXdyYXBwZXJcIiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1mbGV4O1wiPlxyXG4gICAgPGNtYWNzLWRpdmlkZXIgY2xhc3M9XCJjbWFjcy1vcGVuLXRleHRhcmVhLWRpdmlkZXJcIj48L2NtYWNzLWRpdmlkZXI+XHJcblxyXG4gICAgPGVkaXRvciBbaW5pdF09XCJ0aW55TWNlU2V0dGluZ3NcIiBjbGFzcz1cImNtYWNzLWVkaXRvclwiIFsobmdNb2RlbCldPVwiY29udGVudFwiIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiIFtpbmxpbmVdPVwidHJ1ZVwiIGlkPVwie3tpZH19XCI+XHJcblxyXG4gICAgPC9lZGl0b3I+XHJcblxyXG48L2Rpdj4iXX0=
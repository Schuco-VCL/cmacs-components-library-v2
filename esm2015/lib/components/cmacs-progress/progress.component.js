import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input, Optional, ViewEncapsulation } from '@angular/core';
import { WithConfig } from 'ng-zorro-antd/core/config';
import { InputNumber, isNotNil } from 'ng-zorro-antd/core/util';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { handleCircleGradient, handleLinearGradient } from './utils';
import * as i0 from "@angular/core";
import * as i1 from "ng-zorro-antd/core/config";
import * as i2 from "@angular/cdk/bidi";
import * as i3 from "@angular/common";
import * as i4 from "ng-zorro-antd/core/transition-patch";
import * as i5 from "ng-zorro-antd/icon";
import * as i6 from "ng-zorro-antd/core/outlet";
function CmacsProgressComponent_ng_template_0_span_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "i", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("nzType", ctx_r5.icon);
} }
function CmacsProgressComponent_ng_template_0_span_0_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const formatter_r9 = ctx.$implicit;
    const ctx_r8 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", formatter_r9(ctx_r8.percent), " ");
} }
const _c0 = function (a0) { return { $implicit: a0 }; };
function CmacsProgressComponent_ng_template_0_span_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsProgressComponent_ng_template_0_span_0_ng_template_2_ng_container_0_Template, 2, 1, "ng-container", 9);
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("nzStringTemplateOutlet", ctx_r7.formatter)("nzStringTemplateOutletContext", i0.ɵɵpureFunction1(2, _c0, ctx_r7.percent));
} }
function CmacsProgressComponent_ng_template_0_span_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 5);
    i0.ɵɵtemplate(1, CmacsProgressComponent_ng_template_0_span_0_ng_container_1_Template, 2, 1, "ng-container", 6);
    i0.ɵɵtemplate(2, CmacsProgressComponent_ng_template_0_span_0_ng_template_2_Template, 1, 4, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const _r6 = i0.ɵɵreference(3);
    const ctx_r4 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", (ctx_r4.status === "exception" || ctx_r4.status === "success") && !ctx_r4.format)("ngIfElse", _r6);
} }
function CmacsProgressComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CmacsProgressComponent_ng_template_0_span_0_Template, 4, 2, "span", 4);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.showInfo);
} }
function CmacsProgressComponent_div_3_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 17);
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("width", ctx_r14.successPercent, "%")("border-radius", ctx_r14.strokeLinecap === "round" ? "100px" : "0")("height", ctx_r14.strokeWidth, "px");
} }
function CmacsProgressComponent_div_3_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵelementStart(1, "div", 14);
    i0.ɵɵelement(2, "div", 15);
    i0.ɵɵtemplate(3, CmacsProgressComponent_div_3_ng_container_1_div_1_div_3_Template, 1, 6, "div", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵstyleProp("width", ctx_r12.percent, "%")("border-radius", ctx_r12.strokeLinecap === "round" ? "100px" : "0")("background", !ctx_r12.isGradient ? ctx_r12.strokeColor : null)("background-image", ctx_r12.isGradient ? ctx_r12.lineGradient : null)("height", ctx_r12.strokeWidth, "px");
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r12.successPercent || ctx_r12.successPercent === 0);
} }
function CmacsProgressComponent_div_3_ng_container_1_ng_template_2_Template(rf, ctx) { }
function CmacsProgressComponent_div_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CmacsProgressComponent_div_3_ng_container_1_div_1_Template, 4, 11, "div", 11);
    i0.ɵɵtemplate(2, CmacsProgressComponent_div_3_ng_container_1_ng_template_2_Template, 0, 0, "ng-template", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r10.isSteps);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsProgressComponent_div_3_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 20);
} if (rf & 2) {
    const step_r17 = ctx.$implicit;
    i0.ɵɵproperty("ngStyle", step_r17);
} }
function CmacsProgressComponent_div_3_div_2_ng_template_2_Template(rf, ctx) { }
function CmacsProgressComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, CmacsProgressComponent_div_3_div_2_div_1_Template, 1, 1, "div", 19);
    i0.ɵɵtemplate(2, CmacsProgressComponent_div_3_div_2_ng_template_2_Template, 0, 0, "ng-template", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext(2);
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r11.steps);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
function CmacsProgressComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CmacsProgressComponent_div_3_ng_container_1_Template, 3, 2, "ng-container", 2);
    i0.ɵɵtemplate(2, CmacsProgressComponent_div_3_div_2_Template, 3, 2, "div", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", !ctx_r2.isSteps);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngIf", ctx_r2.isSteps);
} }
function CmacsProgressComponent_div_4__svg_defs_2__svg_stop_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "stop");
} if (rf & 2) {
    const i_r23 = ctx.$implicit;
    i0.ɵɵattribute("offset", i_r23.offset)("stop-color", i_r23.color);
} }
function CmacsProgressComponent_div_4__svg_defs_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "defs");
    i0.ɵɵelementStart(1, "linearGradient", 24);
    i0.ɵɵtemplate(2, CmacsProgressComponent_div_4__svg_defs_2__svg_stop_2_Template, 1, 2, "stop", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("id", "gradient-" + ctx_r19.gradientId);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r19.circleGradient);
} }
function CmacsProgressComponent_div_4__svg_path_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelement(0, "path", 26);
} if (rf & 2) {
    const p_r24 = ctx.$implicit;
    const ctx_r20 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", p_r24.strokePathStyle);
    i0.ɵɵattribute("d", ctx_r20.pathString)("stroke-linecap", ctx_r20.strokeLinecap)("stroke", p_r24.stroke)("stroke-width", ctx_r20.percent ? ctx_r20.strokeWidth : 0);
} }
function CmacsProgressComponent_div_4_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
} }
function CmacsProgressComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(1, "svg", 21);
    i0.ɵɵtemplate(2, CmacsProgressComponent_div_4__svg_defs_2_Template, 3, 2, "defs", 2);
    i0.ɵɵelement(3, "path", 22);
    i0.ɵɵtemplate(4, CmacsProgressComponent_div_4__svg_path_4_Template, 1, 5, "path", 23);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CmacsProgressComponent_div_4_ng_template_5_Template, 0, 0, "ng-template", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const _r0 = i0.ɵɵreference(1);
    i0.ɵɵstyleProp("width", ctx_r3.width, "px")("height", ctx_r3.width, "px")("font-size", ctx_r3.width * 0.15 + 6, "px");
    i0.ɵɵclassProp("ant-progress-circle-gradient", ctx_r3.isGradient);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r3.isGradient);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", ctx_r3.trailPathStyle);
    i0.ɵɵattribute("stroke-width", ctx_r3.strokeWidth)("d", ctx_r3.pathString);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngForOf", ctx_r3.progressCirclePath)("ngForTrackBy", ctx_r3.trackByFn);
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngTemplateOutlet", _r0);
} }
let gradientIdSeed = 0;
const NZ_CONFIG_MODULE_NAME = 'progress';
const statusIconNameMap = new Map([
    ['success', 'check'],
    ['exception', 'close']
]);
const statusColorMap = new Map([
    ['normal', '#108ee9'],
    ['exception', '#ff5500'],
    ['success', '#87d068']
]);
const defaultFormatter = (p) => `${p}%`;
export class CmacsProgressComponent {
    constructor(cdr, nzConfigService, directionality) {
        this.cdr = cdr;
        this.nzConfigService = nzConfigService;
        this.directionality = directionality;
        this.showInfo = true;
        this.width = 132;
        this.strokeColor = undefined;
        this.size = 'default';
        this.percent = 0;
        this.cmacsStrokeWidth = undefined;
        this.gapDegree = undefined;
        this.type = 'line';
        this.gapPosition = 'top';
        this.strokeLinecap = 'round';
        this.cmacsSteps = 0;
        this.steps = [];
        /** Gradient style when `type` is `line`. */
        this.lineGradient = null;
        /** If user uses gradient color. */
        this.isGradient = false;
        /** If the linear progress is a step progress. */
        this.isSteps = false;
        /**
         * Each progress whose `type` is circle or dashboard should have unique id to
         * define `<linearGradient>`.
         */
        this.gradientId = gradientIdSeed++;
        /** Paths to rendered in the template. */
        this.progressCirclePath = [];
        this.trailPathStyle = null;
        this.dir = 'ltr';
        this.trackByFn = (index) => `${index}`;
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.destroy$ = new Subject();
    }
    get formatter() {
        return this.format || defaultFormatter;
    }
    get status() {
        return this.cmacsStatus || this.inferredStatus;
    }
    get strokeWidth() {
        return this.cmacsStrokeWidth || (this.type === 'line' && this.size !== 'small' ? 8 : 6);
    }
    get isCircleStyle() {
        return this.type === 'circle' || this.type === 'dashboard';
    }
    ngOnChanges(changes) {
        const { cmacsSteps, gapPosition, strokeLinecap, strokeColor, gapDegree, type, cmacsStatus, percent, successPercent, cmacsStrokeWidth } = changes;
        if (cmacsStatus) {
            this.cachedStatus = this.cmacsStatus || this.cachedStatus;
        }
        if (percent || successPercent) {
            const fillAll = parseInt(this.percent.toString(), 10) >= 100;
            if (fillAll) {
                if ((isNotNil(this.successPercent) && this.successPercent >= 100) || this.successPercent === undefined) {
                    this.inferredStatus = 'success';
                }
            }
            else {
                this.inferredStatus = this.cachedStatus;
            }
        }
        if (cmacsStatus || percent || successPercent || strokeColor) {
            this.updateIcon();
        }
        if (strokeColor) {
            this.setStrokeColor();
        }
        if (gapPosition || strokeLinecap || gapDegree || type || percent || strokeColor || strokeColor) {
            this.getCirclePaths();
        }
        if (percent || cmacsSteps || cmacsStrokeWidth) {
            this.isSteps = this.cmacsSteps > 0;
            if (this.isSteps) {
                this.getSteps();
            }
        }
    }
    ngOnInit() {
        var _a;
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateIcon();
            this.setStrokeColor();
            this.getCirclePaths();
        });
        (_a = this.directionality.change) === null || _a === void 0 ? void 0 : _a.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
            this.dir = direction;
            this.cdr.detectChanges();
        });
        this.dir = this.directionality.value;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
    updateIcon() {
        const ret = statusIconNameMap.get(this.status);
        this.icon = ret ? ret + (this.isCircleStyle ? '-o' : '-circle-fill') : '';
    }
    /**
     * Calculate step render configs.
     */
    getSteps() {
        const current = Math.floor(this.cmacsSteps * (this.percent / 100));
        const stepWidth = this.size === 'small' ? 2 : 14;
        const steps = [];
        for (let i = 0; i < this.cmacsSteps; i++) {
            let color;
            if (i <= current - 1) {
                color = this.strokeColor;
            }
            const stepStyle = {
                backgroundColor: `${color}`,
                width: `${stepWidth}px`,
                height: `${this.strokeWidth}px`
            };
            steps.push(stepStyle);
        }
        this.steps = steps;
    }
    /**
     * Calculate paths when the type is circle or dashboard.
     */
    getCirclePaths() {
        if (!this.isCircleStyle) {
            return;
        }
        const values = isNotNil(this.successPercent) ? [this.successPercent, this.percent] : [this.percent];
        // Calculate shared styles.
        const radius = 50 - this.strokeWidth / 2;
        const gapPosition = this.gapPosition || (this.type === 'circle' ? 'top' : 'bottom');
        const len = Math.PI * 2 * radius;
        const gapDegree = this.gapDegree || (this.type === 'circle' ? 0 : 75);
        let beginPositionX = 0;
        let beginPositionY = -radius;
        let endPositionX = 0;
        let endPositionY = radius * -2;
        switch (gapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = `M 50,50 m ${beginPositionX},${beginPositionY}
       a ${radius},${radius} 0 1 1 ${endPositionX},${-endPositionY}
       a ${radius},${radius} 0 1 1 ${-endPositionX},${endPositionY}`;
        this.trailPathStyle = {
            strokeDasharray: `${len - gapDegree}px ${len}px`,
            strokeDashoffset: `-${gapDegree / 2}px`,
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        // Calculate styles for each path.
        this.progressCirclePath = values
            .map((value, index) => {
            const isSuccessPercent = values.length === 2 && index === 0;
            return {
                stroke: this.isGradient && !isSuccessPercent ? `url(#gradient-${this.gradientId})` : null,
                strokePathStyle: {
                    stroke: !this.isGradient ? (isSuccessPercent ? statusColorMap.get('success') : this.strokeColor) : null,
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
                    strokeDasharray: `${((value || 0) / 100) * (len - gapDegree)}px ${len}px`,
                    strokeDashoffset: `-${gapDegree / 2}px`
                }
            };
        })
            .reverse();
    }
    setStrokeColor() {
        const color = this.strokeColor;
        const isGradient = (this.isGradient = !!color && typeof color !== 'string');
        if (isGradient && !this.isCircleStyle) {
            this.lineGradient = handleLinearGradient(color);
        }
        else if (isGradient && this.isCircleStyle) {
            this.circleGradient = handleCircleGradient(this.strokeColor);
        }
        else {
            this.lineGradient = null;
            this.circleGradient = [];
        }
    }
}
CmacsProgressComponent.ɵfac = function CmacsProgressComponent_Factory(t) { return new (t || CmacsProgressComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i2.Directionality, 8)); };
CmacsProgressComponent.ɵcmp = i0.ɵɵdefineComponent({ type: CmacsProgressComponent, selectors: [["cmacs-progress"]], inputs: { showInfo: "showInfo", width: "width", strokeColor: "strokeColor", size: "size", format: "format", successPercent: "successPercent", percent: "percent", cmacsStrokeWidth: "cmacsStrokeWidth", gapDegree: "gapDegree", cmacsStatus: "cmacsStatus", type: "type", gapPosition: "gapPosition", strokeLinecap: "strokeLinecap", cmacsSteps: "cmacsSteps" }, exportAs: ["cmacsProgress"], features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 15, consts: [["progressInfoTemplate", ""], [3, "ngClass"], [4, "ngIf"], ["class", "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient", 4, "ngIf"], ["class", "ant-progress-text", 4, "ngIf"], [1, "ant-progress-text"], [4, "ngIf", "ngIfElse"], ["formatTemplate", ""], ["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-progress-steps-outer", 4, "ngIf"], ["class", "ant-progress-outer", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], ["class", "ant-progress-success-bg", 3, "width", "border-radius", "height", 4, "ngIf"], [1, "ant-progress-success-bg"], [1, "ant-progress-steps-outer"], ["class", "ant-progress-steps-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "ant-progress-steps-item", 3, "ngStyle"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail", 3, "ngStyle"], ["class", "ant-progress-circle-path", "fill-opacity", "0", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], [4, "ngFor", "ngForOf"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "ngStyle"]], template: function CmacsProgressComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, CmacsProgressComponent_ng_template_0_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        i0.ɵɵelementStart(2, "div", 1);
        i0.ɵɵtemplate(3, CmacsProgressComponent_div_3_Template, 3, 2, "div", 2);
        i0.ɵɵtemplate(4, CmacsProgressComponent_div_4_Template, 6, 15, "div", 3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("ant-progress-line", ctx.type == "line")("ant-progress-small", ctx.size == "small")("ant-progress-show-info", ctx.showInfo)("ant-progress-circle", ctx.isCircleStyle)("ant-progress-steps", ctx.isSteps)("ant-progress-rtl", ctx.dir === "rtl");
        i0.ɵɵproperty("ngClass", "ant-progress ant-progress-status-" + ctx.status);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type === "line");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.isCircleStyle);
    } }, directives: [i3.NgClass, i3.NgIf, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i6.NzStringTemplateOutletDirective, i3.NgTemplateOutlet, i3.NgForOf, i3.NgStyle], encapsulation: 2, changeDetection: 0 });
__decorate([
    WithConfig()
], CmacsProgressComponent.prototype, "showInfo", void 0);
__decorate([
    WithConfig()
], CmacsProgressComponent.prototype, "strokeColor", void 0);
__decorate([
    WithConfig()
], CmacsProgressComponent.prototype, "size", void 0);
__decorate([
    InputNumber()
], CmacsProgressComponent.prototype, "successPercent", void 0);
__decorate([
    InputNumber()
], CmacsProgressComponent.prototype, "percent", void 0);
__decorate([
    WithConfig(),
    InputNumber()
], CmacsProgressComponent.prototype, "cmacsStrokeWidth", void 0);
__decorate([
    WithConfig(),
    InputNumber()
], CmacsProgressComponent.prototype, "gapDegree", void 0);
__decorate([
    WithConfig()
], CmacsProgressComponent.prototype, "gapPosition", void 0);
__decorate([
    WithConfig()
], CmacsProgressComponent.prototype, "strokeLinecap", void 0);
__decorate([
    InputNumber()
], CmacsProgressComponent.prototype, "cmacsSteps", void 0);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsProgressComponent, [{
        type: Component,
        args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'cmacs-progress',
                exportAs: 'cmacsProgress',
                preserveWhitespaces: false,
                template: `
    <ng-template #progressInfoTemplate>
      <span class="ant-progress-text" *ngIf="showInfo">
        <ng-container *ngIf="(status === 'exception' || status === 'success') && !format; else formatTemplate">
          <i nz-icon [nzType]="icon"></i>
        </ng-container>
        <ng-template #formatTemplate>
          <ng-container *nzStringTemplateOutlet="formatter; context: { $implicit: percent }; let formatter">
            {{ formatter(percent) }}
          </ng-container>
        </ng-template>
      </span>
    </ng-template>

    <div
      [ngClass]="'ant-progress ant-progress-status-' + status"
      [class.ant-progress-line]="type == 'line'"
      [class.ant-progress-small]="size == 'small'"
      [class.ant-progress-show-info]="showInfo"
      [class.ant-progress-circle]="isCircleStyle"
      [class.ant-progress-steps]="isSteps"
      [class.ant-progress-rtl]="dir === 'rtl'"
    >
      <!-- line progress -->
      <div *ngIf="type === 'line'">
        <!-- normal line style -->
        <ng-container *ngIf="!isSteps">
          <div class="ant-progress-outer" *ngIf="!isSteps">
            <div class="ant-progress-inner">
              <div
                class="ant-progress-bg"
                [style.width.%]="percent"
                [style.border-radius]="strokeLinecap === 'round' ? '100px' : '0'"
                [style.background]="!isGradient ? strokeColor : null"
                [style.background-image]="isGradient ? lineGradient : null"
                [style.height.px]="strokeWidth"
              ></div>
              <div
                *ngIf="successPercent || successPercent === 0"
                class="ant-progress-success-bg"
                [style.width.%]="successPercent"
                [style.border-radius]="strokeLinecap === 'round' ? '100px' : '0'"
                [style.height.px]="strokeWidth"
              ></div>
            </div>
          </div>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
        </ng-container>
        <!-- step style -->
        <div class="ant-progress-steps-outer" *ngIf="isSteps">
          <div *ngFor="let step of steps; let i = index" class="ant-progress-steps-item" [ngStyle]="step"></div>
          <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
        </div>
      </div>

      <!-- circle / dashboard progress -->
      <div
        [style.width.px]="this.width"
        [style.height.px]="this.width"
        [style.fontSize.px]="this.width * 0.15 + 6"
        class="ant-progress-inner"
        [class.ant-progress-circle-gradient]="isGradient"
        *ngIf="isCircleStyle"
      >
        <svg class="ant-progress-circle " viewBox="0 0 100 100">
          <defs *ngIf="isGradient">
            <linearGradient [id]="'gradient-' + gradientId" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop *ngFor="let i of circleGradient" [attr.offset]="i.offset" [attr.stop-color]="i.color"></stop>
            </linearGradient>
          </defs>
          <path
            class="ant-progress-circle-trail"
            stroke="#f3f3f3"
            fill-opacity="0"
            [attr.stroke-width]="strokeWidth"
            [attr.d]="pathString"
            [ngStyle]="trailPathStyle"
          ></path>
          <path
            *ngFor="let p of progressCirclePath; trackBy: trackByFn"
            class="ant-progress-circle-path"
            fill-opacity="0"
            [attr.d]="pathString"
            [attr.stroke-linecap]="strokeLinecap"
            [attr.stroke]="p.stroke"
            [attr.stroke-width]="percent ? strokeWidth : 0"
            [ngStyle]="p.strokePathStyle"
          ></path>
        </svg>
        <ng-template [ngTemplateOutlet]="progressInfoTemplate"></ng-template>
      </div>
    </div>
  `
            }]
    }], function () { return [{ type: i0.ChangeDetectorRef }, { type: i1.NzConfigService }, { type: i2.Directionality, decorators: [{
                type: Optional
            }] }]; }, { showInfo: [{
            type: Input
        }], width: [{
            type: Input
        }], strokeColor: [{
            type: Input
        }], size: [{
            type: Input
        }], format: [{
            type: Input
        }], successPercent: [{
            type: Input
        }], percent: [{
            type: Input
        }], cmacsStrokeWidth: [{
            type: Input
        }], gapDegree: [{
            type: Input
        }], cmacsStatus: [{
            type: Input
        }], type: [{
            type: Input
        }], gapPosition: [{
            type: Input
        }], strokeLinecap: [{
            type: Input
        }], cmacsSteps: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXByb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsS0FBSyxFQUlMLFFBQVEsRUFFUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQyxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVyRixPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBYzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7O0lBeUI3RCw2QkFBdUc7SUFDckcsdUJBQStCO0lBQ2pDLDBCQUFlOzs7SUFERixlQUFlO0lBQWYsb0NBQWU7OztJQUcxQiw2QkFBa0c7SUFDaEcsWUFDRjtJQUFBLDBCQUFlOzs7O0lBRGIsZUFDRjtJQURFLDZEQUNGOzs7O0lBRkEsNEhBRWU7OztJQUZBLHlEQUFtQyw2RUFBQTs7O0lBTHRELCtCQUFpRDtJQUMvQyw4R0FFZTtJQUNmLDZJQUljO0lBQ2hCLGlCQUFPOzs7O0lBUlUsZUFBbUU7SUFBbkUsdUdBQW1FLGlCQUFBOzs7SUFEcEYsdUZBU087OztJQVQwQixzQ0FBYzs7O0lBbUN2QywwQkFNTzs7O0lBSEwsb0RBQWdDLG9FQUFBLHFDQUFBOzs7SUFidEMsK0JBQWlEO0lBQy9DLCtCQUFnQztJQUM5QiwwQkFPTztJQUNQLG1HQU1PO0lBQ1Qs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ImltcG9ydCB7IERpcmVjdGlvbiwgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XG5pbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE9wdGlvbmFsLFxuICBTaW1wbGVDaGFuZ2VzLFxuICBWaWV3RW5jYXBzdWxhdGlvblxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE56Q29uZmlnS2V5LCBOekNvbmZpZ1NlcnZpY2UsIFdpdGhDb25maWcgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvY29uZmlnJztcbmltcG9ydCB7IE5nU3R5bGVJbnRlcmZhY2UsIE51bWJlcklucHV0IH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3R5cGVzJztcbmltcG9ydCB7IElucHV0TnVtYmVyLCBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRha2VVbnRpbCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtcbiAgTnpQcm9ncmVzc0NpcmNsZVBhdGgsXG4gIE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50LFxuICBOelByb2dyZXNzRm9ybWF0dGVyLFxuICBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlLFxuICBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyxcbiAgTnpQcm9ncmVzc1N0YXR1c1R5cGUsXG4gIE56UHJvZ3Jlc3NTdGVwSXRlbSxcbiAgTnpQcm9ncmVzc1N0cm9rZUNvbG9yVHlwZSxcbiAgTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlLFxuICBOelByb2dyZXNzVHlwZVR5cGVcbn0gZnJvbSAnLi90eXBpbmdzJztcbmltcG9ydCB7IGhhbmRsZUNpcmNsZUdyYWRpZW50LCBoYW5kbGVMaW5lYXJHcmFkaWVudCB9IGZyb20gJy4vdXRpbHMnO1xuXG5sZXQgZ3JhZGllbnRJZFNlZWQgPSAwO1xuXG5jb25zdCBOWl9DT05GSUdfTU9EVUxFX05BTUU6IE56Q29uZmlnS2V5ID0gJ3Byb2dyZXNzJztcbmNvbnN0IHN0YXR1c0ljb25OYW1lTWFwID0gbmV3IE1hcChbXG4gIFsnc3VjY2VzcycsICdjaGVjayddLFxuICBbJ2V4Y2VwdGlvbicsICdjbG9zZSddXG5dKTtcbmNvbnN0IHN0YXR1c0NvbG9yTWFwID0gbmV3IE1hcChbXG4gIFsnbm9ybWFsJywgJyMxMDhlZTknXSxcbiAgWydleGNlcHRpb24nLCAnI2ZmNTUwMCddLFxuICBbJ3N1Y2Nlc3MnLCAnIzg3ZDA2OCddXG5dKTtcbmNvbnN0IGRlZmF1bHRGb3JtYXR0ZXI6IE56UHJvZ3Jlc3NGb3JtYXR0ZXIgPSAocDogbnVtYmVyKTogc3RyaW5nID0+IGAke3B9JWA7XG5cbkBDb21wb25lbnQoe1xuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc2VsZWN0b3I6ICdjbWFjcy1wcm9ncmVzcycsXG4gIGV4cG9ydEFzOiAnY21hY3NQcm9ncmVzcycsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxuZy10ZW1wbGF0ZSAjcHJvZ3Jlc3NJbmZvVGVtcGxhdGU+XG4gICAgICA8c3BhbiBjbGFzcz1cImFudC1wcm9ncmVzcy10ZXh0XCIgKm5nSWY9XCJzaG93SW5mb1wiPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiKHN0YXR1cyA9PT0gJ2V4Y2VwdGlvbicgfHwgc3RhdHVzID09PSAnc3VjY2VzcycpICYmICFmb3JtYXQ7IGVsc2UgZm9ybWF0VGVtcGxhdGVcIj5cbiAgICAgICAgICA8aSBuei1pY29uIFtuelR5cGVdPVwiaWNvblwiPjwvaT5cbiAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjZm9ybWF0VGVtcGxhdGU+XG4gICAgICAgICAgPG5nLWNvbnRhaW5lciAqbnpTdHJpbmdUZW1wbGF0ZU91dGxldD1cImZvcm1hdHRlcjsgY29udGV4dDogeyAkaW1wbGljaXQ6IHBlcmNlbnQgfTsgbGV0IGZvcm1hdHRlclwiPlxuICAgICAgICAgICAge3sgZm9ybWF0dGVyKHBlcmNlbnQpIH19XG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XG4gICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICA8L3NwYW4+XG4gICAgPC9uZy10ZW1wbGF0ZT5cblxuICAgIDxkaXZcbiAgICAgIFtuZ0NsYXNzXT1cIidhbnQtcHJvZ3Jlc3MgYW50LXByb2dyZXNzLXN0YXR1cy0nICsgc3RhdHVzXCJcbiAgICAgIFtjbGFzcy5hbnQtcHJvZ3Jlc3MtbGluZV09XCJ0eXBlID09ICdsaW5lJ1wiXG4gICAgICBbY2xhc3MuYW50LXByb2dyZXNzLXNtYWxsXT1cInNpemUgPT0gJ3NtYWxsJ1wiXG4gICAgICBbY2xhc3MuYW50LXByb2dyZXNzLXNob3ctaW5mb109XCJzaG93SW5mb1wiXG4gICAgICBbY2xhc3MuYW50LXByb2dyZXNzLWNpcmNsZV09XCJpc0NpcmNsZVN0eWxlXCJcbiAgICAgIFtjbGFzcy5hbnQtcHJvZ3Jlc3Mtc3RlcHNdPVwiaXNTdGVwc1wiXG4gICAgICBbY2xhc3MuYW50LXByb2dyZXNzLXJ0bF09XCJkaXIgPT09ICdydGwnXCJcbiAgICA+XG4gICAgICA8IS0tIGxpbmUgcHJvZ3Jlc3MgLS0+XG4gICAgICA8ZGl2ICpuZ0lmPVwidHlwZSA9PT0gJ2xpbmUnXCI+XG4gICAgICAgIDwhLS0gbm9ybWFsIGxpbmUgc3R5bGUgLS0+XG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNTdGVwc1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcHJvZ3Jlc3Mtb3V0ZXJcIiAqbmdJZj1cIiFpc1N0ZXBzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXByb2dyZXNzLWlubmVyXCI+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFudC1wcm9ncmVzcy1iZ1wiXG4gICAgICAgICAgICAgICAgW3N0eWxlLndpZHRoLiVdPVwicGVyY2VudFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmJvcmRlci1yYWRpdXNdPVwic3Ryb2tlTGluZWNhcCA9PT0gJ3JvdW5kJyA/ICcxMDBweCcgOiAnMCdcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5iYWNrZ3JvdW5kXT1cIiFpc0dyYWRpZW50ID8gc3Ryb2tlQ29sb3IgOiBudWxsXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZC1pbWFnZV09XCJpc0dyYWRpZW50ID8gbGluZUdyYWRpZW50IDogbnVsbFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJzdHJva2VXaWR0aFwiXG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICpuZ0lmPVwic3VjY2Vzc1BlcmNlbnQgfHwgc3VjY2Vzc1BlcmNlbnQgPT09IDBcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYW50LXByb2dyZXNzLXN1Y2Nlc3MtYmdcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aC4lXT1cInN1Y2Nlc3NQZXJjZW50XCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuYm9yZGVyLXJhZGl1c109XCJzdHJva2VMaW5lY2FwID09PSAncm91bmQnID8gJzEwMHB4JyA6ICcwJ1wiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJzdHJva2VXaWR0aFwiXG4gICAgICAgICAgICAgID48L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwcm9ncmVzc0luZm9UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8IS0tIHN0ZXAgc3R5bGUgLS0+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhbnQtcHJvZ3Jlc3Mtc3RlcHMtb3V0ZXJcIiAqbmdJZj1cImlzU3RlcHNcIj5cbiAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBzdGVwIG9mIHN0ZXBzOyBsZXQgaSA9IGluZGV4XCIgY2xhc3M9XCJhbnQtcHJvZ3Jlc3Mtc3RlcHMtaXRlbVwiIFtuZ1N0eWxlXT1cInN0ZXBcIj48L2Rpdj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicHJvZ3Jlc3NJbmZvVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIGNpcmNsZSAvIGRhc2hib2FyZCBwcm9ncmVzcyAtLT5cbiAgICAgIDxkaXZcbiAgICAgICAgW3N0eWxlLndpZHRoLnB4XT1cInRoaXMud2lkdGhcIlxuICAgICAgICBbc3R5bGUuaGVpZ2h0LnB4XT1cInRoaXMud2lkdGhcIlxuICAgICAgICBbc3R5bGUuZm9udFNpemUucHhdPVwidGhpcy53aWR0aCAqIDAuMTUgKyA2XCJcbiAgICAgICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtaW5uZXJcIlxuICAgICAgICBbY2xhc3MuYW50LXByb2dyZXNzLWNpcmNsZS1ncmFkaWVudF09XCJpc0dyYWRpZW50XCJcbiAgICAgICAgKm5nSWY9XCJpc0NpcmNsZVN0eWxlXCJcbiAgICAgID5cbiAgICAgICAgPHN2ZyBjbGFzcz1cImFudC1wcm9ncmVzcy1jaXJjbGUgXCIgdmlld0JveD1cIjAgMCAxMDAgMTAwXCI+XG4gICAgICAgICAgPGRlZnMgKm5nSWY9XCJpc0dyYWRpZW50XCI+XG4gICAgICAgICAgICA8bGluZWFyR3JhZGllbnQgW2lkXT1cIidncmFkaWVudC0nICsgZ3JhZGllbnRJZFwiIHgxPVwiMTAwJVwiIHkxPVwiMCVcIiB4Mj1cIjAlXCIgeTI9XCIwJVwiPlxuICAgICAgICAgICAgICA8c3RvcCAqbmdGb3I9XCJsZXQgaSBvZiBjaXJjbGVHcmFkaWVudFwiIFthdHRyLm9mZnNldF09XCJpLm9mZnNldFwiIFthdHRyLnN0b3AtY29sb3JdPVwiaS5jb2xvclwiPjwvc3RvcD5cbiAgICAgICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XG4gICAgICAgICAgPC9kZWZzPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBjbGFzcz1cImFudC1wcm9ncmVzcy1jaXJjbGUtdHJhaWxcIlxuICAgICAgICAgICAgc3Ryb2tlPVwiI2YzZjNmM1wiXG4gICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwXCJcbiAgICAgICAgICAgIFthdHRyLnN0cm9rZS13aWR0aF09XCJzdHJva2VXaWR0aFwiXG4gICAgICAgICAgICBbYXR0ci5kXT1cInBhdGhTdHJpbmdcIlxuICAgICAgICAgICAgW25nU3R5bGVdPVwidHJhaWxQYXRoU3R5bGVcIlxuICAgICAgICAgID48L3BhdGg+XG4gICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICpuZ0Zvcj1cImxldCBwIG9mIHByb2dyZXNzQ2lyY2xlUGF0aDsgdHJhY2tCeTogdHJhY2tCeUZuXCJcbiAgICAgICAgICAgIGNsYXNzPVwiYW50LXByb2dyZXNzLWNpcmNsZS1wYXRoXCJcbiAgICAgICAgICAgIGZpbGwtb3BhY2l0eT1cIjBcIlxuICAgICAgICAgICAgW2F0dHIuZF09XCJwYXRoU3RyaW5nXCJcbiAgICAgICAgICAgIFthdHRyLnN0cm9rZS1saW5lY2FwXT1cInN0cm9rZUxpbmVjYXBcIlxuICAgICAgICAgICAgW2F0dHIuc3Ryb2tlXT1cInAuc3Ryb2tlXCJcbiAgICAgICAgICAgIFthdHRyLnN0cm9rZS13aWR0aF09XCJwZXJjZW50ID8gc3Ryb2tlV2lkdGggOiAwXCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInAuc3Ryb2tlUGF0aFN0eWxlXCJcbiAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICA8L3N2Zz5cbiAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInByb2dyZXNzSW5mb1RlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIENtYWNzUHJvZ3Jlc3NDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBzaG93SW5mbzogYm9vbGVhbiA9IHRydWU7XG4gIEBJbnB1dCgpIHdpZHRoID0gMTMyO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHN0cm9rZUNvbG9yPzogTnpQcm9ncmVzc1N0cm9rZUNvbG9yVHlwZSA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBzaXplOiAnZGVmYXVsdCcgfCAnc21hbGwnID0gJ2RlZmF1bHQnO1xuICBASW5wdXQoKSBmb3JtYXQ/OiBOelByb2dyZXNzRm9ybWF0dGVyO1xuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBzdWNjZXNzUGVyY2VudD86IG51bWJlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgcGVyY2VudDogbnVtYmVyID0gMDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBASW5wdXROdW1iZXIoKSBjbWFjc1N0cm9rZVdpZHRoPzogbnVtYmVyID0gdW5kZWZpbmVkO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIEBJbnB1dE51bWJlcigpIGdhcERlZ3JlZT86IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgY21hY3NTdGF0dXM/OiBOelByb2dyZXNzU3RhdHVzVHlwZTtcbiAgQElucHV0KCkgdHlwZTogTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIGdhcFBvc2l0aW9uOiBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlID0gJ3RvcCc7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgc3Ryb2tlTGluZWNhcDogTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlID0gJ3JvdW5kJztcblxuICBASW5wdXQoKSBASW5wdXROdW1iZXIoKSBjbWFjc1N0ZXBzOiBudW1iZXIgPSAwO1xuXG4gIHN0ZXBzOiBOelByb2dyZXNzU3RlcEl0ZW1bXSA9IFtdO1xuXG4gIC8qKiBHcmFkaWVudCBzdHlsZSB3aGVuIGB0eXBlYCBpcyBgbGluZWAuICovXG4gIGxpbmVHcmFkaWVudDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XG5cbiAgLyoqIElmIHVzZXIgdXNlcyBncmFkaWVudCBjb2xvci4gKi9cbiAgaXNHcmFkaWVudCA9IGZhbHNlO1xuXG4gIC8qKiBJZiB0aGUgbGluZWFyIHByb2dyZXNzIGlzIGEgc3RlcCBwcm9ncmVzcy4gKi9cbiAgaXNTdGVwcyA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBFYWNoIHByb2dyZXNzIHdob3NlIGB0eXBlYCBpcyBjaXJjbGUgb3IgZGFzaGJvYXJkIHNob3VsZCBoYXZlIHVuaXF1ZSBpZCB0b1xuICAgKiBkZWZpbmUgYDxsaW5lYXJHcmFkaWVudD5gLlxuICAgKi9cbiAgZ3JhZGllbnRJZCA9IGdyYWRpZW50SWRTZWVkKys7XG5cbiAgLyoqIFBhdGhzIHRvIHJlbmRlcmVkIGluIHRoZSB0ZW1wbGF0ZS4gKi9cbiAgcHJvZ3Jlc3NDaXJjbGVQYXRoOiBOelByb2dyZXNzQ2lyY2xlUGF0aFtdID0gW107XG4gIGNpcmNsZUdyYWRpZW50PzogQXJyYXk8eyBvZmZzZXQ6IHN0cmluZzsgY29sb3I6IHN0cmluZyB9PjtcbiAgdHJhaWxQYXRoU3R5bGU6IE5nU3R5bGVJbnRlcmZhY2UgfCBudWxsID0gbnVsbDtcbiAgcGF0aFN0cmluZz86IHN0cmluZztcbiAgaWNvbiE6IHN0cmluZztcblxuICBkaXI6IERpcmVjdGlvbiA9ICdsdHInO1xuXG4gIHRyYWNrQnlGbiA9IChpbmRleDogbnVtYmVyKSA9PiBgJHtpbmRleH1gO1xuXG4gIGdldCBmb3JtYXR0ZXIoKTogTnpQcm9ncmVzc0Zvcm1hdHRlciB7XG4gICAgcmV0dXJuIHRoaXMuZm9ybWF0IHx8IGRlZmF1bHRGb3JtYXR0ZXI7XG4gIH1cblxuICBnZXQgc3RhdHVzKCk6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlIHtcbiAgICByZXR1cm4gdGhpcy5jbWFjc1N0YXR1cyB8fCB0aGlzLmluZmVycmVkU3RhdHVzO1xuICB9XG5cbiAgZ2V0IHN0cm9rZVdpZHRoKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuY21hY3NTdHJva2VXaWR0aCB8fCAodGhpcy50eXBlID09PSAnbGluZScgJiYgdGhpcy5zaXplICE9PSAnc21hbGwnID8gOCA6IDYpO1xuICB9XG5cbiAgZ2V0IGlzQ2lyY2xlU3R5bGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy50eXBlID09PSAnZGFzaGJvYXJkJztcbiAgfVxuXG4gIHByaXZhdGUgY2FjaGVkU3RhdHVzOiBOelByb2dyZXNzU3RhdHVzVHlwZSA9ICdub3JtYWwnO1xuICBwcml2YXRlIGluZmVycmVkU3RhdHVzOiBOelByb2dyZXNzU3RhdHVzVHlwZSA9ICdub3JtYWwnO1xuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHVibGljIG56Q29uZmlnU2VydmljZTogTnpDb25maWdTZXJ2aWNlLFxuICAgIEBPcHRpb25hbCgpIHByaXZhdGUgZGlyZWN0aW9uYWxpdHk6IERpcmVjdGlvbmFsaXR5XG4gICkge31cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgY29uc3Qge1xuICAgICAgY21hY3NTdGVwcyxcbiAgICAgIGdhcFBvc2l0aW9uLFxuICAgICAgc3Ryb2tlTGluZWNhcCxcbiAgICAgIHN0cm9rZUNvbG9yLFxuICAgICAgZ2FwRGVncmVlLFxuICAgICAgdHlwZSxcbiAgICAgIGNtYWNzU3RhdHVzLFxuICAgICAgcGVyY2VudCxcbiAgICAgIHN1Y2Nlc3NQZXJjZW50LFxuICAgICAgY21hY3NTdHJva2VXaWR0aFxuICAgIH0gPSBjaGFuZ2VzO1xuXG4gICAgaWYgKGNtYWNzU3RhdHVzKSB7XG4gICAgICB0aGlzLmNhY2hlZFN0YXR1cyA9IHRoaXMuY21hY3NTdGF0dXMgfHwgdGhpcy5jYWNoZWRTdGF0dXM7XG4gICAgfVxuXG4gICAgaWYgKHBlcmNlbnQgfHwgc3VjY2Vzc1BlcmNlbnQpIHtcbiAgICAgIGNvbnN0IGZpbGxBbGwgPSBwYXJzZUludCh0aGlzLnBlcmNlbnQudG9TdHJpbmcoKSwgMTApID49IDEwMDtcbiAgICAgIGlmIChmaWxsQWxsKSB7XG4gICAgICAgIGlmICgoaXNOb3ROaWwodGhpcy5zdWNjZXNzUGVyY2VudCkgJiYgdGhpcy5zdWNjZXNzUGVyY2VudCEgPj0gMTAwKSB8fCB0aGlzLnN1Y2Nlc3NQZXJjZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmluZmVycmVkU3RhdHVzID0gJ3N1Y2Nlc3MnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluZmVycmVkU3RhdHVzID0gdGhpcy5jYWNoZWRTdGF0dXM7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGNtYWNzU3RhdHVzIHx8IHBlcmNlbnQgfHwgc3VjY2Vzc1BlcmNlbnQgfHwgc3Ryb2tlQ29sb3IpIHtcbiAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xuICAgIH1cblxuICAgIGlmIChzdHJva2VDb2xvcikge1xuICAgICAgdGhpcy5zZXRTdHJva2VDb2xvcigpO1xuICAgIH1cblxuICAgIGlmIChnYXBQb3NpdGlvbiB8fCBzdHJva2VMaW5lY2FwIHx8IGdhcERlZ3JlZSB8fCB0eXBlIHx8IHBlcmNlbnQgfHwgc3Ryb2tlQ29sb3IgfHwgc3Ryb2tlQ29sb3IpIHtcbiAgICAgIHRoaXMuZ2V0Q2lyY2xlUGF0aHMoKTtcbiAgICB9XG5cbiAgICBpZiAocGVyY2VudCB8fCBjbWFjc1N0ZXBzIHx8IGNtYWNzU3Ryb2tlV2lkdGgpIHtcbiAgICAgIHRoaXMuaXNTdGVwcyA9IHRoaXMuY21hY3NTdGVwcyA+IDA7XG4gICAgICBpZiAodGhpcy5pc1N0ZXBzKSB7XG4gICAgICAgIHRoaXMuZ2V0U3RlcHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLm56Q29uZmlnU2VydmljZVxuICAgICAgLmdldENvbmZpZ0NoYW5nZUV2ZW50Rm9yQ29tcG9uZW50KE5aX0NPTkZJR19NT0RVTEVfTkFNRSlcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICAgICAgdGhpcy5zZXRTdHJva2VDb2xvcigpO1xuICAgICAgICB0aGlzLmdldENpcmNsZVBhdGhzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZGlyZWN0aW9uYWxpdHkuY2hhbmdlPy5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSkuc3Vic2NyaWJlKChkaXJlY3Rpb246IERpcmVjdGlvbikgPT4ge1xuICAgICAgdGhpcy5kaXIgPSBkaXJlY3Rpb247XG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmRpciA9IHRoaXMuZGlyZWN0aW9uYWxpdHkudmFsdWU7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLmRlc3Ryb3kkLm5leHQoKTtcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZUljb24oKTogdm9pZCB7XG4gICAgY29uc3QgcmV0ID0gc3RhdHVzSWNvbk5hbWVNYXAuZ2V0KHRoaXMuc3RhdHVzKTtcbiAgICB0aGlzLmljb24gPSByZXQgPyByZXQgKyAodGhpcy5pc0NpcmNsZVN0eWxlID8gJy1vJyA6ICctY2lyY2xlLWZpbGwnKSA6ICcnO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBzdGVwIHJlbmRlciBjb25maWdzLlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRTdGVwcygpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50ID0gTWF0aC5mbG9vcih0aGlzLmNtYWNzU3RlcHMgKiAodGhpcy5wZXJjZW50IC8gMTAwKSk7XG4gICAgY29uc3Qgc3RlcFdpZHRoID0gdGhpcy5zaXplID09PSAnc21hbGwnID8gMiA6IDE0O1xuXG4gICAgY29uc3Qgc3RlcHMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jbWFjc1N0ZXBzOyBpKyspIHtcbiAgICAgIGxldCBjb2xvcjtcbiAgICAgIGlmIChpIDw9IGN1cnJlbnQgLSAxKSB7XG4gICAgICAgIGNvbG9yID0gdGhpcy5zdHJva2VDb2xvcjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHN0ZXBTdHlsZSA9IHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiBgJHtjb2xvcn1gLFxuICAgICAgICB3aWR0aDogYCR7c3RlcFdpZHRofXB4YCxcbiAgICAgICAgaGVpZ2h0OiBgJHt0aGlzLnN0cm9rZVdpZHRofXB4YFxuICAgICAgfTtcbiAgICAgIHN0ZXBzLnB1c2goc3RlcFN0eWxlKTtcbiAgICB9XG5cbiAgICB0aGlzLnN0ZXBzID0gc3RlcHM7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlIHBhdGhzIHdoZW4gdGhlIHR5cGUgaXMgY2lyY2xlIG9yIGRhc2hib2FyZC5cbiAgICovXG4gIHByaXZhdGUgZ2V0Q2lyY2xlUGF0aHMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZXMgPSBpc05vdE5pbCh0aGlzLnN1Y2Nlc3NQZXJjZW50KSA/IFt0aGlzLnN1Y2Nlc3NQZXJjZW50ISwgdGhpcy5wZXJjZW50XSA6IFt0aGlzLnBlcmNlbnRdO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHNoYXJlZCBzdHlsZXMuXG4gICAgY29uc3QgcmFkaXVzID0gNTAgLSB0aGlzLnN0cm9rZVdpZHRoIC8gMjtcbiAgICBjb25zdCBnYXBQb3NpdGlvbiA9IHRoaXMuZ2FwUG9zaXRpb24gfHwgKHRoaXMudHlwZSA9PT0gJ2NpcmNsZScgPyAndG9wJyA6ICdib3R0b20nKTtcbiAgICBjb25zdCBsZW4gPSBNYXRoLlBJICogMiAqIHJhZGl1cztcbiAgICBjb25zdCBnYXBEZWdyZWUgPSB0aGlzLmdhcERlZ3JlZSB8fCAodGhpcy50eXBlID09PSAnY2lyY2xlJyA/IDAgOiA3NSk7XG5cbiAgICBsZXQgYmVnaW5Qb3NpdGlvblggPSAwO1xuICAgIGxldCBiZWdpblBvc2l0aW9uWSA9IC1yYWRpdXM7XG4gICAgbGV0IGVuZFBvc2l0aW9uWCA9IDA7XG4gICAgbGV0IGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIC0yO1xuXG4gICAgc3dpdGNoIChnYXBQb3NpdGlvbikge1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gLXJhZGl1cztcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSAwO1xuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAyO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSByYWRpdXM7XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogLTI7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYm90dG9tJzpcbiAgICAgICAgYmVnaW5Qb3NpdGlvblkgPSByYWRpdXM7XG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICB9XG5cbiAgICB0aGlzLnBhdGhTdHJpbmcgPSBgTSA1MCw1MCBtICR7YmVnaW5Qb3NpdGlvblh9LCR7YmVnaW5Qb3NpdGlvbll9XG4gICAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7ZW5kUG9zaXRpb25YfSwkey1lbmRQb3NpdGlvbll9XG4gICAgICAgYSAke3JhZGl1c30sJHtyYWRpdXN9IDAgMSAxICR7LWVuZFBvc2l0aW9uWH0sJHtlbmRQb3NpdGlvbll9YDtcblxuICAgIHRoaXMudHJhaWxQYXRoU3R5bGUgPSB7XG4gICAgICBzdHJva2VEYXNoYXJyYXk6IGAke2xlbiAtIGdhcERlZ3JlZX1weCAke2xlbn1weGAsXG4gICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGAsXG4gICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MnXG4gICAgfTtcblxuICAgIC8vIENhbGN1bGF0ZSBzdHlsZXMgZm9yIGVhY2ggcGF0aC5cbiAgICB0aGlzLnByb2dyZXNzQ2lyY2xlUGF0aCA9IHZhbHVlc1xuICAgICAgLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzU3VjY2Vzc1BlcmNlbnQgPSB2YWx1ZXMubGVuZ3RoID09PSAyICYmIGluZGV4ID09PSAwO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHN0cm9rZTogdGhpcy5pc0dyYWRpZW50ICYmICFpc1N1Y2Nlc3NQZXJjZW50ID8gYHVybCgjZ3JhZGllbnQtJHt0aGlzLmdyYWRpZW50SWR9KWAgOiBudWxsLFxuICAgICAgICAgIHN0cm9rZVBhdGhTdHlsZToge1xuICAgICAgICAgICAgc3Ryb2tlOiAhdGhpcy5pc0dyYWRpZW50ID8gKGlzU3VjY2Vzc1BlcmNlbnQgPyBzdGF0dXNDb2xvck1hcC5nZXQoJ3N1Y2Nlc3MnKSA6ICh0aGlzLnN0cm9rZUNvbG9yIGFzIHN0cmluZykpIDogbnVsbCxcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICdzdHJva2UtZGFzaG9mZnNldCAuM3MgZWFzZSAwcywgc3Ryb2tlLWRhc2hhcnJheSAuM3MgZWFzZSAwcywgc3Ryb2tlIC4zcywgc3Ryb2tlLXdpZHRoIC4wNnMgZWFzZSAuM3MnLFxuICAgICAgICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHsoKHZhbHVlIHx8IDApIC8gMTAwKSAqIChsZW4gLSBnYXBEZWdyZWUpfXB4ICR7bGVufXB4YCxcbiAgICAgICAgICAgIHN0cm9rZURhc2hvZmZzZXQ6IGAtJHtnYXBEZWdyZWUgLyAyfXB4YFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pXG4gICAgICAucmV2ZXJzZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzZXRTdHJva2VDb2xvcigpOiB2b2lkIHtcbiAgICBjb25zdCBjb2xvciA9IHRoaXMuc3Ryb2tlQ29sb3I7XG4gICAgY29uc3QgaXNHcmFkaWVudCA9ICh0aGlzLmlzR3JhZGllbnQgPSAhIWNvbG9yICYmIHR5cGVvZiBjb2xvciAhPT0gJ3N0cmluZycpO1xuICAgIGlmIChpc0dyYWRpZW50ICYmICF0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcbiAgICAgIHRoaXMubGluZUdyYWRpZW50ID0gaGFuZGxlTGluZWFyR3JhZGllbnQoY29sb3IgYXMgTnpQcm9ncmVzc0NvbG9yR3JhZGllbnQpO1xuICAgIH0gZWxzZSBpZiAoaXNHcmFkaWVudCAmJiB0aGlzLmlzQ2lyY2xlU3R5bGUpIHtcbiAgICAgIHRoaXMuY2lyY2xlR3JhZGllbnQgPSBoYW5kbGVDaXJjbGVHcmFkaWVudCh0aGlzLnN0cm9rZUNvbG9yIGFzIE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5saW5lR3JhZGllbnQgPSBudWxsO1xuICAgICAgdGhpcy5jaXJjbGVHcmFkaWVudCA9IFtdO1xuICAgIH1cbiAgfVxufVxuIl19
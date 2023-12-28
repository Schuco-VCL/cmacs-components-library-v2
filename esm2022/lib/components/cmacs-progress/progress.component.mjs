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
    i0.ɵɵelementStart(0, "div", 13)(1, "div", 14);
    i0.ɵɵelement(2, "div", 15);
    i0.ɵɵtemplate(3, CmacsProgressComponent_div_3_ng_container_1_div_1_div_3_Template, 1, 6, "div", 16);
    i0.ɵɵelementEnd()();
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
    i0.ɵɵelementStart(0, "defs")(1, "linearGradient", 24);
    i0.ɵɵtemplate(2, CmacsProgressComponent_div_4__svg_defs_2__svg_stop_2_Template, 1, 2, "stop", 25);
    i0.ɵɵelementEnd()();
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
        this.nzConfigService
            .getConfigChangeEventForComponent(NZ_CONFIG_MODULE_NAME)
            .pipe(takeUntil(this.destroy$))
            .subscribe(() => {
            this.updateIcon();
            this.setStrokeColor();
            this.getCirclePaths();
        });
        this.directionality.change?.pipe(takeUntil(this.destroy$)).subscribe((direction) => {
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
    static { this.ɵfac = function CmacsProgressComponent_Factory(t) { return new (t || CmacsProgressComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.NzConfigService), i0.ɵɵdirectiveInject(i2.Directionality, 8)); }; }
    static { this.ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CmacsProgressComponent, selectors: [["cmacs-progress"]], inputs: { showInfo: "showInfo", width: "width", strokeColor: "strokeColor", size: "size", format: "format", successPercent: "successPercent", percent: "percent", cmacsStrokeWidth: "cmacsStrokeWidth", gapDegree: "gapDegree", cmacsStatus: "cmacsStatus", type: "type", gapPosition: "gapPosition", strokeLinecap: "strokeLinecap", cmacsSteps: "cmacsSteps" }, exportAs: ["cmacsProgress"], features: [i0.ɵɵNgOnChangesFeature], decls: 5, vars: 15, consts: [["progressInfoTemplate", ""], [3, "ngClass"], [4, "ngIf"], ["class", "ant-progress-inner", 3, "width", "height", "fontSize", "ant-progress-circle-gradient", 4, "ngIf"], ["class", "ant-progress-text", 4, "ngIf"], [1, "ant-progress-text"], [4, "ngIf", "ngIfElse"], ["formatTemplate", ""], ["nz-icon", "", 3, "nzType"], [4, "nzStringTemplateOutlet", "nzStringTemplateOutletContext"], ["class", "ant-progress-steps-outer", 4, "ngIf"], ["class", "ant-progress-outer", 4, "ngIf"], [3, "ngTemplateOutlet"], [1, "ant-progress-outer"], [1, "ant-progress-inner"], [1, "ant-progress-bg"], ["class", "ant-progress-success-bg", 3, "width", "border-radius", "height", 4, "ngIf"], [1, "ant-progress-success-bg"], [1, "ant-progress-steps-outer"], ["class", "ant-progress-steps-item", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "ant-progress-steps-item", 3, "ngStyle"], ["viewBox", "0 0 100 100", 1, "ant-progress-circle"], ["stroke", "#f3f3f3", "fill-opacity", "0", 1, "ant-progress-circle-trail", 3, "ngStyle"], ["class", "ant-progress-circle-path", "fill-opacity", "0", 3, "ngStyle", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["x1", "100%", "y1", "0%", "x2", "0%", "y2", "0%", 3, "id"], [4, "ngFor", "ngForOf"], ["fill-opacity", "0", 1, "ant-progress-circle-path", 3, "ngStyle"]], template: function CmacsProgressComponent_Template(rf, ctx) { if (rf & 1) {
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
        } }, dependencies: [i3.NgClass, i3.NgForOf, i3.NgIf, i3.NgTemplateOutlet, i3.NgStyle, i4.ɵNzTransitionPatchDirective, i5.NzIconDirective, i6.NzStringTemplateOutletDirective], encapsulation: 2, changeDetection: 0 }); }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXByb2dyZXNzL3Byb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUNMLHVCQUF1QixFQUV2QixTQUFTLEVBQ1QsS0FBSyxFQUlMLFFBQVEsRUFFUixpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFnQyxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUVyRixPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0IsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBYzNDLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxNQUFNLFNBQVMsQ0FBQzs7Ozs7Ozs7O0lBeUI3RCw2QkFBdUc7SUFDckcsdUJBQStCO0lBQ2pDLDBCQUFlOzs7SUFERixlQUFlO0lBQWYsb0NBQWU7OztJQUcxQiw2QkFBa0c7SUFDaEcsWUFDRjtJQUFBLDBCQUFlOzs7O0lBRGIsZUFDRjtJQURFLDZEQUNGOzs7O0lBRkEsNEhBRWU7OztJQUZBLHlEQUFtQyw2RUFBQTs7O0lBTHRELCtCQUFpRDtJQUMvQyw4R0FFZTtJQUNmLDZJQUljO0lBQ2hCLGlCQUFPOzs7O0lBUlUsZUFBbUU7SUFBbkUsdUdBQW1FLGlCQUFBOzs7SUFEcEYsdUZBU087OztJQVQwQixzQ0FBYzs7O0lBbUN2QywwQkFNTzs7O0lBSEwsb0RBQWdDLG9FQUFBLHFDQUFBOzs7SUFidEMsK0JBQWlELGNBQUE7SUFFN0MsMEJBT087SUFDUCxtR0FNTztJQUNULGlCQUFNLEVB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dGlvbmFsaXR5IH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2JpZGknO1xuaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPcHRpb25hbCxcbiAgU2ltcGxlQ2hhbmdlcyxcbiAgVmlld0VuY2Fwc3VsYXRpb25cbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOekNvbmZpZ0tleSwgTnpDb25maWdTZXJ2aWNlLCBXaXRoQ29uZmlnIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL2NvbmZpZyc7XG5pbXBvcnQgeyBOZ1N0eWxlSW50ZXJmYWNlLCBOdW1iZXJJbnB1dCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS90eXBlcyc7XG5pbXBvcnQgeyBJbnB1dE51bWJlciwgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7XG4gIE56UHJvZ3Jlc3NDaXJjbGVQYXRoLFxuICBOelByb2dyZXNzQ29sb3JHcmFkaWVudCxcbiAgTnpQcm9ncmVzc0Zvcm1hdHRlcixcbiAgTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSxcbiAgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MsXG4gIE56UHJvZ3Jlc3NTdGF0dXNUeXBlLFxuICBOelByb2dyZXNzU3RlcEl0ZW0sXG4gIE56UHJvZ3Jlc3NTdHJva2VDb2xvclR5cGUsXG4gIE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSxcbiAgTnpQcm9ncmVzc1R5cGVUeXBlXG59IGZyb20gJy4vdHlwaW5ncyc7XG5pbXBvcnQgeyBoYW5kbGVDaXJjbGVHcmFkaWVudCwgaGFuZGxlTGluZWFyR3JhZGllbnQgfSBmcm9tICcuL3V0aWxzJztcblxubGV0IGdyYWRpZW50SWRTZWVkID0gMDtcblxuY29uc3QgTlpfQ09ORklHX01PRFVMRV9OQU1FOiBOekNvbmZpZ0tleSA9ICdwcm9ncmVzcyc7XG5jb25zdCBzdGF0dXNJY29uTmFtZU1hcCA9IG5ldyBNYXAoW1xuICBbJ3N1Y2Nlc3MnLCAnY2hlY2snXSxcbiAgWydleGNlcHRpb24nLCAnY2xvc2UnXVxuXSk7XG5jb25zdCBzdGF0dXNDb2xvck1hcCA9IG5ldyBNYXAoW1xuICBbJ25vcm1hbCcsICcjMTA4ZWU5J10sXG4gIFsnZXhjZXB0aW9uJywgJyNmZjU1MDAnXSxcbiAgWydzdWNjZXNzJywgJyM4N2QwNjgnXVxuXSk7XG5jb25zdCBkZWZhdWx0Rm9ybWF0dGVyOiBOelByb2dyZXNzRm9ybWF0dGVyID0gKHA6IG51bWJlcik6IHN0cmluZyA9PiBgJHtwfSVgO1xuXG5AQ29tcG9uZW50KHtcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHNlbGVjdG9yOiAnY21hY3MtcHJvZ3Jlc3MnLFxuICBleHBvcnRBczogJ2NtYWNzUHJvZ3Jlc3MnLFxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8bmctdGVtcGxhdGUgI3Byb2dyZXNzSW5mb1RlbXBsYXRlPlxuICAgICAgPHNwYW4gY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtdGV4dFwiICpuZ0lmPVwic2hvd0luZm9cIj5cbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIihzdGF0dXMgPT09ICdleGNlcHRpb24nIHx8IHN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSAmJiAhZm9ybWF0OyBlbHNlIGZvcm1hdFRlbXBsYXRlXCI+XG4gICAgICAgICAgPGkgbnotaWNvbiBbbnpUeXBlXT1cImljb25cIj48L2k+XG4gICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8bmctdGVtcGxhdGUgI2Zvcm1hdFRlbXBsYXRlPlxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm56U3RyaW5nVGVtcGxhdGVPdXRsZXQ9XCJmb3JtYXR0ZXI7IGNvbnRleHQ6IHsgJGltcGxpY2l0OiBwZXJjZW50IH07IGxldCBmb3JtYXR0ZXJcIj5cbiAgICAgICAgICAgIHt7IGZvcm1hdHRlcihwZXJjZW50KSB9fVxuICAgICAgICAgIDwvbmctY29udGFpbmVyPlxuICAgICAgICA8L25nLXRlbXBsYXRlPlxuICAgICAgPC9zcGFuPlxuICAgIDwvbmctdGVtcGxhdGU+XG5cbiAgICA8ZGl2XG4gICAgICBbbmdDbGFzc109XCInYW50LXByb2dyZXNzIGFudC1wcm9ncmVzcy1zdGF0dXMtJyArIHN0YXR1c1wiXG4gICAgICBbY2xhc3MuYW50LXByb2dyZXNzLWxpbmVdPVwidHlwZSA9PSAnbGluZSdcIlxuICAgICAgW2NsYXNzLmFudC1wcm9ncmVzcy1zbWFsbF09XCJzaXplID09ICdzbWFsbCdcIlxuICAgICAgW2NsYXNzLmFudC1wcm9ncmVzcy1zaG93LWluZm9dPVwic2hvd0luZm9cIlxuICAgICAgW2NsYXNzLmFudC1wcm9ncmVzcy1jaXJjbGVdPVwiaXNDaXJjbGVTdHlsZVwiXG4gICAgICBbY2xhc3MuYW50LXByb2dyZXNzLXN0ZXBzXT1cImlzU3RlcHNcIlxuICAgICAgW2NsYXNzLmFudC1wcm9ncmVzcy1ydGxdPVwiZGlyID09PSAncnRsJ1wiXG4gICAgPlxuICAgICAgPCEtLSBsaW5lIHByb2dyZXNzIC0tPlxuICAgICAgPGRpdiAqbmdJZj1cInR5cGUgPT09ICdsaW5lJ1wiPlxuICAgICAgICA8IS0tIG5vcm1hbCBsaW5lIHN0eWxlIC0tPlxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzU3RlcHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXByb2dyZXNzLW91dGVyXCIgKm5nSWY9XCIhaXNTdGVwc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFudC1wcm9ncmVzcy1pbm5lclwiPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtYmdcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS53aWR0aC4lXT1cInBlcmNlbnRcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5ib3JkZXItcmFkaXVzXT1cInN0cm9rZUxpbmVjYXAgPT09ICdyb3VuZCcgPyAnMTAwcHgnIDogJzAnXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUuYmFja2dyb3VuZF09XCIhaXNHcmFkaWVudCA/IHN0cm9rZUNvbG9yIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmJhY2tncm91bmQtaW1hZ2VdPVwiaXNHcmFkaWVudCA/IGxpbmVHcmFkaWVudCA6IG51bGxcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAqbmdJZj1cInN1Y2Nlc3NQZXJjZW50IHx8IHN1Y2Nlc3NQZXJjZW50ID09PSAwXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFudC1wcm9ncmVzcy1zdWNjZXNzLWJnXCJcbiAgICAgICAgICAgICAgICBbc3R5bGUud2lkdGguJV09XCJzdWNjZXNzUGVyY2VudFwiXG4gICAgICAgICAgICAgICAgW3N0eWxlLmJvcmRlci1yYWRpdXNdPVwic3Ryb2tlTGluZWNhcCA9PT0gJ3JvdW5kJyA/ICcxMDBweCcgOiAnMCdcIlxuICAgICAgICAgICAgICAgIFtzdHlsZS5oZWlnaHQucHhdPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgICAgICA+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bmctdGVtcGxhdGUgW25nVGVtcGxhdGVPdXRsZXRdPVwicHJvZ3Jlc3NJbmZvVGVtcGxhdGVcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cbiAgICAgICAgPCEtLSBzdGVwIHN0eWxlIC0tPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYW50LXByb2dyZXNzLXN0ZXBzLW91dGVyXCIgKm5nSWY9XCJpc1N0ZXBzXCI+XG4gICAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgc3RlcCBvZiBzdGVwczsgbGV0IGkgPSBpbmRleFwiIGNsYXNzPVwiYW50LXByb2dyZXNzLXN0ZXBzLWl0ZW1cIiBbbmdTdHlsZV09XCJzdGVwXCI+PC9kaXY+XG4gICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInByb2dyZXNzSW5mb1RlbXBsYXRlXCI+PC9uZy10ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLSBjaXJjbGUgLyBkYXNoYm9hcmQgcHJvZ3Jlc3MgLS0+XG4gICAgICA8ZGl2XG4gICAgICAgIFtzdHlsZS53aWR0aC5weF09XCJ0aGlzLndpZHRoXCJcbiAgICAgICAgW3N0eWxlLmhlaWdodC5weF09XCJ0aGlzLndpZHRoXCJcbiAgICAgICAgW3N0eWxlLmZvbnRTaXplLnB4XT1cInRoaXMud2lkdGggKiAwLjE1ICsgNlwiXG4gICAgICAgIGNsYXNzPVwiYW50LXByb2dyZXNzLWlubmVyXCJcbiAgICAgICAgW2NsYXNzLmFudC1wcm9ncmVzcy1jaXJjbGUtZ3JhZGllbnRdPVwiaXNHcmFkaWVudFwiXG4gICAgICAgICpuZ0lmPVwiaXNDaXJjbGVTdHlsZVwiXG4gICAgICA+XG4gICAgICAgIDxzdmcgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtY2lyY2xlIFwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiPlxuICAgICAgICAgIDxkZWZzICpuZ0lmPVwiaXNHcmFkaWVudFwiPlxuICAgICAgICAgICAgPGxpbmVhckdyYWRpZW50IFtpZF09XCInZ3JhZGllbnQtJyArIGdyYWRpZW50SWRcIiB4MT1cIjEwMCVcIiB5MT1cIjAlXCIgeDI9XCIwJVwiIHkyPVwiMCVcIj5cbiAgICAgICAgICAgICAgPHN0b3AgKm5nRm9yPVwibGV0IGkgb2YgY2lyY2xlR3JhZGllbnRcIiBbYXR0ci5vZmZzZXRdPVwiaS5vZmZzZXRcIiBbYXR0ci5zdG9wLWNvbG9yXT1cImkuY29sb3JcIj48L3N0b3A+XG4gICAgICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgY2xhc3M9XCJhbnQtcHJvZ3Jlc3MtY2lyY2xlLXRyYWlsXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIiNmM2YzZjNcIlxuICAgICAgICAgICAgZmlsbC1vcGFjaXR5PVwiMFwiXG4gICAgICAgICAgICBbYXR0ci5zdHJva2Utd2lkdGhdPVwic3Ryb2tlV2lkdGhcIlxuICAgICAgICAgICAgW2F0dHIuZF09XCJwYXRoU3RyaW5nXCJcbiAgICAgICAgICAgIFtuZ1N0eWxlXT1cInRyYWlsUGF0aFN0eWxlXCJcbiAgICAgICAgICA+PC9wYXRoPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAqbmdGb3I9XCJsZXQgcCBvZiBwcm9ncmVzc0NpcmNsZVBhdGg7IHRyYWNrQnk6IHRyYWNrQnlGblwiXG4gICAgICAgICAgICBjbGFzcz1cImFudC1wcm9ncmVzcy1jaXJjbGUtcGF0aFwiXG4gICAgICAgICAgICBmaWxsLW9wYWNpdHk9XCIwXCJcbiAgICAgICAgICAgIFthdHRyLmRdPVwicGF0aFN0cmluZ1wiXG4gICAgICAgICAgICBbYXR0ci5zdHJva2UtbGluZWNhcF09XCJzdHJva2VMaW5lY2FwXCJcbiAgICAgICAgICAgIFthdHRyLnN0cm9rZV09XCJwLnN0cm9rZVwiXG4gICAgICAgICAgICBbYXR0ci5zdHJva2Utd2lkdGhdPVwicGVyY2VudCA/IHN0cm9rZVdpZHRoIDogMFwiXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJwLnN0cm9rZVBhdGhTdHlsZVwiXG4gICAgICAgICAgPjwvcGF0aD5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdUZW1wbGF0ZU91dGxldF09XCJwcm9ncmVzc0luZm9UZW1wbGF0ZVwiPjwvbmctdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBDbWFjc1Byb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkluaXQsIE9uRGVzdHJveSB7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgc2hvd0luZm86IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSB3aWR0aCA9IDEzMjtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBzdHJva2VDb2xvcj86IE56UHJvZ3Jlc3NTdHJva2VDb2xvclR5cGUgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgc2l6ZTogJ2RlZmF1bHQnIHwgJ3NtYWxsJyA9ICdkZWZhdWx0JztcbiAgQElucHV0KCkgZm9ybWF0PzogTnpQcm9ncmVzc0Zvcm1hdHRlcjtcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgc3VjY2Vzc1BlcmNlbnQ/OiBudW1iZXI7XG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIHBlcmNlbnQ6IG51bWJlciA9IDA7XG4gIEBJbnB1dCgpIEBXaXRoQ29uZmlnKCkgQElucHV0TnVtYmVyKCkgY21hY3NTdHJva2VXaWR0aD86IG51bWJlciA9IHVuZGVmaW5lZDtcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBASW5wdXROdW1iZXIoKSBnYXBEZWdyZWU/OiBudW1iZXIgPSB1bmRlZmluZWQ7XG4gIEBJbnB1dCgpIGNtYWNzU3RhdHVzPzogTnpQcm9ncmVzc1N0YXR1c1R5cGU7XG4gIEBJbnB1dCgpIHR5cGU6IE56UHJvZ3Jlc3NUeXBlVHlwZSA9ICdsaW5lJztcbiAgQElucHV0KCkgQFdpdGhDb25maWcoKSBnYXBQb3NpdGlvbjogTnpQcm9ncmVzc0dhcFBvc2l0aW9uVHlwZSA9ICd0b3AnO1xuICBASW5wdXQoKSBAV2l0aENvbmZpZygpIHN0cm9rZUxpbmVjYXA6IE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSA9ICdyb3VuZCc7XG5cbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgY21hY3NTdGVwczogbnVtYmVyID0gMDtcblxuICBzdGVwczogTnpQcm9ncmVzc1N0ZXBJdGVtW10gPSBbXTtcblxuICAvKiogR3JhZGllbnQgc3R5bGUgd2hlbiBgdHlwZWAgaXMgYGxpbmVgLiAqL1xuICBsaW5lR3JhZGllbnQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xuXG4gIC8qKiBJZiB1c2VyIHVzZXMgZ3JhZGllbnQgY29sb3IuICovXG4gIGlzR3JhZGllbnQgPSBmYWxzZTtcblxuICAvKiogSWYgdGhlIGxpbmVhciBwcm9ncmVzcyBpcyBhIHN0ZXAgcHJvZ3Jlc3MuICovXG4gIGlzU3RlcHMgPSBmYWxzZTtcblxuICAvKipcbiAgICogRWFjaCBwcm9ncmVzcyB3aG9zZSBgdHlwZWAgaXMgY2lyY2xlIG9yIGRhc2hib2FyZCBzaG91bGQgaGF2ZSB1bmlxdWUgaWQgdG9cbiAgICogZGVmaW5lIGA8bGluZWFyR3JhZGllbnQ+YC5cbiAgICovXG4gIGdyYWRpZW50SWQgPSBncmFkaWVudElkU2VlZCsrO1xuXG4gIC8qKiBQYXRocyB0byByZW5kZXJlZCBpbiB0aGUgdGVtcGxhdGUuICovXG4gIHByb2dyZXNzQ2lyY2xlUGF0aDogTnpQcm9ncmVzc0NpcmNsZVBhdGhbXSA9IFtdO1xuICBjaXJjbGVHcmFkaWVudD86IEFycmF5PHsgb2Zmc2V0OiBzdHJpbmc7IGNvbG9yOiBzdHJpbmcgfT47XG4gIHRyYWlsUGF0aFN0eWxlOiBOZ1N0eWxlSW50ZXJmYWNlIHwgbnVsbCA9IG51bGw7XG4gIHBhdGhTdHJpbmc/OiBzdHJpbmc7XG4gIGljb24hOiBzdHJpbmc7XG5cbiAgZGlyOiBEaXJlY3Rpb24gPSAnbHRyJztcblxuICB0cmFja0J5Rm4gPSAoaW5kZXg6IG51bWJlcikgPT4gYCR7aW5kZXh9YDtcblxuICBnZXQgZm9ybWF0dGVyKCk6IE56UHJvZ3Jlc3NGb3JtYXR0ZXIge1xuICAgIHJldHVybiB0aGlzLmZvcm1hdCB8fCBkZWZhdWx0Rm9ybWF0dGVyO1xuICB9XG5cbiAgZ2V0IHN0YXR1cygpOiBOelByb2dyZXNzU3RhdHVzVHlwZSB7XG4gICAgcmV0dXJuIHRoaXMuY21hY3NTdGF0dXMgfHwgdGhpcy5pbmZlcnJlZFN0YXR1cztcbiAgfVxuXG4gIGdldCBzdHJva2VXaWR0aCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLmNtYWNzU3Ryb2tlV2lkdGggfHwgKHRoaXMudHlwZSA9PT0gJ2xpbmUnICYmIHRoaXMuc2l6ZSAhPT0gJ3NtYWxsJyA/IDggOiA2KTtcbiAgfVxuXG4gIGdldCBpc0NpcmNsZVN0eWxlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnR5cGUgPT09ICdjaXJjbGUnIHx8IHRoaXMudHlwZSA9PT0gJ2Rhc2hib2FyZCc7XG4gIH1cblxuICBwcml2YXRlIGNhY2hlZFN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBpbmZlcnJlZFN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHB1YmxpYyBuekNvbmZpZ1NlcnZpY2U6IE56Q29uZmlnU2VydmljZSxcbiAgICBAT3B0aW9uYWwoKSBwcml2YXRlIGRpcmVjdGlvbmFsaXR5OiBEaXJlY3Rpb25hbGl0eVxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xuICAgIGNvbnN0IHtcbiAgICAgIGNtYWNzU3RlcHMsXG4gICAgICBnYXBQb3NpdGlvbixcbiAgICAgIHN0cm9rZUxpbmVjYXAsXG4gICAgICBzdHJva2VDb2xvcixcbiAgICAgIGdhcERlZ3JlZSxcbiAgICAgIHR5cGUsXG4gICAgICBjbWFjc1N0YXR1cyxcbiAgICAgIHBlcmNlbnQsXG4gICAgICBzdWNjZXNzUGVyY2VudCxcbiAgICAgIGNtYWNzU3Ryb2tlV2lkdGhcbiAgICB9ID0gY2hhbmdlcztcblxuICAgIGlmIChjbWFjc1N0YXR1cykge1xuICAgICAgdGhpcy5jYWNoZWRTdGF0dXMgPSB0aGlzLmNtYWNzU3RhdHVzIHx8IHRoaXMuY2FjaGVkU3RhdHVzO1xuICAgIH1cblxuICAgIGlmIChwZXJjZW50IHx8IHN1Y2Nlc3NQZXJjZW50KSB7XG4gICAgICBjb25zdCBmaWxsQWxsID0gcGFyc2VJbnQodGhpcy5wZXJjZW50LnRvU3RyaW5nKCksIDEwKSA+PSAxMDA7XG4gICAgICBpZiAoZmlsbEFsbCkge1xuICAgICAgICBpZiAoKGlzTm90TmlsKHRoaXMuc3VjY2Vzc1BlcmNlbnQpICYmIHRoaXMuc3VjY2Vzc1BlcmNlbnQhID49IDEwMCkgfHwgdGhpcy5zdWNjZXNzUGVyY2VudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5pbmZlcnJlZFN0YXR1cyA9ICdzdWNjZXNzJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pbmZlcnJlZFN0YXR1cyA9IHRoaXMuY2FjaGVkU3RhdHVzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChjbWFjc1N0YXR1cyB8fCBwZXJjZW50IHx8IHN1Y2Nlc3NQZXJjZW50IHx8IHN0cm9rZUNvbG9yKSB7XG4gICAgICB0aGlzLnVwZGF0ZUljb24oKTtcbiAgICB9XG5cbiAgICBpZiAoc3Ryb2tlQ29sb3IpIHtcbiAgICAgIHRoaXMuc2V0U3Ryb2tlQ29sb3IoKTtcbiAgICB9XG5cbiAgICBpZiAoZ2FwUG9zaXRpb24gfHwgc3Ryb2tlTGluZWNhcCB8fCBnYXBEZWdyZWUgfHwgdHlwZSB8fCBwZXJjZW50IHx8IHN0cm9rZUNvbG9yIHx8IHN0cm9rZUNvbG9yKSB7XG4gICAgICB0aGlzLmdldENpcmNsZVBhdGhzKCk7XG4gICAgfVxuXG4gICAgaWYgKHBlcmNlbnQgfHwgY21hY3NTdGVwcyB8fCBjbWFjc1N0cm9rZVdpZHRoKSB7XG4gICAgICB0aGlzLmlzU3RlcHMgPSB0aGlzLmNtYWNzU3RlcHMgPiAwO1xuICAgICAgaWYgKHRoaXMuaXNTdGVwcykge1xuICAgICAgICB0aGlzLmdldFN0ZXBzKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5uekNvbmZpZ1NlcnZpY2VcbiAgICAgIC5nZXRDb25maWdDaGFuZ2VFdmVudEZvckNvbXBvbmVudChOWl9DT05GSUdfTU9EVUxFX05BTUUpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XG4gICAgICAgIHRoaXMuc2V0U3Ryb2tlQ29sb3IoKTtcbiAgICAgICAgdGhpcy5nZXRDaXJjbGVQYXRocygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLmRpcmVjdGlvbmFsaXR5LmNoYW5nZT8ucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpLnN1YnNjcmliZSgoZGlyZWN0aW9uOiBEaXJlY3Rpb24pID0+IHtcbiAgICAgIHRoaXMuZGlyID0gZGlyZWN0aW9uO1xuICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5kaXIgPSB0aGlzLmRpcmVjdGlvbmFsaXR5LnZhbHVlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVJY29uKCk6IHZvaWQge1xuICAgIGNvbnN0IHJldCA9IHN0YXR1c0ljb25OYW1lTWFwLmdldCh0aGlzLnN0YXR1cyk7XG4gICAgdGhpcy5pY29uID0gcmV0ID8gcmV0ICsgKHRoaXMuaXNDaXJjbGVTdHlsZSA/ICctbycgOiAnLWNpcmNsZS1maWxsJykgOiAnJztcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGUgc3RlcCByZW5kZXIgY29uZmlncy5cbiAgICovXG4gIHByaXZhdGUgZ2V0U3RlcHMoKTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudCA9IE1hdGguZmxvb3IodGhpcy5jbWFjc1N0ZXBzICogKHRoaXMucGVyY2VudCAvIDEwMCkpO1xuICAgIGNvbnN0IHN0ZXBXaWR0aCA9IHRoaXMuc2l6ZSA9PT0gJ3NtYWxsJyA/IDIgOiAxNDtcblxuICAgIGNvbnN0IHN0ZXBzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY21hY3NTdGVwczsgaSsrKSB7XG4gICAgICBsZXQgY29sb3I7XG4gICAgICBpZiAoaSA8PSBjdXJyZW50IC0gMSkge1xuICAgICAgICBjb2xvciA9IHRoaXMuc3Ryb2tlQ29sb3I7XG4gICAgICB9XG4gICAgICBjb25zdCBzdGVwU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogYCR7Y29sb3J9YCxcbiAgICAgICAgd2lkdGg6IGAke3N0ZXBXaWR0aH1weGAsXG4gICAgICAgIGhlaWdodDogYCR7dGhpcy5zdHJva2VXaWR0aH1weGBcbiAgICAgIH07XG4gICAgICBzdGVwcy5wdXNoKHN0ZXBTdHlsZSk7XG4gICAgfVxuXG4gICAgdGhpcy5zdGVwcyA9IHN0ZXBzO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZSBwYXRocyB3aGVuIHRoZSB0eXBlIGlzIGNpcmNsZSBvciBkYXNoYm9hcmQuXG4gICAqL1xuICBwcml2YXRlIGdldENpcmNsZVBhdGhzKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5pc0NpcmNsZVN0eWxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWVzID0gaXNOb3ROaWwodGhpcy5zdWNjZXNzUGVyY2VudCkgPyBbdGhpcy5zdWNjZXNzUGVyY2VudCEsIHRoaXMucGVyY2VudF0gOiBbdGhpcy5wZXJjZW50XTtcblxuICAgIC8vIENhbGN1bGF0ZSBzaGFyZWQgc3R5bGVzLlxuICAgIGNvbnN0IHJhZGl1cyA9IDUwIC0gdGhpcy5zdHJva2VXaWR0aCAvIDI7XG4gICAgY29uc3QgZ2FwUG9zaXRpb24gPSB0aGlzLmdhcFBvc2l0aW9uIHx8ICh0aGlzLnR5cGUgPT09ICdjaXJjbGUnID8gJ3RvcCcgOiAnYm90dG9tJyk7XG4gICAgY29uc3QgbGVuID0gTWF0aC5QSSAqIDIgKiByYWRpdXM7XG4gICAgY29uc3QgZ2FwRGVncmVlID0gdGhpcy5nYXBEZWdyZWUgfHwgKHRoaXMudHlwZSA9PT0gJ2NpcmNsZScgPyAwIDogNzUpO1xuXG4gICAgbGV0IGJlZ2luUG9zaXRpb25YID0gMDtcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblkgPSAtcmFkaXVzO1xuICAgIGxldCBlbmRQb3NpdGlvblggPSAwO1xuICAgIGxldCBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAtMjtcblxuICAgIHN3aXRjaCAoZ2FwUG9zaXRpb24pIHtcbiAgICAgIGNhc2UgJ2xlZnQnOlxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IC1yYWRpdXM7XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogMjtcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdyaWdodCc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25YID0gcmFkaXVzO1xuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XG4gICAgICAgIGVuZFBvc2l0aW9uWCA9IHJhZGl1cyAqIC0yO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSAwO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2JvdHRvbSc6XG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gcmFkaXVzO1xuICAgICAgICBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgfVxuXG4gICAgdGhpcy5wYXRoU3RyaW5nID0gYE0gNTAsNTAgbSAke2JlZ2luUG9zaXRpb25YfSwke2JlZ2luUG9zaXRpb25ZfVxuICAgICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAke2VuZFBvc2l0aW9uWH0sJHstZW5kUG9zaXRpb25ZfVxuICAgICAgIGEgJHtyYWRpdXN9LCR7cmFkaXVzfSAwIDEgMSAkey1lbmRQb3NpdGlvblh9LCR7ZW5kUG9zaXRpb25ZfWA7XG5cbiAgICB0aGlzLnRyYWlsUGF0aFN0eWxlID0ge1xuICAgICAgc3Ryb2tlRGFzaGFycmF5OiBgJHtsZW4gLSBnYXBEZWdyZWV9cHggJHtsZW59cHhgLFxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke2dhcERlZ3JlZSAvIDJ9cHhgLFxuICAgICAgdHJhbnNpdGlvbjogJ3N0cm9rZS1kYXNob2Zmc2V0IC4zcyBlYXNlIDBzLCBzdHJva2UtZGFzaGFycmF5IC4zcyBlYXNlIDBzLCBzdHJva2UgLjNzJ1xuICAgIH07XG5cbiAgICAvLyBDYWxjdWxhdGUgc3R5bGVzIGZvciBlYWNoIHBhdGguXG4gICAgdGhpcy5wcm9ncmVzc0NpcmNsZVBhdGggPSB2YWx1ZXNcbiAgICAgIC5tYXAoKHZhbHVlLCBpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBpc1N1Y2Nlc3NQZXJjZW50ID0gdmFsdWVzLmxlbmd0aCA9PT0gMiAmJiBpbmRleCA9PT0gMDtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzdHJva2U6IHRoaXMuaXNHcmFkaWVudCAmJiAhaXNTdWNjZXNzUGVyY2VudCA/IGB1cmwoI2dyYWRpZW50LSR7dGhpcy5ncmFkaWVudElkfSlgIDogbnVsbCxcbiAgICAgICAgICBzdHJva2VQYXRoU3R5bGU6IHtcbiAgICAgICAgICAgIHN0cm9rZTogIXRoaXMuaXNHcmFkaWVudCA/IChpc1N1Y2Nlc3NQZXJjZW50ID8gc3RhdHVzQ29sb3JNYXAuZ2V0KCdzdWNjZXNzJykgOiAodGhpcy5zdHJva2VDb2xvciBhcyBzdHJpbmcpKSA6IG51bGwsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MsIHN0cm9rZS13aWR0aCAuMDZzIGVhc2UgLjNzJyxcbiAgICAgICAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7KCh2YWx1ZSB8fCAwKSAvIDEwMCkgKiAobGVuIC0gZ2FwRGVncmVlKX1weCAke2xlbn1weGAsXG4gICAgICAgICAgICBzdHJva2VEYXNob2Zmc2V0OiBgLSR7Z2FwRGVncmVlIC8gMn1weGBcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KVxuICAgICAgLnJldmVyc2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0U3Ryb2tlQ29sb3IoKTogdm9pZCB7XG4gICAgY29uc3QgY29sb3IgPSB0aGlzLnN0cm9rZUNvbG9yO1xuICAgIGNvbnN0IGlzR3JhZGllbnQgPSAodGhpcy5pc0dyYWRpZW50ID0gISFjb2xvciAmJiB0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKTtcbiAgICBpZiAoaXNHcmFkaWVudCAmJiAhdGhpcy5pc0NpcmNsZVN0eWxlKSB7XG4gICAgICB0aGlzLmxpbmVHcmFkaWVudCA9IGhhbmRsZUxpbmVhckdyYWRpZW50KGNvbG9yIGFzIE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50KTtcbiAgICB9IGVsc2UgaWYgKGlzR3JhZGllbnQgJiYgdGhpcy5pc0NpcmNsZVN0eWxlKSB7XG4gICAgICB0aGlzLmNpcmNsZUdyYWRpZW50ID0gaGFuZGxlQ2lyY2xlR3JhZGllbnQodGhpcy5zdHJva2VDb2xvciBhcyBOelByb2dyZXNzR3JhZGllbnRQcm9ncmVzcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGluZUdyYWRpZW50ID0gbnVsbDtcbiAgICAgIHRoaXMuY2lyY2xlR3JhZGllbnQgPSBbXTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==
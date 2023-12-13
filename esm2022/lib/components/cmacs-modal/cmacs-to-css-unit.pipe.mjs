import { Pipe } from '@angular/core';
import * as i0 from "@angular/core";
export class CmacsToCssUnitPipe {
    transform(value, defaultUnit = 'px') {
        const formatted = +value; // force convert
        return isNaN(formatted) ? `${value}` : `${formatted}${defaultUnit}`;
    }
    static { this.ɵfac = function CmacsToCssUnitPipe_Factory(t) { return new (t || CmacsToCssUnitPipe)(); }; }
    static { this.ɵpipe = /*@__PURE__*/ i0.ɵɵdefinePipe({ name: "cmacsToCssUnit", type: CmacsToCssUnitPipe, pure: true }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsToCssUnitPipe, [{
        type: Pipe,
        args: [{
                name: 'cmacsToCssUnit'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdG8tY3NzLXVuaXQucGlwZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1tb2RhbC9jbWFjcy10by1jc3MtdW5pdC5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDOztBQUtwRCxNQUFNLE9BQU8sa0JBQWtCO0lBQzdCLFNBQVMsQ0FBQyxLQUFzQixFQUFFLGNBQXNCLElBQUk7UUFDMUQsTUFBTSxTQUFTLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxnQkFBZ0I7UUFDMUMsT0FBTyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxHQUFHLFdBQVcsRUFBRSxDQUFDO0lBQ3RFLENBQUM7bUZBSlUsa0JBQWtCO3dGQUFsQixrQkFBa0I7O3VGQUFsQixrQkFBa0I7Y0FIOUIsSUFBSTtlQUFDO2dCQUNKLElBQUksRUFBRSxnQkFBZ0I7YUFDdkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQaXBlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AUGlwZSh7XHJcbiAgbmFtZTogJ2NtYWNzVG9Dc3NVbml0J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQ21hY3NUb0Nzc1VuaXRQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgdHJhbnNmb3JtKHZhbHVlOiBudW1iZXIgfCBzdHJpbmcsIGRlZmF1bHRVbml0OiBzdHJpbmcgPSAncHgnKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGZvcm1hdHRlZCA9ICt2YWx1ZTsgLy8gZm9yY2UgY29udmVydFxyXG4gICAgcmV0dXJuIGlzTmFOKGZvcm1hdHRlZCkgPyBgJHt2YWx1ZX1gIDogYCR7Zm9ybWF0dGVkfSR7ZGVmYXVsdFVuaXR9YDtcclxuICB9XHJcbn1cclxuIl19
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class DoomSensorService {
    constructor() {
        this._trackedItems = [];
        this._testList = () => {
            this._trackedItems.forEach((item) => {
                this._testItem(item);
            });
        };
        this._trackInterval = setInterval(this._testList, 100);
    }
    track(nativeElement, trackedProperties, callBack) {
        if (this._trackedItems.find((item) => item.nativeElement === nativeElement)) {
            throw new Error('Duplicate tracked element');
        }
        if (trackedProperties.width || trackedProperties.height || trackedProperties.top || trackedProperties.left) {
            const trackedItem = {
                nativeElement,
                lastState: this._getState(nativeElement, trackedProperties),
                trackedProperties,
                callBack
            };
            this._trackedItems.push(trackedItem);
        }
    }
    untrack(nativeElement) {
        const trackedItem = this._trackedItems.find((item) => item.nativeElement === nativeElement);
        if (!trackedItem) {
            throw new Error('tracked item not found');
        }
        const index = this._trackedItems.indexOf(trackedItem);
        this._trackedItems.splice(index, 1);
    }
    _testItem(trackedItem) {
        const currentState = this._getState(trackedItem.nativeElement, trackedItem.trackedProperties);
        if (trackedItem.lastState.width !== currentState.width ||
            trackedItem.lastState.height !== currentState.height ||
            trackedItem.lastState.top !== currentState.top ||
            trackedItem.lastState.left !== currentState.left) {
            trackedItem.lastState = currentState;
            trackedItem.callBack();
        }
    }
    _getState(nativeElement, trackedProperties) {
        const trackedItemState = {};
        if (trackedProperties.width) {
            trackedItemState.width = nativeElement.clientWidth;
        }
        if (trackedProperties.height) {
            trackedItemState.height = nativeElement.clientHeight;
        }
        if (trackedProperties.top) {
            trackedItemState.top = Math.round(nativeElement.getBoundingClientRect().top);
        }
        if (trackedProperties.left) {
            trackedItemState.left = Math.round(nativeElement.getBoundingClientRect().left);
        }
        return trackedItemState;
    }
    static { this.ɵfac = function DoomSensorService_Factory(t) { return new (t || DoomSensorService)(); }; }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: DoomSensorService, factory: DoomSensorService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DoomSensorService, [{
        type: Injectable
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9vbS1zZW5zb3Iuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1sYXp5LWxvYWRpbmcvc2VydmljZXMvZG9vbS1zZW5zb3Iuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOztBQU0zQyxNQUFNLE9BQU8saUJBQWlCO0lBTTFCO1FBSlEsa0JBQWEsR0FBa0IsRUFBRSxDQUFDO1FBMENsQyxjQUFTLEdBQUcsR0FBRyxFQUFFO1lBRXJCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBRWhDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUE7UUExQ0csSUFBSSxDQUFDLGNBQWMsR0FBRyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBRU0sS0FBSyxDQUFDLGFBQWtCLEVBQUUsaUJBQW9DLEVBQUUsUUFBb0I7UUFFdkYsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsS0FBSyxhQUFhLENBQUMsRUFBRTtZQUV6RSxNQUFNLElBQUksS0FBSyxDQUFDLDJCQUEyQixDQUFDLENBQUM7U0FDaEQ7UUFFRCxJQUFJLGlCQUFpQixDQUFDLEtBQUssSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLElBQUksaUJBQWlCLENBQUMsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksRUFBRTtZQUV4RyxNQUFNLFdBQVcsR0FBZ0I7Z0JBQzdCLGFBQWE7Z0JBQ2IsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLGlCQUFpQixDQUFDO2dCQUMzRCxpQkFBaUI7Z0JBQ2pCLFFBQVE7YUFDWCxDQUFDO1lBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDeEM7SUFDTCxDQUFDO0lBRU0sT0FBTyxDQUFDLGFBQWtCO1FBRTdCLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxLQUFLLGFBQWEsQ0FBQyxDQUFDO1FBRTVGLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLHdCQUF3QixDQUFDLENBQUM7U0FDN0M7UUFFRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQVVPLFNBQVMsQ0FBQyxXQUF3QjtRQUV0QyxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFFOUYsSUFBSSxXQUFXLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxZQUFZLENBQUMsS0FBSztZQUNsRCxXQUFXLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxZQUFZLENBQUMsTUFBTTtZQUNwRCxXQUFXLENBQUMsU0FBUyxDQUFDLEdBQUcsS0FBSyxZQUFZLENBQUMsR0FBRztZQUM5QyxXQUFXLENBQUMsU0FBUyxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsSUFBSSxFQUFFO1lBRWxELFdBQVcsQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDO1lBQ3JDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztTQUMxQjtJQUNMLENBQUM7SUFFTyxTQUFTLENBQUMsYUFBa0IsRUFBRSxpQkFBb0M7UUFFdEUsTUFBTSxnQkFBZ0IsR0FBcUIsRUFBRSxDQUFDO1FBRTlDLElBQUksaUJBQWlCLENBQUMsS0FBSyxFQUFFO1lBRXpCLGdCQUFnQixDQUFDLEtBQUssR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDO1NBQ3REO1FBRUQsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUU7WUFFMUIsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7U0FDeEQ7UUFFRCxJQUFJLGlCQUFpQixDQUFDLEdBQUcsRUFBRTtZQUV2QixnQkFBZ0IsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNoRjtRQUVELElBQUksaUJBQWlCLENBQUMsSUFBSSxFQUFFO1lBRXhCLGdCQUFnQixDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ2xGO1FBRUQsT0FBTyxnQkFBZ0IsQ0FBQztJQUM1QixDQUFDO2tGQTNGUSxpQkFBaUI7dUVBQWpCLGlCQUFpQixXQUFqQixpQkFBaUI7O3VGQUFqQixpQkFBaUI7Y0FEN0IsVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVHJhY2tlZFByb3BlcnRpZXMgfSBmcm9tICcuLi9tb2RlbHMvdHJhY2tlZC1wcm9wZXJ0aWVzLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IFRyYWNrZWRJdGVtIH0gZnJvbSAnLi4vbW9kZWxzL3RyYWNrZWQtaXRlbS5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBUcmFja2VkSXRlbVN0YXRlIH0gZnJvbSAnLi4vbW9kZWxzL3RhY2tlZC1pdGVtLXN0YXRlLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBEb29tU2Vuc29yU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBfdHJhY2tlZEl0ZW1zOiBUcmFja2VkSXRlbVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBfdHJhY2tJbnRlcnZhbDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgICAgICB0aGlzLl90cmFja0ludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy5fdGVzdExpc3QsIDEwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRyYWNrKG5hdGl2ZUVsZW1lbnQ6IGFueSwgdHJhY2tlZFByb3BlcnRpZXM6IFRyYWNrZWRQcm9wZXJ0aWVzLCBjYWxsQmFjazogKCkgPT4gdm9pZCApOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3RyYWNrZWRJdGVtcy5maW5kKChpdGVtKSA9PiBpdGVtLm5hdGl2ZUVsZW1lbnQgPT09IG5hdGl2ZUVsZW1lbnQpKSB7XHJcblxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0R1cGxpY2F0ZSB0cmFja2VkIGVsZW1lbnQnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0cmFja2VkUHJvcGVydGllcy53aWR0aCB8fCB0cmFja2VkUHJvcGVydGllcy5oZWlnaHQgfHwgdHJhY2tlZFByb3BlcnRpZXMudG9wIHx8IHRyYWNrZWRQcm9wZXJ0aWVzLmxlZnQpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRyYWNrZWRJdGVtOiBUcmFja2VkSXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIG5hdGl2ZUVsZW1lbnQsXHJcbiAgICAgICAgICAgICAgICBsYXN0U3RhdGU6IHRoaXMuX2dldFN0YXRlKG5hdGl2ZUVsZW1lbnQsIHRyYWNrZWRQcm9wZXJ0aWVzKSxcclxuICAgICAgICAgICAgICAgIHRyYWNrZWRQcm9wZXJ0aWVzLFxyXG4gICAgICAgICAgICAgICAgY2FsbEJhY2tcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3RyYWNrZWRJdGVtcy5wdXNoKHRyYWNrZWRJdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVudHJhY2sobmF0aXZlRWxlbWVudDogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIGNvbnN0IHRyYWNrZWRJdGVtID0gdGhpcy5fdHJhY2tlZEl0ZW1zLmZpbmQoKGl0ZW0pID0+IGl0ZW0ubmF0aXZlRWxlbWVudCA9PT0gbmF0aXZlRWxlbWVudCk7XHJcblxyXG4gICAgICAgIGlmICghdHJhY2tlZEl0ZW0pIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCd0cmFja2VkIGl0ZW0gbm90IGZvdW5kJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuX3RyYWNrZWRJdGVtcy5pbmRleE9mKHRyYWNrZWRJdGVtKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdHJhY2tlZEl0ZW1zLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdGVzdExpc3QgPSAoKSA9PiB7XHJcblxyXG4gICAgICAgIHRoaXMuX3RyYWNrZWRJdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl90ZXN0SXRlbShpdGVtKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90ZXN0SXRlbSh0cmFja2VkSXRlbTogVHJhY2tlZEl0ZW0pOiB2b2lkIHtcclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudFN0YXRlID0gdGhpcy5fZ2V0U3RhdGUodHJhY2tlZEl0ZW0ubmF0aXZlRWxlbWVudCwgdHJhY2tlZEl0ZW0udHJhY2tlZFByb3BlcnRpZXMpO1xyXG5cclxuICAgICAgICBpZiAodHJhY2tlZEl0ZW0ubGFzdFN0YXRlLndpZHRoICE9PSBjdXJyZW50U3RhdGUud2lkdGggfHxcclxuICAgICAgICAgICAgdHJhY2tlZEl0ZW0ubGFzdFN0YXRlLmhlaWdodCAhPT0gY3VycmVudFN0YXRlLmhlaWdodCB8fFxyXG4gICAgICAgICAgICB0cmFja2VkSXRlbS5sYXN0U3RhdGUudG9wICE9PSBjdXJyZW50U3RhdGUudG9wIHx8XHJcbiAgICAgICAgICAgIHRyYWNrZWRJdGVtLmxhc3RTdGF0ZS5sZWZ0ICE9PSBjdXJyZW50U3RhdGUubGVmdCkge1xyXG5cclxuICAgICAgICAgICAgdHJhY2tlZEl0ZW0ubGFzdFN0YXRlID0gY3VycmVudFN0YXRlO1xyXG4gICAgICAgICAgICB0cmFja2VkSXRlbS5jYWxsQmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9nZXRTdGF0ZShuYXRpdmVFbGVtZW50OiBhbnksIHRyYWNrZWRQcm9wZXJ0aWVzOiBUcmFja2VkUHJvcGVydGllcyk6IFRyYWNrZWRJdGVtU3RhdGUge1xyXG5cclxuICAgICAgICBjb25zdCB0cmFja2VkSXRlbVN0YXRlOiBUcmFja2VkSXRlbVN0YXRlID0ge307XHJcblxyXG4gICAgICAgIGlmICh0cmFja2VkUHJvcGVydGllcy53aWR0aCkge1xyXG5cclxuICAgICAgICAgICAgdHJhY2tlZEl0ZW1TdGF0ZS53aWR0aCA9IG5hdGl2ZUVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodHJhY2tlZFByb3BlcnRpZXMuaGVpZ2h0KSB7XHJcblxyXG4gICAgICAgICAgICB0cmFja2VkSXRlbVN0YXRlLmhlaWdodCA9IG5hdGl2ZUVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRyYWNrZWRQcm9wZXJ0aWVzLnRvcCkge1xyXG5cclxuICAgICAgICAgICAgdHJhY2tlZEl0ZW1TdGF0ZS50b3AgPSBNYXRoLnJvdW5kKG5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0cmFja2VkUHJvcGVydGllcy5sZWZ0KSB7XHJcblxyXG4gICAgICAgICAgICB0cmFja2VkSXRlbVN0YXRlLmxlZnQgPSBNYXRoLnJvdW5kKG5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJhY2tlZEl0ZW1TdGF0ZTtcclxuICAgIH1cclxufVxyXG4iXX0=
import { Injectable } from '@angular/core';
import { isNotNil } from 'ng-zorro-antd/core/util';
import { NzTreeBaseService } from './tree/nz-tree-base.service';
import * as i0 from "@angular/core";
export class CmacsTreeService extends NzTreeBaseService {
    constructor() {
        super(...arguments);
        this.nzMultiple = false;
    }
    /**
     * search value & expand node
     * should add expandlist
     */
    searchExpand(value) {
        this.matchedNodeList = [];
        value = value.toLowerCase();
        const expandedKeys = [];
        if (!isNotNil(value)) {
            return;
        }
        // to reset expandedNodeList
        const expandParent = (n) => {
            // expand parent node
            const parentNode = n.getParentNode();
            if (parentNode) {
                expandedKeys.push(parentNode.key);
                expandParent(parentNode);
            }
        };
        const searchChild = (n) => {
            if (value && n.title.toLowerCase().includes(value)) {
                // match the node
                n.isMatched = true;
                this.matchedNodeList.push(n);
                // expand parentNode
                expandParent(n);
            }
            else {
                n.isMatched = false;
            }
            n.children.forEach(child => {
                searchChild(child);
            });
        };
        this.rootNodes.forEach(child => {
            searchChild(child);
        });
        // expand matched keys
        this.calcExpandedKeys(expandedKeys, this.rootNodes);
    }
    static { this.ɵfac = /*@__PURE__*/ function () { let ɵCmacsTreeService_BaseFactory; return function CmacsTreeService_Factory(t) { return (ɵCmacsTreeService_BaseFactory || (ɵCmacsTreeService_BaseFactory = i0.ɵɵgetInheritedFactory(CmacsTreeService)))(t || CmacsTreeService); }; }(); }
    static { this.ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: CmacsTreeService, factory: CmacsTreeService.ɵfac }); }
}
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTreeService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRyZWUvY21hY3MtdHJlZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUloRSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsaUJBQWlCO0lBRHZEOztRQUVJLGVBQVUsR0FBSyxLQUFLLENBQUM7S0EwQ3hCO0lBeENDOzs7T0FHRztJQUNILFlBQVksQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsTUFBTSxZQUFZLEdBQWEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsNEJBQTRCO1FBQzVCLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBYSxFQUFFLEVBQUU7WUFDckMscUJBQXFCO1lBQ3JCLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQyxJQUFJLFVBQVUsRUFBRTtnQkFDZCxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFhLEVBQUUsRUFBRTtZQUNwQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbEQsaUJBQWlCO2dCQUNqQixDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLG9CQUFvQjtnQkFDcEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNMLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBQ0QsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILHNCQUFzQjtRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDO3lPQTFDVSxnQkFBZ0IsU0FBaEIsZ0JBQWdCO3VFQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCOzt1RkFBaEIsZ0JBQWdCO2NBRDVCLFVBQVUiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZS91dGlsJztcclxuaW1wb3J0IHsgTnpUcmVlQmFzZVNlcnZpY2UgfSBmcm9tICcuL3RyZWUvbnotdHJlZS1iYXNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBOelRyZWVOb2RlIH0gZnJvbSAnLi90cmVlL256LXRyZWUtYmFzZS1ub2RlJztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENtYWNzVHJlZVNlcnZpY2UgZXh0ZW5kcyBOelRyZWVCYXNlU2VydmljZSB7XHJcbiAgICBuek11bHRpcGxlID8gPSBmYWxzZTtcclxuXHJcbiAgLyoqXHJcbiAgICogc2VhcmNoIHZhbHVlICYgZXhwYW5kIG5vZGVcclxuICAgKiBzaG91bGQgYWRkIGV4cGFuZGxpc3RcclxuICAgKi9cclxuICBzZWFyY2hFeHBhbmQodmFsdWU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgdGhpcy5tYXRjaGVkTm9kZUxpc3QgPSBbXTtcclxuICAgIHZhbHVlID0gdmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgIGNvbnN0IGV4cGFuZGVkS2V5czogc3RyaW5nW10gPSBbXTtcclxuICAgIGlmICghaXNOb3ROaWwodmFsdWUpKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIC8vIHRvIHJlc2V0IGV4cGFuZGVkTm9kZUxpc3RcclxuICAgIGNvbnN0IGV4cGFuZFBhcmVudCA9IChuOiBOelRyZWVOb2RlKSA9PiB7XHJcbiAgICAgIC8vIGV4cGFuZCBwYXJlbnQgbm9kZVxyXG4gICAgICBjb25zdCBwYXJlbnROb2RlID0gbi5nZXRQYXJlbnROb2RlKCk7XHJcbiAgICAgIGlmIChwYXJlbnROb2RlKSB7XHJcbiAgICAgICAgZXhwYW5kZWRLZXlzLnB1c2gocGFyZW50Tm9kZS5rZXkpO1xyXG4gICAgICAgIGV4cGFuZFBhcmVudChwYXJlbnROb2RlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIGNvbnN0IHNlYXJjaENoaWxkID0gKG46IE56VHJlZU5vZGUpID0+IHtcclxuICAgICAgaWYgKHZhbHVlICYmIG4udGl0bGUudG9Mb3dlckNhc2UoKS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICAvLyBtYXRjaCB0aGUgbm9kZVxyXG4gICAgICAgIG4uaXNNYXRjaGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1hdGNoZWROb2RlTGlzdC5wdXNoKG4pO1xyXG4gICAgICAgIC8vIGV4cGFuZCBwYXJlbnROb2RlXHJcbiAgICAgICAgZXhwYW5kUGFyZW50KG4pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG4uaXNNYXRjaGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgbi5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICBzZWFyY2hDaGlsZChjaGlsZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIHRoaXMucm9vdE5vZGVzLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICBzZWFyY2hDaGlsZChjaGlsZCk7XHJcbiAgICB9KTtcclxuICAgIC8vIGV4cGFuZCBtYXRjaGVkIGtleXNcclxuICAgIHRoaXMuY2FsY0V4cGFuZGVkS2V5cyhleHBhbmRlZEtleXMsIHRoaXMucm9vdE5vZGVzKTtcclxuICB9XHJcbn1cclxuIl19
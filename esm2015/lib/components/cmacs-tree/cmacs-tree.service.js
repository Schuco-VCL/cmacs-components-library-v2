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
}
CmacsTreeService.ɵfac = function CmacsTreeService_Factory(t) { return ɵCmacsTreeService_BaseFactory(t || CmacsTreeService); };
CmacsTreeService.ɵprov = i0.ɵɵdefineInjectable({ token: CmacsTreeService, factory: CmacsTreeService.ɵfac });
const ɵCmacsTreeService_BaseFactory = /*@__PURE__*/ i0.ɵɵgetInheritedFactory(CmacsTreeService);
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CmacsTreeService, [{
        type: Injectable
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY21hY3MtdHJlZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRyZWUvY21hY3MtdHJlZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLDZCQUE2QixDQUFDOztBQUloRSxNQUFNLE9BQU8sZ0JBQWlCLFNBQVEsaUJBQWlCO0lBRHZEOztRQUVJLGVBQVUsR0FBSyxLQUFLLENBQUM7S0EwQ3hCO0lBeENDOzs7T0FHRztJQUNILFlBQVksQ0FBQyxLQUFhO1FBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQzFCLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsTUFBTSxZQUFZLEdBQWEsRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDcEIsT0FBTztTQUNSO1FBQ0QsNEJBQTRCO1FBQzVCLE1BQU0sWUFBWSxHQUFHLENBQUMsQ0FBYSxFQUFFLEVBQUU7WUFDckMscUJBQXFCO1lBQ3JCLE1BQU0sVUFBVSxHQUFHLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQyxJQUFJLFVBQVUsRUFBRTtnQkFDZCxZQUFZLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDbEMsWUFBWSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFCO1FBQ0gsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxXQUFXLEdBQUcsQ0FBQyxDQUFhLEVBQUUsRUFBRTtZQUNwQyxJQUFJLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDbEQsaUJBQWlCO2dCQUNqQixDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztnQkFDbkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLG9CQUFvQjtnQkFDcEIsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ2pCO2lCQUFNO2dCQUNMLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO2FBQ3JCO1lBQ0QsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ3pCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzdCLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQixDQUFDLENBQUMsQ0FBQztRQUNILHNCQUFzQjtRQUN0QixJQUFJLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0RCxDQUFDOzt5R0ExQ1UsZ0JBQWdCO3dEQUFoQixnQkFBZ0IsV0FBaEIsZ0JBQWdCOzZFQUFoQixnQkFBZ0I7dUZBQWhCLGdCQUFnQjtjQUQ1QixVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaXNOb3ROaWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUvdXRpbCc7XHJcbmltcG9ydCB7IE56VHJlZUJhc2VTZXJ2aWNlIH0gZnJvbSAnLi90cmVlL256LXRyZWUtYmFzZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJy4vdHJlZS9uei10cmVlLWJhc2Utbm9kZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBDbWFjc1RyZWVTZXJ2aWNlIGV4dGVuZHMgTnpUcmVlQmFzZVNlcnZpY2Uge1xyXG4gICAgbnpNdWx0aXBsZSA/ID0gZmFsc2U7XHJcblxyXG4gIC8qKlxyXG4gICAqIHNlYXJjaCB2YWx1ZSAmIGV4cGFuZCBub2RlXHJcbiAgICogc2hvdWxkIGFkZCBleHBhbmRsaXN0XHJcbiAgICovXHJcbiAgc2VhcmNoRXhwYW5kKHZhbHVlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHRoaXMubWF0Y2hlZE5vZGVMaXN0ID0gW107XHJcbiAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICBjb25zdCBleHBhbmRlZEtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAoIWlzTm90TmlsKHZhbHVlKSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICAvLyB0byByZXNldCBleHBhbmRlZE5vZGVMaXN0XHJcbiAgICBjb25zdCBleHBhbmRQYXJlbnQgPSAobjogTnpUcmVlTm9kZSkgPT4ge1xyXG4gICAgICAvLyBleHBhbmQgcGFyZW50IG5vZGVcclxuICAgICAgY29uc3QgcGFyZW50Tm9kZSA9IG4uZ2V0UGFyZW50Tm9kZSgpO1xyXG4gICAgICBpZiAocGFyZW50Tm9kZSkge1xyXG4gICAgICAgIGV4cGFuZGVkS2V5cy5wdXNoKHBhcmVudE5vZGUua2V5KTtcclxuICAgICAgICBleHBhbmRQYXJlbnQocGFyZW50Tm9kZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBjb25zdCBzZWFyY2hDaGlsZCA9IChuOiBOelRyZWVOb2RlKSA9PiB7XHJcbiAgICAgIGlmICh2YWx1ZSAmJiBuLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUpKSB7XHJcbiAgICAgICAgLy8gbWF0Y2ggdGhlIG5vZGVcclxuICAgICAgICBuLmlzTWF0Y2hlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5tYXRjaGVkTm9kZUxpc3QucHVzaChuKTtcclxuICAgICAgICAvLyBleHBhbmQgcGFyZW50Tm9kZVxyXG4gICAgICAgIGV4cGFuZFBhcmVudChuKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuLmlzTWF0Y2hlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIG4uY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB7XHJcbiAgICAgICAgc2VhcmNoQ2hpbGQoY2hpbGQpO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcbiAgICB0aGlzLnJvb3ROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgc2VhcmNoQ2hpbGQoY2hpbGQpO1xyXG4gICAgfSk7XHJcbiAgICAvLyBleHBhbmQgbWF0Y2hlZCBrZXlzXHJcbiAgICB0aGlzLmNhbGNFeHBhbmRlZEtleXMoZXhwYW5kZWRLZXlzLCB0aGlzLnJvb3ROb2Rlcyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==
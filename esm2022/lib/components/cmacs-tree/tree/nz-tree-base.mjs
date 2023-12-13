import { NzTreeNode } from './nz-tree-base-node';
export class NzTreeBase {
    constructor(nzTreeService) {
        this.nzTreeService = nzTreeService;
    }
    /**
     * Coerces a value({@link any[]}) to a TreeNodes({@link NzTreeNode[]})
     */
    coerceTreeNodes(
    // tslint:disable-next-line:no-any
    value) {
        let nodes = [];
        if (!this.nzTreeService.isArrayOfNzTreeNode(value)) {
            // has not been new NzTreeNode
            nodes = value.map(item => new NzTreeNode(item, null, this.nzTreeService));
        }
        else {
            nodes = value.map((item) => {
                item.service = this.nzTreeService;
                return item;
            });
        }
        return nodes;
    }
    /**
     * Get all nodes({@link NzTreeNode})
     */
    getTreeNodes() {
        return this.nzTreeService.rootNodes;
    }
    /**
     * Get {@link NzTreeNode} with key
     */
    getTreeNodeByKey(key) {
        // flat tree nodes
        const nodes = [];
        const getNode = (node) => {
            nodes.push(node);
            node.getChildren().forEach(n => {
                getNode(n);
            });
        };
        this.getTreeNodes().forEach(n => {
            getNode(n);
        });
        return nodes.find(n => n.key === key) || null;
    }
    /**
     * Get checked nodes(merged)
     */
    getCheckedNodeList() {
        return this.nzTreeService.getCheckedNodeList();
    }
    /**
     * Get selected nodes
     */
    getSelectedNodeList() {
        return this.nzTreeService.getSelectedNodeList();
    }
    /**
     * Get half checked nodes
     */
    getHalfCheckedNodeList() {
        return this.nzTreeService.getHalfCheckedNodeList();
    }
    /**
     * Get expanded nodes
     */
    getExpandedNodeList() {
        return this.nzTreeService.getExpandedNodeList();
    }
    /**
     * Get matched nodes(if nzSearchValue is not null)
     */
    getMatchedNodeList() {
        return this.nzTreeService.getMatchedNodeList();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLXRyZWUvdHJlZS9uei10cmVlLWJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBR2pELE1BQU0sT0FBTyxVQUFVO0lBQ3JCLFlBQW1CLGFBQWdDO1FBQWhDLGtCQUFhLEdBQWIsYUFBYSxDQUFtQjtJQUFHLENBQUM7SUFFdkQ7O09BRUc7SUFDSCxlQUFlO0lBQ2Isa0NBQWtDO0lBQ2xDLEtBQVk7UUFFWixJQUFJLEtBQUssR0FBaUIsRUFBRSxDQUFDO1FBQzdCLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xELDhCQUE4QjtZQUM5QixLQUFLLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksVUFBVSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7U0FDM0U7YUFBTTtZQUNMLEtBQUssR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBZ0IsRUFBRSxFQUFFO2dCQUNyQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7U0FDSjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOztPQUVHO0lBQ0gsWUFBWTtRQUNWLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUM7SUFDdEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gsZ0JBQWdCLENBQUMsR0FBVztRQUMxQixrQkFBa0I7UUFDbEIsTUFBTSxLQUFLLEdBQWlCLEVBQUUsQ0FBQztRQUMvQixNQUFNLE9BQU8sR0FBRyxDQUFDLElBQWdCLEVBQVEsRUFBRTtZQUN6QyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUM5QixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQztRQUNILE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7T0FFRztJQUNILGtCQUFrQjtRQUNoQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxtQkFBbUI7UUFDakIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsc0JBQXNCO1FBQ3BCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRztJQUNILG1CQUFtQjtRQUNqQixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUNsRCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxrQkFBa0I7UUFDaEIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDakQsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTnpUcmVlTm9kZSB9IGZyb20gJy4vbnotdHJlZS1iYXNlLW5vZGUnO1xuaW1wb3J0IHsgTnpUcmVlQmFzZVNlcnZpY2UgfSBmcm9tICcuL256LXRyZWUtYmFzZS5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIE56VHJlZUJhc2Uge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgbnpUcmVlU2VydmljZTogTnpUcmVlQmFzZVNlcnZpY2UpIHt9XG5cbiAgLyoqXG4gICAqIENvZXJjZXMgYSB2YWx1ZSh7QGxpbmsgYW55W119KSB0byBhIFRyZWVOb2Rlcyh7QGxpbmsgTnpUcmVlTm9kZVtdfSlcbiAgICovXG4gIGNvZXJjZVRyZWVOb2RlcyhcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgdmFsdWU6IGFueVtdXG4gICk6IE56VHJlZU5vZGVbXSB7XG4gICAgbGV0IG5vZGVzOiBOelRyZWVOb2RlW10gPSBbXTtcbiAgICBpZiAoIXRoaXMubnpUcmVlU2VydmljZS5pc0FycmF5T2ZOelRyZWVOb2RlKHZhbHVlKSkge1xuICAgICAgLy8gaGFzIG5vdCBiZWVuIG5ldyBOelRyZWVOb2RlXG4gICAgICBub2RlcyA9IHZhbHVlLm1hcChpdGVtID0+IG5ldyBOelRyZWVOb2RlKGl0ZW0sIG51bGwsIHRoaXMubnpUcmVlU2VydmljZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlcyA9IHZhbHVlLm1hcCgoaXRlbTogTnpUcmVlTm9kZSkgPT4ge1xuICAgICAgICBpdGVtLnNlcnZpY2UgPSB0aGlzLm56VHJlZVNlcnZpY2U7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBub2RlcztcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYWxsIG5vZGVzKHtAbGluayBOelRyZWVOb2RlfSlcbiAgICovXG4gIGdldFRyZWVOb2RlcygpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2Uucm9vdE5vZGVzO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCB7QGxpbmsgTnpUcmVlTm9kZX0gd2l0aCBrZXlcbiAgICovXG4gIGdldFRyZWVOb2RlQnlLZXkoa2V5OiBzdHJpbmcpOiBOelRyZWVOb2RlIHwgbnVsbCB7XG4gICAgLy8gZmxhdCB0cmVlIG5vZGVzXG4gICAgY29uc3Qgbm9kZXM6IE56VHJlZU5vZGVbXSA9IFtdO1xuICAgIGNvbnN0IGdldE5vZGUgPSAobm9kZTogTnpUcmVlTm9kZSk6IHZvaWQgPT4ge1xuICAgICAgbm9kZXMucHVzaChub2RlKTtcbiAgICAgIG5vZGUuZ2V0Q2hpbGRyZW4oKS5mb3JFYWNoKG4gPT4ge1xuICAgICAgICBnZXROb2RlKG4pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmdldFRyZWVOb2RlcygpLmZvckVhY2gobiA9PiB7XG4gICAgICBnZXROb2RlKG4pO1xuICAgIH0pO1xuICAgIHJldHVybiBub2Rlcy5maW5kKG4gPT4gbi5rZXkgPT09IGtleSkgfHwgbnVsbDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2hlY2tlZCBub2RlcyhtZXJnZWQpXG4gICAqL1xuICBnZXRDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldENoZWNrZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBzZWxlY3RlZCBub2Rlc1xuICAgKi9cbiAgZ2V0U2VsZWN0ZWROb2RlTGlzdCgpOiBOelRyZWVOb2RlW10ge1xuICAgIHJldHVybiB0aGlzLm56VHJlZVNlcnZpY2UuZ2V0U2VsZWN0ZWROb2RlTGlzdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBoYWxmIGNoZWNrZWQgbm9kZXNcbiAgICovXG4gIGdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldEhhbGZDaGVja2VkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgZXhwYW5kZWQgbm9kZXNcbiAgICovXG4gIGdldEV4cGFuZGVkTm9kZUxpc3QoKTogTnpUcmVlTm9kZVtdIHtcbiAgICByZXR1cm4gdGhpcy5uelRyZWVTZXJ2aWNlLmdldEV4cGFuZGVkTm9kZUxpc3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgbWF0Y2hlZCBub2RlcyhpZiBuelNlYXJjaFZhbHVlIGlzIG5vdCBudWxsKVxuICAgKi9cbiAgZ2V0TWF0Y2hlZE5vZGVMaXN0KCk6IE56VHJlZU5vZGVbXSB7XG4gICAgcmV0dXJuIHRoaXMubnpUcmVlU2VydmljZS5nZXRNYXRjaGVkTm9kZUxpc3QoKTtcbiAgfVxufVxuIl19
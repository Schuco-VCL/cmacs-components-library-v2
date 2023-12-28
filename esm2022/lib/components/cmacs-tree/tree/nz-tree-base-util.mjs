export function isCheckDisabled(node) {
    const { isDisabled, isDisableCheckbox } = node;
    return !!(isDisabled || isDisableCheckbox);
}
// tslint:disable-next-line:no-any
export function isInArray(needle, haystack) {
    return haystack.length > 0 && haystack.indexOf(needle) > -1;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdHJlZS1iYXNlLXV0aWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtdHJlZS90cmVlL256LXRyZWUtYmFzZS11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sVUFBVSxlQUFlLENBQUMsSUFBZ0I7SUFDOUMsTUFBTSxFQUFFLFVBQVUsRUFBRSxpQkFBaUIsRUFBRSxHQUFHLElBQUksQ0FBQztJQUMvQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQVUsSUFBSSxpQkFBaUIsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFFRCxrQ0FBa0M7QUFDbEMsTUFBTSxVQUFVLFNBQVMsQ0FBQyxNQUFXLEVBQUUsUUFBZTtJQUNwRCxPQUFPLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLFFBQVEsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDOUQsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE56VHJlZU5vZGUgfSBmcm9tICcuL256LXRyZWUtYmFzZS1ub2RlJztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQ2hlY2tEaXNhYmxlZChub2RlOiBOelRyZWVOb2RlKTogYm9vbGVhbiB7XG4gIGNvbnN0IHsgaXNEaXNhYmxlZCwgaXNEaXNhYmxlQ2hlY2tib3ggfSA9IG5vZGU7XG4gIHJldHVybiAhIShpc0Rpc2FibGVkIHx8IGlzRGlzYWJsZUNoZWNrYm94KTtcbn1cblxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5BcnJheShuZWVkbGU6IGFueSwgaGF5c3RhY2s6IGFueVtdKTogYm9vbGVhbiB7XG4gIHJldHVybiBoYXlzdGFjay5sZW5ndGggPiAwICYmIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKSA+IC0xO1xufVxuIl19
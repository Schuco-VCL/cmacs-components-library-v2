import { BehaviorSubject } from 'rxjs';
import { filter, first } from 'rxjs/operators';
export class Animator {
    constructor() {
        this.animation = { value: 'state1' };
        this._startBehaviorSubject = new BehaviorSubject('state1');
        this._doneBehaviorSubject = new BehaviorSubject('state1');
    }
    animationStart(event) {
        this._startBehaviorSubject.next(event.toState);
    }
    animationDone(event) {
        this._doneBehaviorSubject.next(event.toState);
    }
    animate(params, startCb, doneCb) {
        const animation = {
            value: this.animation.value === 'state1' ? 'state2' : 'state1',
            params: Object.assign({}, params)
        };
        this.animation = animation;
        if (startCb) {
            this._startBehaviorSubject.pipe(filter((value) => value === animation.value), first()).subscribe(() => {
                startCb();
            });
        }
        if (doneCb) {
            this._doneBehaviorSubject.pipe(filter((value) => value === animation.value), first()).subscribe(() => {
                doneCb();
            });
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQW5pbWF0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtbGlnaHRib3gvbW9kZWxzL0FuaW1hdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFdkMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUUvQyxNQUFNLE9BQU8sUUFBUTtJQVFqQjtRQUVJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFnQixDQUFDO1FBQ25ELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLGVBQWUsQ0FBc0IsUUFBUSxDQUFDLENBQUM7UUFDaEYsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksZUFBZSxDQUFzQixRQUFRLENBQUMsQ0FBQztJQUNuRixDQUFDO0lBRU0sY0FBYyxDQUFDLEtBQXFCO1FBRXZDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQThCLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBRU0sYUFBYSxDQUFDLEtBQXFCO1FBRXRDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQThCLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRVMsT0FBTyxDQUFDLE1BQVcsRUFBRSxPQUFvQixFQUFFLE1BQW1CO1FBRXBFLE1BQU0sU0FBUyxHQUFlO1lBQzFCLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBUTtZQUM5RCxNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsTUFBTSxDQUFDO1NBQ3RCLENBQUM7UUFFaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFFM0IsSUFBSSxPQUFPLEVBQUU7WUFDVCxJQUFJLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxLQUFLLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2xHLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7U0FDTjtRQUVELElBQUksTUFBTSxFQUFFO1lBQ1IsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssS0FBSyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFO2dCQUVqRyxNQUFNLEVBQUUsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0NBQ0oiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmltYXRpb25FdmVudCB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSAnLi9hbmltYXRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgZmlsdGVyLCBmaXJzdCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRvcjxUQW5pbWF0aW9uIGV4dGVuZHMgQW5pbWF0aW9uPiB7XHJcblxyXG4gICAgcHVibGljIGFuaW1hdGlvbjogVEFuaW1hdGlvbjtcclxuXHJcbiAgICBwcml2YXRlIF9zdGFydEJlaGF2aW9yU3ViamVjdDogQmVoYXZpb3JTdWJqZWN0PCdzdGF0ZTEnIHwgJ3N0YXRlMic+O1xyXG5cclxuICAgIHByaXZhdGUgX2RvbmVCZWhhdmlvclN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDwnc3RhdGUxJyB8ICdzdGF0ZTInPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICAgICAgdGhpcy5hbmltYXRpb24gPSB7IHZhbHVlOiAnc3RhdGUxJyB9IGFzIFRBbmltYXRpb247XHJcbiAgICAgICAgdGhpcy5fc3RhcnRCZWhhdmlvclN1YmplY3QgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PCdzdGF0ZTEnIHwgJ3N0YXRlMic+KCdzdGF0ZTEnKTtcclxuICAgICAgICB0aGlzLl9kb25lQmVoYXZpb3JTdWJqZWN0ID0gbmV3IEJlaGF2aW9yU3ViamVjdDwnc3RhdGUxJyB8ICdzdGF0ZTInPignc3RhdGUxJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFuaW1hdGlvblN0YXJ0KGV2ZW50OiBBbmltYXRpb25FdmVudCk6IHZvaWQge1xyXG5cclxuICAgICAgICB0aGlzLl9zdGFydEJlaGF2aW9yU3ViamVjdC5uZXh0KGV2ZW50LnRvU3RhdGUgYXMgJ3N0YXRlMScgfCAnc3RhdGUyJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFuaW1hdGlvbkRvbmUoZXZlbnQ6IEFuaW1hdGlvbkV2ZW50KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuX2RvbmVCZWhhdmlvclN1YmplY3QubmV4dChldmVudC50b1N0YXRlIGFzICdzdGF0ZTEnIHwgJ3N0YXRlMicpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBhbmltYXRlKHBhcmFtczogYW55LCBzdGFydENiPzogKCkgPT4gdm9pZCwgZG9uZUNiPzogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG5cclxuICAgICAgICBjb25zdCBhbmltYXRpb246IFRBbmltYXRpb24gPSB7XHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmFuaW1hdGlvbi52YWx1ZSA9PT0gJ3N0YXRlMScgPyAnc3RhdGUyJyA6ICdzdGF0ZTEnLFxyXG4gICAgICAgICAgICBwYXJhbXM6IE9iamVjdC5hc3NpZ24oe30sIHBhcmFtcylcclxuICAgICAgICB9IGFzIFRBbmltYXRpb247XHJcblxyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uID0gYW5pbWF0aW9uO1xyXG5cclxuICAgICAgICBpZiAoc3RhcnRDYikge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydEJlaGF2aW9yU3ViamVjdC5waXBlKGZpbHRlcigodmFsdWUpID0+IHZhbHVlID09PSBhbmltYXRpb24udmFsdWUpLCBmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRDYigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkb25lQ2IpIHtcclxuICAgICAgICAgICAgdGhpcy5fZG9uZUJlaGF2aW9yU3ViamVjdC5waXBlKGZpbHRlcigodmFsdWUpID0+IHZhbHVlID09PSBhbmltYXRpb24udmFsdWUpLCBmaXJzdCgpKS5zdWJzY3JpYmUoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmVDYigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
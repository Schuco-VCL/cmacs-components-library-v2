import { trigger, state, transition, style, animate } from '@angular/animations';
export const ToolbarAnimations = {
    visibilityAnimation: trigger('toolbarVisibility', [
        state('state1', style({ height: '{{height}}px' }), { params: { height: 0 } }),
        state('state2', style({ height: '{{height}}px' }), { params: { height: 0 } }),
        transition('* => *', [
            animate('{{duration}}s')
        ], { params: { duration: 0 } })
    ])
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbGJhci1hbmltYXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvY21hY3MtY29tcG9uZW50cy12Mi1saWIvc3JjL2xpYi9jb21wb25lbnRzL2NtYWNzLWxpZ2h0Ym94L21vZGVscy90b29sYmFyL2FuaW1hdGlvbnMvdG9vbGJhci1hbmltYXRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUE0QixNQUFNLHFCQUFxQixDQUFDO0FBRTNHLE1BQU0sQ0FBQyxNQUFNLGlCQUFpQixHQUUxQjtJQUNJLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxtQkFBbUIsRUFBRTtRQUM5QyxLQUFLLENBQUMsUUFBUSxFQUNWLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxjQUFjLEVBQUUsQ0FBQyxFQUNqQyxFQUFFLE1BQU0sRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1FBQzlCLEtBQUssQ0FBQyxRQUFRLEVBQ1YsS0FBSyxDQUFDLEVBQUUsTUFBTSxFQUFFLGNBQWMsRUFBRSxDQUFDLEVBQ2pDLEVBQUUsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUM7UUFDOUIsVUFBVSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPLENBQUMsZUFBZSxDQUFDO1NBQzNCLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxRQUFRLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztLQUNsQyxDQUFDO0NBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCB0cmFuc2l0aW9uLCBzdHlsZSwgYW5pbWF0ZSwgQW5pbWF0aW9uVHJpZ2dlck1ldGFkYXRhIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcblxyXG5leHBvcnQgY29uc3QgVG9vbGJhckFuaW1hdGlvbnM6IHtcclxuICAgIHJlYWRvbmx5IHZpc2liaWxpdHlBbmltYXRpb246IEFuaW1hdGlvblRyaWdnZXJNZXRhZGF0YTtcclxufSA9IHtcclxuICAgICAgICB2aXNpYmlsaXR5QW5pbWF0aW9uOiB0cmlnZ2VyKCd0b29sYmFyVmlzaWJpbGl0eScsIFtcclxuICAgICAgICAgICAgc3RhdGUoJ3N0YXRlMScsXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IGhlaWdodDogJ3t7aGVpZ2h0fX1weCcgfSksXHJcbiAgICAgICAgICAgICAgICB7IHBhcmFtczogeyBoZWlnaHQ6IDAgfSB9KSxcclxuICAgICAgICAgICAgc3RhdGUoJ3N0YXRlMicsXHJcbiAgICAgICAgICAgICAgICBzdHlsZSh7IGhlaWdodDogJ3t7aGVpZ2h0fX1weCcgfSksXHJcbiAgICAgICAgICAgICAgICB7IHBhcmFtczogeyBoZWlnaHQ6IDAgfSB9KSxcclxuICAgICAgICAgICAgdHJhbnNpdGlvbignKiA9PiAqJywgW1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgne3tkdXJhdGlvbn19cycpXHJcbiAgICAgICAgICAgIF0sIHsgcGFyYW1zOiB7IGR1cmF0aW9uOiAwIH0gfSlcclxuICAgICAgICBdKVxyXG4gICAgfTtcclxuIl19
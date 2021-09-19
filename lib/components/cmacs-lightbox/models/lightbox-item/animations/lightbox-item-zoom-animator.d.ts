import { LightboxItemZoomAnimation } from './lightbox-item-zoom-animation.interface';
import { Animator } from '../../Animator';
import { Dimensions } from '../../dimensions.interface';
import { Position } from '../../position.interface';
export declare class LightboxItemZoomAnimator extends Animator<LightboxItemZoomAnimation> {
    constructor();
    origin(itemOriginalDimensions: Dimensions, itemOriginalPosition: Position, containerDimensions: Dimensions, startCb?: () => void, doneCb?: () => void): void;
    zoom(width: number, itemOriginalDimensions: Dimensions, itemDimensions: Dimensions, containerDimensions: Dimensions, duration: number, startCb?: () => void, doneCb?: () => void): void;
    private _getZoomOffsetLeft;
    private _getZoomOffsetTop;
}
//# sourceMappingURL=lightbox-item-zoom-animator.d.ts.map
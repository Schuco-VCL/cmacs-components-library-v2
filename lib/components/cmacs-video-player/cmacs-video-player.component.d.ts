import { EventEmitter } from '@angular/core';
import { VgAPI } from 'ngx-videogular';
import * as i0 from "@angular/core";
export interface Source {
    src: string;
    type: string;
}
export declare class CmacsVideoPlayerComponent {
    sources: Source[];
    playerReady: EventEmitter<VgAPI>;
    constructor();
    onPlayerReady(api: VgAPI): void;
    static ɵfac: i0.ɵɵFactoryDef<CmacsVideoPlayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<CmacsVideoPlayerComponent, "cmacs-video-player", ["cmacsVideoPlayer"], { "sources": "sources"; }, { "playerReady": "playerReady"; }, never, never>;
}
//# sourceMappingURL=cmacs-video-player.component.d.ts.map
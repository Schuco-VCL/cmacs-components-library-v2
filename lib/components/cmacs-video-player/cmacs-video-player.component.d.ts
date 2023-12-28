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
    static ɵfac: i0.ɵɵFactoryDeclaration<CmacsVideoPlayerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CmacsVideoPlayerComponent, "cmacs-video-player", ["cmacsVideoPlayer"], { "sources": { "alias": "sources"; "required": false; }; }, { "playerReady": "playerReady"; }, never, never, false, never>;
}
//# sourceMappingURL=cmacs-video-player.component.d.ts.map
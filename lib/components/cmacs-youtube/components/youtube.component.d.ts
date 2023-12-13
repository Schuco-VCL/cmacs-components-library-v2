/// <reference types="youtube" />
import { EventEmitter, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { YoutubeApiService } from '../services/youtube-api.service';
import { YoutubePlayerService } from '../services/youtube-player.service';
import * as i0 from "@angular/core";
export declare class YoutubeComponent implements OnDestroy, OnChanges {
    youtubeApi: YoutubeApiService;
    youtubePlayer: YoutubePlayerService;
    videoId: string;
    height: number;
    width: number;
    playerVars: YT.PlayerVars;
    ready: EventEmitter<YT.PlayerEvent>;
    change: EventEmitter<YT.PlayerEvent>;
    error: EventEmitter<YT.OnErrorEvent>;
    ytPlayer: YT.Player;
    private _ready;
    private _config;
    constructor(youtubeApi: YoutubeApiService, youtubePlayer: YoutubePlayerService);
    ngOnChanges(changes: SimpleChanges): void;
    onReady(event: YT.PlayerEvent): void;
    onChange(event: YT.PlayerEvent): void;
    onError(event: YT.OnErrorEvent): void;
    ngOnDestroy(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<YoutubeComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<YoutubeComponent, "youtube", never, { "videoId": { "alias": "videoId"; "required": false; }; "height": { "alias": "height"; "required": false; }; "width": { "alias": "width"; "required": false; }; "playerVars": { "alias": "playerVars"; "required": false; }; }, { "ready": "ready"; "change": "change"; "error": "error"; }, never, never, false, never>;
}
//# sourceMappingURL=youtube.component.d.ts.map
import { NgZone } from '@angular/core';
import { YoutubeApiService } from './youtube-api.service';
import * as i0 from "@angular/core";
export declare class YoutubePlayerService {
    private zone;
    private youtubeApi;
    private _player;
    private _window;
    constructor(zone: NgZone, youtubeApi: YoutubeApiService);
    initialise(playerId: string, config: any): void;
    private _newPlayer;
    static ɵfac: i0.ɵɵFactoryDeclaration<YoutubePlayerService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<YoutubePlayerService>;
}
//# sourceMappingURL=youtube-player.service.d.ts.map
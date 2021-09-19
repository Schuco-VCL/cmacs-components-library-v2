import { DoomService } from './doom.service';
import { Item } from '../models/item';
import * as i0 from "@angular/core";
export declare class LightboxService {
    private readonly _doomService;
    constructor(_doomService: DoomService);
    addItem(item: Item): void;
    openItem(item: Item): void;
    removeItem(item: Item): void;
    onClosed(func: () => void): void;
    onOpening(func: () => void): void;
    static ɵfac: i0.ɵɵFactoryDef<LightboxService, never>;
    static ɵprov: i0.ɵɵInjectableDef<LightboxService>;
}
//# sourceMappingURL=lightbox.service.d.ts.map
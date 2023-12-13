import { TemplateRef } from '@angular/core';
import { Subject } from 'rxjs';
import { Direction } from '@angular/cdk/bidi';
export type NzMessageType = 'success' | 'info' | 'warning' | 'error' | 'loading';
export interface NzMessageDataOptions {
    duration?: number;
    nzAnimate?: boolean;
    nzPauseOnHover?: boolean;
    width?: number;
    closable?: boolean;
}
export interface NzMessageData {
    type?: NzMessageType | string;
    content?: string | TemplateRef<void>;
    messageId?: string;
    createdAt?: Date;
    options?: NzMessageDataOptions;
    state?: 'enter' | 'leave';
    onClose?: Subject<boolean>;
}
export interface MessageConfig {
    nzAnimate?: boolean;
    duration?: number;
    nzMaxStack?: number;
    nzPauseOnHover?: boolean;
    nzTop?: number | string;
    nzDirection?: Direction;
}
export type NzMessageRef = Pick<Required<NzMessageData>, 'onClose' | 'messageId'>;
//# sourceMappingURL=typings.d.ts.map
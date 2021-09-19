import { BehaviorSubject } from 'rxjs';
export class Item {
    constructor() {
        this._dimensionsBehaviorSubject = new BehaviorSubject(undefined);
    }
    get dimensions() {
        return this._dimensionsBehaviorSubject.getValue();
    }
    set dimensions(value) {
        this._dimensionsBehaviorSubject.next(value);
    }
    get $dimensions() {
        return this._dimensionsBehaviorSubject.asObservable();
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1saWdodGJveC9tb2RlbHMvaXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBR3ZDLE1BQU0sT0FBTyxJQUFJO0lBQWpCO1FBOEJZLCtCQUEwQixHQUFnQyxJQUFJLGVBQWUsQ0FBYSxTQUFTLENBQUMsQ0FBQztJQWdCakgsQ0FBQztJQWRHLElBQVcsVUFBVTtRQUVqQixPQUFPLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBRUQsSUFBVyxVQUFVLENBQUMsS0FBaUI7UUFFbkMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBRWxCLE9BQU8sSUFBSSxDQUFDLDBCQUEwQixDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFELENBQUM7Q0FDSiIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBQb3NpdGlvbiB9IGZyb20gJy4vcG9zaXRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRGltZW5zaW9ucyB9IGZyb20gJy4vZGltZW5zaW9ucy5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEl0ZW0ge1xyXG5cclxuICAgIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb250YWluZXI6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgc3JjOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHhzU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHNtU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIG1kU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIGxnU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHhsU3JjOiBzdHJpbmc7XHJcblxyXG4gICAgcHVibGljIHhzQnJlYWtwb2ludDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBzbUJyZWFrcG9pbnQ6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgbWRCcmVha3BvaW50OiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGxnQnJlYWtwb2ludDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBwb3NpdGlvbj86IFBvc2l0aW9uO1xyXG5cclxuICAgIHB1YmxpYyBpc1ZpZGVvOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgX2RpbWVuc2lvbnNCZWhhdmlvclN1YmplY3Q6IEJlaGF2aW9yU3ViamVjdDxEaW1lbnNpb25zPiA9IG5ldyBCZWhhdmlvclN1YmplY3Q8RGltZW5zaW9ucz4odW5kZWZpbmVkKTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0IGRpbWVuc2lvbnMoKTogRGltZW5zaW9ucyB7XHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb25zQmVoYXZpb3JTdWJqZWN0LmdldFZhbHVlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCBkaW1lbnNpb25zKHZhbHVlOiBEaW1lbnNpb25zKSB7XHJcblxyXG4gICAgICAgIHRoaXMuX2RpbWVuc2lvbnNCZWhhdmlvclN1YmplY3QubmV4dCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCAkZGltZW5zaW9ucygpOiBPYnNlcnZhYmxlPERpbWVuc2lvbnM+IHtcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RpbWVuc2lvbnNCZWhhdmlvclN1YmplY3QuYXNPYnNlcnZhYmxlKCk7XHJcbiAgICB9XHJcbn1cclxuIl19
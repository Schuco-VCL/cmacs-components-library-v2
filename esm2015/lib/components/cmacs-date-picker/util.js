export const PREFIX_CLASS = 'ant-picker';
const defaultDisabledTime = {
    nzDisabledHours() {
        return [];
    },
    nzDisabledMinutes() {
        return [];
    },
    nzDisabledSeconds() {
        return [];
    }
};
export function getTimeConfig(value, disabledTime) {
    let disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : {};
    disabledTimeConfig = Object.assign(Object.assign({}, defaultDisabledTime), disabledTimeConfig);
    return disabledTimeConfig;
}
export function isTimeValidByConfig(value, disabledTimeConfig) {
    let invalidTime = false;
    if (value) {
        const hour = value.getHours();
        const minutes = value.getMinutes();
        const seconds = value.getSeconds();
        const disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            const disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                const disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
export function isTimeValid(value, disabledTime) {
    const disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
export function isAllowedDate(value, disabledDate, disabledTime) {
    if (!value) {
        return false;
    }
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jbWFjcy1kYXRlLXBpY2tlci91dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBLE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxZQUFZLENBQUM7QUFFekMsTUFBTSxtQkFBbUIsR0FBdUI7SUFDOUMsZUFBZTtRQUNiLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELGlCQUFpQjtRQUNmLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUNELGlCQUFpQjtRQUNmLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGLENBQUM7QUFFRixNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWdCLEVBQUUsWUFBNkI7SUFDM0UsSUFBSSxrQkFBa0IsR0FBRyxZQUFZLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBRSxFQUF5QixDQUFDO0lBQzdHLGtCQUFrQixtQ0FDYixtQkFBbUIsR0FDbkIsa0JBQWtCLENBQ3RCLENBQUM7SUFDRixPQUFPLGtCQUFrQixDQUFDO0FBQzVCLENBQUM7QUFFRCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsS0FBZ0IsRUFBRSxrQkFBc0M7SUFDMUYsSUFBSSxXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3hCLElBQUksS0FBSyxFQUFFO1FBQ1QsTUFBTSxJQUFJLEdBQUcsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzlCLE1BQU0sT0FBTyxHQUFHLEtBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUNuQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDbkMsTUFBTSxhQUFhLEdBQUcsa0JBQWtCLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDM0QsSUFBSSxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3RDLE1BQU0sZUFBZSxHQUFHLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ25FLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTtnQkFDM0MsTUFBTSxlQUFlLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUM1RSxXQUFXLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN2RDtpQkFBTTtnQkFDTCxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7YUFBTTtZQUNMLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDcEI7S0FDRjtJQUNELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDdEIsQ0FBQztBQUVELE1BQU0sVUFBVSxXQUFXLENBQUMsS0FBZ0IsRUFBRSxZQUE0QjtJQUN4RSxNQUFNLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDOUQsT0FBTyxtQkFBbUIsQ0FBQyxLQUFLLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztBQUN4RCxDQUFDO0FBRUQsTUFBTSxVQUFVLGFBQWEsQ0FBQyxLQUFnQixFQUFFLFlBQTZCLEVBQUUsWUFBNkI7SUFDMUcsSUFBSSxDQUFDLEtBQUssRUFBRTtRQUNWLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxJQUFJLFlBQVksRUFBRTtRQUNoQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsSUFBSSxZQUFZLEVBQUU7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlL3RpbWUnO1xuaW1wb3J0IHsgRGlzYWJsZWREYXRlRm4sIERpc2FibGVkVGltZUNvbmZpZywgRGlzYWJsZWRUaW1lRm4gfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFBSRUZJWF9DTEFTUyA9ICdhbnQtcGlja2VyJztcblxuY29uc3QgZGVmYXVsdERpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lQ29uZmlnID0ge1xuICBuekRpc2FibGVkSG91cnMoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBbXTtcbiAgfSxcbiAgbnpEaXNhYmxlZE1pbnV0ZXMoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBbXTtcbiAgfSxcbiAgbnpEaXNhYmxlZFNlY29uZHMoKTogbnVtYmVyW10ge1xuICAgIHJldHVybiBbXTtcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVDb25maWcodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWRUaW1lPzogRGlzYWJsZWRUaW1lRm4pOiBEaXNhYmxlZFRpbWVDb25maWcge1xuICBsZXQgZGlzYWJsZWRUaW1lQ29uZmlnID0gZGlzYWJsZWRUaW1lID8gZGlzYWJsZWRUaW1lKHZhbHVlICYmIHZhbHVlLm5hdGl2ZURhdGUpIDogKHt9IGFzIERpc2FibGVkVGltZUNvbmZpZyk7XG4gIGRpc2FibGVkVGltZUNvbmZpZyA9IHtcbiAgICAuLi5kZWZhdWx0RGlzYWJsZWRUaW1lLFxuICAgIC4uLmRpc2FibGVkVGltZUNvbmZpZ1xuICB9O1xuICByZXR1cm4gZGlzYWJsZWRUaW1lQ29uZmlnO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lVmFsaWRCeUNvbmZpZyh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZFRpbWVDb25maWc6IERpc2FibGVkVGltZUNvbmZpZyk6IGJvb2xlYW4ge1xuICBsZXQgaW52YWxpZFRpbWUgPSBmYWxzZTtcbiAgaWYgKHZhbHVlKSB7XG4gICAgY29uc3QgaG91ciA9IHZhbHVlLmdldEhvdXJzKCk7XG4gICAgY29uc3QgbWludXRlcyA9IHZhbHVlLmdldE1pbnV0ZXMoKTtcbiAgICBjb25zdCBzZWNvbmRzID0gdmFsdWUuZ2V0U2Vjb25kcygpO1xuICAgIGNvbnN0IGRpc2FibGVkSG91cnMgPSBkaXNhYmxlZFRpbWVDb25maWcubnpEaXNhYmxlZEhvdXJzKCk7XG4gICAgaWYgKGRpc2FibGVkSG91cnMuaW5kZXhPZihob3VyKSA9PT0gLTEpIHtcbiAgICAgIGNvbnN0IGRpc2FibGVkTWludXRlcyA9IGRpc2FibGVkVGltZUNvbmZpZy5uekRpc2FibGVkTWludXRlcyhob3VyKTtcbiAgICAgIGlmIChkaXNhYmxlZE1pbnV0ZXMuaW5kZXhPZihtaW51dGVzKSA9PT0gLTEpIHtcbiAgICAgICAgY29uc3QgZGlzYWJsZWRTZWNvbmRzID0gZGlzYWJsZWRUaW1lQ29uZmlnLm56RGlzYWJsZWRTZWNvbmRzKGhvdXIsIG1pbnV0ZXMpO1xuICAgICAgICBpbnZhbGlkVGltZSA9IGRpc2FibGVkU2Vjb25kcy5pbmRleE9mKHNlY29uZHMpICE9PSAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGludmFsaWRUaW1lID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaW52YWxpZFRpbWUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gIWludmFsaWRUaW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNUaW1lVmFsaWQodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbik6IGJvb2xlYW4ge1xuICBjb25zdCBkaXNhYmxlZFRpbWVDb25maWcgPSBnZXRUaW1lQ29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWUpO1xuICByZXR1cm4gaXNUaW1lVmFsaWRCeUNvbmZpZyh2YWx1ZSwgZGlzYWJsZWRUaW1lQ29uZmlnKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWxsb3dlZERhdGUodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWREYXRlPzogRGlzYWJsZWREYXRlRm4sIGRpc2FibGVkVGltZT86IERpc2FibGVkVGltZUZuKTogYm9vbGVhbiB7XG4gIGlmICghdmFsdWUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGRpc2FibGVkRGF0ZSkge1xuICAgIGlmIChkaXNhYmxlZERhdGUodmFsdWUubmF0aXZlRGF0ZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgaWYgKGRpc2FibGVkVGltZSkge1xuICAgIGlmICghaXNUaW1lVmFsaWQodmFsdWUsIGRpc2FibGVkVGltZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG4iXX0=
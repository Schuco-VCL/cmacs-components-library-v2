export function afterDate(date) {
    return (control) => {
        //console.log(`validating: ${control.value} after ${date}`);
        if (control.value === null) {
            return null;
        }
        let value = control.value.getTime !== undefined ? control.value : new Date(control.value);
        date = date.getTime !== undefined ? date : new Date(date);
        if (value !== null && date !== null && value.getTime !== undefined && date.getTime !== undefined) {
            // first we make sure the values are actual dates, this will avoid runtime errors with corrupted values
            const val = new Date(value.getTime());
            val.setHours(0, 0, 0, 0);
            date.setHours(0, 0, 0, 0);
            if (val.getTime() <= date.getTime()) {
                return { 'afterDate': true };
            }
        }
        return null;
    };
}
export function beforeDate(date) {
    return (control) => {
        //console.log(`validating: ${control.value} before ${date}`);
        if (control.value === null) {
            return null;
        }
        let value = control.value.getTime !== undefined ? control.value : new Date(control.value);
        date = date.getTime !== undefined ? date : new Date(date);
        if (value !== null && date !== null && value.getTime !== undefined && date.getTime !== undefined) {
            // first we make sure the values are actual dates, this will avoid runtime errors with corrupted values
            const val = new Date(value.getTime());
            val.setHours(0, 0, 0, 0);
            date.setHours(0, 0, 0, 0);
            if (val.getTime() >= date.getTime()) {
                return { 'beforeDate': true };
                ;
            }
        }
        return null;
    };
}
export function isEqualToDate(date) {
    return (control) => {
        //console.log(`validating: ${control.value} is equal to ${date}`);
        if (control.value === null) {
            return null;
        }
        let value = control.value.getTime !== undefined ? control.value : new Date(control.value);
        date = date.getTime !== undefined ? date : new Date(date);
        if (value !== null && date !== null && value.getTime !== undefined && date.getTime !== undefined) {
            // first we make sure the values are actual dates, this will avoid runtime errors with corrupted values
            const val = new Date(value);
            val.setHours(0, 0, 0, 0);
            date.setHours(0, 0, 0, 0);
            if (val.getTime() !== date.getTime()) {
                return { 'isEqualToDate': true };
            }
        }
        return null;
    };
}
export function isNotEqualToDate(date) {
    return (control) => {
        //console.log(`validating: ${control.value} is not equal to ${date}`);
        if (control.value === null) {
            return null;
        }
        let value = control.value.getTime !== undefined ? control.value : new Date(control.value);
        date = date.getTime !== undefined ? date : new Date(date);
        if (value !== null && date !== null && value.getTime !== undefined && date.getTime !== undefined) {
            // first we make sure the values are actual dates, this will avoid runtime errors with corrupted values
            const val = new Date(value.getTime());
            val.setHours(0, 0, 0, 0);
            date.setHours(0, 0, 0, 0);
            if (val.getTime() === date.getTime()) {
                return { 'isNotEqualToDate': true };
                ;
            }
        }
        return null;
    };
}
export function rangeDate(firstDate, secondDate) {
    return (control) => {
        //console.log(`validating: ${control.value} range ${firstDate} & ${secondDate}`);
        if (control.value === null) {
            return null;
        }
        let value = control.value.getTime !== undefined ? control.value : new Date(control.value);
        firstDate = firstDate.getTime !== undefined ? firstDate : new Date(firstDate);
        secondDate = secondDate.getTime !== undefined ? secondDate : new Date(secondDate);
        if (value !== null && firstDate !== null && secondDate !== null && value.getTime !== undefined && firstDate.getTime !== undefined && secondDate.getTime !== undefined) {
            // first we make sure the values are actual dates, this will avoid runtime errors with corrupted values
            const val = new Date(value.getTime());
            val.setHours(0, 0, 0, 0);
            firstDate.setHours(0, 0, 0, 0);
            secondDate.setHours(0, 0, 0, 0);
            if (val.getTime() <= firstDate.getTime() || val.getTime() >= secondDate.getTime()) {
                return { 'rangeDate': true };
                ;
            }
        }
        return null;
    };
}
export function greaterThan(number) {
    return (control) => {
        //console.log(`validating: ${control.value} greather than ${number}`);
        if (control.value <= number) {
            return { 'greaterThan': true };
            ;
        }
        return null;
    };
}
export function lessThan(number) {
    return (control) => {
        //console.log(`validating: ${control.value} less than ${number}`);
        if (control.value >= number) {
            return { 'lessThan': true };
            ;
        }
        return null;
    };
}
export function isEqualToNumber(number) {
    return (control) => {
        //console.log(`validating: ${control.value} is equal to ${number}`);
        if (control.value !== number) {
            return { 'isEqualToNumber': true };
            ;
        }
        return null;
    };
}
export function isNotEqualToNumber(number) {
    return (control) => {
        //console.log(`validating: ${control.value} is not equal to  ${number}`);
        if (control.value === number) {
            return { 'isNotEqualToNumber': true };
            ;
        }
        return null;
    };
}
export function rangeNumber(firstNumber, secondNumber) {
    return (control) => {
        //console.log(`validating: ${control.value} is range ${firstNumber} & ${secondNumber}`);
        if (control.value < firstNumber || control.value > secondNumber) {
            return { 'rangeNumber': true };
            ;
        }
        return null;
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tVmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL2N1c3RvbVZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxVQUFVLFNBQVMsQ0FBQyxJQUFVO0lBQ2hDLE9BQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQ3pELDREQUE0RDtRQUM1RCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRixJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFMUQsSUFBSSxLQUFLLEtBQUssSUFBSSxJQUFJLElBQUksS0FBSyxJQUFJLElBQUksS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxTQUFTLEVBQUU7WUFDOUYsdUdBQXVHO1lBQ3ZHLE1BQU0sR0FBRyxHQUFTLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENB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QUMsT0FBd0IsRUFBMkIsRUFBRTtRQUN6RCxvRUFBb0U7UUFDcEUsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU0sRUFBRTtZQUMxQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFBQSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxNQUFjO0lBQzdDLE9BQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQ3pELHlFQUF5RTtRQUN6RSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO1lBQzFCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUFBLENBQUM7U0FDMUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUE7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxXQUFtQixFQUFFLFlBQW9CO0lBQ2pFLE9BQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQ3pELHdGQUF3RjtRQUN4RixJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFO1lBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFBQSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFBO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZnRlckRhdGUoZGF0ZTogRGF0ZSk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHZhbGlkYXRpbmc6ICR7Y29udHJvbC52YWx1ZX0gYWZ0ZXIgJHtkYXRlfWApO1xyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmFsdWUgPSBjb250cm9sLnZhbHVlLmdldFRpbWUgIT09IHVuZGVmaW5lZCA/IGNvbnRyb2wudmFsdWUgOiBuZXcgRGF0ZShjb250cm9sLnZhbHVlKTtcclxuICAgICAgICBkYXRlID0gZGF0ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQgPyBkYXRlIDogbmV3IERhdGUoZGF0ZSk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBkYXRlICE9PSBudWxsICYmIHZhbHVlLmdldFRpbWUgIT09IHVuZGVmaW5lZCAmJiBkYXRlLmdldFRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBmaXJzdCB3ZSBtYWtlIHN1cmUgdGhlIHZhbHVlcyBhcmUgYWN0dWFsIGRhdGVzLCB0aGlzIHdpbGwgYXZvaWQgcnVudGltZSBlcnJvcnMgd2l0aCBjb3JydXB0ZWQgdmFsdWVzXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbDogRGF0ZSA9IG5ldyBEYXRlKHZhbHVlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgICAgIHZhbC5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICAgICAgICAgaWYgKHZhbC5nZXRUaW1lKCkgPD0gZGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICByZXR1cm4geyAnYWZ0ZXJEYXRlJzogdHJ1ZSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJlZm9yZURhdGUoZGF0ZTogRGF0ZSk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHZhbGlkYXRpbmc6ICR7Y29udHJvbC52YWx1ZX0gYmVmb3JlICR7ZGF0ZX1gKTtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZhbHVlID0gY29udHJvbC52YWx1ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQgPyBjb250cm9sLnZhbHVlIDogbmV3IERhdGUoY29udHJvbC52YWx1ZSk7XHJcbiAgICAgICAgZGF0ZSA9IGRhdGUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkID8gZGF0ZSA6IG5ldyBEYXRlKGRhdGUpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgZGF0ZSAhPT0gbnVsbCAmJiB2YWx1ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQgJiYgZGF0ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gZmlyc3Qgd2UgbWFrZSBzdXJlIHRoZSB2YWx1ZXMgYXJlIGFjdHVhbCBkYXRlcywgdGhpcyB3aWxsIGF2b2lkIHJ1bnRpbWUgZXJyb3JzIHdpdGggY29ycnVwdGVkIHZhbHVlc1xyXG4gICAgICAgICAgY29uc3QgdmFsOiBEYXRlID0gbmV3IERhdGUodmFsdWUuZ2V0VGltZSgpKTtcclxuICAgICAgICAgIHZhbC5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICBpZiAodmFsLmdldFRpbWUoKSA+PSBkYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgJ2JlZm9yZURhdGUnOiB0cnVlIH07O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbFRvRGF0ZShkYXRlOiBEYXRlKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdmFsaWRhdGluZzogJHtjb250cm9sLnZhbHVlfSBpcyBlcXVhbCB0byAke2RhdGV9YCk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2YWx1ZSA9IGNvbnRyb2wudmFsdWUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkID8gY29udHJvbC52YWx1ZSA6IG5ldyBEYXRlKGNvbnRyb2wudmFsdWUpO1xyXG4gICAgICAgIGRhdGUgPSBkYXRlLmdldFRpbWUgIT09IHVuZGVmaW5lZCA/IGRhdGUgOiBuZXcgRGF0ZShkYXRlKTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIGRhdGUgIT09IG51bGwgJiYgdmFsdWUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkICYmIGRhdGUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0IHdlIG1ha2Ugc3VyZSB0aGUgdmFsdWVzIGFyZSBhY3R1YWwgZGF0ZXMsIHRoaXMgd2lsbCBhdm9pZCBydW50aW1lIGVycm9ycyB3aXRoIGNvcnJ1cHRlZCB2YWx1ZXNcclxuICAgICAgICAgIGNvbnN0IHZhbDogRGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgICAgICAgIHZhbC5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICAgICAgIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICBpZiAodmFsLmdldFRpbWUoKSAhPT0gZGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2lzRXF1YWxUb0RhdGUnOiB0cnVlIH07XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOb3RFcXVhbFRvRGF0ZShkYXRlOiBEYXRlKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdmFsaWRhdGluZzogJHtjb250cm9sLnZhbHVlfSBpcyBub3QgZXF1YWwgdG8gJHtkYXRlfWApO1xyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmFsdWUgPSBjb250cm9sLnZhbHVlLmdldFRpbWUgIT09IHVuZGVmaW5lZCA/IGNvbnRyb2wudmFsdWUgOiBuZXcgRGF0ZShjb250cm9sLnZhbHVlKTtcclxuICAgICAgICBkYXRlID0gZGF0ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQgPyBkYXRlIDogbmV3IERhdGUoZGF0ZSk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBkYXRlICE9PSBudWxsICYmIHZhbHVlLmdldFRpbWUgIT09IHVuZGVmaW5lZCAmJiBkYXRlLmdldFRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBmaXJzdCB3ZSBtYWtlIHN1cmUgdGhlIHZhbHVlcyBhcmUgYWN0dWFsIGRhdGVzLCB0aGlzIHdpbGwgYXZvaWQgcnVudGltZSBlcnJvcnMgd2l0aCBjb3JydXB0ZWQgdmFsdWVzXHJcbiAgICAgICAgICBjb25zdCB2YWw6IERhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgICAgdmFsLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICAgICAgIGlmICh2YWwuZ2V0VGltZSgpID09PSBkYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnaXNOb3RFcXVhbFRvRGF0ZSc6IHRydWUgfTs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VEYXRlKGZpcnN0RGF0ZTogRGF0ZSwgc2Vjb25kRGF0ZTogRGF0ZSk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHZhbGlkYXRpbmc6ICR7Y29udHJvbC52YWx1ZX0gcmFuZ2UgJHtmaXJzdERhdGV9ICYgJHtzZWNvbmREYXRlfWApO1xyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmFsdWUgPSBjb250cm9sLnZhbHVlLmdldFRpbWUgIT09IHVuZGVmaW5lZCA/IGNvbnRyb2wudmFsdWUgOiBuZXcgRGF0ZShjb250cm9sLnZhbHVlKTtcclxuICAgICAgICBmaXJzdERhdGUgPSBmaXJzdERhdGUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkID8gZmlyc3REYXRlIDogbmV3IERhdGUoZmlyc3REYXRlKTtcclxuICAgICAgICBzZWNvbmREYXRlID0gc2Vjb25kRGF0ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQgPyBzZWNvbmREYXRlIDogbmV3IERhdGUoc2Vjb25kRGF0ZSk7XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBmaXJzdERhdGUgIT09IG51bGwgJiYgc2Vjb25kRGF0ZSAhPT0gbnVsbCAmJiB2YWx1ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQgJiYgZmlyc3REYXRlLmdldFRpbWUgIT09IHVuZGVmaW5lZCAmJiBzZWNvbmREYXRlLmdldFRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBmaXJzdCB3ZSBtYWtlIHN1cmUgdGhlIHZhbHVlcyBhcmUgYWN0dWFsIGRhdGVzLCB0aGlzIHdpbGwgYXZvaWQgcnVudGltZSBlcnJvcnMgd2l0aCBjb3JydXB0ZWQgdmFsdWVzXHJcbiAgICAgICAgICBjb25zdCB2YWw6IERhdGUgPSBuZXcgRGF0ZSh2YWx1ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgICAgdmFsLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgZmlyc3REYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgc2Vjb25kRGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgICAgICAgIGlmICh2YWwuZ2V0VGltZSgpIDw9IGZpcnN0RGF0ZS5nZXRUaW1lKCkgfHwgdmFsLmdldFRpbWUoKSA+PSBzZWNvbmREYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgJ3JhbmdlRGF0ZSc6IHRydWUgfTs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBncmVhdGVyVGhhbihudW1iZXI6IG51bWJlcik6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHZhbGlkYXRpbmc6ICR7Y29udHJvbC52YWx1ZX0gZ3JlYXRoZXIgdGhhbiAke251bWJlcn1gKTtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSA8PSBudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2dyZWF0ZXJUaGFuJzogdHJ1ZSB9OztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsZXNzVGhhbihudW1iZXI6IG51bWJlcik6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHZhbGlkYXRpbmc6ICR7Y29udHJvbC52YWx1ZX0gbGVzcyB0aGFuICR7bnVtYmVyfWApO1xyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlID49IG51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnbGVzc1RoYW4nOiB0cnVlIH07O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzRXF1YWxUb051bWJlcihudW1iZXI6IG51bWJlcik6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHZhbGlkYXRpbmc6ICR7Y29udHJvbC52YWx1ZX0gaXMgZXF1YWwgdG8gJHtudW1iZXJ9YCk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgIT09IG51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnaXNFcXVhbFRvTnVtYmVyJzogdHJ1ZSB9OztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05vdEVxdWFsVG9OdW1iZXIobnVtYmVyOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGB2YWxpZGF0aW5nOiAke2NvbnRyb2wudmFsdWV9IGlzIG5vdCBlcXVhbCB0byAgJHtudW1iZXJ9YCk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgPT09IG51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnaXNOb3RFcXVhbFRvTnVtYmVyJzogdHJ1ZSB9OztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZU51bWJlcihmaXJzdE51bWJlcjogbnVtYmVyLCBzZWNvbmROdW1iZXI6IG51bWJlcik6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHZhbGlkYXRpbmc6ICR7Y29udHJvbC52YWx1ZX0gaXMgcmFuZ2UgJHtmaXJzdE51bWJlcn0gJiAke3NlY29uZE51bWJlcn1gKTtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSA8IGZpcnN0TnVtYmVyIHx8IGNvbnRyb2wudmFsdWUgPiBzZWNvbmROdW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ3JhbmdlTnVtYmVyJzogdHJ1ZSB9OztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuIl19
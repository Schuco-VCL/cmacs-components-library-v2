export function afterDate(date) {
    return (control) => {
        //console.log(`validating: ${control.value} after ${date}`);
        if (control.value === null) {
            return null;
        }
        let value = control.value.getTime !== undefined ? control.value : new Date(control.value);
        if (value !== null && date !== null && value.getTime !== undefined && date.getTime !== undefined) {
            // first we make sure the values are actual dates, this will avoid runtime errors with corrupted values
            if (value.getTime() <= date.getTime()) {
                return { 'afterDate': true };
                ;
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
        if (value !== null && date !== null && value.getTime !== undefined && date.getTime !== undefined) {
            // first we make sure the values are actual dates, this will avoid runtime errors with corrupted values
            if (value.getTime() >= date.getTime()) {
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
        if (value !== null && date !== null && value.getTime !== undefined && date.getTime !== undefined) {
            // first we make sure the values are actual dates, this will avoid runtime errors with corrupted values
            if (date.getTime() === value.getTime()) {
                return { 'isEqualToDate': true };
                ;
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
        if (value !== null && date !== null && value.getTime !== undefined && date.getTime !== undefined) {
            // first we make sure the values are actual dates, this will avoid runtime errors with corrupted values
            if (date.getTime() !== value.getTime()) {
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
        if (value !== null && firstDate !== null && secondDate !== null && value.getTime !== undefined && firstDate.getTime !== undefined && secondDate.getTime !== undefined) {
            // first we make sure the values are actual dates, this will avoid runtime errors with corrupted values
            if (value.getTime() <= firstDate.getTime() || value.getTime() >= secondDate.getTime()) {
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
        if (control.value === number) {
            return { 'isEqualToNumber': true };
            ;
        }
        return null;
    };
}
export function isNotEqualToNumber(number) {
    return (control) => {
        //console.log(`validating: ${control.value} is not equal to  ${number}`);
        if (control.value !== number) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tVmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL2N1c3RvbVZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxVQUFVLFNBQVMsQ0FBQyxJQUFVO0lBQ2hDLE9BQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQ3pELDREQUE0RDtRQUM1RCxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssSUFBSSxFQUFFO1lBQ3hCLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRixJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksSUFBSSxLQUFLLElBQUksSUFBSSxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsSUFBSSxJQUFJLENBQUMsT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUM5Rix1R0FBdUc7WUFDdkcsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxFQUFFO2dCQUNuQyxPQUFPLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxDQUFDO2dCQUFBLENBQUM7YUFDakM7U0FDSjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUMsQ0FBQTtBQUNMLENBQUM7QUFFRCxNQUFNLFVBQVUsVUFBVSxDQUFDLElBQVU7SUFDakMsT0FBTyxDQUFDLE9BQXdCLEVBQTJCLEVBQUU7UUFDekQsNkRBQTZEO1FBQzdELElBQUksT0FBTyxDQUFDLEtBQUssS0FBSyxJQUFJLEVBQUU7WUFD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O1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxlQUFlLENBQUMsTUFBYztJQUMxQyxPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtRQUN6RCxvRUFBb0U7UUFDcEUsSUFBSSxPQUFPLENBQUMsS0FBSyxLQUFLLE1BQU0sRUFBRTtZQUMxQixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFBQSxDQUFDO1NBQ3ZDO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxrQkFBa0IsQ0FBQyxNQUFjO0lBQzdDLE9BQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQ3pELHlFQUF5RTtRQUN6RSxJQUFJLE9BQU8sQ0FBQyxLQUFLLEtBQUssTUFBTSxFQUFFO1lBQzFCLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUFBLENBQUM7U0FDMUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUE7QUFDTCxDQUFDO0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxXQUFtQixFQUFFLFlBQW9CO0lBQ2pFLE9BQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQ3pELHdGQUF3RjtRQUN4RixJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsV0FBVyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEdBQUcsWUFBWSxFQUFFO1lBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFBQSxDQUFDO1NBQ25DO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFBO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFic3RyYWN0Q29udHJvbCwgVmFsaWRhdGlvbkVycm9ycywgVmFsaWRhdG9yRm4gfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZnRlckRhdGUoZGF0ZTogRGF0ZSk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHZhbGlkYXRpbmc6ICR7Y29udHJvbC52YWx1ZX0gYWZ0ZXIgJHtkYXRlfWApO1xyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdmFsdWUgPSBjb250cm9sLnZhbHVlLmdldFRpbWUgIT09IHVuZGVmaW5lZCA/IGNvbnRyb2wudmFsdWUgOiBuZXcgRGF0ZShjb250cm9sLnZhbHVlKTtcclxuICAgICAgICBpZiAodmFsdWUgIT09IG51bGwgJiYgZGF0ZSAhPT0gbnVsbCAmJiB2YWx1ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQgJiYgZGF0ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gZmlyc3Qgd2UgbWFrZSBzdXJlIHRoZSB2YWx1ZXMgYXJlIGFjdHVhbCBkYXRlcywgdGhpcyB3aWxsIGF2b2lkIHJ1bnRpbWUgZXJyb3JzIHdpdGggY29ycnVwdGVkIHZhbHVlc1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuZ2V0VGltZSgpIDw9IGRhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAnYWZ0ZXJEYXRlJzogdHJ1ZSB9OztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJlZm9yZURhdGUoZGF0ZTogRGF0ZSk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHZhbGlkYXRpbmc6ICR7Y29udHJvbC52YWx1ZX0gYmVmb3JlICR7ZGF0ZX1gKTtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZhbHVlID0gY29udHJvbC52YWx1ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQgPyBjb250cm9sLnZhbHVlIDogbmV3IERhdGUoY29udHJvbC52YWx1ZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIGRhdGUgIT09IG51bGwgJiYgdmFsdWUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkICYmIGRhdGUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0IHdlIG1ha2Ugc3VyZSB0aGUgdmFsdWVzIGFyZSBhY3R1YWwgZGF0ZXMsIHRoaXMgd2lsbCBhdm9pZCBydW50aW1lIGVycm9ycyB3aXRoIGNvcnJ1cHRlZCB2YWx1ZXNcclxuICAgICAgICAgICAgaWYgKHZhbHVlLmdldFRpbWUoKSA+PSBkYXRlLmdldFRpbWUoKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgJ2JlZm9yZURhdGUnOiB0cnVlIH07O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbFRvRGF0ZShkYXRlOiBEYXRlKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdmFsaWRhdGluZzogJHtjb250cm9sLnZhbHVlfSBpcyBlcXVhbCB0byAke2RhdGV9YCk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2YWx1ZSA9IGNvbnRyb2wudmFsdWUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkID8gY29udHJvbC52YWx1ZSA6IG5ldyBEYXRlKGNvbnRyb2wudmFsdWUpO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBkYXRlICE9PSBudWxsICYmIHZhbHVlLmdldFRpbWUgIT09IHVuZGVmaW5lZCAmJiBkYXRlLmdldFRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBmaXJzdCB3ZSBtYWtlIHN1cmUgdGhlIHZhbHVlcyBhcmUgYWN0dWFsIGRhdGVzLCB0aGlzIHdpbGwgYXZvaWQgcnVudGltZSBlcnJvcnMgd2l0aCBjb3JydXB0ZWQgdmFsdWVzXHJcbiAgICAgICAgICAgIGlmIChkYXRlLmdldFRpbWUoKSA9PT0gdmFsdWUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAnaXNFcXVhbFRvRGF0ZSc6IHRydWUgfTs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc05vdEVxdWFsVG9EYXRlKGRhdGU6IERhdGUpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGB2YWxpZGF0aW5nOiAke2NvbnRyb2wudmFsdWV9IGlzIG5vdCBlcXVhbCB0byAke2RhdGV9YCk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2YWx1ZSA9IGNvbnRyb2wudmFsdWUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkID8gY29udHJvbC52YWx1ZSA6IG5ldyBEYXRlKGNvbnRyb2wudmFsdWUpO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBkYXRlICE9PSBudWxsICYmIHZhbHVlLmdldFRpbWUgIT09IHVuZGVmaW5lZCAmJiBkYXRlLmdldFRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBmaXJzdCB3ZSBtYWtlIHN1cmUgdGhlIHZhbHVlcyBhcmUgYWN0dWFsIGRhdGVzLCB0aGlzIHdpbGwgYXZvaWQgcnVudGltZSBlcnJvcnMgd2l0aCBjb3JydXB0ZWQgdmFsdWVzXHJcbiAgICAgICAgICAgIGlmIChkYXRlLmdldFRpbWUoKSAhPT0gdmFsdWUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAnaXNOb3RFcXVhbFRvRGF0ZSc6IHRydWUgfTs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5nZURhdGUoZmlyc3REYXRlOiBEYXRlLCBzZWNvbmREYXRlOiBEYXRlKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdmFsaWRhdGluZzogJHtjb250cm9sLnZhbHVlfSByYW5nZSAke2ZpcnN0RGF0ZX0gJiAke3NlY29uZERhdGV9YCk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB2YWx1ZSA9IGNvbnRyb2wudmFsdWUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkID8gY29udHJvbC52YWx1ZSA6IG5ldyBEYXRlKGNvbnRyb2wudmFsdWUpO1xyXG4gICAgICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiBmaXJzdERhdGUgIT09IG51bGwgJiYgc2Vjb25kRGF0ZSAhPT0gbnVsbCAmJiB2YWx1ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQgJiYgZmlyc3REYXRlLmdldFRpbWUgIT09IHVuZGVmaW5lZCAmJiBzZWNvbmREYXRlLmdldFRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBmaXJzdCB3ZSBtYWtlIHN1cmUgdGhlIHZhbHVlcyBhcmUgYWN0dWFsIGRhdGVzLCB0aGlzIHdpbGwgYXZvaWQgcnVudGltZSBlcnJvcnMgd2l0aCBjb3JydXB0ZWQgdmFsdWVzXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5nZXRUaW1lKCkgPD0gZmlyc3REYXRlLmdldFRpbWUoKSB8fCB2YWx1ZS5nZXRUaW1lKCkgPj0gc2Vjb25kRGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7ICdyYW5nZURhdGUnOiB0cnVlIH07O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ3JlYXRlclRoYW4obnVtYmVyOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGB2YWxpZGF0aW5nOiAke2NvbnRyb2wudmFsdWV9IGdyZWF0aGVyIHRoYW4gJHtudW1iZXJ9YCk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgPD0gbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdncmVhdGVyVGhhbic6IHRydWUgfTs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbGVzc1RoYW4obnVtYmVyOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGB2YWxpZGF0aW5nOiAke2NvbnRyb2wudmFsdWV9IGxlc3MgdGhhbiAke251bWJlcn1gKTtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSA+PSBudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2xlc3NUaGFuJzogdHJ1ZSB9OztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VxdWFsVG9OdW1iZXIobnVtYmVyOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGB2YWxpZGF0aW5nOiAke2NvbnRyb2wudmFsdWV9IGlzIGVxdWFsIHRvICR7bnVtYmVyfWApO1xyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlID09PSBudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2lzRXF1YWxUb051bWJlcic6IHRydWUgfTs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNOb3RFcXVhbFRvTnVtYmVyKG51bWJlcjogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdmFsaWRhdGluZzogJHtjb250cm9sLnZhbHVlfSBpcyBub3QgZXF1YWwgdG8gICR7bnVtYmVyfWApO1xyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlICE9PSBudW1iZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHsgJ2lzTm90RXF1YWxUb051bWJlcic6IHRydWUgfTs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmFuZ2VOdW1iZXIoZmlyc3ROdW1iZXI6IG51bWJlciwgc2Vjb25kTnVtYmVyOiBudW1iZXIpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGB2YWxpZGF0aW5nOiAke2NvbnRyb2wudmFsdWV9IGlzIHJhbmdlICR7Zmlyc3ROdW1iZXJ9ICYgJHtzZWNvbmROdW1iZXJ9YCk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgPCBmaXJzdE51bWJlciB8fCBjb250cm9sLnZhbHVlID4gc2Vjb25kTnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdyYW5nZU51bWJlcic6IHRydWUgfTs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59Il19
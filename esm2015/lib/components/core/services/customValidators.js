export function afterDate(date) {
    return (control) => {
        //console.log(`validating: ${control.value} after ${date}`);
        let value = control.value.getTime !== undefined ? control.value : new Date(control.value);
        if (value.getTime !== undefined && date.getTime !== undefined) {
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
        let value = control.value.getTime !== undefined ? control.value : new Date(control.value);
        if (value.getTime !== undefined && date.getTime !== undefined) {
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
        let value = control.value.getTime !== undefined ? control.value : new Date(control.value);
        if (value.getTime !== undefined && date.getTime !== undefined) {
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
        let value = control.value.getTime !== undefined ? control.value : new Date(control.value);
        if (value.getTime !== undefined && date.getTime !== undefined) {
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
        let value = control.value.getTime !== undefined ? control.value : new Date(control.value);
        if (value.getTime !== undefined && firstDate.getTime !== undefined && secondDate.getTime !== undefined) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tVmFsaWRhdG9ycy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NtYWNzLWNvbXBvbmVudHMtdjItbGliL3NyYy9saWIvY29tcG9uZW50cy9jb3JlL3NlcnZpY2VzL2N1c3RvbVZhbGlkYXRvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxVQUFVLFNBQVMsQ0FBQyxJQUFVO0lBQ2hDLE9BQU8sQ0FBQyxPQUF3QixFQUEyQixFQUFFO1FBQ3pELDREQUE0RDtRQUM1RCxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRixJQUFJLEtBQUssQ0FBQyxPQUFPLEtBQUssU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssU0FBUyxFQUFFO1lBQzNELHVHQUF1RztZQUN2RyxJQUFJLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7Z0JBQ25DLE9BQU8sRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLENBQUM7Z0JBQUEsQ0FBQzthQUNqQztTQUNKO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQyxDQUFBO0FBQ0wsQ0FBQztBQUVELE1BQU0sVUFBVSxVQUFVLENBQUMsSUFBVTtJQUNqQyxPQUFPLENBQUMsT0FBd0IsRUFBMkIsRUFBRTtRQUN6RCw2REFBNkQ7UUFDN0QsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUYsSUFB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LE9BQXdCLEVBQTJCLEVBQUU7UUFDekQsd0ZBQXdGO1FBQ3hGLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxXQUFXLElBQUksT0FBTyxDQUFDLEtBQUssR0FBRyxZQUFZLEVBQUU7WUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUFBLENBQUM7U0FDbkM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDLENBQUE7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWJzdHJhY3RDb250cm9sLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3JGbiB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFmdGVyRGF0ZShkYXRlOiBEYXRlKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdmFsaWRhdGluZzogJHtjb250cm9sLnZhbHVlfSBhZnRlciAke2RhdGV9YCk7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gY29udHJvbC52YWx1ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQgPyBjb250cm9sLnZhbHVlIDogbmV3IERhdGUoY29udHJvbC52YWx1ZSk7XHJcbiAgICAgICAgaWYgKHZhbHVlLmdldFRpbWUgIT09IHVuZGVmaW5lZCAmJiBkYXRlLmdldFRpbWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAvLyBmaXJzdCB3ZSBtYWtlIHN1cmUgdGhlIHZhbHVlcyBhcmUgYWN0dWFsIGRhdGVzLCB0aGlzIHdpbGwgYXZvaWQgcnVudGltZSBlcnJvcnMgd2l0aCBjb3JydXB0ZWQgdmFsdWVzXHJcbiAgICAgICAgICAgIGlmICh2YWx1ZS5nZXRUaW1lKCkgPD0gZGF0ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7ICdhZnRlckRhdGUnOiB0cnVlIH07O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmVmb3JlRGF0ZShkYXRlOiBEYXRlKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdmFsaWRhdGluZzogJHtjb250cm9sLnZhbHVlfSBiZWZvcmUgJHtkYXRlfWApO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGNvbnRyb2wudmFsdWUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkID8gY29udHJvbC52YWx1ZSA6IG5ldyBEYXRlKGNvbnRyb2wudmFsdWUpO1xyXG4gICAgICAgIGlmICh2YWx1ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQgJiYgZGF0ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gZmlyc3Qgd2UgbWFrZSBzdXJlIHRoZSB2YWx1ZXMgYXJlIGFjdHVhbCBkYXRlcywgdGhpcyB3aWxsIGF2b2lkIHJ1bnRpbWUgZXJyb3JzIHdpdGggY29ycnVwdGVkIHZhbHVlc1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuZ2V0VGltZSgpID49IGRhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAnYmVmb3JlRGF0ZSc6IHRydWUgfTs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VxdWFsVG9EYXRlKGRhdGU6IERhdGUpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGB2YWxpZGF0aW5nOiAke2NvbnRyb2wudmFsdWV9IGlzIGVxdWFsIHRvICR7ZGF0ZX1gKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBjb250cm9sLnZhbHVlLmdldFRpbWUgIT09IHVuZGVmaW5lZCA/IGNvbnRyb2wudmFsdWUgOiBuZXcgRGF0ZShjb250cm9sLnZhbHVlKTtcclxuICAgICAgICBpZiAodmFsdWUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkICYmIGRhdGUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0IHdlIG1ha2Ugc3VyZSB0aGUgdmFsdWVzIGFyZSBhY3R1YWwgZGF0ZXMsIHRoaXMgd2lsbCBhdm9pZCBydW50aW1lIGVycm9ycyB3aXRoIGNvcnJ1cHRlZCB2YWx1ZXNcclxuICAgICAgICAgICAgaWYgKGRhdGUuZ2V0VGltZSgpID09PSB2YWx1ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7ICdpc0VxdWFsVG9EYXRlJzogdHJ1ZSB9OztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90RXF1YWxUb0RhdGUoZGF0ZTogRGF0ZSk6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHZhbGlkYXRpbmc6ICR7Y29udHJvbC52YWx1ZX0gaXMgbm90IGVxdWFsIHRvICR7ZGF0ZX1gKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBjb250cm9sLnZhbHVlLmdldFRpbWUgIT09IHVuZGVmaW5lZCA/IGNvbnRyb2wudmFsdWUgOiBuZXcgRGF0ZShjb250cm9sLnZhbHVlKTtcclxuICAgICAgICBpZiAodmFsdWUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkICYmIGRhdGUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIC8vIGZpcnN0IHdlIG1ha2Ugc3VyZSB0aGUgdmFsdWVzIGFyZSBhY3R1YWwgZGF0ZXMsIHRoaXMgd2lsbCBhdm9pZCBydW50aW1lIGVycm9ycyB3aXRoIGNvcnJ1cHRlZCB2YWx1ZXNcclxuICAgICAgICAgICAgaWYgKGRhdGUuZ2V0VGltZSgpICE9PSB2YWx1ZS5nZXRUaW1lKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7ICdpc05vdEVxdWFsVG9EYXRlJzogdHJ1ZSB9OztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlRGF0ZShmaXJzdERhdGU6IERhdGUsIHNlY29uZERhdGU6IERhdGUpOiBWYWxpZGF0b3JGbiB7XHJcbiAgICByZXR1cm4gKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKGB2YWxpZGF0aW5nOiAke2NvbnRyb2wudmFsdWV9IHJhbmdlICR7Zmlyc3REYXRlfSAmICR7c2Vjb25kRGF0ZX1gKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBjb250cm9sLnZhbHVlLmdldFRpbWUgIT09IHVuZGVmaW5lZCA/IGNvbnRyb2wudmFsdWUgOiBuZXcgRGF0ZShjb250cm9sLnZhbHVlKTtcclxuICAgICAgICBpZiAodmFsdWUuZ2V0VGltZSAhPT0gdW5kZWZpbmVkICYmIGZpcnN0RGF0ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQgJiYgc2Vjb25kRGF0ZS5nZXRUaW1lICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgLy8gZmlyc3Qgd2UgbWFrZSBzdXJlIHRoZSB2YWx1ZXMgYXJlIGFjdHVhbCBkYXRlcywgdGhpcyB3aWxsIGF2b2lkIHJ1bnRpbWUgZXJyb3JzIHdpdGggY29ycnVwdGVkIHZhbHVlc1xyXG4gICAgICAgICAgICBpZiAodmFsdWUuZ2V0VGltZSgpIDw9IGZpcnN0RGF0ZS5nZXRUaW1lKCkgfHwgdmFsdWUuZ2V0VGltZSgpID49IHNlY29uZERhdGUuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4geyAncmFuZ2VEYXRlJzogdHJ1ZSB9OztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdyZWF0ZXJUaGFuKG51bWJlcjogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdmFsaWRhdGluZzogJHtjb250cm9sLnZhbHVlfSBncmVhdGhlciB0aGFuICR7bnVtYmVyfWApO1xyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlIDw9IG51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4geyAnZ3JlYXRlclRoYW4nOiB0cnVlIH07O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxlc3NUaGFuKG51bWJlcjogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdmFsaWRhdGluZzogJHtjb250cm9sLnZhbHVlfSBsZXNzIHRoYW4gJHtudW1iZXJ9YCk7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wudmFsdWUgPj0gbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdsZXNzVGhhbic6IHRydWUgfTs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFcXVhbFRvTnVtYmVyKG51bWJlcjogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdmFsaWRhdGluZzogJHtjb250cm9sLnZhbHVlfSBpcyBlcXVhbCB0byAke251bWJlcn1gKTtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSA9PT0gbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdpc0VxdWFsVG9OdW1iZXInOiB0cnVlIH07O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzTm90RXF1YWxUb051bWJlcihudW1iZXI6IG51bWJlcik6IFZhbGlkYXRvckZuIHtcclxuICAgIHJldHVybiAoY29udHJvbDogQWJzdHJhY3RDb250cm9sKTogVmFsaWRhdGlvbkVycm9ycyB8IG51bGwgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coYHZhbGlkYXRpbmc6ICR7Y29udHJvbC52YWx1ZX0gaXMgbm90IGVxdWFsIHRvICAke251bWJlcn1gKTtcclxuICAgICAgICBpZiAoY29udHJvbC52YWx1ZSAhPT0gbnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdpc05vdEVxdWFsVG9OdW1iZXInOiB0cnVlIH07O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmdlTnVtYmVyKGZpcnN0TnVtYmVyOiBudW1iZXIsIHNlY29uZE51bWJlcjogbnVtYmVyKTogVmFsaWRhdG9yRm4ge1xyXG4gICAgcmV0dXJuIChjb250cm9sOiBBYnN0cmFjdENvbnRyb2wpOiBWYWxpZGF0aW9uRXJyb3JzIHwgbnVsbCA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgdmFsaWRhdGluZzogJHtjb250cm9sLnZhbHVlfSBpcyByYW5nZSAke2ZpcnN0TnVtYmVyfSAmICR7c2Vjb25kTnVtYmVyfWApO1xyXG4gICAgICAgIGlmIChjb250cm9sLnZhbHVlIDwgZmlyc3ROdW1iZXIgfHwgY29udHJvbC52YWx1ZSA+IHNlY29uZE51bWJlcikge1xyXG4gICAgICAgICAgICByZXR1cm4geyAncmFuZ2VOdW1iZXInOiB0cnVlIH07O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxufSJdfQ==
/**
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { __rest } from "tslib";
function stripPercentToNumber(percent) {
    return +percent.replace('%', '');
}
export const sortGradient = (gradients) => {
    let tempArr = [];
    Object.keys(gradients).forEach(key => {
        const value = gradients[key];
        const formatKey = stripPercentToNumber(key);
        if (!isNaN(formatKey)) {
            tempArr.push({
                key: formatKey,
                value
            });
        }
    });
    tempArr = tempArr.sort((a, b) => a.key - b.key);
    return tempArr;
};
export const handleCircleGradient = (strokeColor) => {
    return sortGradient(strokeColor).map(({ key, value }) => ({ offset: `${key}%`, color: value }));
};
export const handleLinearGradient = (strokeColor) => {
    const { from = '#1890ff', to = '#1890ff', direction = 'to right' } = strokeColor, rest = __rest(strokeColor, ["from", "to", "direction"]);
    if (Object.keys(rest).length !== 0) {
        const sortedGradients = sortGradient(rest)
            .map(({ key, value }) => `${value} ${key}%`)
            .join(', ');
        return `linear-gradient(${direction}, ${sortedGradients})`;
    }
    return `linear-gradient(${direction}, ${from}, ${to})`;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9jbWFjcy1jb21wb25lbnRzLXYyLWxpYi9zcmMvbGliL2NvbXBvbmVudHMvY21hY3MtcHJvZ3Jlc3MvdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztBQUlILFNBQVMsb0JBQW9CLENBQUMsT0FBZTtJQUMzQyxPQUFPLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDbkMsQ0FBQztBQUVELE1BQU0sQ0FBQyxNQUFNLFlBQVksR0FBRyxDQUFDLFNBQXFDLEVBQUUsRUFBRTtJQUNwRSxJQUFJLE9BQU8sR0FBMEMsRUFBRSxDQUFDO0lBRXhELE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ25DLE1BQU0sS0FBSyxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM3QixNQUFNLFNBQVMsR0FBRyxvQkFBb0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxJQUFJLENBQUM7Z0JBQ1gsR0FBRyxFQUFFLFNBQVM7Z0JBQ2QsS0FBSzthQUNOLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hELE9BQU8sT0FBTyxDQUFDO0FBQ2pCLENBQUMsQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLENBQUMsV0FBdUMsRUFBNEMsRUFBRTtJQUN4SCxPQUFPLFlBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbEcsQ0FBQyxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxXQUFvQyxFQUFFLEVBQUU7SUFDM0UsTUFBTSxFQUFFLElBQUksR0FBRyxTQUFTLEVBQUUsRUFBRSxHQUFHLFNBQVMsRUFBRSxTQUFTLEdBQUcsVUFBVSxLQUFjLFdBQVcsRUFBcEIsSUFBSSxVQUFLLFdBQVcsRUFBbkYsMkJBQXFFLENBQWMsQ0FBQztJQUMxRixJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNsQyxNQUFNLGVBQWUsR0FBRyxZQUFZLENBQUMsSUFBa0MsQ0FBQzthQUNyRSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLElBQUksR0FBRyxHQUFHLENBQUM7YUFDM0MsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2QsT0FBTyxtQkFBbUIsU0FBUyxLQUFLLGVBQWUsR0FBRyxDQUFDO0tBQzVEO0lBQ0QsT0FBTyxtQkFBbUIsU0FBUyxLQUFLLElBQUksS0FBSyxFQUFFLEdBQUcsQ0FBQztBQUN6RCxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqL1xuXG5pbXBvcnQgeyBOelByb2dyZXNzQ29sb3JHcmFkaWVudCwgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MgfSBmcm9tICcuL3R5cGluZ3MnO1xuXG5mdW5jdGlvbiBzdHJpcFBlcmNlbnRUb051bWJlcihwZXJjZW50OiBzdHJpbmcpOiBudW1iZXIge1xuICByZXR1cm4gK3BlcmNlbnQucmVwbGFjZSgnJScsICcnKTtcbn1cblxuZXhwb3J0IGNvbnN0IHNvcnRHcmFkaWVudCA9IChncmFkaWVudHM6IE56UHJvZ3Jlc3NHcmFkaWVudFByb2dyZXNzKSA9PiB7XG4gIGxldCB0ZW1wQXJyOiBBcnJheTx7IGtleTogbnVtYmVyOyB2YWx1ZTogc3RyaW5nIH0+ID0gW107XG5cbiAgT2JqZWN0LmtleXMoZ3JhZGllbnRzKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBncmFkaWVudHNba2V5XTtcbiAgICBjb25zdCBmb3JtYXRLZXkgPSBzdHJpcFBlcmNlbnRUb051bWJlcihrZXkpO1xuICAgIGlmICghaXNOYU4oZm9ybWF0S2V5KSkge1xuICAgICAgdGVtcEFyci5wdXNoKHtcbiAgICAgICAga2V5OiBmb3JtYXRLZXksXG4gICAgICAgIHZhbHVlXG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIHRlbXBBcnIgPSB0ZW1wQXJyLnNvcnQoKGEsIGIpID0+IGEua2V5IC0gYi5rZXkpO1xuICByZXR1cm4gdGVtcEFycjtcbn07XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDaXJjbGVHcmFkaWVudCA9IChzdHJva2VDb2xvcjogTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpOiBBcnJheTx7IG9mZnNldDogc3RyaW5nOyBjb2xvcjogc3RyaW5nIH0+ID0+IHtcbiAgcmV0dXJuIHNvcnRHcmFkaWVudChzdHJva2VDb2xvcikubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gKHsgb2Zmc2V0OiBgJHtrZXl9JWAsIGNvbG9yOiB2YWx1ZSB9KSk7XG59O1xuXG5leHBvcnQgY29uc3QgaGFuZGxlTGluZWFyR3JhZGllbnQgPSAoc3Ryb2tlQ29sb3I6IE56UHJvZ3Jlc3NDb2xvckdyYWRpZW50KSA9PiB7XG4gIGNvbnN0IHsgZnJvbSA9ICcjMTg5MGZmJywgdG8gPSAnIzE4OTBmZicsIGRpcmVjdGlvbiA9ICd0byByaWdodCcsIC4uLnJlc3QgfSA9IHN0cm9rZUNvbG9yO1xuICBpZiAoT2JqZWN0LmtleXMocmVzdCkubGVuZ3RoICE9PSAwKSB7XG4gICAgY29uc3Qgc29ydGVkR3JhZGllbnRzID0gc29ydEdyYWRpZW50KHJlc3QgYXMgTnpQcm9ncmVzc0dyYWRpZW50UHJvZ3Jlc3MpXG4gICAgICAubWFwKCh7IGtleSwgdmFsdWUgfSkgPT4gYCR7dmFsdWV9ICR7a2V5fSVgKVxuICAgICAgLmpvaW4oJywgJyk7XG4gICAgcmV0dXJuIGBsaW5lYXItZ3JhZGllbnQoJHtkaXJlY3Rpb259LCAke3NvcnRlZEdyYWRpZW50c30pYDtcbiAgfVxuICByZXR1cm4gYGxpbmVhci1ncmFkaWVudCgke2RpcmVjdGlvbn0sICR7ZnJvbX0sICR7dG99KWA7XG59O1xuIl19
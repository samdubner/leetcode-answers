var merge = function(intervals) {
    intervals = intervals.sort((a,b) => a[0] - b[0]);
    let returnArr = [intervals[0]];
    
    for(let i = 1; i < intervals.length; i++) {
        let prevInterval = returnArr[returnArr.length - 1];
        let currInterval = intervals[i];
        
        if (currInterval[0] <= prevInterval[1] && currInterval[1] >= prevInterval[1]) {
            prevInterval[1] = currInterval[1];
        } else if (currInterval[0] <= prevInterval[1]) {
            continue;
        } else {
            returnArr.push(currInterval);
        }
    }
    
    return returnArr;
};
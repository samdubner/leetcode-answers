  var canAttendMeetings = function (intervals) {
    intervals.sort((a, b) => a.start - b.start);

    for (let i = 1; i < intervals.length; i++) {
        let currStart = intervals[i].start;
        let prevEnd = intervals[i - 1].end;

        if (currStart < prevEnd) return false;
    }

    return true;
  }
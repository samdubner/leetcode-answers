var lengthOfLongestSubstring = function(s) {
    if (!s.length) return 0;
    let len = 1;
    let currString = s[0];
    
    for(let i = 1; i < s.length; i++) {
        if (currString.includes(s[i])) {
            len = Math.max(len, currString.length);
            currString = currString.slice(currString.indexOf(s[i]) + 1);
        }
        
        currString = currString.concat(s[i])
    }
    
    return Math.max(currString.length, len);
};
var buildArray = function(nums) {
    let res = new Array(nums.length)    
    
    for(let i = 0; i < nums.length; i++) {
        res[i] = nums[nums[i]];
    }
    
    return res;
}
 var trap = function(height) {
    let water = 0;
    
    let length = height.length;
    let leftMax = new Array(length);
    let rightMax = new Array(length);
    
    leftMax[0] = height[0]
    rightMax[length - 1] = height[length - 1]
    
    let i = 1;
    let j = length - 2;
    while (i < height.length) {
        leftMax[i] = Math.max(height[i], leftMax[i - 1]);
        rightMax[j] = Math.max(height[j], rightMax[j + 1]);
        
        i++;
        j--;
    }
    
    for (let i = 0; i < length; i ++) {
        let lesserMax = Math.min(leftMax[i], rightMax[i]);
        water += lesserMax - height[i];
    }
    
    return water;
};
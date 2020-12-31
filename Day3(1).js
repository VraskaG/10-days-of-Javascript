function getSecondLargest(nums) {
    // Complete the function
    nums.sort(function(a, b) {return a < b;});
    let first = nums[0]
    let i = 0
    while(first == nums[i]){
        i++
    }
    first = nums[i]
    return first
}

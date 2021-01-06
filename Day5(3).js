function modifyArray(nums) {
    var mul = (s) => {
        if (s % 2 == 0)
        {
          return s * 2  
        }
        else
            return s * 3
    }
    return nums.map(m => mul(m))
}
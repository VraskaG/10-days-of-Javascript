function getMaxLessThanK(n,k){
    var max_ret = 0
    for(let a = 1; a < n ; a++){
        for(let b = a + 1; b < n + 1; b++)
        {
            if((a & b) < k && (a & b) > max_ret)
            {
                max_ret = (a & b)
            }
        }
    }
    return max_ret
}
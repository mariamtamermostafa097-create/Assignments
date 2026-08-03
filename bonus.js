var findKthPositive = function(arr, k) {
    let i = 0;
    let num = 1;

    while (k > 0) {
        if (i < arr.length && arr[i] === num) {
            i++;
        } else {
            k--;
        }

        if (k === 0) {
            return num;
        }

        num++;
    }
};
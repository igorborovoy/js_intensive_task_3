function myForEach(arr, callback, thisArg) {
    if (typeof callback !== 'function') {
        throw new Error(`${callback} is not a function`);
    }
    if (!Array.isArray(arr)) {
        throw new Error(`first argument must be array`);
    }
    if (arr.length == 0) {
        throw new Error('array is empty');
    }
    for (i = 0; i < arr.length; i++) {
        callback.call(thisArg, arr[i], i, arr)
    }
}
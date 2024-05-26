//use normal loop
var sum_to_n_a = function (n) {
    let sum = 0
    do {
        sum += n
    } while (--n)
    return sum
};

//use recursion
var sum_to_n_b = function (n) {
    if(n === 1) return 1
    return n + sum_to_n_b(n-1)
};

//use formula
var sum_to_n_c = function (n) {
    return n*(n+1)/2
};

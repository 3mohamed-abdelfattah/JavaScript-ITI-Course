function outerFunction() {
    var arr = []
    for (var i = 0; i < 10; i++) {
        arr.push((function (j) {
            return function () {
                console.log(j);
            }
        })(i));
    }
    return arr;
}

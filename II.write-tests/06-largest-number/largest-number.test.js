// example
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed
var getLargestNumber = require('./largest-number');
test("getLargestNumber", function(){
    var array = [3, 21 , 88, 4 , 36];
    var result = getLargestNumber(array);
    expect(result).toEqual([88]);
})
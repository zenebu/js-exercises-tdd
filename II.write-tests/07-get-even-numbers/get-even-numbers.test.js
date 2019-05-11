// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
var getEven = require('./get-even-numbers');
test("get even" , function(){
    var array = [22,13,73,82,4];
    var result = getEven(array);
    expect(result).toEqual([22, 82 ,4]); 
})
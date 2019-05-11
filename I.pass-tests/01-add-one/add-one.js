function addOne(arrayOfNumbers)
{
    return arrayOfNumbers.map(function(element){
        return element + 1;
    });
}

module.exports = addOne;

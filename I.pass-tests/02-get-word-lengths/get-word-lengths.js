var words = ["sun", "potato", "roundabout", "pizza"]

const getLength = function(word){
    return word.length
} 

var getWordLengths = function(words) {
    var result = words.map(getLength);
    return result
}

getWordLengths(words);


module.exports = getWordLengths;

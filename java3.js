swap = function swap(str) {
    return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, char) {
        return char ? match.toUpperCase() : match.toLowerCase();
    });
}
console.log(swap('The Quick Brown Fox'));
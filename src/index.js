module.exports = function reverse (n) {
    let s = '';
    let reversedStr = '';

    if (n < 0){
        n *= (-1);
    }

    s = n.toString();

    for (let i = s.length - 1; i >= 0; i--) {
    reversedStr += s[i];
    }
    return (Number(reversedStr));
}

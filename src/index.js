module.exports = function check(str, bracketsConfig) {
    let arr = str.split("");

    for (let i = 0; i < bracketsConfig.length; i++) {
        bracketsConfig[i] = bracketsConfig[i][0] + bracketsConfig[i][1];
    }

    let i = 0;
    while (i < arr.length) {
        if (bracketsConfig.includes(arr[i] + arr[i + 1])) {
            arr.splice(i, 2);
            i = 0;
        } else i++;
    }

    return arr.length === 0;
};

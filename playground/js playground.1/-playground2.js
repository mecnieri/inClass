function sorting(n) {

    let str = n.toString().split("")
    str
    let sort = str.sort()
    if (sort[0] < sort[sort.length - 1]) {
        return parseInt(sort.reverse().join("").toString())
    } else {
        return parseInt(sort.toString())
    }

}

console.log(sorting(2));
console.log(typeof(sorting(111)));
class HashTable {
    constructor() {
        this.table = new Array(255);
    }
    add(value) {
        this.table[this.hash(value, 255)] = value;
    }
    check(value) {
        return !!this.table[this.hash(value, 255)]
    }
    hash(value, max) {
        let num = 0;
        for (let i = 0; i < value.length; i++) {
            num += value.charCodeAt(i) * i
        }
        return num % max;
    }

    remove(value) {
        if (this.check(value, 255)) {
            delete this.table[this.hash(value, 255)]
        }
    }

}

let hTable = new HashTable()

console.log(hTable.add("test"));
console.log(hTable.table);
console.log(hTable.table[169]);
console.log(hTable.hash('test', 255))
console.log(hTable.check('test', 255));
hTable.remove('test');

console.log(hTable.table);
console.log(hTable.table[169]);

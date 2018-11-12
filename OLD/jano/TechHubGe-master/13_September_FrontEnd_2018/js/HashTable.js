class HashTable {
    constructor(){
        this.table = new Array(255);
    }

    add(value){
        this.table[this.hash(value, 255)] = value; 
    }

    check(value){
        return !!this.table[this.hash(value, 255)];
    }  

    hash(value, max){
        let num = 0;
        for ( let i = 0; i < value.length; i++){
            num += value.charCodeAt(i) * i;
        }
        return num % max;
    }  
}

let hTable = new HashTable();
console.log( hTable.hash('HastTables Example', 100) );

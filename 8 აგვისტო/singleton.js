class Database {
    constructor(dbName) {
        if (Database.exsists) {
            return Database.instance;
            debugger
        }
        this._dbName = dbName;
        Database.instance = this;
        Database.exsists = true;

        return this;
    }

    getData() {
        return this._dbName;
    }


    setData(value) {
        this._dbName = value;
    }
}

const mysql = new Database('MySQL')
console.log(mysql.getData());

const mongoDb = new Database('MongoDM')
console.log(mongoDb.getData());
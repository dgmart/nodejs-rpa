// TODO: transformar este "banco" em memória para MySQL ou MariaDB
class Database {
    constructor() {
        this.database = []
    }

    checkTableName(tableName) {
        if (undefined == this.database[tableName]) {
            this.database[tableName] = []
        }
    }

    count(tableName) {
        this.checkTableName(tableName)
        return this.database[tableName].length
    }

    findAll(tableName) {
        this.checkTableName(tableName)
        return this.database[tableName]
    }

    insert(tableName, entity) {
        this.checkTableName(tableName)
        entity.id = this.database[tableName].length + 1
        this.database[tableName].unshift(entity)
        return entity
    }
}

module.exports = new Database()

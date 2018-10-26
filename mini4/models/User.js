class User {
    constructor() { 
        this.users = [] 
    } 
    getAllUsers() { 
        return this.users; 
    } 
    getUserById(userId) { 
        return this.users.find(u => u.id == userId); 
    } 
    addUser(user) { 
        this.users.push(user); 
    } 
    updateUser(userId, user) { 
        idx = this.users.findIndex(m => m.id == userId); 
        this.users[idx] = user; 
    } 
    deleteUser(userId) { 
        idx = this.users.findIndex(m => m.id == userId); 
        this.users.splice(idx, 1); 
    } 
}
module.exports = User;

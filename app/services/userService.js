const dbManager = new (require('../db/dbmanager'));

class UserService {
    constructor() {
        this.users = [{
            id: 1,
            name: "victor"
        }, {
            id: 2,
            name: "ricardo"
        }]
    }

    async createUser(user) {
        console.log(user);
        const insertUserSQL = `INSERT INTO users 
        (user, password, encrypted_password, salt, email) 
        VALUES 
        ('${user.user}', '${user.password}', '${user.encryptedPassword}', '${user.salt}', '${user.email}')`;
        const response = await dbManager.execute('wepapi', insertUserSQL);
        const userId = response.insertId;
        return userId;
    }

    async getUserByUsername(username) {
        const selectUserSQL = `SELECT * FROM users 
        WHERE ucase(user) = '${username}'`;
        const response = await dbManager.execute('wepapi', selectUserSQL);
        return response;
    }

    getUsers() {
        return this.users;
    }

    getUserById(id) {
        let returnUser = {};
        this.users.forEach(user => {
            if (user.id == id) {
                returnUser = user;
            }
        });
        return returnUser;
    }
}

module.exports = new UserService();
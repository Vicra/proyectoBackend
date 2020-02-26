
class UserService{
    constructor(){
        this.users = [{
            id: 1,
            name: "victor"
        },{
            id:2,
            name: "ricardo"
        }]
    }

    getUsers(){
        return this.users;
    }

    getUserById(id){
        let returnUser = {};
        this.users.forEach(user => {
            if (user.id == id) {
                returnUser =  user;
            }
        });
        return returnUser;
    }
}

module.exports = new UserService();
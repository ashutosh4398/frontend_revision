// static methods and propeeties

class USer {

    // assign id to each user and increment by 1
    // using static property in this case
    // kind of like class variables
    static _id = 1;

    constructor(name, age) {
        this.name = name
        this.age = age
        this.id = USer._id ++;
    }


    // static method
    static sortUsers(user1, user2) {
        return user1.age - user2.age
    }
}

const u1 = new USer("Ashutosh", 25);
const u2 = new USer('John', 20);

const users = [u1, u2]

console.log(users)
users.sort(USer.sortUsers)
console.log(users)
const mongoose = require("mongoose");
const User =require('./User.js');
 
main().catch(err => console.log(err.message));

async function main() {
await mongoose.connect('mongodb://127.0.0.1:27017/testdb');

const user = await User.create({ 
    name: "Joe", 
    age: 22,
    email: "joe2510@gmail.com",
    hobbies: ["Codding", "Cooking"],
    address: {
        street: "Veerapuram st",
        city: "MWC"
    }
 });
 user.createdAt = 8;
console.log(user);

const user0 = await User.findById("65422fd280affc2d79003518");
console.log(user0);

const user1 = await User.find({name: "Joe"});
console.log(user1);

const user2 = await User.findOne({name: "Joe"});
console.log(user2);

const user3 = await User.exists({name: "Joe"});
console.log(user3);

const user4 = await  User
    .where ("name")
    .equals("Joe")
    .where("age")
    .lt(25)
    .limit(2);
console.log(user4);

const user5 = await  User
    .where ("name")
    .equals("Joe")
    .where("age")
    .lt(25)
    .limit(2)
    .select("age");
console.log(user5);

const user6 = await  User
    .where ("name")
    .equals("Joe")
    .where("age")
    .lt(25)
    .limit(1)
    .populate("bestFriend")
    user6[0].bestFriend = "65423ce59f64e8e72b5022d6";

console.log(user6);

await User.deleteOne({});

const user7 = await User.findOne({name: "Joe"});
user7.sayHi();
console.log(user7);

const user8 = await User.findByName("Joe");         //statics
console.log(user8);

const user9 = await User.find().byName("Joe");      //query
console.log(user9);

const user10 = await User.findOne({name: "Joe"});       //virtual
console.log(user10.namedEmail);
console.log(user10);

const user11 = await User.findOne({name: "Joe"});       //Middleware
console.log(user11);
user11.save();
console.log(user11);

}
    // await user6[0].save();
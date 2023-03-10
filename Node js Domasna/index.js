const fs = require('fs');
const moment = require('moment');

class User {
  constructor(username, password, age, isActive = true) {
    this.username = username;
    this.password = password;
    this.age = age;
    this.isActive = isActive;
    this.dateCreated = moment().format('YYYY-MM-DD HH:mm:ss');
  }

  toJSON() {
    return {
      username: this.username,
      password: this.password,
      age: this.age,
      isActive: this.isActive,
      dateCreated: this.dateCreated,
    };
  }
}

const users = [
  new User('user1', 'pass1', 25),
  new User('user2', 'pass2', 35),
  new User('user3', 'pass3', 45, false),
  new User('user4', 'pass4', 20),
  new User('user5', 'pass5', 30),
  new User('user6', 'pass6', 40),
  new User('user7', 'pass7', 55),
  new User('user8', 'pass8', 28),
  new User('user9', 'pass9', 22, false),
  new User('user10', 'pass10', 33),
];


fs.writeFile('users.json', JSON.stringify(users, null, 2), err => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('Users written to file.');
});



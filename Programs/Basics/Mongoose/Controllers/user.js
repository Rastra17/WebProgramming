const User = require("../Models/User")

const saveUser = async () => {
    const user = await User.create({
        name: "Resai",
        age: 21
    })
    
    console.log("User Saved")
    console.log(user)
}

module.exports = saveUser
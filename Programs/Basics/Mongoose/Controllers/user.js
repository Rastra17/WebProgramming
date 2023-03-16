const User = require("../Models/User")

const saveUser = async () => {
    const user = new User({
        name: "Resai",
        age: 21
    })
    
    await user.save()
    console.log("User Saved")
    console.log(user)
}

module.exports = saveUser
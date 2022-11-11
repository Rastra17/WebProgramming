const os = require("os") //Use of core libraries
const path = require("path")
const fs = require("fs")

// let data = fs.readFileSync("./example.txt")
// console.log(data.toString())

fs.readFile("./example.txt", "utf-8", (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log(data)
})

fs.writeFile("./reply.txt", "This is wonderful", (err) => {
    if (err) {
        console.error(err)
    }
    fs.appendFile("./reply.txt", "\nGood to see you", (err) => {
        if (err) {
            console.error(err)
        }
        fs.rename("./reply.txt", "demo.txt", (err) => {
            if (err) {
                console.error(err)
            }
        })
    })
    console.log("Successful")
})

// console.log(os.version())
// console.log(os.type())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)
// console.log(path.parse(__filename).ext)
// console.log(path.extname(__filename))
// console.log(path.basename(__filename))


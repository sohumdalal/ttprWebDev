import fs from 'fs'

fs.readFile('example.txt', 'utf8', (error, data) => {

    if(error) {
        console.log(error)
        return
    }
    console.log(data)
})

// fs.writeFile('newExample.txt', "I wrote this line hehehaha", (err) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log("successfully wrote to file")
// })


// const filePath = 'example.txt'
// const textToAppend = 'Appending new data to the file is easy with Node.js.'

// fs.appendFile(filePath, `\n${textToAppend}`, (err) => {
//     if (err) {
//         console.log(err)
//         return
//     }
//     console.log("successfully appeneded to file")
// })


// fs.unlink('newExample.txt', (err) => {
//     if(err) {
//         console.log(err)
//     }
//     console.log("file successfully deleted")
// })
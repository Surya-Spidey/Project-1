// let a = ["a", "b", "c", "d", "e"];
// for (let i = 0; i < a.length; i++) {
//     console.log(a[i]);
// }
// let a = {
//     name : "John",
//     age : 30,
//     city : "New York"
// }
// a.name = "Jane";
// console.log(a.name);~
// let b = [ {name : "Surya", age : 22}, {name : "Siva", age : 25}];
// console.log(b[0].name);

import express from "express";  // Importing the Express library to create a web server
const app = express();      // Creating an instance of the Express application
const port = 3000;

app.get("/", (req,res) => {
    res.send("<h1>HELLO WORLD</h1>");   //  Sending "Hello World" as a response via GET method
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);  // Hosting a server on port 3000 via LISTEN method
});
// console.log("Starting")
// const fs = require("fs")


// write  text in file
//Asynchronous file write

// fs.writeFile("./WriteFile.txt","WriteFile.js from FS module",(err)=>{})


//sync file write
// fs.writeFileSync("./WriteFile.txt","WriteFile.js from FS module")


// const result = fs.readFileSync("./WriteFile.txt","utf-8")
// console.log("result",result);

// fs.readFile("./WriteFile.txt",{encoding:"utf-8"},(err,data)=>{
//     if(err){
//         console.log("Error",err);
//     }else{
//         console.log("Data",data);
//     }
// })

// Node js Architecture

// client ---------------------> server(Nodejs server) 

//  whrn user request to server then request goes to Event Queue of nodejs server and event queue goes to 
//  event loop which is look continuslly looking for request and event loop work on FIFO(First and Firts Out).
// client request may be blocking(sync) or non-blocking(async). when event loop take client request first check 
// request type like this is blocking or non-blockin. if request is non-blocking than complete the process and send response to user(cleint).

// if request is blocking than its goes to thread-pool 
// tread pool is collection of thread or you can say worker which be half of your instruction and this thread pool is responsible for your blocking operation.
// and important is thread is limited(default is 4 thred) so its check any thread(worker) is free if free than assign request to worker than worker complete the process and return the response than come to thres pool again


// const os = require('os');
// console.log("os",os.userInfo())



//  create http server 
const http = require('http');

// in http module we have one fuction createServer() which create server to us using http module

const myServer = http.createServer((req, res) => {
    console.log(req)
    res.end("hello world! form server!")
})

myServer.listen(4444,console.log("server listening"))


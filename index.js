const fs = require("fs");

// thats appendFile is use to push content to file
fs.appendFile("hey.txt", "me too acha hoon", (err) => {
  if (err) console.log(err);
  else console.log("done");
});



// this function is used to read a content inside the file
fs.readFile("hello.txt", "utf-8", (err, data) =>{
    if(err) console.log(err);
    else console.log("done", data);
})



// thats rename function is used to rename the file name
fs.rename("hey.txt", "hello.txt", (err) => {
  if (err) console.log(err);
  else console.log("done");
});



// that copy file function is used to make a copy of the file
fs.copyFile("hello.txt", "./copy/copy.txt", (err) =>{
    if(err) console.log(err)
    else console.log("done");
})



// that unLink function is used to del the existing file
fs.unlink("hello.txt", (err) => {
  if (err) console.log(err);
  else console.log("done");
});



// fs.rm is used to delete the folder. Without recusive true the folder is deleted if it is empty...
fs.rm("./copy", {recursive:true}, (err) =>{
    if(err) console.log(err);
    else console.log("done");
})



// this function is used to create a new folder
fs.mkdir("copy", (err) =>{
    if(err) console.log(err);
    else console.log("folder create");
})



// this function is used to read the directory
fs.readdir(".", (err, file) =>{
    if(err) console.log(err);
    else console.log(file);   
})



// thats function is use to check file/folder is exist or not
if(fs.existsSync("hello.txt")){
    console.log("folder/file exist");
}else{
    console.log("folder/file not exist");
    
}
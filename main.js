const path = require("path");
const fs = require("fs");
const os = require("os");
const EventEmitter = require("events");
const zlib = require("zlib");
//Write a function that logs the current file path and directory?
function currentPath() {
    console.log("File:", __filename);
    console.log("Dir:", __dirname);
}
currentPath();

//Write a function that takes a file path and returns its file name?
function getFileName(filePath) {
    return path.basename(filePath);
}
console.log(getFileName("/tia/desktop/report.pdf"));

//Write a function that builds a path from an object?
function buildPath(obj) {
    return path.format(obj);
}
console.log(buildPath({ dir: "/file",
     name: "main", 
     ext: ".js" }));

     //Write a function that returns the file extension from a given file path?
     function getExtension(filePath) {
    return path.extname(filePath);
}
console.log(getExtension("/docs/main.js"
));

//Write a function that parses a given path and returns its name and ext?
function parseFile(filePath) {
    const parsed = path.parse(filePath);
    return { Name: parsed.name,
        Ext: parsed.ext
    };
}
console.log(parseFile("/home/app/report.pdf"));

//Write a function that checks whether a given path is absolute?
function checkAbsolute(filePath) {
    return path.isAbsolute(filePath);
}
console.log(checkAbsolute("/home/user/file.txt"));

//Write a function that joins multiple segments?
function joinSegments() {
    return path.join("src", "components", "App.js");
}
console.log(joinSegments());

//Write a function that resolves a relative path to an absolute one?
function resolvePath(relativePath) {
    return path.resolve(relativePath);
}
console.log(resolvePath("./main.js"));

//Write a function that joins two paths?
function joinPaths(path1, path2) {
    return path.join(path1, path2);
}
console.log(joinPaths("/folder1", "folder2/file.txt"));

//Write a function that deletes a file asynchronously?
function deleteFile(filePath) {
    fs.unlink(filePath, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("The file.txt is deleted.");
        }
    });
}
deleteFile("./file.txt");

//Write a function that creates a folder synchronously?
function createFolder(folderName) {
    fs.mkdirSync(folderName, { recursive: true });
    console.log("Success");
}
createFolder("folder1");
//Create an event emitter that listens for a "start" event and logs a welcome message?
const emitter = new EventEmitter();

emitter.on("start", () => {
    console.log("Welcome event triggered!");
});

emitter.emit("start");

//Emit a custom "login" event with a username parameter?
emitter.on("login", (username) => {
    console.log(`User logged in: ${username}`);
});

emitter.emit("login", "Tia");

//Read a file synchronously and log its contents?
function readFile(filePath) {
    const data = fs.readFileSync(filePath, "utf8");
    console.log(data);
}
readFile("./notes.txt");

//Write asynchronously to a file?
function writeFile(filePath, content) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Async save");
        }
    });
}
writeFile("./async.txt", "Async save");

//Check if a directory exists?
function directoryExists(folderPath) {
    return fs.existsSync(folderPath);
}
console.log(directoryExists("./"));


//Write a function that returns the OS platform and CPU architecture?
function systemInfo() {
    return {
        Platform: os.platform(),
        Arch: os.arch()
    };
}
console.log(systemInfo());

//Use a readable stream to read a file in chunks and log each chunk?
function readChunks(filePath) {
    const stream = fs.createReadStream(filePath, "utf8");

    stream.on("data", (chunk) => {
        console.log(chunk);
    });
}
readChunks("./big.txt");

//Use readable and writable streams to copy content from one file to another?
function copyFile(source, destination) {
    const read = fs.createReadStream(source);
    const write = fs.createWriteStream(destination);

    read.pipe(write);

    console.log("File copied using streams");
}
copyFile("./notes.txt", "./bid.txt");

//Create a pipeline that reads a file, compresses it, and writes it to another file?
function compressFile(source, destination) {
    const read = fs.createReadStream(source);
    const write = fs.createWriteStream(destination);
    const gzip = zlib.createGzip();

    read.pipe(gzip).pipe(write);

    console.log("File compressed");
}
compressFile("./big.txt", "./big.txt.gz");
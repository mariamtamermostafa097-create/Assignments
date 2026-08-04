const http = require("http");
const fs = require("fs");

function readUsers() {
    const data = fs.readFileSync("./users.json", "utf8");
    return JSON.parse(data || "[]");
}

function writeUsers(data) {
    fs.writeFileSync("./users.json", JSON.stringify(data, null, 2));
}

const server = http.createServer((req, res) => {
    const method = req.method;
    const url = req.url;

    res.setHeader("Content-Type", "application/json");

    // 1. Add User (POST /user)
    if (url === "/user" && method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const newUser = JSON.parse(body);
            const users = readUsers();

            const found = users.find(u => u.email === newUser.email);
            if (found) {
                res.statusCode = 400;
                return res.end(JSON.stringify({ message: "Email already exists." }));
            }

            newUser.id = users.length > 0 ? users[users.length - 1].id + 1 : 1;
            users.push(newUser);
            writeUsers(users);

            res.statusCode = 201;
            res.end(JSON.stringify({ message: "User added successfully." }));
        });
    }

    // 2. Update User (PATCH /user/:id)
    else if (url.startsWith("/user/") && method === "PATCH") {
        const id = Number(url.split("/")[2]);
        let body = "";

        req.on("data", (chunk) => {
            body += chunk;
        });

        req.on("end", () => {
            const data = JSON.parse(body);
            const users = readUsers();
            const index = users.findIndex(u => u.id === id);

            if (index === -1) {
                res.statusCode = 404;
                return res.end(JSON.stringify({ message: "User ID not found." }));
            }

            if (data.name) users[index].name = data.name;
            if (data.age) users[index].age = data.age;
            if (data.email) users[index].email = data.email;

            writeUsers(users);
            res.end(JSON.stringify({ message: "User age updated successfully." }));
        });
    }

    // 3. Delete User (DELETE /user/:id)
    else if (url.startsWith("/user/") && method === "DELETE") {
        const id = Number(url.split("/")[2]);
        const users = readUsers();
        const index = users.findIndex(u => u.id === id);

        if (index === -1) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ message: "User ID not found." }));
        }

        users.splice(index, 1);
        writeUsers(users);
        res.end(JSON.stringify({ message: "User deleted successfully." }));
    }

    // 4. Get All Users (GET /user)
    else if (url === "/user" && method === "GET") {
        const users = readUsers();
        res.end(JSON.stringify(users));
    }

    // 5. Get User by ID (GET /user/:id)
    else if (url.startsWith("/user/") && method === "GET") {
        const id = Number(url.split("/")[2]);
        const users = readUsers();
        const user = users.find(u => u.id === id);

        if (!user) {
            res.statusCode = 404;
            return res.end(JSON.stringify({ message: "User not found." }));
        }

        res.end(JSON.stringify(user));
    } 
    
    else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: "Not Found" }));
    }
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});

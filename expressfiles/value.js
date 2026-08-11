const http = require("http");

let message = "";

const server = http.createServer((req, res) => {

    // Show form
    if (req.method === "GET" && req.url === "/") {

        res.setHeader("Content-Type", "text/html");

        res.end(`
            <h3>${message}</h3>

            <form action="/message" method="POST">
                <input type="text" name="message">
                <button type="submit">Send</button>
            </form>
        `);
    }

    // Receive message
    else if (req.method === "POST" && req.url === "/message") {

        let body = [];

        req.on("data", (chunk) => {
            body.push(chunk);
        });

        req.on("end", () => {
            let buffer = Buffer.concat(body);
            let formData = buffer.toString();
            console.log(formData);
            
            let newMessage = formData.split("=")[1];
            newMessage = decodeURIComponent(newMessage);
            message = newMessage.replace(/ /g, "+");
            console.log(message);
            res.statusCode = 302;
            res.setHeader("Location", "/");
            res.end();
        });
    }

    else {
        res.statusCode = 404;
        res.end("<h1>Page Not Found</h1>");
    }
});

const port = 3000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
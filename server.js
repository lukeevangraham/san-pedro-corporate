const http = require("http")

const PORT = 3059;


handleRequest = (req, res) => {
    res.end("It Works!! Path Hit: " + req.url);
}

const server = http.createServer(handleRequest)

server.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
})
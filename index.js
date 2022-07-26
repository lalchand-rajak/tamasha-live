const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello welcome to CDAC!!!!");
});

server.listen(8080, () => {
    console.log("server running on port 8080");
})

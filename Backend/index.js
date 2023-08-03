const http = require("http");
const fs = require("fs");
const { products } = require("./products");

const server = http.createServer((req, res) => {
if (req.url === "/getAllProducts") {
    res.writeHead(200, {
        "Content-Type": "application/json"
    })

    res.end(JSON.stringify(products, null, 4));
} 
});
const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
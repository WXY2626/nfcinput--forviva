// server.js
const http = require("http");
const os = require("os");
const fs = require("fs");
const path = require("path");

// 获取局域网 IP
function getLocalIP() {
  const nets = os.networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      if (
        net.family === "IPv4" &&
        !net.internal &&
        (net.address.startsWith("192.") ||
          net.address.startsWith("172.") ||
          net.address.startsWith("10."))
      ) {
        return net.address;
      }
    }
  }
  return "localhost";
}

const HOST = "0.0.0.0";
let PORT = 5000;

// 尝试绑定端口，如果被占用自动加 1 重新尝试
function startServer(port) {
  const server = http.createServer((req, res) => {
    let file = req.url === "/" ? "/index.html" : req.url;
    const filePath = path.join(process.cwd(), file);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(404);
        return res.end("404 Not Found");
      }
      res.writeHead(200);
      res.end(data);
    });
  });

  server.listen(port, HOST, () => {
    const IP = getLocalIP();
    console.log("\n🚀 Local Server Running!");
    console.log(`Local:    http://127.0.0.1:${port}`);
    console.log(`Network:  http://${IP}:${port}\n`);
    console.log("📱 手机访问上面 Network 地址即可！");
  });

  server.on("error", err => {
    if (err.code === "EADDRINUSE") {
      console.log(`⚠️  端口 ${port} 已被占用，尝试下一个端口……`);
      startServer(port + 1); // 自动尝试下一个端口
    } else {
      console.error(err);
    }
  });
}

startServer(PORT);

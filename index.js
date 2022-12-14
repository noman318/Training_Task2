const http = require("http");
const fs = require("fs");
// const express = require("express");
const PORT = 5000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    fs.readFile("index.html", (err, data) => {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.url == "/createfile") {
    if (fs.existsSync("crud.txt")) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<a href="/" style="padding: 15px 30px;background-color: #5d70c3;border-radius:10px; color: white; font-size:1.5em; text-decoration:none; margin-left: 60px;">Home</a> <br >
      <h3 style="color: red">File is already exists</h3>`);
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      fs.writeFile(
        "crud.txt",
        "Welcome to the My HTTP crud operations file",
        (err) => {
          if (err) throw err;
          else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.write(`<br ><a href="/" style="margin-top:10px; padding: 15px 30px;background-color: #5d70c3;border-radius:10px; color: white; font-size:1.5em; text-decoration:none; margin-left: 60px;">Home</a> <br >
          <h3 style="color: green">File is created</h3>`);
            res.end();
          }
        }
      );
    }
  } else if (req.url == "/readfile") {
    if (fs.existsSync("crud.txt")) {
      let data = fs.readFileSync("crud.txt");
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<br ><a href="/" style="margin-top:10px; padding: 15px 30px;background-color: #5d70c3;border-radius:10px; color: white; font-size:1.5em; text-decoration:none; margin-left: 60px;">Home</a> <br >
      <h3 style="color: green">${data.toString()}</h3>`);
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<br ><a href="/" style="margin-top:10px; padding: 15px 30px;background-color: #5d70c3;border-radius:10px; color: white; font-size:1.5em; text-decoration:none; margin-left: 60px;">Home</a> <br >
      <h3 style="color: red">File cannot be readed please check</h3>`);
      res.end();
    }
  } else if (req.url == "/updatefile") {
    if (fs.existsSync("crud.txt")) {
      fs.appendFileSync("crud.txt", "This is apppended line this is new line");
      // res.writeHead(200, { "Content-Type": "text/html" });
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<br ><a href="/" style="margin-top:10px; padding: 15px 30px;background-color: #5d70c3;border-radius:10px; color: white; font-size:1.5em; text-decoration:none; margin-left: 60px;">Home</a> <br >
      <h3 style="color: green">File is updated</h3>`);
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<br ><a href="/" style="margin-top:10px; padding: 15px 30px;background-color: #5d70c3;border-radius:10px; color: white; font-size:1.5em; text-decoration:none; margin-left: 60px;">Home</a> <br >
      <h3 style="color: red">File could not be updated</h3>`);
    }
  } else if (req.url == "/deletefile") {
    if (fs.existsSync("crud.txt")) {
      fs.unlink("crud.txt", (err) => {
        if (err) throw err;
        else {
          res.writeHead(200, { "Content-Type": "text/html" });
          res.write(`<br ><a href="/" style="margin-top:10px; padding: 15px 30px;background-color: #5d70c3;border-radius:10px; color: white; font-size:1.5em; text-decoration:none; margin-left: 60px;">Home</a> <br >
          <h3 style="color: green">File is deleted</h3>`);

          res.end();
        }
      });
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`<br ><a href="/" style="margin-top:10px; padding: 15px 30px;background-color: #5d70c3;border-radius:10px; color: white; font-size:1.5em; text-decoration:none; margin-left: 60px;">Home</a> <br >
      <h3 style="color: red">File does not exists</h3>`);
      res.end();
    }
  } else {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(`<br ><a href="/" style="margin-top:10px; padding: 15px 30px;background-color: #5d70c3;border-radius:10px; color: white; font-size:1.5em; text-decoration:none; margin-left: 60px;">Home</a> <br >
    <h3 style="color: red">Invalid URL</h3>`);
    res.end();
  }
});
server.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`Server is on ${PORT}`);
});

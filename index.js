const http = require("http");
const fs = require("fs");
const e = require("express");
const PORT = 5000;
const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(
      '<html><body style="background-color:aqua;"><h2 style="color:Black;text-align:center;marin-bottom:40px">File Handling Crud Operartions</h2><br><a href="/createfile" style="padding: 15px 30px;background-color: #5d70c3;border-radius:10px; color: white; font-size:1.5em; text-decoration:none; margin-left: 60px;">Create</a><a href="/readfile" style="padding:15px 30px;border-radius:10px;background-color: #5d70c3; color: white; font-size:1.5em; text-decoration:none; margin-left: 60px;" ">Read</a><a href="/updatefile" style="padding: 15px 30px;background-color: #5d70c3; color: white; font-size:1.5em; text-decoration:none;border-radius:10px;  margin-left: 60px;"">Update</a><a href="/deletefile" style="padding: 15px 30px;background-color: #5d70c3; color: white; font-size:1.5em; text-decoration:none;border-radius:10px; margin-left: 60px;" ">Delete</a></body></html>'
    );
    res.end();
  } else if (req.url == "/createfile") {
    if (fs.existsSync("crud.txt")) {
      res.end("File is already exists");
    } else {
      fs.writeFile("crud.txt", "Welcome to the neosoft 1 file", (err) => {
        if (err) throw err;
        else {
          res.end("File is created");
        }
      });
    }
  } else if (req.url == "/readfile") {
    if (fs.existsSync("crud.txt")) {
      let data = fs.readFileSync("crud.txt");
      res.end(data.toString());
    } else {
      res.end("File is not readed please check");
    }
  } else if (req.url == "/updatefile") {
    if (fs.existsSync("crud.txt")) {
      fs.appendFileSync("crud.txt", "This is apppended line this is new line");
      res.end("file is updated");
    } else {
      res.end("File is no updated");
    }
  } else if (req.url == "/deletefile") {
    if (fs.existsSync("crud.txt")) {
      fs.unlink("crud.txt", (err) => {
        if (err) throw err;
        else {
          res.end("File is deleted");
        }
      });
    } else {
      res.end("File is not exist");
    }
  } else {
    res.end("Enter Valid url");
  }
});
server.listen(PORT, (err) => {
  if (err) throw err;
  else console.log(`Server is on ${PORT}`);
});

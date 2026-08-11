const fs = require("fs");
const requestHandler = (req, res)=>{
  console.log("Request received:", req.url);
  
      res.setHeader("Content-Type", "text/html");
  
      // Home page
      if (req.method === "GET" && req.url === "/home") {
          res.statusCode = 200;
          res.end("<h1>Welcome home</h1>");
      }
  
      // About page
      else if (req.method === "GET" && req.url === "/about") {
          res.statusCode = 200;
          res.end("<h1>Welcome to About Us</h1>");
      }
  
      // Node page
      else if (req.method === "GET" && req.url === "/node") {
          res.statusCode = 200;
          res.end("<h1>Welcome to my Node Js project</h1>");
      }
  
      // Show form
      else if (req.method === "GET" && req.url === "/") {
          res.statusCode = 200;
  
          res.end(`
              <form action="/message" method="POST">
                  <label>Name:</label>
                  <input type="text" name="username">
                  <button type="submit">Add</button>
              </form>
          `);
      }
  
      // Handle form submission
      else if (req.method === "POST" && req.url === "/message") {
  
          let body = [];
  
          // Receive data chunks
          req.on("data", (chunks) => {
              body.push(chunks);
          });
  
          // When all data is received
          req.on("end", () => {
  
              // Combine chunks into one Buffer
              let buffer = Buffer.concat(body);
  
              console.log(buffer);
  
              // Convert Buffer into string
              let formData = buffer.toString();
  
              console.log(formData);
  
              // Extract username
              const formValues = formData.split("=")[1];
  
              console.log(formValues);
  
              // Write data into file
              fs.writeFile("formValues.txt", formValues, (err) => {
  
                  if (err) {
                      console.log(err);
                      return;
                  }
  
                  // Redirect using 302
                  res.statusCode = 302;
                  res.setHeader("Location", "/");
                  res.end();
              });
          });
      }
  
      // Page not found
      else {
          res.statusCode = 404;
          res.end("<h1>Page Not Found</h1>");
      }
}

module.exports = requestHandler;
const express = require('express');
const app = express();
const serverless = require('serverless-http');
const port = 3000;
const data = [
  {
    name: "Yaqubov Eldor",
    email: "ebek3094@gmail.com",
    message: "web master",
    phoneNumber: "+998992790680",
    amount: "7200000",
    image: "Screenshot 2024-02-02 184749.png",
  }
];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/getAllUsers", (req, res) => {
  res.json(data);
});
app.post("/addNewUser", (req, res) => {
  data.push(req.body);
  res.send("User added successfully");
});
app.get('/', (req, res) => {
    
  res.send('Hello, Netlify!');
});

module.exports = app;
module.exports.handler = serverless(app);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

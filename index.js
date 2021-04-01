const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { exec } = require("child_process");
var path = require("path");
const fsHelper = require("./fs");

const app = express();
const port = 3000;
app.use(morgan("combined"));
app.use(cors());

app.get("/", (req, res) => res.send("Hello World!"));

app.get("/Packages", async (req, res) => {
  const file = await fsHelper.readFile("./Packages");
  res.send(file);
});

app.get("/./Packages.bz2", async (req, res) => {
  const file = await fsHelper.readFile("./Packages.bz2");
  res.send(file);
});
app.get("/Packages.bz2", async (req, res) => {
  const file = await fsHelper.readFile("./Packages.bz2");
  res.send(file);
});
app.get("/./Packages.gz", async (req, res) => {
  const file = await fsHelper.readFile("./Packages.gz");
  res.send(file);
});
app.get("/Packages.gz", async (req, res) => {
  const file = await fsHelper.readFile("./Packages.gz");
  res.send(file);
});
app.get("/Packages.xz", async (req, res) => {
  const file = await fsHelper.readFile("./Packages.xz");
  res.send(file);
});
app.get("/./Packages.xz", async (req, res) => {
  const file = await fsHelper.readFile("./Packages.xz");
  res.send(file);
});

// MAIN CODE

app.get("/debians/:debName", async (req, res) => {
  console.log(req);
  if (req.params.debName) {
    try {
      const { debName } = req.params;
      const pt = path.join("./debians", debName);
      const file = await fsHelper.readFile(pt).catch(() => res.sendStatus(404));
      res.setHeader("Content-Type", "application/x-deb");
      res.send(file);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
  } else {
    res.sendStatus(400);
  }
});

app.listen(port, () => {
  exec("./update.sh", (error, stdout, stderr) => {
    if (error) console.log(`error: ${error.message}`);

    if (stderr) console.log(`stderr: ${stderr}`);

    if (stdout) console.log(`stdout: ${stdout}`);
  });
  console.log(`Repo Header Dumper Listening on:`, port);
});

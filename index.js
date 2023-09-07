const express = require("express");

const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const date = new Date();
const utc_time = date.toISOString().split(".")[0] + "Z";

app.get("/api", (req, res) => {
  res.json({
    slack_name: req.query.slack_name,
    current_day: weekday[date.getDay()],
    utc_time: utc_time,
    track: req.query.track,
    github_file_url: "https://github.com/username/repo/blob/main/file_name.ext",
    github_repo_url: "https://github.com/username/repo",
    status_code: 200,
  });
});

app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});

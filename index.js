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
var day = new Date().getDay();

app.get("/api", (req, res) => {
  res.json({
    slack_name: req.query.slack_name,
    current_day: weekday[day],
    utc_time: new Date().toISOString().split(".")[0] + "Z",
    track: req.query.track,
    github_file_url:
      "https://github.com/TobyAjLot/hng-stage-one/blob/master/index.js",
    github_repo_url: "https://github.com/TobyAjLot/hng-stage-one",
    status_code: 200,
  });
});

app.listen(PORT, () => {
  console.log("Server started on port:", PORT);
});

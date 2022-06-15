const fs = require("fs");

module.exports = function () {
  let cmd = "";
  cmd = process.argv[2];
  //   console.log(cmd);
  //   process.stdin.on("data", (data) => {
  //     cmd = data.toString().trim();
  //     console.log(cmd);
  //     process.exit();
  //     console.log(cmd);
  //   });

  fs.readFile(cmd, (err, data) => {
    if (err) {
      throw err;
    } else {
      process.stdout.write(data);
    }
  });
};

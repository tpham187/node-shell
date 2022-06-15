module.exports = function () {
  process.stdin.on("data", (data) => {
    const value = data.toString().trim();

    if (value === "pwd") {
      process.stdout.write(process.cwd());
    }
  });
};

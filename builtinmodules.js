const os = require("os");

const osinfo = {
  osinfo: os.userInfo(),
  relese: os.release(),
  mem: os.totalmem(),
  freemem: os.freemem(),
};

console.log(osinfo);

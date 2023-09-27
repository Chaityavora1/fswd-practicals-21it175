const os = require('os');

console.log(`The current User Name is ${os.hostname()}`);
console.log(`The home directory is ${os.homedir()}`);
console.log(`The OS platform is ${os.platform()}`);

function memoryDetails() {
  const fm = `Free memory is ${os.freemem()} bytes.`;
  const tm = `Total memory is ${os.totalmem()} bytes.`;
  const per = `Percentage of free memory is ${(os.freemem() / os.totalmem()) * 100}%`;
  return fm + '\n' + tm + '\n' + per;
}

console.log("The memory Details are:\n" + memoryDetails());

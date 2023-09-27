const text = "Hello, Chalk!";
const age = -12;

function formatTextWithColor(text, color) {
  return `\x1b[${color}m${text}\x1b[0m`; // Use ANSI escape codes for colors
}

console.log(formatTextWithColor(text, '34;1')); // Blue and bold

if (age >= 0) {
  console.log(`Your age is ${formatTextWithColor(age, '32;1')}`); // Green and bold
} else {
  const err = "Age cannot be Negative";
  const err_msg = "Invalid Age!";
  console.log(formatTextWithColor(err, '31;1')); // Red and bold
  console.log(formatTextWithColor(err_msg, '31;1')); // Red and bold
}

let init = 1;
function custom(text, code) {
  return "\x1B[38;5;" + (code /* init++ */) % 231 + "m" + text + "\x1B[0m";
}
const message = Deno.args[0] || 'Enter something via terminal';

function delay() {
  for (let _ = 0; _ < 10e8; _++);
}

function animateText(text) {
  console.log(custom(text, 136));
  delay();
  console.clear();

}
const buffer = [];
let t = '( -  _  - )'.repeat(1) + '\n';
let c = '( O  _  O )'.repeat(1) + '\n';
// for (let index = 0; index < message.length; index++) {
// buffer.push(message[index]);
let current = 0;
while (true) {

  // animateText(buffer.join(''));
  // animateText(hangman[current++ % hangman.length]);
  animateText(c);
  animateText(t);
}
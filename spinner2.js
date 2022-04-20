// process.stdout.write('hello from spinner1.js... \rheyyy\n');

let animation = ['\r |  ','\r/  ','\r-  ','\r\\  ']
let delay = 0;

for (const ani of animation) {
  setTimeout(() => {
    if (ani < animation.length) {
    } process.stdout.write(ani)
  }, delay);
  delay += 200;
};


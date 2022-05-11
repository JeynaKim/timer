const timeDelays = process.argv.slice(2);

function simpleTimer(time) {
  if (time > 0) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
}

for (const timeDelay of timeDelays) {
  simpleTimer(timeDelay); 
}

simpleTimer(5);
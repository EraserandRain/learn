const { exec } = require('child_process');

exec('npm ls', (error, stdout, stderr) => {
  if (error) {
    console.error(`npm ls error: ${error}`);
    return;
  }

  console.log(`npm ls output:\n${stdout}`);
});

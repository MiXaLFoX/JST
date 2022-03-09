const fse = require('fs-extra');

fse.ensureDir('./firstDir', err => {
  if (err) return console.log(err);

  console.log('First dir created');
});

fse.ensureFile('./firstDir/txtFile.txt', err => {
  if (err) return console.log(err);

  console.log('File created');
});

fse.ensureDir('./secondDir', err => {
  if (err) return console.log(err);

  console.log('Second dir created');
});

fse.move('./firstDir/txtFile.txt', './secondDir/txtFile.txt', err => {
  if (err) return console.log(err);

  console.log('File moved to the second dir');
});

fse.remove('./secondDir/txtFile.txt', err => {
  if (err) return console.log(err);

  console.log('File deleted');
});

fse.remove('./firstDir', err => {
  if (err) return console.log(err);

  console.log('First dir deleted');
});

fse.remove('./secondDir', err => {
  if (err) return console.log(err);

  console.log('Second dir deleted');
});

function replacePath(obj) {
  const str = JSON.stringify(obj);
  const re = new RegExp(process.cwd(), 'g');

  return JSON.parse(str.replace(re, 'test-tmp'));
}

module.exports = replacePath;

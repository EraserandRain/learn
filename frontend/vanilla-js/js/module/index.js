const PATH = require('path');
const dirTree = require('directory-tree');

const tree = dirTree('./new', {extensions:/\.txt$/}, null, (item, PATH, stats) => {
  console.log(item);
});
console.log(tree);
const PATH = require('path');
const dirTree = require('directory-tree');

const tree = dirTree('./blogs', {extensions:/\.md$/}, null, (item, PATH, stats) => {
  console.log(item);
});
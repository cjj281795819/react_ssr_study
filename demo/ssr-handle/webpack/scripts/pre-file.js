const fs = require('fs');
const path = require('path');

const resolvePath = pathStr => path.join(__dirname, pathStr);

const judgeFolder = (pathStr) => {
  if (!fs.existsSync(resolvePath(pathStr))) {
    fs.mkdirSync(resolvePath(pathStr))
  };
}

const buildFile = () => {
  const aimPath = resolvePath('../../dist/server/index.js');
  if (!fs.existsSync(aimPath)) {

    judgeFolder('../../dist');
    judgeFolder('../../dist/server');

    fs.writeFileSync(aimPath, "console.log('build done')");
  }
};

buildFile();
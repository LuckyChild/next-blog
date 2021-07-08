const path = require('path')
console.log(path);
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
}
const path = require('path')

const controller = {
    index: (res, req) => {
        req.sendFile(path.join(__dirname, '../views/home.html'));
    },
    about: (res, req) => {
        req.sendFile(path.join(__dirname, '../views/about.html'));
    }
}

module.exports = controller;
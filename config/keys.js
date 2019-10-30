if (process.env.NODE_ENV === 'production') {
    module.exports = require('./keys.prop')
} else {
    module.exports = require('./keys.dev')
}

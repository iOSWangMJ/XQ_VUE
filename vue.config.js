const OfflinePlugin = require('offline-plugin');
module.exports = {
    publicPath: "./",
    configureWebpack: {
        plugins: [
            new OfflinePlugin()
        ]
    }
}
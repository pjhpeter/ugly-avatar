const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    publicPath: process.env.NODE_ENV === 'production' ? '/ugly-avatar/' : '/',
    configureWebpack: process.env.NODE_ENV === 'production' ? {
        output: {
            libraryExport: 'default',
            filename: 'ugly-avatar.[format].js',
        }
    } : {}
})

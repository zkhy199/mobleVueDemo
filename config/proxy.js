module.exports = {
  '/upload': {
    target: 'http://192.168.1.40:8081/upload',
    changeOrigin: true,
    pathRewrite: {
      '^/upload': ''
    }
  }
}

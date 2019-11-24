/**
 * @file 开发环境代理配置
 */


module.exports = {
    proxy: {
        '/userinfo/': { 
            target: 'http://localhost:8888'
        }
    }
};


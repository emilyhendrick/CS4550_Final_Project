const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://api.yelp.com',
            changeOrigin: true,
            pathRewrite: {
                '^/api': '/v3/businesses',
            },
            headers: {
                Authorization: `Bearer ${process.env.REACT_APP_YELP_API_KEY}`,
            },
        })
    );
};
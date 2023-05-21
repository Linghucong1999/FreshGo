const env = process.env.NODE_ENV;
let basePath = '';

if (env === 'development') { //开发环境
	basePath = 'http://127.0.0.1:8806'
} else { //生产环境
	basePath = 'http://127.0.0.1:8806'
}
export default {
	basePath
}

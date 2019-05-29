const https = require('https')
const host = 'https://api.ipify.org' 

exports.handler = (event, context, callback) => {
    context.callbackWaitsForEmptyEventLoop = false
    https.get(host, res => {
        res.setEncoding("utf8")
        res.on('data', (data) => {
            callback(null, data)
        })
    })
    .on('error', (e) => {
        callback(e)
    })
}

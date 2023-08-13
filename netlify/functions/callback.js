const url = require('url')

exports.handler = async (event, context) => {
    const obj = url.parse(event.rawUrl, true)
    const code = obj.query.code

    return {
        statusCode: 200,
        body: code,
        headers: {
            'Set-Cookie': `tmp=${code}; Max-Age=86400;`,
            'Content-Type': 'text/plain'
        },
    }
}
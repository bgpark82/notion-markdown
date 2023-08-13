const url = require('url')

exports.handler = async (event, context) => {
    const obj = url.parse(event.rawUrl, true)
    const code = obj.query.code
    console.log(code);

    return {
        statusCode: 200,
        body: code,
        headers: {
            'Set-Cookie': `myCookie=${code}; Max-Age=3600; Path=/; HttpOnly;`,
            'Content-Type': 'text/plain'
        },
    }
}
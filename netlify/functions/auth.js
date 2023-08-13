const url = require('url')

exports.handler = async (event, context) => {
    const obj = url.parse(event.rawUrl, true)
    const code = obj.query.code
    console.log(`code: ${code}`)

    return {
        statusCode: 200,
        body: code,
        headers: {
            'Set-Cookie': `tistory_token=${code}; Max-Age=31536000; Path=/`,
            'Content-Type': 'text/plain'
        },
        // serverless function이 다른 도메인에 존재하므로 localhost에서는 cookie를 볼 수 없다
    }
}
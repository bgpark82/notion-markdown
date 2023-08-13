import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import {useCookies} from "react-cookie";

function App() {

    const [message, setMessage] = useState('')
    const [appId, setAppId] = useState('')
    const [cookies, setCookie, removeCookie] = useCookies(['tistory_token'])
    useEffect(() => {
        console.log(cookies)
        console.log(cookies.myCookie)
        console.log(document)
        console.log(document.cookie)
    })

    const handleTistoryAuth = async () => {
        const redirectUrl = 'https://notion-markdown.netlify.app/.netlify/functions/auth'
        // const redirectUrl = 'https://localhost:8888/.netlify/functions/auth'
        window.open(`https://www.tistory.com/oauth/authorize?
            client_id=${appId}&
            redirect_uri=${redirectUrl}&
            response_type=code`)
    }

    const handleAppId = (e) => {
        setAppId(e.target.value)
    }

  return (
    <div className="App">
      <header className="App-header">
          <h1>티스토리 인증</h1>

          <div>app id : <input type="text" onChange={handleAppId} value={appId}/></div>
          <button onClick={handleTistoryAuth}>티스토리 인증</button>
          <div>{message}</div>
      </header>
    </div>
  );
}

export default App;

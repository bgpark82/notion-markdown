import './App.css';
import axios from "axios";
import {useState} from "react";

function App() {

    const [message, setMessage] = useState('')
    const [appId, setAppId] = useState('')

    const handleTistoryAuth = async () => {
        // auth.js는 netlify/functions에 생성했지만 컴파일(?)된 상태에서는 .netlify/functions/auth가 실행된다
        const redirectUrl = 'http://localhost:8888/.netlify/functions/callback'
        window.open(`https://www.tistory.com/oauth/authorize?
            client_id=${appId}&
            redirect_uri=${redirectUrl}&
            response_type=code`)
        // const res = await axios.get('/.netlify/functions/auth')
        // const data = res.data.message;
        // console.log(data)
        // setMessage(data)
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

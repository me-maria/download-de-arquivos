import { useState } from "react";
import './styles.css'

function App() {
  const urlToDownload = 'http://speed.hetzner.de/100MB.bin'
  const [download, setDownload] = useState('')
  const [count, setCount] = useState(0)
  return (
    <div className="App">  
      <h1 className="title">
         Download com React
      </h1>
      <div className="container">
      <div   className= "btn">
        <button  onClick=
        {()=> {
         setDownload(urlToDownload);
         setCount(oud => oud + 1);
        }}>Download
        </button>
      </div>
      </div>
      <p>{download}</p>
      <div className="container-iframe">
        {download && <iframe src= {download +'?c='+count}></iframe>}
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";

function App() {
  const urlToDownload = 'http://speed.hetzner.de/100MB.bin'
  const [download, setDownload] = useState('')
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>
         Download com React
      </h1>
      <p>
        <button onClick={()=> {
         setDownload(urlToDownload);
         setCount(oud => oud + 1);
         }}>Download
        </button>
      </p>
      <p>{download}</p>
      {download && <iframe src= {download +'?c='+count} style={{display:'none'}}></iframe>}
    </div>
  );
}

export default App;

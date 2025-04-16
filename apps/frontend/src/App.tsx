import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { client } from "./utils.ts";
import { nanoid } from "nanoid";


function App() {
  useEffect(() => {
    (async () => {

      const data = await (await client.index.$get()).text()
      console.log(data);
      
      const res = await client.hello[":id"].$get({ param: { id: nanoid() } });

      if (res.ok) {
        const data = await res.json();
        console.log(data);
      } else {
        const data = await res.json();
        console.log(data);
      }

      const helloRes = await (await client.hello.$post({ json: {name: nanoid()} })).json();
      console.log(helloRes);
    })();
  }, []);
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

import { useDeferredValue, useState } from "react";
import "./App.css";
import SlowList from "./SlowList";

function App() {
  const [text, setText] = useState("");
  const deferedValue = useDeferredValue(text);

  let isStale = deferedValue !== text;
  return (
    <div
      style={{
        opacity: isStale ? 0 : 1,
        background: isStale ? "black" : "yellowgreen"
      }}
    >
      <input value={text} onChange={(e) => setText(e.target.value)} />
      {/* <SlowList text={text} /> */}
      <SlowList text={deferedValue} />
    </div>
  );
}

export default App;

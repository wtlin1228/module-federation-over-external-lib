import { useState } from "react";
import "./App.css";
import { Exposed as Pikmin } from "pikmin";
import { KirbyCafe } from "./KirbyCafe";

const App = () => {
  const [showKirbyCafe, setShowKirbyCafe] = useState(false);

  return (
    <>
      <button onClick={() => setShowKirbyCafe((v) => !v)}>toggle kirby</button>

      <div className="content">
        {showKirbyCafe && <KirbyCafe />}
        <Pikmin />
      </div>
    </>
  );
};

export default App;

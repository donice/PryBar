import { useState } from "react";
import DashboardButton from "./components/buttons/DashboardButton";
import DashboardInput from "./components/buttons/DashboardInput";
import Modal from "./components/Modal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-primary">
      <Modal>
        <div className="w-[30vw] h-[30vh]">hello</div>
      </Modal>
      <DashboardButton text="Add a Dog" />
      <DashboardInput
        text="Name"
        placeholder="Enter Name"
        type="text"
        value={""}
        name={"name"}
      />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;

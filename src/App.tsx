import { useState } from "react";
import AuthInput from "./components/Input/AuthInput";
import DashboardButton from "./components/buttons/DashboardButton";
import DashboardInput from "./components/Input/DashboardInput";
import Modal from "./components/Modal";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App font-primary">
      <Modal>
        <div className="w-[30vw] h-[30vh]">hello</div>
      </Modal>
      <DashboardButton text="Add a Dog" />
      <AuthInput
        text="Name"
        placeholder="Enter Name"
        type="text"
        value={""}
        name={"name"}
      />
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

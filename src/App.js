import "./App.css";
import "antd/dist/antd.css";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import { MultiFormProvider } from "./MultiFormContext";

function App() {
  return (
    <div className="App">
      <MultiFormProvider>
        <MultiStepForm />
      </MultiFormProvider>
    </div>
  );
}

export default App;

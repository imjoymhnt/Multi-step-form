import "./App.css";
import "antd/dist/antd.css";
import MultiStepForm from "./components/MultiStepForm/MultiStepForm";
import { MultiFormProvider } from "./MultiFormContext";
import PlanHeader from "./components/MultiStepForm/PlanHeader";

function App() {
  return (
    <div className="App">
      <PlanHeader />
      <MultiFormProvider>
        <MultiStepForm />
      </MultiFormProvider>
    </div>
  );
}

export default App;

import { createContext, useState } from "react";

const MultiFormContext = createContext();

export function MultiFormProvider({ children }) {
  const [policyDetails, setPolicyDetails] = useState({
    plan: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    pin: "",
    state: "",

    deductibleAmt: "",
    deductibleAmtConfirmation: false,
    drugConfirmation: false,
    goodHealthConfirmation: false,
    waitingPeriodConfirmation: false,
    preExistingDiseaasesConfirmation: false,
  });
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  const handlePolicyDetails = (details) => {
    setPolicyDetails((prevState) => ({ ...prevState, ...details }));
  };
  return (
    <MultiFormContext.Provider
      value={{ policyDetails, handlePolicyDetails, current, next, prev }}
    >
      {children}
    </MultiFormContext.Provider>
  );
}

export default MultiFormContext;

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

  const handlePolicyDetails = (details) => {
    setPolicyDetails((prevState) => ({ ...prevState, ...details }));
  };
  return (
    <MultiFormContext.Provider value={{ policyDetails, handlePolicyDetails }}>
      {children}
    </MultiFormContext.Provider>
  );
}

export default MultiFormContext;

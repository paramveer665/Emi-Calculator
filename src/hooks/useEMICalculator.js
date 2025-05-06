import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useEMICalculator = () => {
  const {
    principal,
    interestRate,
    loanTerm,
    emi,
    setEmi,
    amortizationData,
    setAmortizationData,
  } = useContext(AppContext);

  const calculateEMI = () => {
    const monthlyRate = interestRate / 12 / 100;
    const termInMonths = loanTerm * 12;
    const emiValue =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, termInMonths)) /
      (Math.pow(1 + monthlyRate, termInMonths) - 1);

    setEmi(emiValue.toFixed(2));
    generateAmortizationSchedule(
      principal,
      monthlyRate,
      termInMonths,
      emiValue
    );
  };

  const generateAmortizationSchedule = (
    principal,
    monthlyRate,
    termInMonths,
    emiValue
  ) => {
    let balance = principal;
    const schedule = [];

    for (let month = 1; month <= termInMonths; month++) {
      const interestPayment = balance * monthlyRate;
      const principalPayment = emiValue - interestPayment;
      balance -= principalPayment;

      schedule.push({
        month,
        payment: emiValue.toFixed(2),
        principal: principalPayment.toFixed(2),
        interest: interestPayment.toFixed(2),
        balance: Math.abs(balance.toFixed(2)),
      });
    }

    setAmortizationData(schedule);
  };

  return { calculateEMI };
};

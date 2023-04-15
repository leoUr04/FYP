import React, { useState } from 'react';
import './css/Calculator.css';

const Calculator = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [emi, setEmi] = useState('');

  const calculateEmi = () => {
    const p = parseFloat(principal);
    const r = parseFloat(rate) / 100 / 12;
    const n = parseFloat(tenure) * 12;
    const numerator = r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;
    const calculatedEmi = (p * numerator) / denominator;
    setEmi(calculatedEmi.toFixed(2));
  };

  return (
    <div className="calculator-container">
      <h1 className="calculator-title">EMI Calculator</h1>
      <form className="calculator-form">
        <label className="calculator-label">
          Principal Amount (₹):
          <input
            type="number"
            className="calculator-input"
            value={principal}
            onChange={(e) => setPrincipal(e.target.value)}
          />
        </label>
        <br />
        <label className="calculator-label">
          Annual Interest Rate (%):
          <input
            type="number"
            step="0.01"
            className="calculator-input"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
          />
        </label>
        <br />
        <label className="calculator-label">
          Tenure (in years):
          <input
            type="number"
            className="calculator-input"
            value={tenure}
            onChange={(e) => setTenure(e.target.value)}
          />
        </label>
        <br />
        <button
          type="button"
          className="calculator-button"
          onClick={calculateEmi}
        >
          Calculate EMI
        </button>
      </form>
      {emi && (
        <div className="calculator-result">
          <h2 className="calculator-result-text">EMI: ₹{emi}</h2>
        </div>
      )}
    </div>
  );
};

export default Calculator;


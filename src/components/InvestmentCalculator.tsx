"use client";

import { useState, FormEvent } from 'react';

const InvestmentCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState<string>('');
  const [interestRate, setInterestRate] = useState<string>('');
  const [years, setYears] = useState<string>('');
  const [futureValue, setFutureValue] = useState<string | null>(null);

  const calculateInvestment = (e: FormEvent) => {
    e.preventDefault();

    const P = parseFloat(initialInvestment);
    const r = parseFloat(interestRate) / 100;
    const t = parseFloat(years);

    if (!isNaN(P) && !isNaN(r) && !isNaN(t)) {
      const A = P * Math.pow(1 + r, t);
      setFutureValue(A.toFixed(2));
    } else {
      setFutureValue(null);
    }
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white dark:bg-gray-800 shadow-md rounded-2xl mt-8">
      <h2 className="text-2xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">Calculadora Investimento</h2>
      <form onSubmit={calculateInvestment}>
        <div className="mb-4">
          <label htmlFor="initialInvestment" className="block text-gray-700 dark:text-gray-300">Investimento Inicial</label>
          <input
            type="number"
            id="initialInvestment"
            value={initialInvestment}
            onChange={(e) => setInitialInvestment(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            placeholder="Insira o valor inicial"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="interestRate" className="block text-gray-700 dark:text-gray-300">Taxa de juros anual (%)</label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
            placeholder="Insira a taxa de juros"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="years" className="block text-gray-700 dark:text-gray-300">Número de anos</label>
          <input
            type="number"
            id="years"
            value={years}
            onChange={(e) => setYears(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 "
            placeholder="Insira o número de anos"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 hover:bg-blue-600 transition duration-200 dark:bg-blue-700 dark:hover:bg-blue-800  font-bold rounded-full"
        >
          Calcular
        </button>
      </form>

      {futureValue !== null && (
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Valor futuro: R${futureValue}</h3>
        </div>
      )}
    </div>
  );
};

export default InvestmentCalculator;

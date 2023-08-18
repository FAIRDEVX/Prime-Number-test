import { useState } from "react";
import "./App.css";

function App() {
  
  const [primeNumbers, setPrimeNumbers] = useState([]);

  const PrimeNum = (num) => {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;

    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }
    return true;
  };

  const findPrimes = () => {
    const primes = [];
    for (let i = 1; i <= 1000; i++) {
      if (PrimeNum(i)) {
        primes.push(i);
      }
    }
    setPrimeNumbers(primes);
  };

  return (
    <>
      <div className="App">
        <h1>การหารค่า Prime Number ระหว่าง 1-1000 </h1>
        <button onClick={findPrimes}>ปุ่ม Prime Number</button>
        <div className="prime-rows">
          {primeNumbers.map((prime, index) => (
            <div key={index} className="prime-row">
              <p>{prime}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import "./App.css";

function App() {

  const [primeNumbers, setPrimeNumbers] = useState([]);

  const PrimeNum = (num) => {
     // ถ้าตัวเลขเป็น 1 หรือ 2 จะไม่ใช่จำนวนเฉพาะ
    if (num <= 1) return false;
    if (num <= 3) return true;

    // ถ้าตัวเลขหารด้วย 2 หรือ 3 ลงตัว จะไม่ใช่จำนวนเฉพาะ
    if (num % 2 === 0 || num % 3 === 0) return false;

    // เริ่มต้นที่เลข 5
    let i = 5;
    while (i * i <= num) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
      i += 6;
    }

    // ถ้าไม่เข้าเงื่อนไข แสดงว่า num เป็นจำนวนเฉพาะ
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
        <button className="btn-prime" onClick={findPrimes}>ปุ่ม Prime Number</button>
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

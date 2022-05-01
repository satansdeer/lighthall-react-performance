import React, { useState } from "react";

const iterations = 100;
const multiplier = 1000000000;

function calculatePrimes(iterations, multiplier) {
  var primes = [];
  for (var i = 0; i < iterations; i++) {
    var candidate = i * (multiplier * Math.random());
    var isPrime = true;
    for (var c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
        // not prime
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }
  return primes;
}

function performExpensiveOperation() {
  calculatePrimes(iterations, multiplier);
}

export const PerformanceNow = () => {
  const [times, setTimes] = useState(0);

  const handleClick = () => {
    const t1 = performance.now();
    performExpensiveOperation();
    const t2 = performance.now();
    console.log(
      `Time to performExpensiveOperation: ${t2 - t1}`
    );
    setTimes(times + 1);
  };

  return (
    <button
      style={{ fontSize: "20px" }}
      onClick={handleClick}
    >
      Clicked {times} times
    </button>
  );
};

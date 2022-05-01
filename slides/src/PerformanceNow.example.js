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

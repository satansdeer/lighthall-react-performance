export const ChromeProfiler = () => {
  const [times, setTimes] = useState(0);

  const handleClick = () => {
    performExpensiveOperation();
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

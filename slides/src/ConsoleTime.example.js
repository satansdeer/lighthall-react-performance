export const ConsoleTime = () => {
  const [times, setTimes] = useState(0);

  const handleClick = () => {
    console.time("performExpensiveOperation");
    performExpensiveOperation();
    console.timeEnd("performExpensiveOperation");
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

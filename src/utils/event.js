const onRunClicked = (setRunning) => {
  console.log("Run button clicked!");
  setRunning((prev) => !prev);
};

export { onRunClicked };

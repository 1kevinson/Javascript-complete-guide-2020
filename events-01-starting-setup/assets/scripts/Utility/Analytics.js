const intervalId = setInterval(() => {
  console.log("Sending analytics data...");
}, 200000);

document.getElementById("stop-analytics-btn").addEventListener("click", () => {
  clearInterval(intervalId);
});

window.addEventListener("DOMContentLoaded", () => {

  // global configuration
  const globalConfig = {
    index: 58,
    speed: 30,
    size: 120,
    animationSmooth: "1s ease-out",
    stroke: 8,
    strokeBottom: 5,
    colorSlice: "#74C3B3",
    colorCircle: "#f1f1f1",
    round: true
  };

  const global1 = new CircularProgressBar("global1", globalConfig);
  global1.initial();

  const global2 = new CircularProgressBar("global2", globalConfig);
  global2.initial();

  const global3 = new CircularProgressBar("global3", globalConfig);
  global3.initial();

  const global4 = new CircularProgressBar("global4", globalConfig);
  global4.initial();
  
});
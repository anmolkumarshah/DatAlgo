export const getWidth = (noBars) => {
  let width;
  if (parseInt(noBars) === 5) width = "16%";
  if (parseInt(noBars) === 10) width = "9%";
  if (parseInt(noBars) === 25) width = "3.5%";
  if (parseInt(noBars) === 50) width = "1.6%";
  if (parseInt(noBars) === 100) width = "0.6%";
  return width;
};

export const randonIntFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const getWidth = (noBars) => {
  let width;
  if (noBars == 5) width = "16%";
  if (noBars == 10) width = "9%";
  if (noBars == 25) width = "3.5%";
  if (noBars == 50) width = "1.6%";
  if (noBars == 100) width = "0.6%";
  return width;
};

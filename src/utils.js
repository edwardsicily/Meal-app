export const updateLs = (item) => {
  const LSitem = JSON.stringify(item);
  localStorage.setItem("meal-app-favourites", LSitem);
};
export const getLS = (str = "") => {
  const myItem = localStorage.getItem("meal-app-favourites");

  if (str) console.log(myItem);
  if (myItem) return JSON.parse(myItem);
  return [];
};
//function that return a boolean according to the match beetween two arrays
export const isMatch = (id) => {
  const lsArr = getLS();
  const idx = lsArr.findIndex((el) => {
    return el.idMeal == id;
  });

  if (idx >= 0) return true;
  return false;
};

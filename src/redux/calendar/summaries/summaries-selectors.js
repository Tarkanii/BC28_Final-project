export const getSummariesInfo = (state) => state.calendar.todaySummary;
export const getUserId = (state) => state.auth.user.id;
export const getnotAllowedProducts = (state) =>
  state.calendar.notAllowedProducts;
export const getData = (state) => state.calendar.date;
export const getProduct = (state) => state.calendar.eatenProduct;
export const getDayId = (state) => state.calendar.dayId;

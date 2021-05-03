export const goToLoginPage = (history) => {
  history.push("/login");
};

export const goToSignUpPage = (history) => {
  history.replace("/signup");
};
export const goToAddressPage = (history) => {
  history.replace("/address");
};

export const goToHomePage = (history) => {
  history.replace("/");
};

export const goToCartPage = (history) => {
  history.replace("/cart");
};

export const goToRestaurantPage = (history, id) => {
  history.push("/restaurant");
};

export const goToPreviousPage = (history) => {
  history.goBack();
};

const initialState = {
  features: [
    { id: 1, text: "Unlimited color options" },
    { id: 2, text: "Outstanding support" },
    { id: 3, text: "Retina ready." },
  ],
};

const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default portfolioReducer;

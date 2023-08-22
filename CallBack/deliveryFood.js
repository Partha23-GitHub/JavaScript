//open the app
const openApp = (callback) => {
  console.log("Opening app...");
  setTimeout(() => {
    callback("opened");
  }, 3000);
};
//select food
const selectFood = (callback) => {
  console.log("Selecting Food");
  setTimeout(() => {
    callback({
      name: "Pizza",
      price: "$15",
    });
  }, 4000);
};
//place order
const placeOrder = (callback) => {
  const totalPrice = parseInt(350 * 2);
  console.log("Order Value " + totalPrice);
  setTimeout(() => {
    callback(totalPrice);
  }, 2000);
};
//delivered
const delivered = (callback) => {
  setTimeout(() => {
    callback("Knock knock open the door");
  }, 5000);
};

openApp((status) => {
  selectFood((cart) => {
    placeOrder((orderPrice) => {
      delivered((deliveryArrived) => {
        console.log(deliveryArrived);
      });
    });
  });
});

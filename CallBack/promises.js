//open app
const app = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let message = "App is opening";
      resolve(message);
    }, 2000);
  });
};
//select food
const selectFood = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let message = "Food is in cart";
      resolve(message);
    }, 2000);
  });
};
//order place
const orderPlace = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = "Order Placed";
      resolve(message);
    }, 2000);
  });
};
//delivary arrived
const delivaryArived = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const message = "Knock knock open the door";
      resolve(message);
    }, 2000);
  });
};

// app()
//   .then((data) => {
//     console.log("Message: ", data);
//     return selectFood();
//   })
//   .then((data) => {
//     console.log("food selected", data);
//     return orderPlace();
//   })
//   .then((data) => {
//     console.log("order placed ", data);
//     return delivaryArived();
//   })
//   .then((data) => {
//     console.log("delivered", data);
//   })
//   .catch((e) => {
//     console.log("Error");
//   });

//we can make it more shorter using async await
async function orderFood() {
  try {
    const openapp = await app();
    console.log("Message: ", openapp);

    const cartFood = await selectFood();
    console.log("food selected", cartFood);

    const makeOrder = await orderPlace();
    console.log("order placed ", makeOrder);

    const delivary = await delivaryArived();
    console.log("delivered", delivary);
  } catch (e) {
    console.log("Sorry we can't deliverd your food");
  }
}

//call orderfood
orderFood();

const P1 = new Promise((resolve, reject) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    resolve({
      name: "Phani",
      age: 36,
    });
  } else {
    reject({
      name: "N/A",
      age: 0,
    });
  }
});

P1.then((res) => {
  return { ...res, Phone: 9951032311 };
})
  .catch((err) => console.log(err))
  .then((res) => {
    return { ...res, address: "New Delhi" };
  })
  .catch((err) => console.log(err))
  .then((res) => {
    return { ...res, isLoggedIn: true };
  })
  .catch((err) => console.log(err))
  .then((res) => {
    return {
      ...res,
      City: "NDl",
    };
  })
  .catch((err) => console.log(err))
  .then((res) => {
    return { ...res, PinCode: 518501 };
  })
  .catch((err) => console.log(err))
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

// Up all then is Nothing But Chaining

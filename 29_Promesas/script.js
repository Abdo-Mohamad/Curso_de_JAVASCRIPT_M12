// promesa

/* let promesa = new Promise((resolve, reject) => {
  let resp = {
    response: 200,
    descripption: "Esat info es importante",
  };
  resolve(resp);
  reject(" algo se falló");
}); */

/* let promesa = new Promise((resolve, reject) => {
setTimeout(() => {
  let resp = {
    response: 200,
    descripption: "Esat info es importante",
  };
  resolve(resp);
  reject(" algo se falló");
}, 3000);
}); */

let promesa1 = new Promise((resolve) => {
  setTimeout(() => {
    let resp = {
      response: 200,
      descripption: "Esat info es importante",
    };
    resolve(resp);
  }, 3000);
});
let promesa2 = new Promise((resolve) => {
  setTimeout(() => {
    let resp = {
      response: 200,
      descripption: "Esat info es importante",
    };
    resolve(resp);
  }, 5000);
});

let promesa3 = new Promise((resolve) => {
  setTimeout(() => {
    let resp = {
      response: 200,
      descripption: "Esat info es importante",
    };
    resolve(resp);
  }, 2500);
});
promesa1
  .then((res) => {
    console.log(res);
    promesa2
      .then((res) => {
        console.log(res.descripption);
        promesa3
          .then((res) => {
            console.log(res.descripption);
          })
          .catch((error) => {
            console.warn(error);
          });
      })
      .catch((error) => {
        console.warn(error);
      });
  })
  .catch((error) => {
    console.warn(error);
  });

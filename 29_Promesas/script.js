// Async & Await

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

async function ejecutarPromesas() {
  let respuestaProm1 = await promesa1;
  console.log(respuestaProm1);
  let respuestaProm2 = await promesa2;
  console.log(respuestaProm2);
  let respuestaProm3 = await promesa3;
  console.log(respuestaProm3);
}

ejecutarPromesas();
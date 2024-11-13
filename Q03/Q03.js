let promessa1 = Promise.resolve(2);
let promessa2 = 10;
let promessa3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'string qualquer');
});

Promise.all([promessa1, promessa2, promessa3]).then((values) => {
  console.log(values);
});
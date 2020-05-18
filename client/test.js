let obj = new Object({
  name: "vlad",
  age: 21,
  hi: function () {
    console.log(this);
  },
});

let obj2 = Object.create(obj);

for (const key in obj2) {
  if (!obj2.hasOwnProperty(key)) {
    const element = obj2[key];
    console.log(key);
  }
}

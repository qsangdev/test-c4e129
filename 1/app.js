const a = +prompt("Nhap so thu nhat: ");
const b = +prompt("Nhap so thu hai: ");

for (let i = a; i <= b; i++) {
  let f = 0;
  for (let j = 2; j < i; j++) {
    if (i % j == 0) {
      f = 1;
      break;
    }
  }
  if (i > 1 && f == 0) {
    console.log(i);
  }
}

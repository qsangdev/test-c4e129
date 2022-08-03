let numberOneTriagle = (num) => {
  for (var i = 1; i <= num; i++) {
    var x = "";
    for (var j = 1; j <= i; j++) {
      x += "*";
    }
    console.log(x);
  }
};
numberOneTriagle(6);

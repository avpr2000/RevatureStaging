function run() {
  console.log(vendingMachine(products, 200, 7));
  console.log(vendingMachine(products, 500, 0));
  console.log(vendingMachine(products, 90, 1));
}

function runRobot() {
  console.log(trackRobot([-10, 20, 10]));
  console.log(trackRobot());
  console.log(trackRobot([20, 30, 10, 40]));
}

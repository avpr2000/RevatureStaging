const dev = [500, 200, 100, 50, 20, 10];
const products = [[1, ["Water", 120]],
                  [2, ["Cookies", 310]],
                  [3, ["Chips", 130]],
                  [4, ["Tea", 170]],
                  [5, ["Candies", 260]],
                  [7, ["Crackers", 120]]]

function vldProduct(list, prodNumber){
  let a = null;
  for (let i=0; i<list.length; i++){
    if (list[i][0] == prodNumber){
      a = i;
      break;
    }
  }
  return a;
}

function vendingMachine(listofPrd, money, productNumber){
  let auxdev, val = 0;
  let p = '';
  let arraydev = [];

  let pos = vldProduct(listofPrd, productNumber)
  if (pos != null){
    p = listofPrd[pos][1][0];
    val = listofPrd[pos][1][1];
  }
  else
    return "Enter a valid product number";

  // listofPrd is an Object with name : 0 and amount : 1
  if (val < money){
      auxdev = money - val;
      while (auxdev > 0) {
        for (let v in dev){
            if (auxdev >= dev[v]){
              arraydev.push(dev[v]);
              auxdev -= dev[v];
              }
        }
      }
      return {"product" : p, "change" : arraydev};
    }
  else {
    return "Not enough money for this product";
  }
}

function trackRobot(param) {
  let x = 0;
  let y = 0;
  let resp = '';

  if (param != undefined){
    for (i=0; i<param.length; i++) {
        switch (i % 4) {
        case 0: //North
          y += param[i];
          break;
        case 1: //East
          x += param[i];
          break;
        case 2: //South
          y -= param[i];
          break;
        case 3: //West
          x -= param[i];
          break;
      }
    }
  }  
  resp = x + ' ' + y;
  return resp;
}

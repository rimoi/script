
// The Rover Object
const rover = {
  direction : "N",
  x: 0,
  y: 0,
  travelLog: [{x: 0, y: 0}]
}


// Turning the rover right
  function turnRight(rover) {
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break; }
    let newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
}

// Moving the rover 

function moveForward(rover) {
   switch (rover.direction) {
    case "N":
      rover.y--;
      break;
    case "E":
      rover.x++;
      break;
    case "S":
      rover.y++;
      break;
    case "W":
      rover.x--;
      break; }
  let newPosition = { x: rover.x, y: rover.y };
    rover.travelLog.push(newPosition);
  }

// Command

function command(rover, orders) {
  // 'lrff'
  // ['l', 'r', 'f', 'f']

  const order2 = orders.split('');
  for (let i = 0; i < order2.length; i++) {
    switch (orders[i]) {
      case "l": // left
        turnLeft(rover);
        break;
      case "r": // right
        turnRight(rover);
        break;
      case "f": // up
        moveForward(rover);
        break;
    }
  }
}
command(rover, "rflf");
console.log(`Rover's position : x= ${rover.x} y= ${rover.y}`);

// Tracking
  
for (let i = 0; i < rover.travelLog.length; i++) {
  console.log(`Step ${i} ==> x=${rover.travelLog[i].x}, y=${rover.travelLog[i].y}`);
}

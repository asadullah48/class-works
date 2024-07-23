class Point {
    x: number;
    y: number;
  }
   
  const pt = new Point();
  pt.x = 0;
  pt.y = 0;
  class PointAgain {
    x = 0;
    y = 0;
  }
   
  const ptA = new Point();
  // Prints 0, 0
  console.log(`${pt.x}, ${pt.y}`);
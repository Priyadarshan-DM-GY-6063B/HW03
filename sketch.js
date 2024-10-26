function setup() {
  createCanvas(400, 500);
  background(255, 204, 0); // Yellow background color

  let largecircle= 16;
  let smallcircle = 8;
  let spacing = 30;

  // This snip of code arranges the first set of larger circles in a grid pattern
  for (let y = spacing; y < height; y += spacing * 2) {
    for (let x = spacing; x < width; x += spacing * 2) {
      fill(0);
      ellipse(x, y, largecircle, largecircle);
    }
  }

  // translate() is used to shift and draw the second set of larger circles
  push();
  translate(spacing, spacing); // Shift down and to the right
  for (let y = spacing; y < height; y += spacing * 2) {
    for (let x = spacing; x < width; x += spacing * 2) {
      fill(0); // Black color
      ellipse(x, y, largecircle, largecircle);
    }
  }
  pop();

  // Draw smaller circles in between the larger circles
  for (let y = spacing; y < height; y += spacing) {
    for (let x = spacing; x < width; x += spacing) {
      if ((x + y) % (spacing * 2) !== 0) { // it ensures the correct placement for smaller circles between the large circles
        fill(0); // 
        ellipse(x, y, smallcircle, smallcircle);
      }
    }
  }
}

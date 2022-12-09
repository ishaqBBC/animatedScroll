const canvas = document.getElementById("ali-canvas"); //gets the canvas
const context = canvas.getContext("2d"); //returns a CanvasRenderingContext2D

/**
 * returns the current frame. to be used in animated scroll
 * @param {int} index - number used to get the current image in images folder
 * @returns {string}
 */
const currentFrame = (index) =>
  `./images/ali-${index.toString().padStart(4, "0")}.jpg`;

// Set canvas dimensions
canvas.width = 1158;
canvas.height = 770;

// Create, load and draw the image
const img = new Image();
img.src = currentFrame(1); // we'll make this dynamic in the next step, for now we'll just load image 1 of our sequence
img.onload = function () {
  context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop; // the vertical scroll position of the element, which in our case happens to be the top of the document.
  const maxScrollTop = html.scrollHeight - window.innerHeight; //end (or maximum) value by subtracting the window height from the document scroll height.
  const scrollFraction = scrollTop / maxScrollTop; //users scroll position
  const frameIndex = Math.min(
    frameCount - 1,
    Math.floor(scrollFraction * frameCount)
  );
});

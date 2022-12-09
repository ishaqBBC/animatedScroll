const html = document.documentElement;
const canvas = document.getElementById("ali-canvas");
const context = canvas.getContext("2d");

const frameCount = 60; //number of frames in the sequence (number of files in './images')
/**
 * gets the current frame in the sequence
 * @param {int} index - the position in the sequence of images to display
 * @returns string - file path to the image in the sequence
 */
const currentFrame = (index) =>
  `./images/ali-${index.toString().padStart(4, "0")}.jpg`;

/**
 *creates spaces for images, increases preformance
 */
const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};
//sets the dimensions of the canvas
canvas.width = 1158;
canvas.height = 770;

const img = new Image(); //creates a new image
img.src = currentFrame(1); // sets the src of the image as the first entry in the images folder;
img.onload = function () {
  context.drawImage(img, 0, 0); //draws the image
};
/**
 * used on scroll event, will update the src of image on canvas when scrolled
 * @param {int} index
 */
const updateImage = (index) => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
};

window.addEventListener("scroll", () => {
  const scrollTop = html.scrollTop; //value is a measurement of the distance from the element's top to its topmost visible content. When an element's content does not generate a vertical scrollbar, then its scrollTop value is 0.
  const maxScrollTop = html.scrollHeight - window.innerHeight; //scroll height is the elements max height is the  minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar.
  const scrollFraction = scrollTop / maxScrollTop; //as a decimal - where you are on the page.
  //use a min - so it doesn't go over our number of frames
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount) // where you, out of the frames in the animation scroll (whole number)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1));
});

preloadImages();

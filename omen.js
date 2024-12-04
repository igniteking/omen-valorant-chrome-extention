// Create an image element
const image = new Image();
image.src = ("omen.gif"); // Ensure the image file name and path are correct
image.id = "omen-bottom-left-image";
image.alt = "Bottom Left Image";

// Log the image source URL to debug
console.log("Image source URL:", image.src);

// Error handling for image loading
image.onerror = function () {
  console.error("Failed to load image:", image.src);
};

// Append the image to the body
document.body.appendChild(image);

// Verify the image after appending
console.log("Image element:", document.getElementById("omen-bottom-left-image"));

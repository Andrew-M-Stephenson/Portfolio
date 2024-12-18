const galleryItems = document.querySelectorAll('#gallery img'); // Select all items
let currentIndex = 0;

// Function to show the next image
function showNextImage() {
  // Hide the current active image
  galleryImages[currentIndex].style.opacity = 0;
  
  // Increment the index (loop back if needed)
  currentIndex = (currentIndex + 1) % galleryImages.length;
  
  // Show the new active image
  galleryImages[currentIndex].style.opacity = 1;
}

// Set an interval to change images every 3 seconds
setInterval(showNextImage, 3000);

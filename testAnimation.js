const galleryImages1 = document.querySelectorAll('#gallery1 img'); // Select all items
const galleryImages2 = document.querySelectorAll('#gallery2 img');
const galleryImages3 = document.querySelectorAll('#gallery3 img');
const galleryImages4 = document.querySelectorAll('#gallery4 img');
const galleryImages5 = document.querySelectorAll('#gallery5 img');
let currentIndex1 = 0;
let currentIndex2 = 0;
let currentIndex3 = 0;
let currentIndex4 = 0;
let currentIndex5 = 0;

// Function to show the next image
function showNextImage() {
  // Hide the current active image
  galleryImages1[currentIndex1].classList.remove('active');
  galleryImages1[currentIndex1].style.opacity = 0;
  galleryImages2[currentIndex2].classList.remove('active');
  galleryImages2[currentIndex2].style.opacity = 0;
  galleryImages3[currentIndex3].classList.remove('active');
  galleryImages3[currentIndex3].style.opacity = 0;
  galleryImages4[currentIndex4].classList.remove('active');
  galleryImages4[currentIndex4].style.opacity = 0;
  galleryImages5[currentIndex5].classList.remove('active');
  galleryImages5[currentIndex5].style.opacity = 0;
  
  // Increment the index (loop back if needed)
  currentIndex1 = (currentIndex1 + 1) % galleryImages1.length;
  currentIndex2 = (currentIndex2 + 1) % galleryImages2.length;
  currentIndex3 = (currentIndex3 + 1) % galleryImages3.length;
  currentIndex4 = (currentIndex4 + 1) % galleryImages4.length;
  currentIndex5 = (currentIndex5 + 1) % galleryImages5.length;
  
  // Show the new active image
  galleryImages1[currentIndex1].style.opacity = 1;
  galleryImages1[currentIndex1].classList.add('active');
  galleryImages2[currentIndex2].style.opacity = 1;
  galleryImages2[currentIndex2].classList.add('active');
  galleryImages3[currentIndex3].style.opacity = 1;
  galleryImages3[currentIndex3].classList.add('active');
  galleryImages4[currentIndex4].style.opacity = 1;
  galleryImages4[currentIndex4].classList.add('active');
  galleryImages5[currentIndex5].style.opacity = 1;
  galleryImages5[currentIndex5].classList.add('active');
}

// Set an interval to change images every 3 seconds
setInterval(showNextImage, 3000);

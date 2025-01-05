<link rel="stylesheet" type="text/css" href="https://nativ18.github.io/image-comparison-slider/image-comparison-slider.css">

<div class="image-spliter">
    <div class="mover"></div>
    <img class="img-left" src="https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/8fe80bc2-891c-416a-8cd1-5a0e69e6d8b2/before.jpeg?content-type=image%2Fjpeg">
    <img class="img-right" src="https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/50a99eeb-f371-400f-91a1-9a7799d9b540/after.jpeg?content-type=image%2Fjpeg">
</div>

<script src="https://nativ18.github.io/image-comparison-slider/image-comparison-slider.js"></script>

<script>
  // Ensure DOM is fully loaded before manipulating elements
  document.addEventListener("DOMContentLoaded", function() {
    // Arrays of image URLs for the left and right sides
    const leftImages = [
      "https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/8fe80bc2-891c-416a-8cd1-5a0e69e6d8b2/before.jpeg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/12345-left-image.jpeg",
      "https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/another-left-image.jpeg"
    ];

    const rightImages = [
      "https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/50a99eeb-f371-400f-91a1-9a7799d9b540/after.jpeg?content-type=image%2Fjpeg",
      "https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/12345-right-image.jpeg",
      "https://images.squarespace-cdn.com/content/6769debcb704bd19bef657cf/another-right-image.jpeg"
    ];

    let currentIndex = 0; // Start with the first set of images

    // Get references to the img-left and img-right elements
    const imgLeft = document.querySelector(".img-left"); // Ensure correct query selector
    const imgRight = document.querySelector(".img-right"); // Ensure correct query selector

    // Function to update the images
    function updateImages(index) {
      console.log("Updating images to index:", index);
      imgLeft.src = leftImages[index];
      imgRight.src = rightImages[index];
      console.log("Left image src:", imgLeft.src);
      console.log("Right image src:", imgRight.src);
    }

    // Add event listeners to buttons (ensure they are present in the HTML)
    document.getElementById("prev-btn").addEventListener("click", function() {
      console.log("Previous button clicked");
      currentIndex = (currentIndex - 1 + leftImages.length) % leftImages.length; // Wrap around to the last image if needed
      updateImages(currentIndex);
    });

    document.getElementById("next-btn").addEventListener("click", function() {
      console.log("Next button clicked");
      currentIndex = (currentIndex + 1) % leftImages.length; // Wrap around to the first image if needed
      updateImages(currentIndex);
    });
  });
</script>

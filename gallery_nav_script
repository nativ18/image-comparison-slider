<script>
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

  // References to the img-left and img-right elements
  const imgLeft = document.querySelector(".img-left");
  const imgRight = document.querySelector(".img-right");

  // Function to update the images
  function updateImages(index) {
    imgLeft.src = leftImages[index];
    imgRight.src = rightImages[index];
  }

  // Previous button click event
  document.getElementById("prev-btn").addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + leftImages.length) % leftImages.length; // Wrap around to the last image if needed
    updateImages(currentIndex);
  });

  // Next button click event
  document.getElementById("next-btn").addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % leftImages.length; // Wrap around to the first image if needed
    updateImages(currentIndex);
  });
</script>

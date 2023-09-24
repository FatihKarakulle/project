document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("id1");

  // Ensure the video element exists on the page
  if (video) {
      video.muted = false; // Unmute the video
      video.play(); // Start playing the video
  }
});

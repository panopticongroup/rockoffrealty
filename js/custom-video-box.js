document.addEventListener("DOMContentLoaded", function () {
  const playButtons = document.querySelectorAll(".js-video-button-yt");
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("videoFrame");
  const closeBtn = document.querySelector(".js-modal-video-dismiss-btn");

  playButtons.forEach(button => {
    button.addEventListener("click", function () {
      const videoId = this.getAttribute("data-video-id");
      const channel = this.getAttribute("data-channel");

      if (channel === "youtube" && videoId) {
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
        modal.style.display = "flex";
      }
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
    iframe.src = ""; // stop video
  });

  // close on outside click
  modal.addEventListener("click", function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
      iframe.src = "";
    }
  });
});
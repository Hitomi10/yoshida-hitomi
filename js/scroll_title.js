// document.addEventListener("scroll", () => {
//   const title = document.querySelector(".concept-title");
//   if (!title) return;

//   const move = Math.min(window.scrollY * 0.15, 600);
//   title.style.transform = `translate(-50%, calc(-50% + ${move}px))`;
// });

document.addEventListener("DOMContentLoaded", () => {
  const title = document.querySelector(".concept-title");
  const concept = document.querySelector(".concept");

  const onScroll = () => {
    const rect = concept.getBoundingClientRect();
    const triggerY = window.innerHeight / 1.4; 

    if (rect.top <= triggerY) {
      // concept が「下から半分のライン」まで来たら fixed → absolute
      title.classList.add("is-absolute");
      title.classList.remove("is-fixed");
    } else {
      // まだそこまで来てない間は fixed のまま
      title.classList.add("is-fixed");
      title.classList.remove("is-absolute");
    }
  };

  window.addEventListener("scroll", onScroll);
  onScroll(); // 初期状態も判定
});

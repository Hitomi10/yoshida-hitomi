

document.addEventListener("DOMContentLoaded", () => {
  const blobWrapper = document.querySelector(".blob-wrapper");

  const aboutTitle = document.querySelector(".about-title");
  const worksTitle = document.querySelector(".works-title");
  const photoTitle = document.querySelector(".photo-title");

  if (!blobWrapper || !aboutTitle || !worksTitle || !photoTitle) return;

  // タイトルごとに position オフセットを設定（あとで自由に調整OK）
  const sections = [
    {
      key: "about",
      title: aboutTitle,
      offsetX: -80, // about-title の左あたり
      offsetY: -50
    },
    {
      key: "works",
      title: worksTitle,
      offsetX: -90, // works-title の右あたり
      offsetY: -50
    },
    {
      key: "photo",
      title: photoTitle,
      offsetX: 20, // photo-title の左あたり
      offsetY: -50
    }
  ];

  let currentIndex = 0;

  // 常にその時のタイトルの位置に blob を移動させる（スクロールに追従）
  function followCurrentTitle() {
    const s = sections[currentIndex];
    const rect = s.title.getBoundingClientRect();

    const pageX = rect.left + window.scrollX + s.offsetX;
    const pageY = rect.top + window.scrollY + s.offsetY;

    blobWrapper.style.left = `${pageX}px`;
    blobWrapper.style.top = `${pageY}px`;
  }

  // pos-about / pos-works / pos-photo クラスを付ける
  function updateBlobClass() {
    blobWrapper.classList.remove("pos-about", "pos-works", "pos-photo");
    blobWrapper.classList.add(`pos-${sections[currentIndex].key}`);
  }

  // タイトルの切り替え（画面半分ラインで判定）
  function onScroll() {
    const triggerY = window.innerHeight * 0.5;
    let newIndex = 0;

    sections.forEach((s, i) => {
      if (s.title.getBoundingClientRect().top <= triggerY) {
        newIndex = i;
      }
    });

    // 切り替わった瞬間だけクラス＆位置目標を更新
    if (newIndex !== currentIndex) {
      currentIndex = newIndex;
      updateBlobClass();
      followCurrentTitle(); // 切り替わり時のスムーズ移動
    }

    // スクロール中も現在のタイトルに追従
    followCurrentTitle();
  }

  window.addEventListener("scroll", onScroll);
  window.addEventListener("resize", onScroll);

  // 初期設定
  updateBlobClass();
  onScroll();
});

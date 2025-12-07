// 画像クリック → モーダル表示
document.querySelectorAll(".photo-item img").forEach(img => {
  img.addEventListener("click", () => {
    document.getElementById("photoModal").style.display = "flex";
    document.getElementById("modalImg").src = img.dataset.full;
  });
});

// 閉じるボタン
document.querySelector(".modal-close").addEventListener("click", () => {
  document.getElementById("photoModal").style.display = "none";
});


// 背景クリックして閉じる
document.getElementById("photoModal").addEventListener("click", (e) => {
  if (e.target.id === "photoModal") {
    document.getElementById("photoModal").style.display = "none";
  }
});

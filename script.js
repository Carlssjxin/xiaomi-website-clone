// script.js
const slides = document.querySelectorAll('.banner-slide');
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;

function showSlide(index) {
  // 隐藏所有幻灯片
  slides.forEach(slide => slide.classList.remove('slide-active'));
  dots.forEach(dot => dot.classList.remove('active'));
  
  // 显示当前幻灯片
  slides[index].classList.add('slide-active');
  dots[index].classList.add('active');
}

// 小圆点点击事件
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index;
    showSlide(currentIndex);
  });
});

// 自动轮播（可选）
setInterval(() => {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}, 3000); // 3秒切换一次
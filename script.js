// 初始化音乐播放器
const ap = new APlayer({
  container: document.getElementById('aplayer'),
  audio: [{
    name: '富士山下',
    artist: '陈奕迅',
    url: 'ses/富士山下-爱情转移-粤语版-陈奕迅.mp3',
    cover: 'ses/girl_glow_eyes_1108829_1920x1080.jpg'
  }]
});

// 社交媒体链接
const socialLinks = {
  bilibili: 'https://www.bilibili.com',
  weibo: 'https://weibo.com',
  douyin: 'https://www.douyin.com'
};

// 更新社交媒体链接
document.querySelector('.social-links .fa-bilibili').parentElement.href = socialLinks.bilibili;
document.querySelector('.social-links .fa-weibo').parentElement.href = socialLinks.weibo;
document.querySelector('.social-links .fa-tiktok').parentElement.href = socialLinks.douyin;

// 时间显示功能
function updateTime() {
  const now = new Date();
  const yearEnd = new Date(now.getFullYear(), 11, 31);
  const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
  const dayEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

  const yearProgress = (yearEnd - now) / (yearEnd - new Date(now.getFullYear(), 0, 1));
  const monthProgress = (monthEnd - now) / (monthEnd - new Date(now.getFullYear(), now.getMonth(), 1));
  const dayProgress = (dayEnd - now) / (dayEnd - new Date(now.getFullYear(), now.getMonth(), now.getDate()));

  document.getElementById('year-progress').style.width = `${(1 - yearProgress) * 100}%`;
  document.getElementById('month-progress').style.width = `${(1 - monthProgress) * 100}%`;
  document.getElementById('day-progress').style.width = `${(1 - dayProgress) * 100}%`;

  document.getElementById('year-remaining').textContent = `${Math.ceil((yearEnd - now) / (1000 * 60 * 60 * 24))} 天`;
  document.getElementById('month-remaining').textContent = `${Math.ceil((monthEnd - now) / (1000 * 60 * 60 * 24))} 天`;
  document.getElementById('day-remaining').textContent = `${Math.ceil((dayEnd - now) / (1000 * 60 * 60))} 小时`;
}

// 页面加载完成后的动画
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  updateTime();
  setInterval(updateTime, 1000);
});

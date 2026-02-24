---
title: 游戏中心
date: 2026-02-24
---

<style>
/* ===== 科幻游戏中心 ===== */
:root {
  --cyber-cyan: #00fff9;
  --cyber-pink: #ff00ff;
  --cyber-purple: #bc13fe;
  --cyber-blue: #0a0a16;
  --cyber-dark: #05050c;
  --cyber-glow: rgba(0, 255, 249, 0.3);
}

/* 全局样式 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: var(--cyber-dark);
  font-family: 'Rajdhani', sans-serif;
  min-height: 100vh;
  color: #fff;
  position: relative;
  overflow-x: hidden;
}

/* 动态背景 */
.cyber-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background: radial-gradient(circle at 20% 30%, var(--cyber-glow) 0%, transparent 30%),
              radial-gradient(circle at 80% 70%, rgba(255, 0, 255, 0.2) 0%, transparent 30%),
              linear-gradient(135deg, var(--cyber-blue) 0%, #0f0f1a 100%);
  animation: bgPulse 8s infinite alternate;
}

@keyframes bgPulse {
  0% { opacity: 0.7; }
  100% { opacity: 1; }
}

/* 主容器 */
.game-hub {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  position: relative;
}

/* 返回按钮 */
.back-link {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 12px 24px;
  margin: 20px 0;
  background: rgba(0, 255, 249, 0.1);
  border: 1px solid var(--cyber-cyan);
  border-radius: 40px;
  color: var(--cyber-cyan);
  text-decoration: none;
  font-family: 'Orbitron', sans-serif;
  font-size: 0.9rem;
  letter-spacing: 1px;
  backdrop-filter: blur(10px);
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.back-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--cyber-cyan), transparent);
  transition: left 0.6s;
}

.back-link:hover {
  background: var(--cyber-cyan);
  color: var(--cyber-dark);
  box-shadow: 0 0 30px var(--cyber-cyan);
  transform: translateX(-5px);
}

.back-link:hover::before {
  left: 100%;
}

/* 头部区域 */
.hub-header {
  text-align: center;
  margin: 40px 0 60px;
  position: relative;
}

.glitch-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 5rem;
  font-weight: 900;
  text-transform: uppercase;
  color: var(--cyber-cyan);
  text-shadow: 
    0.05em 0 0 var(--cyber-pink),
    -0.05em -0.025em 0 var(--cyber-purple),
    0.025em 0.05em 0 var(--cyber-cyan);
  animation: glitch 725ms infinite;
  letter-spacing: 10px;
}

@keyframes glitch {
  0% {
    text-shadow: 
      0.05em 0 0 var(--cyber-pink),
      -0.05em -0.025em 0 var(--cyber-purple),
      0.025em 0.05em 0 var(--cyber-cyan);
  }
  14% {
    text-shadow: 
      0.05em 0 0 var(--cyber-pink),
      -0.05em -0.025em 0 var(--cyber-purple),
      0.025em 0.05em 0 var(--cyber-cyan);
  }
  15% {
    text-shadow: 
      -0.05em -0.025em 0 var(--cyber-pink),
      0.025em 0.025em 0 var(--cyber-purple),
      -0.05em -0.05em 0 var(--cyber-cyan);
  }
  49% {
    text-shadow: 
      -0.05em -0.025em 0 var(--cyber-pink),
      0.025em 0.025em 0 var(--cyber-purple),
      -0.05em -0.05em 0 var(--cyber-cyan);
  }
  50% {
    text-shadow: 
      0.025em 0.05em 0 var(--cyber-pink),
      0.05em 0 0 var(--cyber-purple),
      0 -0.05em 0 var(--cyber-cyan);
  }
  99% {
    text-shadow: 
      0.025em 0.05em 0 var(--cyber-pink),
      0.05em 0 0 var(--cyber-purple),
      0 -0.05em 0 var(--cyber-cyan);
  }
  100% {
    text-shadow: 
      0.05em 0 0 var(--cyber-pink),
      -0.05em -0.025em 0 var(--cyber-purple),
      0.025em 0.05em 0 var(--cyber-cyan);
  }
}

.subtitle {
  font-size: 1.2rem;
  color: #fff;
  margin-top: -20px;
  letter-spacing: 4px;
  text-transform: uppercase;
  background: linear-gradient(90deg, var(--cyber-cyan), var(--cyber-pink));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 统计卡片 */
.stats-panel {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 40px 0 50px;
}

.stat-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 249, 0.2);
  border-radius: 20px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.stat-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(45deg, 
    transparent 30%, 
    rgba(0, 255, 249, 0.1) 50%,
    transparent 70%);
  transform: rotate(45deg);
  animation: shine 6s infinite;
}

@keyframes shine {
  0% { transform: translateX(-100%) rotate(45deg); }
  20% { transform: translateX(100%) rotate(45deg); }
  100% { transform: translateX(100%) rotate(45deg); }
}

.stat-card:hover {
  border-color: var(--cyber-cyan);
  transform: translateY(-5px);
  box-shadow: 0 0 30px rgba(0, 255, 249, 0.3);
}

.stat-number {
  font-size: 2.5rem;
  font-family: 'Orbitron', sans-serif;
  font-weight: 700;
  color: var(--cyber-cyan);
  text-shadow: 0 0 20px var(--cyber-cyan);
}

.stat-label {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  letter-spacing: 1px;
}

/* 分类标签 */
.category-nav {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin: 40px 0;
  flex-wrap: wrap;
}

.cat-btn {
  padding: 12px 30px;
  background: transparent;
  border: 1px solid rgba(0, 255, 249, 0.3);
  border-radius: 40px;
  color: #fff;
  font-family: 'Orbitron', sans-serif;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  position: relative;
  overflow: hidden;
}

.cat-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, var(--cyber-cyan), transparent);
  transition: left 0.4s;
}

.cat-btn:hover {
  border-color: var(--cyber-cyan);
  box-shadow: 0 0 20px var(--cyber-cyan);
  transform: translateY(-2px);
}

.cat-btn:hover::before {
  left: 100%;
}

.cat-btn.active {
  background: var(--cyber-cyan);
  color: var(--cyber-dark);
  border-color: var(--cyber-cyan);
  box-shadow: 0 0 30px var(--cyber-cyan);
}

/* 游戏网格 */
.games-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
  margin: 40px 0;
}

/* 游戏卡片 - 科幻版 */
.game-card {
  background: rgba(10, 10, 20, 0.6);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 255, 249, 0.3);
  border-radius: 20px;
  padding: 25px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.game-card::before {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, 
    var(--cyber-cyan), 
    var(--cyber-pink), 
    var(--cyber-purple));
  border-radius: 22px;
  opacity: 0;
  z-index: -1;
  transition: opacity 0.4s;
}

.game-card:hover {
  transform: translateY(-10px) scale(1.02);
}

.game-card:hover::before {
  opacity: 1;
}

.game-card::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(90deg, 
    transparent, 
    rgba(255, 255, 255, 0.1), 
    transparent);
  transform: skewX(-25deg);
  transition: left 0.6s;
}

.game-card:hover::after {
  left: 150%;
}

.game-icon {
  width: 80px;
  height: 80px;
  margin: 0 auto 20px;
  background: linear-gradient(135deg, rgba(0, 255, 249, 0.2), rgba(255, 0, 255, 0.2));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  border: 2px solid var(--cyber-cyan);
  box-shadow: 0 0 30px rgba(0, 255, 249, 0.3);
  transition: all 0.4s;
}

.game-card:hover .game-icon {
  transform: rotate(360deg) scale(1.1);
  border-color: var(--cyber-pink);
  box-shadow: 0 0 40px var(--cyber-pink);
}

.game-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 1.5rem;
  color: var(--cyber-cyan);
  text-align: center;
  margin-bottom: 10px;
  transition: all 0.3s;
}

.game-card:hover .game-title {
  color: var(--cyber-pink);
  text-shadow: 0 0 10px var(--cyber-pink);
}

.game-desc {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  text-align: center;
  margin-bottom: 20px;
  line-height: 1.6;
}

.game-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

.game-category {
  padding: 5px 15px;
  background: rgba(0, 255, 249, 0.2);
  border-radius: 20px;
  color: var(--cyber-cyan);
  font-size: 0.8rem;
  font-family: 'Orbitron', sans-serif;
}

.game-rating {
  color: #ffd700;
  font-weight: bold;
}

.game-btn {
  display: block;
  width: 100%;
  padding: 15px;
  background: transparent;
  border: 2px solid var(--cyber-cyan);
  border-radius: 10px;
  color: var(--cyber-cyan);
  text-decoration: none;
  text-align: center;
  font-family: 'Orbitron', sans-serif;
  font-weight: bold;
  letter-spacing: 2px;
  transition: all 0.4s;
  position: relative;
  overflow: hidden;
}

.game-btn::before {
  content: '▶';
  position: absolute;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
  transition: left 0.3s;
}

.game-btn:hover {
  background: var(--cyber-cyan);
  color: var(--cyber-dark);
  box-shadow: 0 0 30px var(--cyber-cyan);
  padding-left: 35px;
}

.game-btn:hover::before {
  left: 20px;
  color: var(--cyber-dark);
}

/* 热门游戏区域 */
.hot-zone {
  margin-top: 60px;
  padding: 30px;
  background: linear-gradient(135deg, 
    rgba(0, 255, 249, 0.1), 
    rgba(255, 0, 255, 0.1));
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.hot-zone::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, 
    transparent, 
    var(--cyber-cyan), 
    var(--cyber-pink), 
    var(--cyber-purple), 
    transparent);
  animation: scan 4s linear infinite;
}

@keyframes scan {
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}

.hot-title {
  font-family: 'Orbitron', sans-serif;
  font-size: 2rem;
  color: #fff;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
}

.hot-title i {
  color: #ff6b6b;
  animation: pulse 1s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.2); }
}

.hot-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.hot-card {
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(0, 255, 249, 0.2);
  border-radius: 15px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  transition: all 0.3s;
}

.hot-card:hover {
  border-color: var(--cyber-cyan);
  transform: translateX(10px);
  background: rgba(0, 255, 249, 0.1);
}

.hot-rank {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--cyber-cyan), var(--cyber-pink));
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--cyber-dark);
}

.hot-info {
  flex: 1;
}

.hot-name {
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
}

.hot-stats {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.hot-tag {
  padding: 5px 10px;
  background: rgba(255, 0, 255, 0.2);
  border-radius: 20px;
  color: var(--cyber-pink);
  font-size: 0.8rem;
}

/* 响应式 */
@media (max-width: 768px) {
  .glitch-title {
    font-size: 3rem;
    letter-spacing: 5px;
  }
  
  .stats-panel {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .games-grid {
    grid-template-columns: 1fr;
  }
  
  .cat-btn {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
}

/* 加载动画 */
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.float {
  animation: float 3s infinite;
}
</style>

<!-- 字体 -->
<link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

<!-- 游戏中心内容 -->
<div class="game-hub">
  
  <!-- 返回首页 -->
  <a href="/" class="back-link">
    <i class="fas fa-arrow-left"></i> 返回星际总部
  </a>
  
  <!-- 头部 -->
  <div class="hub-header">
    <h1 class="glitch-title" data-text="GAME HUB">GAME HUB</h1>
    <div class="subtitle">✦ 第 7 星际游戏终端 ✦</div>
  </div>
  
  <!-- 统计面板 -->
  <div class="stats-panel">
    <div class="stat-card">
      <div class="stat-number">5</div>
      <div class="stat-label">已上线游戏</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">∞</div>
      <div class="stat-label">无限乐趣</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">4.8</div>
      <div class="stat-label">平均评分</div>
    </div>
    <div class="stat-card">
      <div class="stat-number">🚀</div>
      <div class="stat-label">持续更新</div>
    </div>
  </div>
  
  <!-- 分类导航 -->
  <div class="category-nav">
    <button class="cat-btn active" data-cat="all">全部游戏</button>
    <button class="cat-btn" data-cat="action">动作游戏</button>
    <button class="cat-btn" data-cat="puzzle">益智游戏</button>
    <button class="cat-btn" data-cat="classic">经典游戏</button>
    <button class="cat-btn" data-cat="hot">热门🔥</button>
  </div>
  
  <!-- 游戏网格 -->
  <div class="games-grid">
    
    <!-- 1. 扫雷 -->
    <div class="game-card" data-cats="classic hot">
      <div class="game-icon">💣</div>
      <h3 class="game-title">扫雷</h3>
      <p class="game-desc">经典扫雷游戏，左键挖开右键标记，三种难度可选。考验你的逻辑推理能力。</p>
      <div class="game-meta">
        <span class="game-category">经典</span>
        <span class="game-rating"><i class="fas fa-star"></i> 4.8</span>
      </div>
      <a href="/games/minesweeper.html" class="game-btn">启动游戏</a>
    </div>
    
    <!-- 2. 2048 -->
    <div class="game-card" data-cats="puzzle hot">
      <div class="game-icon">🧮</div>
      <h3 class="game-title">2048</h3>
      <p class="game-desc">数字合成游戏，滑动合并相同数字，挑战2048高分。简单但令人上瘾。</p>
      <div class="game-meta">
        <span class="game-category">益智</span>
        <span class="game-rating"><i class="fas fa-star"></i> 4.9</span>
      </div>
      <a href="/games/2048.html" class="game-btn">启动游戏</a>
    </div>
    
    <!-- 3. 贪吃蛇 -->
    <div class="game-card" data-cats="classic">
      <div class="game-icon">🐍</div>
      <h3 class="game-title">贪吃蛇</h3>
      <p class="game-desc">经典贪吃蛇，用方向键控制，吃食物变长。小心不要撞到墙壁和自己。</p>
      <div class="game-meta">
        <span class="game-category">经典</span>
        <span class="game-rating"><i class="fas fa-star"></i> 4.7</span>
      </div>
      <a href="/games/snake.html" class="game-btn">启动游戏</a>
    </div>
    
    <!-- 4. 五子棋 -->
    <div class="game-card" data-cats="puzzle">
      <div class="game-icon">⚫</div>
      <h3 class="game-title">五子棋</h3>
      <p class="game-desc">和AI下一盘五子棋，考验你的智慧。五子连珠即可获胜。</p>
      <div class="game-meta">
        <span class="game-category">益智</span>
        <span class="game-rating"><i class="fas fa-star"></i> 4.6</span>
      </div>
      <a href="#" class="game-btn">即将上线</a>
    </div>
    
    <!-- 5. 打砖块 -->
    <div class="game-card" data-cats="action">
      <div class="game-icon">🧱</div>
      <h3 class="game-title">打砖块</h3>
      <p class="game-desc">移动挡板反弹球，打掉所有砖块。经典街机游戏，重温童年回忆。</p>
      <div class="game-meta">
        <span class="game-category">动作</span>
        <span class="game-rating"><i class="fas fa-star"></i> 4.6</span>
      </div>
      <a href="/games/breakout.html" class="game-btn">启动游戏</a>
    </div>
    
  </div>
  
  <!-- 热门推荐 -->
  <div class="hot-zone">
    <div class="hot-title">
      <i class="fas fa-fire"></i> 热门排行榜
    </div>
    <div class="hot-grid">
      <div class="hot-card">
        <span class="hot-rank">1</span>
        <div class="hot-info">
          <div class="hot-name">2048</div>
          <div class="hot-stats">2,345 次游玩</div>
        </div>
        <span class="hot-tag">🔥 热门</span>
      </div>
      <div class="hot-card">
        <span class="hot-rank">2</span>
        <div class="hot-info">
          <div class="hot-name">扫雷</div>
          <div class="hot-stats">1,892 次游玩</div>
        </div>
        <span class="hot-tag">⭐ 经典</span>
      </div>
      <div class="hot-card">
        <span class="hot-rank">3</span>
        <div class="hot-info">
          <div class="hot-name">贪吃蛇</div>
          <div class="hot-stats">1,234 次游玩</div>
        </div>
        <span class="hot-tag">🐍 怀旧</span>
      </div>
    </div>
  </div>
  
  <!-- 页脚装饰 -->
  <div style="text-align: center; margin: 50px 0 20px; color: rgba(255,255,255,0.3); font-family: 'Orbitron', sans-serif; font-size: 0.8rem; letter-spacing: 2px;">
    ✦ 系统版本 v2.0.0 · 星际游戏终端 ✦
  </div>
  
</div>

<script>
// 分类筛选功能
document.addEventListener('DOMContentLoaded', function() {
  const catBtns = document.querySelectorAll('.cat-btn');
  const games = document.querySelectorAll('.game-card');
  
  catBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // 更新按钮状态
      catBtns.forEach(b => b.classList.remove('active'));
      this.classList.add('active');
      
      const category = this.dataset.cat;
      
      // 筛选游戏
      games.forEach(game => {
        const cats = game.dataset.cats.split(' ');
        if (category === 'all' || cats.includes(category)) {
          game.style.display = 'block';
          // 添加淡入动画
          game.style.animation = 'none';
          game.offsetHeight; // 触发重绘
          game.style.animation = 'float 3s infinite';
        } else {
          game.style.display = 'none';
        }
      });
    });
  });
});
</script>
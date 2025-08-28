<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Company</h3>
          <ul class="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Support</h3>
          <ul class="footer-links">
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Contact Us</a></li>
            <li><a href="#">Safety</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Business</h3>
          <ul class="footer-links">
            <li><a href="#">Partner with us</a></li>
            <li><a href="#">Merchant Portal</a></li>
            <li><a href="#">Delivery Partners</a></li>
            <li><a href="#">Corporate</a></li>
          </ul>
        </div>
        
        <div class="footer-section">
          <h3>Download App</h3>
          <div class="app-links">
            <a href="#" class="app-link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style="height: 40px;">
            </a>
            <a href="#" class="app-link">
              <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" style="height: 40px;">
            </a>
          </div>
          <div class="social-links mt-16">
            <a href="#" class="social-link">📘</a>
            <a href="#" class="social-link">📷</a>
            <a href="#" class="social-link">🐦</a>
            <a href="#" class="social-link">💼</a>
          </div>
        </div>
      </div>
      
      <div class="footer-bottom">
        <p>&copy; 2024 Snoonu. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.app-links {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.app-link img {
  height: 40px;
  width: auto;
}

.social-links {
  display: flex;
  gap: 12px;
}

.social-link {
  display: inline-block;
  font-size: 1.5rem;
  text-decoration: none;
  transition: transform 0.2s;
}

.social-link:hover {
  transform: scale(1.1);
}
</style>
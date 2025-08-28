<template>
  <div class="main-section">
    <!-- Toggle Buttons -->
    <div class="toggle-section">
      <button
        class="toggle-btn"
        :class="{ active: activeTab === 'foryou' }"
        @click="setActiveTab('foryou')"
      >
        <span class="toggle-icon">✨</span>
        For You
      </button>
      <button
        class="toggle-btn"
        :class="{ active: activeTab === 'popular' }"
        @click="setActiveTab('popular')"
      >
        <span class="toggle-icon">🔥</span>
        Popular
      </button>
    </div>

    <!-- Content Area -->
    <div class="content-area">
      <ForYou v-if="activeTab === 'foryou'" />
      <div v-else class="popular-content">
        <p>Popular content coming soon...</p>
      </div>
    </div>
  </div>
</template>

<script>
import ForYou from "./ForYou.vue";

export default {
  name: "MainSection",
  components: {
    ForYou,
  },
  data() {
    return {
      activeTab: "foryou",
    };
  },
  methods: {
    setActiveTab(tab) {
      this.activeTab = tab;
    },
  },
};
</script>

<style scoped>
.main-section {
  width: 100%;
  margin: 24px 0;
}

.toggle-section {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 24px;
}

.toggle-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  border: none;
  background: #f8f9fa;
  color: #666;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.toggle-btn:first-child {
  border-radius: 25px 0 0 25px;
}

.toggle-btn:last-child {
  border-radius: 0 25px 25px 0;
}

.toggle-btn.active {
  background: #000;
  color: white;
  z-index: 1;
}

.toggle-btn:hover:not(.active) {
  background: #e9ecef;
}

.toggle-icon {
  font-size: 16px;
}

.content-area {
  width: 100%;
}

.popular-content {
  text-align: center;
  padding: 40px;
  color: #666;
}

/* Responsive Design */
@media (max-width: 768px) {
  .toggle-btn {
    padding: 10px 20px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .toggle-btn {
    padding: 8px 16px;
    font-size: 12px;
  }

  .toggle-icon {
    font-size: 14px;
  }
}
</style>

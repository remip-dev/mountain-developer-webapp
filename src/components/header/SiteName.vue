<template>
  <div class="container">
    <img class="emoji" src="@/assets/images/mountain_emoji.webp" />
    <div class="site-name bold-maj">RÉMI POLICET</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SiteName'
})
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 15px;
}
.emoji {
  width: 60px;
  height: 60px;
}

.site-name {
  font-size: 40px;
  color: var(--tertiary-color);
  letter-spacing: 12px;
  margin-bottom: 10px;
}

@media (max-width: 600px) {
  .site-name {
    font-size: var(--tablet-h2-font-size);
    margin-bottom: 5px;
  }

  .emoji {
    width: 40px;
    height: 40px;
  }
}

@media (max-width: 400px) {
  .site-name {
    letter-spacing: 8px;
  }
}
</style>

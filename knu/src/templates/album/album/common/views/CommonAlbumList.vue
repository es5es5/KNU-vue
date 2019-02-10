<template>
  <div id="common_album_list">
    <div>
      <magic-grid>
        <el-card :body-style="{ padding: '0px' }"
        :class="{
          'animated': true,
          'el-card': true,
          'pulse': true,
          'delay-2s': true
        }">
          <img src="@/assets/logo.png" class="image">
        </el-card>
        <el-card :body-style="{ padding: '0px' }" v-for="(item, index) in 5" :key="index">
          <img src="@/assets/mark.png" class="image">
          <div style="padding: 14px;">
            <span>Yummy hamburger</span>
            <div class="bottom clearfix">
              <time class="time">{{ 'currentDate' }}</time>
              <el-button type="text" class="button">Operating button</el-button>
            </div>
          </div>
        </el-card>
      </magic-grid>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
img {
  animation-play-state: paused;
}
img:hover {
  animation-play-state: running;
  animation: bounce 1s;
}
</style>

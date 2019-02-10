<template>
  <div class="header">
    <div class="header_wrap">
      <img src="@/assets/mark.png" alt="" class="mark">
      <span class="header_bar">응응</span>
    </div>
  </div>
</template>

<script>
export default {
	name: 'Header',
	created () {},
	mounted () {},
	destroyed () {},
	components: {},
	filters: {},
	data () {
    return {}
  },
	computed: {},
	watch: {},
	methods: {}
}
</script>

<style lang="scss" scoped>
.mark {
  width: 110px;
  height: 110px;
}
.header_wrap {
  background-color: rgb(190, 190, 245);
  height: 120px;
}
</style>

<template>
  <div id="main_layout">
    <Header></Header>
    <span>main_layout</span>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'

export default {
	name: 'MainLayout',
	components: {
		Header
	},
	methods: {}
}
</script>

<style lang="scss">

</style>

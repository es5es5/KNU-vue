<template>
  <div class="main_layout">
    <Header></Header>
    <Side-Bar></Side-Bar>
  </div>
</template>

<script>
// import Header from '@/components/Header'
import Header from '@/components/Header'
import SideBar from '@/components/SideBar'

export default {
	name: 'MainLayout',
	created () {},
	mounted () {},
	destroyed () {},
	components: {
    Header,
    SideBar
  },
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
</style>

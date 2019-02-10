<template>
  <div class="main_layout">
    <Header></Header>
    <el-col :span="4">
      <Side-Bar></Side-Bar>
    </el-col>
    <el-col :span="20">
      <router-view></router-view>
    </el-col>
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

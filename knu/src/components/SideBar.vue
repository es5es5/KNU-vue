<template>
  <div id="side_bar">
		<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			background-color="#545c64"
			text-color="#fff"
			active-text-color="#ffd04b">
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-menu"></i>
					<span>교수님 자료실</span>
				</template>
				<el-menu-item index="1-1" :route="{ path: '/CommonAlbum' }">공지사항</el-menu-item>
				<el-menu-item index="1-2">참고자료</el-menu-item>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-document"></i>
					<span>주간업무보고서</span>
				</template>
				<el-menu-item index="2-1">김동욱</el-menu-item>
				<el-menu-item index="2-2">김혜진</el-menu-item>
				<el-menu-item index="2-3">김희진</el-menu-item>
				<el-menu-item index="2-4">조진우</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-picture"></i>
					<span>우리들 사진첩</span>
				</template>
				<el-menu-item-group title="2019년">
					<el-menu-item index="3-1" @click="goCommonAlbum">신년회</el-menu-item>
					<el-menu-item index="3-2">MT</el-menu-item>
				</el-menu-item-group>
				<el-menu-item-group title="2018년">
					<el-menu-item index="3-3">HOME-COMMING</el-menu-item>
					<el-menu-item index="3-4">MT</el-menu-item>
				</el-menu-item-group>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title">
					<i class="el-icon-share"></i>
					<span>구성원</span>
				</template>
				<el-menu-item index="4-1" @click="goWorkspace">자리 배치도</el-menu-item>
			</el-submenu>
		</el-menu>
  </div>
</template>

<script>
export default {
	name: 'SideBar',
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
	methods: {
		goCommonAlbum () {
			this.$router.push({name: 'CommonAlbum'})
		},
		goWorkspace () {
			this.$router.push({name: 'Workspace'})
		}
	}
}
</script>

<style lang="scss" scoped>
</style>

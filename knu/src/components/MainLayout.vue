<template>
  <div id="main_layout">
    <magic-grid>
      <card
        v-for="(post, i) in posts"
        :key="i"
        :title="post.title"
        :body="post.body" />
    </magic-grid>
  </div>
</template>

<script>
import card from '@/components/card'
export default {
	name: 'MainLayout',
	created () {},
	mounted () {},
	destroyed () {},
	components: {
    card
  },
	filters: {},
	data () {
    return {
      posts: [
        {
          title: 'a',
          body: 'as'
        },
        {
          title: 'a',
          body: 'as'
        },
        {
          title: 'a',
          body: 'as'
        },
        {
          title: 'a',
          body: 'as'
        },
        {
          title: 'a',
          body: 'as'
        },
        {
          title: 'a',
          body: 'as'
        },
        {
          title: 'a',
          body: 'as'
        },
      ]
    }
  },
	computed: {},
	watch: {},
	methods: {}
}
</script>

<style lang="scss" scoped>
</style>

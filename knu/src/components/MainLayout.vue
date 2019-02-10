<template>
  <div id="main_layout">
    <h1 class="animated infinite bounce delay-2s">Example</h1>
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
import card from '@/components/Card'

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

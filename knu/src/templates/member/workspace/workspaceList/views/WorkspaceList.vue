<template>
    <div class="workspace_list">
      <div>
        <button @click="gridCreate"></button>
      </div>
      <grid-layout
        :layout.sync="gridItems"
        :col-num="30"
        :row-height="30"
        :is-draggable="true"
        :is-resizable="true"
        :is-mirrored="false"
        :vertical-compact="false"
        :margin="[5, 5]"
        :use-css-transforms="false"
        >

        <grid-item :class="item.color" v-for="item in gridItems" :key="item.i"
          :x="item.x"
          :y="item.y"
          :w="item.w"
          :h="item.h"
          :i="item.i"
          :static="item.static">
          {{item.i}}
        </grid-item>
      </grid-layout>
    </div>
</template>

<script>
export default {
	name: 'WorkspaceList',
	created () {},
	mounted () {},
	destroyed () {},
	components: {},
	filters: {},
	data () {
    return {
      gridItems: [
        {
          x: 0,
          y: 0,
          w: 4,
          h: 4,
          i: '0',
          static: true,
          color: 'bg_orange'
        },
        {
          x: 0,
          y: 0,
          w: 4,
          h: 4,
          i: '1',
          static: true,
          color: 'bg_green'
        },
        {
          x: 0,
          y: 0,
          w: 4,
          h: 4,
          i: '3',
          static: true,
          color: 'bg_blue'
        },
      ],
    }
  },
	computed: {},
	watch: {},
	methods: {
    putGridItem () {
      console.log('sdfasdfasdfasdf')
    },
    gridCreate () {
      this.gridItems.push({
        x: -4,
        y: -1,
        w: 4,
        h: 4,
        static: true,
        color: 'bg_orange',
        i: ((Math.random() * 1000).toFixed(0)).toString(),
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>

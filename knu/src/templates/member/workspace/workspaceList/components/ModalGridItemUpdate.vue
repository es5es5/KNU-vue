<template lang="html">
  <div>
    <sui-modal v-model="_open">
      <sui-modal-header>Select a Photo</sui-modal-header>
      <sui-modal-content image>
        <sui-image wrapped size="medium" src="static/images/avatar/large/rachel.png" />
        <sui-modal-description>
          <sui-header>Default Profile Image</sui-header>
          <p>We've found the following gravatar image associated with your e-mail address.</p>
          <p>Is it okay to use this photo?</p>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button positive @click.native="close">
          OK
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
export default {
  name: 'ModalExample',
  props: {
    modalInit: {
			type: Boolean,
			default: false
		},
		open: {
			type: Boolean,
			default: false
		}
	},
  data() {
    return {};
  },
  computed: {
    _modalInit () {
      return this.modalInit
    },
    _open () {
      return this.open
    }
  },
  watched: {
    _modalInit () {
      this.toggle()
    },
    _open () {
      this.toggle()
    }
  },
  methods: {
    close() {
      this._open = false
    },
  },
};
</script>

<style lang="css">
</style>
<template>

  <div class="card large">
    <div class="card-image">
      <figure class="image">
        <img src="@/assets/logo.png" alt="Image">
      </figure>
    </div>

    <div class="card-content content">
      <h4>{{ title }}</h4>
      <p>{{ body }}</p>
    </div>
  </div>

</template>

<script>
export default {
  name: 'card',
  props: {
    title: {
      type: String,
      default: ''
    },
    body: {
      type: String,
      default: ''
    }
  }
}
</script>

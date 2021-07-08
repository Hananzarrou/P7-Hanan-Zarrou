<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="2000"
      controls
      indicators
      background="#ccc"
      style="text-shadow: 1px 1px 2px succes;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
      <template  v-slot:img>
        <img
            class="d-block img-fluid w-100 h-50"
            src="@/assets/photo5envir.jpg"
            alt="image slot"
          >
      </template>
      </b-carousel-slide>
      <b-carousel-slide>
      <template  v-slot:img>
        <img
            class="d-block img-fluid w-100 h-50"
            src="@/assets/photo4envir-min.jpg"
            alt="image slot"
          >
      </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart() {
        this.sliding = true
      },
      onSlideEnd() {
        this.sliding = false
      }
    }
  }
</script>
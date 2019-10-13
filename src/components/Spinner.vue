<template>
  <div
    class="vue-spinner"
    ref="spinner"
    :class="{ 'vue-spinner-scoped': isScoped }"
    :style="{ background: background }"
    v-show="isShown"
  >
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        :fill="color"
        :style="{
          transform: 'scale(' + size + ') translate(-50%, -50%)'
        }"
      >
        <path
          opacity=".25"
          d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24"
        />
        <path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z">
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 16 16"
            to="360 16 16"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Spinner",

  props: {
    background: {
      type: String,
      default: "rgba(255, 255, 255, 0.5)"
    },

    size: {
      type: Number,
      default: 1
    },

    color: {
      type: String,
      default: "#DD4814"
    },
    showByDefault: {
      type: Boolean,
      default: true
    },
    scoped: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      isScoped: this.scoped,
      isShown: this.showByDefault
    };
  },

  mounted() {
    if (this.$refs.spinner.parentNode) {
      this.$refs.spinner.parentNode.classList.add("vue-spinner-parent");
    }
  },

  methods: {
    show() {
      this.isShown = true;
    },

    showScoped() {
      this.isScoped = true;
      this.show();
    },

    hide() {
      this.isShown = false;
    }
  }
};
</script>

<style>
.vue-spinner {
  all: initial;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
}

.vue-spinner svg {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 36px !important;
  height: 36px;
  transform-origin: 0 0;
}

.vue-spinner-parent {
  position: relative !important;
}

.vue-spinner-scoped {
  position: absolute;
}
</style>

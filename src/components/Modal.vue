<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ pitch: color === 'pitch' }">
      <h1>Hello {{ header }}</h1>
      <slot></slot>
      <div>
        <h1>
          <slot name="emy"></slot>
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "color"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.backdrop {
  position: fixed;
  top: 0;
  background-color: rgba(80, 81, 81, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 1s ease-in-out;
}
.modal {
  background-color: white;
  width: 500px;
  height: 300px;
  margin: auto;
  border-radius: 10px;
}
.pitch {
  background-color: rgb(253, 221, 190);
}
</style>

<template>
  <h1>Modal App</h1>
  <teleport to="#modals" v-if="showModal">
    <Modal
      :header="header"
      toggleModal="toggleModal"
      color="pitch"
      @close="toggleModal"
    >
      <h2>Top modal</h2>
      <template v-slot:emy>
        <h3>Emy</h3>
      </template>
    </Modal>
  </teleport>
  <button @click="toggleModal">Open Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      showModal: false,
      header: "Mark",
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app,
#modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

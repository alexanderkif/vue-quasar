<template>
  <q-page padding>
    <p>Gallery</p>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: 1,
          name: "Picture 1",
          sold: true
        },
        {
          id: 2,
          name: "Picture 2",
          sold: false
        },
        {
          id: 3,
          name: "Picture 3",
          sold: true
        },
      ]
    }
  }
}
</script>

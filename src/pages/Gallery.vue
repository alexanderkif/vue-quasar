<template>
  <q-page padding>
    <p>Gallery</p>
    <div class="q-pa-md row items-start q-gutter-md">
      <q-card class="my-card" v-for="art in arts" :key="art.id">
        <img src="https://cdn.quasar.dev/img/mountains.jpg" :alt="art.image" :title="art.image">

        <q-card-section>
          <div class="text-h6">{{ art.name }}</div>
          <div class="text-subtitle2">{{ art.aythor }}</div>
        </q-card-section>

        <q-card-section>
          {{ art.descr }}
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<style lang="scss" scoped>
  .my-card {
    width: 100%;
    max-width: 250px;
  }
</style>

<script>
export default {
  data() {
    return {
      arts: []
    }
  },
  created () {
    this.$axios.get('https://rest-arts.herokuapp.com/arts')
      .then((response) => {
        console.log(response.data)
        this.arts = response.data
      })
      .catch((err) => {
        this.lorem = err
        console.log(err)
        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Loading failed',
          icon: 'report_problem'
        })
      })
  }
}
</script>

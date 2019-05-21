<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>Quasar App</q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab
          to="/"
          icon="image"
          label="Gallery" />
        <q-route-tab
          to="/workshop"
          icon="brush"
          label="Workshop" />
      </q-tabs>
    </q-footer>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-2">
      <q-list>
        <q-item-label header>Painter menu</q-item-label>
        <q-item clickable exact to="/">
          <q-item-section avatar>
            <q-icon name="image"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Gallery</q-item-label>
            <q-item-label caption>choose a finished picture</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable exact to="/workshop">
          <q-item-section avatar>
            <q-icon name="brush"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Workshop</q-item-label>
            <q-item-label caption>paint a picture</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "MyLayout",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },
  methods: {
    openURL
  }
};
</script>

<style>
</style>

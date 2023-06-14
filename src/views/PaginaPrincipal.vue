<template>
  <div class="home">
    <GloboWeb msg="Primer App Vue" />
  </div>
</template>

<script>
// @ is an alias to /src
import GloboWeb from "@/components/GloboWeb.vue";

export default {
  name: "PaginaPrincipal",
  components: {
    GloboWeb,
  },
};
</script>
<style>
.home {
  background-color: aqua;
}
</style>

<template>
  <div id="app"><HelloWorld /></div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
.layout.wrap {
  flex-wrap: wrap;
  justify-content: center;
}
</style>

<template>
  <v-layout row wrap>
    <v-flex xs12 sm4 md3>
      <v-text-field
        label="Course"
        type="text"
        class="course-title"
        name="course"
        v-model="course"
        required
      >
      </v-text-field>
    </v-flex>

    <v-flex xs12 sm4 md3>
      <select
        name="grades"
        required
        v-model="grade"
        class="v-btn theme--dark teal option"
      >
        <option value="" disabled selected> Grades </option>
        <option value="5">A</option>
        <option value="4">B</option>
        <option value="3">C</option>
        <option value="2">D</option>
        <option value="1">E</option>
        <option value="0">F</option>
      </select>
    </v-flex>

    <v-flex xs12 sm4 md3>
      <select
        name="unit"
        required
        v-model="unit"
        class="v-btn theme--dark teal option"
      >
        <option value="" disabled selected> select </option>
        <option value="5">5</option>
        <option value="4">4</option>
        <option value="3">3</option>
        <option value="2">2</option>
        <option value="1">1</option>
      </select>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  props: ["n"],
  data() {
    return {
      unit: "",
      grade: "",
      course: "",
      total: "",
      key: ""
    };
  },
  created() {
    this.key = this.n;
    this.$watch(
      vm => [vm.unit, vm.grade],
      val => {
        this.total = parseInt(this.grade) * parseInt(this.unit).toString();
        var payload = {
          [this.n]: this.total
        };
        var unit = {
          [this.n]: this.unit
        };
        this.$store.commit("addTotal", payload);
        this.$store.commit("unit", unit);
      },
      { immediate: true }
    );
  }
};
</script>

<style>
.option {
  width: 90%;
}
</style>

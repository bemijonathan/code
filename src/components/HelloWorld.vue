<template>
  <v-app id="inspire">
    <v-toolbar color="teal" dark fixed app>
      <v-toolbar-title>CGPA CALCULATOR</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex text-xs-center>
            <div>
              <h1>CGPA Calculator</h1>

              <div>
                <form validate @submit.prevent="submitit">
                  <inputs v-for="(index, n) in n" :key="n" :n="index" />
                  <button><v-btn large dark color="teal">submit</v-btn></button>
                </form>
                <v-dialog v-model="dialog" width="500">
                  <v-card>
                    <v-btn icon @click="dialog = false;">
                      <v-icon>close</v-icon>
                    </v-btn>
                    <v-img
                      src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                      aspect-ratio="2.75"
                    ></v-img>

                    <v-card-title primary-title>
                      <div>
                        <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                        cgpa: {{ submit }}
                      </div>
                    </v-card-title>

                    <v-card-actions>
                      <v-btn flat color="orange">Share</v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
                <div>
                  <button @click="clear">
                    <v-btn color="red" dark> clear </v-btn>
                  </button>
                  <br />

                  <v-btn fab dark large color="black" @click="adds">
                    <v-icon dark>add</v-icon>
                  </v-btn>
                </div>
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    <v-footer color="teal" app>
      <v-toolbar-title
        ><span class="white--text">&copy; {{ 2019 }}</span></v-toolbar-title
      >
    </v-footer>
  </v-app>
</template>

<script>
import inputs from "./input";
export default {
  data() {
    return {
      hello: "hi",
      n: 1,
      result: "",
      value: "",
      unit: "",
      submit: "",
      dialog: false
    };
  },
  components: {
    inputs
  },
  methods: {
    adds() {
      this.n += 1;
    },
    submitit(e) {
      const sumValues = obj =>
        Object.values(obj).reduce((a, b) => parseInt(a) + parseInt(b));
      const total = sumValues(this.total);
      const unit = sumValues(this.totalunit);
      console.log(total, unit);
      this.dialog = true;
      this.submit = total / unit;
    },
    clear() {
      this.n = 0;
      // this.n = 1
      this.$store.commit("clear");
      this.submit = 0;
    }
  },
  computed: {
    total() {
      return this.$store.state.values;
      //  this.unit = this.$store.state.unit
    },
    totalunit() {
      return this.$store.state.unit;
    }
  }
};
</script>

<style></style>

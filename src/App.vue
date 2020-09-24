<script>
import Anchor from './Anchor';
import Double from './Double';
import Sort from './Sort';

export default {
  name: 'App',

  data() {
    return {
      question: 'double',
    };
  },

  methods: {
    onQuestion(question) {
      if (question === 'Sort') {
        const prices = '[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]';
        const sort = new Sort;
        console.log(sort.sortByPriceAscending(prices));
      }

      if (question === 'Double') {
        new Double;
      }

      if (question === 'Anchor') {
        const anchor = new Anchor;
        anchor.updateATag('https://www.google.com/', 'https://www.w3schools.com/');
      }
    },
  },
}
</script>

<template>
  <div id="app">
    <button @click="onQuestion('Sort')" v-text="'Sort'"/>
    <button @click="onQuestion('Double')" v-text="'Double'"/>
    <button @click="onQuestion('Anchor')" v-text="'Anchor'"/>
  </div>
</template>

<style scoped>
button {
  margin: 10px;
}
</style>

<script>
import Anchor from './Anchor';
import Double from './Double';
import Form from './Form';
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
        // const prices = '[{"name":"eggs","price":1},{"name":"pizza","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]';
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

      if (question === 'Form') {
        new Form;
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
    <button @click="onQuestion('Form')" v-text="'Form'"/>
  </div>
</template>

<style scoped>
button {
  margin: 10px;
}
</style>

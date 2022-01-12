<template lang="">
  <h2>Add Product</h2>
  <!-- "v-model" is binding -->
  <form @submit.prevent="handleSubmit">
    <label>Title</label>
    <input type="text" name="title" v-model="title" />
    <label>Image</label>
    <input type="text" name="image" v-model="image" />
    <button>Add Product</button>
  </form>
</template>
<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';
export default {
  name: 'AddProduct',
  setup(props) {
    const title = ref('');
    const image = ref('');
    const router = useRouter();

    const handleSubmit = async () => {
      const article = { title: title.value, image: image.value };
      await axios
        .post(`http://localhost:8085/products`, article)
        .then((addRes) => {
          console.log('addRes', addRes);
          router.push('/admin/products');
        })
        .catch((error) => {
          console.log(error);
        });
    };

    // using fetch method
    // const handleSubmit = async () => {
    //   await fetch(`http://localhost:8085/products`, {
    //     method: 'POST',
    //     headers: { 'Content-type': 'application/json' },
    //     body: JSON.stringify({
    //       title: title.value,
    //       image: image.value,
    //     }),
    //   });
    //   await router.push('/admin/products');
    // };

    return { title, image, handleSubmit };
  },
};
</script>
<style lang=""></style>

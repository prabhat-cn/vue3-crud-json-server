<template lang="">
  <h2>Edit Product</h2>

  <form @submit.prevent="handleEditSubmit">
    <label>Title</label>
    <input type="text" name="title" v-model="title" />
    <label>Image</label>
    <input type="text" name="image" v-model="image" />
    <button>Save</button>
  </form>
</template>
<script>
import { onMounted, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import axios from 'axios';

export default {
  name: 'EditProduct',
  props: ['proId'],
  setup(props) {
    const singleProduct = ref({});
    const title = ref('');
    const image = ref('');
    const router = useRouter();
    const route = useRoute();

    const getSingleProduct = async () => {
      // console.log('route', route.params.proId);
      await axios
        .get(`http://localhost:8085/products/${route.params.proId}`)
        .then((singleData) => {
          console.log('singleData', singleData);
          singleProduct.value = singleData.data;
          console.log('singleProduct->', singleProduct.value);
          title.value = singleProduct.value.title;
          console.log('title->', title.value);

          image.value = singleProduct.value.image;
          console.log('image->', image.value);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    onMounted(getSingleProduct());
    const handleEditSubmit = async () => {
      const article = { title: title.value, image: image.value };
      await axios
        .put(`http://localhost:8085/products/${route.params.proId}`, article)
        .then((editRes) => {
          console.log('addRes', editRes);
          router.push('/admin/products');
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return { title, image, singleProduct, handleEditSubmit };
  },
};
</script>
<style lang=""></style>

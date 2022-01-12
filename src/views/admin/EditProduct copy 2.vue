<template>
  <form @submit.prevent="submit">
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
export default {
  name: 'EditProduct',
  props: ['proId'],
  setup() {
    const title = ref('');
    const image = ref('');
    const router = useRouter();
    const route = useRoute();
    onMounted(async () => {
      const res = await fetch(
        `http://localhost:8085/products/${route.params.proId}`
      );
      const product = await res.json();
      title.value = product.title;
      image.value = product.image;
    });
    const submit = async () => {
      await fetch(`http://localhost:8085/products/${route.params.proId}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          title: title.value,
          image: image.value,
        }),
      });
      await router.push('/admin/products');
    };

    return { title, image, submit };
  },
};
</script>

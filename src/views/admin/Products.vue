<template>
  <div style="float: right">
    <router-link :to="{ name: 'AddProduct' }" class="btn"
      >Add Product</router-link
    >
  </div>

  <h2>All Products</h2>
  <table>
    <thead>
      <tr>
        <th>#Sl</th>
        <th>Inc</th>
        <th>Title</th>
        <th>Image</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(productData, index) in allProducts" :key="productData.id">
        <td>{{ index + 1 }}</td>
        <td>{{ productData.id }}</td>
        <td>{{ productData.title.substring(0, 45) }}...</td>
        <td>
          <img :src="productData.image" :alt="productData.title" width="90" />
        </td>
        <td>
          <router-link
            :to="{ name: 'EditProduct', params: { proId: productData.id } }"
            class="btn"
            >Edit</router-link
          >
          <button
            class="btn btn-del"
            type="button"
            @click="delProduct(productData.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
export default {
  name: 'Producs',
  setup() {
    const allProducts = ref([]);

    const allData = async () => {
      const apiUrl = await axios
        .get(`http://localhost:8085/products`)
        .then((response) => {
          console.log('response', response);
          allProducts.value = response.data.reverse();
          // console.log('response', allProducts.value);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    onMounted(allData());

    const delProduct = async (proId) => {
      if (window.confirm('Do You Want To Delete?')) {
        const apiUrl = await axios
          .delete(`http://localhost:8085/products/${proId}`)
          .then((delRes) => {
            allProducts.value = allProducts.value.filter(
              (proFilter) => proFilter.id !== proId
            );
          })
          .catch((error) => {
            console.log(error);
          });
      }
    };

    // inside function
    // onMounted(async () => {
    //   const apiUrl = await axios
    //     .get(`http://localhost:8085/products`)
    //     .then((response) => {
    //       console.log('response', response);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // });

    // use fetch
    // onMounted(async () => {
    //   const apiUrl = await fetch(`http://localhost:8085/products`);
    //   // value inside of allProducts.value
    //   allProducts.value = await apiUrl.json();
    //   console.log('allProducts', allProducts.value);
    // });

    // delete fetch method
    // const delProduct = async (proId) => {
    //   if (window.confirm('Do you want?')) {
    //     await fetch(`http://localhost:8085/products/${proId}`, {
    //       method: 'DELETE',
    //     });
    //     allProducts.value = allProducts.value.filter(
    //       (proFilter) => proFilter.id !== proId
    //     );
    //   }
    // };
    // if use vue 3 to show data inside setup function
    // return all Functions and refs here
    return { allProducts, delProduct };
  },
};
</script>

<style></style>

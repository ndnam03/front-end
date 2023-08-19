<template>
  <div class="home">
    <header-view></header-view>
  </div>
  <SidebarView> </SidebarView>
  <div class="float-right w-8/12 mt-32 mb-48 mr-44">
    <button
      type="button"
      class="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] bg-blue-500 mb-5"
      @click="isModalVisible"
    >
      Thêm mới
    </button>

    <h1 v-if="check" class="text-center text-green-500">Thêm thành công</h1>
    <div class="flex flex-col">
      <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div class="overflow-hidden">
            <div
              class="w-6/12 p-6 float-right mb-5 mr-72 bg-white rounded-md shadow-xl"
              v-if="isOpen"
            >
              <div class="flex items-center justify-between">
                <h3 class="text-2xl">Model Title</h3>
                <svg
                  @click="isOpen = false"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-8 h-8 text-red-900 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div class="mt-4">
                <form>
                  <input type="hidden" v-model="idBrand" />
                  <div class="mb-6">
                    <label
                      for="large-input"
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >Tên nhà cung cấp
                    </label>

                    <input
                      v-model="name"
                      type="text"
                      id="large-input"
                      class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    />
                  </div>
                  <div class="mb-6">
                    <label
                      class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      for="file_input"
                      >Ảnh</label
                    >
                    <input
                      @change="onChangeFile($event)"
                      class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                      id="file_input"
                      type="file"
                    />
                    <img class="w-10" :src="`${imageLoad}`" alt="" />
                  </div>

                  <button
                    @click="isOpen = false"
                    class="px-6 py-2 text-blue-800 border border-blue-600 rounded"
                  >
                    Cancel
                  </button>
                  <button
                    v-if="!idBrand"
                    type="button"
                    @click="onSubmit"
                    class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded"
                  >
                    Save
                  </button>
                  <button
                    v-if="idBrand"
                    type="button"
                    @click="onUpdateBrand"
                    class="px-6 py-2 ml-2 text-blue-100 bg-blue-600 rounded"
                  >
                    Update
                  </button>
                </form>
              </div>
            </div>
            <table class="min-w-full text-left text-sm font-light">
              <thead class="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" class="px-6 py-4">ID</th>
                  <th scope="col" class="px-6 py-4">Brand Name</th>
                  <th scope="col" class="px-6 py-4">Image Brand</th>
                  <th scope="col" class="px-6 py-4">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  class="border-b dark:border-neutral-500"
                  v-for="brand in brands"
                  :key="brand.id"
                >
                  <td class="whitespace-nowrap px-6 py-4 font-medium">
                    {{ brand.id }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4 font-bold">
                    {{ brand.name }}
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <img
                      :src="`${brand.image}`"
                      class="w-16"
                      alt=""
                      srcset=""
                    />
                  </td>
                  <td class="whitespace-nowrap px-6 py-4">
                    <button
                      @click="onUpdate(`${brand.id}`)"
                      type="button"
                      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    >
                      Update
                    </button>
                    <button
                      @click="onDelete(`${brand.id}`)"
                      type="button"
                      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul class="flex items-center -space-x-px h-8 text-sm mt-5 ml-80">
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span class="sr-only">Previous</span>
                    <svg
                      class="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 1 1 5l4 4"
                      />
                    </svg>
                  </a>
                </li>
                <li>
                  <a
                    @click="onAlert"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >1</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >2</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    aria-current="page"
                    class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >3</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >4</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >5</a
                  >
                </li>
                <li>
                  <a
                    href="#"
                    class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                  >
                    <span class="sr-only">Next</span>
                    <svg
                      class="w-2.5 h-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeaderView from "@/components/HeaderView.vue";
import SidebarView from "@/components/SideBar.vue";

import { ref } from "vue";
import axios from "axios";
const isOpen = ref(false);
const name = ref("");
const image = ref("");
const check = ref(false);
const idBrand = ref("");
const imageLoad = ref("");
const brands = ref([]);

const isModalVisible = () => {
  isOpen.value = !isOpen.value;
};

const fetchAll = () => {
  axios
    .get("http://localhost:8085/api/brand/getAll")
    .then((response) => {
      // xử trí khi thành công
      brands.value = response.data;
    })
    .catch((error) => {
      // xử trí khi bị lỗi
      console.log(error);
    })
    .finally(function () {
      // luôn luôn được thực thi
    });
};
fetchAll();

const onChangeFile = (event) => {
  image.value = event.target.files[0];
  console.log(image.value);
};
const onSubmit = () => {
  let data = new FormData();
  data.append("name", name.value);
  data.append("image", image.value);
  var requestOptions = {
    method: "POST",
    body: data,
    redirect: "follow",
  };

  fetch("http://localhost:8085/api/brand/create", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      check.value = true;

      fetchAll();
      console.log(result);
    })
    .catch((error) => console.log("error", error));
  isOpen.value = false;
};

const onDelete = (id) => {
  axios
    .delete(`http://localhost:8085/api/brand/delete/${id}`)
    .then((response) => {
      fetchAll();
      console.log(response.data); // Truy cập trực tiếp vào thuộc tính data
    })
    .catch((error) => console.log("error", error));
};

const onUpdate = (id) => {
  isOpen.value = true;
  axios
    .get(`http://localhost:8085/api/brand/getById/${id}`)
    .then((result) => {
      name.value = result.data.name;
      imageLoad.value = result.data.image;
      idBrand.value = result.data.id;
    })
    .catch((error) => console.log("error", error));
};

const onUpdateBrand = () => {
  let data = new FormData();
  data.append("name", name.value);
  data.append("image", image.value); // Sử dụng image.files[0] thay vì image.value để lấy đối tượng File
  data.append("id", idBrand.value); // Đảm bảo idBrand là một giá trị hợp lệ

  var requestOptions = {
    method: "PUT",
    body: data,
    redirect: "follow",
  };

  fetch("http://localhost:8085/api/brand/update", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      fetchAll();
    })
    .catch((error) => console.log("error", error));

  isOpen.value = false;
};
fetchAll();
</script>

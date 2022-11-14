<template>
  <v-container>
    <v-card>
      <v-card-text>
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-row>
            <v-col cols="12" md="6">
              <v-combobox
                v-model="form.mainGroup"
                :items="mainGroup.items"
                item-text="GroupName"
                outlined
                :rules="[required]"
                :loading="mainGroup.loading"
                @change="mainGroupChanged"
                label="المجموعة الرئيسية"
                required
              ></v-combobox>
            </v-col>
            <v-col cols="12" md="6">
              <v-combobox
                v-model="form.subGroup"
                :items="subGroup.items"
                item-text="GroupName"

                :loading="subGroup.loading"
                outlined
                :rules="[required]"
                @change="subGroupChanged"
                label="المجموعة الفرعية"
                required
              ></v-combobox>
            </v-col>
            <v-col cols="12" >
              <v-combobox
                v-model="form.product"
                :messages="[productHint]"
                :items="product.items"
                item-text="ItemName"
                outlined
                :loading="product.loading"
      
                @change="productChanged"
                label="المنتج"
                required
              ></v-combobox>
            </v-col>
            <v-col cols="12">
              <v-file-input
                accept="image/*"
                :messages="[imageHint]"
                label="الصورة"
                outlined
              ></v-file-input>
            </v-col>
            <v-col md="12">
              <v-btn color="app-btn" @click="resetValidation"> تاكيد </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import { ListMainGroups, ListSubGroups , ListProducts } from "@/repositories/group";
import { required } from "@/utils/helpers";
export default {
  data: () => ({
    mainGroup: {
      items: [],
      loading: false,
    },
    valid: false,
    subGroup: {
      items: [],
      loading: false,
    },
    productHint:"اذا قمت باختيار منتج سيتم تعديل الصورة الخاصة بالمنتج  اذا تركت هذا الحقل خالي سيتم تحديث صورة المجموعة الفرعية",
    imageHint:"",
    product: {
      items: [],
      loading: false,
    },
    form: {},
    image: null,
  }),
  created() {
    this.getMainGroups();
  },
  methods: {
    required,
    validate() {
      this.$refs.form.validate();
    },
    productChanged(val) {
      console.log(val);
      
    },
    mainGroupChanged(val) {
      console.log(val);
      this.form.subGroup = null;
      this.form.product = null;
      this.getSubGroups();
    },
    subGroupChanged(val) {
      console.log(val);
      this.form.product = null;
      this.getProducts()
    },
    getMainGroups() {
      this.mainGroup.loading = true;
      ListMainGroups().then((res) => {
        this.mainGroup.items = res;
        this.mainGroup.loading = false;
      });
    },
    getSubGroups() {
      this.subGroup.loading = true;
      ListSubGroups(this.form.mainGroup.GroupCode).then((res) => {
        this.subGroup.items = res;
        this.subGroup.loading = false;
      });
    },
    getProducts() {
      this.product.loading = true;
      ListProducts(this.form.mainGroup.GroupCode , this.form.subGroup.GroupCode).then((res) => {
        this.product.items = res;
        this.product.loading = false;
      });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>
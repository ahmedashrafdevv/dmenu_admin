import Vue from "vue";

import Api from '@/utils/axios/Api';
import { serializeQuery } from "@/utils/helpers/heleprs";
const Http = Api.getInstance();
import ComboInputComponent from "@/components/form/Combo.vue";
import {
  SelectInputInterface,
} from "@/types";

let loading = false
let subGroups = [] as Object[]
export const mainGroup: SelectInputInterface = {
  name: "mainGroup",
  cache: false,
  text: "GroupName",
  cols: 6,
  initialFetch: true,
  generateInputHtml: () => Vue.extend(ComboInputComponent),
  clearable: true,
  valueKey: "GroupCode",
  change:(val:any) => {
    console.log("ahmed")
    console.log(val)
    Http.get(`${subGroup.url}${val.GroupCode}`)
        .then((d) => {
          loading = false
          let data = d as unknown as Object[]
          console.log(d)
          subGroups = data
        })
  },
  type: "combo",
  url: "group",
  label: "mainGroup",
};



export const subGroup: SelectInputInterface = {
  name: "subGroup",
  cache: false,
  text: "GroupName",
  cols: 6,
  initialFetch: false,
  generateInputHtml: () => Vue.extend(ComboInputComponent),
  clearable: true,
  valueKey: "GroupCode",
  items:subGroups,
  type: "combo",
  dependsOn: "mainGroup",
  url: "group/",
  label: "subGroup",
};

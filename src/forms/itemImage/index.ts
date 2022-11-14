import Input from "@/utils/form/inputs/Input";
import Form from "@/utils/form/form";
import { FormInterface } from "@/types";
import {
  mainGroup,
  subGroup,
} from "./inputs";

const inputs: Input[] = [
  new Input(mainGroup),
  new Input(subGroup),
];

const params: FormInterface = {
  inputs,
};

const formData = new Form(params);

export default formData;

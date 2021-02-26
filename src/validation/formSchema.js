import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .required("Please enter your name.")
    .min(2, "Name must be 2 characters or more."),
  size: yup
    .string()
    .oneOf(["Small", "Medium", "Large"], "Please select a size"),
  sauce: yup.string().required("Please select a sauce."),
  special: yup.string(),
  pepperoni: yup.boolean(),
  sausage: yup.boolean(),
  pineapple: yup.boolean(),
  onions: yup.boolean(),
});

export default formSchema;

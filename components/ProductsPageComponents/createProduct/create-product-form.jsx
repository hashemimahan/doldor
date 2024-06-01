import React, { useReducer } from "react";
import classes from "./create-category.module.css";
import Select from "./Select";
import { cn } from "@/libs/utils";
import CheckBox from "./CheckBox";

export let ACTIONS = {
  DELETE: "delete",
  BRAND: "brand",
  CATEGORY: "category",
  SUBCATEGORY: "subcategory",
  UNIT: "unit",
};
let fields = [
  {
    name: "نام محصول",
    id: "productName",
    required: true,
    type: "text"
  },
  {
    name: "قیمت خرید",
    id: "productPrice",
    required: true,
  },
  {
    name: "قیمت فروش",
    id: "sailPrice",
    size: "!text-[1rem] font-black",
    required: true,
  },
  {
    name: "تخفیف",
    id: "productDiscount",
    required: false,
  },
];

const brandNameOptions = [
  {
    name: "کاله",
    value: "kaleh",
  },
  {
    name: "ناملی",
    value: "kaleh",
  },
  {
    name: "میهن",
    value: "kaleh",
  },
];
const categoriesOptions = [
  {
    name: "لبنیات",
    value: "dairy",
  },
];
const subcategoriesOptions = [
  {
    name: "ماست",
    value: "yoghurt",
  },
];

const unitOptions = [
  {
    name: "عدد",
    value: "number",
  },
  {
    name: "کیلو",
    value: "Killers",
  },
];

const initialState = {
  selectedBrand: null,
  selectedCategory: null,
  selectedSubCategory: null,
  selectedUnit: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.BRAND:
      return {
        ...state,
        selectedBrand: action.payload,
      };
      break;
    case ACTIONS.DELETE:
      return initialState;
      break;
    case ACTIONS.CATEGORY:
      return {
        ...state,
        selectedCategory: action.payload,
      };
      break;
    case ACTIONS.SUBCATEGORY:
      return {
        ...state,
        selectedSubCategory: action.payload,
      };
      break;
    case ACTIONS.UNIT:
      return {
        ...state,
        selectedUnit: action.payload,
      };
      break;
    default:
      return initialState;
      break;
  }
};

const CreateProductForm = ({className}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onSelectBrandHandler = (data) => {
    dispatch(data);
  };
  const onSelectCategoryHandler = (data) => {
    dispatch(data);
  };
  const onSelectSubCategoryHandler = (data) => {
    dispatch(data);
  };
  const onSelectUnitHandler = (data) => {
    dispatch(data);
  };
  return (
    <form className={cn("max-h-[70vh] overflow-y-auto scroll_gutter border-t-[1px] border-t-black border-dashed mt-4 w-full grid grid-cols-[2rem_1fr_1fr_1fr_1fr_1fr_1fr_2rem] gap-3 pt-4", className)} id="scrollbar1">
      {fields.map((item) => {
        return (
          <div
            className="col-start-2 col-end-[-2] grid grid-cols-[5.75rem_1fr] gap-4 h-[2.5rem] relative"
            dir="rtl"
            key={item.id}
          >
            <label
              className={`justify-self-end self-center common ${classes.inp} ${item.size ? item.size : ""}`}
              htmlFor={item.id}
            >
              {item.name}
            </label>
            <input
              className={`${classes.inp} col-start-2 col-end-[-1] pr-1 common`}
              type={item?.type || "number"}
              id={item.id}
              required={item.required}
            />
          </div>
        );
      })}
      <div className="col-start-2 col-end-[-3] grid " dir="rtl">
        <label htmlFor="chat" class="sr-only">
          توضیحات
        </label>
        <div class="flex items-center px-3 py-2 rounded-lg bg-gray-50 dark:bg-gray-700">
          <textarea
            id="chat"
            rows="1"
            class="block font-iranYekan py-2.5 px-1 w-full resize-none text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="توضیحات..."
          ></textarea>
        </div>
      </div>
      <div
        className="col-start-2 col-end-[-2] grid grid-cols-[1fr_6rem] gap-4"
        dir=""
      >
        <div class="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            class="flex flex-col items-center justify-center w-full h-36 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span class="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p class="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
          </label>
        </div>
        <p className="common">تصویر</p>
      </div>
      <div
        className="col-start-2 col-end-[-2] grid grid-cols-[6rem_1fr] gap-4"
        dir="rtl"
      >
        <p className="common col-start-1 col-end-2 justify-self-end self-center">
          انتخاب
        </p>
        <Select
          name={ACTIONS.BRAND}
          selectedItem={state.selectedBrand}
          options={brandNameOptions}
          selectName={"نام برند"}
          className={"col-start-2"}
          onSelect={onSelectBrandHandler}
        />
      </div>
      <div
        className="col-start-2 col-end-[-2] grid grid-cols-[6rem_1fr] gap-4"
        dir="rtl"
      >
        <p className="common col-start-1 col-end-2 justify-self-end self-center">
          انتخاب
        </p>
        <Select
          name={ACTIONS.CATEGORY}
          selectedItem={state.selectedCategory}
          options={categoriesOptions}
          selectName={"دسته"}
          className={"col-start-2"}
          onSelect={onSelectCategoryHandler}
          required
        />
      </div>
      <div
        className="col-start-2 col-end-[-2] grid grid-cols-[6rem_1fr] gap-4"
        dir="rtl"
      >
        <p className="common col-start-1 col-end-2 justify-self-end self-center">
          انتخاب
        </p>
        <Select
          name={ACTIONS.SUBCATEGORY}
          selectedItem={state.selectedSubCategory}
          options={subcategoriesOptions}
          selectName={"زیردسته"}
          className={"col-start-2"}
          onSelect={onSelectSubCategoryHandler}
          required
        />
      </div>
      <div
        className="col-start-2 col-end-[-2] grid grid-cols-[6rem_1fr] gap-4"
        dir="rtl"
      >
        <p className="common col-start-1 col-end-2 justify-self-end self-center">
          انتخاب
        </p>
        <Select
          name={ACTIONS.UNIT}
          selectedItem={state.selectedUnit}
          options={unitOptions}
          selectName={"واحد"}
          className={"col-start-2"}
          onSelect={onSelectUnitHandler}
          required
        />
      </div>
      <div
        className="col-start-2 col-end-[-2] grid grid-cols-[6rem_1fr] gap-4"
        dir="rtl"
      >
        <p className="common col-start-1 col-end-2 justify-self-end self-center pt-2" style={{ fontSize: "1rem", justifySelf: "flex-end", alignSelf: "start"}}>
          نمایش در بنر :
        </p>
        <div className="grid grid-cols-2">
          <CheckBox name={"banner"} value={"بله"} id={"banner_1"}/>
          <CheckBox name={"banner"} value={"خیر"} id={"banner_2"}/>
        </div>
      </div>
      <div
        className="col-start-2 col-end-[-2] grid grid-cols-[6rem_1fr] gap-4"
        dir="rtl"
      >
        <p className="common col-start-1 col-end-2 justify-self-end self-center pt-2" style={{ fontSize: "1rem", justifySelf: "flex-end", alignSelf: "start"}}>
          نمایش در بنر :
        </p>
        <div className="grid grid-cols-2">
          <CheckBox name={"bestSellers"} value={"بله"} id={"bestSellers_1"}/>
          <CheckBox name={"bestSellers"} value={"خیر"} id={"bestSellers_2"}/>
        </div>
      </div>
      <div className="col-start-2 col-end-[-2] grid grid-cols-[11.5rem_1fr] gap-4">
        <button className="border-[2px] hover:border-[#DCDCDC] text-doldor_text rounded-lg p-4 basis-1/2 common bg-[#DCDCDC] hover:bg-transparent">
          ثبت
        </button>
      </div>
    </form>
  );
};

export default CreateProductForm;

"use client";
import React, { Suspense, useEffect, useState } from "react";
import Button from "../Header/button";
import { getCookie } from "cookies-next";
import { getData } from "@/libs/data";
import { useRouter } from "next/navigation";
import Category from "./category";
import { TbLoaderQuarter } from "react-icons/tb";
import Loading from "./loading";

const Categories = () => {
  /* state management */
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  /* get cookie */
  const token = getCookie("token") ?? "";
  // const {categories} = await getData("eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2RvbGRvci5jb20vYXBpL3YxL2xvZ2luIiwiaWF0IjoxNzE3MjIxMjE4LCJleHAiOjE3MTcyMzIwMTgsIm5iZiI6MTcxNzIyMTIxOCwianRpIjoiOEhxeTByOGR4WjVQeVlEdiIsInN1YiI6IjEiLCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.GYbj4vRVt6zU3qaAUCva3Q3jV2bMl5VtpineIE7PCks");

  useEffect(() => {
    getData(token).then((res) => {
      if (
        (res?.message && res?.message?.includes("Unauthenticated")) ||
        !res?.categories?.status === "success"
      ) {
        router.push("/login");
      }
      console.log(res);
      setCategories(res.categories.categories);
    });
  }, [token]);

  return (
    <div className="grid grid-cols-auto-fill-100 gap-4">
      <Button
        className={
          "rounded-lg bg-rose-700 text-slate-100 grid place-content-center px-4 py-2 common cursor-auto shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]"
        }
      >
        دسته بندی اصلی
      </Button>
      <Button
        className={
          "rounded-lg bg-transparent text-gray-900 border-b-2 cursor-pointer border-b-rose-700 shadow-[0px_2px_5px_0px_#00000050] grid place-content-center px-4 py-2 common"
        }
      >
        کلیه کالاها
      </Button>
      {/* {categories?.map((category) => {
        return (
          <Button
            key={crypto.randomUUID()}
            className={
              "rounded-lg bg-transparent text-gray-900 border-b-2 cursor-pointer border-b-rose-700 shadow-[0px_2px_5px_0px_#00000050] grid place-content-center px-4 py-2 common"
            }
          >
            {category.name}
          </Button>
        );
      })} */}
      <Suspense fallback={<Loading />}>
        <Category token={token}/>
      </Suspense>
    </div>
  );
};

export default Categories;

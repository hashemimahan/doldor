import useLocalStorage from "@/hooks/useLocalStarage";
import { getRoles } from "@/libs/get-roles";

export default async function Home() {
  const {setItem, getItem, removeItem} = useLocalStorage('token')
  /* const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

const urlencoded = new URLSearchParams();
urlencoded.append("mobile", "09012345678");
urlencoded.append("password", "12345678");

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: urlencoded,
  redirect: "follow"
};

fetch("https://doldor.com/api/v1/login", requestOptions)
  .then((response) => response.text())
  .then((result) => {
    let {authorisation} = JSON.parse(result);
  })
  .catch((error) => console.error(error)); */

  return (
    <main className="grid place-content-center">
      
    </main>
  );
}

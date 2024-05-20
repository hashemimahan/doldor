import useLocalStorage from "@/hooks/useLocalStarage";

export const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

const {getItem: getToken} = useLocalStorage('token');
let token = getToken();
export const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");
myHeaders.append("Authorization", "Bearer "+token);

export const urlencoded = new URLSearchParams();
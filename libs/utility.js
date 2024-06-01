export const delay = (delayInms) => {
  return new Promise((resolve) => setTimeout(resolve, delayInms));
};

// let token = getToken();
export const myHeaders = new Headers();
myHeaders.append("Accept", "application/json");

export const urlencoded = new URLSearchParams();


export const getTokenHandler = async () => {
  urlencoded.append("mobile", "09012345678");
  urlencoded.append("password", "12345678");
  const response = await fetch("https://doldor.com/api/v1/login", {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
    })
  const data = await response.text();
  let status = JSON.parse(data);

  // setItem(status?.authorisation?.token)
  return {
    id: status?.user?.id,
    token: status?.authorisation?.token
  }
}
// getTokenHandler()

export const getUserPermission = async (id, token) => {
  myHeaders.append("Authorization", "Bearer "+token);
  const response = await fetch("https://doldor.com/api/v1/role/getUserRoles/"+id, {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
})
  const res = await response.text();

  let jRes = JSON.parse(res);
  let userRole = jRes?.roles;

  return {
    role: userRole
  }
}

export const getCategories = async (token) => {
  myHeaders.append("Authorization", "Bearer "+token);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };
  const response = await fetch("https://doldor.com/api/v1/category/fetch/5", requestOptions);
  const result = await response.text();
  let categories = JSON.parse(result);

  return {
    categories
  }
}

export const getProducts = async (token) => {
  myHeaders.append("Authorization", "Bearer "+token);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

const response = await fetch("https://doldor.com/api/v1/product/fetch/10", requestOptions);
    const result = await response.text();
    let products = JSON.parse(result);

    return {
      products
    }
}
export const getProductsDiscount = async (token) => {
  myHeaders.append("Authorization", "Bearer "+token);
  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  const response = await fetch("https://doldor.com/api/v1/productDiscount/fetch/10", requestOptions);
  const result = await response.text();
  const productsDiscount = JSON.parse(result);

  return {
    productsDiscount
  }
}
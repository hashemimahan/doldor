import { deleteCookie, hasCookie, setCookie } from 'cookies-next';
import {getCategories, getProducts, getProductsDiscount, getTokenHandler, getUserPermission} from "@/libs/utility";

export async function getUser() {
    let hasTokenCookie = hasCookie('token');
    let hasRolesCookie = hasCookie('roles');
    if (hasRolesCookie || hasTokenCookie) {
        deleteCookie("token");
        deleteCookie("roles");
    }
    const {id, token} = await getTokenHandler();
    const {role} = await getUserPermission(id, token);

    setCookie('token', token);
    setCookie('roles', role[0]);

    return {
        id,
        token,
        role
    }
}
export async function getData(token) {
    // const {id, token} = await getTokenHandler()
    // const {role} = await getUserPermission(id, token);
    const {categories} = await getCategories(token);
    const {products} = await getProducts(token);
    const {productsDiscount} = await getProductsDiscount(token)

    // setCookie('token', token);
    // setCookie('roles', role[0]);
    return {
        categories,
        products,
        productsDiscount
    }
}
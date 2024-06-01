"use client";
import { getUser } from "@/libs/data";
import { getRole, getToken, getUserId } from "@/reducers/token-slice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

function TokenProvider() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getUserData = async () => {
      const { id, token, role } = await getUser();
      dispatch(getToken(token));
      dispatch(getUserId(id));
      dispatch(getRole(role));
    };
    try {
      getUserData();
    } catch (e) {
      console.log(e);
    }
  }, []);
  /* const tk = useSelector(state => state.token.token);
    const id = useSelector(state => state.token.userId);
    const dispatch = useDispatch();

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const urlencoded = new URLSearchParams();
    urlencoded.append("mobile", "09012345678");
    urlencoded.append("password", "12345678");

    const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: urlencoded,
    redirect: "follow"
    };

    useEffect(() => {
        const getTokenHandler = async () => {
            const response = await fetch("https://doldor.com/api/v1/login", requestOptions)
            const data = await response.text();
            let status = JSON.parse(data);
            dispatch(getToken(status.authorisation.token));
            dispatch(getUserId(status.user.id));
        }
        getTokenHandler()
    }, [])

    useEffect(() => {
        const requestOptions = {
            method: "GET",
            headers: headers,
            redirect: "follow"
        };

        const getUserPermission = async () => {
            const response = await fetch("https://doldor.com/api/v1/role/getUserRoles/"+id, requestOptions)
            const res = await response.text();

            let jRes = JSON.parse(res);
            let userRole = jRes.roles[0];
            dispatch(getRole(userRole))
        }
        if (id) {
            getUserPermission()
        }
    }, [id]) */

  return null;
}

export default TokenProvider
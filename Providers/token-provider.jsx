'use client'
import { getRole, getToken, getUserId } from '@/reducers/token-slice';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {myHeaders as headers} from '@/libs/utility'

function TokenProvider() {
    const tk = useSelector(state => state.token.token);
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
    }, [id])

  return null
}

export default TokenProvider
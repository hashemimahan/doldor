import { NextResponse } from "next/server";

export async function POST(request) {
    const body = request.json();
    const res = await fetch("https://doldor.com/api/v1/login", {
        method: "POST",
        headers: {
            "Accept": "application/json",
        },
        body: JSON.stringify(body),
        redirect: "follow"
    });
    const data = res.json()

    return NextResponse.json(data)
}
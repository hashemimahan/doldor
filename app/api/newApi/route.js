import { NextResponse } from "next/server";

export async function GET() {
    const result = await fetch("https://jsonplaceholder.typicode.com/users");
    const result2 = await result.json();
    /* 
    const result = await data.json();
    console.log(result);
    // return new Response("hi")
    return NextResponse.json(data) */
    // return Response("hiiiiiiiiiiiiiiiiiii")
    return NextResponse.json(result2)
}

export async function POST(req) {
    const body = await req.json()
    console.log(body);
    return new Response("OK")
}
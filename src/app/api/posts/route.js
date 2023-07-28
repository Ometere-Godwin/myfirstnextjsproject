import { NextResponse, NextRequest } from "next/server";
import Post from "@/models/Post";
import connect from "@/utils/db";

export const GET = async (request) => {
    const url = new URL(request.url);

    const name = url.searchParams.get("name")
    try{
        await connect();

        const posts = await Post.find(name && {name});

        return new NextResponse(JSON.stringify(posts), {status: 200});

    }catch (err){
        return new NextResponse("Database Error", {status: 500});
    }
};

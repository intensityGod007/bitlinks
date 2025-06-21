import clientPromise from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json();
    
    const client = await clientPromise;
    const db = client.db("BitLinks");
    const collection = db.collection("url");

    // Check if short url exists
    const doc = await collection.findOne({shorturl: body.shortUrl})
    if(doc) {
        return NextResponse.json({
            success: false,
            error: true,
            message: "Url already exists"
        })
    }

    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shortUrl,
    })

    return NextResponse.json({
        success: true,
        error: false,
        message: "Short Url Generated Successfully",
    })
}
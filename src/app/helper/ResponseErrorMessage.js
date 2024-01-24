import { NextResponse } from "next/server"

export const ResponseMessage=(message, data,successStatus,statusCode)=>{
    return NextResponse.json({
        message:message,
        data:data,
        success:successStatus
    },{status:statusCode})
}
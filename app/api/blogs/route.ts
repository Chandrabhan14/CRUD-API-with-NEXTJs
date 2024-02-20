import { getPost } from "@/lib/data";
import { NextResponse } from "next/server";
import { addPost } from "@/lib/data";

//GET METHOD API
export const GET = async(req: Request,res: Response) => {

    try{
        const posts = getPost();
        return NextResponse.json({message:"OKAYYYYY",posts},{
            status: 201
        });
 

    }catch(err){
        return NextResponse.json({message: "Error are herer", err}.err,{
            status: 500,
        })

    }

};


//POST Method api 
export const POST = async(req:Request,res:Response)=>{
   const { title,desc } = await req.json();

   try{
    const post = {title, desc, date: new Date(), id: Date.now().toString() };

    addPost(post);
    return NextResponse.json({message:"OKK Hereeee", post},{
        status: 201,
    })


   }catch(err){
    return NextResponse.json({message:"ERROR IS HERE",err},{
        status: 500,
    })

   } 

};

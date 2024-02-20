import { deletePost, getById, updatePost } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async(req:Request)=>{
    try {
        const id = req.url.split("blogs/")[1];
        console.log(id);
        const post = getById(id)
    
        if(!post){
            return NextResponse.json({message: "ERROR HEREE"},{
                status: 404
            })
    
        }
        return NextResponse.json({message:"OKAYY",post},{
            status: 200
        })
        
    } catch (err) {
        return NextResponse.json({message:"OKAYY in CATCH",err},{
            status: 500
        })
        
    }



    //get by id 
};

 //update by id
export const PUT = async(req:Request)=>{
    try {
        const { title,desc } = await req.json();
        const id = req.url.split("blogs/")[1];
        updatePost(id,title,desc);
        return NextResponse.json({message:"OKAYY HERE"
    },{
        status:200
    })
        
    } catch (err) {
        return NextResponse.json({message:"ERROR HERE",err},{
            status:500})
        
    }
   
   
};
//delete by id 
export const DELETE = async(req:Request)=>{
    try {
        const id = req.url.split("blogs/")[1];
        deletePost(id);
        return NextResponse.json({message:"DELETED HERE"},{
            status:200
        });
    } catch (err) {
        return NextResponse.json({message:"ERROR HERE",err},{
            status: 500
        });
        
    }
  
    
};






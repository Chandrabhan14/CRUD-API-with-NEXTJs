//dummy database to store data coming from the apis in here

type Post = {
    id: string; 
    title: string;
    desc: string; 
    date: Date;
};
let posts: Post[] = [];

//handles the data request it is done by the handlers 
export const getPost = () => posts;

export const addPost = (post:Post) => {
    posts.push(post);
};
//same for delete handler
export const deletePost = (id: string)=>{
    posts = posts.filter((post)=>post.id !== id);
};
//for update  handler  
export const updatePost = (id: string , title:string, desc:string) => {
    const post = posts.find((post)=>post.id === id);
    if(post){
        post.title = title
        post.desc = desc;
    }
    else{
        throw new Error("NO POST FOUN HIHIHI")
    }
};

//getting post by its id handler like above
export const getById = (id: string)=>{
    return posts.find((post)=>post.id ===id);
};






export default {
    path:"/mine",
    component:()=>import("@/views/Mine"),
    children:[
        {path:"",redirect:"list"},
        {path:"list",component:()=>import("@/views/Mine/List"),name:"list"},
        {path:"car",component:()=>import("@/views/Mine/Car"),name:"car"}
    ]
}
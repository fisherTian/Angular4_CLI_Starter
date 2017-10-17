export const config = {
   menu :[
     {
       name:'测试用',
       url:'/dashboard',
       icon:'icon-speedometer'
     },
     {
       name:'用户管理',
       icon:'icon-star',
       children:[
         {
           name:'用户列表',
           url:'/user/list',
           icon:'icon-star'
         }
       ]
     }
   ]
}

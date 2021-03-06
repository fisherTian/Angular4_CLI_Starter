export const config = {
   menu :[
     {
       name:'资金概览',
       url:'/dashboard',
       icon:'icon-speedometer'
     },
     {
       name:'举报管理',
       url:'/against',
       icon:'icon-puzzle'
     },
     {
       name:'用户管理',
       url:'/user',
       icon:'icon-star'
     },
     {
       name:'红包管理',
       icon:'icon-calculator',
       children:[
         {
           name:'热潮包列表',
           url:'/redpacket/list'
           /*icon:'icon-calculator'*/
         },
         {
           name:'订单列表',
           url:'/redpacket/order'
           /*icon:'icon-calculator'*/
         }
       ]
     },
     {
       name:'提现管理',
       icon:'icon-social-stumbleupon',
       children:[
         {
           name:'提现列表',
           url:'/cash/list'
         },
         {
           name:'提现订单',
           url:'/cash/order'
         },
         {
           name:'返现记录',
           url:'/cash/return'
         }
       ]
     },
     {
       name:'广告管理',
       url:'/advertising/list',
       icon:'icon-bell'
     }
   ]
}

import { Component,OnInit,Input } from '@angular/core';
import { OrderService } from './order.service';
import { GoodUtils } from './../../core/utils';
import { NgxCodemirrorModalService } from "./../../plugin/ngx-codemirror-modal/ngx-codemirror-modal.service";
import { environment } from 'environments/environment';
@Component({
  templateUrl: 'order.component.html',
  providers:[OrderService]
})
export class OrderComponent implements OnInit{

  orderList = [];
  page: number = 1;
  total: number;
  query:string='';
  status:string='';
  startTime;
  endTime;

  constructor(private orderService:OrderService,private ngxCodemirrorModalService:NgxCodemirrorModalService) { }

  getOrderList=function(){
    this.orderService.get({currentPage:this.page,keyword:this.query,status:this.status,startTimeStr:GoodUtils.dateFormat(this.startTime,'yyyy-MM-dd'),endTimeStr:GoodUtils.dateFormat(this.endTime,'yyyy-MM-dd')}).then(res =>{
      if(res.code == 200){
        this.orderList = res.data;
        this.total = res.totalItems;
      }
    })
  }

  pageChanged=function(page: number){
    this.page=page;
    this.getOrderList();
}

  ngOnInit(): void {
    this.getOrderList();
  };

  viewJson=function(json){
    let _json = "{}";
    if(json!=null)_json = JSON.stringify(JSON.parse(json),null,4);
    this.ngxCodemirrorModalService.codemirror({ message: _json, onAccept: () => {

    }});
  }

  exportExcel = function(){
    let startTimeStr = "";
    let endTimeStr = "";
    if(this.startTime)startTimeStr = GoodUtils.dateFormat(this.startTime,'yyyy-MM-dd');
    if(this.endTime)endTimeStr = GoodUtils.dateFormat(this.endTime,'yyyy-MM-dd');
    let url=environment.API_URL+'/order/export?keyword='+this.query+'&status='+this.status+'&startTimeStr='+startTimeStr+'&endTimeStr='+endTimeStr;
    if (document.getElementById('exportFile') == null){
      let para=document.createElement("iframe");
      para.style.display = 'none';
      para.setAttribute("id","exportFile");
      document.getElementsByTagName('body')[0].appendChild(para);
    }
    document.getElementById('exportFile').setAttribute("src",url);
  }

}

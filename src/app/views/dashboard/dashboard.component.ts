import { Component ,OnInit} from '@angular/core';
import { InterceptorService  } from 'ng2-interceptors';
import { environment } from 'environments/environment';
import { DashBoardService } from './dashboard.service';
@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit{

  accountTotal:number;
  todayIncome:number;
  todaySpend:number;
  todayBalance:number;
  type='00';

  constructor(private dashBoardService: DashBoardService) { }

  initAccountInfo=function () {
    this.dashBoardService.getAccount().then(res =>{
      console.log(res);
      this.accountTotal = res.accountTotal;
      this.todayIncome = res.todayIncome;
      this.todaySpend = res.todaySpend;
      this.todayBalance = res.todayBalance;
    })
  }

  initChart = function () {
    this.dashBoardService.getChart(this.type).then(res =>{
      console.log(res);
      this.totalIncome = res.totalIncome;
      this.totalSpend = res.totalSpend;
      this.totalBalance = res.totalBalance;
      this.totalIncomeList = res.totalIncomeList;
      this.totalSpendList = res.totalSpendList;
      this.totalIncomeData = [];
      this.totalSpendData = [];
      this.totalDate = [];
      if(this.totalIncomeList.length > 0){
        for (var item of this.totalIncomeList) {
          this.totalDate.push(item.create_time);
          this.totalIncomeData.push(item.total);
        }
        for (var item of this.totalSpendList) {
          this.totalSpendData.push(item.total);
        }
      }
      this.createHxt();
      this.createSzt();
    })
  }

  createHxt = function(){
  this.HxtOption = {
    title: {
      text: '总充值提现统计',
      subtext: '热潮来数据统计'
    },
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b}: {c}元 ({d}%)"
    },
    color:['#32CB32', '#FE9800'],
    legend: {
      orient: 'vertical',
      x: 'right',
      data:['总充值','总提现']
    },
    series: [
      {
        name:'数据统计',
        type:'pie',
        radius: ['50%', '70%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'center'
          },
          emphasis: {
            show: true,
            textStyle: {
              fontSize: '30',
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          normal: {
            show: false
          }
        },
        data:[
          {value:this.totalIncome, name:'总充值'},
          {value:this.totalSpend, name:'总提现'}
        ]
      }
    ]
  };
}

  createSzt = function(){
  this.Sztoption = {
    title : {
      text: '时间分段充值提现统计',
      subtext: '热潮来数据统计',
      left:'center'
    },
    tooltip : {
      trigger: 'axis'
    },
    legend: {
      x: 'right',
      data:['充值','提现']
    },
    color:['#32CB32', '#FE9800'],
    calculable : true,
    xAxis : [
      {
        type : 'category',
        data : this.totalDate
      }
    ],
    yAxis : [
      {
        type : 'value'
      }
    ],
    series : [
      {
        name:'充值',
        type:'bar',
        data:this.totalIncomeData,
        markLine : {
          data : [
            {type : 'average', name: '平均值'}
          ]
        }
      },
      {
        name:'提现',
        type:'bar',
        data:this.totalSpendData,
        markLine : {
          data : [
            {type : 'average', name : '平均值'}
          ]
        }
      }
    ]
  };
}

  ngOnInit() {
    this.initAccountInfo();
    this.initChart();
  }


}

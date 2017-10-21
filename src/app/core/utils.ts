export const GoodUtils = {
  /**
   * 将json对象转为url参数格式
   */
  parseParams: function(params:any){
    let str = '';
    for(let key in params){
      if(params[key] != null)str = str + "&" + key + '='+params[key];
    }
    return (str == ''?str:str.substr(1));
  },

  dateFormat : function (_date,fmt) {
    if(_date == null) return null;
    let date = new Date(_date);
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  }

}


export const GoodUtils = {
  /**
   * 将json对象转为url参数格式
   */
  parseParams: function(params:any){
    let str = '';
    for(let key in params){
      str = str + "&" + key + '='+params[key];
    }
    return (str == ''?str:str.substr(1));
  }

}

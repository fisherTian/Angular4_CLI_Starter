import { Component,OnInit,Output,EventEmitter } from '@angular/core';
import { AdEditService } from './adedit.service';
@Component({
  templateUrl: 'adedit.component.html',
  providers:[AdEditService]
})
export class AdEditComponent implements OnInit{

  constructor(private adEditService:AdEditService) { }

  @Output() froala = new EventEmitter();

  option:Object;
  froalaText:string='';

  ngOnInit(): void {
    var that = this;
    // 参数配置
    // https://www.froala.com/wysiwyg-editor/docs/options?utm_expid=98676916-2.gb-QgBReTCCS2F60oBIe_g.0&utm_referrer=https%3A%2F%2Fwww.google.com%2F#language
    this.option = {
      language: "zh_cn", //配置语言
      placeholderText: "请输入内容", // 文本框提示内容
      charCounterCount: true, // 是否开启统计字数
      charCounterMax: -1, // 最大输入字数,目前只支持英文字母
      // 注意导航条的配置, 按照官方的文档,无法配置,只能使用toolbarButtons来配置了。
      toolbarButtons: ['fullscreen', '|', 'bold', 'italic', 'underline', 'strikeThrough', 'align', 'insertLink', 'insertImage','insertVideo', 'insertHR', 'subscript', 'superscript'],
      codeMirror: false, // 高亮显示html代码
      codeMirrorOptions: { // 配置html代码参数
        tabSize: 4
      },
      height: 200,
      // 上传图片，视频等稳健配置
      //imageUploadURL:this.questionListService.IP+"sns/uploadPhoto",//GLOBAL.INCONFIG.getIP()+接口名称,
      //imageUploadURL:"http://11.177.50.63:9999/emanager/sns/uploadPhoto",//本地路径
      //imageUploadParams:{uid:this.questionListService.userInfo.id},//接口其他传参,默认为空对象{},
     // imageUploadMethod:"POST",//POST/GET,
      // 事件, 每次输入,就将值传递给父组件, 或者使用失去焦点的时候传递。
      events: {
        'froalaEditor.keyup': function (e, editor) {
          that.froala.emit(that.froalaText);
          console.log(editor.selection.get());
        }
      }
    }
  };



}

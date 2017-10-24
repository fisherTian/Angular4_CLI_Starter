import { Component,OnInit,Output,EventEmitter,SecurityContext  } from '@angular/core';
import { AdEditService } from './adedit.service';
import { environment } from 'environments/environment';
import { DomSanitizer} from '@angular/platform-browser';
import {FileUploader} from "ng2-file-upload";
import { ToastrService } from 'ngx-toastr';
import {  ActivatedRoute,Router} from '@angular/router';
@Component({
  templateUrl: 'adedit.component.html',
  providers:[AdEditService]
})
export class AdEditComponent implements OnInit{

  constructor(private adEditService:AdEditService,private router:Router,private route:ActivatedRoute,private toastr:ToastrService,private sanitizer: DomSanitizer) { }

  @Output() froala = new EventEmitter();

  option:Object;
  froalaText:string='';
  html:string='';
  url:string='';
  title:string='';
  id=null;

  initEdit = function(){
    if(this.id){
      //修改广告
      this.adEditService.getAdById(this.id).then(res =>{
        if(res.result){
          console.log(res);
          this.title = res.data.title;
          this.url = res.data.url;
          this.html = res.data.html;
          this.froalaText = res.data.html;
          this.preview();
        }
      })
    }else{
      //新增广告
    }
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    this.initEdit();
    var that = this;

    this.option = {
      language: "zh_cn", //配置语言
      placeholderText: "请输入内容", // 文本框提示内容
      charCounterCount: true, // 是否开启统计字数
      charCounterMax: -1, // 最大输入字数,目前只支持英文字母
      // 注意导航条的配置, 按照官方的文档,无法配置,只能使用toolbarButtons来配置了。
      toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'embedly', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
      codeMirror: false, // 高亮显示html代码
      codeMirrorOptions: { // 配置html代码参数
        tabSize: 4
      },
      height: 300,
      // 上传图片，视频等稳健配置
      imageUploadURL:environment.API_URL+"/system/qiniu/upload",
      //imageUploadParams:{},//接口其他传参,默认为空对象{},
       imageUploadMethod:"POST",//POST/GET,
      // 事件, 每次输入,就将值传递给父组件, 或者使用失去焦点的时候传递。
      events: {
        'froalaEditor.keyup': function (e, editor) {
          console.log(that.froalaText);
          // that.froala.emit(that.froalaText);
          // console.log(editor.selection.get());
        }
      }
    }
  };

  preview=function(){
    this.html = this.sanitizer.bypassSecurityTrustHtml(
      this.froalaText);
  }

  uploadImg = function(){
    document.getElementById("uploadImg").click();
  }


  public uploader:FileUploader = new FileUploader({
    url: environment.API_URL+"/system/qiniu/upload",
    method: "POST",
    itemAlias: "uploadedfile"
  });

  selectedFileOnChanged(event:any) {
    if(event.target.value)this.uploadFile();
  }

  uploadFile() {
    let that = this;
    this.uploader.queue[0].onSuccess = function (response, status, headers) {
      if (status == 200) {
        let tempRes = JSON.parse(response);
        that.url = tempRes.link;
      } else {
        this.toastr.error('上传失败!', '提示');
      }
      this.uploader.queue.length = 0;
    };
    this.uploader.queue[0].upload();
  }

  save = function(){
    if(this.title==null || this.title=='' || this.url == null || this.url == ''){
      this.toastr.warning('请填写完整信息!', '提示');
    }else{
      if(this.id){
        //修改
        let ad = {
          id : this.id,
          url : this.url,
          title : this.title,
          html : this.froalaText
        };
        this.adEditService.updateAd(ad).then(res =>{
          if(res.result){
            this.toastr.success('修改成功!', '提示');
            this.router.navigate(['/advertising/list']);
          }else{
            this.toastr.error('修改失败!', '提示');
          }
        })
      }else{
        //新增
        let ad = {
          url : this.url,
          title : this.title,
          html : this.froalaText
        };
        this.adEditService.addAd(ad).then(res =>{
          if(res.result){
            this.toastr.success('新增成功!', '提示');
            this.router.navigate(['/advertising/list']);
          }else{
            this.toastr.error('新增失败!', '提示');
          }
        })
      }
    }
  }

}

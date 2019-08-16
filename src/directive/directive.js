'use strict';

/**
 *
 *
 * 添加所有的全局指令
 *
 *
 */

 import Vue from 'vue'

 // 聚焦指令
 // 注册一个全局自定义指令 `v-focus`
 // v-focus
 Vue.directive('focus', {
   // 当被绑定的元素插入到 DOM 中时……
   inserted: function (el) {
     // 聚焦元素
     el.focus();
   }
 })



 //el-input只能输入数字（不包含加减号和小数点）
 //v-enterNumber
  // 针对中文输入法无效
 Vue.directive('enterNumber', {
   inserted: function (el) {
     el.addEventListener("keypress",function(e){
       e = e || window.event;
       let charcode = typeof e.charCode === 'number' ? e.charCode : e.keyCode;
       let re = /\d/;
       if(!re.test(String.fromCharCode(charcode)) && charcode > 9 && !e.ctrlKey){
         if(e.preventDefault){
           e.preventDefault();
         }else{
           e.returnValue = false;
         }
       }
     });
   }
 });


 //el-input只能输入数字和小数点（不包含加减号）
 // *注： 只针对 elementUI的Input组件有效
 //v-enterFloat
 // 针对中文输入法无效
 Vue.directive('enterFloat', {
   inserted: function (el) {
     el.addEventListener("keypress",function(e){
       e = e || window.event;
       let charcode = typeof e.charCode == 'number' ? e.charCode : e.keyCode;
       let re = /\d/;
       if(charcode == 46){
         if(el.children[0].value.split('.').length>1){
           e.preventDefault();
         }
         return;
       }else if(!re.test(String.fromCharCode(charcode)) && charcode > 9 && !e.ctrlKey){
         if(e.preventDefault){
           e.preventDefault();
         }else{
             e.returnValue = false;
         }
       }
      });
   },
 });



 //弹出框可拖拽
 //v-dialogDrag
 Vue.directive('dialogDrag', {
   bind(el, binding, vnode, oldVnode) {
     const dialogHeaderEl = el.querySelector('.el-dialog__header');
     const dragDom = el.querySelector('.el-dialog');
     dialogHeaderEl.style.cursor = 'move';

     // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
     const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);

     dialogHeaderEl.onmousedown = (e) => {
       // 鼠标按下，计算当前元素距离可视区的距离
       let oevent = e || window.event;
       const disX = oevent.clientX - dialogHeaderEl.offsetLeft;
       const disY = oevent.clientY - dialogHeaderEl.offsetTop;

       // 获取到的值带px 正则匹配替换
       let styL=0, styT=0;

       // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
       if (sty.left.includes('%')) {
         styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100);
         styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100);
       } else {
         styL = sty.left!='auto'?(+sty.left.replace(/\px/g, '')):(dialogHeaderEl.offsetLeft);
         styT = sty.top!='auto'?(+sty.top.replace(/\px/g, '')):(dialogHeaderEl.offsetTop);
       }

       document.onmousemove = function(e) {
         // 通过事件委托，计算移动的距离
         let oevent = e || window.event;
         const l = oevent.clientX - disX;
         const t = oevent.clientY - disY;

         // 移动当前元素
         dragDom.style.left = `${l + styL}px`;
         dragDom.style.top = `${t + styT}px`;

         // 将此时的位置传出去
         // binding.value({x:e.pageX,y:e.pageY})
       }

       document.onmouseup = function(e) {
         document.onmousemove = null;
         document.onmouseup = null;
       }
     }
   }
 })


 // v-dialogDragWidth: 弹窗宽度拖大 拖小
 Vue.directive('dialogDragWidth', {
   bind(el, binding, vnode, oldVnode) {
     const dragDom = binding.value.$el.querySelector('.el-dialog');

     el.onmousedown = (e) => {
       // 鼠标按下，计算当前元素距离可视区的距离
       const disX = e.clientX - el.offsetLeft;

       document.onmousemove = function(e) {
         e.preventDefault(); // 移动时禁用默认事件

         // 通过事件委托，计算移动的距离
         const l = e.clientX - disX;
         dragDom.style.width = `${l}px`;
       }

       document.onmouseup = function(e) {
         document.onmousemove = null;
         document.onmouseup = null;
       }
     }
   }
 })
/*
*
*常用工具函数
*
*/

'use strict';
import api from '../api/index.js'

export default { 
    /**
     * 每个插件都有的install方法，用于安装插件
     * @param {Object} Vue - Vue类
     * @param {Object} [pluginOptions] - 插件安装配置
     */
    install:function(Vue,option){
          //全局引入api，这样在任何组件中，都不需要再import，直接使用全局变量引用即可
          //比如：在Login.vue 中 使用登录接口
          // url:this.$api.模块名.接口名,
          Vue.prototype.$api = api;


          // 这里不删除全部缓存，因为很可能下一次登录的账号是同一个，这时留下一些习惯缓存是很好的体验
          // 但，如果下一次登录，和退出登录时，不是同一个账号，则做全部删除缓存处理，在login接口中操作
          // 子组件调用：this.$loginOut()
          Vue.prototype.$loginOut = function (methodOptions) {
              localStorage.removeItem('hasLogin');
              localStorage.removeItem('userInfo');
              this.$router.replace({path:'/login'});
          }


          //设置cookie
          Vue.prototype.$setCookie = function(name, value, expiredays){
              //调用示例：this.$setCookie('login','true',7);
              var exdate = new Date();
              exdate.setDate(exdate.getDate() + expiredays);
              document.cookie = name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate.toGMTString());
          };

          //获取cookie
          Vue.prototype.$getCookie = function(name){
              var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
              if (arr = document.cookie.match(reg))
                return (arr[2]);
              else
                return null;
          },

          //删除cookie
          Vue.prototype.$delCookie = function(name){
              var exp = new Date();
              exp.setTime(exp.getTime() - 1);
              var cval = getCookie(name);
              if (cval != null)
               document.cookie = name + "=" + cval + ";expires=" + exp.toGMTString();
          }


          //由于原生使用localStorage/sessionStorage比较简单，用原生即可；



          //限制只能输入数字
          // 建议优先使用指令：v-enterNumber
          Vue.prototype.$number = function(value){
            if(/\D/.test(value)){
              value = value.replace(/\D/g,'');
            }
            return value;
          }


          //是否是合法的11位手机号码
          Vue.prototype.$legalPhone = function(phone){
            let bool = false;
            if(/^[1][3,4,5,7,8][0-9]{9}$/.test(phone)){
              bool = true;
            }
            return bool;
          }


          //数组或对象数组去重函数
          /**
           * [$noRepeat description]
           * @param   arr 目标数组或对象数组
           * @param   key 根据数组对象的某个字段key来去重
           * @return      
           */
          Vue.prototype.$noRepeat = function(arr,key){
            if(!(arr instanceof Array)){
              return;
            }
            let newarr = [];
            let bool = false;
            for (let i = 0; i < arr.length; i++) {
              if(key){
                if(i !== 0){
                  bool = newarr.every((item,index,array)=>{
                    return item[key] != arr[i][key];
                  });
                }
                if(i===0||bool){
                  newarr.push(arr[i]);
                }

              }else if(newarr.indexOf(arr[i]) == -1){
                newarr.push(arr[i]);
              }
            }
            return newarr;
          }


          //去除空格
          Vue.prototype.$trim = function(str){
            //去除字符串左右空格
            if(Object.prototype.toString.call(str) !== "[object String]"){
              return str;
            }
            return str.replace(/^\s*|\s*$/g,"");
          }
          Vue.prototype.$trimAll = function(str){
            //去除字符串全部空格
            if(Object.prototype.toString.call(str) !== "[object String]"){
              return str;
            }
            return str.replace(/\s*/g,"");
          }
          Vue.prototype.$trimLeft = function(str){
            //去除字符串左侧空格
            if(Object.prototype.toString.call(str) !== "[object String]"){
              return str;
            }
            return str.replace(/^\s*/,"");
          }
          Vue.prototype.$trimRight = function(str){
            //去除字符串右侧空格
            if(Object.prototype.toString.call(str) !== "[object String]"){
              return str;
            }
            return str.replace(/(\s*$)/g,"");
          }


          //检测数据的类型
          //使用方法：this.$dataTypes.isNull(null);===> true
          //
          Vue.prototype.$dataTypes = {
            isPrototype( data ) {
              return Object.prototype.toString.call(data).toLowerCase()
            },
            isArray( data ) {
              return this.isPrototype( data ) === '[object array]'
            },
            isJSON( data ) {
              return this.isPrototype( data ) === '[object object]'
            },
            isFunction( data ) {
              return this.isPrototype( data ) === '[object function]'
            },
            isString( data ) {
              return this.isPrototype( data ) === '[object string]'
            },
            isNumber( data ) {
              return this.isPrototype( data ) === '[object number]'
            },
            isUndefined( data ) {
              return this.isPrototype( data ) === '[object undefined]'
            },
            isNull( data ) {
              return this.isPrototype( data ) === '[object null]'
            }
          }


          //添加时间戳转换
          Vue.prototype.$formatTime = function(time){
              let date = new Date(time);
              let y = date.getFullYear();
              let m = date.getMonth() + 1;
              m = m < 10 ? ('0' + m) : m;
              let d = date.getDate();
              d = d < 10 ? ('0' + d) : d;
              let h = date.getHours();
              h = h < 10 ? ('0' + h) : h;
              let minute = date.getMinutes();
              let second = date.getSeconds();
              minute = minute < 10 ? ('0' + minute) : minute;
              second = second < 10 ? ('0' + second) : second;
              return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
          }


          //日期截取
          //例如：2019-01-29T16:00:00.000+0000 转换后为： 2019-01-29
          Vue.prototype.$formatDate = function(time){
            if(!time){
              return '';
            }
            return time.substr(0,10);
          }

          //自动生成数字混合字母的验证码;
          //
          //具备功能：
          //1，随机5-7位的数字字母组合；
          //2，随机字体大小；
          //3，随机字体颜色；
          //4，随机字体是否倾斜；
          //
          //
          Vue.prototype.$createVerifyCode = function(){
              let nums_letter_arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; //所有的大小写字母
              for (let i = 0; i < 10; i++) {
                nums_letter_arr.push(i);
              };

              let alllength=nums_letter_arr.length; //总共有多少位数字加字母；
              let nums = parseInt(Math.random()*10);  // 取11~14位；
              //当在0~2.5区间时，取11位，在2.5~5.0区间取12，取11位，在5.0~7.5区间取13,否则取14；
              if(nums<=2.5){
                nums=11;
              }else if(nums>2.5&&nums<=5.0){
                nums=12;
              }else if(nums>5.0&&nums<=7.5){
                nums=13;
              }else{
                nums=14;
              }

              let result=[]; //最后随机生成的11~14位的数字和字母结果；
              let randomnum = '';
              for (let i = 0; i < nums; i++) {
                randomnum = parseInt(Math.random()*nums_letter_arr.length);
                result.push(nums_letter_arr[randomnum]);
              };

              //生成一个对象数组,如果第二个参数为true则表示取取用当前字符，否则舍弃；最后得到boolean为true的5~7位的结果；
              let numnewarr=[];
              for (let i = 0; i < result.length; i++) {
                numnewarr.push({
                  id:i,
                  val:result[i],
                  boolean:Math.random()*10>5?true:false
                })
              };


              //如果数组numnewarr中，boolean值为true的个数少于5个，则随机补足到7个,如果大于7个则随机减少到7个；
              let boolcount=0;  //boolean值为true的个数
              let boolean_true_arr=[];  //boolean为true对应的所有结果
              let boolean_false_arr=[];  //boolean为false对应的所有结果
              for (let i = 0; i < numnewarr.length; i++) {
                if(numnewarr[i].boolean){
                  boolcount++;
                  boolean_true_arr.push(numnewarr[i]);
                }else{
                  boolean_false_arr.push(numnewarr[i]);
                }
              };

              if(boolcount<5){
                let five_down_id=[];  //boolcount小于5时，随机从boolean_false_arr获取（5-boolcount）个id；
                let f_curcount='';  //当前boolean_false_arr总个数中的随机数;

                for (let i = 0; i < 5-boolcount; i++) {
                    let f_curcount=parseInt(Math.random()*(boolean_false_arr.length));
                    five_down_id.push(boolean_false_arr[f_curcount].id);
                };

                for (let i = 0; i < numnewarr.length; i++) {
                  for (let j = 0; j < five_down_id.length; j++) {
                    if(five_down_id[j]==numnewarr[i].id){
                      numnewarr[i].boolean=true;
                    }
                  };
                };
              }else if(boolcount>=7){
                let seven_up_id=[]; //boolcount大于等于7时，随机从boolean_true_arr获取（boolcount-7）个id；
                let t_curcount='';  //当前boolean_true_arr总个数中的随机数;

                for (let i = 0; i < boolcount-7; i++) {
                    let t_curcount=parseInt(Math.random()*(boolean_true_arr.length));
                    seven_up_id.push(boolean_true_arr[t_curcount].id);
                };

                for (let i = 0; i < numnewarr.length; i++) {
                  for (let j = 0; j < seven_up_id.length; j++) {
                    if(seven_up_id[j]==numnewarr[i].id){
                      numnewarr[i].boolean=false;
                    }
                  };
                };
              }

              //添加随机字体大小尺寸;
              let sizearr=['12px','13px','14px','15px','16px'];
              for (let i = 0; i < numnewarr.length; i++) {
                numnewarr[i].fontsize=sizearr[parseInt(Math.random()*(sizearr.length))];
              };

              //添加随机字体颜色值;
              let colorarr=['aqua', 'black', 'blue', 'fuchsia', 'gray', 'green', 'lime', 'maroon', 'navy', 'olive', 'purple', 'red', 'teal'];
              for (let i = 0; i < numnewarr.length; i++) {
                numnewarr[i].color=colorarr[parseInt(Math.random()*(colorarr.length))];
              };

              //添加字体是否倾斜
              let isiarr=['normal','italic'];
              for (let i = 0; i < numnewarr.length; i++) {
                numnewarr[i].italics=isiarr[parseInt(Math.random()*(isiarr.length))];
              };

              //添加字体是否加粗
              let isweightarr=['normal','bold'];
              for (let i = 0; i < numnewarr.length; i++) {
                numnewarr[i].weight=isweightarr[parseInt(Math.random()*(isweightarr.length))];
              };

            return numnewarr;
          }


          //对象序列化并排序
          //
          //具备功能：
          //1，传入一个对象，将键值对序列化
          //2，将键值对按照ASCII码升序排列；
          //
          //
          Vue.prototype.$getStrSort = function(dataObj){

            let keyarr=[];
            let newObj='';

            for(let key in dataObj){
                keyarr.push(key);
            }
            if(!keyarr.length){
              return false;
            }

            keyarr.sort(function (a, b) {
              return a.localeCompare(b);
            });

            for (var i = 0; i < keyarr.length; i++) {
                for(let key in dataObj){
                    if(key == keyarr[i]){
                        newObj += keyarr[i]+'='+dataObj[key]+'&';
                    }
                }
            };

            return newObj.substr(0, newObj.length-1);
          }


          /*
           *
           * 比较数字大小
           * arr:数组类型，
           * type:获取最大值或者最小值,‘min’:获取数组中最小值，'max':获取数组中最大值
           *
           */
          Vue.prototype.$getMaxOrMin = function(arr,type){
            if(Object.prototype.toString.call(arr) !== "[object Array]"){
              return;
            }
            arr.sort(function (a, b) {
              return a-b;
            });

            if(type === 'min'){
              return arr[0];
            }else if(type === 'max'){
              return arr[arr.length - 1];
            }
          }


          /**
           *
           * 日期比较大小
           * date1/date2:日期格式  非时间戳
           * 返回 date1是否大于date2
           */
          Vue.prototype.$compareDate = function(date1,date2){
            if(!date1&&!date2){
              return;
            }
            
            let d1 = (date1.indexOf('-')>-1)&&date1.replace(/-/g,'/');
            let d2 = (date2.indexOf('-')>-1)&&date2.replace(/-/g,'/');
            return new Date(d1).getTime() - new Date(d2).getTime();
          }
    }
}

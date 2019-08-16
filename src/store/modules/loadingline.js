/*
* @Author: lhl
* @Date:   2018-06-11 10:43:32
* @Last Modified by:   lhl
* @Last Modified time: 2018-06-11 16:05:41
*/

'use strict';

export default {
    state:{
    	//在Vue实例中可以通过this.$store.state对象获取state中的数据。
    	//如果希望在state中的数据发生更改之后，组件会自动更新，则应该使用组件的computed属性定义数据
    	isStartLoading:false,
    	loadingStatue:'', //请求返回结果是成功还是失败，如果是成功，loadingStatue为'success',加载组件显示绿色进度条，否则显示红色进度条
    },
    getters:{

    },
    mutations:{
    	//mutations只能进行同步更改
    	//mutations属性函数只接受两个参数
    	//第一个参数是state，因为要对state进行更改，第二个参数代表传入的新参数。
    	//在子组件中通过this.$store.commit()方法触发mutations属性函数。
    	//commit函数第一个参数是mutations的属性函数名，第二个参数是传入的新值。
    	openLoading(state){
    		// 开启加载进度条
    		state.isStartLoading = true;
    	},
    	closeLoading(state,status){
    		// 关闭加载进度条
    		state.isStartLoading = false;
    		state.loadingStatue = status;
    	},
    	resetLoadingStatus(state){
    		state.loadingStatue = '';
    	}
    },
    actions:{
    	//actions中的更改可以是异步执行
    	//定义actions属性函数时，必须传递的第一个参数是context，用于触发mutations函数
    	//比如通过ajax或者Vue.Resource()进行数据获取，获取数据后再通过context.commit()触发更改。
    	//触发actions属性函数使用this.$store.dispatch()函数。

    }
}
'use strict';

/**
 *
 *
 * 添加所有的全局过滤器
 * 
 *
 *
 */

/**
 *
 *
 *	过滤器科用在两个地方：双花括号插值 和 v-bind 表达式 中。过滤器应该被添加在js表达式的尾部，由管道符号指示
 *	// 双花括号中
 *	{{ message | capitalize }}
 *
 *	// 在v-bind 中
 *	<div v-bind:id=" rawId | formatId"></div>
 * 
 */

const filters = {
	//首字母大写
	capitalize: function (value) {
		if (!value) return ''
		value = value.toString()
		return value.charAt(0).toUpperCase() + value.slice(1)
	},
	//字符串反转
	reverseStr:function(value){
		return value.split('').reverse().join('')
	},
}

export default filters;
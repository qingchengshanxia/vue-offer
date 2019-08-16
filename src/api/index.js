'use strict';

/**
 * 统一存放所有的api请求地址
 * 在所有的组件中使用方法：this.$api.接口属性名 (/api应用了本地跨域代理，发布线上后会自动除去)
 *
 * 请注意：添加接口，请在对应模块下添加
 * 
 * 
 */
let isProduct = process.env.NODE_ENV == 'production' ? true : false;//是否是生产环境
let isTest = process.env.NODE_ENV == 'exam' ? true : false;//是否是测试环境---如果两个都不是则是本地环境
let systemPre = '/user-center/user'; //系统模块前缀

let apiUrl = {
	//系统接口
	system: {
		login: '/login',		//登录接口
		register: '',	//注册接口
	},

	//Offer模块接口
	offer: {
		addOffer: '/addOffer', //手动增加offer
		addOfferListMapping: '/addOfferListMapping', //增加数据库与json的映射
		deleteOfferById: '/deleteOfferById',  // 根据offerId删除对应的offer
		editOfferById: '/editOfferById',  //根据offerId编辑offer
		queryDbFiled: '/queryDbFiled',  //返回数据库的字段，方便下拉选择
		queryOfferAlliance: '/queryOfferAlliance',  //获取该用户的所有的联盟信息
		queryOfferById: '/queryOfferById',  //根据offerId获取offer的详细信息
		queryOfferListForUser: '/queryOfferListForUser',  // 根据条件获取该用户的所有offer的相关信息
	}
};
export default apiUrl;

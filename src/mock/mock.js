/*
* @Author: lhl
* @Date:   2018-05-05 13:09:18
* @Last Modified by:   lhl
* @Last Modified time: 2018-05-05 16:44:06
*/

'use strict';

// 引入mockjs
const Mock = require('mockjs');


// mock一组数据
const NewsData = function() {
  let data = [];
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      title: i, // Random.csentence( min, max )
      author_name:'lhl', // Random.cname() 随机生成一个常见的中文姓名
    }
    data.push(newArticleObject)
  }

  return {
    datas:data
  }
}


// Mock.mock( url, post/get , 返回的数据)；
Mock.mock('/demodatas', 'post', NewsData);
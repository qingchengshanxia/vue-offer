/**
 *
 * 系统菜单目录结构
 *
 *
 *   这里先设定静态目录，等二级目录权限接口设定好了后，改为从接口中获取数据
 * 
 */

'use strict';

let menuData = {
    // 菜单
    'huang': {
        "submenu": null,
        "childs": [
            {
                "submenu": {
                    "id": 51,
                    "parentMenuId": 0,
                    "name": "huang1",
                    "icon": "el-icon-setting\r\n",
                    "title": "黄字榜1",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/huang/huang1',
                    "type": "fenxibaobiao",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
            {
                "submenu": {
                    "id": 52,
                    "parentMenuId": 0,
                    "name": "huang2",
                    "icon": "el-icon-setting\r\n",
                    "title": "黄字榜2",
                    "state": "ENABLE",
                    "sort": 0,
                    "url": '/home/huang/huang2',
                    "type": "fenxibaobiao",
                    "discription": "",
                    "createUserId": 1
                },
                "childs": null
            },
        ]
    },
}

module.exports = menuData;
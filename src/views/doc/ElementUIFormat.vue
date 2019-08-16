<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-14 18:09:26
 -->
<template>
  <!-- Element-UI统一使用标准说明文档 -->
  <div class="format-box">
    <h2 style="text-align: center;">
      <span>
        <router-link tag="i" to="/home">
          <el-tooltip class="item" effect="light" content="点击进入主页" placement="top-start">
            <img style="width: 22px;margin-right: 10px;cursor: pointer;" :src="require('@/assets/logo.png')">
          </el-tooltip>
        </router-link>
        Element-UI统一使用标准说明文档
      </span>
      <router-link tag="a" to="/doc/webstandard" style="color:gray;border-bottom: solid 1px gray;font-size: 12px;margin-left: 20px;">→ 前端架构、规范、组织结构文档</router-link>
    </h2>
    <!-- 右侧目录 -->
    <div class="doc-menu">
      <h4><span>文档目录</span><span class="menu-count">{{curid}} / {{menu.length}}</span></h4>
      <div id="menubox">
        <ul>
          <li v-for="(item,index) in menu" :class="{'active':curid==index+1}"><a href="javascript:void(0)" @click="goAnchor(item.url)">{{item.title}}</a></li>
        </ul>
      </div>
    </div>
    <div class="doc-word">
      <!-- UI界面主色 -->
      <p style="text-align: center;color:red;font-size: 12px;">（本规范一经确认, 开发人员必须遵守。如有不对, 可提出、讨论、新增、更改，欢迎大家一起贡献。）</p>
      <div id="anchor1">
        <h3>一：UI布局颜色</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>主色</h4>
            <div class="grey-block">
              <p> 主要品牌颜色是朴素、友好的蓝色。</p>
              <div class="demo-color-box bg-blue" style="width:180px;background: #1976d2;">
                <span>#1976d2</span>
              </div>
            </div>
          </div>
          <div>
            <h4>辅助色</h4>
            <div class="grey-block">
              <p>除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。</p>
              <ul>
                <li class="demo-color-box bg-blue" style="background: #67C23A;display: inline-block;">
                  <span>成功</span><br>
                  <span>#67C23A</span>
                </li>
                <li class="demo-color-box bg-blue" style="background: #E6A23C;display: inline-block;">
                  <span>警告</span><br>
                  <span>#E6A23C</span>
                </li>
                <li class="demo-color-box bg-blue" style="background: #F56C6C;display: inline-block;">
                  <span>危险</span><br>
                  <span>#F56C6C</span>
                </li>
                <li class="demo-color-box bg-blue" style="background: #909399;display: inline-block;">
                  <span>通知</span><br>
                  <span>#909399</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>中性色</h4>
            <div class="grey-block">
              <p>中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。</p>
              <ul style="display: inline-block;margin-right: 20px;border-radius: 4px;overflow: hidden;">
                <li class="text-bg-box" style="background-color: #303133;">
                  <span>主要文字</span><br>
                  <span style="opacity: .69;">#303133</span>
                </li>
                <li class="text-bg-box" style="background-color: #606266;">
                  <span>常规文字</span><br>
                  <span style="opacity: .69;">#606266</span>
                </li>
                <li class="text-bg-box" style="background-color: #909399;">
                  <span>次要文字</span><br>
                  <span style="opacity: .69;">#909399</span>
                </li>
                <li class="text-bg-box" style="background-color: #C0C4CC;">
                  <span>占位文字</span><br>
                  <span style="opacity: .69;">#C0C4CC</span>
                </li>
              </ul>
              <ul style="display: inline-block;border-radius: 4px;overflow: hidden;" class="border-box">
                <li class="text-bg-box" style="background-color: #DCDFE6;">
                  <span>一级边框</span><br>
                  <span style="opacity: .69;">#DCDFE6</span>
                </li>
                <li class="text-bg-box" style="background-color: #E4E7ED;">
                  <span>二级边框</span><br>
                  <span style="opacity: .69;">#E4E7ED</span>
                </li>
                <li class="text-bg-box" style="background-color: #EBEEF5;">
                  <span>三级边框</span><br>
                  <span style="opacity: .69;">#EBEEF5</span>
                </li>
                <li class="text-bg-box" style="background-color: #F2F6FC;">
                  <span>四级边框</span><br>
                  <span style="opacity: .69;">#F2F6FC</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
      <!-- //字体 -->
      <div id="anchor2">
        <h3>二：统一字体</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果</h4>
            <div class="grey-block">
              <ul>
                <li class="demo-color-box" style="position: relative;color:#303133;height: 120px;border: 1px solid #ddd;width:240px;">
                  <span style="font-size: 30px;">集团</span><br><br>
                  <span style="border-top: solid 1px #ddd;text-indent: 20px;font-size: 14px;color:#909399;display: block;height: 40px;line-height: 40px;position: absolute;bottom: 0;left: 0;width: 100%;">font-family:Helvetica</span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>Font-family 代码</h4>
            <div class="grey-block">
              <pre style="display: inline-block;" class="clearfix">
                    <code style="float: left;padding: 18px 24px;background-color: #fafafa;border: 1px solid #eaeefb;">font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif</code>
                </pre>
            </div>
          </div>
          <div>
            <h4>字体使用规范</h4>
            <div class="grey-block">
              <table style="border-spacing: 2px;border-color: grey;" class="font-style">
                <tbody>
                  <tr style="border-collapse: collapse;font-size: 20px;">
                    <td>主标题</td>
                    <td>某集团有限公司荣誉出品</td>
                    <td>20px</td>
                  </tr>
                  <tr style="border-collapse: collapse;font-size: 18px;">
                    <td>标题</td>
                    <td>某集团有限公司荣誉出品</td>
                    <td>18px</td>
                  </tr>
                  <tr style="border-collapse: collapse;font-size: 16px;">
                    <td>小标题</td>
                    <td>某集团有限公司荣誉出品</td>
                    <td>16px</td>
                  </tr>
                  <tr style="border-collapse: collapse;font-size: 14px;">
                    <td>正文</td>
                    <td>某集团有限公司荣誉出品</td>
                    <td>14px</td>
                  </tr>
                  <tr style="border-collapse: collapse;font-size: 13px;">
                    <td>正文（小）</td>
                    <td>某集团有限公司荣誉出品</td>
                    <td>13px</td>
                  </tr>
                  <tr style="border-collapse: collapse;font-size: 12px;">
                    <td>辅助文字</td>
                    <td>某集团有限公司荣誉出品</td>
                    <td>12px</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <!-- Icon 图标 -->
      <div id="anchor3">
        <h3>三：Icon 图标</h3>
        <div style="padding-left: 20px;">
          <h4>我们统一使用阿里巴巴的iconfont，考虑后期维护的特点，应尽量不使用element内置icon，也不使用其它icon</h4>
          <div class="grey-block">
            <p>1、使用方法：直接通过设置类名为 "icon-*** iconfont" 来使用即可。</p>
            <div style="padding-left: 20px;">
              <div>例如：
                <ul style="padding-left: 40px;">
                  <li><i class="iconfont icon-mima"></i></li>
                  <li><i class="iconfont icon-guanbi"></i></li>
                  <li><i class="iconfont icon-duigoux"></i></li>
                  <li><i class="iconfont icon-shangyibu"></i></li>
                  <li><i class="iconfont icon-xiayibu"></i></li>
                </ul>
              </div>
              <pre>
                                <code>
        &lt;ul&gt;
            &lt;li&gt;&lt;i class="iconfont icon-mima"&gt;&lt;/i&gt;&lt;/li&gt;
            &lt;li&gt;&lt;i class="iconfont icon-guanbi"&gt;&lt;/i&gt;&lt;/li&gt;
            &lt;li&gt;&lt;i class="iconfont icon-duigoux"&gt;&lt;/i&gt;&lt;/li&gt;
            &lt;li&gt;&lt;i class="iconfont icon-shangyibu"&gt;&lt;/i&gt;&lt;/li&gt;
            &lt;li&gt;&lt;i class="iconfont icon-xiayibu"&gt;&lt;/i&gt;&lt;/li&gt;
        &lt;/ul&gt;
                                </code>
                            </pre>
            </div>
            <p>2、使用者，统一联系文档撰写人，加入阿里巴巴iconfont的项目组，这样，加入者皆可新增、删减、下载iconfont；</p>
            <p>3、图标对应的icon类名，参与开发人员请到iconfont官网登录后，到zhongliang项目下查看；</p>
          </div>
        </div>
      </div>
      <!-- //button 按钮 -->
      <div id="anchor4">
        <h3>四：Button 按钮</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>主要使用按钮</h4>
            <div class="grey-block">
              <p>页面中常用的按钮颜色、大小标准，这里我们使用‘朴素’风格/偏小按钮</p>
              <div>
                <ul>
                  <li style="margin-bottom: 10px;">
                    <el-button size="small" plain>默认按钮</el-button>
                    <span style="margin-left: 20px;">&lt;el-button size="small" plain&gt;默认按钮&lt;/el-button&gt;</span>
                  </li>
                  <li style="margin-bottom: 10px;">
                    <el-button size="small" plain type="primary">主要按钮</el-button>
                    <span style="margin-left: 20px;">&lt;el-button size="small" plain type="primary"&gt;主要按钮&lt;/el-button&gt;</span>
                  </li>
                  <li style="margin-bottom: 10px;">
                    <el-button size="small" plain type="success">成功按钮</el-button>
                    <span style="margin-left: 20px;">&lt;el-button size="small" plain type="success"&gt;成功按钮&lt;/el-button&gt;</span>
                  </li>
                  <li style="margin-bottom: 10px;">
                    <el-button size="small" plain type="info">信息按钮</el-button>
                    <span style="margin-left: 20px;">&lt;el-button size="small" plain type="info"&gt;信息按钮&lt;/el-button&gt;</span>
                  </li>
                  <li style="margin-bottom: 10px;">
                    <el-button size="small" plain type="warning">警告按钮</el-button>
                    <span style="margin-left: 20px;">&lt;el-button size="small" plain type="warning"&gt;警告按钮&lt;/el-button&gt;</span>
                  </li>
                  <li style="margin-bottom: 10px;">
                    <el-button size="small" plain type="danger">危险按钮</el-button>
                    <span style="margin-left: 20px;">&lt;el-button size="small" plain type="danger"&gt;危险按钮&lt;/el-button&gt;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4>禁用状态</h4>
            <div class="grey-block">
              <p></p>
              <div>
                <ul>
                  <li style="margin-bottom: 10px;">
                    <el-button size="small" plain disabled>默认按钮</el-button>
                    <span style="margin-left: 20px;">&lt;el-button size="small" plain disabled&gt;默认按钮&lt;/el-button&gt;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4>文字按钮</h4>
            <div class="grey-block">
              <p>没有边框和背景色的按钮。</p>
              <div>
                <ul>
                  <li style="margin-bottom: 10px;">
                    <el-button type="text">文字按钮</el-button>
                    <span style="margin-left: 20px;">&lt;el-button type="text" &gt;文字按钮&lt;/el-button&gt;</span>
                  </li>
                  <li style="margin-bottom: 10px;">
                    <el-button type="text" disabled>文字按钮</el-button>
                    <span style="margin-left: 20px;">&lt;el-button type="text" disabled &gt;文字按钮&lt;/el-button&gt;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h4>图标按钮</h4>
            <div class="grey-block">
              <p>带图标的按钮:可使用element-ui自带icon，也可以使用框架自带icon</p>
              <div>
                <ul>
                  <li>
                    <el-button type="default" size="small" icon="el-icon-delete"></el-button>
                    <span style="margin-left: 20px;">&lt;el-button size="small" type="default" icon="el-icon-delete" &gt;&lt;/el-button&gt;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 单选框 -->
      <div id="anchor5">
        <h3>五：单选框</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>单选框组</h4>
            <div class="grey-block">
              <div>
                <el-radio-group v-model="radio" size="small">
                  <el-radio :label="3">备选项</el-radio>
                  <el-radio :label="6">备选项</el-radio>
                  <el-radio :label="9" disabled>备选项</el-radio>
                </el-radio-group>
              </div>
              <div style="margin-top: 10px;padding-left: 10px;">
                &lt;el-radio-group v-model="radio"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-radio :label="3"&gt;备选项&lt;/el-radio&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-radio :label="6"&gt;备选项&lt;/el-radio&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-radio :label="9" disabled&gt;备选项&lt;/el-radio&gt;<br>
                &lt;/el-radio-group&gt;<br>
                <p>radio: 3</p>
              </div>
            </div>
          </div>
          <div>
            <h4>单选按钮组样式</h4>
            <div class="grey-block">
              <div>
                <el-radio-group v-model="radio2" size="small">
                  <el-radio-button label="北京"></el-radio-button>
                  <el-radio-button label="上海"></el-radio-button>
                  <el-radio-button label="南京"></el-radio-button>
                </el-radio-group>
              </div>
              <div style="margin-top: 10px;padding-left: 10px;">
                &lt;el-radio-group v-model="radio2" size="small"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-radio-button label="北京"&gt;&lt;/el-radio-button&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-radio-button label="上海"&gt;&lt;/el-radio-button&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-radio-button label="南京"&gt;&lt;/el-radio-button&gt;<br>
                &lt;/el-radio-group&gt;<br>
                <p>radio2:'北京'</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- 多选框 -->
      <div id="anchor6">
        <h3>六：多选框</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>多选框组</h4>
            <div class="grey-block">
              <div>
                <el-checkbox-group v-model="checkList">
                  <el-checkbox label="复选框 A"></el-checkbox>
                  <el-checkbox label="复选框 B"></el-checkbox>
                  <el-checkbox label="复选框 C"></el-checkbox>
                  <el-checkbox label="禁用" disabled></el-checkbox>
                  <el-checkbox label="选中且禁用" disabled></el-checkbox>
                </el-checkbox-group>
              </div>
              <div style="margin-top: 10px;padding-left: 10px;">
                &lt;el-checkbox-group v-model="checkList"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-checkbox label="复选框 A"&gt;&lt;/el-checkbox&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-checkbox label="复选框 B"&gt;&lt;/el-checkbox&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-checkbox label="复选框 C"&gt;&lt;/el-checkbox&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-checkbox label="禁用" disabled&gt;&lt;/el-checkbox&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-checkbox label="选中且禁用" disabled&gt;&lt;/el-checkbox&gt;<br>
                &lt;/el-checkbox-group&gt;

                <p>checkList: ['选中且禁用','复选框 A'],</p>
              </div>
            </div>
          </div>
          <div>
            <h4>多选按钮组样式</h4>
            <div class="grey-block">
              <div>
                <el-checkbox-group v-model="checkboxGroup1" size="small">
                  <el-checkbox-button v-for="(item,index) in cities" :label="item" :key="index">{{item}}</el-checkbox-button>
                </el-checkbox-group>
              </div>
              <div style="margin-top: 10px;padding-left: 10px;">
                &lt;el-checkbox-group v-model="checkboxGroup1" size="small"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-checkbox-button v-for="(item,index) in cities" :label="item" :key="index"&gt;{\{item}\}&lt;/el-checkbox-button&gt;<br>
                &lt;/el-checkbox-group&gt;
                <p>
                  <span>checkboxGroup1: ['上海']</span><br>
                  <span>cities:['上海', '北京', '广州', '深圳']</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Input框 -->
      <div id="anchor7">
        <h3>七：Input 输入框</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>基础Input框，使用可清空input框，尺寸使用：size="small"</h4>
            <div class="grey-block">
              <ul>
                <li style="margin-top: 10px;">
                  <el-input v-model="input" size="small" clearable placeholder="请输入内容" style="width: 120px;"></el-input>
                  <span style="margin-left: 20px;">
                    &lt;el-input v-model="input" size="small" clearable placeholder="请输入内容"&gt;&lt;/el-input&gt;
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>禁用Input框</h4>
            <div class="grey-block">
              <ul>
                <li style="margin-top: 10px;">
                  <el-input v-model="input2" size="small" disabled placeholder="请输入内容" style="width: 120px;"></el-input>
                  <span style="margin-left: 20px;">
                    &lt;el-input v-model="input2" size="small" disabled placeholder="请输入内容"&gt;&lt;/el-input&gt;
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>带 icon 的输入框</h4>
            <div class="grey-block">
              <ul>
                <li style="margin-top: 10px;">
                  <el-input placeholder="请输入内容" style="width: 120px;" size="small" v-model="input3">
                    <i slot="prefix" class="el-input__icon el-icon-search"></i>
                  </el-input>
                  <div style="margin-left: 20px;margin-top: 10px;">
                    <span>
                      &lt;el-input&gt; <br>
                      &nbsp;&nbsp;&nbsp;&nbsp;placeholder="请输入内容"<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;style="width: 120px;"<br>
                      &nbsp;&nbsp;&nbsp;&nbsp; size="small"<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;v-model="input3"&gt;<br>
                      &nbsp;&nbsp;&nbsp;&nbsp;&lt;i slot="prefix" class="el-input__icon el-icon-search"&gt;&lt;/i&gt;<br>
                      &lt;/el-input&gt;
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <h4>复合型输入框</h4>
            <div class="grey-block">
              <ul>
                <li style="margin-top: 10px;">
                  <el-input placeholder="请输入内容" size="small" v-model="input4" style="width: 240px;">
                    <template slot="prepend">Http://</template>
                  </el-input>
                  <span style="padding-left: 20px;">
                    &lt;el-input placeholder="请输入内容" v-model="input4" style="width: 240px;"&gt;
                    template slot="prepend"&gt;Http://&lt;/template&gt;
                    &lt;/el-input&gt;
                  </span>
                </li>
                <li style="margin-top: 10px;">
                  <el-input placeholder="请输入内容" size="small" v-model="input5" style="width: 240px;">
                    <template slot="append">.com</template>
                  </el-input>
                  <span style="padding-left: 20px;">
                    &lt;el-input placeholder="请输入内容" v-model="input5" style="width: 240px;"&gt;
                    &lt;template slot="append"&gt;.com&lt;/template&gt;
                    &lt;/el-input&gt;
                  </span>
                </li>
                <li style="margin-top: 10px;">
                  <el-input placeholder="请输入内容" size="small" v-model="select" style="width: 240px;" class="input-with-select">
                    <el-select v-model="select" slot="prepend" placeholder="请选择">
                      <el-option label="餐厅名" value="1"></el-option>
                      <el-option label="订单号" value="2"></el-option>
                      <el-option label="用户电话" value="3"></el-option>
                    </el-select>
                    <el-button slot="append" icon="el-icon-search"></el-button>
                  </el-input>
                  <span style="padding-left: 20px;margin-top: -10px;display: block;">
                    <br>
                    &lt;el-input placeholder="请输入内容" size="small" v-model="input6" style="width: 240px;" class="input-with-select"&gt; <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-select v-model="select" slot="prepend" placeholder="请选择"&gt; <br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option label="餐厅名" value="1"&gt;&lt;/el-option&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option label="订单号" value="2"&gt;&lt;/el-option&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option label="用户电话" value="3"&gt;&lt;/el-option&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-select&gt;<br>
                    &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button slot="append" icon="el-icon-search"&gt;&lt;/el-button&gt;<br>
                    &lt;/el-input&gt;
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <!-- InputNumber 计数器 -->
      <div id="anchor8">
        <h3>八：InputNumber 计数器</h3>
        <div style="margin-left: 20px;">
          <div>
            <h4>基础用法</h4>
            <div class="grey-block">
              <el-input-number size="small" v-model="num1" :min="1" :max="10" label="描述文字"></el-input-number>
              <span style="margin-left: 20px;">
                &lt;el-input-number size="small" v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字"&gt;&lt;/el-input-number&gt;
              </span>
            </div>
          </div>
          <div>
            <h4>禁用状态</h4>
            <div class="grey-block">
              <el-input-number size="small" v-model="num2" :disabled="true"></el-input-number>
              <span style="margin-left: 20px;">
                &lt;el-input-number size="small" v-model="num2" :disabled="true"&gt;&lt;/el-input-number&gt;
              </span>
            </div>
          </div>
          <div>
            <h4>精度</h4>
            <div class="grey-block">
              <el-input-number size="small" v-model="num3" :precision="2" :step="0.1" :max="10"></el-input-number>
              <span style="margin-left: 20px;">
                &lt;el-input-number size="small" v-model="num3" :precision="2" :step="0.1" :max="10"&gt;&lt;/el-input-number&gt;
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- Select 选择器 -->
      <div id="anchor9">
        <h3>九：Select 选择器</h3>
        <div style="margin-left: 20px;">
          <div>
            <h4>基础用法，可清空，</h4>
            <div class="grey-block">
              <el-select size="small" v-model="select1" clearable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <div>
                &lt;el-select size="small" v-model="select1" clearable placeholder="请选择"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-for="item in options"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:key="item.value"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:label="item.label"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:value="item.value"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-option&gt;<br>
                &lt;/el-select&gt;<br>
              </div>
            </div>
          </div>
          <div>
            <h4>多选可搜索</h4>
            <div class="grey-block">
              <el-select size="small" filterable v-model="select6" clearable placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <div>
                &lt;el-select size="small" filterable v-model="select6" clearable placeholder="请选择"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-for="item in options"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:key="item.value"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:label="item.label"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:value="item.value"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-option&gt;<br>
                &lt;/el-select&gt;<br>
              </div>
            </div>
          </div>
          <div>
            <h4>基础多选</h4>
            <div class="grey-block">
              <el-select size="small" v-model="select2" multiple placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
              </el-select>
              <div>
                &lt;el-select size="small" v-model="select2" multiple placeholder="请选择"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-for="item in options"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:key="item.value"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:label="item.label"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:value="item.value"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-option&gt;<br>
                &lt;/el-select&gt;
              </div>
            </div>
          </div>
          <div>
            <h4>选择项显示多列数据</h4>
            <div class="grey-block">
              <el-select size="small" v-model="select3" placeholder="请选择">
                <el-option v-for="item in cities2" :key="item.value" :label="item.label" :value="item.value">
                  <span style="float: left">{{ item.label }}</span>
                  <span style="float: right; color: #8492a6; font-size: 13px">{{ item.value }}</span>
                </el-option>
              </el-select>
              <div>
                &lt;el-select size="small" v-model="select3" placeholder="请选择"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;v-for="item in cities2"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:key="item.value"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:label="item.label"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:value="item.value"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span style="float: left"&gt;{\{ item.label }\}&lt;/span&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span style="float: right; color: #8492a6; font-size: 13px"&gt;{\{ item.value }\}&lt;/span&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-option&gt;<br>
                &lt;/el-select&gt;
              </div>
            </div>
          </div>
          <div>
            <h4>多选分组</h4>
            <div class="grey-block">
              <el-select size="small" v-model="select4" placeholder="请选择">
                <el-option-group v-for="group in options3" :key="group.label" :label="group.label">
                  <el-option v-for="item in group.options" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-option-group>
              </el-select>
              <div>
                &lt;el-select size="small" v-model="select4" placeholder="请选择"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option-group<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-for="group in options3"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:key="group.label"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:label="group.label"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-for="item in group.options"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:key="item.value"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:label="item.label"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:value="item.value"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-option&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-option-group&gt;<br>
                &lt;/el-select&gt;<br>
                <p><span>(options3数据参考vue源码)</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Cascader 级联选择器 -->
      <div id="anchor10">
        <h3>十：Cascader 级联选择器</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4> click 触发子菜单</h4>
            <div class="grey-block">
              <el-cascader :options="options4" size="small" v-model="selectedOptions">
              </el-cascader>
              <div>
                &lt;el-cascader <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:options="options4"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size="small"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model="selectedOptions"&gt;<br>
                &lt;/el-cascader&gt;
                <p>（数据查看vue源码）</p>
              </div>
            </div>
          </div>
          <div>
            <h4> 仅显示最后一级</h4>
            <div class="grey-block">
              <el-cascader :options="options4" :show-all-levels="false">
              </el-cascader>
              <div>
                &lt;el-cascader<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:options="options4"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:show-all-levels="false"<br>
                &gt;<br>
                &lt;/el-cascader&gt;
                <p>（数据查看vue源码）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Switch 开关 -->
      <div id="anchor11">
        <h3>十一：Switch 开关</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>switch开关基本用法</h4>
            <div class="grey-block">
              <el-switch v-model="switch1" active-color="#409EFF" inactive-color="#dcdfe5">
              </el-switch>
              <div style="margin-top: 10px;">
                &lt;el-switch <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model="switch1"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;active-color="#409EFF"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;inactive-color="#dcdfe5"&gt;<br>
                &lt;/el-switch&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Slider 滑块 -->
      <div id="anchor12">
        <h3>十二：Slider 滑块</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>slider 基础用法</h4>
            <div class="grey-block">
              <div class="block">
                <el-slider v-model="slider1"></el-slider>
                <div>
                  &lt;el-slider v-model="slider1"&gt;&lt;/el-slider&gt;
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>slider 离散值</h4>
            <div class="grey-block">
              <el-slider v-model="slider2" :step="10" show-stops>
              </el-slider>
              <span>
                &lt;el-slider <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model="slider2"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:step="10"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;show-stops&gt;<br>
                &lt;/el-slider&gt;<br>
              </span>
            </div>
          </div>
        </div>
      </div>
      <!-- TimePicker 时间选择器 -->
      <div id="anchor13">
        <h3>十三：TimePicker 时间选择器</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>格式一：任意时间点</h4>
            <div class="grey-block">
              <el-time-picker v-model="time1" size="small" :picker-options="{
                                  selectableRange: '18:30:00 - 20:30:00'
                                }" placeholder="任意时间点">
              </el-time-picker>
              <div style="margin-top: 10px;">
                &lt;el-time-picker <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size="small"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model="time1"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:picker-options="{<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;selectableRange: '18:30:00 - 20:30:00'<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholder="任意时间点"&gt;<br>
                &lt;/el-time-picker&gt;
                <p>
                  time1: new Date(2016, 9, 10, 18, 40)
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4>格式二：任意时间范围</h4>
            <div class="grey-block">
              <el-time-picker is-range v-model="time2" size="small" range-separator="至" start-placeholder="开始时间" end-placeholder="结束时间" placeholder="选择时间范围">
              </el-time-picker>
              <div style="margin-top: 10px;">
                &lt;el-time-picker <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;is-range<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model="time2"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size="small"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;range-separator="至"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;start-placeholder="开始时间"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;end-placeholder="结束时间"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholder="选择时间范围"&gt;<br>
                &lt;/el-time-picker&gt;
                <p>
                  time2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- DatePicker 日期选择器 -->
      <div id="anchor14">
        <h3>十四：DatePicker 日期选择器</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>默认日期选择控件，显示格式使用：format="yyyy-MM-dd"，给后台传值格式：value-format="yyyy-MM-dd"</h4>
            <div class="grey-block">
              <el-date-picker v-model="date1" size="small" type="date" value-format="yyyy-MM-dd" format="yyyy-MM-dd" placeholder="选择日期">
              </el-date-picker>
              <div style="margin-top: 10px;">
                &lt;el-date-picker <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model="date1"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size="small"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type="date"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;value-format="yyyy-MM-dd"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;format="yyyy-MM-dd"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholder="选择日期"&gt;<br>
                &lt;/el-date-picker&gt;
              </div>
            </div>
          </div>
          <div>
            <h4>默认日期时间选择器</h4>
            <div class="grey-block">
              <el-date-picker v-model="date2" size="small" type="datetime" placeholder="选择日期时间">
              </el-date-picker>
              <div style="margin-top: 10px;">
                &lt;el-date-picker <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model="date2"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size="small"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type="datetime"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placeholder="选择日期时间"&gt;<br>
                &lt;/el-date-picker&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Upload 上传 -->
      <div id="anchor15">
        <h3>十五：Upload 上传</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>默认使用点击按钮上传</h4>
            <div class="grey-block">
              <div style="width: 240px;">
                <el-upload class="upload-demo" action="https://xxxxx.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :before-remove="beforeRemove" multiple :limit="3" :on-exceed="handleExceed" :file-list="fileList">
                  <el-button size="small" type="primary">点击上传</el-button>
                  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
              </div>
              <div style="margin-top: 10px;">
                &lt;el-upload <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;class="upload-demo"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;action="https://xxxxx.com/posts/"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:on-preview="handlePreview"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:on-remove="handleRemove"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:before-remove="beforeRemove"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;multiple<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:limit="3"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:on-exceed="handleExceed"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:file-list="fileList"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button size="small" type="primary"&gt;点击上传&lt;/el-button&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="tip" class="el-upload__tip"&gt;只能上传jpg/png文件，且不超过500kb&lt;/div&gt;<br>
                &lt;/el-upload&gt;
                <p>（数据查看vue源码）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Rate 评分 -->
      <div id="anchor16">
        <h3>十六：Rate 评分</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>评分默认用法</h4>
            <div class="grey-block">
              <el-rate v-model="rate" show-text :colors="['#99A9BF', '#F7BA2A', '#FF9900']">
              </el-rate>
              <div style="margin-top: 10px;">
                &lt;el-rate<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model="rate" <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;show-text<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:colors="['#99A9BF', '#F7BA2A', '#FF9900']"&gt;<br>
                &lt;/el-rate&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Transfer 穿梭框 -->
      <div id="anchor17">
        <h3>十七：Transfer 穿梭框</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>默认使用可搜索穿梭框</h4>
            <div class="grey-block">
              <el-transfer filterable :filter-method="filterMethod" filter-placeholder="请输入城市拼音" v-model="transvalue" :data="transdata">
              </el-transfer>
              <div style="margin-top: 10px;">
                &lt;el-transfer <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filterable<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:filter-method="filterMethod"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;filter-placeholder="请输入城市拼音"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-model="transvalue"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:data="transdata"&gt;<br>
                &lt;/el-transfer&gt;
                <p>（数据查看vue源码）</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Form 表单 -->
      <div id="anchor18">
        <h3>十八：Form 表单</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>行内表单 | 采用small类型input框</h4>
            <div class="grey-block">
              <el-form :inline="true" :model="formInline" size="small" class="demo-form-inline">
                <el-form-item label="审批人">
                  <el-input v-model="formInline.user" placeholder="审批人"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                  <el-select v-model="formInline.region" placeholder="活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary">查询</el-button>
                </el-form-item>
              </el-form>
              <div style="margin-top: 10px;">
                &lt;el-form :inline="true" :model="formInline" size="small" class="demo-form-inline"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-form-item label="审批人"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-input v-model="formInline.user" placeholder="审批人"&gt;&lt;/el-input&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-form-item&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-form-item label="活动区域"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-select v-model="formInline.region" placeholder="活动区域"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option label="区域一" value="shanghai"&gt;&lt;/el-option&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option label="区域二" value="beijing"&gt;&lt;/el-option&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-select&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-form-item&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-form-item&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button type="primary"&gt;查询&lt;/el-button&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-form-item&gt;<br>
                &lt;/el-form&gt;
                <p>
                  formInline: {<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;user: '',<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;region: '' <br>
                  }
                </p>
              </div>
            </div>
          </div>
          <div>
            <h4>表单对齐方式：右对齐</h4>
            <div class="grey-block">
              <div style="width: 300px;">
                <el-form label-position="right" size="small" label-width="80px" :model="formLabelAlign">
                  <el-form-item label="名称">
                    <el-input v-model="formLabelAlign.name"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域">
                    <el-input v-model="formLabelAlign.region"></el-input>
                  </el-form-item>
                  <el-form-item label="活动形式">
                    <el-input v-model="formLabelAlign.type"></el-input>
                  </el-form-item>
                </el-form>
              </div>
              <div style="margin-top: 10px;">
                &lt;el-form label-position="right" size="small" label-width="80px" :model="formLabelAlign"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-form-item label="名称"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-input v-model="formLabelAlign.name"&gt;&lt;/el-input&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-form-item&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-form-item label="活动区域"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-input v-model="formLabelAlign.region"&gt;&lt;/el-input&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-form-item&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-form-item label="活动形式"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-input v-model="formLabelAlign.type"&gt;&lt;/el-input&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-form-item&gt;<br>
                &lt;/el-form&gt;
              </div>
            </div>
          </div>
          <div>
            <h4>表单验证：必填项必须前置<i style="color: red;font-style: normal;margin:10px;">*</i>，提示方式默认采用：可关闭的弹出框警告提示。（这是为了让整个页面看起来整洁、节省页面空间）</h4>
            <div class="grey-block">
              <el-form :inline="true" size="small" :model="formInline2" class="demo-form-inline">
                <el-form-item :rules="[{ required: true}]" label="姓名">
                  <el-input v-model="formInline2.username" placeholder="姓名"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmitTips">查询</el-button>
                </el-form-item>
              </el-form>
              <div style="margin-top: 10px;">
                &lt;el-form :inline="true" size="small" :model="formInline2" class="demo-form-inline"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-form-item <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:rules="[{ required: true}]"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label="姓名"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-input v-model="formInline2.username" placeholder="姓名"&gt;&lt;/el-input&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-form-item&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-form-item&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button type="primary" @click="onSubmitTips"&gt;查询&lt;/el-button&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-form-item&gt;<br>
                &lt;/el-form&gt;
                <p style="background:#ddd;padding: 10px;width: 500px;">
                  this.$message({ <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;message: '警告，姓名为必填项！',<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;type: 'warning'<br>
                  });
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Table 表格 -->
      <div id="anchor19">
        <h3>十九：Table 表格</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>基础表格默认外观：带斑马纹、带边框、固定表头、固定最后一项操作列、某些数据排序、操作居中、size="mini"</h4>
            <div class="grey-block">
              <div style="width: 700px;">
                <el-table :data="tableData" stripe border size="mini" height="300" style="width: 100%">
                  <el-table-column prop="date" label="日期" sortable width="180">
                  </el-table-column>
                  <el-table-column prop="name" label="姓名" width="180">
                  </el-table-column>
                  <el-table-column prop="address" width="300" label="地址">
                  </el-table-column>
                  <el-table-column fixed="right" label="操作" align="center" width="100">
                    <template slot-scope="scope">
                      <el-button type="text" size="small">查看</el-button>
                      <el-button type="text" size="small">编辑</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
              <div style="margin-top: 20px;">
                &lt;el-table <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:data="tableData"<br>
                <i style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;stripe</i><br>
                <i style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;border</i><br>
                <i style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;size="mini"</i><br>
                <i style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;height="200"</i><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style="width: 100%"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-table-column<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prop="date"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label="日期"<br>
                <i style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;sortable</i><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width="180"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-table-column&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-table-column<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prop="name"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label="姓名"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width="180"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-table-column&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-table-column<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prop="address"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width="300"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label="地址"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-table-column&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-table-column<br>
                <i style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;fixed="right"</i><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label="操作"<br>
                <i style="color:red;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;align="center"</i><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width="100"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;template slot-scope="scope"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button type="text" size="small"&gt;查看&lt;/el-button&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button type="text" size="small"&gt;编辑&lt;/el-button&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/template&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-table-column&gt;<br>
                &lt;/el-table&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tree 树形控件 -->
      <div id="anchor20">
        <h3>二十：Tree 树形控件</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>默认用法</h4>
            <div class="grey-block">
              <div style="width: 600px;">
                <el-tree :data="treedata" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
              </div>
              <div style="margin-top: 10px;">
                &lt;el-tree :data="treedata" :props="defaultProps" @node-click="handleNodeClick"&gt;&lt;/el-tree&gt;
              </div>
            </div>
          </div>
          <div>
            <h4>带选择框树形控件</h4>
            <div class="grey-block">
              <div style="width: 600px;">
                <el-tree :data="treedata2" show-checkbox node-key="id" :default-expanded-keys="[2, 3]" :default-checked-keys="[5]" :props="defaultProps2">
                </el-tree>
              </div>
              <div style="margin-top: 10px;">
                &lt;el-tree <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:data="treedata2"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;show-checkbox<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;node-key="id"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:default-expanded-keys="[2, 3]"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:default-checked-keys="[5]"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:props="defaultProps2"&gt;<br>
                &lt;/el-tree&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Pagination 分页 -->
      <div id="anchor21">
        <h3>二十一：Pagination 分页</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>分页默认使用全部功能</h4>
            <div class="grey-block">
              <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage1" :page-sizes="[10, 20, 50, 100]" :page-size="10" layout="total, sizes, prev, pager, next, jumper" :total="400">
              </el-pagination>
              <div style="margin-top: 10px;">
                &lt;el-pagination <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@size-change="handleSizeChange"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;@current-change="handleCurrentChange"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:current-page="currentPage1"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:page-sizes="[100, 200, 300, 400]"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:page-size="100"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;layout="total, sizes, prev, pager, next, jumper"<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:total="400"&gt;<br>
                &lt;/el-pagination&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Badge 标记 -->
      <div id="anchor22">
        <h3>二十二：Badge 标记</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>默认用法</h4>
            <div class="grey-block">
              <el-badge :value="1" type="primary">
                <el-button size="small">评论</el-button>
              </el-badge>
              <div style="margin-top: 10px;">
                &lt;el-badge :value="1" type="primary"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button size="small"&gt;评论&lt;/el-button&gt;<br>
                &lt;/el-badge&gt;
              </div>
            </div>
          </div>
          <div>
            <h4>自定义最大值</h4>
            <div class="grey-block">
              <el-badge :value="200" :max="99" class="item">
                <el-button size="small">评论</el-button>
              </el-badge>
              <div style="margin-top: 10px;">
                &lt;el-badge :value="200" :max="99" class="item"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button size="small"&gt;评论&lt;/el-button&gt; <br>
                &lt;/el-badge&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Loading 加载 -->
      <div id="anchor23">
        <h3>二十三：Loading 加载</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>默认，所有的表格，请求数据时需显示loading，采用半透明白幕</h4>
            <div class="grey-block">
              <div style="width: 600px;">
                <el-table v-loading="loading1" :data="loadtableData" style="width: 100%">
                  <el-table-column prop="date" label="日期" width="180">
                  </el-table-column>
                  <el-table-column prop="name" label="姓名" width="180">
                  </el-table-column>
                  <el-table-column prop="address" label="地址">
                  </el-table-column>
                </el-table>
              </div>
              <div style="margin-top: 10px;">
                <div>
                  &lt;el-table
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;v-loading="loading1" <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:data="loadtableData"<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;style="width: 100%"&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-table-column<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prop="date"<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label="日期"<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width="180"&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-table-column&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-table-column<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prop="name"<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label="姓名"<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width="180"&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-table-column&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-table-column<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;prop="address"<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;label="地址"&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-table-column&gt;<br>
                  &lt;/el-table&gt;
                </div>
              </div>
            </div>
          </div>
          <div>
            <h4>按钮--加载中</h4>
            <div class="grey-block">
              <div>
                <ul>
                  <li>
                    <el-button type="primary" size="small" :loading="true" icon="el-icon-delete"></el-button>
                    <span style="margin-left: 20px;">&lt;el-button type="primary" size="small" :loading="true"&gt;&lt;/el-button&gt;</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Message 提示框 -->
      <div id="anchor24">
        <h3>二十四：Message 提示框</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>默认提示框，主要用在校验时提示、返回状态时提示，采用：可关闭、文字居左、</h4>
            <div class="grey-block">
              <el-button :plain="true" @click="open5" size="small" type="info">消息</el-button>
              <el-button :plain="true" @click="open6" size="small" type="success">成功</el-button>
              <el-button :plain="true" @click="open7" size="small" type="warning">警告</el-button>
              <el-button :plain="true" @click="open8" size="small" type="danger">错误</el-button>
              <div style="margin-top: 10px;">
                this.$message({ <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;showClose: true,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: '这是一条消息提示'<br>
                });<br><br>
                this.$message({<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;showClose: true,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: '恭喜你，这是一条成功消息',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'success'<br>
                });<br><br>
                this.$message({<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;showClose: true,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: '警告哦，这是一条警告消息',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'warning'<br>
                });<br><br>
                this.$message({<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;showClose: true,<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: '错了哦，这是一条错误消息',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'error'<br>
                });<br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- MessageBox 弹框 -->
      <div id="anchor25">
        <h3>二十五：MessageBox 弹框</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>主要使用场景，是确认操作：确认消息，确认后有消息框提醒，内容采用居左布局；</h4>
            <div class="grey-block">
              <el-button type="text" @click="msgboxOpen">点击打开 Message Box</el-button>
              <div style="margin-top: 10px;">
                this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', { <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;confirmButtonText: '确定', <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;cancelButtonText: '取消', <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'warning' <br>
                }).then(() => { <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.$message({ <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'success', <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: '删除成功!' <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}); <br>
                }).catch(() => { <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;this.$message({ <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'info', <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: '已取消删除' <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}); <br>
                }); <br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Notification 通知 -->
      <div id="anchor26">
        <h3>二十六：Notification 通知</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>主要使用场景：显示全局的通知提醒消息，提示框消息显示在右上角、带有 icon、显示关闭icon、可自动关闭</h4>
            <div class="grey-block">
              <el-button plain size="small" type="success" @click="notify1">
                成功
              </el-button>
              <el-button plain size="small" type="warning" @click="notify2">
                警告
              </el-button>
              <el-button plain size="small" type="info" @click="notify3">
                消息
              </el-button>
              <el-button plain size="small" type="danger" @click="notify4">
                错误
              </el-button>
              <div style="margin-top: 10px;">
                this.$notify({<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: '成功',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: '这是一条成功的提示消息',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'success'<br>
                });<br><br>

                this.$notify({<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: '警告',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: '这是一条警告的提示消息',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'warning'<br>
                });<br><br>

                this.$notify.info({<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: '消息',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: '这是一条消息的提示消息'<br>
                });<br><br>

                this.$notify.error({<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title: '错误',<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;message: '这是一条错误的提示消息'<br>
                });<br><br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tabs 标签页 -->
      <div id="anchor27">
        <h3>二十七：Tabs 标签页</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>默认使用简洁版标签页，不使用卡片化</h4>
            <div class="grey-block">
              <div style="width: 600px;">
                <el-tabs v-model="activeName" @tab-click="handleClick">
                  <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                  <el-tab-pane label="配置管理" name="second">配置管理</el-tab-pane>
                  <el-tab-pane label="角色管理" name="third">角色管理</el-tab-pane>
                  <el-tab-pane label="定时任务补偿" name="fourth">定时任务补偿</el-tab-pane>
                </el-tabs>
              </div>
              <div style="margin-top: 30px;">
                &lt;el-tabs v-model="activeName" @tab-click="handleClick"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-tab-pane label="用户管理" name="first"&gt;用户管理&lt;/el-tab-pane&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-tab-pane label="配置管理" name="second"&gt;配置管理&lt;/el-tab-pane&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-tab-pane label="角色管理" name="third"&gt;角色管理&lt;/el-tab-pane&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-tab-pane label="定时任务补偿" name="fourth"&gt;定时任务补偿&lt;/el-tab-pane&gt;<br>
                &lt;/el-tabs&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  Breadcrumb 面包屑 -->
      <div id="anchor28">
        <h3>二十八：Breadcrumb 面包屑</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>面包屑，我们统一采用更潮流的斜线分割，不采用 右三角(>)分割</h4>
            <div class="grey-block">
              <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
                <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                <el-breadcrumb-item>活动详情</el-breadcrumb-item>
              </el-breadcrumb>
              <div style="margin-top: 20px;">
                &lt;el-breadcrumb separator="/"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-breadcrumb-item :to="{ path: '/' }"&gt;首页&lt;/el-breadcrumb-item&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-breadcrumb-item&gt;&lt;a href="/"&gt;活动管理&lt;/a&gt;&lt;/el-breadcrumb-item&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-breadcrumb-item&gt;活动列表&lt;/el-breadcrumb-item&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-breadcrumb-item&gt;活动详情&lt;/el-breadcrumb-item&gt; <br>
                &lt;/el-breadcrumb&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Dropdown 下拉菜单 -->
      <div id="anchor29">
        <h3>二十九：Dropdown 下拉菜单</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>我们默认采用最简洁、简单的下拉菜单样式，默认使用click即显示下拉</h4>
            <div class="grey-block">
              <div style="background:#fff;padding:20px;width: 400px;">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
                  </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>黄金糕</el-dropdown-item>
                    <el-dropdown-item>狮子头</el-dropdown-item>
                    <el-dropdown-item>螺蛳粉</el-dropdown-item>
                    <el-dropdown-item disabled>双皮奶</el-dropdown-item>
                    <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div style="margin-top: 20px;">
                &lt;el-dropdown trigger="click"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span class="el-dropdown-link"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;下拉菜单&lt;i class="el-icon-arrow-down el-icon--right"&gt;&lt;/i&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/span&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-dropdown-menu slot="dropdown"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-dropdown-item&gt;黄金糕&lt;/el-dropdown-item&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-dropdown-item&gt;狮子头&lt;/el-dropdown-item&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-dropdown-item&gt;螺蛳粉&lt;/el-dropdown-item&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-dropdown-item disabled&gt;双皮奶&lt;/el-dropdown-item&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-dropdown-item divided&gt;蚵仔煎&lt;/el-dropdown-item&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-dropdown-menu&gt; <br>
                &lt;/el-dropdown&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Steps 步骤条 -->
      <div id="anchor30">
        <h3>三十：Steps 步骤条</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>含状态步骤条</h4>
            <div class="grey-block">
              <el-steps :space="200" :active="1" finish-status="success">
                <el-step title="已完成"></el-step>
                <el-step title="进行中"></el-step>
                <el-step title="步骤 3"></el-step>
              </el-steps>
              <div style="margin-top: 20px;">
                &lt;el-steps :space="200" :active="1" finish-status="success"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-step title="已完成"&gt;&lt;/el-step&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-step title="进行中"&gt;&lt;/el-step&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-step title="步骤 3"&gt;&lt;/el-step&gt; <br>
                &lt;/el-steps&gt;
              </div>
            </div>
          </div>
          <div>
            <h4>有描述、居中的步骤条</h4>
            <div>
              <el-steps :active="2" align-center>
                <el-step title="步骤1" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤2" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤3" description="这是一段很长很长很长的描述性文字"></el-step>
                <el-step title="步骤4" description="这是一段很长很长很长的描述性文字"></el-step>
              </el-steps>
              <div style="margin-top: 20px;">
                &lt;el-steps :active="2" align-center&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-step title="步骤1" description="这是一段很长很长很长的描述性文字"&gt;&lt;/el-step&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-step title="步骤2" description="这是一段很长很长很长的描述性文字"&gt;&lt;/el-step&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-step title="步骤3" description="这是一段很长很长很长的描述性文字"&gt;&lt;/el-step&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-step title="步骤4" description="这是一段很长很长很长的描述性文字"&gt;&lt;/el-step&gt; <br>
                &lt;/el-steps&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Dialog 对话框 -->
      <div id="anchor31">
        <h3>三十一：Dialog 对话框</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>自定义弹出框内容，应用场景：弹出框中含有填入信息、弹出框显示表格数据（一定要使用这个属性，否则会出现返回上一步无法隐藏遮罩层的bug :modal-append-to-body="false"）</h4>
            <div class="grey-block">
              <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
              <el-dialog :modal-append-to-body="false" :close-on-click-modal="false" title="收货地址" :visible.sync="dialogFormVisible">
                <el-form :model="form" size="small">
                  <el-form-item label="活动名称" :label-width="formLabelWidth">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="活动区域" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button size="small" @click="dialogFormVisible = false">取 消</el-button>
                  <el-button size="small" type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
              <div style="margin-top: 20px;">
                <div>
                  &lt;el-button type="text" @click="dialogFormVisible = true"&gt;打开嵌套表单的 Dialog&lt;/el-button&gt; <br>
                  &lt;el-dialog :modal-append-to-body="false" :close-on-click-modal="false" title="收货地址" :visible.sync="dialogFormVisible"&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-form :model="form" size="small"&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-form-item label="活动名称" :label-width="formLabelWidth"&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-input v-model="form.name"&gt;&lt;/el-input&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-form-item&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-form-item label="活动区域" :label-width="formLabelWidth"&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-select v-model="form.region" placeholder="请选择活动区域"&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option label="区域一" value="shanghai"&gt;&lt;/el-option&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-option label="区域二" value="beijing"&gt;&lt;/el-option&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-select&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-form-item&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-form&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="footer" class="dialog-footer"&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button size="small" @click="dialogFormVisible = false"&gt;取 消&lt;/el-button&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button size="small" type="primary" @click="dialogFormVisible = false"&gt;确 定&lt;/el-button&gt;<br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
                  &lt;/el-dialog&gt;
                </div>
                <p style="margin-top: 20px;">
                  dialogFormVisible: false, <br>
                  form: { <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;name: '', <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;region: '', <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date1: '', <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;date2: '', <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;delivery: false, <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: [], <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;resource: '', <br>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;desc: '' <br>
                  }, <br>
                  formLabelWidth: '120px'
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Tooltip 文字提示 -->
      <div id="anchor32">
        <h3>三十二：Tooltip 文字提示</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>默认使用light主题，上左显示风格</h4>
            <div class="grey-block">
              <el-tooltip class="item" effect="light" content="Top Left 提示文字" placement="top-start">
                <el-button size="small">上左</el-button>
              </el-tooltip>
              <div style="margin-top: 10px;">
                &lt;el-tooltip class="item" effect="light" content="Top Left 提示文字" placement="top-start"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button size="small"&gt;上左&lt;/el-button&gt; <br>
                &lt;/el-tooltip&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Popover 弹出框 -->
      <div id="anchor33">
        <h3>三十三：Popover 弹出框</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>Popover 的属性与 Tooltip 很类似，但Popover更偏向于提示自定义、繁多复杂的内容，而非单纯的文字提示，默认，内容相对少时我们使用左上的风格、hover显示；</h4>
            <div class="grey-block">
              <el-popover placement="top-start" title="标题" width="200" trigger="hover" content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
                <el-button size="small" slot="reference">hover 激活</el-button>
              </el-popover>
              <div style="margin-top: 10px;">
                &lt;el-popover <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placement="top-start" <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;title="标题" <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width="200" <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trigger="hover" <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button size="small" slot="reference"&gt;hover 激活&lt;/el-button&gt; <br>
                &lt;/el-popover&gt;
              </div>
            </div>
          </div>
          <div>
            <h4>内容多时，使用右侧风格、点击显示</h4>
            <div class="grey-block">
              <el-popover placement="right" width="400" trigger="click">
                <el-table :data="gridData">
                  <el-table-column width="150" property="date" label="日期"></el-table-column>
                  <el-table-column width="100" property="name" label="姓名"></el-table-column>
                  <el-table-column width="300" property="address" label="地址"></el-table-column>
                </el-table>
                <el-button size="small" slot="reference">click 激活</el-button>
              </el-popover>
              <div style="margin-top: 10px;">
                &lt;el-popover <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;placement="right" <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;width="400" <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;trigger="click"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-table :data="gridData"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-table-column width="150" property="date" label="日期"&gt;&lt;/el-table-column&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-table-column width="100" property="name" label="姓名"&gt;&lt;/el-table-column&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-table-column width="300" property="address" label="地址"&gt;&lt;/el-table-column&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-table&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-button size="small" slot="reference"&gt;click 激活&lt;/el-button&gt; <br>
                &lt;/el-popover&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Card 卡片 -->
      <div id="anchor34">
        <h3>三十四：Card 卡片</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>默认用法：hover时显示阴影</h4>
            <div class="grey-block">
              <div style="width: 600px;">
                <el-card class="box-card" shadow="hover">
                  <div slot="header" class="clearfix">
                    <span>卡片名称</span>
                  </div>
                  <div v-for="o in 4" :key="o" class="card-text item">
                    {{'列表内容 ' + o }}
                  </div>
                </el-card>
              </div>
              <div style="margin-top: 10px;">
                &lt;el-card class="box-card" shadow="hover"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div slot="header" class="clearfix"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;span&gt;卡片名称&lt;/span&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div v-for="o in 4" :key="o" class="card-text item"&gt;<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{\{'列表内容 ' + o }\}<br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/div&gt;<br>
                &lt;/el-card&gt;<br>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Carousel 轮播图 -->
      <div id="anchor35">
        <h3>三十五：Carousel 轮播图</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>默认用法：指示器的显示位置设置在容器内部、hover指示器时切换图片、hover时才显示切换箭头</h4>
            <div class="grey-block">
              <div style="width: 800px;">
                <el-carousel :interval="5000">
                  <el-carousel-item v-for="item in 4" :key="item">
                    <h6>{{ item }}</h6>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div style="margin-top: 20px;">
                &lt;el-carousel :interval="5000"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-carousel-item v-for="item in 4" :key="item"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h6&gt;{\{ item }\}&lt;/h6&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-carousel-item&gt; <br>
                &lt;/el-carousel&gt;
              </div>
            </div>
          </div>
          <div>
            <h4>卡片化轮播图</h4>
            <div class="grey-block">
              <div style="width: 800px;">
                <el-carousel :interval="4000" type="card" height="200px">
                  <el-carousel-item v-for="item in 6" :key="item">
                    <h6>{{ item }}</h6>
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div style="margin-top: 20px;">
                &lt;el-carousel :interval="4000" type="card" height="200px"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-carousel-item v-for="item in 6" :key="item"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;h6&gt;{\{ item }\}&lt;/h6&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-carousel-item&gt; <br>
                &lt;/el-carousel&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Collapse 折叠面板 -->
      <div id="anchor36">
        <h3>三十六：Collapse 折叠面板</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>默认使用可同时展开多个面板风格（方便用户对比查看），不使用手风琴风格</h4>
            <div class="grey-block">
              <div style="text-indent: 10px; width: 800px;">
                <el-collapse v-model="activeNames" @change="handleChange">
                  <el-collapse-item title="一致性 Consistency" name="1">
                    <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                    <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                  </el-collapse-item>
                  <el-collapse-item title="反馈 Feedback" name="2">
                    <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                    <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                  </el-collapse-item>
                  <el-collapse-item title="效率 Efficiency" name="3">
                    <div>简化流程：设计简洁直观的操作流程；</div>
                    <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                    <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                  </el-collapse-item>
                  <el-collapse-item title="可控 Controllability" name="4">
                    <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                    <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                  </el-collapse-item>
                </el-collapse>
              </div>
              <div style="margin-top: 20px;">
                &lt;el-collapse v-model="activeNames" @change="handleChange"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-collapse-item title="一致性 Consistency" name="1"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；&lt;/div&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。&lt;/div&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-collapse-item&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-collapse-item title="反馈 Feedback" name="2"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；&lt;/div&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。&lt;/div&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-collapse-item&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-collapse-item title="效率 Efficiency" name="3"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;简化流程：设计简洁直观的操作流程；&lt;/div&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；&lt;/div&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。&lt;/div&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-collapse-item&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;el-collapse-item title="可控 Controllability" name="4"&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；&lt;/div&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;div&gt;结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。&lt;/div&gt; <br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;/el-collapse-item&gt; <br>
                &lt;/el-collapse&gt;
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- editor 富文本编辑器 -->
      <div id="anchor37">
        <h3>三十七：editor 富文本编辑器</h3>
        <div style="padding-left: 20px;">
          <div>
            <h4>我们使用wangEditor作为我们vue框架的富文本编辑器</h4>
            <div class="grey-block" style="width: 80%;">
              <v-editor style="background:#fff;"></v-editor>
            </div>
          </div>
        </div>
      </div>

    </div>
    <v-gotop></v-gotop>
  </div>
</template>

<script>
import Gotop from "@/views/components/Go-Top.vue"
import Editor from "@/views/components/Editor.vue"


export default {
  name: 'format',
  data() {
    const generateData2 = _ => {
      const data = [];
      const cities3 = ['上海', '北京', '广州', '深圳', '南京', '西安', '成都'];
      const pinyin = ['shanghai', 'beijing', 'guangzhou', 'shenzhen', 'nanjing', 'xian', 'chengdu'];
      cities3.forEach((city, index) => {
        data.push({
          label: city,
          key: index,
          pinyin: pinyin[index]
        });
      });
      return data;
    };
    return {
      curid: 1,//当前页面滚动到达的位置对应的id下标值；
      isclickscroll: false, //避免点击目录时，与滚动事件冲突
      menu: [
        {
          title: '1. UI布局颜色',
          url: '#anchor1'
        },
        {
          title: '2. 统一字体',
          url: '#anchor2'
        },
        {
          title: '3. Icon 图标',
          url: '#anchor3'
        },
        {
          title: '4. Button 按钮',
          url: '#anchor4'
        },
        {
          title: '5. 单选框',
          url: '#anchor5'
        },
        {
          title: '6. 多选框',
          url: '#anchor6'
        },
        {
          title: '7. Input 输入框',
          url: '#anchor7'
        },
        {
          title: '8. InputNumber 计数器',
          url: '#anchor8'
        },
        {
          title: '9. Select 选择器',
          url: '#anchor9'
        },
        {
          title: '10. Cascader 级联选择器',
          url: '#anchor10'
        },
        {
          title: '11. Switch 开关',
          url: '#anchor11'
        },
        {
          title: '12. Slider 滑块',
          url: '#anchor12'
        },
        {
          title: '13. TimePicker 时间选择器',
          url: '#anchor13'
        },
        {
          title: '14. DatePicker 日期选择器',
          url: '#anchor14'
        },
        {
          title: '15. Upload 上传',
          url: '#anchor15'
        },
        {
          title: '16. Rate 评分',
          url: '#anchor16'
        },
        {
          title: '17. Transfer 穿梭框',
          url: '#anchor17'
        },
        {
          title: '18. Form 表单',
          url: '#anchor18'
        },
        {
          title: '19. Table 表格',
          url: '#anchor19'
        },
        {
          title: '20. Tree 树形控件',
          url: '#anchor20'
        },
        {
          title: '21. Pagination 分页',
          url: '#anchor21'
        },
        {
          title: '22. Badge 标记',
          url: '#anchor22'
        },
        {
          title: '23. Loading 加载',
          url: '#anchor23'
        },
        {
          title: '24. Message 提示框',
          url: '#anchor24'
        },
        {
          title: '25. MessageBox 弹框',
          url: '#anchor25'
        },
        {
          title: '26. Notification 通知',
          url: '#anchor26'
        },
        {
          title: '27. Tabs 标签页',
          url: '#anchor27'
        },
        {
          title: '28. Breadcrumb 面包屑',
          url: '#anchor28'
        },
        {
          title: '29. Dropdown 下拉菜单',
          url: '#anchor29'
        },
        {
          title: '30. Steps 步骤条',
          url: '#anchor30'
        },
        {
          title: '31. Dialog 对话框',
          url: '#anchor31'
        },
        {
          title: '32. Tooltip 文字提示',
          url: '#anchor32'
        },
        {
          title: '33. Popover 弹出框',
          url: '#anchor33'
        },
        {
          title: '34. Card 卡片',
          url: '#anchor34'
        },
        {
          title: '35. Carousel 轮播图',
          url: '#anchor35'
        },
        {
          title: '36. Collapse 折叠面板',
          url: '#anchor36'
        },
        {
          title: '37. editor 富文本编辑器',
          url: '#anchor37'
        },
      ],
      allmenuheight: [],//目录中所有菜单对应div的高度值；
      radio: 3,
      radio2: '北京',
      checkList: ['选中且禁用', '复选框 A'],
      checkboxGroup1: ['上海'],
      cities: ['上海', '北京', '广州', '深圳'],
      input: '',
      input2: '',
      input3: '',
      input4: '',
      input5: '',
      select: '',
      num1: 1,
      num2: 1,
      num3: 1,
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      select1: '',
      select2: '',
      select3: '',
      select4: '',
      select5: '',
      select6: '',
      cities2: [{
        value: 'Beijing',
        label: '北京'
      }, {
        value: 'Shanghai',
        label: '上海'
      }, {
        value: 'Nanjing',
        label: '南京'
      }, {
        value: 'Chengdu',
        label: '成都'
      }, {
        value: 'Shenzhen',
        label: '深圳'
      }, {
        value: 'Guangzhou',
        label: '广州'
      }],
      options3: [
        {
          label: '热门城市',
          options: [{
            value: 'Shanghai',
            label: '上海'
          }, {
            value: 'Beijing',
            label: '北京'
          }]
        },
        {
          label: '城市名',
          options: [{
            value: 'Chengdu',
            label: '成都'
          }, {
            value: 'Shenzhen',
            label: '深圳'
          }, {
            value: 'Guangzhou',
            label: '广州'
          }, {
            value: 'Dalian',
            label: '大连'
          }]
        }
      ],
      options4: [{
        value: 'zhinan',
        label: '指南',
        children: [{
          value: 'shejiyuanze',
          label: '设计原则',
          children: [{
            value: 'yizhi',
            label: '一致'
          }, {
            value: 'fankui',
            label: '反馈'
          }, {
            value: 'xiaolv',
            label: '效率'
          }, {
            value: 'kekong',
            label: '可控'
          }]
        }, {
          value: 'daohang',
          label: '导航',
          children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
          }, {
            value: 'dingbudaohang',
            label: '顶部导航'
          }]
        }]
      }],
      selectedOptions: [],
      switch1: true,
      slider1: 0,
      slider2: 0,
      time1: new Date(2016, 9, 10, 18, 40),
      time2: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      date1: '',
      date2: '',
      fileList: [{ name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }, { name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100' }],
      rate: null,
      transdata: generateData2(),
      transvalue: [],
      formInline: {
        user: '',
        region: ''
      },
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      },
      formInline2: {
        username: ''
      },
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
      ],
      treedata: [{
        label: '一级 1',
        children: [{
          label: '二级 1-1',
          children: [{
            label: '三级 1-1-1'
          }]
        }]
      }, {
        label: '一级 2',
        children: [{
          label: '二级 2-1',
          children: [{
            label: '三级 2-1-1'
          }]
        }, {
          label: '二级 2-2',
          children: [{
            label: '三级 2-2-1'
          }]
        }]
      }, {
        label: '一级 3',
        children: [{
          label: '二级 3-1',
          children: [{
            label: '三级 3-1-1'
          }]
        }, {
          label: '二级 3-2',
          children: [{
            label: '三级 3-2-1'
          }]
        }]
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      treedata2: [{
        id: 1,
        label: '一级 1',
        children: [{
          id: 4,
          label: '二级 1-1',
          children: [{
            id: 9,
            label: '三级 1-1-1'
          }, {
            id: 10,
            label: '三级 1-1-2'
          }]
        }]
      }, {
        id: 2,
        label: '一级 2',
        children: [{
          id: 5,
          label: '二级 2-1'
        }, {
          id: 6,
          label: '二级 2-2'
        }]
      }, {
        id: 3,
        label: '一级 3',
        children: [{
          id: 7,
          label: '二级 3-1'
        }, {
          id: 8,
          label: '二级 3-2'
        }]
      }],
      defaultProps2: {
        children: 'children',
        label: 'label'
      },
      currentPage1: 1,
      loadtableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      loading1: true,
      activeName: 'second',
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      activeNames: ['1'],
    }
  },
  props: [],
  components: {
    "v-gotop": Gotop,
    "v-editor": Editor,
  },
  methods: {
    goAnchor(selector) {
      //定位到锚点
      this.curid = selector.split('anchor')[1];
      var anchor = this.$el.querySelector(selector);
      document.body.scrollTop = anchor.offsetTop; //chrome
      document.documentElement.scrollTop = anchor.offsetTop;//firefox

      this.isclickscroll = true;
    },
    handleScroll() {
      //滚动页面，选中相应的菜单
      if (!this.isclickscroll) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        let allmenuheight = this.allmenuheight;
        for (var i = 0; i < allmenuheight.length; i++) {
          if (i == 0 && scrollTop < allmenuheight[i].height) {
            this.curid = i + 1;
            break;
          } else if (i != allmenuheight.length - 1 && scrollTop >= allmenuheight[i].height && scrollTop < allmenuheight[i + 1].height) {
            this.curid = i + 1;
            break;
          } else if (i == allmenuheight.length - 1) {
            this.curid = i + 1;
          }
        }
      }
      this.isclickscroll = false;
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList);
    },
    handlePreview(file) {
      // console.log(file);
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`);
    },
    filterMethod(query, item) {
      return item.pinyin.indexOf(query) > -1;
    },
    onSubmitTips() {
      this.$message({
        showClose: true,
        message: '警告，姓名为必填项！',
        type: 'warning'
      });
    },
    handleNodeClick(data) {
      console.log(data);
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    open5() {
      this.$message({
        showClose: true,
        message: '这是一条消息提示'
      });
    },
    open6() {
      this.$message({
        showClose: true,
        message: '恭喜你，这是一条成功消息',
        type: 'success'
      });
    },
    open7() {
      this.$message({
        showClose: true,
        message: '警告哦，这是一条警告消息',
        type: 'warning'
      });
    },
    open8() {
      this.$message({
        showClose: true,
        message: '错了哦，这是一条错误消息',
        type: 'error'
      });
    },
    msgboxOpen() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    notify1() {
      this.$notify({
        title: '成功',
        message: '这是一条成功的提示消息',
        type: 'success'
      });
    },
    notify2() {
      this.$notify({
        title: '警告',
        message: '这是一条警告的提示消息',
        type: 'warning'
      });
    },
    notify3() {
      this.$notify.info({
        title: '消息',
        message: '这是一条消息的提示消息'
      });
    },
    notify4() {
      this.$notify.error({
        title: '错误',
        message: '这是一条错误的提示消息'
      });
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleChange(val) {
      console.log(val);
    },
  },
  computed: {
    //computed比较适合对多个变量或者对象进行处理后返回一个结果值，也就是数多个变量中的某一个值发生了变化则我们监控的这个值也就会发生变化
    //computed用来监控自己定义的变量，该变量不在data里面声明(但和data定义的变量相关联，直接在computed里面定义

  },
  beforeCreate() {
    //在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用。

  },
  created() {
    //数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。

  },
  beforeMount() {
    //相关的 render 函数（模板）首次被调用

  },
  mounted() {
    //el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
    let menu = this.menu;
    let h = '';
    for (let i = 0; i < menu.length; i++) {
      h = this.$el.querySelector(menu[i].url).offsetTop;
      this.allmenuheight.push({
        index: i,
        height: h
      })
    }

    window.addEventListener('scroll', this.handleScroll);

  },
  beforeUpdate() {
    //数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。

  },
  updated() {
    //由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。 
    //当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
    //然而在大多数情况下，你应该避免在此期间更改状态，因为这可能会导致更新无限循环。 
    //该钩子在服务器端渲染期间不被调用。

  },
  beforeDestroy() {
    //实例销毁之前调用。在这一步，实例仍然完全可用。

  },
  destroyed() {
    //调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。 该钩子在服务器端渲染期间不被调用。

  },
  watch: {
    // watch主要用于监控vue实例的变化，它监控的变量当然必须在data里面声明才可以，它可以监控一个变量，也可以是一个对象，且只能监控整个对象或单个变量;
    curid(cur, old) {
      let h = this.$el.querySelector('#menubox').scrollTop;
      if (cur > 6 && cur > old) {
        this.$el.querySelector('#menubox').scrollTop = h + (cur - old) * 30;
      } else if (cur < this.menu.length - 5 && cur < old) {
        h = (h - (old - cur) * 30) <= 0 ? 0 : (h - (old - cur) * 30);
        this.$el.querySelector('#menubox').scrollTop = h;
      }
    }
  }
}
</script>
<style scoped lang="scss">
h2 {
  margin-bottom: 20px;
  font-size: 20px;
}
h3 {
  margin-top: 60px;
  border-bottom: solid 1px #409eff;
  display: inline-block;
  font-size: 18px;
  color: #409eff;
}
h4 {
  margin-top: 30px;
  margin-bottom: 10px;
  font-size: 16px;
}
a {
  color: #303133;
}

//主要样式
.format-box {
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB,
    Microsoft YaHei, SimSun, sans-serif;
  font-weight: 400;
  padding: 20px;
  position: relative;

  // doc-menu
  .doc-menu {
    position: fixed;
    top: 20px;
    right: 20px;
    box-shadow: $shadowColor1;
    padding: 10px 20px 10px 10px;
    border-radius: 4px;
    overflow: hidden;
    background: #fff;
    z-index: 1000;
    h4 {
      height: 30px;
      line-height: 30px;
      margin: 0;
      border-bottom: solid 1px #e4e7ed;
    }
    .menu-count {
      position: absolute;
      top: 10px;
      right: 20px;
      font-weight: normal;
      font-size: 14px;
      color: #909399;
    }
    > div {
      margin-top: 10px;
      height: 300px;
      overflow: auto;
      > ul {
        display: block;
        > li {
          display: block;
          padding-right: 20px;
          a {
            color: #606266;
            display: block;
            height: 30px;
            line-height: 30px;
            padding-left: 10px;
            padding-right: 10px;
            border-radius: 2px;
            &:hover {
              color: #303133;
              background: #eee;
            }
          }
          &.active {
            a {
              color: #303133;
              background: #eee;
            }
          }
        }
      }
    }
  }

  //doc-word
  .doc-word {
    .grey-block {
      background: #f5f5f5;
      border-radius: 4px;
      padding: 20px;
    }
    .demo-color-box {
      border-radius: 4px;
      padding: 20px;
      margin: 5px 0;
      height: 74px;
      box-sizing: border-box;
      color: #fff;
      font-size: 14px;
    }
    .text-bg-box {
      padding: 20px 60px;
      height: 74px;
      box-sizing: border-box;
      font-size: 14px;
      color: #fff;
    }
    .border-box {
      .text-bg-box {
        color: #303133;
      }
    }
    .bg-blue {
      background-color: #409eff;
    }
    .font-style {
      td {
        border-bottom: 1px solid #d8d8d8;
        padding: 15px 30px;
      }
    }
  }
}

//轮播图样式
.el-carousel__item h6 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
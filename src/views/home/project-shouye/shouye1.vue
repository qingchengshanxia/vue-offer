<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-16 15:10:22
 -->
<template>
  <!-- 首页1 -->
  <div class="shouye1-box">
    <div class="search-box">
      <div>
        <span>
          单号：
          <el-input
            clearable
            placeholder="请输入"
            size="small"
            style="width: 160px;"
            v-model="val1"
          >
          </el-input>
        </span>
        <span style="margin-left: 20px;margin-right: 20px;">
          期限：
          <el-date-picker
            v-model="val2"
            clearable
            size="small"
            value-format="yyyy-MM-dd"
            format="yyyy-MM-dd"
            style="width: 160px;"
            type="date"
            :picker-options="pickerOptions"
            placeholder="选择日期"
          >
          </el-date-picker>
        </span>
        <el-button type="primary" plain size="small">查询</el-button>
        <el-button type="primary" plain size="small">重置</el-button>
      </div>
    </div>
    <div class="table">
      <el-table
        ref="table"
        v-loading="loading"
        :data="tableData"
        stripe
        border
        size="mini"
        highlight-current-row
        :height="getTableHeight"
        tooltip-effect="light"
        @row-click="clickRow"
        style="width: 100%"
      >
        <el-table-column
          prop="name"
          :show-overflow-tooltip="true"
          width="120"
          align="left"
          label="姓名"
          fixed
        >
        </el-table-column>
        <el-table-column
          prop="age"
          :show-overflow-tooltip="true"
          width="120"
          align="left"
          label="年龄"
        >
        </el-table-column>
        <el-table-column
          prop="sex"
          :show-overflow-tooltip="true"
          align="left"
          label="性别"
        >
        </el-table-column>
        <el-table-column prop="high" align="left" label="身高">
        </el-table-column>
        <el-table-column prop="education" align="left" label="学历">
        </el-table-column>
        <el-table-column prop="career" width="职业" align="left" label="到达港">
        </el-table-column>
        <el-table-column
          prop="salary"
          :show-overflow-tooltip="true"
          width="120"
          align="left"
          label="月薪"
        >
        </el-table-column>
        <el-table-column
          prop="hobby"
          :show-overflow-tooltip="true"
          width="120"
          align="left"
          label="爱好"
        >
        </el-table-column>
        <el-table-column
          prop="link"
          :show-overflow-tooltip="true"
          width="120"
          align="left"
          label="联系方式"
        >
        </el-table-column>
        <el-table-column
          prop="site"
          :show-overflow-tooltip="true"
          align="left"
          label="籍贯"
        >
        </el-table-column>
        <el-table-column
          prop="addr"
          width="120"
          :show-overflow-tooltip="true"
          align="left"
          label="居住地"
        >
        </el-table-column>
        <el-table-column
          prop="description"
          :show-overflow-tooltip="true"
          align="left"
          width="220"
          label="自我描述"
        >
        </el-table-column>
        <el-table-column
          prop="partner"
          :show-overflow-tooltip="true"
          align="center"
          label="是否有伴侣"
          width="120"
          fixed="right"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.partner == 1" style="color:#67c23a;">有</span>
            <span v-if="scope.row.partner == 2" style="color: red;">无</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="90">
          <template slot-scope="scope">
            <el-button type="text" size="small">详情</el-button>
            <el-dropdown size="small">
              <span class="el-dropdown-link">
                <el-button type="text" size="small">更多</el-button>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>按钮一</el-dropdown-item>
                <el-dropdown-item>按钮二</el-dropdown-item>
                <el-dropdown-item>按钮三</el-dropdown-item>
                <el-dropdown-item>按钮四</el-dropdown-item>
                <el-dropdown-item>按钮五</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <el-pagination
        @size-change="pageSizeChange"
        @current-change="currentPageChange"
        :current-page="curPage"
        :page-sizes="[10, 20, 30, 50, 100]"
        :page-size="pageNum"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalPage"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "shouye1",
  data() {
    return {
      totalPage: 0,
      curPage: 1, //当前第几页
      pageNum: 20, //当前第几页
      loading: false,
      pickerOptions: {
        //日期选择不能小于今天
        disabledDate(time) {
          return time.getTime() < Date.now() - 8.64e7; //如果没有后面的-8.64e6就是不可以选择今天的
        }
      },
      val1: "",
      val2: "",
      tableData: [
        {
          name: "张三丰",
          sex: "男",
          age: "140",
          addr: "武当山",
          link: "15215201314",
          site: "未知",
          description:
            "为人正气凛然，宽和从容，颇有仙风道骨之姿，其是当世无出其右的武学奇才。百岁之时自创太极拳、太极剑，将武当派发扬光大，威名远扬武林豪杰黑白两道无不拜服。",
          hobby: "修道练功",
          partner: 2,
          salary: "1200000",
          career: "修道",
          education: "文状元",
          high: "175"
        }
      ]
    };
  },
  props: [],
  components: {},
  methods: {
    pageSizeChange(size) {
      //分页多少条 变化
      this.pageNum = size;
      this.dataList();
    },
    currentPageChange(num) {
      //分页第几页 变化
      this.curPage = num;
      this.dataList();
    },
    clickRow(row, event, column) {
      //表格点击行
    },
    dataList() {
      //获取数据列表
      this.$http({
        url: this.$api.offer.queryDbFiled,
        data: {},
        success: function(res) {
          
        }.bind(this)
      });
    }
  },
  computed: {
    getTableHeight() {
      return this.$store.state.globalVarFunction.tableHeight;
    }
  },
  beforeCreate() {},
  created() {},
  beforemount() {},
  mounted() {
    this.dataList();
  },
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  watch: {}
};
</script>
<style scoped lang="scss">
.shouye1-box {
  padding: 10px 10px 5px;
  .search-box {
    position: relative;
    .btn-right {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
  .table {
    padding-top: 10px;
  }
  .pagination {
    text-align: right;
  }
}
</style>
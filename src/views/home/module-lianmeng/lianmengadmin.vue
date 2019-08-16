<!--
 * @Description: 
 * @Author: lhl
 * @Date: 2019-08-14 16:37:55
 * @LastEditors: lhl
 * @LastEditTime: 2019-08-16 18:59:09
 -->
<template>
  <!-- 联盟管理 -->
  <div class="lianmengadmin-box">
    <div class="search-box">
      <div>
        <span>
          联盟单号：
          <el-input
            clearable
            placeholder="请输入"
            size="small"
            style="width: 160px;"
            v-model="val1"
          >
          </el-input>
        </span>
        <el-button type="primary" plain size="small" style="margin-left:20px;">查询</el-button>
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
        <el-table-column
          prop="partner"
          :show-overflow-tooltip="true"
          align="center"
          label="是否有伴侣"
          fixed="right"
        >
          <template slot-scope="scope">
            <span v-if="scope.row.partner == 1" style="color:#67c23a;">有</span>
            <span v-if="scope.row.partner == 2" style="color: red;">无</span>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" align="center" width="120">
          <template slot-scope="scope">
            <el-button type="text" size="small" style="margin-right:10px;"
              >详情</el-button
            >
            <el-dropdown size="small">
              <span class="el-dropdown-link">
                <el-button type="text" size="small">更多</el-button>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>按钮一</el-dropdown-item>
                <el-dropdown-item>按钮二</el-dropdown-item>
                <el-dropdown-item>按钮三</el-dropdown-item>
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
  name: "lianmengadmin",
  data() {
    return {
      totalPage: 0,
      curPage: 1, //当前第几页
      pageNum: 20, //一页多少条
      loading: false,
      val1: "",
      val2: "",
      tableData: [
        {
          name: "张三丰",
          age: "140",
          partner: 2,
          high: "175",
          sex: "男",
          education: "文状元",
          age: "140"
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
    }
  },
  computed: {
    getTableHeight() {
      return this.$store.state.globalVarFunction.tableHeight;
    }
  },
  beforeCreate() {},
  created() {},
  beforeMount() {},
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
.lianmengadmin-box {
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

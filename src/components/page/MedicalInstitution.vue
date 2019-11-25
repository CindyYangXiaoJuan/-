<template>
	<div>
		<div class="crumbs">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item>
					<i class="el-icon-lx-cascades"></i> 基础表格
				</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="container">
			<div class="handle-box">
				<!--<el-button type="primary" icon="el-icon-delete" class="handle-del mr10" @click="delAllSelection">批量删除</el-button>-->
				<el-input v-model="query.name" placeholder="请输入医疗机构名称" class="handle-input mr10"></el-input>
				<el-select v-model="sheng" @change="choseProvince" placeholder="请选择省" class="mr10">
					<el-option v-for="item in province" :key="item.id" :label="item.value" :value="item.id">
					</el-option>
				</el-select>
				<el-select v-model="shi" @change="choseCity" placeholder="请选择市" class="mr10">
					<el-option v-for="item in shi1" :key="item.id" :label="item.value" :value="item.id">
					</el-option>
				</el-select>
				<el-select v-model="qu" @change="choseBlock" placeholder="请选择区" class="mr10">
					<el-option v-for="item in qu1" :key="item.id" :label="item.value" :value="item.id">
					</el-option>
				</el-select>
				<el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
			</div>
			<el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header" @selection-change="handleSelectionChange">
				<el-table-column type="selection" width="55" align="center"></el-table-column>
				<el-table-column prop="id" label="ID" width="55" align="center"></el-table-column>
				<el-table-column prop="name" label="用户名"></el-table-column>
				<el-table-column label="账户余额">
					<template slot-scope="scope">￥{{scope.row.money}}</template>
				</el-table-column>
				<el-table-column label="头像(查看大图)" align="center">
					<template slot-scope="scope">
						<el-image class="table-td-thumb" :src="scope.row.thumb" :preview-src-list="[scope.row.thumb]"></el-image>
					</template>
				</el-table-column>
				<el-table-column prop="address" label="地址"></el-table-column>
				<el-table-column label="状态" align="center">
					<template slot-scope="scope">
						<el-tag :type="scope.row.state==='成功'?'success':(scope.row.state==='失败'?'danger':'')">{{scope.row.state}}</el-tag>
					</template>
				</el-table-column>

				<el-table-column prop="date" label="注册时间"></el-table-column>
				<el-table-column label="操作" width="180" align="center">
					<template slot-scope="scope">
						<el-button type="text" icon="el-icon-edit" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
						<el-button type="text" icon="el-icon-delete" class="red" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
					</template>
				</el-table-column>
			</el-table>
			<div class="pagination">
				<el-pagination background layout="total, prev, pager, next" :current-page="query.pageIndex" :page-size="query.pageSize" :total="pageTotal" @current-change="handlePageChange"></el-pagination>
			</div>
		</div>

		<!-- 编辑弹出框 -->
		<el-dialog title="编辑" :visible.sync="editVisible" width="30%">
			<el-form ref="form" :model="form" label-width="70px">
				<el-form-item label="用户名">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="form.address"></el-input>
				</el-form-item>
			</el-form>
			<span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
		</el-dialog>
	</div>
</template>

<script>
	import { fetchData } from '../../api/index';
	const cityJson = require('../../utils/cityData.json');

	export default {
		name: 'basetable',
		data() {
			return {
				query: {
					address: '北京市海淀区永丰',
					name: '',
					pageIndex: 1,
					pageSize: 10
				},
				tableData: [],
				multipleSelection: [],
				delList: [],
				editVisible: false,
				pageTotal: 0,
				form: {},
				idx: -1,
				id: -1,
				province: '',
				sheng: '',
				shi: '',
				shi1: [],
				qu: '',
				qu1: [],
				city: '',
				block: '',
			};
		},
		created() {
			//			this.getData();
			this.getCityData();
		},
		methods: {
			// 加载china地点数据，三级
			getCityData: function() {
				var that = this;
				var data = cityJson;
				that.province = [];
				that.city = [];
				that.block = [];
				// 省市区数据分类
				for(var item in data) {
					if(item.match(/0000$/)) { //省
						that.province.push({
							id: item,
							value: data[item],
							children: []
						})
					} else if(item.match(/00$/)) { //市
						that.city.push({
							id: item,
							value: data[item],
							children: []
						})
					} else { //区
						that.block.push({
							id: item,
							value: data[item]
						})
					}
				}
				// 分类市级
				for(var index in that.province) {
					for(var index1 in that.city) {
						if(that.province[index].id.slice(0, 2) === that.city[index1].id.slice(0, 2)) {
							that.province[index].children.push(that.city[index1])
						}
					}
				}
				// 分类区级
				for(var item1 in that.city) {
					for(var item2 in that.block) {
						if(that.block[item2].id.slice(0, 4) === that.city[item1].id.slice(0, 4)) {
							that.city[item1].children.push(that.block[item2])
						}
					}
				}
			},
			// 选省
			choseProvince: function(e) {
				for(var index2 in this.province) {
					if(e === this.province[index2].id) {
//						console.log(this.province[index2].id) //你选择的省级编码
//						console.log(this.province[index2].value) //省级编码 对应的汉字 
						this.shi1 = this.province[index2].children
						this.shi = this.province[index2].children[0].value
						this.qu1 = this.province[index2].children[0].children
						this.qu = this.province[index2].children[0].children[0].value
						this.E = this.qu1[0].id
					}
				}
			},
			// 选市
			choseCity: function(e) {
				for(var index3 in this.city) {
					if(e === this.city[index3].id) {
						this.qu1 = this.city[index3].children
						this.qu = this.city[index3].children[0].value
						this.E = this.qu1[0].id
						// console.log(this.E)
					}
				}
			},
			// 选区
			choseBlock: function(e) {
				this.E = e;
				// console.log(this.E)
			},
			// 获取 easy-mock 的模拟数据
			getData() {
				fetchData(this.query).then(res => {
					this.tableData = res.list;
					this.pageTotal = res.pageTotal || 50;
				});
			},
			// 触发搜索按钮
			handleSearch() {
				this.$set(this.query, 'pageIndex', 1);
				this.getData();
			},
			// 删除操作
			handleDelete(index, row) {
				// 二次确认删除
				this.$confirm('确定要删除吗？', '提示', {
						type: 'warning'
					})
					.then(() => {
						this.$message.success('删除成功');
						this.tableData.splice(index, 1);
					})
					.catch(() => {});
			},
			// 多选操作
			handleSelectionChange(val) {
				this.multipleSelection = val;
			},
			delAllSelection() {
				const length = this.multipleSelection.length;
				let str = '';
				this.delList = this.delList.concat(this.multipleSelection);
				for(let i = 0; i < length; i++) {
					str += this.multipleSelection[i].name + ' ';
				}
				this.$message.error(`删除了${str}`);
				this.multipleSelection = [];
			},
			// 编辑操作
			handleEdit(index, row) {
				this.idx = index;
				this.form = row;
				this.editVisible = true;
			},
			// 保存编辑
			saveEdit() {
				this.editVisible = false;
				this.$message.success(`修改第 ${this.idx + 1} 行成功`);
				this.$set(this.tableData, this.idx, this.form);
			},
			// 分页导航
			handlePageChange(val) {
				this.$set(this.query, 'pageIndex', val);
				this.getData();
			}
		}
	};
</script>

<style scoped>
	.handle-box {
		margin-bottom: 20px;
	}
	
	.handle-select {
		width: 120px;
	}
	
	.handle-input {
		width: 300px;
		display: inline-block;
	}
	
	.table {
		width: 100%;
		font-size: 14px;
	}
	
	.red {
		color: #ff0000;
	}
	
	.mr10 {
		margin-right: 10px;
	}
	
	.table-td-thumb {
		display: block;
		margin: auto;
		width: 40px;
		height: 40px;
	}
</style>
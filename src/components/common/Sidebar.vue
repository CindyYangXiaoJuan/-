<template>
	<div class="sidebar">
		<el-menu v-if="isRouter" class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened  >
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-submenu :index="item.index" :key="item.index">
						<template slot="title">
							<i :class="item.icon"></i>
							<span slot="title" @click="clickThis()">{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.subs">
							<el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
								<template slot="title" @click="clickThis()">{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index" @click="clickThis()">{{ threeItem.title }}</el-menu-item>
							</el-submenu>
							<el-menu-item v-else :index="subItem.index" :key="subItem.index" @click="clickThis()">{{ subItem.title }}</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index">
						<i :class="item.icon"></i>
						<span slot="title" @click="clickThis()">{{ item.title }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
		<el-menu v-else class="sidebar-el-menu" :default-active="onRoutes" :collapse="collapse" background-color="#324157" text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
			<template v-for="item in items">
				<template v-if="item.subs">
					<el-submenu :index="item.index" :key="item.index">
						<template slot="title">
							<i :class="item.icon"></i>
							<span slot="title" @click="clickThis()">{{ item.title }}</span>
						</template>
						<template v-for="subItem in item.subs">
							<el-submenu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
								<template slot="title" @click="clickThis()">{{ subItem.title }}</template>
								<el-menu-item v-for="(threeItem,i) in subItem.subs" :key="i" :index="threeItem.index" @click="clickThis()">{{ threeItem.title }}</el-menu-item>
							</el-submenu>
							<el-menu-item v-else :index="subItem.index" :key="subItem.index" @click="clickThis()">{{ subItem.title }}</el-menu-item>
						</template>
					</el-submenu>
				</template>
				<template v-else>
					<el-menu-item :index="item.index" :key="item.index">
						<i :class="item.icon"></i>
						<span slot="title" @click="clickThis()">{{ item.title }}</span>
					</el-menu-item>
				</template>
			</template>
		</el-menu>
	</div>
</template>

<script>
	import bus from '../common/bus';
	export default {
		data() {
			return {
				collapse: false,
				isRouter: true,
				items: [{
						icon: 'el-icon-lx-home',
						index: 'dashboard',
						title: '系统管理',
						subs: [{
								index: 'medical_institution',
								title: '医疗机构'
							},
							{
								index: 'list_of_departments',
								title: '科室列表'
							},
							{
								index: 'professional_title_management',
								title: '职称管理'
							},
							{
								index: 'solid_drugstore',
								title: '实体药店'
							},
							{
								index: 'brand_management',
								title: '品牌管理'
							},
							{
								index: 'list_of_diseases',
								title: '病种列表'
							},
							{
								index: 'login_account',
								title: '登录账号'
							},
							{
								index: 'role_management',
								title: '角色管理'
							},
							{
								index: 'contact_us',
								title: '联系我们'
							},
							{
								index: 'feedback',
								title: '意见反馈'
							},
							{
								index: 'sensitive_word_management',
								title: '敏感词管理'
							},
							{
								index: 'incompatibility',
								title: '配伍禁忌'
							},
							{
								index: 'follow_up_results',
								title: '随访结果'
							},
							{
								index: 'contraindication_of_medication',
								title: '用药禁忌'
							},
							{
								index: 'audit_switch',
								title: '审核开关'
							},
							{
								index: 'freight_management',
								title: '运费管理'
							},
							{
								index: 'contact_customer_service',
								title: '联系客服'
							}
						]
					},
					{
						icon: 'el-icon-lx-cascades',
						index: 'user_management',
						title: '用户管理',
						subs: [{
								index: 'doctor_list',
								title: '医生列表'
							},
							{
								index: 'pending_authentication',
								title: '待认证医生列表'
							},
							{
								index: 'patient_list',
								title: '患者列表'
							},
							{
								index: 'medical_help',
								title: '医助管理'
							}
						]
					},
					{
						icon: 'el-icon-lx-copy',
						index: 'drug _administration',
						title: '药品管理',
						subs: [{
								index: 'drug_maintenance',
								title: '药品维护'
							},
							{
								index: 'agreement_prescription',
								title: '协定处方列表'
							},
							{
								index: 'sales_volume_statistics',
								title: '销量统计'
							}
						]
					},
					{
						icon: 'el-icon-lx-calendar',
						index: '3',
						title: '订单管理',
						subs: [{
								index: 'drug_sales_order',
								title: '药品订单'
							},
							{
								index: 'picture_text_consultation',
								title: '图文咨询'
							},
							{
								index: 'voice_consultation',
								title: '语音咨询'
							},
							{
								index: 'video_consultation',
								title: '视频咨询'
							},
							{
								index: 'erroneous_order',
								title: '错误订单'
							}
						]
					},
					{
						icon: 'el-icon-tickets',
						index: 'icon',
						title: '财务管理',
						subs: [{
								index: 'transaction_details',
								title: '交易明细'
							},
							{
								index: 'refund_record',
								title: '退款记录'
							},
							{
								index: 'express_details',
								title: '快递明细统计'
							},
							{
								index: 'doctor_statistics',
								title: '医生统计'
							},
							{
								index: 'medical_statistics',
								title: '医助统计'
							},
							{
								index: 'sales_statistics',
								title: '销售统计'
							}
						]
					},
					{
						icon: 'el-icon-document',
						index: 'article_management',
						title: '文章管理',
						subs:[{
							index: 'article_list',
							title:'文章列表'
						},
						{
							index: 'test_picture',
							title:'测试图片'
						}]
					},
					{
						icon: 'el-icon-lx-warn',
						index: '7',
						title: '错误处理',
						subs: [{
								index: 'permission',
								title: '权限测试'
							},
							{
								index: '404',
								title: '404页面'
							}
						]
					}
				]
			};
		},
		computed: {
			onRoutes() {
				return this.$route.path.replace('/', '');
			}
		},
		methods: {
			clickThis () {
				console.log(this.isRouter)
				this.isRouter = false;
				console.log(this.isRouter)
			}
		},
		created() {
			// 通过 Event Bus 进行组件间通信，来折叠侧边栏
			bus.$on('collapse', msg => {
				this.collapse = msg;
				bus.$emit('collapse-content', msg);
			});
		}
	};
</script>

<style scoped>
	.sidebar {
		display: block;
		position: absolute;
		left: 0;
		top: 70px;
		bottom: 0;
		overflow-y: scroll;
	}
	
	.sidebar::-webkit-scrollbar {
		width: 0;
	}
	
	.sidebar-el-menu:not(.el-menu--collapse) {
		width: 250px;
	}
	
	.sidebar>ul {
		height: 100%;
	}
</style>
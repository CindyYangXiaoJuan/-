import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页' }
                },
                {
                    path: '/medical_institution',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/MedicalInstitution.vue'),
                    meta: { title: '医疗机构' }
                },
                {
                    path: '/list_of_departments',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/ListOfDepartments.vue'),
                    meta: { title: '科室列表' }
                },
                {
                    path: '/professional_title_management',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/ProfessionalTitleManagement.vue'),
                    meta: { title: '职称管理' }
                },
                {
                    path: '/solid_drugstore',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/SolidDrugstore.vue'),
                    meta: { title: '实体药店' }
                },
                {
                    path: '/brand_management',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/BrandManagement.vue'),
                    meta: { title: '品牌管理' }
                },
                {
                    path: '/list_of_diseases',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/ListOfDiseases.vue'),
                    meta: { title: '病种列表' }
                },
                {
                    path: '/login_account',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/LoginAccount.vue'),
                    meta: { title: '登录账号' }
                },
                {
                    path: '/role_management',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/RoleManagement.vue'),
                    meta: { title: '角色管理' }
                },
                {
                    path: '/contact_us',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/page/ContactUs.vue'),
                    meta: { title: '联系我们' }
                },
                {
                    path: '/feedback',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/Feedback.vue'),
                    meta: { title: '意见反馈' }
                },
                {
                    path: '/sensitive_word_management',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/SensitiveWordManagement.vue'),
                    meta: { title: '敏感词管理' }
                },
                {
                    path: '/incompatibility',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/Incompatibility.vue'),
                    meta: { title: '配伍禁忌' }
                },
                {
                    path: '/follow_up_results',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/FollowUpResults.vue'),
                    meta: { title: '随访结果' }
                },
                {
                    path: '/contraindication_of_medication',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/ContraindicationOfMedication.vue'),
                    meta: { title: '用药禁忌' }
                },
                {
                    path: '/audit_switch',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/AuditSwitch.vue'),
                    meta: { title: '审核开关' }
                },
                {
                    path: '/freight_management',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/FreightManagement.vue'),
                    meta: { title: '运费管理' }
                },
                {
                    path: '/contact_customer_service',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/ContactCustomerService.vue'),
                    meta: { title: '联系客服' }
                },
                {
                    path: '/doctor_list',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DoctorList.vue'),
                    meta: { title: '医生列表' }
                },
                {
                    path: '/pending_authentication',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/PendingAuthentication.vue'),
                    meta: { title: '待认证医生列表' }
                },
                {
                    path: '/patient_list',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/PatientList.vue'),
                    meta: { title: '患者列表' }
                },
                {
                    path: '/medical_help',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/MedicalHelp.vue'),
                    meta: { title: '医助管理' }
                },
                {
                    path: '/drug_maintenance',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DrugMaintenance.vue'),
                    meta: { title: '药品维护' }
                },
                {
                    path: '/agreement_prescription',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/AgreementPrescription.vue'),
                    meta: { title: '协定处方列表' }
                },
                {
                    path: '/sales_volume_statistics',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/SalesVolumeStatistics.vue'),
                    meta: { title: '销量统计' }
                },
                {
                    path: '/drug_sales_order',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DrugSalesOrder.vue'),
                    meta: { title: '药品订单' }
                },
                {
                    path: '/picture_text_consultation',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/PictureTextConsultation.vue'),
                    meta: { title: '图文咨询' }
                },
                {
                    path: '/voice_consultation',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/VoiceConsultation.vue'),
                    meta: { title: '语音咨询' }
                },
                {
                    path: '/video_consultation',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/VideoConsultation.vue'),
                    meta: { title: '视频咨询' }
                },
                {
                    path: '/erroneous_order',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/ErroneousOrder.vue'),
                    meta: { title: '错误订单' }
                },
                {
                    path: '/transaction_details',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/TransactionDetails.vue'),
                    meta: { title: '交易明细' }
                },
                {
                    path: '/refund_record',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/RefundRecord.vue'),
                    meta: { title: '退款记录' }
                },
                {
                    path: '/express_details',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/ExpressDetails.vue'),
                    meta: { title: '快递明细' }
                },
                {
                    path: '/doctor_statistics',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DoctorStatistics.vue'),
                    meta: { title: '医生统计' }
                },
                {
                    path: '/medical_statistics',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/MedicalStatistics.vue'),
                    meta: { title: '医助统计' }
                },
                {
                    path: '/sales_statistics',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/SalesStatistics.vue'),
                    meta: { title: '销售统计' }
                },
                {
                    path: '/article_list',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/ArticleList.vue'),
                    meta: { title: '文章列表' }
                },
                {
                    path: '/test_picture',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/TestPicture.vue'),
                    meta: { title: '测试图片' }
                },
                {
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                {
                    path: '/donate',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/Donate.vue'),
                    meta: { title: '支持作者' }
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "donate" */ '../components/page/Tabs.vue'),
                    meta: { title: '消息' }
                }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});

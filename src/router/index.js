//配置路由相关的信息
import en from "../i18n/lang/en"
import Vue from "vue"
import Router from "vue-router"
import CommerViews from "@/views/commerViews"
import Login from "@/views/myViews/login" // 登录页
import Layout from "@/views/layout/layout" // 顶栏、左侧bar
import HomeMain from "@/views/myViews/mainIndex" // 主页

// 对应views文件夹
// 不是必须加载的组件使用懒加载
const Icon = () => import("@/views/icon/index")
const Erji = () => import("@/views/duoji/erji")
const Erji2 = () => import("@/views/duoji/erji2")
const Sanji = () => import("@/views/duoji/sanji")
const Sanji2 = () => import("@/views/duoji/sanji2")
const Siji = () => import("@/views/duoji/siji")
const Wuji = () => import("@/views/duoji/wuji")
const Transfer = () => import("@/views/transfer/transfer")
const DataTable = () => import("@/views/table/dataTables")
const FilterTable = () => import("@/views/table/filterTable")
const DragTable = () => import("@/views/table/dragTabe")
const Upload = () => import("@/views/upload/upload")
const Markdown = () => import("@/views/editor/markdownView")
const WangeditorView = () => import("@/views/editor/wangeditorView")
const NotFound = () => import("@/views/page404")
const AddArticle = () => import("@/views/article/addArticle")
const AddArticleEditor = () => import("@/views/article/addArticleEditor")
const NavClassify = () => import("@/views/syssetting/navClassify")
const pagePermissions = () => import("@/views/permissions/pagePermissions")
const btnPermissions = () => import("@/views/permissions/btnPermissions")

//我的
const PersonnelManagement = () => import("@/views/myViews/personnelManagement")
const ProjectManagement = () => import("@/views/myViews/projectManagement")
const UploadProject = () => import("@/views/myViews/uploadProject")
const SourceProject = () => import("@/views/myViews/sourceProject")
const TargetProject = () => import("@/views/myViews/targetProject")
const SuperParameter = () => import("@/views/myViews/superParameter")
const DefectPrediction = () => import("@/views/myViews/defectPrediction")
const ResultManagement = () => import("@/views/myViews/resultManagement")
const ResultDetail = () => import("@/views/myViews/resultDetail")

/**
 * 重写路由的push方法
 */
const routerPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
Vue.use(Router) //安装Router插件

let routeName = en.routeName  //设置英文

//默认路由
let defaultRouter = [
  { path: "/",
    redirect: "/index",
    hidden: true,
    children: []
  },
  {
    path: "/login", // 登录页面
    component: Login,
    name: "",
    hidden: true,
    children: []
  },
  {
    path: "/index", // 主页
    iconCls: "fa fa-dashboard",
    name: routeName.home,
    component: Layout,
    alone: true,
    children: [
      {
        path: "/index",
        iconCls: "fa fa-dashboard",
        name: "主页",
        component: HomeMain,
        children: []
      }
    ]
  },
  {
    path: "/404",
    component: NotFound,
    name: "404",
    hidden: true,
    children: []
  }
]

//业务路由
let addRouter = [

  //***********************注释***************************/

  //组织管理
  {
    path: "/organizationManagement",
    iconCls: "fa fa-universal-access fa-2x",
    name: routeName.organizationManagement,
    component: Layout,
    children: [
      {
        path: "/personnelManagement",
        iconCls: "fa fa-hand-stop-o",
        name: routeName.personnelManagement,
        component: PersonnelManagement,
        children: []
      },
    ]
  },

  //***********************注释***************************/

  //项目管理
  {
    path: "/projectManagement",
    iconCls: "fa fa-file-code-o fa-2x",
    name: routeName.projectManagement,
    component: Layout,
    children: [
      {
        path: "/projectManagement",
        iconCls: "fa fa-file-code-o fa-2x",
        name: routeName.projectList,
        component: ProjectManagement,
        children: []
      },
      {
        path: "/uploadProject",
        iconCls: "fa fa-file-code-o fa-2x",
        name: routeName.uploadProject,
        component: UploadProject,
        children: []
      }
    ]
  },

  //缺陷预测
  {
    path: "/defectPredictionManagement",
    iconCls: "fa el-icon-menu fa-2x",
    name: routeName.defectPredictionManagement,
    component: Layout,
    children: [
      {
        path: "/targetProject",
        iconCls: "fa fa-file-code-o fa-2x",
        name: routeName.targetProject,
        component: TargetProject,
        children: []
      },
      {
        path: "/sourceProject",
        iconCls: "fa fa-file-code-o fa-2x",
        name: routeName.sourceProject,
        component: SourceProject,
        children: []
      },
      {
        path: "/superParameter",
        iconCls: "el-icon-tickets",
        name: routeName.superParameter,
        component: SuperParameter,
        children: []
      },
      {
        path: "/defectPrediction",
        iconCls: "fa el-icon-menu fa-2x",
        name: routeName.defectPrediction,
        component: DefectPrediction,
        children: []
      }
    ]
  },

  //结果管理
  {
    path: "/resultManagement",
    iconCls: "el-icon-tickets",
    name: routeName.resultManagement,
    component: Layout,
    children: [
      {
        path: "/resultManagement",
        iconCls: "el-icon-tickets",
        name: routeName.resultManagement,
        component: ResultManagement,
        children: []
      },
      {
        path: "/resultDetail",
        iconCls: "el-icon-tickets",
        name: routeName.resultDetail,
        component: ResultDetail,
        children: []
      }
    ]
  },

  
  // //文章管理
  // {
  //   path: "/",
  //   iconCls: "el-icon-tickets",
  //   name: routeName.article,
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/addArticle",
  //       iconCls: "el-icon-edit-outline", // 图标样式class
  //       name: routeName.publishArticle,
  //       component: AddArticle,
  //       children: []
  //     },
  //     {
  //       path: "/addArticleEditor",
  //       iconCls: "el-icon-edit-outline", // 图标样式class
  //       name: routeName.publishArticleEditor,
  //       hidden: true,
  //       component: AddArticleEditor,
  //       children: []
  //     }
  //   ]
  // },

  // //图标
  // {
  //   path: "/",
  //   iconCls: "fa fa-paw", // 图标样式class
  //   name: routeName.icon,
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/icon",
  //       iconCls: "fa fa-life-ring", // 图标样式class
  //       name: routeName.builtInIcon,
  //       component: Icon,
  //       children: []
  //     }
  //   ]
  // },

  // //穿梭框
  // {
  //   path: "/",
  //   iconCls: "fa fa-exchange", // 图标样式class
  //   name: routeName.shuttleBox,
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/transfer",
  //       iconCls: "fa fa-sign-in", // 图标样式class
  //       name: routeName.demoShuttle,
  //       component: Transfer,
  //       children: []
  //     }
  //   ]
  // },

  // //权限管理
  // {
  //   path: "/",
  //   iconCls: "fa fa-universal-access", // 图标样式class
  //   name: routeName.permissions,
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/pagePermissions",
  //       iconCls: "fa fa-expeditedssl", // 图标样式class
  //       name: routeName.pageControl,
  //       component: pagePermissions,
  //       children: []
  //     },
  //     {
  //       path: "/btnPermissions",
  //       iconCls: "fa fa-toggle-on", // 图标样式class
  //       name: routeName.btnControl,
  //       component: btnPermissions,
  //       children: []
  //     }
  //   ]
  // },

  // //表格
  // {
  //   path: "/",
  //   iconCls: "fa fa-newspaper-o", // 图标样式class
  //   name: routeName.table,
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/dataTable",
  //       iconCls: "fa fa-sliders", // 图标样式class
  //       name: routeName.multiDataTable,
  //       component: DataTable,
  //       children: []
  //     },
  //     {
  //       path: "/filterTable",
  //       iconCls: "fa fa-sort-amount-asc", // 图标样式class
  //       name: routeName.filterTable,
  //       component: FilterTable,
  //       children: []
  //     },
  //     {
  //       path: "/dragTabe",
  //       iconCls: "fa fa-hand-stop-o", // 图标样式class
  //       name: routeName.dragSort,
  //       component: DragTable,
  //       children: []
  //     }
  //   ]
  // },

  // //多级目录
  // {
  //   path: "/",
  //   iconCls: "fa fa-server",
  //   name: routeName.multiDirectory,
  //   component: Layout,
  //   children: [
  //     {
  //       path: "/erji1",
  //       iconCls: "fa fa-server",
  //       name: routeName["menu2-1"],
  //       component: Erji,
  //       children: []
  //     },
  //     {
  //       path: "/erji2",
  //       iconCls: "fa fa-server",
  //       name: routeName["menu2-2"],
  //       component: Erji2,
  //       children: []
  //     },
  //     {
  //       path: "/erji3",
  //       iconCls: "fa fa-server",
  //       name: routeName["menu2-3"],
  //       component: CommerViews, // 无限极菜单的容器
  //       children: [
  //         {
  //           path: "/sanji1",
  //           iconCls: "fa fa-server",
  //           name: routeName["menu3-1"],
  //           component: Sanji,
  //           children: []
  //         },
  //         {
  //           path: "/sanji2",
  //           iconCls: "fa fa-server",
  //           name: routeName["menu3-2"],
  //           component: Sanji2,
  //           children: []
  //         },
  //         {
  //           path: "/sanji3",
  //           iconCls: "fa fa-server",
  //           name: routeName["menu3-3"],
  //           component: CommerViews,
  //           children: [
  //             {
  //               path: "/siji",
  //               iconCls: "fa fa-server",
  //               name: routeName["menu4-1"],
  //               component: Siji,
  //               children: []
  //             },
  //             {
  //               path: "/siji1",
  //               iconCls: "fa fa-server",
  //               name: routeName["menu4-2"],
  //               component: CommerViews,
  //               children: [
  //                 {
  //                   path: "/wuji",
  //                   iconCls: "fa fa-server",
  //                   name: routeName["menu5-1"],
  //                   component: Wuji,
  //                   children: []
  //                 }
  //               ]
  //             }
  //           ]
  //         }
  //       ]
  //     }
  //   ]
  // },

  // //上传
  // {
  //   path: "/",
  //   iconCls: "fa fa-cloud-upload", // 图标样式class
  //   name: routeName.upload,
  //   component: Layout,
  //   meta: {role: ["superAdmin"]},
  //   children: [
  //     {
  //       path: "/upload",
  //       iconCls: "el-icon-upload2", // 图标样式class
  //       name: routeName.fileUpload,
  //       component: Upload,
  //       children: []
  //     }
  //   ]
  // },

  // //编辑器
  // {
  //   path: "/",
  //   iconCls: "el-icon-edit", // 图标样式class
  //   name: routeName.editor,
  //   component: Layout,
  //   meta: {role: ["superAdmin", "admin"]},
  //   children: [
  //     {
  //       path: "/markdown",
  //       iconCls: "fa fa-file-code-o", // 图标样式class
  //       name: routeName.markdown,
  //       component: Markdown,
  //       children: []
  //     },
  //     {
  //       path: "/wangeditor",
  //       iconCls: "fa fa-file-code-o", // 图标样式class
  //       name: routeName.wangeditor,
  //       component: WangeditorView,
  //       children: []
  //     }
  //   ]
  // },

  // //系统设置
  // {
  //   path: "/",
  //   iconCls: "el-icon-setting", // 图标样式class
  //   name: routeName.systemSettings,
  //   component: Layout,
  //   meta: {role: ["superAdmin"]},
  //   children: [
  //     {
  //       path: "/navClassifies",
  //       iconCls: "el-icon-menu", // 图标样式class
  //       name: routeName.navMenu,
  //       component: NavClassify,
  //       children: []
  //     }
  //   ]
  // },

  //default
  { path: "*",
    redirect: "/404",
    hidden: true,
    children: []
  }

]

//导出
export default new Router({
  routes: defaultRouter
})
export {defaultRouter, addRouter}

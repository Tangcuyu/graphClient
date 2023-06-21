import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: '图数据可视化系统'
    },
    routes: {
      dashboard: {
        _value: '仪表盘',
        analysis: '效能总览',
        workbench: '监控总览'
      },
      document: {
        _value: '设计系统',
        vue: 'Design Token',
        vite: '元组件库',
        naive: 'MIS组件库',
        project: 'GIS组件库',
        'project-link': 'LDS文档(外链)'
      },
      component: {
        _value: '研发效能',
        button: '版本发布',
        card: 'BUG跟踪',
        table: 'JIRA信息'
      },
      plugin: {
        _value: '运维监控',
        charts: {
          _value: '图表',
          graph: 'Graph',
          echarts: 'ECharts',
          antv: 'AntV'
        },
        copy: '剪贴板',
        editor: {
          _value: '编辑器',
          quill: '富文本',
          markdown: 'Markdown'
        },
        icon: '图标',
        map: '地图',
        print: '打印',
        swiper: 'Swiper',
        video: '视频'
      },
      'auth-demo': {
        _value: '权限示例',
        permission: '切换权限',
        super: '超级管理员可见'
      },
      function: {
        _value: 'UI自动化测试',
        tab: 'Tab页签'
      },
      exception: {
        _value: '异常页',
        403: '403',
        404: '404',
        500: '500'
      },
      'multi-menu': {
        _value: '多级菜单',
        first: {
          _value: '一级菜单',
          second: '二级菜单',
          'second-new': {
            _value: '二级菜单(有子菜单)',
            third: '三级菜单'
          }
        }
      },
      management: {
        _value: '系统管理',
        auth: '权限管理',
        role: '角色管理',
        route: '路由管理',
        user: '用户管理'
      },
      about: '关于'
    }
  }
};

export default locale;

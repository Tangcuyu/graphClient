import type { LocaleMessages } from 'vue-i18n';

const locale: LocaleMessages<I18nType.Schema> = {
  message: {
    system: {
      title: 'GraphClient Admin'
    },
    routes: {
      about: 'About',
      dashboard: {
        _value: 'Dashboard',
        analysis: 'Effectiveness-OverView',
        workbench: 'DevOps-OverView'
      },
      document: {
        _value: 'Design System',
        vue: 'Design Token',
        vite: 'Base Component',
        naive: 'MIS Component',
        project: 'GIS Component',
        'project-link': 'LDS Document(href)'
      },
      component: {
        _value: 'Effectiveness',
        button: 'Version Management',
        card: 'Bug Management',
        table: 'JIRA Management'
      },
      plugin: {
        _value: 'DevOps',
        charts: {
          _value: 'Chart',
          graph: 'Graph',
          echarts: 'ECharts',
          antv: 'AntV'
        },
        copy: 'Copy',
        editor: {
          _value: 'Editor',
          quill: 'Quill',
          markdown: 'Markdown'
        },
        icon: 'Icon',
        map: 'Map',
        print: 'Print',
        swiper: 'Swiper',
        video: 'Video'
      },
      'auth-demo': {
        _value: 'Auth Demo',
        permission: 'Toggle Permission',
        super: 'Super Auth'
      },
      function: {
        _value: 'UI Automatic Test',
        tab: 'System Tab'
      },
      exception: {
        _value: 'Exception',
        403: '403',
        404: '404',
        500: '500'
      },
      'multi-menu': {
        _value: 'Multi Degree Menu',
        first: {
          _value: 'First Degree',
          second: 'Second Degree',
          'second-new': {
            _value: 'Second Degree With Children',
            third: 'Third Degree'
          }
        }
      },
      management: {
        _value: 'System Management',
        auth: 'Auth',
        role: 'Role',
        route: 'Route',
        user: 'User'
      }
    }
  }
};

export default locale;

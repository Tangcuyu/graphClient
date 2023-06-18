const dashboard: AuthRoute.Route = {
  name: 'dashboard',
  path: '/dashboard',
  component: 'basic',
  children: [
    {
      name: 'dashboard_analysis',
      path: '/dashboard/analysis',
      component: 'self',
      meta: {
        title: '研发效能',
        requiresAuth: true,
        icon: 'icon-park-outline:analysis',
        i18nTitle: 'message.routes.dashboard.analysis'
      }
    },
    {
      name: 'dashboard_workbench',
      path: '/dashboard/workbench',
      component: 'self',
      meta: {
        title: '运维监控',
        requiresAuth: true,
        icon: 'icon-park-outline:workbench',
        i18nTitle: 'message.routes.dashboard.workbench'
      }
    }
  ],
  meta: {
    title: '仪表盘',
    icon: 'mdi:monitor-dashboard',
    order: 1,
    i18nTitle: 'message.routes.dashboard._value'
  }
};

export default dashboard;

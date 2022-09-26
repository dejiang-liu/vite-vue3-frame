import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import router from './router';
import { RouteLocationNormalized } from 'vue-router';

NProgress.configure({ showSpinner: false});

router.beforeEach( async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: any) => {
  NProgress.start();
  console.log('before router jump', to)
  const token = localStorage.getItem('dj_token')
  if (to.path == '/login') {
    next();
  } else {
    if (!token) {
      next({path: '/login'})
      return;
    }
  }
  if (to.matched.length === 0) {
    next({path: '/404'})
    return;
  }
  next();
})
router.afterEach(() => {
  NProgress.done();
})
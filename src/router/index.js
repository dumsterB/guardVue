import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import todo from '@/components/todo'
import banlist from '@/components/Banalist'
import main from '@/components/main'
import store from '@/store'
import rolesList from "@/router/routes-by-role.js"

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'Login',
            id: 1,
            component: login
        },
        {
            path: '/home',
            name: 'Home',
            id: 2,
            component: home
        },
        {
            path: '/todo',
            name: 'Todo',
            id: 3,
            component: todo
        },
        {
          path:'/Banlist',
          name: 'Banlist',
          id: 4,
          component: banlist
        },
        {
          path:'/main',
          name: 'Main',
          id: 5,
          component: main
        },

    ],
    mode: 'history'
})
// router.beforeEach((to,from,next)=>{
//       const userAccessLevel = store.state.profile.access_level
//         const roleRoutes= rolesList
//   if(roleRoutes[userAccessLevel] || {}){
//
//     next()
//   }else{
//     this.$router.replace({name:'Login'})
//   }
// })
router.beforeEach((to, from, next) => {
  if (to.name == 'Login') {next(); return}
    // const isLogin = to.name == "Login"
    const userAccessLevel = store.state.profile.access_level
    console.log('userAccessLevel', userAccessLevel)
    console.log("rolesList", (rolesList[userAccessLevel] || {}).routes || -1);
        // if (!store.state.users[userAccessLevel] && isLogin) {
        //     next({
        //         name: 'Login'
        //     })
        //     return
        // }
        const allowedRoutes = ((rolesList[userAccessLevel] || {}).routes || [] );      //!!!!!!!!!!!!explonation
        console.log(allowedRoutes,to.name);
        if (allowedRoutes.includes(to.name)){                                            //////!explonation
          console.log(allowedRoutes.includes(to.name));
         next();
        } else {
        // next({path: '/Banlist'})
        next(false)
        console.log('pass');
        }

        // if (rolesList[userAccessLevel] && !isLogin) {
        //     next({
        //
        //     })
        //     return
        //  }
        // if (to.name!==userAccessLevel.routes && !isLogin) {
        //     next({
        //         name:`${userAccessLevel}`
        //     })
        //     return
        // }
    //
    // next()
})

export default router

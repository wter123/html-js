import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import commod from "../components/content/commod"
import comment from "../components/content/comment"
import merchant from "../components/content/merchant"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/comment',
      name: 'comment',
      component:comment
    },
		{
				path: "/commod",
				name: 'comment',
				component:commod
			},
		{
			path:"/merchant",
			name:"merchant",
			component:merchant
		}
  ],
	mode: 'history'
})

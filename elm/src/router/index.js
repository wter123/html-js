import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import commod from "../components/content/commod"
import comment from "../components/content/comment"
import merchant from "../components/content/merchant"
import good from '../components/goods/goods.vue'
Vue.use(Router)
//    history 
export default new Router({
	mode: 'hash',
  routes: [
    {
      path: '/comment',
      name: 'comment',
      component:comment
    },
		{
				path: "/",
				name: 'commod',
				component:good
			},
		{
			path:"/merchant",
			name:"merchant",
			component:merchant
		},
		// {path:"*",redirect:"/commod"}
  ]

}
)

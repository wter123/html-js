import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import commod from "../components/content/commod"
import comment from "../components/content/comment"
import merchant from "../components/content/merchant"
Vue.use(Router)

export default new Router({
	mode: 'history',
  routes: [
    {
      path: '/comment',
      name: 'comment',
      component:comment
    },
		{
				path: "/",
				name: 'commod',
				component:commod
			},
		{
			path:"/merchant",
			name:"merchant",
			component:merchant
		},
		{path:"*",redirect:"/commod"}
  ]
	// ,
	// ,
}
)

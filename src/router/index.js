import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      redirect:'/movie/movieList'
    }, {
      path:'/movie',
      component:Movie,
      children:[
        {
          path:'movieList',
          component:MovieList
        },{
          path:'movieDetail',
          component:MovieDetail
        }
      ]
    }
  ]
})

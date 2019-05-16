import Vue from 'vue'
import Router from 'vue-router'
import Movie from '@/components/movie/Movie'
import MovieList from '@/components/movie/MovieList'
import MovieDetail from '@/components/movie/MovieDetail'
import MovieDetail2 from '@/components/movie/Detail2'
import Music from '@/components/music/Music'
import Book from '@/components/book/Book'
import Photo from '@/components/photo/Photo'
import MusicList from '@/components/music/MusicList'
import MusicAlbums from '@/components/music/MusicAlbums'
import PhotoList from '@/components/photo/PhotoList'
import BookList from '@/components/book/BookList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/movie/movieList'
    }, {
      path:'/movie',
      component:Movie,
      children:[
        {
          path:'movieList',
          component:MovieList
        },{
          path:'movieDetail/:movieId',
          component:MovieDetail
        },{
          path:'movieDetail2',
          component:MovieDetail2
        }
      ]
    },{
      path:'/music',
      component:Music,
      redirect:'/music/musicList',
      children:[
        {
          path:'musicList',
          component:MusicList
        },{
          path:'musicAlbums/:musicId',
          component:MusicAlbums
        }
      ]
    },{
      path:'/book',
      component:Book,
      redirect:'/book/bookList',
      children:[
        {
          path:'bookList',
          component:BookList
        }
      ]
    },{
      path:'/photo',
      component:Photo,
      redirect:'/photo/photoList',
      children:[
        {
          path:'photoList',
          component:PhotoList
        }
      ]
    }
  ]
})

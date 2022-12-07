import { createRouter, createWebHistory } from 'vue-router';

import BookDetail from './pages/books/BookDetail.vue';
import BooksList from './pages/books/BooksList.vue';
import AddBook from './pages/books/AddBook.vue';
import NotFound from './pages/NotFound.vue';
import EditBook from './pages/books/EditBook.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/books' },
    { path: '/books', component: BooksList },
    {
      path: '/books/:id',
      component: BookDetail,
      props: true,

    },
    {
      path: '/edit/:id',
      component: EditBook,
      props: true,

    },
    { path: '/addbook', component: AddBook },
    { path: '/:notFound(.*)', component: NotFound }
  ]
});

export default router;

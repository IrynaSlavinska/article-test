export const getArticlesSelector = state => state.articles.articles;

export const getFilterSelector = state => state.filter.filter;

export const isLoggedInSelector = state => state.auth.isLoggedIn;

export const userSelector = state => state.auth.user;

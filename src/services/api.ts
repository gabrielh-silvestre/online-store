import axios from 'axios';

interface SearchParams {
  term?: string;
  category?: string;
}

export const apiListCategories = axios.create({
  baseURL: 'https://api.mercadolibre.com/sites/MLB/',
}).get('categories');

export const apiSearch = ({ term, category }: SearchParams) => {
  if (term && !category) {
    return axios.create({
      baseURL: 'https://api.mercadolibre.com/sites/MLB/',
    }).get(`search?q=${term}`);
  }

  if (!term && category) {
    return axios.create({
      baseURL: 'https://api.mercadolibre.com/sites/MLB/',
    }).get(`search?category=${category}`);
  }

  return axios.create({
    baseURL: 'https://api.mercadolibre.com/sites/MLB/',
  }).get(`search?category=${category}&q=${term}`);
};

export const apiDetailItem = (productId: string) =>
  axios.create({
    baseURL: 'https://api.mercadolibre.com/items/',
  }).get(productId);

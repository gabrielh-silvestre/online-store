import axios from 'axios';

interface SearchParams {
  term?: string;
  category?: string;
}

interface SearchResponseData {
  results: Array<{
    id: string;
    title: string;
    price: number;
    currency_id: string;
    avaible_quantity: number;
    thumbnail: string;
    shipping: {
      free_shipping: boolean;
    };
  }>;
}

export const apiListCategories = axios
  .create({
    baseURL: 'https://api.mercadolibre.com/sites/MLB/',
  })
  .get('categories');

export const apiSearch = ({ term, category }: SearchParams) => {
  if (term && !category) {
    return axios
      .create({
        baseURL: 'https://api.mercadolibre.com/sites/MLB/',
      })
      .get<SearchResponseData | undefined>(`search?q=${term}`);
  }

  if (!term && category) {
    return axios
      .create({
        baseURL: 'https://api.mercadolibre.com/sites/MLB/',
      })
      .get<SearchResponseData | undefined>(`search?category=${category}`);
  }

  return axios
    .create({
      baseURL: 'https://api.mercadolibre.com/sites/MLB/',
    })
    .get<SearchResponseData | undefined>(
      `search?category=${category}&q=${term}`
    );
};

export const apiDetailItem = (productId: string) =>
  axios
    .create({
      baseURL: 'https://api.mercadolibre.com/items/',
    })
    .get(productId);

export const apiSellerInfo = (sellerId: string) =>
  axios
    .create({
      baseURL: 'https://api.mercadolibre.com/users/',
    })
    .get(sellerId);

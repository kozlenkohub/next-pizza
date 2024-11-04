import { Product } from '@prisma/client';
import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';
import { ProductWithRelations } from '@/@types/prisma';

export const search = async (query: string): Promise<Product[]> => {
  return (await axiosInstance.get<Product[]>(ApiRoutes.SEARCH_PRODUCTS, { params: { query } }))
    .data;
};

export const getProduct = async (id: string): Promise<ProductWithRelations> => {
  return (await axiosInstance.get<ProductWithRelations>(ApiRoutes.GET_PRODUCT, { params: { id } }))
    .data;
};

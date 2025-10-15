import api from "./api"
import type { Product, ProductCategory } from "../models/Product"


export const productService = {
  
    getAllProducts: async (): Promise<Product[]> => {
    const response = await api.get<Product[]>("/products")
    return response.data
  },

  
  getProductsWithLimit: async (limit: number): Promise<Product[]> => {
    const response = await api.get<Product[]>(`/products?limit=${limit}`)
    return response.data
  },

  
  getProductById: async (id: number): Promise<Product> => {
    const response = await api.get<Product>(`/products/${id}`)
    return response.data
  },

  getCategories: async (): Promise<ProductCategory[]> => {
    const response = await api.get<ProductCategory[]>("/products/categories")
    return response.data
  },

  
  getProductsByCategory: async (category: ProductCategory): Promise<Product[]> => {
    const response = await api.get<Product[]>(`/products/category/${category}`)
    return response.data
  },

  
  getSortedProducts: async (sort: "asc" | "desc" = "asc"): Promise<Product[]> => {
    const response = await api.get<Product[]>(`/products?sort=${sort}`)
    return response.data
  }
}

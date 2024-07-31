import bcrypt from 'bcryptjs'
import { User } from './models/userModel'
import { Product } from './models/productModel'

export const sampleProducts: Product[] = [
  {
    name: 'Nike Slim shirt',
    slug: 'nike-slim-shirt',
    category: 'Shirts',
    image: '../images/p1.jpg',
    price: 1200, // Converted to INR
    countInStock: 10,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 10,
    description: 'high quality shirt',
  },
  {
    name: 'Adidas Fit Shirt',
    slug: 'adidas-fit-shirt',
    category: 'Shirts',
    image: '../images/p2.jpg',
    price: 1000, // Converted to INR
    countInStock: 20,
    brand: 'Adidas',
    rating: 4.0,
    numReviews: 10,
    description: 'high quality product',
  },
  {
    name: 'Lacoste Free Pants',
    slug: 'lacoste-free-pants',
    category: 'Pants',
    image: '../images/p3.jpg',
    price: 2200, // Converted to INR
    countInStock: 0,
    brand: 'Lacoste',
    rating: 4.8,
    numReviews: 17,
    description: 'high quality product',
  },
  {
    name: 'Nike Slim Pant',
    slug: 'nike-slim-pant',
    category: 'Pants',
    image: '../images/p4.jpg',
    price: 2800, // Converted to INR
    countInStock: 15,
    brand: 'Nike',
    rating: 4.5,
    numReviews: 14,
    description: 'high quality product',
  },
  {
    name: 'Gymshark Pink Tank Top',
    slug: 'gymshark-pink-tank-top',
    category: 'Tops',
    image: '../images/p5.jpg',
    price: 1500, // Converted to INR
    countInStock: 25,
    brand: 'Gymshark',
    rating: 4.6,
    numReviews: 8,
    description: 'Pink tank top by Gymshark, perfect for workouts.',
  },
  {
    name: 'Oneractive Black Co-ord Set',
    slug: 'oneractive-black-coord-set',
    category: 'Sets',
    image: '../images/p6.jpg',
    price: 1800, // Converted to INR
    countInStock: 0, // Set as out of stock
    brand: 'Oneractive',
    rating: 4.7,
    numReviews: 6,
    description: 'Black co-ord dri fit set by Oneractive for high performance.',
  },
  {
    name: 'Gymshark Red Tank Top',
    slug: 'gymshark-red-tank-top',
    category: 'Tops',
    image: '../images/p7.jpg',
    price: 800, // Converted to INR
    countInStock: 20,
    brand: 'Gymshark',
    rating: 4.8,
    numReviews: 12,
    description: 'Red tank top by Gymshark, ideal for intense workouts.',
  },
  {
    name: 'Nike Teal Co-ord Set',
    slug: 'nike-teal-coord-set',
    category: 'Sets',
    image: '../images/p8.jpg',
    price: 1700, // Converted to INR
    countInStock: 8,
    brand: 'Nike',
    rating: 4.9,
    numReviews: 5,
    description: 'Teal co-ord set from Nike, combining style with comfort.',
  },
]

export const sampleUsers: User[] = [
  {
    name: 'Joe',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'John',
    email: 'user@example.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: false,
  },
]

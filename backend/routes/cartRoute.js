import express from 'express'
import { getUserCart, addToCart, updateCart } from '../controllers/cartCOntroller.js'
import authUser from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.post('/get', authUser, getUserCart)
cartRouter.post('/add', authUser, addToCart)
cartRouter.post('/update', authUser, updateCart)

export default cartRouter
//компонент для отображения товаров
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, IconButton, Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../features/cartSlice';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const {items} = useSelector((state)=>state.cart);
  const itemInCart = items.find((item)=> item.id === product.id);
  const quantity = itemInCart ? itemInCart.quantity : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card sx={{ maxWidth: 345, margin: 2, boxShadow: 5, border: '3px dashed #99cae3' }}>
        <CardMedia
          component="img"
          height="320"
          image={product.image}
          alt={product.title}
        />
        <CardContent>
          <Typography variant="h6">{product.title}</Typography>
          <Typography variant="body2">{product.description}</Typography>
          <Typography variant="h5">{product.price} Руб.</Typography>
          <Typography variant="h6" align='center' sx={{ fontWeight: 'bold' }}>{product.rating}☆</Typography>
          <Badge badgeContent={quantity} color="primary">  
            <Button
              startIcon={<AddShoppingCartIcon/>}
              variant="contained"
              onClick={()=>dispatch(addToCart(product))}>
              Добавить в корзину
            </Button>
          </Badge>
          {/* <IconButton size='large'>
            <AddShoppingCartIcon fontSize="inherit" />
          </IconButton> */}
          
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ProductCard;
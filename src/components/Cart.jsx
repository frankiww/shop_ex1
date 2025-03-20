import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../features/cartSlice';
import { Card, CardContent, Typography, Button, List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { motion } from 'framer-motion';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  return (
    <Card sx={{ maxWidth: '100%', margin: 2, boxShadow: 5, border: '3px dashed #99cae3'}}>
      <CardContent>
        <Typography variant="h6">Корзина</Typography>
        <List>
          {items.map((item) => (
            <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <ListItem key={item.id}>
                <ListItemText
                    primary={item.title}
                    secondary={`${item.quantity} x ${item.price} Руб.`}
                />
                    <IconButton onClick={() => dispatch(removeFromCart(item))} color="error">
                        <DeleteIcon />
                    </IconButton>
                </ListItem>
            </motion.div>
            ))}
        </List>
        <Typography variant="h6">Общая стоимость: {total} Руб.</Typography>
        <Button onClick={() => dispatch(clearCart())} variant="contained" color="error">
          Очистить корзину
        </Button>
      </CardContent>
    </Card>
  );
};

export default Cart;
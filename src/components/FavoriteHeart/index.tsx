import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';
import { addFavoriteItem, CartItem, removeFavoriteItem } from '../../actions';

import { HiHeart, HiOutlineHeart } from 'react-icons/hi';

interface FavoriteHeartProps {
  item: Omit<CartItem, 'quantity'>;
  className: string;
}

export function FavoriteHeart({ item, className }: FavoriteHeartProps) {
  const favorite = useSelector(({ favorite }: RootState) => favorite);
  const dispatch = useDispatch();

  const handleAddFavorite = () => {
    dispatch(addFavoriteItem(item));
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavoriteItem(item.id));
  };

  return favorite.find(({ id }) => item.id === id) ? (
    <HiHeart className={className} onClick={handleRemoveFavorite} />
  ) : (
    <HiOutlineHeart className={className} onClick={handleAddFavorite} />
  );
}

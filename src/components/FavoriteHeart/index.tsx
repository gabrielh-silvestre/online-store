import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store';

import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import { addFavoriteItem, CartItem } from '../../actions';

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

  return favorite.find(({ id }) => item.id === id) ? (
    <HiHeart className={className} />
  ) : (
    <HiOutlineHeart className={className} onClick={handleAddFavorite} />
  );
}

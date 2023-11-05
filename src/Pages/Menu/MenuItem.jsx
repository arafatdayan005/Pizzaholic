import { useDispatch } from 'react-redux';
import Button from './../../Components/Button';
import { formatCurrency } from './../../Utilities/formatter';
import { FaShoppingCart } from "react-icons/fa";
import { addItem } from '../../Redux/cartSlice';

function MenuItem({ pizza }) {
    const dispatch = useDispatch();
    const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

    const handleAddToCart = () => {
        const newItem = {
            id,
            name,
            quantity: 1,
            unitPrice,
            totalPrice: unitPrice * 1
        };
        dispatch(addItem(newItem));
    }
    return (
        <div className="gap-4 bg-white rounded-xl hover:shadow-lg hover:shadow-yellow-500 transition-all duration-300 overflow-hidden group relative">
            <img
                src={imageUrl}
                alt={name}
                className={`w-full h-60 scale-110 rounded-t-xl group-hover:scale-100 duration-300 ${soldOut ? 'opacity-70 grayscale' : ''}`}
            />
            <div className="flex grow flex-col p-4">
                <p className="font-semibold text-xl my-4 text-yellow-500">{name}</p>
                <p className="text-md capitalize italic h-12 text-stone-500">
                    {ingredients.join(', ')}
                </p>
                <div className="flex items-center justify-between mt-8">
                    {!soldOut ? (
                        <p className="text-xl font-medium">{formatCurrency(unitPrice)}</p>
                    ) : (
                        <p className="text-xl font-medium uppercase text-stone-500">
                            Sold out
                        </p>
                    )}

                    {!soldOut &&
                        <Button onClick={handleAddToCart} type="primary">
                            <span className="text-white">
                                <FaShoppingCart />
                            </span>
                        </Button>
                    }
                </div>
            </div>
        </div>
    );
}

export default MenuItem;
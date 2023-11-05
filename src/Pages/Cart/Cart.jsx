import { useDispatch, useSelector } from 'react-redux';
import Button from '../../Components/Button';
import LinkButton from '../../Components/LinkButton';
import CartItem from './CartItem';
import { clearCart } from '../../Redux/cartSlice';

function Cart() {
    const dispatch = useDispatch();
    const username = useSelector(state => state.user.username);
    const cart = useSelector(state => state.cart.cart);

    if (cart.length === 0) {
        return (
            <div className='h-[80vh] px-4 py-3'>
                <LinkButton to="/menu">&larr; Back to menu</LinkButton>

                <p className='font-semibold mt-8 text-center text-3xl py-44'>Your cart is empty :( Start adding some Pizza's and come back again. </p>
            </div>
        );
    }

    return (
        <div className="px-4 py-3">
            <LinkButton to="/menu">&larr; Back to menu</LinkButton>

            <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

            <ul className="mt-3 divide-y divide-stone-200 border-b">
                {cart.map((item) => (
                    <CartItem item={item} key={item.id} />
                ))}
            </ul>

            <div className="mt-6 space-x-2">
                <Button to="/order/new" type="primary">
                    Order pizzas
                </Button>

                <Button onClick={() => dispatch(clearCart())} type="secondary">
                    Clear cart
                </Button>
            </div>
        </div>
    );
}

export default Cart;
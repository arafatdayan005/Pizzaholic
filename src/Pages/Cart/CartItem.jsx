import { useDispatch } from "react-redux";
import Button from "../../Components/Button";
import { formatCurrency } from "../../Utilities/formatter";
import { decreseItemQuantity, deleteItem, increaseItemQuantity } from "../../Redux/cartSlice";


function CartItem({ item }) {
    const dispatch = useDispatch();
    const { id, name, quantity, totalPrice } = item;

    return (
        <li className="py-3 sm:flex sm:items-center sm:justify-between">
            <p className="mb-1 sm:mb-0">
                {quantity}&times; {name}
            </p>
            <div className="flex items-center justify-between sm:gap-2">
                <p className="text-sm font-bold pr-4">{formatCurrency(totalPrice)}</p>
                <Button onClick={() => dispatch(decreseItemQuantity(id))} type="round">-</Button>
                <Button onClick={() => dispatch(increaseItemQuantity(id))} type="round">+</Button>
                <Button onClick={() => dispatch(deleteItem(id))} type="small">Delete</Button>
            </div>
        </li>
    );
}

export default CartItem;
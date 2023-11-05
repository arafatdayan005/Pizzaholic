import { Link } from 'react-router-dom';
import SearchOrder from './SearchOrder';
import { useSelector } from 'react-redux';

function Navbar() {
    const username = useSelector(state => state.user.username);
    return (
        <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6 lg:px-16">
            <Link to="/" className="tracking-widest text-xl">
                PizzaHolic
            </Link>

            <SearchOrder />
            {username &&
                <div className="hidden text-md font-semibold md:block">{username}</div>
            }
        </header>
    );
}

export default Navbar;
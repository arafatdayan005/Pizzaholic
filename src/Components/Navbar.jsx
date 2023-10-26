import { Link } from 'react-router-dom';
import SearchOrder from './SearchOrder';

function Navbar() {
    return (
        <header className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6 lg:px-16">
            <Link to="/" className="tracking-widest text-xl">
                PizzaHolic
            </Link>

            <SearchOrder />
            <div className="hidden text-md font-semibold md:block">Arafat Dayan</div>
        </header>
    );
}

export default Navbar;
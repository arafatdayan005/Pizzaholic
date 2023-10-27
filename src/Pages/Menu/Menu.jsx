import { useLoaderData } from 'react-router-dom';

import MenuItem from './MenuItem';
import { getMenu } from '../../APIs/pizza';

function Menu() {
    const menu = useLoaderData();

    console.log(menu)

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-12 mx-12 sm:mx-18">
            {menu.map((pizza) => (
                <MenuItem pizza={pizza} key={pizza.id} />
            ))}
        </div>
    );
}

export async function loader() {
    const menu = await getMenu();
    return menu;
}

export default Menu;
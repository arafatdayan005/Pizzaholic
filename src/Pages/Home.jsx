import React from 'react'
import CreateUser from '../Components/CreateUser';

function Home() {
    return (
        <div className="my-32 px-4 text-center lg:my-32">
            <h1 className="mb-8  text-xl font-semibold md:text-3xl">
                PizzaHolic
                <br />
                <span className="text-yellow-500">
                    Straight out of the oven, straight to you.
                </span>
            </h1>

            <CreateUser />
        </div>
    );
}

export default Home;
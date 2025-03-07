import React, { useContext } from 'react'
import Center from './Center'
import Chart from './Chart';
import { StoreContext } from '../context/StoreContext';

function RightComponent() {
    const { error } = useContext(StoreContext)

    return (
        <>
            {error ? <p>Oops!, Error Occured....</p> : <>
                <div className="w-[70%] rounded-l-lg p-2 bg-amber-50 flex flex-wrap h-screen  overflow-y-scroll gap-2 justify-evenly shadow-2xl">
                    <Center />
                </div>
                <div className="w-[30%] rounded-r-lg  bg-amber-100">
                    <Chart />
                </div>
            </>
            }
        </>
    )
}

export default RightComponent
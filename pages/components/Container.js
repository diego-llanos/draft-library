import React from 'react'

import Card from './Card'
import Middle from './Middle'
import RightBar from './RightBar'
import NavBar from './NavBar'
import Table from './Table'
import ContainerInf from './ContainerInf'





const Container = () => {
    return (
        <div className=" bg-gradient-to-r from-gray-100 to-gray-50 h-full " >
            <div className="  px-8 py-1 ">
                    {/* Elrond */}
                
            </div>
            {/* <div className="flex   p-4 space-x-3">
                <Card title="TOTAL" balance={409.0790} icon={0} />
                <Card title="AVAILABLE" balance={300.0790} icon={1} />
                <Card title="CLAIMABLE REWARD" balance={100.0790} icon={2} />
                <Card title="DELEGATED" balance={339.0790} icon={3} />
                // className="grid grid-rows-2 gap-4 mt-6 space-x-6  mr-4"
            </div> */}
            {/* <div className="flex  ml-3 mt-6 space-x-6  mr-4"> */}
            <div>
                {/* <Middle /> */}
                {/* <RightBar /> */}
                {/* <Table className='mx-1'/> */}
                <NavBar/>
                <ContainerInf />
            </div>
        </div>
    )
}

export default Container

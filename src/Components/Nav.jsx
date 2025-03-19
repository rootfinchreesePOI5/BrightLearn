import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'

function Nav() {
    const {token} = useContext(AppContext);
    return (
        <div style={!token  ? {display:'none'} : {display:'flex'}} className='!px-[5%] border-b-[1.5px] border-b-gray-600'>
            <ul className='flex items-center gap-6'>
                <NavLink to={'/'}>
                    <p className='text-sm'>Home</p>
                    <hr/>
                </NavLink>
                <NavLink to={'/my-learning'}>
                    <p className='text-sm'>My Learning</p>
                    <hr/>
                </NavLink>
                <NavLink to={'/catalog'}>
                    <p className='text-sm'>Catalog</p>
                    <hr/>
                </NavLink>
                <NavLink to={'/favorites'}>
                    <p className='text-sm'>Favorites</p>
                    <hr/>
                </NavLink>
            </ul>
        </div>
    )
}

export default Nav

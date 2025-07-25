import { Link } from 'react-router-dom';
import {assets, dummyEducatorData} from '../../assets/assets'
import { UserButton,  useUser } from '@clerk/clerk-react';

const EducatorNavbar = () => {
    const educatorData = dummyEducatorData
    const {user} = useUser()
    return (
        <div className='flex items-center justify-between px-4 md:px-8 border-b border-gray-500 py-3 '>
            <Link to='/'>
            <img className="w-28 lg:w-42 cursor-pointer" src={assets.logo} alt="logo" />
            </Link>
            <div className='flex items-center gap-5 text-gray-500 relative'>
                <p>Hi! {user ? user.fullName : 'Sir'}</p>
                {
                    user ? <UserButton/> :  <img src={assets.user_icon} alt="logo" />
                }
            </div>
        </div>
    );

};

export default EducatorNavbar;
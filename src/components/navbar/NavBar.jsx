import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import ListOutlinedIcon from '@mui/icons-material/ListOutlined';
import { useContext } from 'react';
import { DarkModeContext } from '../../context/darkModeContext';

const NavBar = () => {
  
  const {dispatch} = useContext(DarkModeContext)  

  return (
    <div className='navbar'>
        <div className="wrapper">
            <div className="search">
                <input type="text" placeholder='Search...' />
                <SearchOutlinedIcon/>
            </div>
            <div className='items'>
                <div className="item">
                    <LanguageOutlinedIcon style={{marginRight: "5px"}}/>
                    <span>English</span>
                </div>
                <div onClick={() => dispatch({type: "TOGGLE"})} className="item">
                    <DarkModeOutlinedIcon/>
                </div>
                <div className="item">
                    <FullscreenExitOutlinedIcon/>
                </div>
                <div className="item">
                    <NotificationsNoneOutlinedIcon/>
                    <div className="counter">1</div>
                </div>
                <div className="item">
                    <ChatBubbleOutlineOutlinedIcon/>
                    <div className="counter">2</div>
                </div>
                <div className="item">
                    <ListOutlinedIcon/>
                </div>
                <div className="item">
                    <img src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt=""
                    className='avatar'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavBar

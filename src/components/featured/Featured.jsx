import './featured.scss'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";

const Featured = () => {
  return (
    <div className='featured'>
        <div className="top">
            <h1 className="title">Total Revenue</h1>
            <MoreVertIcon fontSize='small'/>
        </div>
        <div className="bottom">
            <div className="featuredChart">
                <CircularProgressbar value={70} text='70%' strokeWidth={5}/>
            </div>
            <p className='title'>Total sales made today</p>
            <p className='amount'>$420</p>
            <p className='desc'>Previous transactions processing. Last payments may not be included.</p>
            <div className="summary">
                <div className="item">
                    <p className="itemTitle">Total</p>
                    <div className="itemResualt negative">
                        <KeyboardArrowDownIcon fontSize='small'/>
                        <span className='resualt'>$12.4k</span>
                    </div>
                </div>
                <div className="item">
                    <p className="itemTitle">Last Week</p>
                    <div className="itemResualt positive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                        <span className='resualt'>$12.4k</span>
                    </div>
                </div>
                <div className="item">
                    <p className="itemTitle">Last Month</p>
                    <div className="itemResualt positive">
                        <KeyboardArrowUpOutlinedIcon fontSize='small'/>
                        <span className='resualtAmount'>$12.4k</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featured

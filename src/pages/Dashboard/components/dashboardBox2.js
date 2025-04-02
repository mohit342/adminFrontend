import { useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import Button from '@mui/material/Button';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosTimer } from "react-icons/io";

const dashboardBox2 = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const ITEM_HEIGHT = 48;
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    
    return (
        <div className="dashboardBox" style={{
            backgroundImage: `linear-gradient(to right, ${props.color?.[0]}, ${props.color?.[1]})`
        }}>
            {props.grow === true ? 
                <span className="chart"><TrendingUpIcon /></span> :
                <span className="chart"><TrendingDownIcon /></span>
            }

            <div className="d-flex w-100">
                <div className="col1">
                    <h4 className="text-white mb-0">Total Orders</h4>
                    <span className="text-white">{props.orderCount?.toLocaleString() || '0'}</span>
                    
                </div>
                <div className="ml-auto">
                    {props.icon && (
                        <span className="icon">  
                            {props.icon}
                        </span>
                    )}
                </div>
            </div>

           
        </div>
    );
}

export default dashboardBox2;
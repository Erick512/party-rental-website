import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHome } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Badge } from '@mui/material';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { styled } from '@mui/system';
import * as React from 'react';
import { ClickAwayListener } from '@mui/material';
import './index.scss'

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
      right: -5,
      top: 50,
      width: 27,
      height: 27,
      fontSize: 15,
      backgroundColor: '#fb6fbeec',
      border: `2px solid rgb(255, 255, 255, .5)`,
      padding: '0 4px',
    },
  }));

  const StyledPopperDiv = styled('div')(
    ({ theme }) => `
    display: flex;
    align-items: center;
    position: absolute;
    padding: 0.5rem;
    background-color: rgb(0, 0, 0, .9);
    // background-color: red;
    color: white;
    opacity: 1;
    left: 30px;
    bottom: -5px;
    margin: 0.25rem 0px;
    width: 150px;
    height: 50px;
    z-index: 99999999999999999999999;
    border-radius: 10px;
  `,
  );

    const ProductSidebar = ({ badgeCount, cart }) => {

    // const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        if(cart === undefined) {
            setAnchorEl(anchorEl ? null : event.currentTarget);
        } else {
            console.log('cart is not empty')
        }
    };

    const handleClickAway = () => {
        setAnchorEl(false);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    return (
    <div className='nav-bar' id='product'>
        <nav>
            <Link to='/'>
                <FontAwesomeIcon icon={faHome} color='white'/>
            </Link>
            <Link to='/tentsPage'>
                Tents
            </Link>
            <Link to='/tablesPage'>
                Tables
            </Link>
            <Link to='/chairsPage'>
                Chairs
            </Link>
            <Link to='/jumpersPage'>
                Jumpers
            </Link>
            <Link to='/balloonsPage'>
                Balloons
            </Link>
            <Link to='/otherPage'>
                Other
            </Link>

            <ClickAwayListener onClickAway={handleClickAway}>
                <StyledBadge badgeContent={badgeCount} className='badge' onClick={handleClick}>
                        <FontAwesomeIcon icon={faCartShopping} />
                </StyledBadge>
            </ClickAwayListener>
            <PopperUnstyled id={id} open={open} anchorEl={anchorEl}>
                <StyledPopperDiv>Cart is empty.</StyledPopperDiv>
            </PopperUnstyled>
        </nav>
    </div>
    )
 }

 export default ProductSidebar
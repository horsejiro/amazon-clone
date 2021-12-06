import React from 'react';
import './Header.css';
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import {useStateValue} from '../StateProvider';
import { auth } from '../firebase'

function Header() {
    const [{ basket, user }, dispatch] = useStateValue();


    const handleAuthentication = () => {
        if(user) {
            auth.signOut();
        }
    }


    return (
        <div className="header">
            <Link to = "/">
                <img
                    className="header__logo"
                    src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
                    alt=""
                />
            </Link>
            

            <div className="header__search">
                <input className="header__searchInput" type="text" />
                <SearchIcon className="header__searchIcon"/>
            </div>

            <div className="header__nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header__option">
                        <span className="header__optionLineOne">こんにちは、{!user ? 'ログイン' : user.email}</span>
                        <span className="header__optionLineTwo">{user ? 'サインアウト' : 'サインイン'}</span>
                    </div>
                </Link>
                
                <Link to='/orders'>
                    <div className="header__option">
                        <span className="header__optionLineOne">戻る</span>
                        <span className="header__optionLineTwo">& 注文する</span>
                    </div>
                </Link>
                <div className="header__option">
                    <span className="header__optionLineOne">あなた</span>
                    <span className="header__optionLineTwo">プライム会員</span>
                </div>

                <Link to = "/checkout">
                    <div className="header__optionBasket">
                        <ShoppingBasketIcon />
                        <span className="header__optionLineTwo header__basket__basketCount">
                            {basket?.length}
                        </span>
                    </div>
                </Link>
                

            </div>
        </div>
    );
}

export default Header;

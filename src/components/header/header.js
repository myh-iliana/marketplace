import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import { routes } from '../../scenes/routes';
import { useStore } from '../../stores/create-store';
import Dropdown from './dropdown/dropdown';
import Search from './search/search';
import Logo from '../svg/logo';
import Saved from '../svg/saved';
import Inbox from '../svg/inbox';
import Ellipse from '../svg/ellipse';
import s from './header.module.scss';

const Header = ({ light = false, search = false }) => {
  const store = useStore();
  const { isLoggedIn } = store.auth;
  const { pathname } = useLocation();

  const render = isLoggedIn ? (
    <li className={s.avatar}>
      <Dropdown />
    </li>
  ) : (
    <Link to={routes.login} href={routes.login}>
      <li>LOGIN</li>
    </Link>
  );

  return (
    <div className={light ? s.lightTheme : s.darkTheme}>
      <div className={s.navContainer}>
        <Link to={routes.home} href={routes.home}>
          <Logo color={light ? '#262525' : 'white'} />
        </Link>
        <ul className={s.nav}>
          <Link to={routes.addProduct} href={routes.addProduct}>
            <li className={s.sell}>SELL</li>
          </Link>
          {render}
          <Link to={routes.savedProducts} href={routes.savedProducts}>
            <li className={s.like}>
              <Saved
                fullFill={pathname === routes.savedProducts && true}
                color={light ? '#2E2E2E' : 'white'}
                width="1.25rem"
                height="1.1875rem"
              />
            </li>
          </Link>
        </ul>
      </div>

      {search && (
        <div className={s.search}>
          <Search />
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  light: PropTypes.bool,
  search: PropTypes.bool,
};

export default observer(Header);

import React from 'react';
import Link from './Link';
import Container from './Container';
import Logo from './Logo';

export default ({ home = '/', pages }) => (
  <div className="navigation">
    <Container className="navigation__inner">
      <Link className="navigation__logo" to={{ pathname: home }}>
        <Logo theme="light" />
      </Link>

      <nav className="navigation__links">
        { 
          pages.map((link, i) => (
            <Link
              key={ `navigation__link${i}` }
              className="navigation__link"
              activeClassName="navigation__link--active"
              to={ `/${link.url}` }>
              { link.title }
            </Link>
          ))
        }
      </nav>
    </Container>
  </div>
);

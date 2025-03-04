import React from 'react';
import { Route, Navigate} from 'react-router-dom'
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest}){
  const isLoggedId = false;

  if(isClosed && !isLoggedId){
    return (
        <Navigate
          to = {{ pathname: '/login', state: { prevPath: rest.location.pathname}
        }}/>
    );
  }

  // eslint-disable-next-line  react/jsx-props-no-spreading

  return <Route {...rest} component = {Component}/>;

}

MyRoute.defaultProps = {
  isClosed: false,
}

MyRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,

  isClosed: PropTypes.bool,
}


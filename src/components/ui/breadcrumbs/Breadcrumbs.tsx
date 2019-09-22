import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import classNames from 'classnames';
import './Breadcrumbs.scss';

interface IRoute {
  title: string;
  link: string;
  active?: boolean;
}

const Breadcrumbs = (props: any) => {
  return (
    <div className={classNames('b-breadcrumbs-simple', props.className)}>
      {props.route}
      {props.routes &&
        props.routes.map((route: IRoute) => (
          <>
            <NavLink
              to={route.link}
              className={classNames('b-breadcrumbs-simple link', {
                active: route.active
              })}
            >
              {route.title} {!route.active && <>/</>}
            </NavLink>
            <Route path={`${route.link}/:path`} component={Breadcrumbs} />
          </>
        ))}
      <span className="b-breadcrumbs-simple active">{props.present}</span>
    </div>
  );
};

export default Breadcrumbs;

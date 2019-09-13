import React, { FunctionComponent } from 'react';
import { NavLink, Route } from 'react-router-dom';
import classNames from 'classnames';
import './BreadcrumbsAdv.scss';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import DeviceBreadcrumbs from './DeviceBreadcrumbs';
import ProjectBreadcrumbs from './ProjectBreadcrumbs';

const routes = [
    { path: '/app/projects/:id', breadcrumb: ProjectBreadcrumbs },
    { path: '/app/projects/:projectId/devices/:id', breadcrumb: DeviceBreadcrumbs },
];

const BreadcrumbsAdv = withBreadcrumbs(routes, { disableDefaults: true })(({ breadcrumbs }) => (
    <div className={classNames('b-breadcrumbs')}>
        {breadcrumbs.map(({ match, breadcrumb }, index) => (
            <div className="b-breadcrumbs-container" key={match.url}>
                <NavLink to={match.url} className={classNames('b-breadcrumbs link')}>
                    {breadcrumb}{' '}
                </NavLink>
                {breadcrumbs.length !== index + 1 && <div className="b-breadcrumbs slash">/</div>}
            </div>
        ))}
    </div>
));

export default BreadcrumbsAdv;

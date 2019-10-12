import React from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import './BreadcrumbsAdv.scss';
import withBreadcrumbs from 'react-router-breadcrumbs-hoc';
import { DeviceBreadcrumb, DeviceBreadcrumbAddChart, DeviceBreadcrumbAddTrigger } from './DeviceBreadcrumbs';
import ProjectBreadcrumbs from './ProjectBreadcrumbs';

const routes = [
  { path: '/app/projects/:id', breadcrumb: ProjectBreadcrumbs },
  {
    path: '/app/projects/:projectId/devices/:id',
    breadcrumb: DeviceBreadcrumb
  },
  {
    path: '/app/projects/:projectId/devices/:id/add-chart',
    breadcrumb: DeviceBreadcrumbAddChart
  },
  {
    path: '/app/projects/:projectId/devices/:id/add-trigger',
    breadcrumb: DeviceBreadcrumbAddTrigger
  }
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

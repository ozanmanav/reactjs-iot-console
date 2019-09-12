import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Breadcrumbs.scss';

interface IRoute {
    title: string;
    link: string;
    active?: boolean;
}

const Breadcrumbs = (props: any) => {
    return (
        <div className={classNames('b-breadcrumbs', props.className)}>
            {props.route}
            {props.routes &&
                props.routes.map((route: IRoute) => (
                    <a className={classNames('b-breadcrumbs link', { active: route.active })}>
                        {route.title} {!route.active && <>/</>}
                    </a>
                ))}
            <span className="b-breadcrumbs active">{props.present}</span>
        </div>
    );
};

export default Breadcrumbs;

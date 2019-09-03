import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Breadcrumbs.scss';

const Breadcrumbs = (props: any) => {
    return (
        <div className={classNames('b-breadcrumbs', props.className)}>
            {props.route}
            {props.link && (
                <Link to={props.link} className="b-breadcrumbs link">
                    {props.linkText} /{' '}
                </Link>
            )}
            <span className="b-breadcrumbs active">{props.present}</span>
        </div>
    );
};

export default Breadcrumbs;

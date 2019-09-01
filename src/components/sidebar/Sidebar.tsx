import React, { FunctionComponent, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '../../icons/dashboard-icon.svg';
import SupportIcon from '../../icons/support-icon.svg';
import SidebarHeader from './SidebarHeader';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { getProjects } from '../../store/project/actions';
import './Sidebar.scss';
import SidebarProjects from './SidebarProjects';

interface SidebarBaseProps {
    router?: any;
    getProjects: typeof getProjects;
}
export const SidebarBase: FunctionComponent<SidebarBaseProps> = ({ router, getProjects }) => {
    useEffect(() => {
        getProjects();
    }, []);

    const activeItem = router.location.pathname.split('/')[2] || '';
    return (
        <React.Fragment>
            <div className="b-sidebar">
                <NavLink to={'/app/dashboard'}>
                    <SidebarHeader text={'Dashboard'} image={DashboardIcon} activeItem={activeItem} />
                </NavLink>
                <SidebarProjects
                // activeItem={activeItem}
                />
                {/* <a text={'Documentation'}
                    href={'https://docs.feynlab.io'}
                    image={SupportIcon} activeItem={activeItem} target="_blank" rel="noopener noreferrer"
                >
                    <LeftNavHeader text={'Documentation'} image={SupportIcon} activeItem={activeItem} />
                </a> */}
                <NavLink to={'/support'}>
                    <SidebarHeader text={'Forums'} image={SupportIcon} activeItem={activeItem} />
                </NavLink>
                <NavLink to={'/support'}>
                    <SidebarHeader text={'Feedback'} image={SupportIcon} activeItem={activeItem} />
                </NavLink>
                <NavLink to={'/support'}>
                    <SidebarHeader text={'Blog'} image={SupportIcon} activeItem={activeItem} />
                </NavLink>
                <NavLink to={'/support'}>
                    <SidebarHeader text={'Support'} image={SupportIcon} activeItem={activeItem} />
                </NavLink>
                {/* <div className={styles['narrow-button']}>
                    <SidebarHeader text={'Narrow'} image={NarrowIcon} activeItem={activeItem} />
                </div> */}
            </div>
        </React.Fragment>
    );
};

const mapStateToProps = (state: AppState) => ({
    router: state.router,
});

export const Sidebar = connect(
    mapStateToProps,
    { getProjects }
)(SidebarBase);

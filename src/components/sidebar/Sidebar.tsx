import React, { FunctionComponent, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '../../icons/dashboard-icon.svg';
import DashboardIconDeactive from '../../icons/dashboard-icon-deactive.svg';
import SupportIcon from '../../icons/support-icon.svg';
import SidebarHeader from './SidebarHeader';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { getProjects } from '../../store/project/actions';
import { setSidebarStatus } from '../../store/ui/actions';
import './Sidebar.scss';
import SidebarProjects from './SidebarProjects';
import Sidebar from 'react-sidebar';
import classNames from 'classnames';

interface SidebarBaseProps {
    router?: any;
    getProjects: typeof getProjects;
    isSidebarOpen: boolean;
    setSidebarStatus: any;
}
export const SidebarBase: FunctionComponent<SidebarBaseProps> = ({ router, getProjects, isSidebarOpen, setSidebarStatus }) => {
    useEffect(() => {
        getProjects();
    }, [getProjects]);

    const checkActiveItem = (text: string): boolean => router.location.pathname.includes(text.toLocaleLowerCase());

    const SidebarInner = () => (
        <div className={classNames('b-sidebar', { _open: isSidebarOpen })}>
            <NavLink to={'/app/dashboard'}>
                <SidebarHeader
                    text={'Dashboard'}
                    image={DashboardIcon}
                    deactiveImage={DashboardIconDeactive}
                    active={checkActiveItem('dashboard')}
                />
            </NavLink>
            <SidebarProjects active={checkActiveItem('projects')} />
            {/* <a text={'Documentation'}
    href={'https://docs.feynlab.io'}
    image={SupportIcon} activeItem={activeItem} target="_blank" rel="noopener noreferrer"
    >
    <LeftNavHeader text={'Documentation'} image={SupportIcon} activeItem={activeItem} />
    </a> */}
            <NavLink to={'/support'}>
                <SidebarHeader text={'Forums'} image={SupportIcon} deactiveImage={SupportIcon} active={checkActiveItem('support')} />
            </NavLink>
            <NavLink to={'/support'}>
                <SidebarHeader text={'Feedback'} image={SupportIcon} deactiveImage={SupportIcon} active={checkActiveItem('feedback')} />
            </NavLink>
            <NavLink to={'/support'}>
                <SidebarHeader text={'Blog'} image={SupportIcon} deactiveImage={SupportIcon} active={checkActiveItem('blog')} />
            </NavLink>
            <NavLink to={'/support'}>
                <SidebarHeader text={'Support'} image={SupportIcon} deactiveImage={SupportIcon} active={checkActiveItem('support')} />
            </NavLink>
            {/* <div className={styles['narrow-button']}>
    <SidebarHeader text={'Narrow'} image={NarrowIcon} activeItem={activeItem} />
    </div> */}
        </div>
    );

    return <SidebarInner />;
};

const mapStateToProps = (state: AppState) => ({
    router: state.router,
    isSidebarOpen: state.ui.isSidebarOpen,
});

export const SidebarWrapped = connect(
    mapStateToProps,
    { getProjects, setSidebarStatus }
)(SidebarBase);
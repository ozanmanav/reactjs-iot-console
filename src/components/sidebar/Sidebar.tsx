import React, { FunctionComponent, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '../../icons/dashboard-icon.svg';
import DashboardIconDeactive from '../../icons/dashboard-icon-deactive.svg';
import SupportIcon from '../../icons/support-icon.svg';
import SidebarHeader from './SidebarHeader';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { getProjects } from '../../store/project/actions';
import './Sidebar.scss';
import SidebarProjects from './SidebarProjects';
import Sidebar from 'react-sidebar';
import { Icon } from '../ui';
import classNames from 'classnames';

interface SidebarBaseProps {
    router?: any;
    getProjects: typeof getProjects;
}
export const SidebarBase: FunctionComponent<SidebarBaseProps> = ({ router, getProjects }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(true);

    useEffect(() => {
        getProjects();
    }, []);

    const checkActiveItem = (text: string): boolean => router.location.pathname.includes(text.toLocaleLowerCase());

    const SidebarInner = () => (
        <div className="b-sidebar">
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

    return (
        <div>
            <Sidebar
                sidebar={<SidebarInner />}
                docked={isSidebarOpen}
                onSetOpen={setSidebarOpen}
                dragToggleDistance={1}
                contentClassName="b-sidebar__content"
                sidebarClassName="b-sidebar__sidebar"
            >
                <div className="b-sidebar__content-icon-container">
                    <Icon
                        icon={`${isSidebarOpen ? 'narrowIcon' : 'narrowIconDeactive'}`}
                        className={classNames('b-sidebar__content-icon-container-icon', { _open: isSidebarOpen })}
                        onClick={() => setSidebarOpen((prevState) => !prevState)}
                    />
                </div>
            </Sidebar>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    router: state.router,
});

export const SidebarWrapped = connect(
    mapStateToProps,
    { getProjects }
)(SidebarBase);

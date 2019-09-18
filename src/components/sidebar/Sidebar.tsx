import React, { FunctionComponent, useEffect } from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import DashboardIcon from '../../icons/dashboard-icon.svg';
import DashboardIconDeactive from '../../icons/dashboard-icon-deactive.svg';
import SupportIcon from '../../icons/support-icon.svg';
import SidebarHeader from './SidebarHeader';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { getProjects } from '../../store/project/actions';
import './Sidebar.scss';
import SidebarProjects from './SidebarProjects';
import { IProject } from '../../store/project/types';

interface SidebarBaseProps {
    router?: any;
    getProjects: typeof getProjects;
    projects?: IProject[];
}
export const SidebarBase: FunctionComponent<SidebarBaseProps> = ({ router, getProjects, projects }) => {
    useEffect(() => {
        getProjects();
    }, [getProjects]);

    const checkActiveItem = (text: string): boolean => router.location.pathname.includes(text.toLocaleLowerCase());

    return (
        <React.Fragment>
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
                    <SidebarHeader
                        text={'Forums'}
                        onlyText={true}
                        image={SupportIcon}
                        deactiveImage={SupportIcon}
                        active={checkActiveItem('support')}
                    />
                </NavLink>
                <NavLink to={'/support'}>
                    <SidebarHeader
                        text={'Feedback'}
                        onlyText={true}
                        image={SupportIcon}
                        deactiveImage={SupportIcon}
                        active={checkActiveItem('feedback')}
                    />
                </NavLink>
                <NavLink to={'/support'}>
                    <SidebarHeader
                        text={'Blog'}
                        onlyText={true}
                        image={SupportIcon}
                        deactiveImage={SupportIcon}
                        active={checkActiveItem('blog')}
                    />
                </NavLink>
                <NavLink to={'/support'}>
                    <SidebarHeader
                        text={'Support'}
                        onlyText={true}
                        image={SupportIcon}
                        deactiveImage={SupportIcon}
                        active={checkActiveItem('support')}
                    />
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
    projects: state.project.projects,
});

export const Sidebar = connect(
    mapStateToProps,
    { getProjects }
)(SidebarBase);

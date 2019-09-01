import React, { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';
import NewProjectIcon from '../../icons/plus-feynlab.png';
import ProjectIcon from '../../icons/project-icon.svg';
import ProjectLogo from '../../icons/ProjectLogo.png';
import SidebarHeader from './SidebarHeader';
import './Sidebar.scss';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { IProject } from '../../store/project/types';

interface ISidebarProjectsBaseProps {
    projects?: IProject[];
}

const SidebarProjectsBase: FunctionComponent<ISidebarProjectsBaseProps> = ({ projects }) => (
    <div className="b-sidebar-projects">
        <SidebarHeader text={'Projects'} image={ProjectIcon} />
        <div className="b-sidebar-projects-list">
            {projects &&
                projects.map((item) => (
                    <NavLink to={`/projects/${item.id}/devices`} key={item.id}>
                        <div key={item.id} className={classnames('b-sidebar-projects-list__item', 'active')}>
                            {/* <img src={item.image || ProjectLogo} alt="logo" className={styles.icon} /> */}
                            <span
                                style={{
                                    display: 'inline-block',
                                    whiteSpace: 'nowrap',
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                }}
                            >
                                {item.projectName}
                            </span>
                        </div>
                    </NavLink>
                ))}
            <NavLink to={'/projects/create'}>
                <div className={classnames('b-sidebar-projects-list__item', 'active')}>
                    <img src={NewProjectIcon} alt="logo" className="b-sidebar-projects__image" />
                    <span>New Project</span>
                </div>
            </NavLink>
        </div>
    </div>
);

const mapStateToProps = (state: AppState) => ({
    projects: state.project.projects,
});

const SidebarProjects = connect(mapStateToProps)(SidebarProjectsBase);

export default SidebarProjects;

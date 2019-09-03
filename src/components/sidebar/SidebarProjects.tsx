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
import { Accordion, useAccordions } from '../ui/accordion';

interface ISidebarProjectsBaseProps {
    projects?: IProject[];
}

const SidebarProjectsBase: FunctionComponent<ISidebarProjectsBaseProps> = ({ projects }) => {
    const { isOpened, toggleAccordion } = useAccordions([]);

    return (
        <div className="b-sidebar-projects">
            <Accordion
                title="Projects"
                isOpen={isOpened(1)}
                toggle={toggleAccordion}
                index={1}
                CustomHeader={() => <SidebarHeader text={'Projects'} image={ProjectIcon} />}
            >
                <div className="b-sidebar-projects-list">
                    {projects &&
                        projects.map((item) => (
                            <NavLink to={`/app/projects/${item.id}`} key={item.id}>
                                <div key={item.id} className={classnames('b-sidebar-projects-list__item', 'active')}>
                                    <img src={/*item.projectImage1x ||*/ ProjectLogo} alt="logo" className="b-sidebar-projects__image" />
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
                    <NavLink to={'/app/projects/create'}>
                        <div className={classnames('b-sidebar-projects-list__item', 'active')}>
                            <img src={NewProjectIcon} alt="logo" className="b-sidebar-projects__image" />
                            <span>New Project</span>
                        </div>
                    </NavLink>
                </div>
            </Accordion>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    projects: state.project.projects,
});

const SidebarProjects = connect(mapStateToProps)(SidebarProjectsBase);

export default SidebarProjects;

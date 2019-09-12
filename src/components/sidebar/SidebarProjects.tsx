import React, { FunctionComponent } from 'react';
import { NavLink, Link } from 'react-router-dom';
import classnames from 'classnames';
import NewProjectIcon from '../../icons/plus-feynlab.png';
import ProjectIcon from '../../icons/project-icon.svg';
import ProjectIconDeactive from '../../icons/project-icon-deactive.svg';
import ProjectLogo from '../../icons/ProjectLogo.png';
import SidebarHeader from './SidebarHeader';
import './Sidebar.scss';
import { AppState } from '../../store';
import { connect } from 'react-redux';
import { IProject } from '../../store/project/types';
import { Accordion, useAccordions } from '../ui/accordion';

interface ISidebarProjectsBaseProps {
    projects?: IProject[];
    router?: any;
    active: boolean;
}

const SidebarProjectsBase: FunctionComponent<ISidebarProjectsBaseProps> = ({ projects, active, router }) => {
    const { isOpened, toggleAccordion } = useAccordions([1]);
    const projectId = router.location.pathname.split('/')[3] || '';

    return (
        <div className="b-sidebar-projects">
            <Accordion
                title="Projects"
                isOpen={isOpened(1)}
                toggle={toggleAccordion}
                index={1}
                CustomHeader={() => (
                    <SidebarHeader text={'Projects'} image={ProjectIcon} deactiveImage={ProjectIconDeactive} active={active} />
                )}
            >
                <div className="b-sidebar-projects-list">
                    {projects &&
                        projects.map((item) => (
                            <Link to={`/app/projects/${item.id}`} key={item.id}>
                                <div
                                    key={item.id}
                                    className={classnames('b-sidebar-projects-list__item', { active: projectId === item.id })}
                                >
                                    <img src={/*item.projectImage1x ||*/ ProjectLogo} alt="logo" className="b-sidebar-projects__image" />
                                    <span>{item.projectName}</span>
                                </div>
                            </Link>
                        ))}
                    <NavLink to={'/app/projects/create'}>
                        <div
                            className={classnames('b-sidebar-projects-list__item new-project', {
                                active: router.location.pathname.includes('create'),
                            })}
                        >
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
    router: state.router,
});

const SidebarProjects = connect(mapStateToProps)(SidebarProjectsBase);

export default SidebarProjects;

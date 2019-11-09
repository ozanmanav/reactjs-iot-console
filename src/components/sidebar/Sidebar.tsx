import React, { FunctionComponent, useEffect } from 'react';
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
import { IProject } from '../../store/project/types';
import { OnboardModal } from '../modals/onboardModal';
import { useModal } from '../ui';

interface SidebarBaseProps {
  router?: any;
  getProjects?: () => void;
  projects?: IProject[];
}
export const SidebarBase: FunctionComponent<SidebarBaseProps> = ({ router, getProjects }) => {
  const { open: openOnboardModal, hide: hideOnboardModal, isOpen: isOpenOnboardModal } = useModal();
  useEffect(() => {
    if (getProjects) {
      getProjects();
    }
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
        <a href="https://forums.qubitro.com">
          <SidebarHeader
            text={'Forums'}
            onlyText={true}
            image={SupportIcon}
            deactiveImage={SupportIcon}
            active={checkActiveItem('support')}
          />
        </a>
        <a href="https://blog.qubitro.com">
          <SidebarHeader
            text={'Feedback'}
            onlyText={true}
            image={SupportIcon}
            deactiveImage={SupportIcon}
            active={checkActiveItem('feedback')}
          />
        </a>
        <a href="https://feedback.qubitro.com">
          <SidebarHeader
            text={'Blog'}
            onlyText={true}
            image={SupportIcon}
            deactiveImage={SupportIcon}
            active={checkActiveItem('blog')}
          />
        </a>
        <a href="mailto:support@qubitro.com">
          <SidebarHeader
            text={'Support'}
            onlyText={true}
            image={SupportIcon}
            deactiveImage={SupportIcon}
            active={checkActiveItem('support')}
          />
        </a>
        <div onClick={openOnboardModal}>
          <SidebarHeader
            text={'Onboarding'}
            onlyText
            deactiveImage={DashboardIconDeactive}
            active={checkActiveItem('onboarding')}
          />
        </div>
      </div>
      <OnboardModal hide={hideOnboardModal} isOpen={isOpenOnboardModal} onSubmitSuccess={() => console.log('ok')} />
    </React.Fragment>
  );
};

const mapStateToProps = (state: AppState): any => ({
  router: state.router,
  projects: state.project.projects
});

export const Sidebar = connect(
  mapStateToProps,
  { getProjects }
)(SidebarBase);

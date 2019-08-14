import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import styles from './LeftNav.scss';
import DashboardIcon from '../../Assets/dashboard-icon.svg';
import SupportIcon from '../../Assets/support-icon.svg';
import NarrowIcon from '../../Assets/narrow-icon.svg';
import LeftNavLogo from './LeftNavLogo';
import LeftNavHeader from './LeftNavHeader';
import LeftNavProjectsContainer from './LeftNavProjectsContainer';
import { getProjects } from '../../../redux/actions/projectActions';


class LeftNav extends React.Component {
  componentWillMount() {
    this.props.getProjects();
  }

  render() {
    const activeItem = this.props.location.pathname.split('/')[2] || '';
    return (
      <React.Fragment>
        <div className={styles.container}>
          <LeftNavLogo />
          <NavLink to={'/dashboard'}>
            <LeftNavHeader text={'Dashboard'} image={DashboardIcon} activeItem={activeItem} />
          </NavLink>
          <LeftNavProjectsContainer
            items={this.props.projects.list}
            activeItem={activeItem}
          />
          <a
            text={'Documentation'}
            href={'https://docs.feynlab.io'}
            image={SupportIcon} activeItem={activeItem} target="_blank" rel="noopener noreferrer"
          >
            <LeftNavHeader text={'Documentation'} image={SupportIcon} activeItem={activeItem} />
          </a>
          <NavLink to={'/support'}>
            <LeftNavHeader text={'Forums'} image={SupportIcon} activeItem={activeItem} />
          </NavLink>
          <NavLink to={'/support'}>
            <LeftNavHeader text={'Feedback'} image={SupportIcon} activeItem={activeItem} />
          </NavLink>
          <NavLink to={'/support'}>
            <LeftNavHeader text={'Blog'} image={SupportIcon} activeItem={activeItem} />
          </NavLink>
          <NavLink to={'/support'}>
            <LeftNavHeader text={'Support'} image={SupportIcon} activeItem={activeItem} />
          </NavLink>
          <div className={styles['narrow-button']}>
            <LeftNavHeader text={'Narrow'} image={NarrowIcon} activeItem={activeItem} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

LeftNav.propTypes = {
  router: PropTypes.object.isRequired,
  projects: PropTypes.object.isRequired,
  getProjects: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  router: state.router,
  projects: state.projects
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProjects
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LeftNav));

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './LeftNav.scss';
import NewProjectIcon from '../../Assets/plus-feynlab.png';
import ProjectIcon from '../../Assets/project-icon.svg';
import ProjectLogo from '../../Assets/ProjectLogo.png';
import LeftNavHeader from './LeftNavHeader';


const LeftNavProjectsContainer = props => (
  <div className={styles['nav-container']}>
    <LeftNavHeader text={'Projects'} image={ProjectIcon} />
    <div className={styles['nav-list']}>
      {
        props.items.map(item => (
          <NavLink to={`/projects/${item.id}/devices`} key={item.id}>
            <div
              key={item.id}
              className={classnames(
                styles['nav-item'],
                { [styles.active]: props.activeItem === `${item.id}` }
              )}
            >
              <img src={item.image || ProjectLogo} alt="logo" className={styles.icon} />
              <span
                style={{
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                }}
              >
            {item.projectName}
            </span>
            </div>
          </NavLink>
        ))
      }
      <NavLink to={'/projects/create'}>
        <div
          className={classnames(
            styles['nav-item'],
            { [styles.active]: props.activeItem === '/create/project' }
          )}
        >
          <img src={NewProjectIcon} alt="logo" className={styles.icon} />
          <span>New Project</span>
        </div>
      </NavLink>
    </div>
  </div>
);

LeftNavProjectsContainer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    projectName: PropTypes.string.isRequired,
    image: PropTypes.string,
    id: PropTypes.string.isRequired,
  })).isRequired,
  activeItem: PropTypes.string.isRequired,
};

export default LeftNavProjectsContainer;

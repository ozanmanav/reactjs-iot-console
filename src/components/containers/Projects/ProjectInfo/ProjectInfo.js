import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import styles from './ProjectInfo.scss';
import InfoLoading from '../../../presentational/InfoLoading/InfoLoading';

class ProjectInfo extends React.Component {
  render() {
    const { projectName, projectDescription, projectImage } = this.props.projectDetails;
    return (
      <div className={styles.container}>
        {
          this.props.getByIdLoading ?
            <InfoLoading /> :
            <React.Fragment>
              <img src={projectImage} alt="project" className={styles['project-image']} />
              <div className={styles['info-area']}>
                <h1 className={styles.title}>{projectName}</h1>
                <p className={styles.description}>{projectDescription}</p>
              </div>
            </React.Fragment>
        }
      </div>
    );
  }
}

ProjectInfo.propTypes = {
  router: PropTypes.object,
  projectDetails: PropTypes.shape({
    id: PropTypes.string,
    projectName: PropTypes.string,
    projectDescription: PropTypes.string,
    projectImage: PropTypes.string,
  }),
  getByIdLoading: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  projectDetails: state.projects.projectDetails,
  getByIdLoading: state.projects.getByIdLoading,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({

}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProjectInfo);

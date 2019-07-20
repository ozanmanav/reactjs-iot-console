import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import uniq from 'lodash/uniq';
import styles from './Activities.scss';
import { getActivitiesByProject } from '../../../../redux/actions/projectActions';
import ActivityCard from '../../../presentational/ActivityCard/ActivityCard';

class Activities extends React.Component {
  componentDidMount() {
    this.props.getActivitiesByProject(this.props.match.params.projectId);
  }

  render() {
    const sectionHeaders = uniq(this.props.activities
      .map(a => moment.unix(a.activityCreated).format('dddd, MMMM Do YYYY')));
    return (
      <div>
        {
          sectionHeaders.map(section => (
            <div key={section}>
              <h1 className={styles['section-header']}>
                {section.split(',')[0]},
                <span className={styles.format}>{section.split(',')[1]}</span>
              </h1>
              {
                this.props.activities
                  .filter(a => moment.unix(a.activityCreated)
                    .format('dddd, MMMM Do YYYY') === section).map(a => (
                  <ActivityCard
                    key={a.activityCreated}
                    image={a.activityImage}
                    description={a.activityDescription}
                    time={moment.unix(a.activityCreated)
                      .format('HH:mm:ss ZZ')}
                  />
                ))
              }
            </div>
          ))
        }
      </div>
    );
  }
}

Activities.propTypes = {
  router: PropTypes.object.isRequired,
  getActivitiesByProject: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  router: state.router,
  activities: state.projects.activities,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getActivitiesByProject,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Activities);

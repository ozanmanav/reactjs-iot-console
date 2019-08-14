import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Switch, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Breadcrumbs from '../../containers/Breadcrumbs/Breadcrumbs';
import ProjectInfo from '../../containers/Projects/ProjectInfo/ProjectInfo';
import TabsMenu from '../../containers/Tabs/TabsMenu';
import { getProjectById } from '../../../redux/actions/projectActions';
import Devices from '../../containers/Projects/Devices/Devices';
import TriggersTab from '../../containers/Projects/Triggers/TriggersTab';
import Activities from '../../containers/Projects/Activities/Activities';
import Settings from '../../containers/Projects/Settings/Settings';

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: '',
      present: ''
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) this.props.getProjectById(id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.id !== prevProps.match.params.id) {
      this.props.getProjectById(this.props.match.params.id);
    }
  }

  render() {
    const pathName = this.props.location.pathname;

    if (pathName && pathName.includes('create')) {
      return null;
    }
    
    const { projectName } = this.props.projectDetails;
    return (
      <React.Fragment>
        <Breadcrumbs
          route={'Projects / '}
          present={projectName}
        />
        <ProjectInfo />
        <TabsMenu items={['devices', 'triggers', 'activities', 'settings']} />
        <Switch>
          <Route exact path={'/projects/:id/devices'} component={Devices} />
          <Route path={'/projects/:projectId/triggers'} component={TriggersTab} />
          <Route path={'/projects/:projectId/activities'} component={Activities} />
          <Route path={'/projects/:projectId/collaborators'} component={() => <h1>Colla</h1>} />
          <Route path={'/projects/:projectId/settings'} component={Settings} />
        </Switch>
      </React.Fragment>
    );
  }
}

Project.propTypes = {
  router: PropTypes.object.isRequired,
  getProjectById: PropTypes.func.isRequired,
  projectDetails: PropTypes.shape({
    id: PropTypes.string,
    projectName: PropTypes.string,
    projectDescription: PropTypes.string,
    projectImage: PropTypes.string,
  }),
};

const mapStateToProps = (state) => ({
  router: state.router,
  projectDetails: state.projects.projectDetails,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProjectById
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Project));

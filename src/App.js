import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Dimmer, Loader } from 'semantic-ui-react';
import { checkUser } from './redux/actions/authActions';
import PrivateRoutes from './components/routes/PrivateRoutes';
import PublicRoutes from './components/routes/PublicRoutes';

class App extends React.Component {
  componentDidMount() {
    this.props.checkUser();
  }

  renderRoutes = () => {
    if (this.props.auth.loading) {
      return (<Dimmer active inverted>
        <Loader inverted>Loading</Loader>
      </Dimmer>);
    }
    if (this.props.auth.loggedIn) {
      return <PrivateRoutes />;
    }
    return <PublicRoutes />;
  };

  render() {
    return (
      this.renderRoutes()
    );
  }
}

App.propTypes = {
  router: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  checkUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ auth, router }) => ({
  router,
  auth
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  checkUser
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

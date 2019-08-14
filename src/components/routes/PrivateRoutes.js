import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route } from 'react-router';
import Main from '../views/Private/Main';
import LeftNav from '../containers/LeftNav/LeftNav';


class PrivateRoutes extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <LeftNav />
        <Route path={'/'} component={Main} />

      </div >
    );
  }
}

PrivateRoutes.propTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  router: state.router
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoutes);

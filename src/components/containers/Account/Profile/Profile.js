import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import styles from './Profile.scss';
// import PropTypes from 'prop-types';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    );
  }
}

Profile.propTypes = {};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Profile);

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class ResetPasswordSent extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h2>Reset E-mail Password Has Sent to Your Email</h2>
        <p>We have sent a reset link to your e-mail.
          Please proceed to your e-mail and reset your password.</p>
      </React.Fragment>
    );
  }
}

ResetPasswordSent.propTypes = {
  router: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  router: state.router
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordSent);

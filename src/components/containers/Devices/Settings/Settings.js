import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Button, Modal, Popup } from 'semantic-ui-react';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import styles from './Settings.scss';
import {
  getApiToken,
  editDevice,
  deleteDevice,
  closeMessage
} from '../../../../redux/actions/deviceActions';
import Success from '../../../presentational/Messages/Success/Success';
import Error from '../../../presentational/Messages/Error/Error';
// import PropTypes from 'prop-types';

const loadingCss = css`
  border: 4px solid;
  margin-top: 1px;
`;

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deleteModalOpen: false,
      copied: false,
      deviceName: '',
      deviceDescription: '',
      deviceLocation: '',
      updated: false
    };
    this.copyRef = React.createRef();
  }

  static getDerivedStateFromProps(props, state) {
    if (!state.updated && props.deviceDetails.deviceName) {
      return {
        deviceName: props.deviceDetails.deviceName,
        deviceDescription: props.deviceDetails.deviceDescription,
        deviceLocation: props.deviceDetails.deviceLocation,
        updated: true
      };
    }
    return null;
  }

  componentDidMount() {
    const { projectId, deviceId } = this.props.match.params;
    this.props.getApiToken(projectId, deviceId);
  }

  componentWillUnmount() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  handleOpen = () => {
    this.timeout = setTimeout(() => {
      this.setState({ copied: false });
    }, 3000);
  };

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = () => {
    const { deviceName, deviceDescription, deviceLocation } = this.state;
    if (!deviceName || !deviceDescription || !deviceLocation) {
      return console.error('Empty fields');
    }
    const data = {
      deviceModel: this.props.deviceDetails.deviceModel,
      deviceName,
      deviceDescription,
      location: deviceLocation
    };
    const { projectId, deviceId } = this.props.match.params;
    this.props.editDevice(projectId, deviceId, data);
  };

  handleDelete = () => {
    this.setState({ deleteModalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ deleteModalOpen: false });
  };

  deleteConfirm = () => {
    this.setState({ deleteModalOpen: false });
    const { projectId, deviceId } = this.props.match.params;
    this.props.deleteDevice(projectId, deviceId);
  };

  render() {
    return (
      <div style={{ position: 'relative' }}>
        <Success
          close={this.props.closeMessage}
          text={this.props.update.result}
          in={!!this.props.update.result}
        />
        <Error
          close={this.props.closeMessage}
          text={'Something went wrong. Please try again.'}
          in={!!this.props.update.error}
        />
        <Modal
          open={this.state.deleteModalOpen}
          onClose={this.handleModalClose}
          size='small'
        >
          <Modal.Content>
            <h3>Are you sure you want to delete device?</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleModalClose}>No</Button>
            <Button color='red' onClick={this.deleteConfirm}>Yes</Button>
          </Modal.Actions>
        </Modal>
        <div className={styles['api-container']} >
          <label htmlFor="api-key" className={styles['api-label']}>API Key</label>
          <input
            id={'api-key'}
            ref={(input) => { this.copyRef = input; }}
            type="text" defaultValue={this.props.apiToken}
            disabled className={styles['api-input']}
          />
          <Popup
            trigger={<CopyToClipboard
              text={this.copyRef.value}
              onCopy={() => this.setState({ copied: true })}
            >
              <div className={styles['api-copy-container']}>
                <div className={styles['api-copy-icon']} />
              </div>
            </CopyToClipboard>}
            content={'Copied!'}
            open={this.state.copied}
            onOpen={this.handleOpen}
            position='right center'
            inverted
          />
        </div>
        <div className={styles['device-model-container']}>
          <label className={styles['device-model-label']} htmlFor="device-model">
            Device Model
          </label>
          <input
            className={styles['device-model-input']}
            type="text" id={'device-model'}
            defaultValue={this.props.deviceDetails.deviceModel} disabled
          />
        </div>
        <div className={styles['input-container']}>
          <label htmlFor="deviceName" className={styles['input-label']}>Device Name</label>
          <input
            onChange={this.handleChange}
            id={'deviceName'}
            name={'deviceName'}
            type="text" className={styles.input} value={this.state.deviceName}
          />
        </div>
        <div className={styles['input-container']}>
          <label htmlFor="deviceDescription" className={styles['input-label']}>
            Device Description
          </label>
          <input
            onChange={this.handleChange}
            id={'deviceDescription'}
            name={'deviceDescription'}
            type="text" className={styles.input} value={this.state.deviceDescription}
          />
        </div>
        <div className={styles['input-container']}>
          <label htmlFor="deviceLocation" className={styles['input-label']}>
            Device Location
          </label>
          <input
            onChange={this.handleChange}
            id={'deviceLocation'}
            name={'deviceLocation'}
            type="text" className={styles.input} value={this.state.deviceLocation}
          />
        </div>
        <div className={styles['bottom-container']}>
          <button
            className={styles.submit}
            onClick={this.handleSubmit}
          >{this.props.update.loading ?
            <ClipLoader size={24} css={loadingCss} color={'#fff'} /> : 'Save'}
          </button>
          <div className={styles.delete} onClick={this.handleDelete} />
        </div>
      </div>
    );
  }
}

Settings.propTypes = {};

const mapStateToProps = ({ device }) => ({
  apiToken: device.apiToken,
  getApiTokenLoading: device.getApiTokenLoading,
  getApiTokenError: device.getApiTokenError,
  deviceDetails: device.deviceDetails,
  update: device.update,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getApiToken,
  editDevice,
  deleteDevice,
  closeMessage,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

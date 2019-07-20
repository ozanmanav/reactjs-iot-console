import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Modal } from 'semantic-ui-react';
import { ClipLoader } from 'react-spinners';
import { css } from '@emotion/core';
import styles from './Settings.scss';
import Success from '../../../presentational/Messages/Success/Success';
import Error from '../../../presentational/Messages/Error/Error';
import {
  closeMessage,
  deleteProject,
  editProject,
  getProjectById
} from '../../../../redux/actions/projectActions';
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
      projectName: '',
      projectDescription: '',
      updated: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);
    if (!state.updated && props.projectDetails.projectName) {
      return {
        projectName: props.projectDetails.projectName,
        projectDescription: props.projectDetails.projectDescription,
        updated: true
      };
    }
    return null;
  }

  componentDidMount() {
    const { projectId } = this.props.match.params;
    this.props.getProjectById(projectId);
  }

  componentWillUnmount() {
    this.props.closeMessage();
  }

  handleChange = ({ target }) => {
    this.setState({
      [target.name]: target.value
    });
  };

  handleSubmit = () => {
    const { projectName, projectDescription } = this.state;
    if (!projectName || !projectDescription) {
      return console.error('Empty fields');
    }
    const data = {
      name: projectName,
      description: projectDescription,
    };
    const { projectId } = this.props.match.params;
    this.props.editProject(projectId, data);
  };

  handleDelete = () => {
    this.setState({ deleteModalOpen: true });
  };

  handleModalClose = () => {
    this.setState({ deleteModalOpen: false });
  };

  deleteConfirm = () => {
    this.setState({ deleteModalOpen: false });
    const { projectId } = this.props.match.params;
    this.props.deleteProject(projectId);
  };

  render() {
    return (
      <React.Fragment>
        <Success
          close={this.props.closeMessage}
          text={this.props.update.result}
          in={!!this.props.update.result}
        />
        <Error
          close={this.props.closeMessage}
          text={this.props.update.error}
          in={!!this.props.update.error}
        />
        <Success
          close={this.props.closeMessage}
          text={this.props.delete.result}
          in={!!this.props.delete.result}
        />
        <Error
          close={this.props.closeMessage}
          text={this.props.delete.error}
          in={!!this.props.delete.error}
        />
        <div style={{ position: 'relative' }}>
          <Modal
            open={this.state.deleteModalOpen}
            onClose={this.handleModalClose}
            size='small'
          >
            <Modal.Content>
              <h3>Are you sure you want to delete project?</h3>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' onClick={this.handleModalClose}>No</Button>
              <Button color='red' onClick={this.deleteConfirm}>Yes</Button>
            </Modal.Actions>
          </Modal>
          <div className={styles['input-container']}>
            <label htmlFor="projectName" className={styles['input-label']}>Project Name</label>
            <input
              onChange={this.handleChange}
              id={'projectName'}
              name={'projectName'}
              type="text" className={styles.input} value={this.state.projectName}
            />
          </div>
          <div className={styles['input-container']}>
            <label htmlFor="projectDescription" className={styles['input-label']}>
              Project Description
            </label>
            <input
              onChange={this.handleChange}
              id={'projectDescription'}
              name={'projectDescription'}
              type="text" className={styles.input} value={this.state.projectDescription}
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
      </React.Fragment>
    );
  }
}

Settings.propTypes = {};

const mapStateToProps = ({ projects }) => ({
  projectDetails: projects.projectDetails,
  update: projects.update,
  delete: projects.delete,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProjectById,
  deleteProject,
  editProject,
  closeMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Settings);

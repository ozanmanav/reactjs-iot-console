import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import FloatingLabelField from '../../../presentational/FloatingLabelInput/FloatingLabelField';
import styles from './Create.scss';
import { closeMessage, createProject } from '../../../../redux/actions/projectActions';
import Error from '../../../presentational/Messages/Error/Error';
import Success from '../../../presentational/Messages/Success/Success';
// import PropTypes from 'prop-types';

class Create extends Component {
  state = {
    name: '',
    description: '',
    errorMessage: '',
  };

  componentWillUnmount() {
    this.props.closeMessage();
  }

  handleChange = ({ target }) => {
    console.log(target.id);
    this.setState({
      [target.id]: target.value
    });
  };

  submit = () => {
    const { name, description } = this.state;
    if (!name || !description) {
      this.setState({
        errorMessage: 'Please fill all the required fields.'
      });
    } else {
      this.props.createProject({ name, description });
    }
  };

  closeMessage = () => this.setState({ errorMessage: '' });

  render() {
    return (
      <React.Fragment>
        {
          this.props.create.error &&
          <Error
            in={this.props.create.error}
            text={this.props.create.error}
            close={this.props.closeMessage}
          />
        }
        {
          !!this.state.errorMessage &&
          <Error
            in={!!this.state.errorMessage}
            text={this.state.errorMessage}
            close={this.closeMessage}
          />
        }
        {
          !!this.props.create.result &&
          <Success
            in={!!this.props.create.result}
            text={this.props.create.result || ''}
            close={this.props.closeMessage}
          />
        }
        <div className={styles.container}>
          <Breadcrumbs
            route={'Projects / '}
            present={'Create Project'}
          />
          <h1 className={styles.header}>Create Project</h1>
          <FloatingLabelField
            label={'Name'}
            onChange={this.handleChange}
            value={this.state.name}
            id={'name'}
            type={'text'}
          />
          <FloatingLabelField
            label={'Description'}
            onChange={this.handleChange}
            value={this.state.description}
            id={'description'}
            type={'text'}
          />
          <p className={styles.note}>
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Integer tincidunt ullamcorper nisi vitae elementum.
            Nulla luctus velit vel ornare aliquam.
            Nulla fringilla et dui eget tempus.
            Nunc at justo suscipit, congue massa id, suscipit urna. */}
          </p>
          <button className={styles.submit} onClick={this.submit}>
            {
              this.props.create.loading ?
                <ClipLoader size={20} color={'#fff'} /> :
                'Create Project'
            }
          </button>
        </div>
      </React.Fragment>
    );
  }
}

Create.propTypes = {};

const mapStateToProps = (state) => ({
  create: state.projects.create,
  router: state.router,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createProject,
  closeMessage
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Create);

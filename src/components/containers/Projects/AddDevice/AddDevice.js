import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import styles from './AddDevice.scss';
import {
  addDevice,
  getBrands,
  getModels,
  getProjectById
} from '../../../../redux/actions/projectActions';
import FloatingLabelField from '../../../presentational/FloatingLabelInput/FloatingLabelField';

class AddDevice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      model: '',
      name: '',
      description: '',
      location: '',
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    if (id) this.props.getProjectById(id);
    this.props.getBrands();
  }

  handleBrandChange = (e, { value }) => {
    this.setState({ brand: value });
    this.props.getModels(value);
  };

  handleModelChange = (e, { value }) => {
    this.setState({ model: value });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.id]: target.value });
  };

  handleSubmit = () => {
    const { brand, model, name, description, location } = this.state;
    this.props.addDevice(this.props.match.params.id, {
      deviceModel: model,
      deviceBrand: brand,
      deviceName: name,
      deviceDescription: description,
      location
    });
  };

  render() {
    console.log(this.props);
    const { projectName } = this.props.projectDetails;
    const brands = this.props.brands.result.map(b => ({
      key: b.id,
      value: b.id,
      text: b.brand,
      image: b.image
    }));
    const models = this.props.models.result.map(m => ({
      key: m.id,
      value: m.id,
      text: m.model,
      image: m.image
    }));
    return (
      <React.Fragment>
        <Breadcrumbs route={`Projects / ${projectName} / `} present={'Add Device'} />
        <h1 className={styles.title}>Add Device</h1>
        <p className={styles.description}>
          Choose your favorite device to work with.
        </p>
        <h6 className={styles['select-device']}>DEVICE DETAILS</h6>
        <Dropdown
          placeholder='Select Brand'
          search
          selection
          options={brands}
          loading={this.props.brands.loading}
          className={styles.dropdown}
          onChange={this.handleBrandChange}
        />
        <Dropdown
          placeholder='Select Model'
          search
          selection
          disabled={models.length === 0}
          options={models}
          loading={this.props.models.loading}
          className={styles.dropdown}
          onChange={this.handleModelChange}
        />
        <div style={{ width: 600 }}>
          <FloatingLabelField
            label={'Device Name'}
            onChange={this.handleChange}
            value={this.state.name}
            id={'name'}
            type={'text'}
          />
          <FloatingLabelField
            label={'Device Description'}
            onChange={this.handleChange}
            value={this.state.description}
            id={'description'}
            type={'text'}
          />
          <FloatingLabelField
            label={'Device Location'}
            onChange={this.handleChange}
            value={this.state.location}
            id={'location'}
            type={'text'}
          />
          <p className={styles.note}>
            Visit <a href="https://feedback.feynlab.io">our feedback platform</a> if you want to see 
            more brand/model options.
          </p>
          <button className={styles.submit} onClick={this.handleSubmit}>
            Save
          </button>
        </div>
      </React.Fragment>
    );
  }
}

AddDevice.propTypes = {
  getProjectById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  projectDetails: state.projects.projectDetails,
  brands: state.projects.brands,
  models: state.projects.models,
  addDevice: state.projects.addDevice,
  router: state.router
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getProjectById,
  getBrands,
  getModels,
  addDevice,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddDevice);

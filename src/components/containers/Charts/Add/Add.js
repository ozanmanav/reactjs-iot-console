import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import indexOf from 'lodash/indexOf';
import pull from 'lodash/pull';
import concat from 'lodash/concat';
import has from 'lodash/has';
import update from 'immutability-helper';
import { TwitterPicker } from 'react-color';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import styles from './Add.scss';
import FloatingLabelField from '../../../presentational/FloatingLabelInput/FloatingLabelField';
import { getDeviceById } from '../../../../redux/actions/deviceActions';
import { createChart } from '../../../../redux/actions/chartActions';

const classnames = require('classnames');
// import PropTypes from 'prop-types';

class AddChart extends Component {
  state = {
    selectedEntities: [],
    entitiesTypes: {},
    entitiesColors: {},
    entityErrors: [],
    openPalette: '',
    baseColor: '#000',
    name: '',
    nameError: false,
  };

  componentDidMount() {
    const { projectId, deviceId } = this.props.match.params;
    this.props.getDeviceById(projectId, deviceId);
  }

  handleChange = ({ target }) => {
    this.setState(() => ({
      name: target.value,
      nameError: false
    }));
  };

  selectEntity = ({ target }) => {
    const id = target.id;
    if (indexOf(this.state.selectedEntities, id) !== -1) {
      this.setState((prevState) => {
        const newState = pull(prevState.selectedEntities, id);
        return ({
          selectedEntities: newState
        });
      });
    } else {
      this.setState((prevState) => {
        const newState = concat(prevState.selectedEntities, id);
        return ({
          selectedEntities: newState
        });
      });
    }
  };

  handleTypeSelect = (e, { name, value }) => {
    const newTypes = update(this.state.entitiesTypes, {
      [name]: { $set: value }
    });
    const newErrors = pull(this.state.entityErrors, name);
    this.setState(() => ({
      entitiesTypes: newTypes,
      entityErrors: newErrors,
    }));
  };

  handleSubmit = () => {
    let hasError = false;
    for (let i = 0; i < this.state.selectedEntities.length; i++) {
      if (!has(this.state.entitiesTypes, this.state.selectedEntities[i])) {
        hasError = true;
        this.setState((prevState) => {
          const newState = concat(prevState.entityErrors, this.state.selectedEntities[i]);
          return ({
            entityErrors: newState
          });
        });
      }
    }

    if (this.state.name === '') {
      hasError = true;
      this.setState(() => ({
        nameError: true
      }));
    }
    if (!hasError && this.state.selectedEntities.length > 0) {
      const { name, entitiesTypes, selectedEntities, entitiesColors } = this.state;
      const { projectId, deviceId } = this.props.match.params;
      const elements = selectedEntities.map((e) => ({
        type: entitiesTypes[e],
        key: e,
        color: entitiesColors[e]
      }));
      const data = {
        name,
        deviceId,
        projectId,
        type: 'Composed',
        elements
      };
      this.props.createChart(data);
    }
  };

  togglePalette = (e) => {
    if (this.state.openPalette === e) {
      this.setState(() => ({
        openPalette: ''
      }));
    } else {
      this.setState(() => ({
        openPalette: e
      }));
    }
  };

  handleChangeComplete = (color, event, id) => {
    const newColors = update(this.state.entitiesColors, {
      [id]: { $set: color.hex }
    });

    this.setState(() => ({
      entitiesColors: newColors,
    }));
  };

  render() {
    const { projectName, id: projectId } = this.props.projectDetails;
    const { deviceName, id: deviceId } = this.props.deviceDetails;
    return (
      <div className={styles.container}>
        <Breadcrumbs
          present={'Add Graph'}
          route={`Projects / ${projectName} / Devices / ${deviceName} / `}
          linkText={'Graphs'}
          link={`/projects/${projectId}/devices/${deviceId}/graphs`}
        />
        <h1 className={styles.header}>Add Graph</h1>
        <div className={styles.group}>
          <h4 className={styles.description}>
            Choose the data to visualize or analyze.
          </h4>
          <FloatingLabelField
            label={'Graph Name'}
            onChange={this.handleChange}
            value={this.state.name}
            id={'name'}
            type={'text'}
          />
          {
            this.state.nameError &&
              <span className={styles['name-error']}>Name field cannot be empty.</span>
          }
          <h6 className={styles['select-header']}>SELECT ENTITY / ENTITIES</h6>
          <div className="row">
            {
              this.props.deviceDetails.deviceEntities.map(e => (
                <div className="col-6 col-sm-6 col-md-6" key={`entity-${e}`}>
                  <div
                    className={classnames(styles['entity-card'], {
                      [styles.error]: indexOf(this.state.entityErrors, e) !== -1
                    })}
                  >
                    <div className={styles['entity-header']}>
                      <i
                        className={classnames(styles['entity-header-checkbox'], 'material-icons')}
                        onClick={this.selectEntity}
                        id={e}
                      >
                        {indexOf(this.state.selectedEntities, e) !== -1 ?
                          'check_box' :
                          'check_box_outline_blank'
                        }
                      </i>
                      <span>{e}</span>
                      <button
                        disabled={indexOf(this.state.selectedEntities, e) === -1}
                        onClick={() => this.togglePalette(e)}
                        style={{
                          marginLeft: 'auto', cursor: 'pointer', border: 'none', outline: 'none'
                        }}
                      >
                        <i
                          className="material-icons"
                          style={{
                            color: indexOf(this.state.selectedEntities, e) !== -1 ?
                              this.state.entitiesColors[e] || this.state.baseColor :
                              '#bfbfbf'
                          }}
                        >
                          palette
                        </i>
                      </button>

                      {
                        this.state.openPalette === e &&
                        <div className={styles['color-picker']}>
                          <TwitterPicker
                            color={this.state.entitiesColors[e] || this.state.baseColor}
                            onChangeComplete={(color, event) =>
                              this.handleChangeComplete(color, event, e)}
                          />
                        </div>
                      }
                    </div>
                    <Dropdown
                      placeholder='Select Type'
                      search
                      name={e}
                      disabled={indexOf(this.state.selectedEntities, e) === -1}
                      fluid
                      value={this.state.entitiesTypes[e]}
                      selection
                      onChange={this.handleTypeSelect}
                      options={chartOptions}
                    />
                  </div>
                </div>
              ))
            }
          </div>
          <button className={styles.submit} onClick={this.handleSubmit}>
            Save
          </button>
        </div>
      </div>
    );
  }
}

AddChart.propTypes = {};

const mapStateToProps = (state) => ({
  deviceDetails: state.device.deviceDetails,
  projectDetails: state.projects.projectDetails,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDeviceById,
  createChart
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AddChart);

const chartOptions = [
  {
    key: 'Line',
    value: 'Line',
    text: 'Line'
  },
  {
    key: 'Bar',
    value: 'Bar',
    text: 'Bar'
  },
  {
    key: 'Area',
    value: 'Area',
    text: 'Area'
  },
];

import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import * as classnames from 'classnames';
import { Table } from 'semantic-ui-react';
import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import styles from './ChartDetail.scss';
import { getDeviceById } from '../../../../redux/actions/deviceActions';
import { getProjectById } from '../../../../redux/actions/projectActions';
import {
  getChartDetails,
  getDeviceDataForChartDetail
} from '../../../../redux/actions/chartActions';
import GraphRenderer from '../../../presentational/GraphRenderer/GraphRenderer';

class ChartDetail extends React.Component {
  constructor(props) {
    super(props);
    const { projectId, deviceId, chartId } = this.props.match.params;
    this.state = {
      projectId, deviceId, chartId
    };
  }

  componentDidMount() {
    const { projectId, deviceId, chartId } = this.props.match.params;
    if (projectId && deviceId) this.props.getDeviceById(projectId, deviceId);
    if (projectId) this.props.getProjectById(projectId);
    if (projectId && deviceId && chartId) this.props.getChartDetails(projectId, deviceId, chartId);
    if (projectId && deviceId) this.props.getDeviceDataForChartDetail(projectId, deviceId);
  }

  render() {
    const { projectName } = this.props.projectDetails;
    const { deviceName } = this.props.deviceDetails;
    const { name } = this.props.chartDetail;
    const { projectId, deviceId } = this.props.match.params;
    return (
      <React.Fragment>
        <Breadcrumbs
          route={`Projects / ${projectName} / `}
          present={name}
          linkText={deviceName}
          link={`/projects/${projectId}/devices/${deviceId}/graphs/`}
        />
        <div className={styles['header-container']}>
          <h1>{name}</h1>
          <button>Edit</button>
        </div>
        {
          !_.isEmpty(this.props.chartDetail) &&
          <div className="container-fluid">
            <GraphRenderer
              graph={this.props.chartDetail}
              data={this.props.detailData}
              tooltip
            />
            {/*Entity Cards*/}
            <div className="row">
              {
                this.props.chartDetail.elements.map(e => (
                  <div
                    className={classnames('col-4', 'col-sm-4')} key={e.key}
                  >
                    <div className={styles['entity-card']}>
                      <div className={styles['entity-header-container']}>
                        <div
                          className={styles['entity-color']} style={{ backgroundColor: e.color }}
                        />
                        <h3 className={styles['entity-header']}>{e.key}</h3>
                      </div>
                      <div className="row">
                        <div className="col">
                          <div className={styles['entity-blocks']}>
                        <span className={styles['entity-value']}>
                          {this.props.detailValues.minValues[e.key]}
                        </span>
                            <span className={styles['entity-name']}>Min Value</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className={styles['entity-blocks']}>
                        <span className={styles['entity-value']}>
                          {this.props.detailValues.maxValues[e.key]}
                        </span>
                            <span className={styles['entity-name']}>Max Value</span>
                          </div>
                        </div>
                        <div className="col">
                          <div className={styles['entity-blocks']}>
                        <span className={styles['entity-value']}>
                          {this.props.detailValues.averages[e.key]}
                        </span>
                            <span className={styles['entity-name']}>Average</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
            {/*Table*/}
            <div className="row">
              <div className="col">
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Time</Table.HeaderCell>
                      {
                        this.props.chartDetail.elements.map(e => (
                          <Table.HeaderCell key={`header-${e.key}`}>{e.key}</Table.HeaderCell>
                        ))
                      }
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {
                      this.props.detailData.map(d => (
                        <Table.Row key={d.MS}>
                          <Table.Cell>{d.Timestamp}</Table.Cell>
                          {
                            this.props.chartDetail.elements.map(e => (
                              <Table.Cell key={`data-${d.MS}-${e.key}`}>{d[e.key]}</Table.Cell>
                            ))
                          }
                        </Table.Row>
                      ))
                    }
                  </Table.Body>
                </Table>
              </div>
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}

ChartDetail.propTypes = {
  router: PropTypes.object.isRequired,
  projectDetails: PropTypes.object.isRequired,
  deviceDetails: PropTypes.object.isRequired,
  chartDetail: PropTypes.object.isRequired,
  detailData: PropTypes.array,
  detailValues: PropTypes.object,
  getChartDetails: PropTypes.func.isRequired,
  getDeviceById: PropTypes.func.isRequired,
  getProjectById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  router: state.router,
  projectDetails: state.projects.projectDetails,
  deviceDetails: state.device.deviceDetails,
  chartDetail: state.charts.chartDetail,
  detailData: state.charts.detailData,
  detailValues: state.charts.detailValues,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getDeviceById,
  getProjectById,
  getChartDetails,
  getDeviceDataForChartDetail
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChartDetail);

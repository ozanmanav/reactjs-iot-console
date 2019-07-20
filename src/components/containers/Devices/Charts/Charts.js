import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import {
  getAllChartsByDevice,
  getDeviceDataForCharts
} from '../../../../redux/actions/chartActions';
import styles from './Charts.scss';
import TitleArea from '../../../presentational/TitleArea/TitleArea';
import GraphRenderer from '../../../presentational/GraphRenderer/GraphRenderer';

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.projectId = props.match.params.projectId;
    this.deviceId = props.match.params.deviceId;
    this.interval = null;
  }

  componentDidMount() {
    this.props.getAllChartsByDevice(this.projectId, this.deviceId);
    this.refreshData();
    this.interval = setInterval(this.refreshData, 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }


  refreshData = () => {
    this.props.getDeviceDataForCharts(this.projectId, this.deviceId);
  };

  render() {
    return (
      <React.Fragment>
        <div className={styles['charts-container']}>
          <TitleArea
            addURL={`/projects/${this.projectId}/devices/${this.deviceId}/graphs/add`}
            addText={'Add Graph'}
            title={'GRAPH LIST'}
            limitNumber={0}
            activeNumber={0}
          />
          <div style={{ marginTop: 30, marginLeft: -15 }} className={'container-fluid'}>
            <div className={'row'}>
              {
                this.props.charts && this.props.charts.map(chart => (
                  <div className="col4 col-sm-4" key={chart._id} style={{ minWidth: '' }}>
                    {/* eslint-disable-next-line max-len */}
                    <Link to={`/projects/${this.projectId}/devices/${this.deviceId}/graphs/${chart._id}`}>
                      <div className={styles['graph-card']} key={chart._id}>
                        {/* eslint-disable-next-line max-len */}
                        <GraphRenderer graph={chart} data={this.props.data} header />
                      </div>
                    </Link>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Charts.propTypes = {
  getAllChartsByDevice: PropTypes.func.isRequired,
  getDeviceDataForCharts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  charts: state.charts.list,
  data: state.charts.chartsData
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllChartsByDevice,
  getDeviceDataForCharts
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Charts));

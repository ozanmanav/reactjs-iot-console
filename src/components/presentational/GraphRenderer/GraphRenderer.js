import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Area, Bar, CartesianGrid, ComposedChart,
  Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis
} from 'recharts';
import styles from './GraphRenderer.scss';

class GraphRenderer extends Component {
  static propTypes = {
    graph: PropTypes.shape({
      name: PropTypes.string.isRequired,
      deviceId: PropTypes.string.isRequired,
      projectId: PropTypes.string.isRequired,
      type: PropTypes.oneOf(['Line', 'Bar', 'Area', 'Composed']).isRequired,
      elements: PropTypes.arrayOf(PropTypes.shape({
        type: PropTypes.oneOf(['Line', 'Bar', 'Area']).isRequired,
        key: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
      })).isRequired,
    }).isRequired,
    data: PropTypes.array,
    header: PropTypes.bool,
    tooltip: PropTypes.bool,
  };

  render() {
    return (
      <div>
        {
          this.props.header &&
          <h5 className={styles['graph-header']}>{this.props.graph.name}</h5>
        }
        <div className={styles['graph-card']}>
          <ComposedGraphRenderer
            graph={this.props.graph}
            data={this.props.data}
            tooltip={this.props.tooltip}
          />
        </div>
      </div>
    );
  }
}

export default GraphRenderer;

const ComposedGraphRenderer = ({ graph, data, tooltip }) => (
  <ResponsiveContainer width='100%' height={283}>
    <ComposedChart
      data={data}
      margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
      cursor="pointer"
    >
      <XAxis padding={{ left: 0 }} />
      <YAxis />
      <Legend />
      {
        tooltip &&
        <Tooltip />
      }
      <CartesianGrid stroke='#f5f5f5' />
      <defs>
        {
          graph.elements.map(el => {
            if (el.type === 'Area') {
              return (
                <linearGradient
                  key={`${el.key}-def-key`}
                  id={`${el.key}-def`} x1="0" y1="0" x2="0" y2="1"
                >
                  <stop offset="5%" stopColor={el.color} stopOpacity={0.8} />
                  <stop offset="95%" stopColor={el.color} stopOpacity={0} />
                </linearGradient>
              );
            }
            return null;
          })
        }
      </defs>
      {graph.elements.map(el => {
        switch (el.type) {
          case 'Line':
            return (<Line
              key={`cg-line-${graph.id}-${el.type}-${el.key}-${el.color}`}
              type="monotone" dataKey={el.key} stroke={el.color}
              activeDot={false} dot={false}
            />);
          case 'Bar':
            return (<Bar
              key={`cg-bar-${graph.id}-${el.type}-${el.key}-${el.color}`}
              dataKey={el.key} fill={el.color}
              barSize={45}
              activeDot={false} dot={false}
            />);
          case 'Area':
            return (<Area
              key={`cg-area-${graph.id}-${el.type}-${el.key}-${el.color}`}
              dataKey={el.key} fill={`url(#${el.key}-def)`} stroke={el.color}
              activeDot={false} dot={false} type="monotone"
            />);
          default:
            return <div />;
        }
      })}
    </ComposedChart>
  </ResponsiveContainer>
);

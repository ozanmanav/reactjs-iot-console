import React from 'react';
import PropTypes from 'prop-types';
import TriggerCard from './TriggerCard';
import TitleArea from '../TitleArea/TitleArea';

TriggersContainer.propTypes = {
  triggers: PropTypes.object,
  devices: PropTypes.array,
  title: PropTypes.string,
  activeNumber: PropTypes.number,
  type: PropTypes.string,
};

function TriggersContainer(props) {
  return (
    <React.Fragment>
      <TitleArea
        addText={''}
        title={props.title}
        activeNumber={props.activeNumber}
        limitNumber={10}
      />
      <div style={{ marginTop: 10 }} className={'container-fluid'}>
        <div className={'row'}>
          {props.triggers[props.type].map(t =>
            (
              <TriggerCard
                key={t._id}
                _id={t._id}
                triggerImage={t.triggerImage}
                name={t.name}
                integration={t.integration}
                devices={props.devices}
                deviceId={t.deviceId}
              />
            ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default TriggersContainer;

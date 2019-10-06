import React, { FunctionComponent } from 'react';
import { IActivity } from '../../../store/project/types';
import { Loading } from '../../ui/loading';
import moment from 'moment';

import './ActivityList.scss';
import groupBy from 'lodash.groupby';

interface ActivityListProps {
  activities: IActivity[];
  loading?: boolean;
}

export const ActivityList: FunctionComponent<ActivityListProps> = ({ activities, loading }) => {
  const dataToShowGrouped = groupBy(activities, result =>
    moment.unix(parseInt(result.activityCreated)).format('dddd, MMMM Do YYYY')
  );

  return (
    <div className="b-project-activities">
      {loading ? (
        <Loading className="b-project-activities-loader" />
      ) : (
        <div className="container-fluid b-project-activities__timeline">
          {Object.keys(dataToShowGrouped).map(group => {
            return (
              <div className="b-project-activities__timeline-container">
                <div className="b-project-activities__timeline-container-section">
                  <div className="b-project-activities__timeline-container-section__day">{group.split(',')[0]},</div>
                  <div className="b-project-activities__timeline-container-section__date">{group.split(',')[1]}</div>
                </div>
                {dataToShowGrouped[group].map(activity => (
                  <div className="b-project-activities__timeline-container__card">
                    <div className="b-project-activities__timeline-container__card-title">
                      {activity.activityDescription}
                    </div>
                    <div className="b-project-activities__timeline-container__card-time">
                      {activity && moment.unix(parseInt(activity.activityCreated)).format('HH:mm:ss ZZ')}
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

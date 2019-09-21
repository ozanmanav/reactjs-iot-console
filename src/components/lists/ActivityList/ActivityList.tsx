import React, { FunctionComponent } from 'react';
import { IActivity } from '../../../store/project/types';
import { Loading } from '../../ui/loading';
import moment from 'moment';
import { Container } from '../../ui';
import uniq from 'lodash/uniq';
import './ActivityList.scss';

interface ActivityListProps {
    activities: IActivity[];
    loading?: boolean;
}

export const ActivityList: FunctionComponent<ActivityListProps> = ({ activities, loading }) => {
    const sectionHeaders = uniq(
        activities &&
            activities.map(activity => moment.unix(parseInt(activity.activityCreated)).format('dddd, MMMM Do YYYY')),
    );
    return (
        <div className="b-project-activities">
            {loading ? (
                <Loading className="b-project-activities-loader" />
            ) : (
                <Container className="b-project-activities__timeline">
                    {sectionHeaders &&
                        sectionHeaders.length > 0 &&
                        sectionHeaders.map(sectionHeader => {
                            const sectionDay = sectionHeader.split(',')[0];
                            const sectionDate = sectionHeader.split(',')[1];
                            return (
                                <div className="b-project-activities__timeline-container">
                                    <div className="b-project-activities__timeline-container-section">
                                        <div className="b-project-activities__timeline-container-section__day">
                                            {sectionDay},
                                        </div>
                                        <div className="b-project-activities__timeline-container-section__date">
                                            {sectionDate}
                                        </div>
                                    </div>
                                    {activities &&
                                        activities.length > 0 &&
                                        activities.map(activity => {
                                            return (
                                                <div className="b-project-activities__timeline-container__card">
                                                    <div className="b-project-activities__timeline-container__card-title">
                                                        {activity.activityDescription}
                                                    </div>
                                                    <div className="b-project-activities__timeline-container__card-time">
                                                        {moment(activity && parseInt(activity.activityCreated)).format(
                                                            'HH:mm:ss',
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            );
                        })}
                </Container>
            )}
        </div>
    );
};

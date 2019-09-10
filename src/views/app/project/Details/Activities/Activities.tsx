import React, { FunctionComponent, useEffect } from 'react';
import './Activities.scss';
import { getActivities } from '../../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../../store';
import { IProjectLoadingState, IActivity } from '../../../../../store/project/types';
import { Timeline, TimelineEvent } from 'react-event-timeline';
import { Loading } from '../../../../../components/ui/loading';
import moment from 'moment';
import { Icon, Container } from '../../../../../components/ui';

interface ActivitiesBaseProps {
    getActivities: typeof getActivities;
    activities?: IActivity[];
    loading?: IProjectLoadingState;
    router?: any;
}

export const ActivitiesBase: FunctionComponent<ActivitiesBaseProps> = ({ activities, getActivities, loading }) => {
    useEffect(() => {
        getActivities();
    }, [getActivities]);

    return (
        <div className="b-project-activities">
            {loading && loading.activities ? (
                <Loading className="b-project-activities-loader" />
            ) : (
                <>
                    <div className="b-project-activities-title">Activity History</div>
                    <Container className="b-project-activities__timeline">
                        <Timeline>
                            {activities &&
                                activities.length > 0 &&
                                activities.map((activity) => {
                                    return (
                                        <TimelineEvent
                                            title=""
                                            iconColor="#9b9b9b"
                                            createdAt={activity && moment(activity.activityCreated).format()}
                                            icon={<Icon icon="history" width="18px" height="18px" />}
                                        >
                                            {activity.activityDescription}
                                        </TimelineEvent>
                                    );
                                })}
                        </Timeline>
                    </Container>
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    activities: state.project.activities,
    loading: state.project.loading,
});

export const Activities = connect(
    mapStateToProps,
    { getActivities }
)(ActivitiesBase);

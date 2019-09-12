import React, { FunctionComponent, useEffect } from 'react';
import './Activities.scss';
import { getActivities } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { IProjectLoadingState, IActivity } from '../../../../store/project/types';
import { Loading } from '../../../../components/ui/loading';
import moment from 'moment';
import { Container } from '../../../../components/ui';

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
                <Container className="b-project-activities__timeline">
                    {activities &&
                        activities.length > 0 &&
                        activities.map((activity) => {
                            return (
                                <div className="b-project-activities__timeline-container">
                                    <div className="b-project-activities__timeline-container__title">
                                        {activity && moment(parseInt(activity.activityCreated)).format()}
                                    </div>
                                    <div className="b-project-activities__timeline-container__card">{activity.activityDescription}</div>
                                </div>
                            );
                        })}
                </Container>
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

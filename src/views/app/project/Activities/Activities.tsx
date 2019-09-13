import React, { FunctionComponent, useEffect } from 'react';
import './Activities.scss';
import { getActivities } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { IProjectLoadingState, IActivity } from '../../../../store/project/types';
import { Loading } from '../../../../components/ui/loading';
import moment from 'moment';
import { Container } from '../../../../components/ui';
import uniq from 'lodash/uniq';

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
    const sectionHeaders = uniq(
        activities && activities.map((activity) => moment.unix(parseInt(activity.activityCreated)).format('dddd, MMMM Do YYYY'))
    );
    return (
        <div className="b-project-activities">
            {loading && loading.activities ? (
                <Loading className="b-project-activities-loader" />
            ) : (
                <Container className="b-project-activities__timeline">
                    {sectionHeaders &&
                        sectionHeaders.length > 0 &&
                        sectionHeaders.map((sectionHeader) => {
                            const sectionDay = sectionHeader.split(',')[0];
                            const sectionDate = sectionHeader.split(',')[1];
                            return (
                                <div className="b-project-activities__timeline-container">
                                    <div className="b-project-activities__timeline-container-section">
                                        <div className="b-project-activities__timeline-container-section__day">{sectionDay},</div>
                                        <div className="b-project-activities__timeline-container-section__date">{sectionDate}</div>
                                    </div>
                                    {activities &&
                                        activities.length > 0 &&
                                        activities.map((activity) => {
                                            return (
                                                <div className="b-project-activities__timeline-container__card">
                                                    <div className="b-project-activities__timeline-container__card-title">
                                                        {activity.activityDescription}
                                                    </div>
                                                    <div className="b-project-activities__timeline-container__card-time">
                                                        {moment(activity && parseInt(activity.activityCreated)).format('HH:mm:ss')}
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

const mapStateToProps = (state: AppState) => ({
    activities: state.project.activities,
    loading: state.project.loading,
});

export const Activities = connect(
    mapStateToProps,
    { getActivities }
)(ActivitiesBase);

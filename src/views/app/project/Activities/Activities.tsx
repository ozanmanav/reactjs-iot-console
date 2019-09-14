import React, { FunctionComponent, useEffect } from 'react';
import './Activities.scss';
import { getActivities } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { IProjectLoadingState, IActivity } from '../../../../store/project/types';
import { ActivityList } from '../../../../components/lists/ActivityList';

interface ActivitiesBaseProps {
    getActivities: typeof getActivities;
    activities: IActivity[];
    loading?: IProjectLoadingState;
    router?: any;
}

export const ActivitiesBase: FunctionComponent<ActivitiesBaseProps> = ({ activities, getActivities, loading }) => {
    useEffect(() => {
        getActivities();
    }, [getActivities]);

    return <ActivityList activities={activities} loading={loading && loading.activities} />;
};

const mapStateToProps = (state: AppState) => ({
    activities: state.project.activities || [],
    loading: state.project.loading,
});

export const Activities = connect(
    mapStateToProps,
    { getActivities }
)(ActivitiesBase);

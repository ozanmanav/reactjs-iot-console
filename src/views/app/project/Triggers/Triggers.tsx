import React, { FunctionComponent, useEffect } from 'react';
import './Triggers.scss';
import { getTriggers } from '../../../../store/project/actions';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { IProjectLoadingState, ITriggerResponse } from '../../../../store/project/types';
import { TriggerCard } from '../../../../components/ui/cards';
import { Loading } from '../../../../components/ui/loading';

interface TriggersBaseProps {
    getTriggers: typeof getTriggers;
    triggers?: ITriggerResponse;
    loading?: IProjectLoadingState;
    router?: any;
}

export const TriggersBase: FunctionComponent<TriggersBaseProps> = ({ triggers, getTriggers, loading }) => {
    useEffect(() => {
        getTriggers();
    }, [getTriggers]);

    return (
        <div className="b-project-triggers-details">
            <div className="b-project-triggers">
                {loading && loading.triggers ? (
                    <Loading className="b-project-triggers-loader" />
                ) : (
                    triggers && triggers.alarm && triggers.alarm.map(trigger => <TriggerCard trigger={trigger} />)
                )}
            </div>
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    triggers: state.project.triggers,
    loading: state.project.loading
});

export const Triggers = connect(
    mapStateToProps,
    { getTriggers }
)(TriggersBase);

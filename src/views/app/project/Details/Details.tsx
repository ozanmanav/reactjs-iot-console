import React, { FunctionComponent, useEffect } from 'react';
import './Details.scss';
import { RouteComponentProps } from 'react-router';
import Breadcrumbs from '../../../../components/ui/breadcrumbs/Breadcrumbs';
import { connect } from 'react-redux';
import { AppState } from '../../../../store';
import { getProjectById } from '../../../../store/project/actions';
import { IProject } from '../../../../store/project/types';

interface DetailsBaseProps extends RouteComponentProps {
    getProjectById: typeof getProjectById;
    currentProject?: IProject;
    router?: any;
}

const DetailsBase: FunctionComponent<DetailsBaseProps> = ({ router, getProjectById, currentProject }) => {
    const projectId = router.location.pathname.split('/')[3] || '';

    useEffect(() => {
        if (projectId) {
            getProjectById(projectId);
        }
    }, [projectId]);

    return (
        <div className="b-project-details">
            <Breadcrumbs
                className="b-create-project__breadcrumbs"
                route={'Projects / '}
                present={currentProject && currentProject.projectName}
            />
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    currentProject: state.project.currentProject,
    router: state.router,
});

export const Details = connect(
    mapStateToProps,
    { getProjectById }
)(DetailsBase);

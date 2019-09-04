import React, { FunctionComponent } from 'react';
import './CreateProject.scss';
import { RouteComponentProps } from 'react-router';
import { CreateProjectForm } from '../../../../components/forms/CreateProjectForm';
import Breadcrumbs from '../../../../components/ui/breadcrumbs/Breadcrumbs';

export const CreateProject: FunctionComponent<RouteComponentProps<{ id: string }>> = ({ match, location }) => {
    return (
        <div className="b-create-project">
            <Breadcrumbs className="b-create-project__breadcrumbs" route={'Projects / '} present={'Create Project'} />
            <CreateProjectForm onSubmit={(values) => console.log(values)} />
        </div>
    );
};

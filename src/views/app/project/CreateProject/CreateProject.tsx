import React, { FunctionComponent } from 'react';
import './CreateProject.scss';
import { Container } from '../../../../components/ui';
import { RouteComponentProps } from 'react-router';

export const CreateProject: FunctionComponent<RouteComponentProps<{ id: string }>> = ({ match, location }) => {
    const projectId = match.params.id;
    return (
        <div className="b-object-details">
            <Container>
                {projectId}
                CreateProject Project
                {/* <ObjectDetailsTable objectId={objectId} />
             
                <FilesList
                    files={files}
                    className="_not-last-group"
                    variant="object"
                    addFilesTo={objectName}
                    filesChangeCallback={refetch}
                    parentID={objectId}
                />
                <EventsTimeline variant="object" /> */}
            </Container>
        </div>
    );
};

import React, { FunctionComponent } from 'react';
import './Details.scss';
import { Container } from '../../../../components/ui';
import { RouteComponentProps } from 'react-router';

export const Details: FunctionComponent<RouteComponentProps<{ id: string }>> = ({ match, location }) => {
    const projectId = match.params.id;
    return (
        <div className="b-object-details">
            <Container>
                {projectId}
                Project Details
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

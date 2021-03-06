import React, { FunctionComponent } from 'react';
import './Project.scss';
import { IProject } from '../../../store/project/types';

export const ProjectInfo: FunctionComponent<{ project: IProject }> = ({ project }) => {
  return (
    <div className="b-project-details__info">
      <img src={project.projectImage2x} alt="project" className="b-project-details__info-container-project-image" />
      <div className="b-project-details__info-container">
        <h1 className="b-project-details__info-container-title">{project.projectName}</h1>
        <p className="b-project-details__info-container-description">{project.projectDescription}</p>
      </div>
    </div>
  );
};

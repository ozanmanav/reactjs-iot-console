import React, { FunctionComponent } from 'react';
import { ClipLoader } from 'react-spinners';
import './Loading.scss';

interface ILoadingProps {
    size?: number;
    loading?: boolean;
}

export const Loading: FunctionComponent<ILoadingProps> = ({ size = 24, loading }) => {
    return (
        <div className="b-loading">
            <ClipLoader sizeUnit={'px'} size={size} color={'#f68a4d'} loading={loading} />
        </div>
    );
};

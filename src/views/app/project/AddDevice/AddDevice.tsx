import React, { FunctionComponent } from 'react';
import './AddDevice.scss';
import { RouteComponentProps } from 'react-router';
import { AddDeviceForm } from '../../../../components/forms/AddDeviceForm';
import BreadcrumbsAdv from '../../../../components/ui/breadcrumbs-adv/BreadcrumbsAdv';
import { AppState } from '../../../../store';
import { connect } from 'react-redux';
import { addDevice, getDeviceModels } from '../../../../store/project/actions';
import { getDeviceBrandOptions, getDeviceModelOptions } from '../../../../utils';
import { IProjectLoadingState } from '../../../../store/project/types';

interface AddDeviceBaseProps {
    addDevice: typeof addDevice;
    getDeviceModels: typeof getDeviceModels;
    projectLoading?: IProjectLoadingState;
    brands: [];
    models: [];
}

export const AddDeviceBase: FunctionComponent<RouteComponentProps & AddDeviceBaseProps> = ({
    brands,
    models,
    addDevice,
    getDeviceModels,
    projectLoading = undefined,
}) => {
    return (
        <div className="b-add-device">
            <div className="b-add-device__breadcrumb-wrapper">
                <div className="b-add-device__breadcrumb-wrapper__present">Projects /</div>
                <BreadcrumbsAdv />
            </div>
            <AddDeviceForm
                onSubmit={addDevice}
                brandsOptions={getDeviceBrandOptions(brands)}
                modelsOptions={getDeviceModelOptions(models)}
                loading={projectLoading || undefined}
                getDeviceModels={(brand) => getDeviceModels(brand)}
            />
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    brands: state.project.deviceBrands,
    models: state.project.deviceModels,
    projectLoading: state.project.loading,
});

export const AddDevice = connect(
    mapStateToProps,
    { addDevice, getDeviceModels }
)(AddDeviceBase);
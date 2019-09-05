import React, { FunctionComponent } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import { AppState } from '../../store';

interface ISidebarHeaderProps {
    image?: string;
    deactiveImage?: string;
    text: string;
    active: boolean;
    isSidebarOpen?: boolean;
}

const SidebarHeaderBase: FunctionComponent<ISidebarHeaderProps> = ({ active, image, deactiveImage, text, isSidebarOpen }) => (
    <div className={classNames('b-sidebar-header', { _open: isSidebarOpen })}>
        <img src={active ? image : deactiveImage} alt="logo" className="b-sidebar-header__image" />
        <span className={classNames('b-sidebar-header', { active })}>{text} </span>
    </div>
);

const mapStateToProps = (state: AppState) => ({
    isSidebarOpen: state.ui.isSidebarOpen,
});

const SidebarHeader = connect(
    mapStateToProps,
    null
)(SidebarHeaderBase);

export default SidebarHeader;

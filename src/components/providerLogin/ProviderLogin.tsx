import React, { FunctionComponent } from 'react';
import './ProviderLogin.scss';
import { GoogleButton, GithubButton } from '../ui';
import { GoogleLogin } from 'react-google-login';
import { userGoogleLogin, userGoogleLoginFailure } from '../../store/auth/actions';
import { AuthState } from '../../store/auth/types';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { ClipLoader } from 'react-spinners';

interface ProviderLoginBaseProps {
    userGoogleLogin: any;
    auth: AuthState;
}
export const ProviderLoginBase: FunctionComponent<ProviderLoginBaseProps> = ({ userGoogleLogin, auth }) => {
    return (
        <div className="c-provider-login">
            {auth.loading && auth.loading.googleLogin ? (
                <div className="c-provider-login-loader">
                    <ClipLoader sizeUnit={'px'} size={24} color={'#f68a4d'} loading={auth.loading.googleLogin} />
                </div>
            ) : (
                <GoogleLogin
                    clientId="328512413905-kiljb85b2f6a31h5qusls5ihg48an21d.apps.googleusercontent.com"
                    render={(renderProps) => (
                        <GoogleButton
                            text="Continue with Google"
                            type="button"
                            onClick={renderProps.onClick}
                            disabled={renderProps.disabled}
                        />
                    )}
                    buttonText="Login"
                    onSuccess={(response) => userGoogleLogin(response)}
                    onFailure={(error) => userGoogleLoginFailure(error)}
                    cookiePolicy={'single_host_origin'}
                />
            )}

            <GithubButton text="Continue with GitHub" type="button" />
        </div>
    );
};

const mapStateToProps = (state: AppState) => ({
    auth: state.auth,
});

export const ProviderLogin = connect(
    mapStateToProps,
    { userGoogleLogin }
)(ProviderLoginBase);

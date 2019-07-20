import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Popup, Table } from 'semantic-ui-react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { BarLoader } from 'react-spinners';
import styles from './Security.scss';
import FloatingLabelField from '../../../presentational/FloatingLabelInput/FloatingLabelField';
// import PropTypes from 'prop-types';

class Security extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false,
      newPassword: '',
    };
  }

  changePassword = ({ target }) => {
    this.setState(() => ({
      newPassword: target.value
    }));
  };

  render() {
    const { clientSecret, loading } = this.props.user;
    return (
      <div className={styles.container}>
        <div className="row">
          {
            loading ?
              <BarLoader
                color={'#ececec'}
                width={600}
                height={50}
              /> :
              <div className={styles['client-secret-container']} >
                <label htmlFor="client-secret" className={styles['client-secret-label']}>
                  Client Secret
                </label>
                <input
                  id={'client-secret'}
                  type="text" defaultValue={clientSecret}
                  disabled className={styles['client-secret-input']}
                />
                <Popup
                  trigger={
                    <CopyToClipboard
                      text={clientSecret}
                      onCopy={() => this.setState({ copied: true })}
                    >
                      <div className={styles['client-secret-copy-container']}>
                        <div className={styles['client-secret-copy-icon']} />
                      </div>
                    </CopyToClipboard>
                  }
                  content={'Copied!'}
                  open={this.state.copied}
                  onOpen={this.handleOpen}
                  position='right center'
                  inverted
                />
              </div>
          }
        </div>
        <div className="row">
          <div className={styles['change-password-container']}>
            <h4>Change Password</h4>
            <p>Lorem ipsum</p>
            <div className={styles['input-container']}>
              <FloatingLabelField
                label={'New Password'}
                onChange={this.changePassword}
                value={this.state.newPassword}
                id={'password'}
                type={'password'}
              />
              <Button className={styles['change-button']}>Change</Button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className={styles['security-container']}>
            <h4>Security History</h4>
            <Table celled>
              <Table.Header>
                {/*<Table.Row>*/}
                {/*</Table.Row>*/}
              </Table.Header>

              <Table.Body>
                {/*<Table.Row />*/}
              </Table.Body>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

Security.propTypes = {};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Security);

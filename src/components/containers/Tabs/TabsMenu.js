import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';
import classnames from 'classnames';
import 'semantic-ui-css/semantic.min.css';
import styles from './TabsMenu.scss';

class TabsMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: '',
    };
  }

  componentDidMount() {
    this.setState({ activeItem: 'account' });
    this.props.push(`${this.props.match.url}/profile`);
  }

  handleItemClick = (e, { name }) => {
    // console.log(
    //   this.props.location.pathname.split('/')[this.props.location.pathname.split('/').length - 1]
    // );
    this.setState({ activeItem: name });
    this.props.push(`${this.props.match.url}/${name}`);
  };

  render() {
    const pathItem = this.props.location.pathname
      .split('/')[this.props.location.pathname.split('/').length - 1];
    return (
      <React.Fragment>
        <Menu pointing secondary className={styles.container}>
          {this.props.items.map(item => (
            <Menu.Item
              key={item}
              name={item}
              active={item === pathItem === item}
              onClick={this.handleItemClick}
              className={classnames(styles.item, { [styles.active]: item === pathItem })}
            />
          ))}
        </Menu>
      </React.Fragment>
    );
  }
}

TabsMenu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  router: state.rotuer,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  push
}, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TabsMenu));

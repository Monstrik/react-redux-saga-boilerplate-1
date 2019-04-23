import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Table } from 'semantic-ui-react';

import { getUsers2Saga } from '../../actions';

import styles from './styles';

class Axios extends Component {
  constructor() {
    super();
    this.handleBtnOnClick = this.handleBtnOnClick.bind(this);
  }

  handleBtnOnClick() {
    this.props.getUsers2Saga();
  }

  render() {
    const { users, errorMsg } = this.props;
    console.log('Axios render invoked', users.length);
    return (
      <div style={styles.container}>
        <h2>Axios {users.length}</h2>
        <a href="/">Home</a>
        <br/>
        {errorMsg && <h5 style={styles.errorMsg}>{errorMsg}</h5>}
        {users.length > 0
        && (
          <Table
            striped
          >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>Username</Table.HeaderCell>
                <Table.HeaderCell>E-mail</Table.HeaderCell>
                <Table.HeaderCell>Phone</Table.HeaderCell>
                <Table.HeaderCell>Website</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {users.map(({
                            id,
                            name,
                            email,
                            phone,
                            username,
                            website
                          }, i) => (
                <Table.Row key={i}>
                  <Table.Cell>{id}</Table.Cell>
                  <Table.Cell>{name}</Table.Cell>
                  <Table.Cell>{username}</Table.Cell>
                  <Table.Cell>{email}</Table.Cell>
                  <Table.Cell>{phone}</Table.Cell>
                  <Table.Cell>{website}</Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )
        }
        <Button
          color="teal"
          onClick={this.handleBtnOnClick}
        >
          Load Users
        </Button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.usersReducer.users,
  errorMsg: state.usersReducer.errorMsg
});

const mapDispatchToProps = dispatch => ({
  getUsers2Saga: () => dispatch(getUsers2Saga())
});

export default connect(mapStateToProps, mapDispatchToProps)(Axios);

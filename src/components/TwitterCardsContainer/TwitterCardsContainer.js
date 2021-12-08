import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import TwitterCard from '../TwitterCard/TwitterCard';
import { setShowTwitterCards, increaseLoaderCounter, reduceLoaderCounter, setUsers } from '../../models/twitter-card';
import { showTwitterCards, loaderCounter, users } from './../../models/twitter-card';


// https://jsonplaceholder.typicode.com/users 

const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

const  TwitterCardsContainer = ({ showTwitterCards, setShowTwitterCards, loaderCounter, increaseLoaderCounter, reduceLoaderCounter, users, setUsers }) => {

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //   .then(data => data.json())
  //   .then(data => {
  //     setUsers(data
  //       .filter((user, index) => index <= 1)
  //       .map(user => user.username)
  //     )
  //   })
  //   .catch(() => setUsers([]));
  // }, []);


  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const data = await fetch('https://jsonplaceholder.typicode.com/users');
  //       const jsonData = await data.json();
  //       setUsers(jsonData
  //         .filter((user, index) => index <= 1)
  //         .map(user => user.username)
  //       )
  //     } catch (error) {
  //       setUsers([]);
  //     }
  //   })()
  // }, []);


  const fetchUsers = async (time) => {
    // setLoaderCounter(loaderCounter + 1);
    try {
      await delay(time);
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await data.json();
      
      //  setLoaderCounter( loaderCounter => loaderCounter - 1);

      if(users.length === 0) {
        setUsers(jsonData
          .filter((user, index) => index <= 1)
          .map(user => user.username)
        );
      }
    } catch (error) {
      setUsers([]);
      // setLoaderCounter( loaderCounter => loaderCounter - 1);
    }
  };

  useEffect(() => {
    increaseLoaderCounter()
    fetchUsers(1000).finally(() => reduceLoaderCounter());
    increaseLoaderCounter()
    fetchUsers(3000).finally(() => reduceLoaderCounter());
  }, []);



  return (
    <div className="TwitterCardsContainer">
      <button onClick={() => { setShowTwitterCards(!showTwitterCards) }}>
        Toggle Cards
      </button>
      { 
        loaderCounter >0 ? (
          <div>LOADING ...</div>
        ) : (
          users.length === 0 || !showTwitterCards ? (
              <div>
                No users available
              </div>
            ) : (
              <div style={{padding: '16px'}}>
                <div style={{maxWidth: '600px'}}>
                  { users[0] ? <TwitterCard name={users[0]}/> : null }
                </div>
                <br />
                { users[1] ? <TwitterCard name={users[1]}/> : null }
              </div>
            )
          )
      }

      {/* { 
        loaderCounter > 0 ? (
          <div>LOADING ...</div>
        ) : (
          users.length === 0 ? (
            <div>
              No users available
            </div>
          ) : (
            <div style={{padding: '16px'}}>
              <div style={{maxWidth: '600px'}}>
                { users[0] ? <TwitterCard name={users[0]}/> : null }
              </div>
              <br />
              { users[1] ? <TwitterCard name={users[1]}/> : null }
            </div>
          )
        )
      }   */}
    </div>
  );
}


const mapStateToProps = (state, ownProps) => {
  return {
    showTwitterCards: showTwitterCards(state),
    loaderCounter: loaderCounter(state),
    users: users(state)
  };
};

const mapDispatchToProps = {
  setShowTwitterCards,
  increaseLoaderCounter,
  reduceLoaderCounter,
  setUsers
}


// const mapDispatchToProps = (dispatch) => {
//   return {
//     setShowTwitterCards: (payload) => dispatch(setShowTwitterCards(payload)),
//     increaseLoaderCounter: () => dispatch(increaseLoaderCounter()) , 
//     reduceLoaderCounter: () => dispatch(reduceLoaderCounter()),
//     setUsers: (payload) => dispatch(setUsers(payload))
//   };
// };


export default connect(
  mapStateToProps, 
  mapDispatchToProps,
)(TwitterCardsContainer);

/*
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      showTwitterCards: true
    };
  }  

  async fetchUsers (time) {
    try {
      await delay(time);
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await data.json();
      this.setState({users: jsonData
        .filter((user, index) => index <= 1)
        .map(user => user.username)
      });
    } catch (error) {
        this.setState([]);
    }
  };

  componentDidMount() {
    this.fetchUsers(1000);
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => { this.setState({ showTwitterCards: !this.state.showTwitterCards }) }}>
          Toggle Cards
        </button>
        {<div>LOADING ...</div>}
        {
          this.state.users.length === 0 || !this.state.showTwitterCards ? (
            <div>
              No users available
            </div>
          ) : (
            <div>
              <div style={{maxWidth: '600px'}}>
                { this.state.users[0] ? <TwitterCard name={this.state.users[0]}/> : null }
              </div>
              <br />
              { this.state.users[1] ? <TwitterCard name={this.state.users[1]}/> : null }
            </div>
          )
        }  
      </div>
    );
  }
}

// */
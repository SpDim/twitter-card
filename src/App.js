import React, { useEffect, useState } from 'react';
import TwitterCard from './components/TwitterCard/TwitterCard';

// https://jsonplaceholder.typicode.com/users 

const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

const  App = () => {
  const [users, setUsers] = useState([]);
  const [loaderCounter, setLoaderCounter] = useState(0);

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
    // setLoaderCounter( loaderCounter => loaderCounter + 1);
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
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(1000).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(3000).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(100).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(6000).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(2000).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(11000).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(1000).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(400).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(700).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(1000).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(13000).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(1000).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(2000).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(3000).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(1000).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
    setLoaderCounter( loaderCounter => loaderCounter + 1);
    fetchUsers(1500).finally(() => setLoaderCounter( loaderCounter => loaderCounter - 1));
  }, []);



  return (
    <div className="App">
      { 
        loaderCounter > 0 ? (
          <div>LOADING ...</div>
        ) : (
          users.length === 0 ? (
            <div>
              No users available
            </div>
          ) : (
            <div>
              <div style={{maxWidth: '600px'}}>
                { users[0] ? <TwitterCard name={users[0]}/> : null }
              </div>
              <br />
              { users[1] ? <TwitterCard name={users[1]}/> : null }
            </div>
          )
        )
      }  
    </div>
  );
}

export default App;


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
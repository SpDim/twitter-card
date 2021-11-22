import React, { useEffect, useState } from 'react';
import TwitterCard from './components/TwitterCard/TwitterCard';

// https://jsonplaceholder.typicode.com/users 

const delay = (time) => new Promise(resolve => setTimeout(resolve, time));

// const  App = () => {
//   const [users, setUsers] = useState([]);
  /*
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(data => data.json())
    .then(data => {
      setUsers(data
        .filter((user, index) => index <= 1)
        .map(user => user.username)
      )
    })
    .catch(() => setUsers([]));
  }, []);
 // */

/*
  useEffect(() => {
    (async () => {
      try {
        const data = await fetch('https://jsonplaceholder.typicode.com/users');
        const jsonData = await data.json();
        setUsers(jsonData
          .filter((user, index) => index <= 1)
          .map(user => user.username)
        )
      } catch (error) {
        setUsers([]);
      }
    })()
  }, []);
  // */

//   const fetchUsers = async (time) => {
//     try {
//       await delay(time);
//       const data = await fetch('https://jsonplaceholder.typicode.com/users');
//       const jsonData = await data.json();
//       setUsers(jsonData
//         .filter((user, index) => index <= 1)
//         .map(user => user.username)
//       );
//     } catch (error) {
//       setUsers([]);
//     }
//   };

//   useEffect(() => {
//     fetchUsers(1000);
//     fetchUsers(3000);
//     fetchUsers(100);
//     fetchUsers(6000);
//     fetchUsers(2000);
//     fetchUsers(11000);
//     fetchUsers(1000);
//     fetchUsers(400);
//     fetchUsers(700);
//     fetchUsers(1000);
//     fetchUsers(13000);
//     fetchUsers(1000);
//     fetchUsers(2000);
//     fetchUsers(3000);
//     fetchUsers(1000);
//     fetchUsers(1500);

//   }, []);



//   return (
//     <div className="App">
//       {/* <div>LOADING ...</div> */}
//       {
//         users.length === 0 ? (
//           <div>
//             No users available
//           </div>
//         ) : (
//           <div>
//             <div style={{maxWidth: '600px'}}>
//               { users[0] ? <TwitterCard name={users[0]}/> : null }
//             </div>
//             <br />
//             { users[1] ? <TwitterCard name={users[1]}/> : null }
//           </div>
//         )
//       }  
//     </div>
//   );
// }

// export default App;



export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }  

 /*
  const fetchUsers = async (time) => {
    try {
      await delay(time);
      const data = await fetch('https://jsonplaceholder.typicode.com/users');
      const jsonData = await data.json();
      setUsers(jsonData
        .filter((user, index) => index <= 1)
        .map(user => user.username)
      );
    } catch (error) {
      setUsers([]);
    }
  };
  // */

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
        {/* <div>LOADING ...</div> */}
        {
          this.state.users.length === 0 ? (
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
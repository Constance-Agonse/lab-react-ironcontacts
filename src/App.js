
import './App.css';
import React from 'react';
import contacts from "./contacts.json";


// randomly select a contact from the larger contacts array



const myCelebrities = contacts.slice(0, 5);





class App extends React.Component {
  state = {
    contacts: myCelebrities
  }
  handleAddRandomCelebrity = () => {
    let randomCelebrity = contacts[Math.floor(Math.random() * contacts.length)];
    console.log(randomCelebrity)
    if (
      this.state.contacts.find((contact) => {
        return contact.id === randomCelebrity.id
      })
    ) {
      this.handleAddRandomCelebrity()
    } else {
      this.setState({
        contacts: [...this.state.contacts, randomCelebrity]
      },
      )
    }

  }
  sortByName = () => {
    const sortedNameArray = [...this.state.contacts].sort((a, b) => (a.name > b.name ? 1 : -1))
    this.setState({
      contacts: sortedNameArray
    });
  }

  sortByPopularity = () => {
    const sortedPopularityArray = [...this.state.contacts].sort((a, b) => (a.popularity > b.popularity ? 1 : -1))
    this.setState({
      contacts: sortedPopularityArray
    });
  }

  deleteCelebrity = (id) => {
    console.log(id);
  
    //filter out the item that you clicked
    const filteredCelebrities = this.state.contacts.filter((contact) => {
      return contact.id !== id
    })
   this.setState({ contacts: filteredCelebrities })

  }

  render() {
    return (
      <div className="App">
        {/* ITERATION2 Add random new contact */}
        <button onClick={this.handleAddRandomCelebrity}>Add random contact</button>
        <button onClick={this.sortByName}>Sort by name </button>
        <button onClick={this.sortByPopularity}>Sort by popularity </button>

        {/* ITERATION1 5 first stars */}
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.contacts.map((contact, i) => {
                return (
                  <tr key={i}>
                    <td> <img src={contact.pictureUrl} alt="image" width="50" />
                    </td>
                    <td>{contact.name}</td>
                    <td>{contact.popularity}</td>
                    <td>
                      <button
                        onClick={() => {
                          this.deleteCelebrity(contact.id)
                        }}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>)
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;

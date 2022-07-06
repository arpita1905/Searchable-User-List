import UserProfile from "./component/UserProfile"
import "./App.css"
import { Component } from "react"

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imgUrl:
      "https://static.remove.bg/remove-bg-web/5c20d2ecc9ddb1b6c85540a333ec65e2c616dbbd/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg",
    name: "Mina Sokoll",
    role: "Software Engineer",
  },
  {
    uniqueNo: 2,
    imgUrl:
      "https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg",
    name: "Samra Thatcher",
    role: "Software Engineer",
  },
  {
    uniqueNo: 3,
    imgUrl:
      "https://cf.ltkcdn.net/small-pets/images/orig/280769-2119x1413-sheltie-guinea-pig.jpg",
    name: "Elma Wehunt",
    role: "Software Engineer",
  },
  {
    uniqueNo: 4,
    imgUrl:
      "https://i.natgeofe.com/n/46b07b5e-1264-42e1-ae4b-8a021226e2d0/domestic-cat_thumb_square.jpg",
    name: "Dilshad Simonis",
    role: "Software Engineer",
  },
  {
    uniqueNo: 5,
    imgUrl:
      "https://www.indiantrailanimalhospital.com/sites/default/files/styles/large/public/beagle-dog-breed-info.jpg?itok=H2O5ajzX",
    name: "Mari Cox",
    role: "Software Engineer",
  },
]

class App extends Component {
  state = {
    searchInput: "",
    userDetailsList: initialUserDetailsList,
  }

  onChangeSearchInput = (event) => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  deleteUser = (uniqueNo) => {
    const { userDetailsList } = this.state
    const filteredUserDetailsList = userDetailsList.filter(
      (each) => each.uniqueNo !== uniqueNo
    )
    this.setState ({
      userDetailsList: filteredUserDetailsList,
    })
  }

  render() {
    const { searchInput, userDetailsList } = this.state
    const searchResults = userDetailsList.filter((eachUser) =>
      eachUser.name.includes(searchInput)
    )
    return (
      <div className="app-container">
        <div className="users-container">
          <h1>Users List</h1>
          <div className="search-container">
            <input
              type="search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
            />
          </div>
          <div className="list-container">
            <ul>
              {searchResults.map((eachUser) => (
                <UserProfile
                  userDetails={eachUser}
                  key={eachUser.uniqueNo}
                  deleteUser={this.deleteUser}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App

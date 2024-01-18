import React, { Component } from "react";
import axios from "axios";
import UserCard from "./UserCard";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      filteredData: [],
      searchInput: "",
    };
  }

  componentDidMount() {
    axios.get("https://swapi.dev/api/people/").then((response) => {
      this.setState({ data: response.data.results });
    });
  }

  searchItems = (searchValue) => {
    this.setState({ searchInput: searchValue });
    const { data } = this.state;

    if (searchValue.length >= 1) {
      const result = data.filter((user) => {
        return user.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      this.setState({ filteredData: result });
    } else {
      this.setState({ filteredData: data });
    }
  };

  render() {
    const { searchInput, filteredData, data } = this.state;

    return (
      <div className="homepage">
        <input
          className="search_input"
          icon="search"
          placeholder="Search..."
          onChange={(e) => this.searchItems(e.target.value)}
        />
        {searchInput.length >= 1
          ? filteredData?.map((user) => <UserCard key={user.id} user={user} />)
          : data?.map((user) => <UserCard key={user.id} user={user} />)}
      </div>
    );
  }
}

export default HomePage;

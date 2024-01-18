import React from "react";

class UserCard extends React.Component {
  render() {
    const { user } = this.props;

    return (
      <div className="user_card">
        <div className="column_1">
          <div>
            <b>Name:</b>
            {user.name}
          </div>
          <div>
            <b>Height:</b>
            {user.height}
          </div>
          <div>
            <b>Mass:</b>
            {user.mass}
          </div>
          <div>
            <b>Hair color:</b>
            {user.hair_color}
          </div>
        </div>
        <div className="column_2">
          <div>
            <b>Skin color:</b>
            {user.skin_color}
          </div>
          <div>
            <b>Eye color:</b>
            {user.eye_color}
          </div>
          <div>
            <b>Birth year:</b>
            {user.birth_year}
          </div>
          <div>
            <b>Gender:</b>
            {user.gender}
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;

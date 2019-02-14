// @flow
import React from "react";
import styles from "./styles";

type Props = {
  id: number,
  avatar_url: string,
  html_url: string,
  login: string,
  deleteUser: (id: number) => void
};

const Card = ({ id, avatar_url, html_url, login, deleteUser }: Props) => (
  <div className="col-md-2 mt-2 mb-2">
    <div className="card h-100">
      <a href={html_url}>
        <img className="card-img-top" src={avatar_url} alt={login} />
        <div className="card-body">
          <h6 className="card-title">{login}</h6>
        </div>
      </a>

      <button
        type="button"
        className="btn btn-outline-secondary deleteButton"
        style={styles.deleteButton}
        onClick={() => deleteUser(id)}
      >
        delete
      </button>
    </div>
  </div>
);

export default Card;

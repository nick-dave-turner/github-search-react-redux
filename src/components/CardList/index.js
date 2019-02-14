// @flow
import React from "react";
import Card from "../Card";

type Props = {
  data: Array<{ id: string, ...mixed }>,
  loading: boolean,
  error: boolean,
  deleteUser: (id: number) => void
};

const CardList = (props: Props) => {
  if (props.loading) {
    return <div>Loading...</div>;
  }

  if (props.error) {
    return <div>Error...</div>;
  }

  return (
    <div className="row">
      {props.data.map(user => (
        <Card key={user.id} {...user} deleteUser={id => props.deleteUser(id)} />
      ))}
    </div>
  );
};

export default CardList;

import React from "react";

function ListGames(props){
  const { name } = props;
  return (
    <div className="ListGames">
      <center><p>{name}</p></center>
    </div>
  );
}

export default ListGames;

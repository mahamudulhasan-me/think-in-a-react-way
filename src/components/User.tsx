type propsTypes = {
  users: {
    name: string;
    age: number;
    city: string;
    paid: boolean;
    skills: (string | number)[];
  }[];
};

const User = ({ users }: propsTypes) => {
  const style = {
    color: "red",
  };
  return (
    <div>
      Hello,
      {users.map((user) => (
        <div key={user.name}>
          <h1 style={style}>Name: {user.name}</h1>
          <p>Age: {user.age}</p>
          <p>City: {user.city}</p>
          <p>Paid: {user.paid ? "Yes" : "No"}</p>
          <p>Skills: {user.skills.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default User;

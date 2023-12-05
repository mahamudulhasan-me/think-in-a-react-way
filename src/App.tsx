import Button from "./components/Button";
import CounterByContext from "./components/CounterByContext";
import CounterReducer from "./components/CounterReducer";
import FetchData from "./components/FetchData";

const App = () => {
  const users = [
    {
      name: "Mahmud",
      age: 24,
      city: "Dhaka",
      paid: true,
      skills: ["HTML", "CSS", "JS", 69],
    },
    {
      name: "Hasan",
      age: 25,
      city: "Gaibandha",
      paid: false,
      skills: ["HTML", "CSS", "JS", "React", "Node"],
    },
  ];
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ textAlign: "center" }}>User Management</h1>
      <hr />
      {/* {users.map((user) => (
        <User users={user} />
      ))} */}
      {/* <User users={users} /> */}
      <FetchData status="loading" />
      <Button>Learn More</Button>
      {/* <Counter
        counterStyle={{
          color: "red",
          display: "flex",
          justifyContent: "center",
        }}
      /> */}
      {/* <CounterReducer /> */}
      <CounterByContext />
    </div>
  );
};

export default App;

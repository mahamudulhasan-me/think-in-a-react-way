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
    </div>
  );
};

export default App;

type statusPropsType = {
  status: "loading" | "success" | "error";
};

const FetchData = ({ status }: statusPropsType) => {
  return (
    <div>
      {status === "loading" && <p>Loading...</p>}
      {status === "success" && <p>Success</p>}
      {status === "error" && <p>Error</p>}
    </div>
  );
};

export default FetchData;

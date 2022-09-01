import "./App.css";
import { useAllUsers } from "./hooks/useAllUsers";
import { UserCard } from "./UserCard";

function App() {
  const { fetchUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => {};
  return (
    <div className="App">
      <button onClick={fetchUsers}>データ取得</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データ取得に失敗しました。</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}

export default App;

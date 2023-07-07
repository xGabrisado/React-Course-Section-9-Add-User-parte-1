import styles from "./UserList.module.css";

const UserList = (props) => {
  console.log(props.userArray);
  return (
    <div className={styles["user-list"]}>
      {props.userArray.map((user) => {
        return (
          <label key={user.id}>{`${user.name} (${user.age} years old)`}</label>
        );
      })}
    </div>
  );
};

export default UserList;

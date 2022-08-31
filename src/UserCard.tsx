import { FC } from "react";
import { UserProfileType } from "./type/UserProfileType";

type Props = {
  user: UserProfileType;
};

export const UserCard: FC<Props> = (props) => {
  const { user } = props;
  const style = {
    border: "solid 1px #ccc",
    borderRadius: "8px",
    padding: "0 16px",
    margin: "8px",
  };
  return (
    <dl style={style}>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>メール</dt>
      <dd>{user.email}</dd>
      <dt>住所</dt>
      <dd>{user.address}</dd>
    </dl>
  );
};

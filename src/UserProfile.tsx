import { FC } from "react"
import { UserType } from "./type/UserType"

type Props = {
  user:UserType;
}

export const UserProfile:FC<Props> = (props) => {
  const {user} = props;
  return (
    <dl>
      <dt>名前</dt>
      <dd>{user.name}</dd>
      <dt>趣味</dt>
      <dd>{user.hobbies?.join(" / ")}</dd>
    </dl>
  )
}
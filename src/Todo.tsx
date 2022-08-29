import { TodoType } from "./type/TodoType";

export const Todo = (props:TodoType) => {
  const { title, userId, completed,id } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark} ${title}(ユーザー:${userId})`}</p>;
};

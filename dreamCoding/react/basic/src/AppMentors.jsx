import React, { useReducer, useState } from "react";
import personReducer from "./reducer/person-reduer";

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const updateMentor = () => {
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    dispatch({ type: "updated", prev, current });
  };

  const addMentor = () => {
    const name = prompt("이름이 무엇인가요?");
    const title = prompt("title이 무엇인가요?");
    dispatch({ type: "added", name, title });
  };
  const removeMentor = () => {
    const name = prompt("어떤 멘토를 삭제할까요?");
    dispatch({ type: "deleted", name });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={updateMentor}>멘토의 이름을 바꾸기</button>
      <button onClick={addMentor}>멘토 추가하기</button>
      <button onClick={removeMentor}>멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};

import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
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
  });

  const addMentor = () => {
    const name = prompt("이름이 무엇인가요?");
    const title = prompt("title이 무엇인가요?");
    setPerson({ ...person, mentors: person.mentors.concat({ name, title }) });
  };
  const removeMentor = () => {
    const name = prompt("어떤 멘토를 삭제할까요?");

    setPerson({
      ...person,
      mentors: person.mentors.filter((mentor) => mentor.name !== name),
    });
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
      <button
        onClick={() => {
          const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
          const current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
          const updated = person.mentors.map((mentor) =>
            mentor.name === prev ? { ...mentor, name: current } : { ...mentor }
          );
          setPerson({ ...person, mentors: updated });
        }}
      >
        멘토의 이름을 바꾸기
      </button>
      <button onClick={addMentor}>멘토 추가하기</button>
      <button onClick={removeMentor}>멘토 삭제하기</button>
    </div>
  );
}

export default function personReducer(person, action) {
  switch (action.type) {
    case "updated": {
      const { prev, current } = action;
      return {
        ...person,
        mentors: person.mentors.map((mentor) =>
          mentor.name === prev ? { ...mentor, name: current } : { ...mentor }
        ),
      };
    }
    case "added": {
      const { name, title } = action;
      return {
        ...person,
        mentors: person.mentors.concat({ name, title }),
      };
    }
    case "deleted": {
      const { name } = action;
      return {
        ...person,
        mentors: person.mentors.filter((mentor) => mentor.name !== name),
      };
    }
    default: {
      throw Error(`알수없는 액션 타입 : ${action.type}`);
    }
  }
}

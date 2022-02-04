export const todoSchedules = [
  {
    label: "Weekdays",
    value: "Weekdays",
  },
  {
    label: "Weekends",
    value: "Weekends",
  },
];

export const todoTypes = [
  {
    label: "Washing",
    value: "Washing",
  },
  {
    label: "Cooking",
    value: "Cooking",
  },
  {
    label: "Cleaning",
    value: "Cleaning",
  },
  {
    label: "Playing",
    value: "Playing",
  },
  {
    label: "Writing",
    value: "Writing",
  },
  {
    label: "Reading",
    value: "Reading",
  },
];

export const typeIcons = (todo) => {
  if (todo.type === "Washing") {
    return <i className="fa fa-bath mr-2 fill-current text-pink-400"></i>;
  }
  if (todo.type === "Cooking") {
    return <i className="fa fa-utensils mr-2 fill-current text-gray-300"></i>;
  }
  if (todo.type === "Cleaning") {
    return <i className="fa fa-broom mr-2 fill-current text-yellow-900"></i>;
  }
  if (todo.type === "Playing") {
    return <i className="fab fa-steam mr-2 text-blue-900 fill current"></i>;
  }
  if (todo.type === "Writing") {
    return <i className="fa fa-pen mr-2"></i>;
  }
  if (todo.type === "Reading") {
    return <i className="fa fa-book mr-2 fill-current text-purple-400"></i>;
  }
  return "";
};

let returnGrade = (marks) => {
  switch (true) {
    case marks >= 90 && marks <= 100:
      return "S";
    case marks >= 80 && marks < 90:
      return "A";
    case marks >= 70 && marks < 80:
      return "B";
    case marks >= 60 && marks < 70:
      return "C";
    case marks >= 50 && marks < 60:
      return "D";
    case marks >= 40 && marks < 50:
      return "E";
    case marks >= 0 && marks < 40:
      return "Student has failed";
    default:
      return "Invalid Marks";
  }
};

console.log(returnGrade(50));

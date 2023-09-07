export const isStudent = (user) => {
  return user?.role === "student" ? true : false;
};

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  if(!role||!email||!password){
    return alert("Please provide all fields")
  }
  try {
    console.log("login", e, email, password, role);
  } catch (error) {
    console.log(error);
  }
};
export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  organisationName,
  hospitalName,
  website,
  address,
  phone
) => {
  e.preventDefault();
  try {
    console.log(
      "register",
      e,
      name,
      role,
      email,
      password,
      organisationName,
      hospitalName,
      website,
      address,
      phone
    );
  } catch (error) {
    console.log(error);
  }
};

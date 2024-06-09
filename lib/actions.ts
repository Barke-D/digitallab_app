import axios from "axios";

const sendEmail = async (name: any, email: any, message: any) => {
  return axios({
    method: "post",
    url: "/api/contact",
    data: {
      name: name,
      email: email,
      message: message,
    },
  });
};

export default sendEmail;

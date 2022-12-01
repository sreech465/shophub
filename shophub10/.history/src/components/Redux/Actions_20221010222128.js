import axios from "axios";

import data from "../../data";

export const addToCart = (cart) => {
  console.log(cart);
  //console.log(quantity);

  return {
    type: "ADD_TO_CART",
    payload: cart,
  };
};
console.log(data);
export const Increment = (id) => {
  console.log(id);
  return {
    type: "INCREMENT",
    payload: id,
  };
};

export const Decrement = (id) => {
  return {
    type: "DECREMENT",
    payload: id,
  };
};

export const Remove = (id) => {
  return {
    type: "DELETE",
    payload: id,
  };
};

//  export const Log = (formData,history) => {
//     return async (dispatch) => {
//         const url = "https://e-prathibha.com/apis/login";
//         await axios.post(url,formData).then((res) => {
//             console.log(res.data,"response from login api");
//             if(res.data.status === 200) {
//                 console.log(res.data)
//                 dispatch({type:"LOGIN",payload:res.data})
//                 alert("logged in successfully")
//                 history.push("/home")
//             } else{
//                 alert("enter valid email")
//             }

//         })

//     }

// }

export const Log = ({ formData, history }) => {
  console.log(formData);
  // console.log(email)

  // const formData = new FormData();

  // formData.append('email',email)
  // formData.append('password',password)

  return async (dispatch) => {
    try {
      await axios
        .post(`http://test.e-prathibha.com/apis/login`, formData)
        .then((res) => {
          console.log("response from api", res.data);
          if (res.status === 200) {
            dispatch({ type: "LOGIN", payload: res.data });
            alert("logged in successfully");
            history.push("/");
          } else {
            alert("Enter valid Email");
          }
        });
    } catch (err) {
      console.error(err);
    }
  };
};

export const SignUp = (
  email,
  name,
  password,
  confirmPassword,
  phone,
  history
) => {
  const formData = {
    email: email,
    name: name,
    password: password,
    confirmPassword: confirmPassword,
    phone: phone,
  };
  return async (dispatch) => {
    const url = "http://test.e-prathibha.com/apis/register";
    await axios.post(url, formData).then((res) => {
      console.log(res, "res");
      if (res.data.status === 200) {
        history.push("/verify");
        alert("Redirecting To OTP verify page");
        dispatch({ type: "REGISTER", payload: res.data });
      } else {
        alert("enter valid input");
      }
    });
  };
};

export const verify = (regotp, history) => {
  const OData = {
    reg_code: regotp,
  };
  console.log("regoyp: ", regotp);
  return async (dispatch) => {
    const url = "https://e-prathibha.com/apis/verifyEmail";
    await axios.post(url, OData).then((res) => {
      console.log(res, "response");
      if (res.data.status === 200) {
        console.log("otpResponse", res);
        history.push("/");
        alert("emailverify completed");
        dispatch({ type: "OTP", payload: res.data });
      }
    });
  };
};

export const sorting = (target) => {
  return async (dispatch) => {
    axios
      .get(`https://fakestoreapi.com/${target}`)
      .then((res) => {
        dispatch({
          type: "SORTING_ITEM",
          payload: res.data,
        });
      })
      .catch((error) => {
        console.log("error message", error);
      });
  };
};

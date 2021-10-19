import { useDispatch, useSelector } from "react-redux";

import { useHistory } from "react-router-dom";
import { useState } from "react";
import { addUser } from "../slices/users";

const AddUser = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState(null);

  const handleFirstName = (e) => setFirstName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPwd(e.target.value);
  const handleMobile = (e) => setMobile(e.target.value);

  const usersAmount = useSelector((state) => state.users.entities.length);

  const handleClick = (event) => {
    event.preventDefault();
    if (fname && lname && email && pwd && mobile) {
      dispatch(
        addUser({
          id: usersAmount + 1,
          name: `${fname} ${lname}`,
          password: pwd,
          phone: mobile,
          company: {bs: ""},
          website: "",
          email,
        })
      );
        
      setError(null);
      history.push("/");
    } else {
      setError("Fill in all fields");
    }

    setFirstName("");
    setLastName("");
    setPwd("");
    setMobile("");
    setEmail("");
  };

  return (
    <div className="container">
      <div className="row">
        <h1>Add New User</h1>
      </div>
      <form>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">First Name</label>
            <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    onChange={handleFirstName}
                    value={fname}
                />
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Last Name</label>
            <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    onChange={handleLastName}
                    value={lname}
                />
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
                <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={handleEmail}
                    value={email}
                />
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
                <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={handlePassword}
                    value={pwd}
                />
            </div>
        </div>
        <div className="form-group row">
            <label className="col-sm-2 col-form-label">Mobile</label>
            <div className="col-sm-10">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Mobile"
                    onChange={handleMobile}
                    value={mobile}
                />
            </div>
        </div>
        <p>{error && error}</p>
        <button onClick={handleClick} className="btn btn-primary">
            Add user
          </button>
        </form>
    </div>
  );
}

export default AddUser;
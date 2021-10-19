import React,{ useEffect } from "react";

import { fetchUsers, userDeleted } from "../slices/users";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

const Users = () => {
    console.log("Users")
    const dispatch = useDispatch();

    // Commented bcz API is not responsive as its Fake API 
    // To persist the data we call the when we click the the Load User CTA

    // useEffect(() => {
    //     dispatch(fetchUsers());
    // }, [])

    const { entities } = useSelector((state) => state.users);
    const loading = useSelector((state) => state.loading);

    const getFirstName = (name) => {
        const values = name.split(" ");
        return values[0];
    }

    const getLastName = (name) => {
        const values = name.split(" ");
        return values[1] ? name.substr(name.indexOf(' ') + 1) : '';
    }

    const handleDelete = (id) => {
        // console.log(id)
        dispatch(userDeleted({ id }));
    };

    return (
        <div className="container">
            <button
            onClick={() => dispatch(fetchUsers())}
            className="btn btn-primary"
          >Load Users</button>
            <Link to="/add-user">
                <button className="btn btn-primary">Add user</button>
            </Link>
            <div className="row">
                {loading ? (
                "Loading..."
                ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Role</th>
                            <th scope="col">Department</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {entities.map(({ id, name, email, phone, company, website }, i) => (
                            <tr key={i}>
                                <th scope="row">{id}</th>
                                <td>{getFirstName(name)}</td>
                                <td>{getLastName(name)}</td>
                                <td>{email}</td>
                                <td>{phone}</td>
                                <td>{company.bs}</td>
                                <td>{website}</td>
                                <td>
                                    <Link to=''>
                                        <button type="button" className="btn btn-primary">Edit</button>
                                    </Link>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => handleDelete(id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            </div>
        </div>
    );
}


export default React.memo(Users);
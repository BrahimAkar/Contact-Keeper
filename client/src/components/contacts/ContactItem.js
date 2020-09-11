import React from "react";

export const ContactItem = ({ contact }) => {
  const { name, type, phone, email, id } = contact;
  return (
    <div className="card bg-light">
      <h3 className="text-primary text-left">
        {name}{" "}
        <span
          style={{ float: "right " }}
          className={
            "badge " +
            (type === "professional" ? "badge-success" : "badge-primary")
          }
        >
          {type}
        </span>{" "}
      </h3>

      <ul className="list">
        {email && (
          <li>
            <i className="fas fa-envelope-open"></i> {email}
          </li>
        )}
        {phone && (
          <li>
            <i className="fas fa-phone"></i> {phone}
          </li>
        )}
      </ul>
      <p>
        <button className="btn btn-dark btn-sm">Edit</button>
        <button className="btn btn-danger btn-sm">Delete</button>
      </p>
    </div>
  );
};

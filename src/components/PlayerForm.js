import React from "react";

const PlayerForm = (props) => {
  const handleChange = (event) => {
    const { name, value } = event.target;

    props.onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.submit();
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label>
        {" "}
        Nickname
        <input
          name="nickname"
          type="text"
          placeholder="NickName"
          value={props.values.nickname}
          onChange={handleChange}
        />
      </label>

      <label>
        {" "}
        Name
        <input
          name="name"
          type="text"
          placeholder="Name"
          value={props.values.name}
          onChange={handleChange}
        />
      </label>

      <label>
        {" "}
        Email
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={props.values.email}
          onChange={handleChange}
        />
      </label>

      <label>
        {" "}
        Role
        <select value={props.values.role} name="role" onChange={props.onChange}>
          <option value="">-- Select a Role --</option>
          <option value="Hard Carry">Hard Carry</option>
          <option value="Mid Liner">Mid Liner</option>
          <option value="Off Liner">Off Liner</option>
          <option value="Support">Support</option>
          <option value="Hard Support">Hard Support</option>
        </select>
      </label>

      <input type="submit" value="SUBMIT!" className="btn"/>
    </form>
  );
};

export default PlayerForm;

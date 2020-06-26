import React, { useState, useEffect } from "react";
import { postSmurf, updateSmurf } from "../actions/action";
import { connect } from "react-redux";

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: Math.random() * 1000000000000,
  });

  useEffect(() => {
    setSmurf(props.smurfToEdit);
  }, [props.isEditing, props.smurfToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();

    
    props.isEditing
     ? props.updateSmurf(props.smurfToEdit.id, smurf)
     : props.postSmurf(smurf);
    
    
    setSmurf({
      name: "",
      age: "",
      height: "",
      id: Math.random() * 100000000000,
    });
  };

  const changeHandler = (e) => {
    setSmurf({ ...smurf, [e.target.name]: e.target.value });
  };
  return (
    <form className="smurfForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={smurf.name}
        onChange={changeHandler}
        placeholder="...name"
      />
      <input
        type="text"
        name="height"
        value={smurf.height}
        onChange={changeHandler}
        placeholder="...height"
      />
      <input
        type="text"
        name="age"
        value={smurf.age}
        onChange={changeHandler}
        placeholder="...age"
      />
      <button>{props.isEditing ? `update` : `add`}</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    smurfToEdit: state.smurfToEdit,
    isEditing: state.isEditing,
  };
};


export default connect(mapStateToProps, { postSmurf, updateSmurf })(SmurfForm);

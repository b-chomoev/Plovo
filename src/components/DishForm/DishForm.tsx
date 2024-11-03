import React, { useState } from "react";
import { ApiDish, IDishMutation } from '../../types';

interface Props {
  addNewDish: (newDish: ApiDish) => void;
}

const DishForm: React.FC<Props> = ({ addNewDish }) => {
  const [newDish, setNewDish] =useState<IDishMutation>({
    name: "",
    description: "",
    price: 0,
    urlImage: "",
  });

  const changeDish = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setNewDish((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newDish.name.trim().length === 0 && newDish.description.trim().length === 0 && newDish.price <= 0) {
      alert("Fill in the blank");
    } else {
      addNewDish({
        ...newDish,
        price: Number(newDish.price),
      });

      setNewDish({
        name: "",
        description: "",
        price: 0,
        urlImage: "",
      });
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Add new dish</h3>
      <div className="form-group mb-2">
        <label htmlFor="name">Title:</label>
        <input
          type="text"
          value={newDish.name}
          onChange={changeDish}
          id="name"
          name="name"
          className="form-control"
          required
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          value={newDish.description}
          onChange={changeDish}
          id="description"
          className="form-control"
          required
        ></textarea>
      </div>

      <div className="form-group mb-2">
        <label htmlFor="urlImage">URL image:</label>
        <input
          type="url"
          value={newDish.urlImage}
          onChange={changeDish}
          id="urlImage"
          name="urlImage"
          className="form-control"
        />
      </div>

      <div className="form-group mb-2">
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          value={newDish.price}
          onChange={changeDish}
          id="price"
          name="price"
          min={0}
          className="form-control"
          required
        />
      </div>

      <button className="btn btn-dark">Add</button>
    </form>
  );
};

export default DishForm;

import React, { useState } from "react";
import { ApiDish, IDishMutation } from '../../types';
import ButtonLoading from '../UI/ButtonLoading/ButtonLoading';

interface Props {
  addNewDish: (newDish: ApiDish) => void;
  existingDish?: IDishMutation;
  isEdit?: boolean;
  isLoading?: boolean;
}

const initialState = {
  name: "",
  description: "",
  price: 0,
  urlImage: "",
};

const DishForm: React.FC<Props> = ({ addNewDish, existingDish = initialState, isEdit = false, isLoading = false }) => {
  const [newDish, setNewDish] =useState<IDishMutation>(existingDish);

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

      if (!isEdit) {
        setNewDish(initialState);
      }
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <h3> {isEdit ? 'Edit dish' : 'Add new dish'}</h3>
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

      <ButtonLoading text={isEdit ? 'Edit' : 'Add'} isLoading={isLoading} isDisabled={isLoading} />

      {/*<button disabled={isLoading} className="btn btn-dark d-flex align-items-center">*/}
      {/*  <span className='me-2'>{isEdit ? 'Edit' : 'Add'}</span>*/}
      {/*  {isLoading ? <ButtonSpinner /> : null}*/}
      {/*</button>*/}
    </form>
  );
};

export default DishForm;


const DishForm = () => {
  return (
    <form>
      <h3>Add new dish</h3>
      <div className='form-group mb-2'>
        <label htmlFor="name">Title:</label>
        <input
          type="text"
          id='name'
          name='name'
          className='form-control'
        />
      </div>

      <div className='form-group mb-2'>
        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          id="description"
          className='form-control'
        ></textarea>
      </div>

      <div className='form-group mb-2'>
        <label htmlFor="urlImage">URL image:</label>
        <input
          type="url"
          id='urlImage'
          name='urlImage'
          className='form-control'
        />
      </div>

      <div className='form-group mb-2'>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id='price'
          name='price'
          min={0}
          className='form-control'
        />
      </div>

      <button className='btn btn-dark'>Add</button>

    </form>
  );
};

export default DishForm;
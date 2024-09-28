function AddEmployees({ showModel }) {
    return (
      <div
        className={`modal fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center ${
          showModel ? 'block' : 'hidden'
        }`}
        tabIndex={-1}
        role="dialog"
      >
<div>add</div>
      </div>
    );
  }
  
  export default AddEmployees;
  
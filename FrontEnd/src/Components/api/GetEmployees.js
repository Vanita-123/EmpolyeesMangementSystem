// // const Base_Url ="http://localhost:4000/Employees/get?page=2&limit=10&search=' '"
// // http://localhost:4000/Employees/get?Serach=&page%20=1&limit%20=5


// const Base_Url ="http://localhost:4000/Employees/get?page=2&limit=10&search=' '"
const Base_Url = "http://localhost:4000";

// http://localhost:4000/Employees/get?Search=&page=1&limit=5

export const GetEmplyees = async (search = "", page = 1, limit = 5) => {
    const url = `${Base_Url}/Employees/?search=${encodeURIComponent(search)}&page=${page}&limit=${limit}`;
    try {
        const options = {
            method: 'GET',
            headers: {        
                'Content-Type': 'application/json', 
            },
        };
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};


// const Base_Url = "http://localhost:4000";

// http://localhost:4000/Employees/get?Search=&page=1&limit=5
export const CreateEmplyees = async (empObj) => {
    // const url = `${Base_Url}/Employees`;
    const url = `http://localhost:4000/Employees`
  
    try {
      const formData = new FormData();
            for (const key in empObj) {
        formData.append(key, empObj[key]);
      }
  
      const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify(empObj),
                };
        
      const result = await fetch(url, options);
      const data = await result.json();
      return data;
      
    } catch (error) {
      console.error("Error while creating employee:", error);
    }
  };



// update employees
export const UpdateEmplyeesById = async (empObj, id) => {
    // const url = `${Base_Url}/Employees`;
    const url = `http://localhost:4000/Employees/${id}`
  
    try {
      const formData = new FormData();
            for (const key in empObj) {
        formData.append(key, empObj[key]);
      }
  
      const options = {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json', 
                    },
                    body: JSON.stringify(empObj),
                };
        
      const result = await fetch(url, options);
      const data = await result.json();
      return data;
      
    } catch (error) {
      console.error("Error while creating employee:", error);
    }
  };




//   delete

export const DeleteEmplyeesById = async (id) => {
    const url = `http://localhost:4000/Employees/${id}`;
  
    try {
      const options = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json', 
        },
      };
  
      const result = await fetch(url, options);
      const data = await result.json(); 
      return data;
      
    } catch (error) {
      console.error("Error while deleting employee:", error);
      return { success: false, message: 'Failed to delete employee' };
    }
  };
  

// fetch to details
  
export const GetEmplyeesById = async (id) => {
  const url = `http://localhost:4000/Employees/${id}`;

  try {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
      },
    };

    const result = await fetch(url, options);
    const data = await result.json(); 
    return data;
    
  } catch (error) {
    console.error("Error while get employee:", error);
    return { success: false, message: 'Failed to get employee' };
  }
};

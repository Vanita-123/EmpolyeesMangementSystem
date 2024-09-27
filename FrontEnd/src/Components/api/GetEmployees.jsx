// // const Base_Url ="http://localhost:4000/Employees/get?page=2&limit=10&search=' '"
// const Base_Url ="http://localhost:4000"



// export const GetEmplyoees =async(search= "", page=1, limit= 5)=>{
//    const url =`${Base_Url}/Employees?Serach=${search}&page =${page}&limit =${limit}`
//     try {
//         const options= {
//             method :'GET',
//             'Content-Type': 'application/json'

//         }
//         const result = await fetch (url, options);
//         const data = await result.json();
//         return data ;
        
//     } catch (error) {
//         console.log(error)
//     }
// };



const Base_Url = "http://localhost:4000";

export const GetEmployees = async (search = "", page = 1, limit = 5) => {
  // Properly format the URL without extra spaces
  const url = `${Base_Url}/Employees?search=${search}&page=${page}&limit=${limit}`;

  try {
    const options = {
      method: 'GET',
      headers: { 
        'Content-Type': 'application/json' 
      }
    };
    
    const result = await fetch(url, options);
    
    // Check if response is ok (status in the range 200-299)
    if (!result.ok) {
      throw new Error(`Error: ${result.status}`);
    }

    const data = await result.json();
    return data;
  } catch (error) {
    console.log('Error fetching employees:', error);
    return null; // Return null or handle the error as needed
  }
};

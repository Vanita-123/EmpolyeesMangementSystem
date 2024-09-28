// // const Base_Url ="http://localhost:4000/Employees/get?page=2&limit=10&search=' '"
// const Base_Url ="http://localhost:4000";

// // http://localhost:4000/Employees/get?Serach=&page%20=1&limit%20=5

// export const GetEmplyoees =async(search= "", page=1, limit= 5)=>{
//    const url =`${Base_Url}/Employees/?Serach=${search}&page =${page}&limit =${limit}`
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

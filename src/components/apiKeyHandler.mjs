export default async function validKey () {

 const keys = [
      process.env.REACT_APP_MY_API_1,
      process.env.REACT_APP_MY_API_2,
      process.env.REACT_APP_MY_API_3, 
  ];
    for(let i = 0;i<keys.length;i++){
        let apiKey = keys[i];
        let url = `https://newsdata.io/api/1/latest?apikey=${apiKey}`;
        let response =  await fetch(url);

        let parsed = await response.json();
        if(parsed.status === "success"){
            return apiKey;
  
        }
   }

   return null;
}













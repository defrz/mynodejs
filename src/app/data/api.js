class Api {
    static getMovie(keyword) {
    	return fetch(`http://www.omdbapi.com/?apikey=aa347e8e&t=${keyword}`)
    	
    	/* LINK API ASLINYA DIBAWAH INI
			
		-> http://www.omdbapi.com/?apikey=aa347e8e&										
		-> Gunakan huruf (t) di ahkhir link untuk mencari judul
		-> Contoh http://www.omdbapi.com/?apikey=aa347e8e&t=Avengers 							
		
		*/
    	
    	.then(response => {
 			return response.json()	 	
   		})
 		.then(responseJson => {
 			if(responseJson) {
 				return Promise.resolve(responseJson);
 			}else{
 				return Promise.reject(`${keyword} Judul Tidak ditemukan!`);
 			}
 		})
 	}
 }
 
export default Api;
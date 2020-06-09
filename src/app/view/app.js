import '../component/search-movie.js';
import Api from "../data/api.js";
const app = () => {
		const inputElement = document.querySelector("search-movie");
		
	const btnFunction = async () => {
	try{
		const result = await Api.getMovie(inputElement.value);
		renderResult(result);
	} catch (message) {
		fallbackResult(message);
	}
};

 // Error Message //
 const fallbackResult = message => {
 		console.log("Upsss! Something wrong!");
};
// Render Object //
const renderResult = (result) => {
	const listMovieElement = document.querySelector("#data");

		listMovieElement.innerHTML = `
		<div class="card-deck">
		<div class"card-body">
		<img src=`+ result.Poster + `"card-img-top">
  		<div class="card-body">
    	<h5 class="card-title">`+ result.Title + `</h5>
    	<p class="card-text">` + result.Released +`</p>
  		</div></div>`;
	}

	inputElement.clickEvent = btnFunction;
};
export default app;
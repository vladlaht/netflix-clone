import "./assets/style/app.scss"
import React from "react";
import CategoryRow from "./components/CategoryRow";
import {requests} from "./api/requests";
import HeaderContainer from "./containers/HeaderContainer";

const App = () => {

    return (
        <div className="app">
            <HeaderContainer/>
            <CategoryRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} netflixOriginals/>
            <CategoryRow title="Top Rated" fetchUrl={requests.fetchTopRated}/>
            {/*<CategoryRow title="Trending Now" fetchUrl={requests.fetchTrending}/>*/}
            {/*<CategoryRow title="Action Movies" fetchUrl={requests.fetchActionMovies}/>*/}
            {/*<CategoryRow title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies}/>*/}
            {/*<CategoryRow title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>*/}
            {/*<CategoryRow title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies}/>*/}
            {/*<CategoryRow title="Family Movies" fetchUrl={requests.fetchFamilyMovies}/>*/}
            {/*<CategoryRow title="Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>*/}
            {/*<CategoryRow title="Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>*/}
            {/*<CategoryRow title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies}/>*/}
            {/*<CategoryRow title="War Movies" fetchUrl={requests.fetchWarMovies}/>*/}
        </div>
    );
};

export default App;
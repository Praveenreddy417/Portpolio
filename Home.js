// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { getUserDataAction } from "./Store/actions/userdataAction";
import UseEffect from "./UseEffects";
import UseState from "./useState";

const Home = () => {
 
    const openNewTab = () => {
        // Specify the URL you want to open in the new tab
        const url = 'https://www.example.com';

        // Open a new tab with the specified URL
        window.open(url, '_blank');
    };

    return <> <h1>Home</h1>
        <button onClick={openNewTab}>
            Open New Tab
        </button>
        <UseState/>
        <UseEffect/>
        </>
};

export default Home;
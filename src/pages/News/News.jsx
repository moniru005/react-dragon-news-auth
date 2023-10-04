import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {

    const {id} = useParams();

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-6">
                <div className="left-side col-span-3 border-2">
                    <h2 className="text-xl font-semibold p-4">News Details</h2>
                    <p>{id}</p>
                </div>
                <div className="right-side border-2 ">
                    <RightSideNav></RightSideNav>
                </div>

            </div>
        </div>
    );
};

export default News;
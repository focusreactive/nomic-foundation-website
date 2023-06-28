import { NextPage } from "next";
import Error from "next/error";

const NotFoundPage: NextPage = () => {
  return <div id="not-found-container">
    <Error statusCode={404} />
  </div>
};

export default NotFoundPage;

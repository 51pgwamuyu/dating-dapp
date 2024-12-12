import { useParams } from "react-router-dom";
import { love_backend } from "declarations/love_backend";
import { useEffect, useState } from "react";
const AboutUser = () => {
  const { username } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    love_backend.get_user(username).then((result) => {
      console.log(result, "user");
      setData(result.ok);
    });
  }, []);
  console.log(data, "data");
  if (!data) {
    return <div className="h-full flex items-center justify-center">no data available</div>;
  }
  return (
    <div className="max-w-[1300px] mx-auto pb-5">
      <div className="w-[500px] mx-auto mt-3 border-md border  mb-4 p-2">
        <img src={data.image} alt="user" className="w-full h-[300px] border" />
        <div className="">
          <h1 className="text-2xl font-bbold text-center my-2">
            {data.username}
          </h1>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-sm font-semibold flex items-center"></h1>
            </div>
          </div>
          <h1 className="font-bold text-xl">About Me </h1>
          <p className="text-sm my-3">
            <span className="font-bold text-xl"> </span>
            {data.description}
          </p>
          <h1 className="font-bold text-xl">Match Description</h1>
          <p className="text-sm my-3">
            <span className="font-bold text-xl"> </span>
            {data.matchdescription}
          </p>
          <div className="flex space-x-10">
            <a href={`mailto:${data.email}`} className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-mail-check"
              >
                <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                <path d="m16 19 2 2 4-4" />
              </svg>
            </a>
            <a href={`tel:${data.phonenumber}`}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-phone"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUser;

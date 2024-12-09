import Login from "./loginuser";

const NavBar = () => {
  return (
    <div className=" w-full h-[100vh">
      <div className="flex justify-between items-center px-2 pt-3">
        <h1 className="font-bold ">LoVeMeEt</h1>
        <Login />
      </div>
    </div>
  );
};

export default NavBar;

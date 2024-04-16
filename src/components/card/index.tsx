const Card = () => {
    return (
      <div className="rounded-[32px] overflow-hidden shadow-lg bg-gradient-to-r from-[#323161] max-w-[500px] to-[#3E288B]">
        <div className=" p-8 ">
          <h2 className="text-white text-xl font-semibold">{"title"}</h2>
        </div>
        <div className="p-4">
          <p className="text-gray-700">{"description"}</p>
        </div>
      </div>
    );
  };
  
  export default Card;
  
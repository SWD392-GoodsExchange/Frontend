import Avatar from "../../assets/bear.png";

const top5Member = [
  { avt: Avatar, username: "Ngo Quang Dung" },
  { avt: Avatar, username: "Le Trung Kien" },
  { avt: Avatar, username: "Nguyen Ho Tan Tien" },
];

const Top5Transaction = () => {
  return (
    <>
      <div className="bg-white rounded-2xl shadow-sm">
        <p className="text-20 italic text-green-600">
          Top 3 successful traders{" "}
        </p>
        {top5Member.map((item) => (
          <div className="mx-2 my-1 hover:bg-gray-300 p-2 rounded-2xl cursor-pointer">
            <p className=" flex items-center gap-2 font-semibold">
              <img src={item.avt} width={50} height={50} />
              {item.username}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Top5Transaction;

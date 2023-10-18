import { clients } from "../data";

export const ReviewCard = ({ client }) => {
  return (
    <div className="">
      <div
        className="border rounded-lg bg-white w-full px-7 py-5 flex flex-col justify-between"
        key={client.id}
      >
        <p className="text-[2.5rem] font-bold text-gray-600 m-0">"</p>
        <p className="py-3">{client.comment}</p>
        <div className="py-2">
          <hr></hr>
        </div>
        <div className="flex flex-row gap-6 py-2">
          <img className="w-10 h-10 rounded-full object-cover" src={client.src} />
          <div>
            <h3 className="font-bold ">{client.name}</h3>
            <p className="">{client.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

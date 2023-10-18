import { clients } from "../data";

export const ReviewCard = ({ client }) => {
  return (
    <div
      className="border rounded-lg bg-white w-full p-4 lg:px-7 lg:py-5 flex flex-col justify-between"
      key={client.id}
    >
      <p className="text-[1.5rem] lg:text-[2.5rem] font-bold text-gray-800 m-0">
        "
      </p>
      <p className="py-3">{client.comment}</p>
      <div className="py-2">
        <hr></hr>
      </div>
      <div className="flex flex-row gap-3 lg:gap-6 py-2">
        <img className="w-10 h-10 rounded-full object-cover" src={client.src} />
        <div>
          <h3 className="font-bold">{client.name}</h3>
          <p className="text-sm lg:text-base">{client.role}</p>
        </div>
      </div>
    </div>
  );
};

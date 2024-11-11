/* eslint-disable react/prop-types */
const Body = (props) => {
  return (
    <section className="flex w-fit h-fit justify-center items-center">
      <div className="flex h-fit w-full justify-center items-center bg-gray-50 p-2">
        <div className="flex-1 flex-wrap justify-center items-center h-96 gap-4">
          <div className="w-80 m-1 h-96 p-2 rounded-lg flex flex-col hover:cursor-pointer hover:bg-gray-300">
            <img
              className="rounded-lg w-76 h-48 object-fill"
              src={props.item.image}
              alt="Card Image"
            />
            <div className="flex justify-between mt-2 px-2">
              <span
                className="text-sm font-bold"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {props.item.title}
              </span>
              <button type="button" className="hover:bg-gray-200 rounded-full p-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                  />
                </svg>
              </button>
            </div>
            <span
              className="text-sm font-light px-2"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                textTransform: "capitalize",
              }}
            >
              {props.item.description}
            </span>
            <div className="flex justify-between">
              <div className="flex">
                <span className="px-2 font-bold">{props.item.category}</span>
              </div>
              <div className="flex">
                <span className="px-2 font-normal">Price :-</span>
                <span className="px-2 font-bold">$ {props.item.price}</span>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex">
                <span className="px-2 font-normal">Rating :-</span>
                <span className="px-2 font-bold">{props.item.rating.rate}</span>
              </div>
              <div className="flex">
                <span className="px-2 font-normal">Count :-</span>
                <span className="px-2 font-bold">
                  {props.item.rating.count}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Body;

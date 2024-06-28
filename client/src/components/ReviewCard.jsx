import React from "react";

function ReviewCard(props) {
   const {name,star,review} = props

  return (
    <div className="flex flex-col border border-gray-300 rounded-lg w-80 m-4 p-6 shadow-md bg-white">
      <div className="flex items-center space-x-4">
        <img
          src="https://i.pinimg.com/564x/8e/0c/fa/8e0cfaf58709f7e626973f0b00d033d0.jpg"
          alt="reviewer"
          className="rounded-full w-16 h-16"
        />
        <div>
          <span className="font-semibold text-lg">{name}</span>
          <div className="flex items-center mt-1">
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927C9.529 1.304 10.471 1.304 10.951 2.927L12.09 6.66C12.264 7.199 12.716 7.586 13.278 7.655L17.248 8.153C18.946 8.368 19.392 9.907 18.236 10.847L15.2 13.129C14.735 13.468 14.524 14.07 14.662 14.642L15.497 18.498C15.859 20.137 14.468 21.292 13.093 20.493L9.923 18.596C9.407 18.29 8.593 18.29 8.077 18.596L4.907 20.493C3.532 21.292 2.141 20.137 2.503 18.498L3.338 14.642C3.476 14.07 3.265 13.468 2.8 13.129L-0.236 10.847C-1.392 9.907 -0.946 8.368 0.752 8.153L4.722 7.655C5.284 7.586 5.736 7.199 5.91 6.66L7.049 2.927z" />
            </svg>
            <span className="ml-1 text-gray-600">{star}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 text-gray-700">
        <p>
         {review}
        </p>
      </div>
    </div>
  );
}

export default ReviewCard;

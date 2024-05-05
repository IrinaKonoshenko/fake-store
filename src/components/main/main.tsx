export function Main() {
  return (
    <div className="mx-5 my-10 grow">
      <ul className="flex items-center justify-between gap-2">
        <li className="flex flex-col items-center gap-5">
          <a href="" className="flex items-center justify-center">
            <img
              src="https://i.pinimg.com/550x/6f/d9/7a/6fd97a80853cec50f5d9d6319af02d7d.jpg"
              alt=""
              className="h-[575px] max-w-96 overflow-hidden"
            />
          </a>
          <div className="text-3xl font-medium text-gray-700">Women</div>
        </li>
        <li className="flex flex-col items-center gap-5">
          <a href="" className="flex items-center justify-center">
            <img
              src="https://miro.medium.com/v2/resize:fit:683/0*JQGt5cN0oZbo4uLV.jpg"
              alt=""
              className="h-[575px] max-w-96 overflow-hidden"
            />
          </a>
          <div className="text-3xl font-medium text-gray-700">Men</div>
        </li>
        <li className="flex flex-col items-center gap-5">
          <a href="" className="flex items-center justify-center">
            <img
              src="https://i.pinimg.com/736x/cc/7b/13/cc7b13c2e54a2edf0ac2d1fb7fcd8323.jpg"
              alt=""
              className="h-[575px] max-w-96 overflow-hidden"
            />
          </a>
          <div className="text-3xl font-medium text-gray-700">Child</div>
        </li>
      </ul>
    </div>
  );
}

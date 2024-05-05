export function Footer() {
  return (
    <div className="mx-auto flex w-[1300px] max-w-full shrink-0 items-center justify-between gap-10 border-t-2 border-t-gray-700 pb-5 pt-3">
      <a href="/" className="h-10 w-10 overflow-hidden">
        <img src="https://fakestoreapi.com/icons/logo.png" />
      </a>
      <div className="flex justify-between gap-10 text-lg font-semibold text-gray-700">
        <a> Galle Road, Colombo 3</a>
        <a href="tel:+94 112 500 050">+94 112 500 050</a>
        <a href="mailto:address_shop@gmail.com">address_shop@gmail.com</a>
      </div>
      <ul className="flex items-center justify-between gap-5">
        <li className="h-10 w-10 overflow-hidden">
          <a href="https://instagram.com/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
              alt=""
            />
          </a>
        </li>
        <li className="h-10 w-10 overflow-hidden">
          <a href="https://www.facebook.com/">
            <img
              src="https://i.pinimg.com/736x/7c/cb/40/7ccb40e2fa23d39346cc9dc8691d68b3.jpg"
              alt=""
            />
          </a>
        </li>
        <li className="h-10 w-10 overflow-hidden">
          <a href="https://web.telegram.org/a/">
            <img
              src="https://cdn0.iconfinder.com/data/icons/social-media-entertainment-line/32/Telegram-512.png"
              alt=""
            />
          </a>
        </li>
        <li className="h-10 w-10 overflow-hidden">
          <a href="https://twitter.com/?lang=ru">
            <img
              src="https://img.freepik.com/free-vector/twitter-new-2023-x-logo-white-background-vector_1017-45422.jpg?size=338&ext=jpg&ga=GA1.1.867424154.1714176000&semt=ais"
              alt=""
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

/* eslint-disable react/react-in-jsx-scope */
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div className="text-black flex flex-col items-center mt-32 mb-20">
        <p className="text-9xl font-bold">404</p>
        <p className="text-5xl">Not Found</p>

        <Link
          to="/"
          className="text-green-600 py-2 px-10 my-10 font-bold text-2xl transition hover:opacity-40 border border-green-600 rounded-xl"
        >
          TOPページへ
        </Link>

        <p className="mt-10">指定されたページは存在しませんが、</p>
        <p className="">FuchunGamesが作ったゲームは多く存在します。</p>
        <p>
          その中で一番の自信作が ↓ の
          <span className="font-bold">「検討を重ねろ！」</span>です。
        </p>
      </div>
    </>
  );
};

export default NotFound;

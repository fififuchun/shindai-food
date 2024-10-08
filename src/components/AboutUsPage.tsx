/* eslint-disable react/react-in-jsx-scope */
import about from "@/assets/abouts/about.jpg";
import phase from "@/assets/abouts/PhaseImage.webp";
import formIcon from "@/assets/googleForm_Icon.webp";
import { useMediaQueryContext } from "@/components/Provider/MediaQueryProvider";

const AboutUsPage = () => {
  const { isMobileSite, isPcSite } = useMediaQueryContext();

  return (
    <>
      {/* <div className="text-black">sample</div> */}
      <div>
        <img
          src={about}
          alt=""
          className="object-cover w-full flex justify-center absolute -z-10"
          style={{ height: 600 }}
        />

        <div
          className={
            "pt-80 z-10 font-bold text-center" +
            " " +
            (function () {
              if (isMobileSite) return "text-2xl";
              else if (isPcSite) return "text-4xl";
              else return "text-2xl";
            })()
          }
        >
          <p>
            {isMobileSite
              ? "松本の美味しい飲食店を"
              : "松本の美味しい飲食店をもっと知ってほしい"}
          </p>
          {isMobileSite && <p>もっと知ってほしい</p>}
          <p>そんな思いから始まったのが</p>
          <p className="mt-10">「シンダイフード」です</p>
        </div>
      </div>

      <div
        className={
          isMobileSite || isPcSite
            ? "mt-32 text-black p-8"
            : "mt-36 text-black p-8"
        }
      >
        <h2 className="text-green-800 font-bold text-4xl border-b">FUTURE</h2>
        <p className="p-4">
          我々は「シンダイフード」や現在開発中の過去問ポータルサイトの運営を通じて、信大生のための価値創造を目指します
        </p>
      </div>
      <img src={phase} className="" />

      <div className="p-8 text-black">
        <h2 className="text-green-800 font-bold text-4xl border-b">Contact</h2>
        <div className="px-4 pt-4">
          <p>
            掲載希望の飲食店や松本キャンパス以外の広めるべき飲食店を教えてください！
          </p>
        </div>

        <a
          href="https://forms.gle/jBTsDkV9XyKHjdT66"
          target="_blank"
          rel="noreferrer noopener"
          className="flex transition h-32 min-w-min m-4 py-2 border border-gray-400 rounded-2xl"
        >
          <div className="flex">
            <img src={formIcon} className="h-full" />
            <div className="flex flex-col justify-center p-4">
              <p className="font-bold">GoogleForm - 掲載希望飲食店</p>
              <p className="text-sm pt-1">外部サイトに移動します</p>
            </div>
          </div>
        </a>
      </div>

      {/* <div className="p-8 text-black">
        <h2 className="text-green-800 font-bold text-4xl border-b">Contact</h2>

        <div className="px-4 pt-4">
          <p>
            2024年9月現在、我々は長野キャンパス版のリリースを目指していますが、我々制作チームには長野市の広めるべき飲食店に詳しいメンバーがいません
          </p>
          <p>下のGoogle Formからぜひ教えてください！</p>
        </div>
      </div> */}
    </>
  );
};

export default AboutUsPage;

/* eslint-disable react/react-in-jsx-scope */
import about from "@/assets/abouts/about.jpg";
import phase from "@/assets/abouts/PhaseImage.png";
import { useMediaQueryContext } from "@/components/Provider/MediaQueryProvider";

const AboutUsPage = () => {
  const { isMobileSite, isPcSite } = useMediaQueryContext();

  return (
    <>
      <div className="h-2/3">
        <img
          src={about}
          alt=""
          className="object-cover w-full h-2/3 flex justify-center absolute -z-10"
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

      <div className="mt-32 text-black">
        <div className="p-8">
          <h2 className="text-green-800 font-bold text-4xl border-b">FUTURE</h2>
          <p className="p-4">
            我々は「シンダイフード」や現在開発中の過去問ポータルサイトの運営を通じて、信大生のための価値創造を目指します
          </p>
        </div>

        <img src={phase} alt="" className="" />
      </div>

      <div className="text-black">
        <div className="p-8">
          <h2 className="text-green-800 font-bold text-4xl border-b">
            Contact
          </h2>

          <div className="px-4 pt-4">
            <p>
              2024年9月現在、我々は長野キャンパス版のリリースを目指していますが、我々制作チームには長野市の広めるべき飲食店に詳しいメンバーがいません
            </p>
            <p>下のGoogle Formからぜひ教えてください！</p>
          </div>
        </div>

        <div className="text-black">
          <div className="p-8">
            <h2 className="text-green-800 font-bold text-4xl border-b">
              Contact
            </h2>

            <div className="px-4 pt-4">
              <p>
                2024年9月現在、我々は長野キャンパス版のリリースを目指していますが、我々制作チームには長野市の広めるべき飲食店に詳しいメンバーがいません
              </p>
              <p>下のGoogle Formからぜひ教えてください！</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsPage;

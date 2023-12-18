import Image from "next/image";
import Link from "next/link";

interface InsightCardProps {
  date: string;
  author: string;
  headline: string;
  bodyText: string;
  imageUrl: string;
  ctaText: string;
  ctaOutlined: boolean;
}

const InsightCard: React.FC<InsightCardProps> = ({
  date,
  author,
  headline,
  bodyText,
  imageUrl,
  ctaText,
  ctaOutlined,
}) => {
  return (
    <div
      className="bg-cover bg-center w-full h-full xl:h-[430px] flex items-center justify-center px-2 py-10"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="flex flex-col justify-center items-center max-w-xl">
        <div className="flex w-full gap-8 mb-8">
          <div className="flex items-center gap-2">
            <Image src="/time.svg" width={24} height={24} alt="" />
            <p className="font-glancyr mt-1">{date}</p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/pen.svg" width={24} height={24} alt="" />
            <p className="font-glancyr mt-1">{author}</p>
          </div>
        </div>

        <h2 className="text-xl xl:text-3xl font-glancyr w-full">{headline}</h2>
        <p className="mt-2 line-clamp-2 w-full mb-8">{bodyText}</p>

        <div className="w-full">
          <Link
            href="/path-to-article"
            className={`py-3 ${
              ctaOutlined
                ? "rounded-full bg-light-gray text-dark-blue px-5"
                : "border-b text-light-gray"
            }`}
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;

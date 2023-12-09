import Image from "next/image";
import Link from "next/link";

interface InsightCardProps {
  date: string;
  author: string;
  headline: string;
  bodyText: string;
  imageUrl: string;
  ctaText: string;
}

const InsightCard: React.FC<InsightCardProps> = ({
  date,
  author,
  headline,
  bodyText,
  imageUrl,
  ctaText,
}) => {
  return (
    <div
      className="bg-cover bg-center w-full h-full md:h-[430px] flex items-center justify-center px-2 py-10"
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

        <h2 className="text-xl md:text-3xl font-glancyr w-full">{headline}</h2>
        <p className="mt-2 line-clamp-2 w-full mb-8">{bodyText}</p>

        <div className="w-full">
          <Link
            href="/path-to-article"
            className="rounded-full py-3 px-5 bg-[#E5E7E8] text-[#313D46]"
          >
            {ctaText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InsightCard;

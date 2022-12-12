import { FC, ReactNode } from "react";
import { formatDate } from "../../utils/formatDate";

interface InfoItemProps {
  label: string;
  children: ReactNode;
}

const InfoItem: FC<InfoItemProps> = ({ label, children }) => {
  return (
    <div className="flex gap-2">
      <div>{label}</div>|<div>{children}</div>
    </div>
  );
};

interface PartyInfoCardProps {
  startAt: string; // Date str ?
  location: string;
  tags: string[];
}

export const PartyInfoCard: FC<PartyInfoCardProps> = ({
  startAt,
  location,
  tags = [],
}) => {
  return (
    <div className="flex flex-col bg-neutral-400 rounded-md p-4">
      {/* Time & Location */}
      <div className="flex flex-col gap-2">
        <InfoItem label="시간">
          {formatDate(startAt, "M월 D일 dd요일 H:mm")}
        </InfoItem>
        <InfoItem label="장소">{location}</InfoItem>
      </div>

      {/* Tags */}
      <div className="flex mt-6 gap-4">
        {tags.map((tag, i) => (
          <div
            key={i}
            className="px-2 py-1 rounded-lg text-neutral-100 bg-neutral-800"
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

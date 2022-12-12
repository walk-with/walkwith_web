import { FC, useState } from "react";
import { Dog } from "../../../types";
import { Avatar } from "./Avatar";

interface PartyAttendeesProps {
  attendees?: Dog[];
}
export const PartyAttendees: FC<PartyAttendeesProps> = ({ attendees = [] }) => {
  const [focusedDog, setFocusedDog] = useState<Dog>(attendees[0]);

  return (
    <div className="flex flex-col gap-4">
      <p>산책하러 오는 친구들</p>
      <div className="flex gap-4">
        {attendees.map((attendee, i) => (
          <Avatar
            key={attendee.id}
            alt=""
            size="sm"
            isFocused={focusedDog.id == attendee.id}
            onClick={() => setFocusedDog(attendee)}
          />
        ))}
      </div>
      <div className="flex gap-10 items-center">
        <Avatar alt="" size="md" />
        <div className="flex flex-col gap-2">
          <p>이름: {focusedDog.name}</p>
          <p>나이: {focusedDog.birthYear}년생</p>
          <p>성별: {focusedDog.sex ? "여" : "남"}</p>
          <p>몸무게: {focusedDog.weight}kg</p>
          <div className="flex gap-2">
            {focusedDog.tags.map((tag) => (
              <div key={tag}>#{tag}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

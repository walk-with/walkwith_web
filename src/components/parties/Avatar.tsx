import classNames from "classnames";
import Image, { ImageProps } from "next/image";
import { FC } from "react";

type AvatarSize = "sm" | "md" | "lg";

interface AvatarProps extends Omit<ImageProps, "src"> {
  size: AvatarSize;
  isFocused?: boolean;
}

export const Avatar: FC<AvatarProps> = ({
  size,
  isFocused,
  alt,
  ...imgProps
}) => {
  const twWidth: Record<AvatarSize, string> = {
    sm: "w-11",
    md: "w-16",
    lg: "w-20",
  };

  const twHeight: Record<AvatarSize, string> = {
    sm: "h-11",
    md: "h-16",
    lg: "h-20",
  };

  const imgSize: Record<AvatarSize, number> = {
    sm: 44,
    md: 64,
    lg: 80,
  };

  return (
    <div
      className={classNames(
        "rounded-full",
        "bg-slate-400",
        "overflow-hidden",
        twWidth[size],
        twHeight[size]
      )}
    >
      <Image
        alt={alt}
        width={imgSize[size]}
        height={imgSize[size]}
        data-state={isFocused ? "active" : null}
        {...imgProps}
        src="https://thumbs.dreamstime.com/b/beautiful-happy-reddish-havanese-puppy-dog-sitting-frontal-looking-camera-isolated-white-background-46868560.jpg"
      />
    </div>
  );
};

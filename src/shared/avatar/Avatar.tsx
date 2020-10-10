import React from "react";
import AvatarObject from "@material-ui/core/Avatar";
import MenuItem from "@material-ui/core/MenuItem";

interface AvatarProps {
  items: {
    label: string;
    onClick: () => void;
  }[];
  classes: {
    classContainer: string;
    classMenu: string;
    classItem: string;
  };
  alt: string;
  src: string;
}

interface AvatarPrivateProps extends AvatarProps {
  registered: () => void;
  isRegistered: any;
}

export const Avatar: React.FC<AvatarPrivateProps> = ({
  alt,
  src,
  classes,
  items,
  registered,
  isRegistered,
}) => {
  return (
    <>
      <AvatarObject alt={alt} src={src} onClick={registered} />
      {isRegistered && 
      <MenuItem value={10}>Ten</MenuItem>
     }
    </>
  );
};

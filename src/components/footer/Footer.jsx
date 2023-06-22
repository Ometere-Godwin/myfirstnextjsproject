import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-between items-center">
      <div>
        <small>@2023 Ruowvefs. All right reserved</small>
      </div>
      <div className="flex items-center">
        <Image
          src="/assets/facebook.png"
          width={35}
          height={35}
          className="socialMediaIcons"
        />
        <Image
          src="/assets/instagram.png"
          width={35}
          height={35}
          className="socialMediaIcons"
        />
        <Image
          src="/assets/linkedIn.png"
          width={35}
          height={35}
          className="socialMediaIcons"
        />
      </div>
    </div>
  );
}

"use client";

import React from "react";
import { WobbleCard } from "./wobble-card";
import "./css/profile-card.css";
export function Card() {
  return (
    <div className="relative">
      <WobbleCard containerClassName="aspect-square sm:aspect z-50 max-w-sm">
        <div className="">
          <img
            src="/profile.png"
            width={500}
            height={500}
            alt="linear demo image"
            className=" object-cover rounded-2xl"
          />
        </div>
      </WobbleCard>

      <WobbleCard containerClassName="absolute -top-2 -left-2 bg-indigo-800 aspect-square max-w-sm">
        {""}
      </WobbleCard>
    </div>
  );
}

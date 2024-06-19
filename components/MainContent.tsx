"use client";

import React, { useEffect, useState } from "react";

import { IoIosCodeWorking } from "react-icons/io";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

export default function MainContent() {
  const mySkills = [
    {
      app: "Microsoft Office",
      progress: 98,
    },
    {
      app: "Mikrotik",
      progress: 50,
    },
    {
      app: "ReactJS",
      progress: 95,
    },
    {
      app: "NodeJS",
      progress: 95,
    },
    {
      app: "Python",
      progress: 97,
    },
    {
      app: "JavaScript",
      progress: 95,
    },
    {
      app: "TypeScript",
      progress: 95,
    },
    {
      app: "HTML",
      progress: 98,
    },
    {
      app: "CSS",
      progress: 98,
    },
  ];

  const [progress, setProgress] = useState(13);

  // const skillsProgress = mySkills;
  // skillsProgress.map((skills: progress) => {
  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       setProgress(skills.progress);
  //     }, 500);

  //     return () => clearTimeout(timer);
  //   }, []);
  // });

  return (
    <main>
      <div className="md:w-[35rem]">
        <div className="flex items-center border-b-2">
          <div>
            <IoIosCodeWorking className="text-8xl" />
          </div>
          <div>
            <h1>Hello,</h1>
            <p>Passionate as frontend developer.</p>
            <p>I design and code beautifully simple things.</p>
          </div>
        </div>
        <div className="py-4 flex flex-col gap-4">
          <div className="w-full dark:bg-zinc-900 bg-zinc-100 rounded p-4">
            <div className="flex items-center gap-2">
              <div className="w-[8rem] md:w-[8rem] md:h-[8rem] border rounded-md">
                <img
                  src="https://i.pinimg.com/564x/b0/71/2e/b0712e6a9b91831dbbf1b1edcf761afe.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div className="flex flex-col gap-2">
                <a href="#" target="_blank">
                  Kimmy Space
                </a>
                <p>
                  Build website about Victoria Kimberly 12th Generation of
                  JKT48.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full dark:bg-zinc-900 bg-zinc-100 rounded p-4">
            <div className="flex flex-col gap-4">
              <h1 className="text-xl font-bold">Skills</h1>
              <div className="flex flex-col gap-2">
                <div className="flex flex-col gap-4">
                  {mySkills.map((mySkills: any) => {
                    return (
                      <div key={mySkills} className="flex">
                        <h4 className="w-[40%]">{mySkills.app}</h4>
                        <Progress
                          value={mySkills.progress}
                          className="w-[60%]"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full dark:bg-zinc-900 bg-zinc-100 rounded p-4">
            <div className="flex flex-col gap-2">
              <div className="pb-2">
                <h1 className="text-xl font-bold">Work History</h1>
              </div>
              <div className="flex items-center gap-2">
                <img
                  src="https://bb71d2eac085c69b0.nos.wjv-1.neo.id/1710918602-605622/17125881128657-MvJRQR8J2EHKMzihJWxzsOqVmKtCnBnisFAOeYA0.png"
                  alt="hamdan"
                  className="w-[8rem] md:w-[7rem] md:h-[8rem] rounded object-cover"
                />
                <div>
                  <h1 className="pb-2">HAMDAN Tour</h1>
                  <p>jobdesk as data entry</p>
                  <p>03/07/2023 - now</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full dark:bg-zinc-900 bg-zinc-100 rounded p-4">
            <div className="flex flex-col gap-2">
              <h1 className="text-xl font-bold">Let&apos;s Talk</h1>
              <div className="pb-1">
                <h4>
                  Have some big idea or brand to develop and need help? Then
                  reach out we&apos;d love to hear about your project and
                  provide help.
                </h4>
              </div>
              <div className="flex w-full py-4 items-center space-x-2">
                <Input type="email" placeholder="Email" />
                <Button type="submit">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

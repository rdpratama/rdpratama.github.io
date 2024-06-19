import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { MdOutlineWorkHistory } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

import Navbar from "./Navbar";

export default function Biodata() {
  return (
    <main>
      <div className="w-full md:w-[23rem] border p-4 rounded-md bg-zinc-100 dark:bg-zinc-900">
        <div className="flex justify-between">
          <div className="w-36 h-36 border rounded-full">
            {/* <Image
              src="https://i.pinimg.com/736x/8d/0b/32/8d0b32acb64a737add99a5510c647e67.jpg"
              width={100}
              height={100}
            /> */}
            <img
              src="https://i.pinimg.com/736x/8d/0b/32/8d0b32acb64a737add99a5510c647e67.jpg"
              alt="Kimmy"
              className="w-full h-full object-cover rounded-full"
            />
            {/* <div className="w-full h-screen absolute">
              <div className="w-4 h-4 rounded-full bg-green-400"></div>
            </div> */}
          </div>

          <div className="block md:hidden">
            <Sheet>
              <SheetTrigger>
                <Button variant="outline" size="icon">
                  <IoMenu className="text-2xl" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full h-full px-2 py-2">
                <Navbar />
              </SheetContent>
            </Sheet>
          </div>
        </div>
        <div className="py-4">
          <h4 className="font-[800] text-2xl md:text-3xl">
            Rivanza Duta Pratama
          </h4>
          <p className=" pt-2">rivanzaduta@gmail.com</p>
          <a href="#">rdpratama.space</a>
        </div>
        <div className="flex gap-1">
          <Badge variant="secondary">ReactJS</Badge>
          <Badge variant="secondary">Git</Badge>
          <Badge variant="secondary">NodeJS</Badge>
          <Badge variant="secondary">Python</Badge>
        </div>
        <div className="py-5">
          <h4 className="font-[800] text-xl">Bio</h4>
          <p className=" pt-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
            id distinctio dolore nulla accusantium perferendis rem sequi ut nam.
          </p>
        </div>
        <div className="border-b">
          <ul className="py-5">
            <li className="flex items-center text-center gap-1">
              <MdOutlineWorkHistory />
              <p className="">1 Years as Frontend Developer</p>
            </li>
          </ul>
        </div>
        <div className="py-5">
          <h4 className="text-xl font-bold">Projects History</h4>
          <Dialog>
            <DialogTrigger className="pt-2">Kimmy Space</DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Kimmy Space</DialogTitle>
                <DialogDescription>
                  <p className="pb-3">
                    Build website about Victoria Kimberly 12th Generation of
                    JKT48.
                  </p>
                  <Button className="text-xs h-7 w-28">Click to Kimmy</Button>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </main>
  );
}

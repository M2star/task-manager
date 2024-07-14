import Image from "next/image";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoIosArrowDown } from "react-icons/io";
const Header = () => {
  return (
    <nav className="h-full">
      <div className="flex items-center h-full">
        <div className="w-64 border-r border-gray-600 h-full flex items-center justify-center gap-3 px-3">
          <Image src="/logo.svg" alt="Logo" width={30} height={30} />
         <h2 className="text-xl font-semibold text-blue-100">Task Manager</h2> 
        </div>
        <div className="flex-1 flex items-center justify-between px-3">
          <div className="">Dashboard</div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex items-center gap-2">
                  <span>Tushar bawame</span>
                  <span>
                    <IoIosArrowDown />
                  </span>
                </div>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Billing</DropdownMenuItem>
                <DropdownMenuItem>Team</DropdownMenuItem>
                <DropdownMenuItem>Subscription</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

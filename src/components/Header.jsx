import React, { useEffect, useState } from "react";
import granaLogo from "../assets/GraanaLogo.svg";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";
import google from "../assets/google.svg";
import { auth, provider } from "../components/Firebase";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";

export default function Header() {
  const [singIn, setSignIn] = useState(true);
  const [img, setImg] = useState(null);
  const [imgvalue, setImgvalue] = useState(false);

  const handleSignup = () => {
    signInWithPopup(auth, provider).then(() => {
      setSignIn(false);
      setImgvalue(true);
    });
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        setImg(null);
        setSignIn(true);
        setImgvalue(false);
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignIn(false);
        setImg(user);
        setImgvalue(true);
      } else {
        setSignIn(true);
        setImgvalue(false);
        setImg(null);
      }
    });
  });

  return (
    <div className="h-[76px] z-50 sticky top-0 bg-white px-[10px] text-[#37474f] md:flex items-center hidden shadow-md">
      <div className="lg:pl-[108px] md:pl-[10px] md:pr-[5px]  pr-[30px] cursor-pointer">
        <Link to="">
          {" "}
          <img className="w-[240px] h-[40px]" src={granaLogo} alt="" />
        </Link>
      </div>
      <div className="flex items-center justify-start flex-1">
        <div className="group relative inline-block text-left">
          <Button className="bg-inherit text-[#37474f] shadow-none hover:bg-inherit font-semibold">
            BUY
          </Button>

          <div
            className={`group-hover:block hover:block hidden  absolute z-10 w-[300px] origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="w-[300px]">
              <Link
                to="buy/residential"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Buy a residential Property
              </Link>
              <Link
                to="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Buy a commerial Property
              </Link>

              <Link
                to="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Buy a plot
              </Link>
            </div>
          </div>
        </div>

        <div className="group relative inline-block text-left">
          <Button className="group bg-inherit w-[64px] text-[#37474f] shadow-none hover:bg-inherit font-semibold">
            SELL
          </Button>

          <div
            className={`group-hover:block hover:block hidden absolute z-10 w-[300px] origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="w-[300px]">
              <Link
                to="sell/property"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Sell a property
              </Link>
              <Link
                to="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Rentout a property
              </Link>
            </div>
          </div>
        </div>

        <div className="group relative inline-block text-left">
          <Button className="bg-inherit text-[#37474f] shadow-none hover:bg-inherit font-semibold">
            RENT
          </Button>

          <div
            className={`group-hover:block hover:block hidden  absolute z-10 w-[300px] origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          >
            <div className="w-[300px]">
              <Link
                to="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Residential property on rent
              </Link>
              <Link
                to="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                Commerial property on rent
              </Link>
              <a
                href="#"
                className="text-[#37474f] block px-4 py-3 text-sm hover:bg-gray-100"
              >
                List my home for rent
              </a>
            </div>
          </div>
        </div>

        <Button className="bg-inherit w-[69px] text-[#37474f] shadow-none hover:bg-inherit font-semibold">
          INVEST
        </Button>
        <Button className="bg-inherit text-[#37474f] shadow-none hover:bg-inherit font-semibold">
          MORE
        </Button>
      </div>
      <div className="flex justify-end items-center md:[60px] lg:mr-[108px] gap-3">
        <Button className="bg-inherit text-[#37474f] shadow-none hover:bg-inherit font-semibold">
          WANTED
        </Button>

        {singIn && (
          <AlertDialog className="px-3">
            <AlertDialogTrigger
              value={singIn}
              className="bg-inherit rounded-lg text-[14px] text-[#37474f] border px-[18px] h-10 border-black font-semibold shadow-none hover:bg-inherit"
            >
              Sign In
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader className="">
                <div className="flex  justify-end w-full">
                  <AlertDialogCancel className="rounded-[100%] w-[30px] h-[30px] py-0 px-0 flex">
                    X
                  </AlertDialogCancel>
                </div>
                <div className="px-6  w-[400px]">
                  <AlertDialogTitle className="text-[26px] font-semibold text-[#37474F]">
                    Sign in to your account
                  </AlertDialogTitle>
                  <p className="text-[#999999] text-[14px]">Welcome back!</p>
                  <AlertDialogDescription className="text-[#37474F] mt-4 flex flex-col gap-3">
                    <Input
                      className="w-[350px]"
                      type="tel"
                      placeholder="Phone number"
                    />
                    <Input
                      className="w-[350px]"
                      type="password"
                      placeholder="Password"
                    />
                    <Button>LOGIN</Button>
                    <Button
                      onClick={handleSignup}
                      className="px-2 flex  justify-start bg-white text-[#37474F] border border-gray-300 hover:bg-white mt-6"
                    >
                      <div className="flex items-center gap-14">
                        <img src={google} alt="" />
                        <p> Continue with Google </p>
                      </div>
                    </Button>
                  </AlertDialogDescription>
                </div>
              </AlertDialogHeader>
              <AlertDialogFooter></AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        )}
        {imgvalue && (
          <div className="group relative inline-block text-left">
            <img
              className="group rounded-full w-[35px] cursor-pointer"
              src={img.photoURL}
              alt=""
            />

            <div
              className={`group-hover:block hover:block hidden right-0 absolute z-10 w-[200px] origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
            >
              <div className="w-[200px]">
                <Link className="text-[#37474f] block px-4 py-3 text-[12px] hover:bg-gray-100">
                  Profile settings
                </Link>
                <Link className="text-[#37474f] block px-4 py-3 text-[12px] hover:bg-gray-100">
                  My Property
                </Link>
                <Link className="text-[#37474f] block px-4 py-3 text-[12px] hover:bg-gray-100">
                  Liked Property
                </Link>
                <Link
                  onClick={handleSignOut}
                  className="text-[#37474f] block px-4 py-3 text-[12px] rounded-b-lg hover:bg-gray-100"
                >
                  Sing Out
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

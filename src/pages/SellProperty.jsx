import React, { useState, useEffect } from "react";
import imarat from "../assets/imaratresidencia.svg";
import { Button } from "../components/ui/button";
import buyicon from "../assets/buyicon.svg";
import renticon from "../assets/renticon.svg";
import house from "../assets/house.svg";
import apartment from "../assets/apartment.svg";
import lowerportion from "../assets/lower-portion.svg";
import upperportion from "../assets/upper-portion.svg";
import room from "../assets/room.svg";
import farmHouse from "../assets/farmHouse.svg";
import guestHouse from "../assets/guestHouse.svg";
import pentHouse from "../assets/pentHouse.svg";
import annexe from "../assets/annexe.svg";
import hostel from "../assets/hostel.svg";
import hotelSuites from "../assets/hotelSuites.svg";
import { Input } from "@/components/ui/input";
import { firestore, storage } from "../components/Firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useAds } from "../context";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import google from "../assets/google.svg";
import { auth, provider } from "../components/Firebase";
import { signInWithPopup, onAuthStateChanged } from "firebase/auth";
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

export default function SellProperty() {
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [size, setSize] = useState("");
  const [price, setPrice] = useState("");
  const [bedRoom, setBedRoom] = useState("");
  const [bathRoom, setBathRoom] = useState("");
  const [propertyName, setPropertyName] = useState("");
  const [condition, setCondition] = useState("");
  const [img, setImg] = useState(null);
  const [contact, setContact] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [singIn, setSignIn] = useState(true);
  const [submit, setSubmit] = useState(false);

  const { handleSubmitAds, ads } = useAds();

  const add = async (e) => {
    e.preventDefault();

    let url;

    if (img) {
      const imgRef = ref(storage, `${img.name}`);
      await uploadBytes(imgRef, img);
      url = await getDownloadURL(imgRef);
      console.log();
    }

    handleSubmitAds({
      type,
      city,
      area,
      size,
      bedRoom,
      bathRoom,
      price,
      imgUrl: url,
      propertyName,
      condition,
      contact,
      name,
    });

    const docRef = await addDoc(collection(firestore, `users/`), {
      type,
      city,
      area,
      size,
      bedRoom,
      bathRoom,
      price,
      imgUrl: url,
      propertyName,
      condition,
      contact,
      name,
    });
    setCity("");
    setArea("");
  };

  const btnbathroom = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];
  const btnbedroom = [
    "Studio",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10+",
  ];

  const btnType = [
    {
      img: house,
      text: "House",
    },
    {
      img: apartment,
      text: "Flat",
    },
    {
      img: lowerportion,
      text: "Lower Portion",
    },
    {
      img: upperportion,
      text: "Upper Portion",
    },
    {
      img: room,
      text: "Room",
    },
    {
      img: farmHouse,
      text: "Farm House",
    },
    {
      img: guestHouse,
      text: "Guest House",
    },
    {
      img: pentHouse,
      text: "Pent House",
    },
    {
      img: annexe,
      text: "Annexe",
    },
    {
      img: hostel,
      text: "Hostel",
    },
    {
      img: hotelSuites,
      text: "Hotel Suites",
    },
  ];

  const handleSignup = () => {
    signInWithPopup(auth, provider).then(() => {
      setSignIn(false);
      setImgvalue(true);
    });
  };

  console.log(ads);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setSignIn(false);

        setSubmit(true);
      } else {
        setSignIn(true);
        setSubmit(false);
      }
    });
  });

  return (
    <>
      <div className="flex  justify-center text-[#37474F]">
        <div className="flex flex-col justify-center 2xl:w-[1440px] w-full gap-10">
          <div className="2xl:w-[1440px] w-full relative h-[294px] mt-[70px] bg-[#e85451] justify-between flex items-center md:rounded-xl ">
            <div className="text-white flex flex-col md:ml-[100px] ml-2 gap-3 lg:w-full md:w-[400px] w-[200px] ">
              <p className="lg:text-[36px] text-[16px] md:text-[20px] font-[700] text-white ">
                Upload your property details
              </p>
              <p className="lg:text-[18px] text-[12px] md:text-[14px] ">
                Get the best value for your property in a few steps.
              </p>
            </div>
            <img
              className="mb-[62px] absolute 2xl:right-[-30px] right-0 "
              src={imarat}
              alt=""
            />
          </div>
          {/* form div */}
          <div className="ml-[30px] md:ml-[70px] flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <p className="font-semibold">What do you want to do?</p>
              <div className="flex gap-3">
                <Button className="bg-white border font-[400] border-red-500 shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img src={buyicon} alt="" />
                  Sell
                </Button>
                <Button className="bg-white border font-[400] shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                  <img src={renticon} alt="" />
                  Rent
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-3 w-[322px] md:w-[422px]">
              <p className="font-semibold">
                What kind of property do you have?
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex">
                  <Button className="bg-white shadow-none rounded-none px-6 border-b-2 border-red-500 font-semibold text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                    Residential
                  </Button>
                  <Button className="bg-white font-[400] shadow-none rounded-none px-6 text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                    Plot
                  </Button>
                  <Button className="bg-white font-[400] shadow-none rounded-none px-6 text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white">
                    Commercial
                  </Button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {btnType.map((item, index) => (
                    <Button
                      key={index}
                      className={` ${
                        type === item.text && "border-red-500"
                      } bg-white font-[400] border shadow-none text-[#37474F] flex gap-3 text-[12px] h-11 hover:bg-white`}
                      onClick={() => setType(item.text)}
                    >
                      <img className="w-[18px]" src={item.img} alt="" />
                      {item.text}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 ">
              <p className="font-semibold">Which city is your property in?</p>
              <Input
                type="text"
                className="w-[300px] md:w-[400px]"
                placeholder="Select your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="font-semibold">Which area is your property in?</p>
              <Input
                type="text"
                className="w-[300px] md:w-[400px]"
                placeholder="Address, block, phase, city etc."
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="font-semibold">
                What is the size of your property?
              </p>
              <Input
                type="number"
                placeholder="0"
                className="w-[300px] md:w-[400px]"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="font-semibold">What is the asking price?</p>
              <Input
                type="number"
                placeholder="0 PKR"
                className="w-[300px] md:w-[400px]"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">How many bedrooms does it have?</p>
              <div className="flex gap-3 flex-wrap w-[300px] md:w-[400px]">
                {btnbedroom.map((item, index) => (
                  <Button
                    key={index}
                    className={` ${
                      bedRoom === item && "border-red-500"
                    } bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white`}
                    onClick={() => setBedRoom(item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="font-semibold">How many bathrooms does it have?</p>
              <div className="flex gap-3 flex-wrap w-[300px] md:w-[400px]">
                {btnbathroom.map((item, index) => (
                  <Button
                    key={index}
                    className={` ${
                      bathRoom === item && "border-red-500"
                    } bg-white font-[400] rounded-3xl border shadow-none text-[#37474F] px-5 flex text-[12px] h-8 hover:bg-white`}
                    onClick={() => setBathRoom(item)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="font-semibold">Name your property</p>
              <Input
                type="text"
                placeholder="Name your property"
                className="w-[300px] md:w-[400px]"
                value={propertyName}
                onChange={(e) => setPropertyName(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="font-semibold">
                What is the condition of your property?
              </p>
              <Input
                type="text"
                className="w-[300px] md:w-[400px]"
                placeholder="Property condition"
                value={condition}
                onChange={(e) => setCondition(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="font-semibold">Upload images of your property</p>
              <Input
                type="file"
                className="w-[300px] md:w-[400px]"
                onChange={(e) => setImg(e.target.files[0])}
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="font-semibold">Tell us how to contact you</p>
              <Input
                type="tel"
                className="w-[300px] md:w-[400px]"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3 ">
              <p className="font-semibold">What is your name?</p>
              <Input
                type="text"
                placeholder="What is your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-center items-center p-6 ">
              {submit && (
                <Button onClick={add} className="w-[170px]">
                  Submit
                </Button>
              )}
              {singIn && (
                <AlertDialog className="px-3">
                  <AlertDialogTrigger>
                    <Button value={singIn} className="w-[170px]">
                      Submit
                    </Button>
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
                        <p className="text-[#999999] text-[14px]">
                          Welcome back!
                        </p>
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
                              <p> Contineu with Google </p>
                            </div>
                          </Button>
                        </AlertDialogDescription>
                      </div>
                    </AlertDialogHeader>
                    <AlertDialogFooter></AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

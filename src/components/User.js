import React from "react";
import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationIcon } from "@heroicons/react/outline";
import FollowList from "./FollowList";
import axios from "axios";

function User({ name, image, link, followersUrl, followingUrl, reposUrl }) {
  const [open, setOpen] = useState(false);
  const [followers, setFollowers] = useState(null);
  const [following, setFollowing] = useState(null);
  const [repos, setRepos] = useState(null);

  // useEffect(() => {
  //   setFollowers(convert(followersUrl));
  // }, []);
  const cancelButtonRef = useRef(null);
  const [people, setPeople] = useState(null);
  const handlePeople = async (p) => {
    const pp = await axios.get(p);
    console.log("pp : ", pp);
    setOpen(true);
    setPeople(pp.data);
  };
  const convert = async (url) => {
    console.log("start");
    const link = url.replace("{/other_user}", "");
    const array = await axios.get(link);
    console.log("returned data : ", array);
    return array;
  };
  return (
    <div className="w-full bg-white rounded-lg sahdow-lg overflow-hidden flex flex-col md:flex-row">
      <div className="w-full md:w-40 h-32">
        <img
          className="object-center object-cover w-full h-full"
          src={image}
          alt={image}
        />
      </div>
      <div className="w-full  text-left p-4 md:p-4 space-y-2 flex flex-col justify-around">
        <p className="text-xl text-gray-700 font-bold">{name}</p>
        <div className="flex justify-between text-primary ">
          <button
            onClick={() => handlePeople(followers)}
            className="text-blue-700 text-sm font-semibold"
          >
            {/* {getLength(followers)}  */}
            Followers
          </button>
          <button
            onClick={() => handlePeople(following)}
            className="text-blue-700 text-sm font-semibold"
          >
            {/* {getLength(following)}  */}
            Following
          </button>
          <button className="text-blue-700 text-sm font-semibold">
            {/* {getLength(repos)}  */}
            Repos
          </button>
        </div>
        <div className="flex justify-end">
          <a href={link}>
            <button className="bg-gray-400 px-2 rounded-sm text-sm font-semibold">
              Link
            </button>
          </a>
        </div>
      </div>
      {/* modal */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {/* <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"> */}
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full">
                <FollowList people={people} />
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="button"
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-primary text-base font-medium text-white hover:text-primary hover:bg-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                    onClick={() => setOpen(false)}
                    ref={cancelButtonRef}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* end Modal */}
    </div>
  );
}

export default User;

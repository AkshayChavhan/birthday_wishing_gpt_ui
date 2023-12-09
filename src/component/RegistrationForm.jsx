import React, { useState } from "react";
import CustomInput from "./CustomInput";
import {
  validateEmail,
  validateFullName,
  validatePhoneNumber,
} from "./utils/validation";
import CustomModal from "./modal/CustomModal";
import Header from "./Header";
import HeroSection from "./modal/HeroSection";
import { useMyContext } from "./UserDetailContext";

function RegistrationForm() {
  const { updateName, updateSequenceStep, updateLoggedIn } = useMyContext();

  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullname, setFullname] = useState("");
  const [emailId, setEmailId] = useState("");
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [open, setOpen] = useState(false);
  const userList = JSON.parse(localStorage.getItem("userList")) || [];

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      if (
        !validateEmail(emailId) ||
        !validateFullName(fullname) ||
        !validatePhoneNumber(phoneNumber)
      ) {
        return alert("Please fill form correctly.");
      }
      const existingUser = userList.find((user) => user.emailId === emailId);
      if (existingUser) {
        return alert("User with this email already exists.");
      }
      const newUser = {
        phoneNumber,
        fullname,
        emailId,
      };

      localStorage.setItem("userList", JSON.stringify([...userList, newUser]));

      setOpen(true);
      updateName(fullname);
      updateLoggedIn(true);
      updateSequenceStep(2);
      setPhoneNumber("");
      setFullname("");
      setEmailId("");
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleOptionChange1 = () => {
    setSelectedOption1(!selectedOption1);
  };

  const handleOptionChange2 = () => {
    setSelectedOption2(!selectedOption2);
  };

  const handleCloseModal = () => {
    updateName(fullname);
    updateLoggedIn(true);
    updateSequenceStep(2);
    setPhoneNumber("");
    setFullname("");
    setEmailId("");
    setSelectedOption1(false);
    setSelectedOption2(false);
    setOpen(false);
  };

  return (
    <div className="">
      <Header progress={"/progress bar1.png"} />
      <div>
        <HeroSection
          source={"/2_Celebrations(Bg).png"}
          alt_name="landing picture"
        />

        <form className="flex flex-col" onSubmit={handleSubmitForm}>
          <h2 className="text-center text-white text-xl font-bold p-4">
            Register to create
          </h2>
          <CustomInput
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <CustomInput
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <CustomInput
            placeholder="Email ID"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
          <div className="flex flex-col self-center py-3 mx-20">
            <label className="text-white text-xs py-2">
              <input
                type="radio"
                name="options1"
                checked={selectedOption1}
                onChange={handleOptionChange1}
              />
              <span className="px-3">
                I accept Terms & Conditions and Privacy Policy of Mondelez
                (Cadbury)
              </span>
            </label>

            <label className="text-white text-xs">
              <input
                type="radio"
                name="options2"
                checked={selectedOption2}
                onChange={handleOptionChange2}
              />
              <span className="px-3">
                I would like to receive promotional communication from Mondelez
                (Cadbury) about its products and offers
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-yellow-500 py-3 my-10 text-white font-extrabold rounded-2xl mx-20"
            style={{
              maxWidth: "109px",
              alignSelf: "center",
              padding: "9px 29px",
            }}
          >
            Submit
          </button>
        </form>
        <div className="absolute left-0 right-0">
          <div
            className="absolute left-0"
            style={{
              left: "25px",
              bottom: "19px",
            }}
          >
            <img src={"/2_Asset 1.png"} alt="glitter" width={'40px'} height={'40px'} />
          </div>
          <div className="absolute right-10 -top-50"
          style={{bottom: '27px'}}>
            <img
              src={"/2_Yellow tone.png"}
              alt="music"
              width={'20px'}
              height={'20px'}
            />
          </div>
        </div>
      </div>
      <CustomModal open={open} setOpen={handleCloseModal} to="birthday-user" />
    </div>
  );
}

export default RegistrationForm;

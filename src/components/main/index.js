import { Button, Checkbox, Input, Select } from "antd";
import React, { useEffect, useState } from "react";

import upload from "../../assets/images/svgs/upload.svg";

const Main = () => {
  const [error, setError] = useState("");
  const [identityType, setIdentityType] = useState("");
  const [idFrontName, setIdFrontName] = useState("");
  const [idBackName, setIdBackName] = useState("");
  const [selfieWithIdName, setSelfieWithIdName] = useState("");
  const [selfieForProfilePictureName, setSelfieForProfilePictureName] =
    useState("");

  useEffect(() => {
    setIdFrontName("Government ID Front");
    setIdBackName("Government ID Back");
    setSelfieWithIdName("Selfie with Government ID");
    setSelfieForProfilePictureName("Selfie for Profile Picture");
  }, []);

  const formSubmitHandle = (e) => {
    e.preventDefault();

    const form = e.target;

    const fullName = form.fullName.value;
    const email = form.email.value;
    const tyoeOfIdentity = identityType;
    const governmentIdNumber = form.governmentIdNumber.value;

    // get the file name
    const governmentIdFront = form.governmentIdFront.files[0] ? form.governmentIdFront.files[0].name : "";
    const governmentIdBack = form.governmentIdBack.files[0] ? form.governmentIdBack.files[0].name : "";
    const selfieWithGovernmentId = form.selfieWithGovernmentId.files[0] ? form.selfieWithGovernmentId.files[0].name : "";
    const selfieForProfilePicture = form.selfieForProfilePicture.files[0] ? form.selfieForProfilePicture.files[0].name : "";

    const address = form.address.value;
    const governmentIdNumber2 = form.governmentIdNumber2.value;

    // if (governmentIdFront === "" || governmentIdBack === "" || selfieWithGovernmentId === "" || selfieForProfilePicture === "") {
    //   setError("Please upload all the files");
    //   return
    // }

    const kycData = {
      fullName,
      email,
      tyoeOfIdentity,
      governmentIdNumber,
      governmentIdFront,
      governmentIdBack,
      selfieWithGovernmentId,
      selfieForProfilePicture,
      address,
      governmentIdNumber2,
    };

    console.log(kycData);

    // clear the form fields after submit
    // form.reset();
    // reset(form)
    // clear the form after submit
    form.fullName.value = "";
    form.email.value = "";
    form.governmentIdNumber.value = "";
    form.address.value = "";
    form.governmentIdNumber2.value = "";
    form.governmentIdFront.value = "";
    form.governmentIdBack.value = "";
    form.selfieWithGovernmentId.value = "";
    form.selfieForProfilePicture.value = "";

    setIdFrontName("Government ID Front");
    setIdBackName("Government ID Back");
    setSelfieWithIdName("Selfie with Government ID");
    setSelfieForProfilePictureName("Selfie for Profile Picture");


    // clear the error message
    setError("");

    // clear the select value
    setIdentityType("");
  };

  const reset = (form) => {
    // clear the form after submit
    form.fullName.value = "";
    form.email.value = "";
    form.governmentIdNumber.value = "";
    form.address.value = "";
    form.governmentIdNumber2.value = "";
    form.governmentIdFront.value = "";
    form.governmentIdBack.value = "";
    form.selfieWithGovernmentId.value = "";
    form.selfieForProfilePicture.value = "";

    setIdFrontName("Government ID Front");
    setIdBackName("Government ID Back");
    setSelfieWithIdName("Selfie with Government ID");
    setSelfieForProfilePictureName("Selfie for Profile Picture");


    // clear the error message
    setError("");

    // clear the select value
    setIdentityType("");
  }


  return (
    <div className="main p-10">
      <h2 className="text-[22px] mt-8">KYC Verification </h2>

      <p>
        {error && (
          <span className="text-red-600 text-sm font-semibold">{error}</span>
        )}
      </p>

      <form onSubmit={formSubmitHandle}>
        <div className="form grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-10 gap-6">
          <div className="first">
            <div className="form-group mb-4">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Full name<span className="text-red-600">*</span>
              </label>
              <Input
                placeholder="Please enter your full name"
                className="border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                name="fullName"
                required
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  } else {
                    setError("Full name is required");
                  }
                }}
              />
            </div>
            <div className="form-group mb-8">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Select identity type<span className="text-red-600">*</span>
              </label>
              <Select
                className="w-full border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                placeholder="Select your identity type"
                name="identityType"
                required
                onChange={(value) => {
                  setIdentityType(value);
                  if (value) {
                    setError("");
                  } else {
                    setError("Identity type is required");
                  }
                }}
              >
                <Select.Option value="Driver's License">
                  Driver's License
                </Select.Option>
                <Select.Option value="National ID">National ID</Select.Option>
                <Select.Option value="Passport">Passport</Select.Option>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="form-group mb-4">
                <input
                  type="file"
                  name="governmentIdFront"
                  id="file1"
                  // only accept JPEG/JPS/PNG
                  accept="image/jpeg,image/jpg,image/png"
                  // required
                  className="inputfile hidden"
                  onChange={(e) => {
                    e.target.files[0] && setIdFrontName(e.target.files[0].name);
                  }}
                />
                <label
                  htmlFor="file1"
                  className="text-sm mb-2 font-semibold bg-[#F2F2F2] flex w-full h-[130px] justify-center items-center"
                >
                  <img src={upload} alt="upload" className="" />
                </label>
                <p className="text-xs mt-2 text-[#757575]">{idFrontName}</p>
              </div>
              <div className="form-group mb-4">
                <input
                  type="file"
                  name="governmentIdBack"
                  id="file2"
                  // only accept JPEG/JPS/PNG
                  accept="image/jpeg,image/jpg,image/png"
                  // required
                  className="inputfile hidden"
                  onChange={(e) => {
                    e.target.files[0] && setIdBackName(e.target.files[0].name);
                  }}
                />
                <label
                  htmlFor="file2"
                  className="text-sm mb-2 font-semibold bg-[#F2F2F2] flex w-full h-[130px] justify-center items-center"
                >
                  <img src={upload} alt="upload" className="" />
                </label>
                <p className="text-xs mt-2 text-[#757575]">{idBackName}</p>
              </div>
            </div>

            <div className="form-group mb-4">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Full address<span className="text-red-600">*</span>
              </label>
              <Input
                placeholder="Enter your full address "
                className="border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                name="address"
                required
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  } else {
                    setError("Address is required");
                  }
                }}
              />
            </div>
          </div>
          <div className="second">
            <div className="form-group mb-4">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Your email<span className="text-red-600">*</span>
              </label>
              <Input
                placeholder="Please enter your email"
                className="border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                name="email"
                required
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                    // check validity of email using regex
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (emailRegex.test(e.target.value)) {
                      setError("");
                    }
                    else {
                      setError("Please enter a valid email");
                    }
                  } else {
                    setError("Email is required");
                  }
                }}
              />
            </div>
            <div className="form-group mb-8">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Government ID number<span className="text-red-600">*</span>
              </label>
              <Input
                placeholder="Enter your government id number"
                className="border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                name="governmentIdNumber"
                required
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  } else {
                    setError("Government ID Number is required");
                  }
                }}
              />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="form-group mb-4">
                <input
                  type="file"
                  name="selfieWithGovernmentId"
                  id="file3"
                  // only accept JPEG/JPS/PNG
                  accept="image/jpeg,image/jpg,image/png"
                  // required
                  className="inputfile hidden"
                  onChange={(e) => {
                    e.target.files[0] && setSelfieWithIdName(e.target.files[0].name);
                  }}
                />
                <label
                  htmlFor="file3"
                  className="text-sm mb-2 font-semibold bg-[#F2F2F2] flex w-full h-[130px] justify-center items-center"
                >
                  <img src={upload} alt="upload" className="" />
                </label>
                <p className="text-xs mt-2 text-[#757575]">
                  {selfieWithIdName}
                </p>
              </div>
              <div className="form-group mb-4">
                <input
                  type="file"
                  name="selfieForProfilePicture"
                  // required
                  id="file4"
                  className="inputfile hidden"
                  // only accept JPEG/JPS/PNG 
                  accept="image/jpeg,image/jpg,image/png"
                  onChange={(e) => {
                    e.target.files[0] && setSelfieForProfilePictureName(e.target.files[0].name);
                  }}
                />
                <label
                  htmlFor="file4"
                  className="text-sm mb-2 font-semibold bg-[#F2F2F2] flex w-full h-[130px] justify-center items-center"
                >
                  <img src={upload} alt="upload" className="" />
                </label>
                <p className="text-xs mt-2 text-[#757575]">
                  {selfieForProfilePictureName}
                </p>
              </div>
            </div>
            <div className="form-group mb-4">
              <label htmlFor="" className="text-sm mb-2 font-semibold">
                Government ID number<span className="text-red-600">*</span>
              </label>
              <Input
                placeholder="Enter your government id number"
                className="border-none bg-[#F2F2F2] text-[16px] h-[45px] mt-2 rounded"
                name="governmentIdNumber2"
                required
                onChange={(e) => {
                  if (e.target.value) {
                    setError("");
                  } else {
                    setError("Government ID Number is required");
                  }
                }}
              />
            </div>
          </div>
          <div>
            <div className="alert bg-[#F2F2F2] rounded px-[30px] py-[40px]">
              <p className="text-sm text-[#757575]">
                <b className="text-black block mb-[6px]">Please Note:</b> File
                accepted: JPEG/JPS/PNG (Max size: 250 KB) Document should be
                good condition Document must be valid period Face must be clear
                visible
              </p>
            </div>
          </div>
        </div>

        <div className="form grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-2 gap-6">
          <div className="first">
            <div className="flex justify-start items-center">
              <Checkbox className="text-[#757575] text-sm" />
              <p className="text-sm text-[#757575] ml-2">
                I accept the{" "}
                <span className="text-[#2d7ff9] cursor-pointer">
                  Terms and Conditions
                </span>{" "}
                and{" "}
                <span className="text-[#2d7ff9] cursor-pointer">
                  Terms and Conditions
                </span>
              </p>
            </div>

            <div className="flex justify-start items-center mt-5">
              <button
                type="submit"
                className="bg-[#2E2F30] text-white text-sm font-semibold h-[45px] rounded mt-4 w-full uppercase mulish"
              >
                SUBMIT KYC
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Main;

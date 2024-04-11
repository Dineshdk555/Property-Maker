import React, { useState } from 'react';
import { userLogin, userRegisteration } from '../helpers/backend_helper';
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignInPopup = ({closePopup}) => {
  const [activeTab, setActiveTab] = useState('signup');
  const [showProfessionalForm, setShowProfessionalForm] = useState(false);
  const [selectedProfessionalType, setSelectedProfessionalType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [zipcode, setZipCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();
  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }
  const handleCheckboxChange = () => {
    setShowProfessionalForm(!showProfessionalForm);
  }

  const handleProfessionalTypeChange = (event) => {
    setSelectedProfessionalType(event.target.value);
  }

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleZipCodeChange = (event) => {
    setZipCode(event.target.value);
  }
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  }
  const handleSubmit = async () => {
   console.log("test")
    const payload = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      password: password,
      role: selectedProfessionalType,
      zipcode: zipcode,
      phonenumber: phoneNumber
    };
    try {
      const res = await userRegisteration(payload);
      if (res.success) {
        toast.success(res?.message);
        setActiveTab("signup")
        // Optionally, redirect the user or clear the form
      } else {
        toast.error(res?.message);
        // Handle registration failure (e.g., show an error message)
      }
    } catch (error) {
      toast.error(error?.response?.data?.error);
      // Handle any errors that occurred during the registration process
    }
  };
  const handleClickLogin = async () => {
     const payload = {
       email: email,
       password: password,
     };
     try {
       const res = await userLogin(payload);
       if (res.success) {
         console.log("Registration Success", res);
         toast.success("Login Successfully");
         localStorage.setItem("authUser",JSON.stringify(res))
         navigate("/")
         closePopup()
         // Optionally, redirect the user or clear the form
       } else {
         toast.error(res?.message);
         // Handle registration failure (e.g., show an error message)
       }
     } catch (error) {
       toast.error(error?.response?.data?.error);
       // Handle any errors that occurred during the registration process
     }
   };
  return (
    <section className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white w-96 h-96 p-6 rounded-lg relative overflow-y-scroll">
      <div className='flex justify-end'>
          <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" aria-label="Close">
  <svg class="w-5 h-5" onClick={closePopup} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</button>
          </div>
        <ul className="flex border-b">
          <li className={`${activeTab === 'signup' ? 'border-b-2 border-blue-500' : ''} mr-4 cursor-pointer`} onClick={() => handleTabChange('signup')}>
            Sign Up
          </li>
          <li className={`${activeTab === 'createAccount' ? 'border-b-2 border-blue-500' : ''} cursor-pointer`} onClick={() => handleTabChange('createAccount')}>
            Create Account
          </li>
        </ul>

        {activeTab === 'signup' && (
          <div className="mt-4 max-h-100">
            <div>
              <label>Email</label>
              <input label='Email' onChange ={(e)=>handleEmailChange(e)} type="email" placeholder="Enter email" className="w-full border rounded-md p-2 mb-2" />
              <label>Password</label>
              <input type="password" onChange={(e) => handlePasswordChange(e)} placeholder="Enter Password" className="w-full border rounded-md p-2 mb-2" />
            </div>
            <div>
              <button className="bg-blue-500 text-white rounded-md py-2 px-4 mb-2 hover:bg-blue-600" onClick={handleClickLogin}>Sign In</button>
              <a href="#" className="text-blue-500 hover:underline block mb-2">Forgot Password?</a>
            </div>
          </div>
        )}

        {activeTab === 'createAccount' && (
          <div className="mt-4 max-h-100">
            <div>
              <label>Email</label>
              <input label='Email' type="email" placeholder="Enter email" onChange ={(e)=>handleEmailChange(e)}className="w-full border rounded-md p-2 mb-2" />
              <label>Password</label>
              <input type="password" placeholder="Create Password" onChange={(e) => handlePasswordChange(e)} className="w-full border rounded-md p-2 mb-2" />
            </div>
            <div className="py-4">
              <input id="proCheck" className="static  w-4 h-4 border-spacing-4" type="checkbox" onChange={handleCheckboxChange} />
              <label className="py-5 px-2 mb-1">I am a landlord or industry professional</label>
            </div>
            {showProfessionalForm && (
              <div>
                <h2 className='font-bold'>Professional Information</h2>
                <div className='pt-4'>
                  <label className='pb-2'>Professional Type</label>
                  <select value={selectedProfessionalType} onChange={handleProfessionalTypeChange} className="w-full border rounded-md p-2 mb-2">
                    <option value="">Select your Category</option>
                    <option value="buyer">Buyer</option>
                    <option value="seller">Seller</option>
                    <option value="agent">Agent</option>
                  </select>
                  <div className="flex space-x-4">
                    <div>
                      <label>First Name</label>
                      <input type="text" placeholder="First Name" value={firstName} onChange={handleFirstNameChange} className="w-full border rounded-md p-2 mb-2" />
                    </div>
                    <div>
                      <label>Last Name</label>
                      <input type="text" placeholder="Last Name" value={lastName} onChange={handleLastNameChange} className="w-full border rounded-md p-2 mb-2" />
                    </div>
                  </div>
                  <div className="">
                  <label> Zip/Postal</label>
                  <input type="number" value={zipcode} onChange={handleZipCodeChange} placeholder="Zip/Postal" className="w-full border rounded-md p-2 mb-2"/>
                  </div>
                  <div>
                  <label> Phone Number</label>
                  <input type="number" value={phoneNumber} onChange={handlePhoneNumberChange}  placeholder='Phone Number' className="w-full border rounded-md p-2 mb-2"/>
                  </div>
                </div>
                {/* Professional form content */}
                {/* Example: Professional type dropdown, first name, last name, zip code, contact number */}
              </div>
            )}
            <div>
              <button  onClick={handleSubmit} className="bg-blue-500 text-white rounded-md py-2 px-4 mb-2 hover:bg-blue-600">Continue</button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default SignInPopup;

import React, { useState } from 'react';

const SignInPopup = () => {
  const [activeTab, setActiveTab] = useState('signup');
  const [showProfessionalForm, setShowProfessionalForm] = useState(false);
  const [selectedProfessionalType, setSelectedProfessionalType] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

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

  return (
    <section className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white w-96 h-96 p-6 rounded-lg relative overflow-y-scroll">
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
              <input label='Email' type="email" placeholder="Enter email" className="w-full border rounded-md p-2 mb-2" />
              <label>Password</label>
              <input type="password" placeholder="Enter Password" className="w-full border rounded-md p-2 mb-2" />
            </div>
            <div>
              <button className="bg-blue-500 text-white rounded-md py-2 px-4 mb-2 hover:bg-blue-600">Sign In</button>
              <a href="#" className="text-blue-500 hover:underline block mb-2">Forgot Password?</a>
            </div>
          </div>
        )}

        {activeTab === 'createAccount' && (
          <div className="mt-4 max-h-100">
            <div>
              <label>Email</label>
              <input label='Email' type="email" placeholder="Enter email" className="w-full border rounded-md p-2 mb-2" />
              <label>Password</label>
              <input type="password" placeholder="Create Password" className="w-full border rounded-md p-2 mb-2" />
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
                  <input type="text" placeholder="Zip/Postal" className="w-full border rounded-md p-2 mb-2"/>
                  </div>
                  <div>
                  <label> Phone Number</label>
                  <input type="tel" placeholder='Phone Number' className="w-full border rounded-md p-2 mb-2"/>
                  </div>
                </div>
                {/* Professional form content */}
                {/* Example: Professional type dropdown, first name, last name, zip code, contact number */}
              </div>
            )}
            <div>
              <button className="bg-blue-500 text-white rounded-md py-2 px-4 mb-2 hover:bg-blue-600">Continue</button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default SignInPopup;

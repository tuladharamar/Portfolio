
import { useState } from 'react';
import { FaEye } from 'react-icons/fa'

const ProfileForm = () => {
    const [password, setPassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        
    });

    return (
        <div className="space-y-8">
            {/* Name */}
            <div>
                <label className="block text-3xl font-medium mb-3">
                    Full Name
                </label>

                <input
                    type="text"
                    placeholder="What should we call you?"
                    className="w-full border-4 rounded-2xl p-4 text-2xl outline-none"

                />
            </div>

            {/* Email */}
            <div>
                <label className="block text-3xl font-medium mb-3">
                    Email
                </label>

                <input
                    type="email"
                    placeholder='Enter your email'
                    className="w-full border-4  rounded-2xl p-4 text-2xl outline-none"
                />

                
            </div>

            {/* Password */}
            <div>
                <label className="block text-3xl font-medium mb-3">
                    Enter Password
                </label>

                <div className="relative">
                    <input
                        type={password ? 'password':'text'}
                        placeholder="xxxxxxxx"
                        className="w-full border-4 rounded-2xl p-4 text-2xl"
                    />

                    <FaEye className="absolute right-5 top-1/2 -translate-y-1/2 text-3xl cursor-pointer" onClick={()=>setPassword((prev)=>!prev)} />
                </div>
            </div>

            {/* Confirm Password */}
            <div>
                <label className="block text-3xl font-medium mb-3">
                    Confirm Password
                </label>

                <div className="relative">
                    
                    <input
                        type={confirmPassword ? "Password":"text"}
                        placeholder="xxxxxxxx"
                        className="w-full border-4 rounded-2xl p-4 text-2xl"
                    />

                    <FaEye className="absolute right-5 top-1/2 -translate-y-1/2 text-3xl cursor-pointer" onClick={()=>setConfirmPassword((prev)=> !prev)} />
                </div>
            </div>

            <button className="w-full bg-black text-white py-5 rounded-3xl text-3xl font-medium hover:bg-gray-700 transition-colors duration-300 cursor-pointer">
                Update Profile
            </button>
        </div>
    )
}

export default ProfileForm

import { GoLock } from "react-icons/go";
import { CiUser } from "react-icons/ci";




function SignIn(){
    return(
       


    <div className="bg-blue-300 min-h-screen flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm p-8 flex flex-col gap-6">
            
            <h1 className="text-center text-3xl font-extrabold text-gray-900">Login</h1>

            
            <form action="#" className="flex flex-col gap-4">
            
                <div className="relative">
                    <input
                    type="text"
                    placeholder="Username"
                    className="w-full h-12 bg-gray-100 rounded-lg pl-4 pr-11 border border-gray-200 focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 outline-none text-gray-700 placeholder-gray-400"
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                    
                    <CiUser/>
                    </span>
                </div>

            
                <div className="relative">
                    <input
                    type="password"
                    placeholder="Password"
                    className="w-full h-12 bg-gray-100 rounded-lg pl-4 pr-11 border border-gray-200 focus:ring-2 focus:ring-indigo-200  focus:border-indigo-400 outline-none text-gray-700 placeholder-gray-400"
                    />
                    <span className="absolute inset-y-0 right-3 flex items-center text-gray-500">
                    <GoLock/>
                    </span>
                </div>

                
                <a href="#" className="text-sm text-center text-gray-500 hover:text-gray-700">
                    <span lang="en">? forget password </span>
                </a>

                <button
                    type="submit"
                    className="w-full h-12 rounded-lg font-bold text-white
                            bg-gradient-to-r from-indigo-500 to-indigo-400
                            hover:from-indigo-600 hover:to-indigo-500
                            shadow-md active:scale-[.98] transition">
                    Login
                </button>
            </form>
        </div>
    </div>
   
    );
}
export default SignIn;
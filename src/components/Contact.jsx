import React from 'react'
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "ebc6b188-f8e2-4adc-8cc4-11767e5f8fae");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Message sent");
            event.target.reset();
        } else {
            console.log("Error", data);
            toast.error("Error sending message");
            setResult("");
        }
    };


    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='text-center py-20 p-6 lg:px-32 w-full overflow-hidden' id='Contact'>
            <h1 className='text-2xl sm:text-4xl font-bold mb-2'>Contact <span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
            <p className='text-gray-500 mb-12 text-center max-w-80 mx-auto'>
                Ready to Make a Move? Let's Build Your Future Together
            </p>

            <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-gray-600 pt-2'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input
                            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:border-blue-500'
                            type='text' name='name'
                            placeholder='Enter your name' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input
                            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 focus:outline-none focus:border-blue-500'
                            type='email' name='email'
                            placeholder='Enter Email' required />
                    </div>
                </div>

                <div className='my-6 text-left'>
                    Message
                    <textarea name="Message" placeholder='Message' required
                        className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 focus:outline-none focus:border-blue-500 resize-none'
                    ></textarea>
                </div>

                <button className='bg-blue-600 text-white py-2 px-12 rounded mb-10 cursor-pointer hover:bg-blue-700'>
                    {result ? result : "Send Message"}
                </button>
            </form>

        </motion.div>
    )
}

export default Contact

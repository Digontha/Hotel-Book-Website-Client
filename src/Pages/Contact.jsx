
import Banner from '../Components/Banner';
import { AiFillPhone, AiOutlineMail } from 'react-icons/ai';
import swal from 'sweetalert';

const Contact = () => {
    
    return (
        <>
            <Banner></Banner>
            <section id="contact" className="p-10 bg-blue-200">
                <div className="container mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold underline">Contact Us</h2>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h3 className="text-xl mb-3  text-red-400 font-bold">Send us a Message</h3>
                            <form>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-800 font-semibold mb-1">Your Name</label>
                                    <input type="text" id="name" name="name" className="w-full px-3 py-2 border rounded-2xl" placeholder="Your Name" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-800 font-semibold mb-1">Your Email</label>
                                    <input type="email" id="email" name="email" className="w-full px-3 py-2 border rounded-2xl" placeholder="Your Email" required />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-gray-800 font-semibold mb-1">Your Message</label>
                                    <textarea id="message" name="message" rows="6" className="w-full px-3 py-2 border rounded-2xl" placeholder="Your Message" required />
                                </div>
                                <button onClick={() => swal("Send", "You message send successfully", "success")} type="submit" className="btn btn-primary ">Send Message</button>
                            </form>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold mb-3">Reach Out Directly</h3>
                            <p className="text-gray-800 mb-4 font-serif font-bold">
                                Feel free to reach out to us directly via phone or email. We're here to assist you with any inquiries you may have.
                            </p>
                            <p className="text-gray-800 text-lg font-bold flex items-center gap-2">
                                <AiFillPhone></AiFillPhone>  Phone: <a href="tel:+1234567890" className="text-blue-600">+1234567890</a>
                            </p>
                            <p className="text-gray-800 text-lg font-bold flex items-center gap-2">
                                <AiOutlineMail></AiOutlineMail> Email: <a href="mailto:info@example.com" className="text-blue-600">info@example.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
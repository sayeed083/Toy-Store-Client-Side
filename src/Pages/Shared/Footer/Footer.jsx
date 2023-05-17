import { FaTwitter, FaFacebook, FaYoutube, FaPhoneAlt, FaEnvelope, FaShoppingCart } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className="footer p-10 bg-fuchsia-300 text-base-content">
            <div>

                <img className="w-24" src="https://i.postimg.cc/Rh1DrFQG/jeep.png" alt="" />
                <p className="text-3xl font-serif">Tiny Drivers</p>
                <p className="text-center">Copyright © 2023 - All right reserved by Tiny Drivers</p>
            </div>
            <div>
                <span className="footer-title">Visit Our Shop</span>
                <p className="flex items-center text-lg"><FaShoppingCart className="mr-1"></FaShoppingCart> Shop no:10, Road no:1,
                    Block-A, Mirpur-2, Dhaka-1216 </p>
            </div>
            <div>
                <span className="footer-title">Contact Us</span>
                <p className="flex items-center text-lg"><FaPhoneAlt className="mr-1 "></FaPhoneAlt>+8801868376663</p>
                <p className="flex items-center text-lg"><FaEnvelope className="mr-1"></FaEnvelope>tinydrivers@info.com</p>
            </div>
            <div>
                <span className="footer-title">Follow Us</span>
                <div className="grid grid-flow-col gap-4">
                    <a><FaTwitter className="text-3xl"></FaTwitter></a>
                    <a><FaFacebook className="text-3xl"></FaFacebook></a>
                    <a><FaYoutube className="text-3xl"></FaYoutube></a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { Link } from 'react-router';
import { SlSocialFacebook, SlSocialLinkedin, SlSocialYoutube } from "react-icons/sl";
import Container from './ui/Container';

const Footer = () => {
    return (
        // <footer className="text-base-content py-15 border-t border-t-[#e1e1e1] ">
        //     <Container>
        //         <div className='footer sm:footer-horizontal grid-cols-3'>
        //           <div>
        //         <Link to="/" className="flex items-center gap-2">
        //                     <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
        //                         <LuGraduationCap className="h-5 w-5" />
        //                     </div>
        //                     <span className="text-xl font-bold">CourseMaster</span>
        //                 </Link>
        //         <p>
        //             Learn anytime, anywhere, and build skills that matter for your future.
        //         </p>
        //     </div>
        //     <nav>
        //         <h3 className="footer-title">Company</h3>
        //         <a className="link link-hover">About us</a>
        //         <a className="link link-hover">Contact</a>
        //         <a className="link link-hover">Jobs</a>
        //         <a className="link link-hover">Press kit</a>
        //     </nav>
        //     <nav>
        //         <h3 className="footer-title">Legal</h3>
        //         <a className="link link-hover">Terms of use</a>
        //         <a className="link link-hover">Privacy policy</a>
        //         <a className="link link-hover">Cookie policy</a>
        //     </nav>  
        //         </div>
        //     </Container>

        // </footer>

        <footer className="pt-15 border-t border-t-[#e1e1e1] ">
            <Container>
                <div className="">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* Brand */}
                        <div className="lg:col-span-2">
                            <Link to="/" className="flex items-center gap-2 mb-4">
                                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                                    <LuGraduationCap className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <span className="text-xl font-bold">CourseMaster</span>
                            </Link>
                            <p className="text-second text-sm mb-4 max-w-xs">
                                Empowering learners worldwide with high-quality courses from industry experts.
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="text-second hover:text-primary transition-colors">
                                    <SlSocialFacebook className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-second hover:text-primary transition-colors">
                                    <SlSocialLinkedin className="h-5 w-5" />
                                </a>
                                <a href="#" className="text-second hover:text-primary transition-colors">
                                    <SlSocialYoutube className="h-5 w-5" />
                                </a>
                            </div>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="font-semibold mb-4">Company</h4>
                            <ul className="space-y-2">
                                <li><Link to="/about" className="text-sm text-second hover:text-foreground transition-colors">About Us</Link></li>
                                <li><Link to="/careers" className="text-sm text-second hover:text-foreground transition-colors">Careers</Link></li>
                                <li><Link to="/blog" className="text-sm text-second hover:text-foreground transition-colors">Blog</Link></li>
                                <li><Link to="/press" className="text-sm text-second hover:text-foreground transition-colors">Press</Link></li>
                            </ul>
                        </div>

                        {/* Resources */}
                        <div>
                            <h4 className="font-semibold mb-4">Resources</h4>
                            <ul className="space-y-2">
                                <li><Link to="/help" className="text-sm text-second hover:text-foreground transition-colors">Help Center</Link></li>
                                <li><Link to="/community" className="text-sm text-second hover:text-foreground transition-colors">Community</Link></li>
                                <li><Link to="/teach" className="text-sm text-second hover:text-foreground transition-colors">Become an Instructor</Link></li>
                                <li><Link to="/affiliates" className="text-sm text-second hover:text-foreground transition-colors">Affiliates</Link></li>
                            </ul>
                        </div>

                        {/* Legal */}
                        <div>
                            <h4 className="font-semibold mb-4">Legal</h4>
                            <ul className="space-y-2">
                                <li><Link to="/privacy" className="text-sm text-second hover:text-foreground transition-colors">Privacy Policy</Link></li>
                                <li><Link to="/terms" className="text-sm text-second hover:text-foreground transition-colors">Terms of Service</Link></li>
                                <li><Link to="/cookies" className="text-sm text-second hover:text-foreground transition-colors">Cookie Policy</Link></li>
                                <li><Link to="/accessibility" className="text-sm text-second hover:text-foreground transition-colors">Accessibility</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-t-[#e1e1e1] mt-8 py-5 flex flex-col justify-center items-center gap-2">
                        <p className="text-sm text-second">
                            © {new Date().getFullYear()} <b>CourseMaster</b>. All rights reserved.
                        </p>
                        <span className='text-sm font-light'>Developed by Khayrul Islam</span>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
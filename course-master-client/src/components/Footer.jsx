import React from 'react';
import { LuGraduationCap } from 'react-icons/lu';
import { Link } from 'react-router';
import Container from './ui/Container';

const Footer = () => {
    return (
        <footer className="text-base-content py-15 border-t border-t-[#e1e1e1] ">
            <Container>
                <div className='footer sm:footer-horizontal grid-cols-3'>
                  <div>
                <Link to="/" className="flex items-center gap-2">
                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white">
                                <LuGraduationCap className="h-5 w-5" />
                            </div>
                            <span className="text-xl font-bold">CourseMaster</span>
                        </Link>
                <p>
                    Learn anytime, anywhere, and build skills that matter for your future.
                </p>
            </div>
            <nav>
                <h3 className="footer-title">Company</h3>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h3 className="footer-title">Legal</h3>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>  
                </div>
            </Container>
            
        </footer>
    );
};

export default Footer;
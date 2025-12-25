
import { useState } from 'react';
import { Link } from 'react-router';
import Button from './ui/Button';
import { LuGraduationCap, LuMenu, LuSearch } from 'react-icons/lu';
import Container from './ui/Container';
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    return (
        <section className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="container flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                            <LuGraduationCap className="h-5 w-5 text-primary-foreground" />
                        </div>
                        <span className="text-xl font-bold">CourseMaster</span>
                    </Link>


                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-4">
                        <Link to="/courses" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            Browse Courses
                        </Link>
                        <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            My Learning
                        </Link>
                        <Button variant="outline" asChild>
                            <Link to="/login">Log In</Link>
                        </Button>
                        <Button asChild>
                            <Link to="/signup">Sign Up</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <LuMenu className="h-6 w-6" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden border-t bg-background animate-fade-in">
                        <div className="container py-4 space-y-4">
                            <div className="relative">
                                <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <input
                                    placeholder="Search for courses..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="pl-10 bg-secondary border-0"
                                />
                            </div>
                            <div className="flex flex-col gap-2">
                                <Link
                                    to="/courses"
                                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Browse Courses
                                </Link>
                                <Link
                                    to="/dashboard"
                                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    My Learning
                                </Link>
                            </div>
                            <div className="flex gap-2 pt-2 border-t">
                                <Button variant="outline" className="flex-1" asChild>
                                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>Log In</Link>
                                </Button>
                                <Button className="flex-1" asChild>
                                    <Link to="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </Container>

        </section>
    );
}
export default Navbar;
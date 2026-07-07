import React from 'react';
import { FiPhone as PhoneIcon } from 'react-icons/fi';
import Container from './ui/Container';
import Breadcrumbs from './ui/Breadcrumbs';

const PageHeader = ({
    title = 'Explore everything we offer',
    description = 'Discover courses, resources, and support designed to help you grow with confidence.',
    badgeTitle = 'Need guidance?',
    badgeDescription = 'Our team is here to help you choose the right path.',
    icon,
    children,
    showBreadcrumbs = true,
}) => {
    const Icon = icon || PhoneIcon;

    return (
        <section className="relative overflow-hidden border-b border-slate-200 bg-linear-to-br from-slate-950 via-slate-900 to-primary/90 py-20">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
                <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
            </div>

            <Container>
                <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-2xl">
                        {showBreadcrumbs && <Breadcrumbs />}
                        <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                            {title}
                        </h1>
                        <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
                            {description}
                        </p>
                    </div>

                    {children ? (
                        <div className="w-full max-w-md">{children}</div>
                    ) : (
                        <div className="rounded-2xl border border-white/15 bg-white/10 p-5 shadow-xl shadow-black/10 backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className="rounded-xl bg-white/20 p-2 text-white">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold text-white">{badgeTitle}</p>
                                    <p className="text-sm text-slate-300">{badgeDescription}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
};

export default PageHeader;
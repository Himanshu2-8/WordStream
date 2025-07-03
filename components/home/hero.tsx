import React from 'react';
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Image from "next/image";

export const Hero = () => {
    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-900 to-indigo-900">
            <div className="absolute inset-0 before:absolute before:left-1/4 before:top-0 before:h-[600px] before:w-[600px] before:rounded-full before:bg-gradient-to-r before:from-violet-600/20 before:to-indigo-600/20 before:blur-3xl">
                <div className="container relative mx-auto h-full flex items-center px-4 py-16 md:py-24">
                    {/* Left Column - Text Content */}
                    <div className="w-full lg:w-1/2 pr-0 lg:pr-12 flex flex-col">
                        <div className="w-full text-left space-y-6">
                            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-tight">
                                Explore the world through{' '}
                                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
                                    Words
                                </span>
                            </h1>
                            
                            <p className="text-lg leading-relaxed text-gray-200/90 md:text-xl md:leading-8">
                                Discover insightful articles, thought-provoking stories, and expert perspectives on technologies, lifestyle, and innovation.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row gap-4 mt-8">
                                <Button className="rounded-full px-8 py-6 text-lg font-medium transition-all hover:scale-105">
                                    Start Reading
                                </Button>
                                <Button 
                                    variant={"outline"} 
                                    className="rounded-full px-8 py-6 text-lg font-medium border-2 border-white/20 hover:bg-white/10 hover:border-white/30 transition-all hover:scale-105"
                                >
                                    Explore Topics
                                </Button>
                            </div>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-3 gap-4 mt-12 text-white">
                            {[
                                { value: '1k+', label: 'Published Articles' },
                                { value: '50+', label: 'Expert Writers' },
                                { value: '10M', label: 'Monthly Readers' }
                            ].map((stat, index) => (
                                <div key={index} className="text-center p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                                    <div className="text-2xl font-bold text-primary">
                                        {stat.value}
                                    </div>
                                    <div className="text-xs text-gray-300 font-medium mt-1">
                                        {stat.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Image */}
                    <div className="hidden lg:flex w-1/2 pl-8 items-center justify-center">
                        <div className={cn(
                            "relative w-full h-[500px] rounded-2xl overflow-hidden",
                            "bg-gradient-to-br from-white/5 to-transparent",
                            "border border-white/10 backdrop-blur-sm",
                            "shadow-2xl shadow-indigo-500/10 hover:shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02]"
                        )}>
                            <Image 
                                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                alt="Blog showcase" 
                                fill 
                                className="object-cover transition-all duration-500 hover:scale-105"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

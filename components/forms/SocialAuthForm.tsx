"use client"

import React from 'react'
import {Button} from "@/components/ui/button";
import Image from "next/image";
import {signIn} from "next-auth/react";
import ROUTES from "@/constants/routes";
import {toast} from "@/hooks/use-toast";

const SocialAuthForm = () => {
    const buttonClass = "background-dark400_light900 body-medium text-dark200_light800 rounded-2 min-h-12 flex-1 px-4 py-3.5"
    const handleSignIn = async (provider: "github" | "google") => {
        try {
            await signIn(provider, {
                redirectTo: ROUTES.HOME,
                redirect: false,
            })
        } catch (error) {
            console.error(error)
            toast({
                title: "An error occurred",
                description:
                    error instanceof Error
                        ? error.message
                        : "Please try again",
                variant: "destructive",
            })
        }
    }


    return (
        <div className="mt-10 flex flex-wrap gap-2.5">
            <Button className={buttonClass} onClick={() => handleSignIn("github")}>
                <Image
                    src={"/icons/github.svg"}
                    alt={"Github logo"}
                    width={20}
                    height={20}
                    className="invert-colors object-contain mr-2.5"
                />
                <span>Log in with GitHub</span>
            </Button>
            <Button className={buttonClass} onClick={() => handleSignIn("google")}>
                <Image
                    src={"/icons/google.svg"}
                    alt={"Google logo"}
                    width={20}
                    height={20}
                    className="object-contain mr-2.5"
                />
                <span>Log in with Google</span>
            </Button>

        </div>
    )
}
export default SocialAuthForm

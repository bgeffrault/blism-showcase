"use client"

import { useState } from "react";

const email = "baptiste.geffrault@gmail.com";

export const Email = () => {
    const [copied, setCopied] = useState(false)
    const copyToClipboard = () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                // Success feedback (optional)
                setCopied(true)
            })
            .catch(err => {
                // Error handling
                console.error('Failed to copy email: ', err);
            });
    };

    return (
        <p className="text-gray-500 flex gap-2 justify-center relative" onClick={copyToClipboard}>
            ✉️
            <span
                className="font-semibold text-gray-600 underline-offset-4 transition-colors hover:underline relative"
            >
                {email}
                {copied && <span className="text-gray-400 absolute right-[50%] -top-6 translate-x-[50%]">Copié !</span>}
            </span>
        </p>
    )
}

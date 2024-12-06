import React from "react";
import { useCatContext } from "../provider";

export function ResetButton() {
    const { reset } = useCatContext();

    return (
        <button
            onClick={reset}
            className="px-4 py-2 bg-gray-200 text-gray-600 rounded hover:big-red-400"
            role="button"
            aria-label="Reset the cat"
            aria-live="polite"
        >
            reset
        </button>
    );
}
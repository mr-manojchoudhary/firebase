import React from "react";
import { getDatabase, ref, set } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

export default function Form() {
    const submitHandler = (e) => {
        e.preventDefault();

        // Collect form data
        const data = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
            contact: e.target.number.value,
        };

        // Generate a unique user ID
        const userId = uuidv4();

        // Log for debugging
        console.log("Generated User ID:", userId);

        // Save data to Firebase Realtime Database
        const db = getDatabase();
        set(ref(db, 'users/' + userId), data)
            .then(() => {
                console.log("Data saved successfully!");
                e.target.reset(); // Reset the form
            })
            .catch((error) => {
                console.error("Error saving data:", error);
            });
    };

    return (
        <div>
            {/* Form */}
            <div className="bg-white shadow-md rounded p-6 mb-8">
                <h1 className="text-2xl font-bold text-center mb-6">User Form</h1>
                <form onSubmit={submitHandler}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="number" className="block text-gray-700 font-bold mb-2">
                            Number
                        </label>
                        <input
                            type="number"
                            id="number"
                            name="number"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your number"
                            required
                        />
                    </div>
                    <button
                        type="submit" // Change type to "submit"
                        className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

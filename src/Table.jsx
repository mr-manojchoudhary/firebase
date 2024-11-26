import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

export default function Table() {
  const [userdata, setUserdata] = useState([]);
  const db = getDatabase();
  const displayData = () => {
    const starCountRef = ref(db, 'user/');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      const newData = Object.keys(data)
      const newArr = [];
      for (let d of newData) {
        newArr.push({ id: d, ...data[d] })
      }

      setUserdata(newArr)

    });
  }

  useEffect(
    () => {
      displayData()
    },
    []
  )

  return (
    <div className="text-red-500">
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-bold text-center mb-6">User Table</h1>



        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full text-left bg-white shadow-md rounded">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Password</th>
                <th className="px-4 py-2">Number</th>
              </tr>
            </thead>
            <tbody>
              {
                userdata.map(
                  (d, i) => {
                    return (
                      <tr key={i} className="text-center border-b">
                        <td className="border border-gray-200 px-4 py-2">{d.name}</td>
                        <td className="border border-gray-200 px-4 py-2">{d.email}</td>
                        <td className="border border-gray-200 px-4 py-2">{d.password}</td>
                        <td className="border border-gray-200 px-4 py-2">{d.contant}</td>
                      </tr>
                    )
                  }
                )
              }


            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
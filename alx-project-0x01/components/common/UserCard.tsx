import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  id,
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="mb-4">
        <h2 className="text-2xl font-semibold text-gray-800">{name}</h2>
        <p className="text-gray-500">@{username}</p>
      </div>

      {/* Contact Info */}
      <div className="space-y-2 text-gray-600">
        <p>
          <span className="font-medium text-gray-700">Email:</span> {email}
        </p>
        <p>
          <span className="font-medium text-gray-700">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-medium text-gray-700">Website:</span>{" "}
          <a
            href={`https://${website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            {website}
          </a>
        </p>
      </div>

      {/* Address */}
      <div className="mt-4 text-gray-600">
        <h3 className="font-semibold text-gray-800">Address</h3>
        <p>
          {address.street}, {address.suite}, {address.city} - {address.zipcode}
        </p>
        <p className="text-sm text-gray-500">
          Geo: {address.geo.lat}, {address.geo.lng}
        </p>
      </div>

      {/* Company */}
      <div className="mt-4 text-gray-600">
        <h3 className="font-semibold text-gray-800">Company</h3>
        <p>{company.name}</p>
        <p className="italic text-sm text-gray-500">&quot;{company.catchPhrase}&quot;</p>
        <p className="text-sm">{company.bs}</p>
      </div>

      {/* Footer */}
      <div className="mt-4 flex justify-end text-sm text-gray-500">
        <span>User ID: {id}</span>
      </div>
    </div>
  );
};



export default UserCard;

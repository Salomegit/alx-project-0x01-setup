import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";

const UserModal: React.FC<UserModalProps> = ({ isOpen, onClose, onSave }) => {
  const [formData, setFormData] = useState<UserData>({
    id: Date.now(),
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: { lat: "", lng: "" },
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
    },
  });

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    path?: string
  ) => {
    const { name, value } = e.target;

    if (path) {
      setFormData((prev) => {
        if (path === "address") {
          return {
            ...prev,
            address: {
              ...prev.address,
              [name]: value,
            },
          };
        } else if (path === "company") {
          return {
            ...prev,
            company: {
              ...prev.company,
              [name]: value,
            },
          };
        }
        return prev;
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className="border p-2 rounded"
            onChange={handleChange}
          />
          <input
            type="text"
            name="website"
            placeholder="Website"
            className="border p-2 rounded"
            onChange={handleChange}
          />

          {/* Address */}
          <input
            type="text"
            name="street"
            placeholder="Street"
            className="border p-2 rounded"
            onChange={(e) => handleChange(e, "address")}
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="border p-2 rounded"
            onChange={(e) => handleChange(e, "address")}
          />

          {/* Company */}
          <input
            type="text"
            name="name"
            placeholder="Company Name"
            className="border p-2 rounded"
            onChange={(e) => handleChange(e, "company")}
          />
        </div>

        <div className="flex justify-end mt-6 space-x-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
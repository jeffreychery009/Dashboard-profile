import { useState } from "react";
import { contacts } from "../data/DummyData";

const Contacts = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <div>
        <div className=" max-w-80 mb-10 ">
          <div className="bg-white shadow-md p-5 m-5 rounded-lg dark:bg-gray-900 ">
            <h1 className="font-bold md:text-2xl dark:text-gray-100">
              Contacts
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
              Welcome to your contacts
            </p>
          </div>
        </div>
        <div className="mb-20">
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value)}
            className=" ml-5 w-full max-w-sm px-4 py-2 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent  "
            placeholder="Search contact"
          />
        </div>

        <div className="ml-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {contacts
            .filter((contact) => {
              return search.toLowerCase() === ""
                ? contact
                : contact.first_name.toLowerCase().includes(search);
            })
            .map((contact) => (
              <div
                key={contact.id}
                className="bg-white p-4 shadow-md rounded-md dark:bg-gray-900"
              >
                <h1 className="text-xl font-medium dark:text-gray-100">
                  {contact.first_name} {contact.last_name}
                </h1>
                <p className="text-gray-400">{contact.email}</p>
                <p className="text-gray-400">{contact.phone_number}</p>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Contacts;

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const DeviceConfig = () => {
  const [large, setLarge] = useState(false);
  const [userData, setUserData] = useState([]);
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [userRole, setUserRole] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [repassword, setRepassword] = useState('');
  const [status, setStatus] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const openModel = () => {
    setLarge(!large);
    setEditMode(false);
    setSelectedUserId(null);
    resetFormFields();
  };

  const resetFormFields = () => {
    setName('');
    setAddress('');
    setUserRole('');
    setEmail('');
    setContact('');
    setPassword('');
    setRepassword('');
    setStatus('');
  };

  const validateName = (e) => setName(e.target.value);
  const validateAddress = (e) => setAddress(e.target.value);
  const validateUserRole = (e) => setUserRole(e.target.value);
  const validateEmail = (e) => setEmail(e.target.value);
  const validateContact = (e) => setContact(e.target.value);
  const validatePassword = (e) => setPassword(e.target.value);
  const validateRePassword = (e) => setRepassword(e.target.value);
  const validateStatus = (e) => setStatus(e.target.value);

  const addUser = () => {
    const newUser = {
      id: userData.length + 1,
      username: name,
      address: address,
      contact: contact,
      email: email,
      userrole: userRole,
      status: status
    };
    setUserData([...userData, newUser]);
    setLarge(false); // close the modal after adding user
    resetFormFields();
  };

  const editUser = () => {
    const updatedUsers = userData.map(user => {
      if (user.id === selectedUserId) {
        return {
          ...user,
          username: name,
          address: address,
          contact: contact,
          email: email,
          userrole: userRole,
          status: status
        };
      }
      return user;
    });
    setUserData(updatedUsers);
    setLarge(false); // close the modal after editing user
    setEditMode(false);
    setSelectedUserId(null);
    resetFormFields();
  };

  const deleteUser = (id) => {
    const updatedUsers = userData.filter(user => user.id !== id);
    setUserData(updatedUsers);
  };

  const openEditMode = (user) => {
    setName(user.username);
    setAddress(user.address);
    setUserRole(user.userrole);
    setEmail(user.email);
    setContact(user.contact);
    setStatus(user.status);
    setEditMode(true);
    setSelectedUserId(user.id);
    setLarge(true);
  };

  return (
    <div className="animated fadeIn mb-2 relative p-3">
      <div className="p-3 bg-white rounded-sm border-1 border-solid border-gray-400 z-10">
        <div className="flex justify-between mb-4">
          <button className="bg-blue-500 text-white py-1 px-4 rounded" onClick={openModel}>Device Configuration</button>
          {/* <form className="flex">
            <input
              type="search"
              placeholder="Search Dev"
              className="border border-gray-300 rounded-l px-2 py-1 focus:outline-none"
            // value
            // onChange
            />
            <button type="submit" className="bg-blue-500 text-white rounded-r px-4 py-1 focus:outline-none">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </form> */}
          
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">#</th>
                <th className="py-2 px-4 border-b">####</th>
                <th className="py-2 px-4 border-b">####</th>
                <th className="py-2 px-4 border-b">####</th>
                <th className="py-2 px-4 border-b">####</th>
                <th className="py-2 px-4 border-b">Status</th>
                <th className="py-2 px-4 border-b">Actions</th>
              </tr>
            </thead>
            <tbody>
              {userData.map((user, index) => (
                <tr key={user.id}>
                  <td className="py-2 px-4 border-b">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{user.username}</td>
                  <td className="py-2 px-4 border-b">{user.contact}</td>
                  <td className="py-2 px-4 border-b">{user.email}</td>
                  <td className="py-2 px-4 border-b">
                    <span className={`py-1 px-3 rounded-full text-white ${user.status === "Active" ? "bg-green-500" : "bg-red-500"}`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b">
                    <button className="bg-blue-500 text-white py-1 px-2 rounded mr-2" onClick={() => openEditMode(user)}>Edit</button>
                    <button className="bg-red-500 text-white py-1 px-2 rounded" onClick={() => deleteUser(user.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {large && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl">
              <div className="flex justify-between items-center p-4 border-b">
                <h5 className="text-lg font-semibold">{editMode ? 'Edit Device Config' : 'Add Device Config'}</h5>
                <button onClick={openModel}>&times;</button>
              </div>
              <div className="p-4">
                <form>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">#</label>
                      <input
                        type="text"
                        value={name}
                        onChange={validateName}
                        className="w-full p-2 border rounded"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">####</label>
                      <input
                        type="text"
                        value={address}
                        onChange={validateAddress}
                        className="w-full p-2 border rounded"
                        placeholder=""
                      />
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">####</label>
                      <input
                        type="text"
                        value={contact}
                        onChange={validateContact}
                        className="w-full p-2 border rounded"
                        placeholder=""
                      />
                    </div>
                    {!editMode && (
                      <>
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-1">####</label>
                          <input
                            type="password"
                            value={password}
                            onChange={validatePassword}
                            className="w-full p-2 border rounded"
                            placeholder=""
                          />
                        </div>
                        <div className="mb-4">
                          <label className="block text-sm font-medium mb-1">####</label>
                          <input
                            type="password"
                            value={repassword}
                            onChange={validateRePassword}
                            className="w-full p-2 border rounded"
                            placeholder=""
                          />
                        </div>
                      </>
                    )}
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-1">####</label>
                      <select
                        value={status}
                        onChange={validateStatus}
                        className="w-full p-2 border rounded"
                      >
                        <option value="">Select Status</option>
                        <option value="Active">Active</option>
                        <option value="Inactive">Inactive</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="flex justify-end p-4 border-t">
                <button className="bg-gray-500 text-white py-1 px-4 rounded mr-2" onClick={openModel}>Cancel</button>
                <button className="bg-blue-500 text-white py-1 px-4 rounded" onClick={editMode ? editUser : addUser}>
                  {editMode ? 'Save Changes' : 'Save'}
                </button>
              </div>
            </div>
          </div>

        )}
      </div>
    </div>
  );
};

export default DeviceConfig;

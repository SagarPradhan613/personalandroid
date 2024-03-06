'use client';
import React, { useState, useEffect, useContext } from "react";
import Navbar from './Components/Navbar/Navbar';
import Modal from './Components/Modal/Modal';
import Landing from './landing/page';

import { VerifyProvider } from "./dapp/context/VerifyContext";


export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    localStorage.setItem('modalClosed', 'true');
  };

  const [openPrivacy, setOpenPrivacy] = useState(false);

  useEffect(() => {
    if (openPrivacy) {
      setIsModalOpen(true); // Open the modal
    } else {
      setIsModalOpen(false);
    }
  }, [openPrivacy]);

  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleToggleModal = () => {
    setOpenPrivacy(!openPrivacy); // Toggle the privacy state
  };
  return (
    <>

      <VerifyProvider>
        <Modal isOpen={isModalOpen} handleToggleModal={handleToggleModal} onClose={handleCloseModal} setOpenPrivacy={setOpenPrivacy} openPrivacy={openPrivacy}></Modal>
        <Navbar setOpenPrivacy={setOpenPrivacy} handleToggleModal={handleToggleModal} />
        <Landing />
      </VerifyProvider>

    </>
  )
}

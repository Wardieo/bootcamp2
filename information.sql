-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 03, 2025 at 07:26 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `information`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `address` text NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `image`, `name`, `birthday`, `address`, `username`, `password`) VALUES
(1, '1748921705392.jpg', 'Edward ', '1999-06-11', 'windfields', 'edward', '$2b$10$LoNNWWrELleXI5iwgz1.4OONRzuXGMhzpzg0nGf2kLYqgu1D9xVrq'),
(2, '1748921971194.jpg', 'Bogart', '1995-06-12', 'windfields', 'bogaert123', '$2b$10$f56cua3SHnyHTxzvh.fTy.wkYP4GWyHxZd4qjtYj9tqHC3dLvlyR.'),
(3, '1748927010160.jpg', 'edward', '1999-06-11', 'windfields', 'edward123', '$2b$10$kKaGr.pnNyY4abirRDLeh.hCgDXltvOJD2Y.Y6FdAfxP0LbBxucgG'),
(4, '1748927161279.jpg', 'dexter', '2003-06-05', 'windfields', 'dexter', '$2b$10$HCW3i5B/sEe7M6cdczGXhucC/qw7.bvrDpVRnD25RJdyZQn7K.JC.'),
(5, '1748928322866.jpg', 'Inday Batutay', '1955-06-05', 'Tondo Manila City', 'inday', '$2b$10$NRFlXzefOgpvXwOn75ofIeDh4v6FONr1YJtHv/XmE/DtblI5hfD62');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

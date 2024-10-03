-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 18, 2021 at 08:18 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `testing`
--

-- --------------------------------------------------------

--
-- Table structure for table `registered_users`
--

CREATE TABLE `registered_users` (
  `full_name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `referral_code` varchar(200) NOT NULL,
  `referral_point` int(200) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `registered_users`
--

INSERT INTO `registered_users` (`full_name`, `username`, `email`, `password`, `referral_code`, `referral_point`) VALUES
('aaa', 'aaa', 'aaa@gmail.com', '$2y$10$RoRWWi8OcbqOXa3gsqScAefJqxMz0v1r9SydzvJetE/WzKynqhTLe', '92BE4690', 0),
('abc', 'abc', 'abc@gmail.com', '$2y$10$eNTOAlMpVRD8WQE4uWs66eih5Xf/5lHnI5qp.m9sJw6HzIdZNvsWe', 'DBA894F9', 20),
('tj', 'tj', 'tj@gmail.com', '$2y$10$aG/nMt6cgUdrASqJSgNsVuPAgSC9XFkC2zg8dfMShUPL//QhHUMli', '53357E78', 0),
('touseef', 'touseef', 'touseef@gmail.com', '$2y$10$phqcewHKDnaxektLaTiYOeVvRgsg2MnFCW/TEVdfbicV2UmPqOCny', '10922A46', 10),
('webdev', 'webdev', 'webdev@gmail.com', '$2y$10$GsG7wVVcNsEsqIhCj3JCjOxyaXq.MIq73USzmY1p2cC8rqGfgT7he', '84E4B10D', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registered_users`
--
ALTER TABLE `registered_users`
  ADD PRIMARY KEY (`email`),
  ADD UNIQUE KEY `username` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
